---
type: task
status: in-progress
owner: Mark
date: 2026-07-15
due: 2026-07-16
related:
  - ../labs/index.path.md
  - ../labs/chess/index.demo.md
  - ../labs/layout-components/index.demo.md
  - ../labs/simple-quiz/index.demo.md
  - ../labs/component-patterns/index.demo.md
  - ../labs/bookshelf/index.demo.md
---

# Verify And Graduate The PathMX 0.1.9 Reference Set

## Outcome

Verify the Build Week reference labs against the released PathMX 0.1.9
contracts, then leave reproducible examples that agents can safely copy.

---

## Next Move

PathMX 0.1.9 is now available through `pathmx self-update`. Inspect the
released authoring contract, build the complete reference set, and Play-check
the focused routes before graduating it.

---

## Done When

- `pathmx self-update` and `pathmx --version` report 0.1.9 or newer.
- A scratch build passes without unresolved Source or asset links.
- Chess, layout, quiz, Bookshelf, and durable-response patterns receive focused
  Play checks on their exact routes.
- Reference prose and the authoring skill match the released contract.
- Mutable upstream review links are replaced when immutable reviewed commits
  are available.

---

## Activity

- **2026-07-15:** Added the reviewed Bookshelf component family at
  `/labs/bookshelf`. The complete scratch build wrote 119 artifacts; live wide
  and 390 px audits loaded all 29 titled covers without page overflow or
  console warnings, and Play reached the composed bookcase Block. The strict
  maintainability review found no blocker. `pathmx self-update` still reports
  0.1.8, so release graduation remains blocked.
- **2026-07-15:** Reference Sources are present, but several intentionally name
  0.1.9 as their minimum version. Release verification remains blocked on the
  CLI reaching the updater.
- **2026-07-15:** `pathmx self-update` now reports 0.1.9. Mark resumed the task
  and moved it to `in-progress` for released-contract verification.
- **2026-07-15:** Diagnosed `build-week.pathmx.net` serving the pre-0.1.9
  Player from a gateway process that had remained alive since July 4. Restarted
  only the `net.pathmx.spaces-gateway` launch agent; the Cloudflare tunnel kept
  its existing process. The replacement gateway loaded PathMX 0.1.9, emitted
  the current Player and Runtime asset hashes, returned HTTP 200 for all seven
  registered public routes, and preserved the public 404 control boundary and
  405 read-only boundary. A real browser Play check focused the Tasks link and
  displayed the positional `1 Tasks` link Action hint with no console errors.
