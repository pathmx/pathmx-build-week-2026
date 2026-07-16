---
type: task
status: done
owner: Mark
reviewer: Andrew
date: 2026-07-15
due: 2026-07-16
related:
  - ./index.tasks.md
  - ../index.path.md
---

# Provision The Build Week Space On Muthurd

## Outcome

Give Andrew a current working copy of this repository on `muthurd` and serve
its root Path through the existing `pathmx.net` Spaces gateway.

---

## Result

The clean `main` checkout now lives at
`/Users/muthur6000/sources/pathmx-build-week-2026` and is registered as the
`build-week` Space. Its root Path is live at
[build-week.pathmx.net](https://build-week.pathmx.net/).

---

## Done When

- The remote checkout follows `origin/main` and has working GitHub access.
- The installed PathMX CLI is current and the repository builds successfully.
- The repository is registered with the existing Spaces gateway under an
  agreed `pathmx.net` route.
- The public route renders the root Path without exposing write or control
  endpoints.
- Remote versions, commands, route, and verification evidence are recorded.

---

## Activity

- **2026-07-15:** Mark claimed remote provisioning. Scheduled Git
  synchronization is deliberately tracked separately so serving does not
  silently introduce an unsafe two-writer workflow.
- **2026-07-15:** Inventoried `muthurd.local` (Apple silicon, macOS 26.5.1).
  Preserved the existing user launch agents for the loopback Spaces gateway
  and `pathmx-net-local` Cloudflare Tunnel; neither service was replaced.
- **2026-07-15:** Updated the remote PathMX CLI from 0.1.7 to 0.1.9. A clean
  checkout at published commit `73766b4` built 122 artifacts with no errors;
  the released CLI reported three existing Tufte theme-field warnings.
- **2026-07-15:** Updated the remote Codex app from 26.616.41845 to
  26.707.72221 and its bundled CLI from 0.142.0-alpha.6 to 0.144.2 through the
  already-downloaded Sparkle update, then confirmed the updated app process
  was running.
- **2026-07-15:** Registered `paths/index.path.md` as route `build-week`. The
  public request followed the root redirect and returned HTTP 200 with the
  title “PathMX Build Week 2026”; the gateway reported the Space `ready` and
  `watching`.
- **2026-07-15:** Verified the public gateway boundary: a PathMX control URL
  returned 404 and a POST returned 405 with the read-only response. Interactive
  visual review was not run; the deployed HTML, title, gateway state, and
  access guards were checked directly.
- **2026-07-15:** HTTPS fetches from GitHub work, but the machine has no GitHub
  SSH key or configured credential helper for pushing. No credential was
  invented or stored; push authority remains in the linked sync-design task.
