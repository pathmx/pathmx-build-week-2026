---
type: task
status: done
owner: Andrew
date: 2026-07-19
due: 2026-07-20
related:
  - ../labs/chess-opening-lesson/index.demo.md
  - ../labs/chess/chess.components.md
  - ../work-log/2026-07-18-player-native-learning-reshape.brief.md
  - ./2026-07-15-prepare-learner-starter-and-submission.task.md
---

# Build A Chess Opening Lesson With The Canonical Components

## Outcome

Create a short Player-native lesson that helps a beginner choose purposeful
opening moves by controlling the center, developing a new piece, and preparing
king safety. Use the maintained Chess components so the lesson can become a
canonical Build Week example and later move to the learner starter.

---

## Next Move

Mark reviews the official [Chess opening lesson](../labs/chess-opening-lesson/index.demo.md)
with every half-move exposed sequentially in Player. Track the visible replay
control boundary and View Transition capability as shared component follow-up,
not as lesson-source blockers.

---

## Done When

- The lesson has one beginner-readable outcome and a short opening-principles
  arc rather than trying to teach a complete opening repertoire.
- The annotated replay uses `<chess-game>`, exposes every half-move to Player
  traversal, and keeps the teaching notes attached to meaningful positions.
- The practice Block uses `<chess-board>` for one concrete development move.
- Browse and Play work in both directions, the component fits at narrow width,
  and keyboard and pointer controls remain understandable.
- A focused scratch build and full repository build pass, with skipped live
  checks recorded.
- Mark reviews the stable lesson before it is copied to the learner starter.

---

## Activity

- **2026-07-20:** Resolved the lesson-level sequencing problem by removing
  `play-grain="notes"`. The Chess component now uses its default `moves` grain,
  so Player declares every replay position rather than jumping among annotated
  plies. The authored notes remain in place as teaching commentary; this change
  does not alter the shared Chess component or its immediate-update fallback in
  browsers without `document.startViewTransition`. Live Player verification on
  PathMX 0.1.19 advanced in order from the starting position through `1. e4`,
  `1... e5`, and `2. Nf3`, then Previous returned through `1... e5` and `1. e4`;
  the corresponding pawn and knight positions updated at each step. The full
  source build passed, rewriting the changed artifact in the existing output
  with only the three known Tufte theme warnings, and `git diff --check` passed.
- **2026-07-20:** Reopened after Andrew's official-Labs pass found that the
  replay appeared non-sequential, its Previous and Next controls appeared not
  to work, and piece motion was missing. PathMX 0.1.19 live reproduction showed
  the component controls do update correctly: Next moved the pawn from `e2` to
  `e4`, Previous returned it, Player Next advanced to `2. Nf3`, Player Previous
  returned to `1. e4`, and every state retained 32 piece images with no browser
  errors. Three UX boundaries explain the report. First, the visible Previous
  control remains enabled at the starting position but clamps to the same ply,
  creating an apparent no-op. Second, `play-grain="notes"` declares curated
  plies `0, 1, 3, 5, 7, 12`, so Player jumps over reply moves instead of moving
  one ply at a time; the component intentionally prepares piece motion only for
  one-ply transitions. Third, the in-app browser supports the CSS property but
  does not expose `document.startViewTransition`, so `ctx.transition` uses its
  immediate fallback even though reduced motion is not requested. No behavior
  change landed during diagnosis; choose the lesson pacing and motion boundary
  before review resumes.
- **2026-07-20:** Andrew asked to make the chess-openings prompt an official
  Labs lesson. Reused the already verified `Build Before You Attack` lesson
  rather than creating a duplicate, added it to the Labs hub, and moved this
  task to Mark's review lane for the learner-starter graduation decision.
  PathMX 0.1.19 built the full graph with 265 artifacts and only the three known
  Tufte warnings. The live Labs link opened `/labs/chess-opening-lesson`; both
  canonical components reported ready, all 64 piece images across the replay
  and practice boards rendered, the page had no horizontal overflow, and the
  browser logged no errors.
- **2026-07-19:** Claimed from Mark's request for a simple chess-openings lesson
  built from the canonical Chess components. Chose a compact “build before you
  attack” arc: watch an Italian Game setup, name the three opening jobs, make
  one developing move, and leave with a reusable decision rule.
- **2026-07-19:** Authored the first lesson with six curated replay positions,
  a concrete `f1` to `c4` or `b5` practice move, and separate orientation,
  interaction, and reflection Blocks. Tightened the reusable Chess Game at
  narrow runtime widths so its board, one-row scrollable move list, note, and
  Player Context Actions fit together without covering one another.
- **2026-07-19:** Verified with PathMX 0.1.18. The focused build completed with
  one Path and 43 artifacts; the full build completed with one Path and 263
  artifacts plus only the three pre-existing Tufte theme warnings; `git diff
  --check` passed; and the built route manifest contains
  `/labs/chess-opening-lesson`. Live Browse checks confirmed replay forward and
  backward movement, the pointer-driven `f1` to `c4` move, 32 visible pieces,
  and focus restored to `c4`. At 390×844, the replay measures 563 pixels high,
  has no horizontal overflow, and remains clear of Player navigation; Player
  forward and backward steps update the note, position, URL, and Context
  Actions together while retaining all 32 pieces. Arrow-key focus moved from
  `f1` to `e1`. Synthetic Enter and Space did not activate the native square
  button in the browser-control harness, so real-device keyboard activation and
  touch remain a human-review check. The browser logged no errors, but PathMX
  0.1.18 repeatedly warned that authored Beats were not contiguous with their
  containers while falling back to block-level Beats; rendered navigation
  still worked and the runtime warning remains a Core follow-up rather than a
  lesson-source workaround.
