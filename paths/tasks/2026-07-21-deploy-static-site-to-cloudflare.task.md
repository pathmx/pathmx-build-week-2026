---
type: task
status: in-progress
owner: Mark
date: 2026-07-21
related:
  - ../index.path.md
---

# Deploy The Static Site To Cloudflare

## Outcome

Add a small, repository-local release utility that builds the submission Path,
stages only declared artifacts, preserves PathMX's clean routes, and can deploy
the result through Cloudflare Workers Static Assets.

---

## Result

`scripts/deploy-cloudflare.ts` now builds the latest published PathMX CLI into
scratch space, copies only manifest-declared files, emits native Cloudflare
route and header rules, and writes a static-only Wrangler project. The default
command only stages the bundle; `--dry-run` validates it and `--deploy` first
checks Wrangler authentication before publishing. Operator usage stays in the
script's `--help` output rather than the judge-facing README.

---

## Done When

- The default command creates a reviewable static bundle without changing any
  Cloudflare deployment.
- An explicit deploy flag authenticates with Wrangler before publishing.
- Clean PathMX routes are represented through Cloudflare-native redirects and
  the bundle carries conservative security headers.
- Focused tests and a real submission build verify the staging behavior.
- The script documents the bundle, dry-run, deployment, and custom-domain
  commands needed for the contest handoff without distracting the public
  project overview.
- The final submission freezes both deployment and judge reproduction on the
  same exact PathMX release.

---

## Activity

- **2026-07-21:** Mark claimed the public-hosting safety pass. Cloudflare's
  current guidance favors Workers Static Assets for new static projects, so
  the implementation will target Workers while retaining native `_redirects`
  and `_headers` files.
- **2026-07-21:** Added the bundle-first utility and focused tests. A real
  submission build staged 371 declared files and 229 route rules; Wrangler
  4.113.0 accepted all routes and both header rules in a deployment dry run.
  Local Wrangler verification returned `308` for `/`, the expected titled HTML
  and security headers for `/index.path`, and `404` for an unknown route.
  The staged tree contains no symlinks, no files near the 25 MiB asset limit,
  and no common API-token or private-key signatures in its Markdown/text.
- **2026-07-21:** Reopened for the final release workflow: follow the newest
  published PathMX CLI at deploy time and keep operator instructions out of
  the judge-facing README.
- **2026-07-21:** Switched the deployment build to
  `@fellowhumans/pathmx@latest`, removed the Cloudflare operator section from
  README, and retained the verified `0.1.25` commands for judges reproducing
  the current submission. Both focused tests and a real latest-release bundle
  passed; no Cloudflare state changed.
- **2026-07-21:** Reopened until the submission freeze so the judge-facing
  reproduction commands follow the same latest release as deployment.
- **2026-07-21:** Updated README's build and Play commands to `@latest` during
  active release cutting. Keep this task open until both surfaces are pinned
  to the release accepted at the 7:30 PM submission freeze.
