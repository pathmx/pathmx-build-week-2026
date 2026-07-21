import { afterEach, describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

import { stagePathMXBuild } from "./deploy-cloudflare";

const temporaryRoots: string[] = [];

afterEach(async () => {
  await Promise.all(temporaryRoots.splice(0).map((root) => rm(root, { force: true, recursive: true })));
});

async function fixture(): Promise<{ buildRoot: string; root: string; stageRoot: string }> {
  const root = await mkdtemp(path.join(tmpdir(), "pathmx-cloudflare-test-"));
  temporaryRoots.push(root);
  const buildRoot = path.join(root, "build");
  const outputRoot = path.join(buildRoot, "index.path");
  const stageRoot = path.join(root, "stage");
  await mkdir(path.join(outputRoot, "assets"), { recursive: true });
  await writeFile(path.join(buildRoot, "paths.json"), JSON.stringify({
    defaultPath: "index.path",
    paths: {
      "index.path": {
        artifactsPath: "index.path/artifacts.json",
        outputPath: "index.path",
        routesPath: "index.path/serve-routes.json",
      },
    },
    version: 1,
  }));
  await writeFile(path.join(outputRoot, "index.path.html"), "<h1>Learning Labs</h1>");
  await writeFile(path.join(outputRoot, "index.path.md"), "# Learning Labs\n");
  await writeFile(path.join(outputRoot, "assets/runtime.1234.js"), "export {};\n");
  await writeFile(path.join(outputRoot, "stale.txt"), "must not deploy\n");
  await writeFile(path.join(outputRoot, "artifacts.json"), JSON.stringify({
    artifacts: {
      "/assets/runtime.1234.js": {
        artifactPath: "assets/runtime.1234.js",
        cachePolicy: { mode: "immutable" },
      },
      "/index.path.html": { artifactPath: "index.path.html", cachePolicy: { mode: "revalidate" } },
      "/index.path.md": { artifactPath: "index.path.md", cachePolicy: { mode: "revalidate" } },
      "/serve-routes.json": { artifactPath: "serve-routes.json", cachePolicy: { mode: "revalidate" } },
    },
    version: 1,
  }));
  await writeFile(path.join(outputRoot, "serve-routes.json"), JSON.stringify({
    routes: {
      "/": { status: 308, to: "/index.path", type: "redirect" },
      "/index.path": { artifactPath: "index.path.html", type: "document" },
      "/index.path/": { status: 308, to: "/index.path", type: "redirect" },
    },
    version: 1,
  }));
  return { buildRoot, root, stageRoot };
}

describe("stagePathMXBuild", () => {
  test("stages only declared artifacts and Cloudflare routing metadata", async () => {
    const { buildRoot, stageRoot } = await fixture();
    const result = await stagePathMXBuild({
      buildRoot,
      customDomain: "build-week.pathmx.net",
      projectName: "pathmx-build-week-2026",
      stageRoot,
    });

    expect(result).toMatchObject({ artifactCount: 5, pathId: "index.path", redirectCount: 3 });
    expect(await readFile(path.join(stageRoot, "assets/index.path.html"), "utf8")).toContain("Learning Labs");
    expect(await Bun.file(path.join(stageRoot, "assets/stale.txt")).exists()).toBe(false);
    expect(await readFile(path.join(stageRoot, "assets/_redirects"), "utf8")).toContain(
      "/index.path /index.path.html 200",
    );
    expect(await readFile(path.join(stageRoot, "assets/_headers"), "utf8")).toContain(
      "Cache-Control: public, max-age=31536000, immutable",
    );
    const config = JSON.parse(await readFile(path.join(stageRoot, "wrangler.jsonc"), "utf8"));
    expect(config.assets).toEqual({ directory: "./assets", html_handling: "none", not_found_handling: "none" });
    expect(config.routes).toEqual([{ custom_domain: true, pattern: "build-week.pathmx.net" }]);
  });

  test("rejects artifact paths that escape the selected build", async () => {
    const { buildRoot, stageRoot } = await fixture();
    const manifestPath = path.join(buildRoot, "index.path/artifacts.json");
    const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
    manifest.artifacts["/escape"] = { artifactPath: "../secret.txt" };
    await writeFile(manifestPath, JSON.stringify(manifest));

    await expect(stagePathMXBuild({ buildRoot, projectName: "safe-site", stageRoot })).rejects.toThrow(
      "escapes the build directory",
    );
  });
});

