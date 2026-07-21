---
type: task
status: done
owner: Mark
date: 2026-07-16
related:
  - ../labs/focus-components/index.demo.md
  - ../labs/focus-components/focus.components.md
  - ../labs/component-patterns/index.demo.md
  - ../labs/component-patterns/interaction-patterns.components.md
  - ../research/campus-constellation-networking.path.md
  - ../research/play-cursor-hints.path.md
---

# Build Focus Components

## Outcome

Define and test a reusable Literate Component family that helps learners stop,
narrow attention, reflect, breathe, meditate, or otherwise take a deliberate
beat inside a PathMX learning flow.

Use `Focus Components` as the working family name because these are authored as
PathMX Literate Components. Keep “take a beat” available as learner-facing
microcopy for the pause or reset move itself.

---

## Result

Closed as a Build Week experiment. The Focus Beats lab and minimal typographic
family (`beat-pause`, `beat-breathe`, `beat-think`, `beat-timer`) remain as the
durable artifact; Play cursor-hint follow-up is recorded in
[Play Cursor Hints](../research/play-cursor-hints.path.md).

---

## Done When

- The task recommends a name or naming system for this family.
- The plan distinguishes at least three learner moments, such as pausing before
  work, focusing on one input, reflecting after an answer, and resetting after
  overload.
- The plan names the first component candidates, their props, their authored
  Markdown shape, and whether each belongs in Build Week labs, the Starter, or
  PathMX Core.
- A test lab imports the components and gives reviewers concrete examples to
  play through.
- Accessibility, reduced-motion, timing, audio, and learner agency boundaries
  are explicit.
- The design does not invent unimplemented PathMX runtime contracts; any needed
  capability is linked as a follow-up.
- A scratch PathMX build passes after the plan is linked, or any skipped
  verification is recorded here.

---

## Activity

- **2026-07-16:** Claimed for a first Focus Components test set. The working
  family name is now `Focus Components`; “take a beat” remains learner-facing
  copy for the pause or reset move.
- **2026-07-16:** Added the
  [Focus Components lab](../labs/focus-components/index.demo.md) and
  [component definitions](../labs/focus-components/focus.components.md) with
  `focus-lens`, `breath-pacer`, `reflection-prompt`, and `grounding-check`.
  `pathmx build paths/labs/focus-components/index.demo.md -o .pathmx-check
  --clean` passed with only the existing Tufte theme warnings. A local Player
  at `http://127.0.0.1:3107/labs/focus-components` passed Chrome smoke checks
  at 1366×900 and 390×844 for component expansion, Focus Lens state switching,
  Breath Pacer phase controls, Reflection Prompt local draft and clear, and
  Grounding Check progress. Visual screenshot review found and fixed the narrow
  Breath Pacer layout before moving this to review.
- **2026-07-17:** Reworked after design feedback that the first set was off:
  the widget-card components rebuilt Player navigation, exposed breathing
  phases as Player-traversable states, and demoed as a catalog instead of a
  learning experience. Replaced them with a minimal typographic family —
  `beat-pause`, `beat-breathe`, `beat-think`, and `beat-timer` — where the
  Player does the pacing, timing stays private interaction state, and only the
  held-question reveal uses ordered states. The lab is now a playable
  two-minute Fermi-estimation micro-lesson plus an author-facing grammar.
  Learner-facing framing is "Focus Beats". Returned to in-progress pending
  verification and Tram's re-review.
- **2026-07-17:** Verified the rework with `pathmx build
  paths/labs/focus-components/index.demo.md -o .pathmx-check --clean` (PathMX
  0.1.13): clean exit, one built Path, both sources in the scratch
  `sources.json`, and all four `beat-*` tags expanded in the rendered demo
  HTML. Rendered-output inspection caught a named-`slot` pass-through that
  duplicated the `beat-think` prompt; reworked it to a `prompt` attribute plus
  yielded continuation (no other slot usage exists in this repo to prove the
  contract). Skipped: interactive Play review in a browser — the Chrome
  automation extension was not connected; a watched Player was left running at
  `http://127.0.0.1:3181/labs/focus-components` for manual review.
- **2026-07-17:** Playing the lab surfaced that the Play cursor cannot reflect
  a beat's intent — jarring next to a quiet breath beat, no authored anchor
  for advanced layouts, no way to yield in immersive Blocks. Captured the
  Core follow-up as [Play Cursor Hints](../research/play-cursor-hints.path.md):
  a bounded trait model (shape, presence, anchor) with variant presets,
  Player-owned rendering, and an accessibility floor. No lab-side polyfill,
  per the chrome boundary.
- **2026-07-20:** Closed as done. Treated as a successful experiment rather than
  a submission-critical lane; no further Build Week review required.
