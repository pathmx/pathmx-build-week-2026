---
type: task
status: done
owner: Mark
reviewer: Andrew
date: 2026-07-15
due: 2026-07-15
related:
  - ./index.tasks.md
  - ./2026-07-15-provision-muthurd-space.task.md
  - ../work-log/changes.log.md
---

# Update The Muthurd Gateway To PathMX 0.1.10

## Outcome

Apply the current PathMX CLI release to `muthurd` and make the Build Week Space
serve its bundled Player without disrupting the existing Cloudflare tunnel.

---

## Result

`muthurd` now runs PathMX 0.1.10. The replacement Spaces gateway serves the
new bundled Player at [build-week.pathmx.net](https://build-week.pathmx.net/),
and the existing Cloudflare tunnel was not restarted.

---

## Done When

- `muthurd` reports PathMX 0.1.10.
- Only the `net.pathmx.spaces-gateway` launch agent is restarted.
- The Cloudflare tunnel keeps its existing process.
- Public Build Week routes return HTTP 200 with the replacement runtime assets.
- The read-only gateway boundary still rejects control and write requests.
- Verification evidence is recorded here and in the playable changes log.

---

## Activity

- **2026-07-15:** Mark claimed the gateway update. The local CLI updated from
  PathMX 0.1.9 to 0.1.10; `muthurd` still reported 0.1.9 before deployment.
- **2026-07-15:** `pathmx self-update` installed 0.1.10 on `muthurd`. Its
  post-update check returned nonzero because the banner was included in the
  reported version string, so the restart chain stopped safely; a separate
  `pathmx --version` confirmed 0.1.10 before the service change.
- **2026-07-15:** Restarted only `net.pathmx.spaces-gateway`. Its process moved
  from PID 7927 to 12956 and reported `running`; the
  `net.pathmx.cloudflared.pathmx-net-local` tunnel stayed on PID 31765.
- **2026-07-15:** The public Player JavaScript changed from
  `pathmx-player.823ce6cd.js` to `pathmx-player.6035c36c.js`, Player CSS from
  `c362cf55` to `a9d1fb88`, and runtime CSS from `0ee51bf1` to `e5cf296d`.
  The root, tasks, labs, changes log, and Kepler routes each returned HTTP 200.
  `/__pathmx/health` returned the expected public 404 and a POST to the root
  returned the expected read-only 405. Visual review was skipped because this
  was a packaged-runtime deployment with asset identity and public behavior
  verified directly.
