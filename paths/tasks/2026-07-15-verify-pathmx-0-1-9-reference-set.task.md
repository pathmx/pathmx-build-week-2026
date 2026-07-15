---
type: task
status: blocked
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

## Blocker And Next Move

On July 15, `pathmx self-update` still reports 0.1.8. When 0.1.9 is available,
update first, inspect the released authoring contract, and build the complete
reference set without adding a compatibility layer based on guesses.

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
