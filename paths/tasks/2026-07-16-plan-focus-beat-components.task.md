---
type: task
status: review
owner: Mark
reviewer: Tram
date: 2026-07-16
due: 2026-07-18
related:
  - ../labs/focus-components/index.demo.md
  - ../labs/focus-components/focus.components.md
  - ../labs/component-patterns/index.demo.md
  - ../labs/component-patterns/interaction-patterns.components.md
  - ../research/campus-constellation-networking.path.md
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

## Next Move

Review the Focus Components lab in Play. Exercise the ordered Focus Lens
states, Breath Pacer timing and reset controls, Reflection Prompt local draft,
Grounding Check keyboard checklist, and narrow-screen layout.

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
