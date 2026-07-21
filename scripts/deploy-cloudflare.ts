#!/usr/bin/env bun

import { copyFile, lstat, mkdir, mkdtemp, readFile, rename, rm, stat, writeFile } from "node:fs/promises";
import { homedir, tmpdir } from "node:os";
import path from "node:path";

// Deployments intentionally follow the newest published CLI so the final
// contest release does not require another repository edit.
const PATHMX_RELEASE = "latest";
const WRANGLER_VERSION = "4.113.0";
const DEFAULT_ENTRY = "paths/index.path.md";
const DEFAULT_PROJECT = "pathmx-build-week-2026";
const DEFAULT_STAGE = ".pathmx-cloudflare";
const COMPATIBILITY_DATE = "2026-07-21";
const STAGE_MARKER = ".pathmx-cloudflare-stage.json";

type JsonRecord = Record<string, unknown>;

interface PathRecord {
  artifactsPath: string;
  outputPath: string;
  routesPath: string;
}

interface PathsManifest {
  defaultPath: string;
  paths: Record<string, PathRecord>;
  version: number;
}

interface ArtifactRecord {
  artifactPath: string;
  cachePolicy?: {
    mode?: string;
  };
}

interface ArtifactsManifest {
  artifacts: Record<string, ArtifactRecord>;
  version: number;
}

type RouteRecord =
  | { artifactPath: string; type: "document" }
  | { status: number; to: string; type: "redirect" };

interface RoutesManifest {
  routes: Record<string, RouteRecord>;
  version: number;
}

interface StageOptions {
  buildRoot: string;
  compatibilityDate?: string;
  customDomain?: string;
  projectName: string;
  stageRoot: string;
}

interface StageResult {
  artifactCount: number;
  pathId: string;
  redirectCount: number;
  stageRoot: string;
}

interface RenderedRedirects {
  content: string;
  ruleCount: number;
}

interface CliOptions {
  action: "bundle" | "deploy" | "dry-run";
  customDomain?: string;
  entry: string;
  help: boolean;
  projectName: string;
  stageRoot: string;
}

function usage(): string {
  return `Build and stage the PathMX submission for Cloudflare Workers Static Assets.

Usage:
  bun scripts/deploy-cloudflare.ts [options]

Options:
  --dry-run             Stage the bundle and run Wrangler's deployment dry run
  --deploy              Authenticate and deploy (the default only stages files)
  --domain <hostname>   Attach a Cloudflare custom domain during deployment
  --entry <source>      PathMX entry Source (default: ${DEFAULT_ENTRY})
  --project <name>      Worker name (default: ${DEFAULT_PROJECT})
  --out <directory>     Managed stage directory (default: ${DEFAULT_STAGE})
  -h, --help            Show this help
`;
}

function parseArgs(argv: string[]): CliOptions {
  const options: CliOptions = {
    action: "bundle",
    entry: DEFAULT_ENTRY,
    help: false,
    projectName: DEFAULT_PROJECT,
    stageRoot: DEFAULT_STAGE,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === "--deploy") {
      if (options.action === "dry-run") throw new Error("Choose either --deploy or --dry-run, not both.");
      options.action = "deploy";
    } else if (argument === "--dry-run") {
      if (options.action === "deploy") throw new Error("Choose either --deploy or --dry-run, not both.");
      options.action = "dry-run";
    } else if (argument === "-h" || argument === "--help") {
      options.help = true;
    } else if (argument === "--domain") {
      options.customDomain = requireValue(argv, ++index, argument);
    } else if (argument === "--entry") {
      options.entry = requireValue(argv, ++index, argument);
    } else if (argument === "--project") {
      options.projectName = requireValue(argv, ++index, argument);
    } else if (argument === "--out") {
      options.stageRoot = requireValue(argv, ++index, argument);
    } else {
      throw new Error(`Unknown option: ${argument}`);
    }
  }

  if (!/^[a-z0-9][a-z0-9-]{0,62}$/.test(options.projectName)) {
    throw new Error("The Worker project name must use lowercase letters, digits, and hyphens (63 characters max)." );
  }
  if (options.customDomain && !isHostname(options.customDomain)) {
    throw new Error("--domain expects a hostname such as build-week.pathmx.net, without a scheme or path.");
  }

  return options;
}

function requireValue(argv: string[], index: number, option: string): string {
  const value = argv[index];
  if (!value || value.startsWith("--")) throw new Error(`${option} requires a value.`);
  return value;
}

function isHostname(value: string): boolean {
  return value.length <= 253
    && value.includes(".")
    && value.split(".").every((label) => /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i.test(label));
}

async function readJson(filePath: string): Promise<unknown> {
  return JSON.parse(await readFile(filePath, "utf8"));
}

function asRecord(value: unknown, label: string): JsonRecord {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`${label} must be a JSON object.`);
  }
  return value as JsonRecord;
}

function assertRelativePath(value: unknown, label: string): string {
  if (typeof value !== "string" || value.length === 0 || value.includes("\0") || value.includes("\\")) {
    throw new Error(`${label} must be a non-empty POSIX relative path.`);
  }
  const normalized = path.posix.normalize(value);
  if (normalized !== value || normalized === ".." || normalized.startsWith("../") || normalized.startsWith("/")) {
    throw new Error(`${label} escapes the build directory: ${value}`);
  }
  return value;
}

function assertRoutePath(value: unknown, label: string): string {
  if (typeof value !== "string" || !value.startsWith("/") || /\s/.test(value)) {
    throw new Error(`${label} must be an absolute route without whitespace.`);
  }
  return value;
}

function inside(root: string, relativePath: string): string {
  const resolvedRoot = path.resolve(root);
  const resolved = path.resolve(resolvedRoot, ...relativePath.split("/"));
  if (resolved !== resolvedRoot && !resolved.startsWith(`${resolvedRoot}${path.sep}`)) {
    throw new Error(`Path escapes the expected directory: ${relativePath}`);
  }
  return resolved;
}

function parsePathsManifest(value: unknown): PathsManifest {
  const manifest = asRecord(value, "paths.json");
  const paths = asRecord(manifest.paths, "paths.json paths");
  if (manifest.version !== 1 || typeof manifest.defaultPath !== "string") {
    throw new Error("Unsupported paths.json manifest. Expected version 1 with a default Path.");
  }

  const parsedPaths: Record<string, PathRecord> = {};
  for (const [pathId, rawPath] of Object.entries(paths)) {
    const pathRecord = asRecord(rawPath, `Path ${pathId}`);
    parsedPaths[pathId] = {
      artifactsPath: assertRelativePath(pathRecord.artifactsPath, `Path ${pathId} artifactsPath`),
      outputPath: assertRelativePath(pathRecord.outputPath, `Path ${pathId} outputPath`),
      routesPath: assertRelativePath(pathRecord.routesPath, `Path ${pathId} routesPath`),
    };
  }

  return { defaultPath: manifest.defaultPath, paths: parsedPaths, version: 1 };
}

function parseArtifactsManifest(value: unknown): ArtifactsManifest {
  const manifest = asRecord(value, "artifacts.json");
  const artifacts = asRecord(manifest.artifacts, "artifacts.json artifacts");
  if (manifest.version !== 1) throw new Error("Unsupported artifacts.json manifest version.");

  const parsedArtifacts: Record<string, ArtifactRecord> = {};
  for (const [publicPath, rawArtifact] of Object.entries(artifacts)) {
    assertRoutePath(publicPath, `Artifact public path ${publicPath}`);
    const artifact = asRecord(rawArtifact, `Artifact ${publicPath}`);
    parsedArtifacts[publicPath] = {
      artifactPath: assertRelativePath(artifact.artifactPath, `Artifact ${publicPath} artifactPath`),
      cachePolicy: asOptionalCachePolicy(artifact.cachePolicy),
    };
  }

  return { artifacts: parsedArtifacts, version: 1 };
}

function asOptionalCachePolicy(value: unknown): ArtifactRecord["cachePolicy"] {
  if (value === undefined) return undefined;
  const policy = asRecord(value, "Artifact cachePolicy");
  return typeof policy.mode === "string" ? { mode: policy.mode } : undefined;
}

function parseRoutesManifest(value: unknown): RoutesManifest {
  const manifest = asRecord(value, "serve-routes.json");
  const routes = asRecord(manifest.routes, "serve-routes.json routes");
  if (manifest.version !== 1) throw new Error("Unsupported serve-routes.json manifest version.");

  const parsedRoutes: Record<string, RouteRecord> = {};
  for (const [routePath, rawRoute] of Object.entries(routes)) {
    assertRoutePath(routePath, `Route ${routePath}`);
    const route = asRecord(rawRoute, `Route ${routePath}`);
    if (route.type === "document") {
      parsedRoutes[routePath] = {
        artifactPath: assertRelativePath(route.artifactPath, `Route ${routePath} artifactPath`),
        type: "document",
      };
    } else if (route.type === "redirect") {
      const target = assertRoutePath(route.to, `Route ${routePath} redirect target`);
      if (typeof route.status !== "number" || ![301, 302, 303, 307, 308].includes(route.status)) {
        throw new Error(`Route ${routePath} uses an unsupported redirect status.`);
      }
      parsedRoutes[routePath] = { status: route.status, to: target, type: "redirect" };
    } else {
      throw new Error(`Route ${routePath} has unsupported type ${String(route.type)}.`);
    }
  }

  return { routes: parsedRoutes, version: 1 };
}

function renderRedirects(
  routes: RoutesManifest,
  artifacts: ArtifactsManifest,
  artifactPaths: Set<string>,
): RenderedRedirects {
  const lines = ["# Generated from PathMX route and artifact manifests. Do not edit this staged copy."];
  const rulesBySource = new Map<string, string>();
  const addRule = (source: string, rule: string): void => {
    const existing = rulesBySource.get(source);
    if (existing && existing !== rule) {
      throw new Error(`Conflicting Cloudflare rules for ${source}.`);
    }
    if (!existing) {
      rulesBySource.set(source, rule);
      lines.push(rule);
    }
  };

  for (const [routePath, route] of Object.entries(routes.routes)) {
    if (route.type === "document") {
      if (!artifactPaths.has(route.artifactPath)) {
        throw new Error(`Route ${routePath} references undeclared artifact ${route.artifactPath}.`);
      }
      addRule(routePath, `${routePath} /${route.artifactPath} 200`);
    } else {
      addRule(routePath, `${routePath} ${route.to} ${route.status}`);
    }
  }

  for (const [publicPath, artifact] of Object.entries(artifacts.artifacts)) {
    const artifactPublicPath = `/${artifact.artifactPath}`;
    if (publicPath !== artifactPublicPath) {
      addRule(publicPath, `${publicPath} ${artifactPublicPath} 200`);
    }
  }

  if (rulesBySource.size > 2_000) {
    throw new Error("The Path produces more than Cloudflare's 2,000 static redirect-rule limit.");
  }
  return { content: `${lines.join("\n")}\n`, ruleCount: rulesBySource.size };
}

function renderHeaders(artifacts: ArtifactsManifest): string {
  const hasImmutableAssets = Object.values(artifacts.artifacts).some(
    (artifact) => artifact.cachePolicy?.mode === "immutable" && artifact.artifactPath.startsWith("assets/"),
  );
  const rules = [
    "# Generated security headers. CSP is intentionally omitted because current PathMX builds use inline styles and scripts.",
    "/*",
    "  X-Content-Type-Options: nosniff",
    "  Referrer-Policy: strict-origin-when-cross-origin",
    "  Permissions-Policy: camera=(), geolocation=(), microphone=()",
    "  X-Frame-Options: SAMEORIGIN",
    "  Strict-Transport-Security: max-age=31536000",
  ];
  if (hasImmutableAssets) {
    rules.push("", "/assets/*", "  Cache-Control: public, max-age=31536000, immutable");
  }
  return `${rules.join("\n")}\n`;
}

function renderWranglerConfig(options: StageOptions): string {
  const config: JsonRecord = {
    $schema: "https://raw.githubusercontent.com/cloudflare/workers-sdk/main/packages/wrangler/config-schema.json",
    name: options.projectName,
    compatibility_date: options.compatibilityDate ?? COMPATIBILITY_DATE,
    workers_dev: true,
    preview_urls: true,
    assets: {
      directory: "./assets",
      html_handling: "none",
      not_found_handling: "none",
    },
  };
  if (options.customDomain) {
    config.routes = [{ custom_domain: true, pattern: options.customDomain }];
  }
  return `${JSON.stringify(config, null, 2)}\n`;
}

async function copyDeclaredFile(sourceRoot: string, destinationRoot: string, relativePath: string): Promise<void> {
  const source = inside(sourceRoot, relativePath);
  const sourceInfo = await lstat(source);
  if (!sourceInfo.isFile() || sourceInfo.isSymbolicLink()) {
    throw new Error(`Declared artifact is not a regular file: ${relativePath}`);
  }
  const destination = inside(destinationRoot, relativePath);
  await mkdir(path.dirname(destination), { recursive: true });
  await copyFile(source, destination);
}

export async function stagePathMXBuild(options: StageOptions): Promise<StageResult> {
  const buildRoot = path.resolve(options.buildRoot);
  const stageRoot = path.resolve(options.stageRoot);
  const pathsManifest = parsePathsManifest(await readJson(path.join(buildRoot, "paths.json")));
  const pathId = pathsManifest.defaultPath;
  const selectedPath = pathsManifest.paths[pathId];
  if (!selectedPath) throw new Error(`Default Path ${pathId} is missing from paths.json.`);

  const selectedBuildRoot = inside(buildRoot, selectedPath.outputPath);
  const artifactsPath = inside(buildRoot, selectedPath.artifactsPath);
  const routesPath = inside(buildRoot, selectedPath.routesPath);
  const artifacts = parseArtifactsManifest(await readJson(artifactsPath));
  const routes = parseRoutesManifest(await readJson(routesPath));
  const assetRoot = path.join(stageRoot, "assets");
  await mkdir(assetRoot, { recursive: true });

  const artifactPaths = new Set(Object.values(artifacts.artifacts).map((artifact) => artifact.artifactPath));
  artifactPaths.add(path.relative(selectedBuildRoot, artifactsPath).split(path.sep).join("/"));
  artifactPaths.add(path.relative(selectedBuildRoot, routesPath).split(path.sep).join("/"));

  for (const artifactPath of [...artifactPaths].sort()) {
    const safeArtifactPath = assertRelativePath(artifactPath, "Declared artifact path");
    await copyDeclaredFile(selectedBuildRoot, assetRoot, safeArtifactPath);
  }

  const renderedRedirects = renderRedirects(routes, artifacts, artifactPaths);
  await writeFile(path.join(assetRoot, "_redirects"), renderedRedirects.content);
  await writeFile(path.join(assetRoot, "_headers"), renderHeaders(artifacts));
  await writeFile(path.join(stageRoot, "wrangler.jsonc"), renderWranglerConfig(options));
  await writeFile(path.join(stageRoot, STAGE_MARKER), `${JSON.stringify({ type: "pathmx-cloudflare-stage", version: 1 }, null, 2)}\n`);

  return {
    artifactCount: artifactPaths.size,
    pathId,
    redirectCount: renderedRedirects.ruleCount,
    stageRoot,
  };
}

export function createPathMXBuildCommand(entry: string, buildRoot: string): string[] {
  return [
    "bunx",
    `@fellowhumans/pathmx@${PATHMX_RELEASE}`,
    "build",
    entry,
    "--player",
    "-o",
    buildRoot,
    "--clean",
  ];
}

function assertSafeStageRoot(stageRoot: string, repositoryRoot: string): void {
  const resolved = path.resolve(stageRoot);
  const forbidden = new Set([path.parse(resolved).root, path.resolve(repositoryRoot), path.resolve(homedir())]);
  if (forbidden.has(resolved)) throw new Error(`Refusing to use unsafe stage directory: ${resolved}`);
}

async function assertManagedOrMissing(stageRoot: string): Promise<void> {
  try {
    const info = await stat(stageRoot);
    if (!info.isDirectory()) throw new Error(`Stage path exists and is not a directory: ${stageRoot}`);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return;
    throw error;
  }

  try {
    const marker = asRecord(await readJson(path.join(stageRoot, STAGE_MARKER)), "Stage marker");
    if (marker.type !== "pathmx-cloudflare-stage" || marker.version !== 1) throw new Error("Unexpected stage marker.");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      throw new Error(`Refusing to replace unowned directory ${stageRoot}; remove it or choose another --out path.`);
    }
    throw error;
  }
}

async function replaceStage(stagedCandidate: string, stageRoot: string): Promise<void> {
  await assertManagedOrMissing(stageRoot);
  await rm(stageRoot, { force: true, recursive: true });
  await rename(stagedCandidate, stageRoot);
}

async function run(command: string[], cwd: string): Promise<void> {
  console.log(`\n$ ${command.join(" ")}`);
  const process = Bun.spawn(command, { cwd, stdin: "inherit", stdout: "inherit", stderr: "inherit" });
  const exitCode = await process.exited;
  if (exitCode !== 0) throw new Error(`Command exited with status ${exitCode}: ${command.join(" ")}`);
}

async function main(): Promise<void> {
  const options = parseArgs(Bun.argv.slice(2));
  if (options.help) {
    console.log(usage());
    return;
  }

  const repositoryRoot = process.cwd();
  const entry = path.resolve(repositoryRoot, options.entry);
  const stageRoot = path.resolve(repositoryRoot, options.stageRoot);
  assertSafeStageRoot(stageRoot, repositoryRoot);
  const temporaryRoot = await mkdtemp(path.join(tmpdir(), "pathmx-cloudflare-"));
  const buildRoot = path.join(temporaryRoot, "build");
  await mkdir(path.dirname(stageRoot), { recursive: true });
  const stagedCandidate = `${stageRoot}.staging-${process.pid}-${Date.now()}`;

  try {
    await run(createPathMXBuildCommand(entry, buildRoot), repositoryRoot);
    const result = await stagePathMXBuild({
      buildRoot,
      customDomain: options.customDomain,
      projectName: options.projectName,
      stageRoot: stagedCandidate,
    });
    await replaceStage(stagedCandidate, stageRoot);
    console.log(`\nStaged ${result.artifactCount} files and ${result.redirectCount} PathMX routes at ${stageRoot}`);

    const wrangler = ["bunx", `wrangler@${WRANGLER_VERSION}`];
    const configPath = path.join(stageRoot, "wrangler.jsonc");
    if (options.action === "dry-run") {
      await run([...wrangler, "deploy", "--dry-run", "--config", configPath], repositoryRoot);
    } else if (options.action === "deploy") {
      await run([...wrangler, "whoami"], repositoryRoot);
      await run([...wrangler, "deploy", "--config", configPath], repositoryRoot);
    } else {
      console.log("Bundle only: no Cloudflare state was changed. Use --dry-run to validate or --deploy to publish.");
    }
  } finally {
    await rm(stagedCandidate, { force: true, recursive: true });
    await rm(temporaryRoot, { force: true, recursive: true });
  }
}

if (import.meta.main) {
  main().catch((error) => {
    console.error(`\nCloudflare release failed: ${error instanceof Error ? error.message : String(error)}`);
    process.exitCode = 1;
  });
}
