# PathMX Design Engineering

Use this reference when visual direction, interaction quality, motion, or
focused presentation is central to a PathMX Source. Treat the authored learning
or presentation flow as the design system: Source, Block, Beat, component
state, and Player focus should tell one coherent story.

This guidance adapts Emil Kowalski's
[Design Engineering](https://github.com/emilkowalski/skills/blob/main/skills/emil-design-eng/SKILL.md)
principles to PathMX. Use the upstream ideas as craft prompts, then implement
through PathMX's source-first and Play contracts rather than framework-specific
patterns.

## Contents

- [Frame The Focus Move](#frame-the-focus-move)
- [Choose The Smallest Surface](#choose-the-smallest-surface)
- [Design Blocks And Beats Together](#design-blocks-and-beats-together)
- [Compose A Subject-Specific Visual System](#compose-a-subject-specific-visual-system)
- [Engineer Complete Interaction Feedback](#engineer-complete-interaction-feedback)
- [Make Motion Serve Focus](#make-motion-serve-focus)
- [Use PathMX Focus Lifecycles](#use-pathmx-focus-lifecycles)
- [Keep The Surface Fast And Resilient](#keep-the-surface-fast-and-resilient)
- [Review The Rendered Experience](#review-the-rendered-experience)

## Frame The Focus Move

Start with what the reader or learner should do, notice, understand, compare,
manipulate, decide, or practice. Do not start with an animation technique or a
component pattern.

Name:

- the one visually dominant object, model, problem, or message;
- the learner's or reader's next meaningful action;
- the feedback that makes the result observable;
- the stages that deserve separate focus;
- the evidence, if any, that must outlive the browser; and
- the useful loading, failure, reduced-capability, and non-JavaScript result.

Make visual impact serve comprehension. Prefer a clear diagram over a 3D scene
when the diagram teaches better. Prefer a manipulable model over a generic card
when interaction makes the concept materially easier to inspect.

Keep the subject visible in the art direction. A cell explorer, proof studio,
historical timeline, and product walkthrough should not become the same grid of
equal-weight cards with different labels.

## Choose The Smallest Surface

Use this ladder:

1. ordinary Markdown and built-in PathMX presentation;
2. theme tokens or Block-/Source-owned CSS;
3. semantic raw HTML with explicitly scoped CSS;
4. an existing Literate Component;
5. a new topic-specific Literate Component;
6. a plugin only when the need is truly build- or host-owned.

Move to a plugin for accepted responsibilities such as build-time validation,
trusted execution, cross-Source indexing, typed authoring support, or durable
behavior. Do not create a runtime abstraction merely because the visual result
is ambitious.

Keep the ordinary Markdown around an enhancement useful. A custom figure or
simulation still needs an entry, purpose, instructions, and a meaningful
fallback in the Source.

## Design Blocks And Beats Together

Treat a Block as one coherent focus move: orient, model, inspect, act, receive
feedback, reflect, or decide. Split a Block when the goal, interaction mode, or
evidence target changes. Merge fragments that need one another to make sense.

Treat Beats as the attention sequence inside that move. PathMX can project
headings, paragraphs, list items, table rows, media, code focus steps,
component roots, and ordered component states into Beats.

Before implementation, sketch the Play path:

1. What does the learner see on Block arrival?
2. Which element receives focus first?
3. What becomes newly visible or active at each Beat?
4. Which action advances understanding rather than merely advancing chrome?
5. What should happen on backward navigation and re-entry?
6. Can the learner skip out without leaving the surface in a broken state?

Keep meaningful learning stages addressable. Use ordered component state or
explicit nested Beats for predict, inspect, compare, explain, and feedback
stages. Keep hover, pointer position, camera interpolation, animation frames,
and other visual implementation state private.

Design focus changes to be legible without becoming theatrical. The active
Beat may reveal, emphasize, trace, or animate the element that now matters, but
it should not move essential content so far that the learner loses spatial
context. Keep focus geometry stable enough to avoid repeated viewport jumps.

Make forward and backward traversal deterministic. Re-entering a Beat should
restore or replay the authored state intentionally, not depend on incidental
timers or whichever animation happened to finish last.

## Compose A Subject-Specific Visual System

Build hierarchy before decoration:

- make one object or idea dominant;
- establish reading order with space, measure, scale, typography, contrast,
  alignment, and grouping;
- keep controls and explanatory context visually subordinate to the central
  learning object;
- use a small set of component-local tokens that inherit public `--pmx-*`
  theme values;
- use color, imagery, data, texture, or spatial metaphor for a subject reason;
  and
- adapt layout through the `pathmx-runtime` container when the surface may be
  embedded, split, focused, or viewed narrowly.

Avoid repeated equal-weight cards, decorative density, viewport-locked
composition, and effects that reduce text or code readability. Do not restyle
Player chrome from authored Source.

Let component CSS own component internals. Let Source CSS own document
composition. Use the styling reference for the exact layer, scope, cascade,
theme, color-mode, and print contracts.

## Engineer Complete Interaction Feedback

Use native semantic controls. Make each applicable state understandable: rest,
`focus-visible`, hover, active or pressed, selected, disabled, loading,
success, empty, and error.

- Never depend on hover for meaning or access. Put hover-only polish behind
  `(hover: hover) and (pointer: fine)`.
- Give a press immediate but proportionate feedback. A subtle scale, color, or
  surface change is a candidate, not a universal rule.
- Anchor transforms, popovers, and reveals to the control or location that
  caused them.
- Preserve visible focus and an obvious keyboard order.
- Use pointer capture and protect against extra touches when a custom drag
  interaction needs them.
- Keep component and Player controls on the same `state` channel when they
  represent the same authored step.
- Keep local interaction state separate from durable learner evidence.
- Keep boundary Context Actions present and disabled so Player-assigned
  positions remain stable.

Every control should make the system's response obvious without requiring an
animation. Motion may strengthen feedback; it must not carry the only signal.

## Make Motion Serve Focus

Answer these questions before adding motion:

| Question | Direction |
| --- | --- |
| Does it explain space, causality, state, feedback, or continuity? | If not, omit it or keep it quiet. |
| How often can it trigger during reading or Play? | Keep frequent and keyboard-driven responses instant or nearly instant. |
| Can the learner reverse or retrigger it quickly? | Prefer an interruptible transition over a one-shot keyframe. |
| Does it mark Beat focus or explain subject behavior? | Keep the focus cue brief; let explanatory motion last only as long as the idea requires. |
| Does it delay the next action? | Remove the delay. Decorative sequencing must not block interaction. |
| What happens under reduced motion? | Preserve the state and meaning with an immediate change, opacity, color, or another non-spatial cue. |

Use timing ranges as starting points, not framework rules:

- press feedback: roughly `80–160ms`;
- small state feedback: roughly `120–200ms`;
- local reveal or focus transition: roughly `160–280ms`;
- learner-controlled explanatory motion: longer when the motion itself teaches,
  but skippable, pausable, and non-blocking.

Avoid `transition: all`, sluggish `ease-in` responses, entry from `scale(0)`,
large decorative travel, and long staggers. Prefer ease-out for responsive
entry or exit and ease-in-out for movement already on screen, then tune the
curve to the surface's character. Enter and exit may be asymmetric: the system
should usually respond faster than the learner deliberates.

Prefer CSS transitions for predetermined, frequently retargeted visual states.
Use keyframes for controlled sequences that should run as authored, not for UI
that may reverse repeatedly. Prefer transform and opacity for high-frequency
motion, but measure the real surface instead of turning that heuristic into a
ban on necessary layout changes.

## Use PathMX Focus Lifecycles

Use the Player's authored focus lifecycle instead of observing Player chrome or
internal DOM state.

The Player dispatches bubbling `pathmx:beat-enter` and `pathmx:beat-exit`
events on the element that owns the Beat. A rendered Block-level Literate
Component root owns its component Beat and receives those events directly.
Use `pathmx:play-step` through the component `state` contract; do not write the
Player's internal state attributes.

For a short focus animation, listen on the owned element and verify the event
belongs to that element:

```js
let focusAnimation

on(el, "pathmx:beat-enter", function (event) {
  if (event.target !== el) return
  focusAnimation?.cancel()
  if (
    typeof el.animate !== "function" ||
    matchMedia("(prefers-reduced-motion: reduce)").matches
  )
    return
  focusAnimation = el.animate(
    [
      { opacity: 0.72, transform: "translateY(0.4rem)" },
      { opacity: 1, transform: "translateY(0)" },
    ],
    { duration: 220, easing: "cubic-bezier(0.23, 1, 0.32, 1)" },
  )
})

on(el, "pathmx:beat-exit", function (event) {
  if (event.target !== el) return
  focusAnimation?.cancel()
})

ctx.cleanup(function () {
  focusAnimation?.cancel()
})
```

Keep this cue small. Beat entry already changes Player focus and scroll
position; the authored animation should clarify the active element, not fight
that movement. Use this pattern when every focused Beat on the element should
receive the cue.

Ordered component states become Play-traversable steps on the same component
root. Use `state.on(...)` to render and animate the semantic difference between
states. Do not use Beat-entry events to infer a state step: the same root may
own both its arrival Beat and ordered state Beats.

Use `ctx.effect(..., { when: "presented" })` for continuous work that should run
only while the component is the active Beat in Play:

```js
ctx.effect(
  function ({ signal }) {
    let frame
    function draw() {
      if (signal.aborted) return
      renderFrame()
      frame = requestAnimationFrame(draw)
    }
    frame = requestAnimationFrame(draw)
    return function () {
      cancelAnimationFrame(frame)
    }
  },
  { when: "presented" },
)
```

`presented` behaves like `visible` in Browse. In Play it becomes active only
while the component root owns the active Beat. The scope aborts before cleanup
and restarts without overlap on later activation. Use it for simulations,
canvas rendering, audio visualization, and other continuous activity. Use
`visible` only when work should continue for any visible component regardless
of Play focus.

Use `ctx.morph` for component-owned DOM patches. Wrap a patch in
`ctx.transition` when a progressive View Transition helps explain a meaningful
state change; the helper already falls back when unsupported or reduced motion
should skip it.

For raw HTML/CSS without a component script, rely on PathMX's built-in Beat
focus treatment. Do not target generated Player attributes to invent a custom
focus lifecycle. Promote the surface to a Literate Component when authored
Beat-entry behavior is essential.

## Keep The Surface Fast And Resilient

- Keep scripts scoped to one `el`; do not scan the page or query Player chrome.
- Cancel animations, timers, observers, global listeners, audio, and rendering
  resources on Beat exit or instance cleanup as appropriate.
- Pause continuous work with `ctx.effect` instead of leaving an off-Beat scene
  active.
- Avoid inherited CSS-variable writes in frame-by-frame hot paths when they
  force a large subtree to recalculate.
- Exercise loading, empty, dependency-failure, and reduced-capability states.
- Keep controls usable before decorative assets or motion finish loading.
- Preserve readable yielded or surrounding content when JavaScript, WebGL,
  audio, or a remote dependency is unavailable.

Use only capabilities implemented by the installed PathMX version. Report a
missing lifecycle or state contract rather than hiding it with a page-global
polyfill.

## Review The Rendered Experience

Do not accept a visual or interactive change from a source diff or successful
build alone. Inspect the actual Player route and revise after seeing the whole
focus flow.

Check the applicable set:

- first-glance hierarchy and the dominant learning object;
- Browse and Play behavior;
- Block arrival, each Beat entry, ordered state steps, backward movement,
  re-entry, and skip-out;
- whether Beat-triggered motion starts on the owning element and settles or
  stops on exit;
- whether `presented` effects stop off-Beat and restart once on re-entry;
- stable scroll and focus geometry during state changes;
- wide, narrow, embedded, and focused containers;
- light, dark, system, and deliberately forced schemes;
- keyboard, pointer, and touch operation;
- visible focus, contrast, forced colors, and reduced motion;
- loading, empty, failure, and reduced-capability states;
- live refresh and instance cleanup; and
- plain-Markdown usefulness without the enhancement.

Slow important motion down or inspect it frame by frame. Check transform
origin, coordinated properties, interruptions, and whether the learner can act
before the motion finishes. Test gesture-heavy interactions on a real touch
device when practical.

For a design review, use one compact table:

| Current | Proposed | Why | Verify |
| --- | --- | --- | --- |
| Describe the observed surface or code | Name the concrete change | Connect it to focus, comprehension, feedback, or resilience | Name the rendered check |

Use the normal skill handoff for implementation work: report changed Sources,
the real routes inspected, verification performed, and any skipped checks or
version assumptions.
