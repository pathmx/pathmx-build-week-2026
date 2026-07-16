# PathMX Tooling And Verification

Use this reference before running PathMX commands or choosing verification.

## Contents

- Choose the CLI
- Build and preview safely
- Match checks to risk
- Diagnose common failures
- Report results

## Choose The CLI

Prefer the repository's pinned command, package script, or documented wrapper.
Check `pathmx --version` and local configuration before relying on a recent
capability. Do not update PathMX or rewrite project config unless the task
authorizes it.

When a project has no pinned command, the public package provides `pathmx` and
the equivalent `pmx` alias:

```sh
bun add -g @fellowhumans/pathmx@latest
pathmx --version
```

Use a one-off runner when installation is undesirable:

```sh
bunx @fellowhumans/pathmx@latest --version
bunx @fellowhumans/pathmx@latest build
```

Common commands:

```sh
pathmx init                  # create or migrate config; run intentionally
pathmx build                 # emit build artifacts
pathmx dev                   # build, serve, watch, and reload content
pathmx play --open           # open the Player and watch sources
pathmx serve                 # serve a watched PathMX bundle
pathmx mv old.md new.md      # move a Source and rewrite backlinks
pathmx rm unused.md          # delete a Source and unlink backlinks
pathmx <command> --help      # inspect version-specific options
```

Use local help as the contract when this reference and an installed version
differ.

## Build And Preview Safely

Do not overwrite output owned by a running server. For a focused diagnostic
build, name the Source under review and choose a scratch directory outside the
configured live output:

```sh
pathmx build paths/demos/example.demo.md -o .pathmx-check --clean
```

Omit the entry only when intentionally verifying the configured or conventional
default Path. If the command yields after printing the PathMX ASCII-art startup
logo, the CLI has launched but the build has not necessarily finished. Keep
polling the same process until it exits. Count the build as passed only when all
three postconditions hold:

1. the process exits successfully;
2. its summary reports at least one built Path; and
3. the expected Source appears in the relevant scratch `sources.json`.

The startup logo, a quiet first chunk, or an empty output directory is
incomplete evidence, not a successful build.

Check repository ignore rules before leaving scratch output in the worktree,
and remove only output created by your own verification.

Before using a repository wrapper, inspect what it regenerates. A combined
Runtime/Player check may update tracked packaged assets before running tests.
Compare `git status` before and after, and retain those generated changes only
when the task owns the corresponding source change.

For interactive or presentation changes, preview the actual route with the
project's normal command. `pathmx play --print-url` can provide a scriptable
Player URL on versions that support it. Reuse an existing server only when its
ownership and checkout are clear; never stop an unknown listener merely to
produce a preview.

When matching a source to a Player route, read the running server's
`sources.json` and use the route reported for the exact source path. Do not
guess routes by stripping `.md`.

After changing browser code, Runtime CSS, or packaged assets, explicitly reload
the review tab before acceptance testing. Watcher health alone does not prove
that the tab replaced its previously loaded module.

## Match Checks To Risk

For prose or metadata edits:

- inspect the Markdown diff;
- verify relative links and source roles;
- build when syntax, config, routes, or generated output could change.

For structural or graph edits:

- run a scratch build;
- inspect warnings, rewritten links, routes, and affected indexes/manifests;
- use `pathmx mv`/`rm` when graph-aware rewriting is required.

For Literate Components:

- confirm definitions resolve and custom tags expand;
- inspect build diagnostics for duplicate names, missing resources, or invalid
  state domains;
- turn an applicable experience brief into rendered scenarios for arrival,
  meaningful modes, visible consequences, reset, re-entry, protected
  invariants, and the declared degradation order;
- test pointer, keyboard, touch, narrow-width, and reduced-motion behavior;
- enter and leave the component Beat in Play;
- confirm continuous work stops off-Beat and cleanup survives live refresh;
- exercise loading, dependency failure, and fallback UI for async components;
- verify Context Actions retain order, disabled boundaries, and cleanup.

For version-sensitive Actions, generated media, annotations, or plugins:

- verify the installed version and configuration first;
- exercise the canonical browser/server path, not only rendered HTML;
- confirm persisted output remains readable Source after reload when
  persistence is part of the accepted contract.

For question submission and Play navigation, follow
`question-play-verification.md`; the canonical browser path can write real
`response` and `submission` data back to the Source.

## Diagnose Common Failures

- **Wrong Source role:** check the final filename hint; frontmatter `type` does
  not override the build type.
- **Broken Source or asset link:** resolve it from the current Source, including
  query strings and fragments.
- **Unknown directive:** confirm the plugin is enabled and copy its installed
  authoring form; do not invent a fallback syntax.
- **Weak Play pacing:** split or merge `---` Blocks; expose meaningful stages as
  Beats or component state.
- **Component not found:** link/import the definition Source and verify its
  resolved stable name.
- **Component script failure:** remove page-level scanning, verify selectors,
  and register owned cleanup.
- **Stale preview:** confirm the watched checkout and output directory, then use
  a scratch build before restarting a known server.
- **Capability mismatch:** report the installed version and missing contract;
  do not add a source-level polyfill for a runtime or Host feature.

## Report Results

Report:

- changed Source and skill files;
- commands and checks run, with results;
- inspected Player routes when visual/interactive behavior matters;
- build postconditions: completed exit, built-Path count, and expected Source
  presence in scratch output;
- any response data written during browser verification and how it was kept or
  removed;
- skipped checks and why;
- relevant PathMX version or configuration assumptions.
