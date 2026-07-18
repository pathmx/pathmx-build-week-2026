---
type: task
status: ready
owner: Andrew
reviewer: Mark
date: 2026-07-18
due: 2026-07-20
related:
  - ../work-log/2026-07-18-andrew-labs-review.notes.md
  - ../labs/chess/index.demo.md
  - ./2026-07-17-fix-chess-piece-disappearing.task.md
  - ../research/play-cursor-hints.path.md
  - ../research/resources.path.md
---

# Clarify Player Navigation And Link Affordances

## Outcome

Make it clear where a link will go, when an interactive component owns the
keyboard, and when a learner has reached the end of a Path so navigation feels
intentional instead of broken.

---

## Next Move

Andrew reproduces the Chess walkthrough with one internal Source link and one
external GitHub link, recording the visible treatment, browser behavior, Play
state, keyboard focus, and final-Beat behavior. Mark then reviews the evidence
and helps separate Build Week content fixes from PathMX Core work.

---

## Done When

- The active [Chess task](./2026-07-17-fix-chess-piece-disappearing.task.md)
  replaces its three upstream helper links with durable local references and
  removes or replaces the canonical directory link with a verified public
  target.
- Internal and external link affordances communicate destination and opening
  behavior to pointer, keyboard, and screen-reader users without overwhelming
  ordinary prose.
- Internal navigation is checked for expected Play-mode preservation; external
  navigation has a deliberate same-tab, new-tab, or host-browser contract.
- Component focus entry and exit are reproducible, with expected Player arrow
  behavior recorded before and after interacting with Chess.
- The final Beat produces an understandable completion state or a concrete Core
  recommendation with a tested next action.
- The login observation is either reproduced with exact evidence and routed to
  a separate task or explicitly left unclassified.

---

## Activity

- **2026-07-18:** Created from Andrew's
  [labs walkthrough](https://www.loom.com/share/0c6e72c323c84ebd8ead8e0256c23f25)
  and the durable [review summary](../work-log/2026-07-18-andrew-labs-review.notes.md).
  The current PathMX 0.1.17 build already marks local Source links as resolved
  and GitHub URLs as external in link metadata, but the distinction is not
  presented visibly. GitHub returns 404 for all four authored upstream Chess
  URLs; the local lab and helper copies remain available, and the concrete link
  cleanup is routed to the existing Chess task.
