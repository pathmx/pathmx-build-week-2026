# PathMX Tooling And Verification

Use this reference before running PathMX commands, previewing output, or
deciding how much verification an authoring change needs.

## Public CLI

Install the public CLI with with Bun (install bun first, if needed):

```sh
bun add -g @fellowhumans/pathmx@latest
```

Make sure the CLI is on the latest version and installed in the user's PATH:

```sh
pathmx --version # check existing version
pathmx self-update # update to latest version
pathmx --version # check updated version
```

---

PathMX commands:

```sh
pathmx play # start a playable server (default to this for most projects)

pathmx init # initialize a new PathMX project if it needs config, don't do unless needed
pathmx build # build the deployable PathMX project into a .pathmx directory
pathmx dev # start a runtime-only dev server

pathmx --help # show all commands and options
```

The shorter alias is equivalent:

```sh
pmx play
```

For one-off usage without a global install:

```sh
bunx @fellowhumans/pathmx build
bunx @fellowhumans/pathmx play
```

## Source Checkout Verification

Inside this PathMX source checkout, use the workspace CLI directly:

```sh
bun run packages/cli/src/bin.ts build -o .pathmx-check
```

Use `.pathmx-check` for scratch verification. This may be useful for custom plugins or literate tag development. Do not use the default `.pathmx` directory for checks, because a running `pathmx dev` or `pathmx play` server may own it.

## Preview Loop

Use an already-running local PathMX server when it is clearly from the current
checkout and safe to reuse. In this workspace, the usual server is on port
`3000` from a tmux pane running one of:

```sh
bun run packages/cli/src/bin.ts dev --perf
bun run packages/cli/src/bin.ts play --perf
```

## Common Checks

For content-only changes no build is usaully needed unless the user describes an issue/problem with the output.

In that case, diagnose the issue with a scratch build:

```sh
bun run packages/cli/src/bin.ts build -o .pathmx-check
```

For component-heavy demos, also preview the relevant route and check that:

- component definitions resolve;
- custom tags render in the demo source;
- interactive controls work with pointer and keyboard;
- text does not overflow or overlap;
- play mode can enter and step through useful blocks/beats.

For generated-image, include, style, or asset changes, check that paths are
relative to the source file and that missing files produce clear diagnostics.

## Failure Triage

- Broken source link: fix the relative link from the current source, not from
  the repo root unless the syntax explicitly requires root behavior.
- Unexpected source role: check the filename suffix before changing
  frontmatter.
- Weak play pacing: split or merge `---` blocks so each block has one clear
  review or teaching purpose.
- Missing block label: add a heading or block `title`.
- Component not found: ensure the demo links the `.components.md` source and
  that the component name resolves as expected.
- Component JS failure: replace page-level DOM scans with instance locals and
  add `ctx.cleanup` for long-lived effects.
- Live preview stale: run a scratch build first; restart the dev/play server
  only when watcher reload is not enough.

## Reporting

When finishing an authoring change, report:

- changed source or skill files;
- verification command and result;
- any checks that could not run, with the reason.
- **Important**: Prefer the PathMX Player route for authored `paths/**/*.md`
  review. Probe `http://127.0.0.1:3001/sources.json`, match the source `path`
  to its reported `route`, and use
  `https://play.pathmx.dev<route>` when that exact tunnel URL is reachable.
  Fall back to `http://127.0.0.1:3001<route>`, then to the absolute local
  Markdown link. Keep the local link when citing exact source lines.
