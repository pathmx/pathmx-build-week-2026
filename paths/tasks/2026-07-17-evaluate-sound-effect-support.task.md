---
type: task
status: ready
owner: Unassigned
reviewer: Andrew
date: 2026-07-17
due: 2026-07-20
related:
  - ./index.tasks.md
  - ./2026-07-16-plan-focus-beat-components.task.md
---

# Evaluate Sound Effect Support In PathMX

## Outcome

Decide whether PathMX should provide opt-in browser sound effects so Focus
Beats, simulations, and other interactive experiences can use contextual audio
without each component inventing its own playback contract.

---

## Next Move

Evaluate [Cuelume](https://cuelume-site.pages.dev/) as a reference for small,
live-synthesized Web Audio cues, then compare a declarative authoring surface
with component- or Action-owned playback and authored natural-sound assets.

---

## Questions To Resolve

- Which events may trigger sound, and how do they respect browser user-gesture
  and autoplay rules?
- Should PathMX expose named built-in cues, authored audio assets, a Host
  capability, or only lifecycle hooks that components can use?
- How do global mute, volume, reduced-sensory preferences, captions or visual
  equivalents, and learner control work across Play?
- How are overlapping sounds, navigation, replay, pause, and component cleanup
  handled predictably?
- Which part belongs in PathMX Core versus a reusable learner-facing package?

---

## Done When

- A focused browser prototype exercises at least one Focus Beat and one
  simulation with sound on and muted.
- The evaluation records browser-policy, accessibility, lifecycle,
  performance, licensing, and asset-delivery constraints.
- A reviewed decision either proposes a minimal PathMX contract in the main
  `pathmx` repository or records why sound should remain component-owned.
- The task links the durable prototype, decision, and verification evidence.

---

## Activity

- **2026-07-17:** Tracked the idea using Cuelume's live-synthesized Web Audio
  palette and declarative bindings as a reference, without treating its API as
  an available PathMX product contract. PathMX 0.1.13 was current;
  `pathmx build -o .pathmx-check` passed with the three known Tufte theme
  warnings, and `git diff --check` passed.
