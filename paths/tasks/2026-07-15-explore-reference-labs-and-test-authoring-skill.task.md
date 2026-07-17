---
type: task
status: in-progress
owner: Andrew
reviewer: Mark
date: 2026-07-15
due: 2026-07-17
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

Mark manually reviews the field-guide theme, all five component flows,
direct-control keyboard behavior, and reduced-motion result in Play; then
Andrew finishes the reviewed-lab tour and records which authoring patterns were
useful or confusing.

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

## Activity

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
