---
type: task
status: in-progress
owner: Andrew
date: 2026-07-15
related:
  - ../labs/index.path.md
  - ../labs/campaign-forge/index.demo.md
  - ../labs/campaign-forge/lantern-clock.component.md
  - ../labs/campaign-forge/faction-triangle.component.md
  - ../labs/campaign-forge/duskmere-map.component.md
  - ../labs/campaign-forge/session-spine.component.md
  - ../labs/campaign-forge/consequence-forge.component.md
  - ../labs/campaign-forge/campaign-forge.css
  - ../labs/kepler-orbit/index.demo.md
  - ../../.agents/skills/pathmx-authoring/SKILL.md
---

# Explore Reference Labs And Test The Authoring Skill

## Outcome

Use the reviewed labs to understand the current PathMX authoring patterns, then
test whether a fresh Codex task can apply the repo-local authoring skill to a
small, coherent lab change.

---

## Next Move

Andrew continues the field-guide tour with Campaign Forge: reproduce the
focused-Beat, code-Beat, and arrow-key behavior; record when pointer interaction
changes keyboard ownership; and test one visual-scale change at a time in the
local live preview. Mark then reviews the campaign field-guide theme, all five
component flows, direct-control keyboard behavior, and reduced-motion result in
Play.

---

## Done When

- Andrew has explored each item under **Reviewed References**, including the
  Kepler orbit demo, and notes useful or confusing patterns.
- The exact prompt used to invoke the repo-local authoring skill is recorded.
- Codex creates or materially revises one focused lab and links it from the
  labs index.
- The result records `pathmx build` plus the relevant Play, keyboard,
  narrow-screen, and reduced-motion checks.
- Skill friction or product gaps are captured here and linked upstream when
  they need Core work.

---

## Lab Review Field Guide

Use the same compact pass for each demo:

1. Name the learner-facing purpose and the first useful thing to do.
2. Follow Browse and Play forward, backward, and out of the lab.
3. Check that direct controls, selected labels, diagrams, readouts, and Player
   state agree.
4. Exercise pointer and keyboard control, a narrow width, reduced motion, and a
   static or failure fallback where the lab needs one.
5. Record one reusable pattern, one confusing moment or gap, and the smallest
   useful follow-up.

| Lab | What it demonstrates | Focus for this review |
| --- | --- | --- |
| [Dialectic spiral](../labs/dialectic-spiral/index.demo.md) | A conceptual instrument driven by ordered states and a generative canvas | Verify that each stage button and Player step agree across the selected pill, spiral position, explanatory readout, metrics, and paused or running state. Exercise scrub, pace, reset, schemes, narrow width, reduced motion, and the no-JavaScript fallback. |
| [D&D campaign workshop](../labs/campaign-forge/index.demo.md) | A Block workshop composed from five field-guide components | Follow every component flow and its context actions; check private choices, keyboard behavior, a 390 px view, reduced motion, and static fallback content. |
| [Chess](../labs/chess/index.demo.md) | A move-based board interaction with replayable state | Check move selection and replay, image and square focus, labels, optional data, and full keyboard operation. |
| [Tufte theme](../labs/tufte-theme/index.demo.md) | A reading-first visual theme with sidenotes and charts | Review light and dark schemes, sidenotes, chart legibility, narrow layout, print behavior, and visible warnings or caveats. |
| [Layout components](../labs/layout-components/index.demo.md) | Reusable layout composition and semantic ordering | Confirm reading order, composition, container behavior, narrow layout, focus visibility, and a plain-Markdown fallback. |
| [Bookshelf](../labs/bookshelf/index.demo.md) | A compact visual collection interface | Review item composition, overflow, keyboard access, narrow width, readable markup, and behavior without enhancement. |
| [Kepler orbit](../labs/kepler-orbit/index.demo.md) | A stateful scientific visualization | Check Player and direct-control synchronization, labels, orbit state, presented animation, re-entry, keyboard use, narrow width, reduced motion, and cleanup. |
| [Focus beats](../labs/focus-components/index.demo.md) | Beat pacing, focus, and typographic presentation | Review entry and exit, replay, focus movement, reduced motion, and whether the pacing clarifies the learning move. |
| [3D globe](../labs/three-globe/index.demo.md) | An interactive data texture and spatial visualization | Try direct rotation, labels, narrow width, reduced motion, off-Beat and re-entry behavior, and the failure fallback. |
| [Practice interview simulator](../labs/practice-interview/index.demo.md) | A simulated conversational practice room | Review fallback content, turn progression, permissions and failure states, keyboard access, evidence capture, and the boundary between demonstrated and proposed behavior. |

Keep observations in this task while they are part of the tour. Create and link
a separate task when a finding needs implementation, a PathMX Core contract
change, or its own acceptance criteria.

---

## Activity

- **2026-07-18:** Andrew completed a mostly successful Kepler Orbit pass. The
  direct instrument worked, but its lower plate was initially outside the
  Player viewport; a scroll intended to reveal it could instead advance the
  Beat. In the Simple Learner Quiz, the three test choices persisted into the
  Markdown Source and rendered output. Auto-advance is not part of the question
  contract, but the forward action was unclear and the open Player did not
  settle from `Saved. Updating...`. These shared Player questions are recorded
  in the [navigation task](./2026-07-18-clarify-player-navigation-and-link-affordances.task.md).
- **2026-07-18:** Bookshelf and Layout review found the same component-definition
  navigation failure: the nested Sources exist, but generated relative anchors
  flatten to `/labs/bookshelf.components.md` and `/labs/layout.components.md`
  and return 404. Exact route evidence is recorded in the
  [navigation task](./2026-07-18-clarify-player-navigation-and-link-affordances.task.md).
- **2026-07-18:** Andrew continued the field-guide tour with Chess. The
  [July 18 review summary](../work-log/2026-07-18-andrew-labs-review.notes.md)
  preserves the Loom's observations about discovery, component focus, local
  state, Play continuity, and end-of-Path uncertainty. The broken canonical
  source link and broader destination/completion questions moved into a
  [separate navigation task](./2026-07-18-clarify-player-navigation-and-link-affordances.task.md)
  with Mark as reviewer.
- **2026-07-18:** Andrew's public-Space review of Campaign Forge found three
  related presentation questions. Code areas do not always appear in the
  focused Player view when expected; arrow-key Beat navigation is intermittent,
  especially after clicking interactive content; and the focused presentation
  can feel too small and minimal to establish a strong starting Beat. The
  current PathMX 0.1.17 build recognizes the Campaign Card fence as a single
  `code` Beat, so the Source is not dropping it. Reproduce whether the Player
  fails to bring that Beat into view or whether focus moves into a component,
  button, copy control, or scrollable code region and changes keyboard
  ownership. Treat visual scale separately as an authored theme/CSS experiment
  unless the same small presentation appears across unrelated Core demos.
- **2026-07-18:** Added a shared field guide for reviewing every demo in the
  labs hub. Andrew began with Dialectic Spiral and observed a stage-control
  mismatch: selecting `Synthesis` changes the active pill, while the canvas can
  remain visually near the opening `Logic of Being` state. The implementation
  follow-up is tracked in the Dialectic Spiral task.

- **2026-07-16:** Extended the Duskmere workshop in the preferred sequence with
  four focused Literate Components: a
  [faction relationship model](../labs/campaign-forge/faction-triangle.component.md),
  [five-place field map](../labs/campaign-forge/duskmere-map.component.md),
  [choice-responsive session spine](../labs/campaign-forge/session-spine.component.md),
  and [deterministic consequence comparison](../labs/campaign-forge/consequence-forge.component.md).
  Each uses ordered Player-visible states, native direct controls, stable
  Context Actions, responsive component-owned CSS, and a readable static
  fallback; the Session Spine keeps the chosen lead in private browser-local
  state. PathMX 0.1.13 passed focused builds after each slice and the integrated
  graph built one Path with 203 artifacts; each new component appears in the
  generated Source manifest. The only diagnostics remain the three known Tufte
  theme warnings. Browse review confirmed all five components initialized,
  faction and map selection synchronized their labels and diagrams, the Bell
  lead produced the Drowned Court response, and the changed-situation ruling
  displayed its next choice. At 390 × 844, all four new component roots and the
  page had no horizontal overflow and the map/session layouts collapsed to one
  column. Browser logs were clear and keyboard focus showed a 3px high-contrast
  outline; synthetic Enter focused but did not activate a native consequence
  button, so manual keyboard activation remains in Mark's review. Reduced
  motion, forced colors, print, and no-script behavior were implemented and
  inspected in source but not live-emulated.
- **2026-07-16:** Added the preferred first visual-interaction slice: a scoped
  lantern-lit field-guide theme and the
  [`<lantern-clock>` component](../labs/campaign-forge/lantern-clock.component.md).
  The clock exposes ordered `bright | dim | dark` Player states, native direct
  controls, reset/advance Context Actions, readable pressure and faction
  consequences, and a static no-script starting state. PathMX 0.1.13 built the
  focused graph with 104 artifacts; the final complete graph build wrote 191
  artifacts, with only the three known Tufte warnings. Browse and Play review
  covered all states, forward and reverse Context Actions, pointer feedback,
  and a 390 × 844 viewport with no horizontal overflow. Controls are enabled
  native buttons with ordinary tab order and visible state labels. The in-app
  browser automation focused the direct buttons but did not dispatch activation
  through synthetic Enter or Space, matching the earlier Player-control
  observation, so Mark should manually verify keyboard activation. The CSS has
  no ambient animation and removes its short state transitions for reduced
  motion; preference emulation and the no-JavaScript fallback were inspected in
  source but not exercised live.
- **2026-07-16:** Andrew claimed the authoring test with the prompt: “let's go
  ahead and do run with a dungeons & dragons campaign example and add that as
  one of the labs demos in pathmx”. The chosen scope is one portable,
  learner-facing campaign workshop built from ordinary Markdown Blocks.
- **2026-07-16:** Added [Build a Dungeons & Dragons Campaign](../labs/campaign-forge/index.demo.md),
  a ten-Block workshop grounded in *The Lanterns of Duskmere*. PathMX 0.1.13
  built the complete graph to `.pathmx-check` as one Path with 157 artifacts;
  the only diagnostics were three existing Tufte-theme field warnings. The
  exact `/labs/campaign-forge` route opened in Browse and Play, and pointer
  activation advanced between Blocks. At a 390 × 844 viewport, the first
  draft's tables clipped, so they were replaced with stacked Markdown; the
  revised Source had no horizontal overflow. The lab adds no animation or
  transitions, so reduced-motion behavior has no authored motion to suppress.
  Keyboard activation of the Player's **Next block** button with Enter or Space
  did not advance, although pointer activation did; reproduce against a Core
  demo before filing that Player-level friction upstream. Andrew's reviewed-lab
  tour remains open, so this task stays in progress.
- **2026-07-15:** Reframed the unstarted learner-scenario task around Andrew's
  immediate lab tour and agent-driven authoring test. The repo-local
  `pathmx-authoring` skill was synchronized byte-for-byte from the current
  `~/sources/pathmx` checkout at `c50ab7c` before handoff.
