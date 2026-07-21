---
type: task
status: done
owner: Mark
date: 2026-07-17
related:
  - ./index.tasks.md
  - ../research/resources.path.md
---

# Build A Native PathMX Generative-Artifact Lab

## Outcome

Recreate one of the shared Perplexity generative artifacts as a native PathMX
lab of equal or higher design quality, integrated with the Player instead of a
standalone page, and capture the reusable CSS/style ideas those artifacts
suggest for PathMX work.

The chosen artifact is the
[Hegelian Spiral](https://hegelianspiral.pplx.app/): it is the most
pedagogically shaped of the set, self-contained (canvas, no vendored
libraries), and its stages map directly onto ordered component states, so
stepping through Play can enact the dialectic rather than autoplay it.

---

## Next Move

Reproduce Andrew's stage-control mismatch and make the selected pill, canvas
position, readout, metrics, and motion state visibly agree for direct clicks
and Player steps. Resolve the accidental `[^c1]` annotation in the demo Source,
then finish the Play review across scrub, pace, reset, schemes, narrow width,
reduced motion, and the no-JavaScript fallback.

---

## Done When

- The lab plays as a coherent Block/Beat path with the spiral instrument's
  meaningful stages exposed as ordered, Play-traversable states.
- Light and dark schemes, reduced motion, keyboard operation, and a no-JS
  fallback all yield a useful result.
- A research note records the borrowable CSS/style techniques from the
  Perplexity artifacts and which the lab adopted.
- `pathmx build -o .pathmx-check` passes and the reviewer signs off on the
  rendered experience.

---

## Activity

- **2026-07-18:** Andrew's manual Play pass found that selecting `Synthesis`
  updates the active stage pill while the canvas can remain visually near the
  opening `Logic of Being` state. Reproduce this with both direct stage clicks
  and Player traversal, then verify that the trace, explanatory readout, turn,
  moment, ascent, and paused or running state all agree.
- **2026-07-18:** An accidental `[^c1]` annotation was added after “The honest
  shape is a spiral.” with the note “noteworthy,” alongside Actor session
  evidence from the Play pass. Treat both as review evidence; decide whether to
  remove or rewrite the annotation before approval without deleting the Actor
  evidence by accident.

- **2026-07-17:** Studied the five shared Perplexity artifacts (Shape of the
  Day, Hegelian Spiral, Burn Rate/The AI Bubble, Eggs, Markdown→HTML) from
  their published sources; chose the Hegelian Spiral as the port target and
  drafted the experience brief in the component definition. Captured the
  cross-artifact design DNA in
  [a research note](../research/perplexity-artifact-design-notes.notes.md).
- **2026-07-17:** Built the [Dialectic Spiral lab](../labs/dialectic-spiral/index.demo.md):
  a `<dialectic-spiral>` Literate Component (scheme-aware canvas reading its
  palette from CSS custom properties, six ordered states, presented-scoped
  animation, static-SVG no-JS fallback), an editorial demo path with
  light/dark theme tokens and Fraunces/Inter, and links from the labs and
  research indexes. Verification: PathMX 0.1.13; `pathmx build -o
  .pathmx-check` passed with only the three known Tufte theme warnings;
  built HTML confirmed to contain the rendered component, ordered `states`
  attribute, and inlined component script/styles; `node --check` passed on
  the component script. Skipped: rendered Play review in a browser (no
  browser session was available to the agent) — that visual pass is the
  reviewer's next move.
