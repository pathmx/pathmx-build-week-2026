---
type: task
status: done
owner: Mark
date: 2026-07-18
related:
  - ../work-log/2026-07-18-andrew-labs-review.notes.md
  - ../research/workspace-link-audit.notes.md
  - ../labs/chess/index.demo.md
  - ./2026-07-17-fix-chess-piece-disappearing.task.md
  - ../research/play-cursor-hints.path.md
  - ../research/resources.path.md
---

# Clarify Player Navigation And Link Affordances

## Outcome

Make it clear where a link will go, when an interactive component owns the
keyboard, how a learner advances Beat by Beat on touch devices, and when a
learner has reached the end of a Path so navigation feels intentional instead
of broken.

---

## Result

Dropped from the Build Week task board. Player navigation and link-affordance
work continues as Mark's ongoing PathMX Core work; the notes and audits in this
file remain as background evidence.

---

## Done When

- The active [Chess task](./2026-07-17-fix-chess-piece-disappearing.task.md)
  replaces its three upstream helper links with durable local references and
  removes or replaces the canonical directory link with a verified public
  target.
- Component-definition links from extensionless demo routes preserve their
  nested folder. The current Bookshelf and Layout cases must not flatten to
  `/labs/bookshelf.components.md` or `/labs/layout.components.md` when their
  relation metadata points to nested Sources.
- Internal and external link affordances communicate destination and opening
  behavior to pointer, keyboard, and screen-reader users without overwhelming
  ordinary prose.
- Internal navigation is checked for expected Play-mode preservation; external
  navigation has a deliberate same-tab, new-tab, or host-browser contract.
- Component focus entry and exit are reproducible, with expected Player arrow
  behavior recorded before and after interacting with Chess.
- On a mobile-sized touch viewport, the available Beat-by-Beat navigation
  controls, their placement, reachability, and any gesture alternatives are
  recorded. If the only available control is the bottom-left keypad, document
  that right-handed ergonomics limitation as a concrete Core recommendation
  for Mark to evaluate.
- A component Beat taller than the Player viewport can be inspected without a
  scroll gesture unexpectedly advancing to the next Beat, or the limitation is
  recorded as a concrete Core recommendation.
- After a durable question response is written, the Player either reconciles
  the updated Source and exposes a clear **Next Block** action or explains how
  the learner should continue. Question submission is not required to
  auto-advance.
- The final Beat produces an understandable completion state or a concrete Core
  recommendation with a tested next action.
- The login observation is either reproduced with exact evidence and routed to
  a separate task or explicitly left unclassified.

---

## Activity

- **2026-07-19:** Reproduced Andrew's Chess component-link report on PathMX
  0.1.18. The first `Chess Components` anchor at `/labs/chess` resolved in
  relation metadata but retained `href="./chess.components.md"`, producing
  `/labs/chess.components.md` and a 404; the actual nested route
  `/labs/chess/chess.components` returned 200. The first link to that imported
  Source was bound to the adjacent `@chess-components` reference-definition
  relation, while later links to the same Source were rewritten correctly.
  Renaming or removing the first link moved the raw address to the next one,
  confirming a relation/rewrite collision rather than a copy collision. No
  source workaround landed: keep the portable relative links and route the
  underlying rewrite to PathMX Core instead of hardcoding a deployment URL.
- **2026-07-19:** Added a mobile-navigation question for Mark's review. The
  reported current experience exposes Beat-by-Beat advance through the keypad
  arrows at the bottom left of the screen; this is not a natural reach for a
  right-handed phone user. Verify the available touch controls and gestures on
  a mobile-sized Player before treating the observation as a Core defect, then
  record an actionable navigation recommendation if no ergonomic alternative
  exists.
- **2026-07-18:** Added the
  [workspace link audit](../research/workspace-link-audit.notes.md). A fresh
  preview returned all 68 document routes successfully. Across 622 generated
  internal link occurrences, four unique component-definition targets are
  emitted one directory too high. Of 69 unique external URLs, 46 work directly,
  two redirect successfully, 19 point into an upstream PathMX GitHub repository
  that is inaccessible without authentication, one is Devpost-login gated, and
  one is an unresolved component template. No external URL was proven malformed
  or dead. Browser-control was unavailable, so visual link affordances and
  keyboard behavior remain a follow-up.
- **2026-07-18:** Andrew's Kepler Orbit pass worked overall, but the lower part
  of the `Equal areas. Unequal speeds.` instrument initially fell below the
  Player viewport. Scrolling revealed it only briefly before the same gesture
  advanced the Player, exposing a conflict between inspecting a tall component
  Beat and Beat navigation. In the Simple Learner Quiz, all three selections
  and submissions were written into readable Markdown and appear in the
  rendered route. Submission is not expected to auto-advance, but the forward
  action was not apparent, and the open Player remained at `Saved. Updating...`
  while waiting for the updated Source to appear. Track the latter as a live
  revision-reconciliation problem rather than a failed save.
- **2026-07-18:** Andrew found matching 404s when opening the Bookshelf and
  Layout component definitions. The Sources and correct routes exist:
  `/labs/bookshelf/bookshelf.components.md` and
  `/labs/layout-components/layout.components.md` both return successfully.
  Built anchors carry the correct resolved `data-pathmx-rel-target` but retain
  raw `href="./bookshelf.components.md"` or `href="./layout.components.md"`.
  Because the demos use extensionless routes, the browser treats the last route
  segment as a file and resolves each link one directory too high. Track this
  as a PathMX route-emission defect; do not “fix” the readable relative Source
  links by hardcoding deployment URLs.
- **2026-07-18:** Created from Andrew's
  [labs walkthrough](https://www.loom.com/share/0c6e72c323c84ebd8ead8e0256c23f25)
  and the durable [review summary](../work-log/2026-07-18-andrew-labs-review.notes.md).
  The current PathMX 0.1.17 build already marks local Source links as resolved
  and GitHub URLs as external in link metadata, but the distinction is not
  presented visibly. GitHub returns 404 for all four authored upstream Chess
  URLs; the local lab and helper copies remain available, and the concrete link
  cleanup is routed to the existing Chess task.
- **2026-07-20:** Removed from the Build Week task board. Ownership moved to
  Mark as ongoing Core work rather than a tracked submission task.
