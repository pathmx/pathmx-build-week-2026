---
type: task
status: in-progress
owner: Andrew
reviewer: Mark
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

Andrew runs a short human pass through the
[first playable lesson](../labs/chess-opening-lesson/index.demo.md), checking
the beginner language and phone-size board scale. Then Mark reviews the lesson
and the reusable narrow chess layout before graduation to the learner starter.

---

## Done When

- The lesson has one beginner-readable outcome and a short opening-principles
  arc rather than trying to teach a complete opening repertoire.
- The annotated replay uses `<chess-game>` and exposes only meaningful teaching
  moments to Player traversal.
- The practice Block uses `<chess-board>` for one concrete development move.
- Browse and Play work in both directions, the component fits at narrow width,
  and keyboard and pointer controls remain understandable.
- A focused scratch build and full repository build pass, with skipped live
  checks recorded.
- Mark reviews the stable lesson before it is copied to the learner starter.

---

## Activity

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
