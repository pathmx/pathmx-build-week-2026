---
type: task
status: done
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
  - ../labs/kepler-orbit/index.demo.md
---

# Verify And Graduate The PathMX 0.1.9 Reference Set

## Outcome

Verify the Build Week reference labs against the released PathMX 0.1.9
contracts, then leave reproducible examples that agents can safely copy.

---

## Result

The released PathMX 0.1.9 CLI builds the complete reference set, and the
focused labs now provide reproducible examples for components, layouts,
learner responses, themes, and Play behavior.

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
- **2026-07-15:** Added the reviewed Kepler orbit demo from PathMX Core commit
  `da752ad5c29751e317baef76498e7697617c9f0c` at `/labs/kepler-orbit`. The
  component source, CSS, and JavaScript remain byte-identical to upstream; only
  the local route, labs backlink, and source-scoped demo selector changed. A
  scratch build wrote 141 artifacts with only the existing Tufte token
  warnings. A real browser check loaded the exact route with its component
  styling, changed the instrument to the `near-sun` learning state through the
  visible control, and reported no console errors.
- **2026-07-15:** Closed the released-contract review after reconciling the
  reference prose and authoring guidance with PathMX 0.1.9. `pathmx --version`
  reports 0.1.9, and the final scratch build wrote 135 artifacts without
  unresolved Source or asset links. The only diagnostics were the three known
  Tufte theme-token warnings. No additional browser pass was run for this
  status-only closure; the focused route and interaction checks are recorded
  above and in the linked reference artifacts.
