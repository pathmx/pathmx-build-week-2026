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

Review the new campaign-design demo in Play, then finish Andrew's tour of the
reviewed labs and record which authoring patterns were useful or confusing.

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
