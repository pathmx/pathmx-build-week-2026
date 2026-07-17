---
type: research
status: proposal
tags:
  - player
  - play-cursor
  - focus-beats
  - core
related:
  - ./index.path.md
  - ../labs/focus-components/index.demo.md
  - ../tasks/2026-07-16-plan-focus-beat-components.task.md
---

# Play Cursor Hints

This note proposes a PathMX Core/Player contract that lets authored content
hint how the Play cursor should present itself on a given Beat. It came out of
playing the [Focus Beats lab](../labs/focus-components/index.demo.md): the
cursor's one-size-fits-all treatment is visually jarring next to a quiet
breath beat, it cannot anchor correctly inside advanced component layouts, and
it has no way to yield entirely inside an immersive full-bleed Block.

This is a Player contract, so nothing here can be prototyped from authored
Source — the current contracts correctly forbid restyling Player chrome or
targeting its generated DOM. The lab ships without it; this note is the linked
follow-up.

---

<!--
id: problem
title: The Problem
-->

## The problem

The Play cursor renders every Beat with the same weight. That is right for
most content — it is the learner's wayfinding device — but it is wrong in at
least three situations the Focus Beats lab makes concrete:

- **Tone mismatch.** A focus treatment calibrated to make a code block feel
  active is exactly wrong next to `beat-breathe`, whose whole job is
  stillness. The Player has no way to know a Beat is a *rest* rather than a
  *task*.
- **Anchor mismatch.** The cursor infers its geometry from the Beat-owning
  element's box. In advanced layouts — a point of interest inside a canvas or
  scene, a fragment inside a wide composition — the inferred box is not where
  attention should land, and scroll targeting follows the wrong geometry.
- **Immersive yield.** A full-bleed immersive Block (a 3D scene, a film clip,
  a fullscreen simulation) may need the cursor to fade out completely while
  Play navigation keeps working underneath.

---

<!--
id: design-position
title: Design Position
-->

## Design position: hints, not control

The cursor is the one visual constant that tells a learner "this is where I
am" on every path they play. Arbitrary per-component restyling would spend
that trust, so the contract should be a **bounded semantic vocabulary the
Player renders**, not a styling surface. The analogy is `aria-live="polite"`:
the author expresses intent, the platform owns the presentation.

Consequences:

- Traits are small enumerated sets, not free values or CSS.
- Hints are advisory. The Player may ignore or clamp them (forced colors,
  keyboard-only focus indication, a user's "always show cursor" setting).
- Themes and hosts decide what each trait value looks like; authored content
  never does.
- Older Players ignore unknown hints; content degrades to today's behavior.

---

<!--
id: trait-model
title: The Trait Model
-->

## The trait model

Three orthogonal traits cover the observed needs. Named variants are
shorthand presets over the same traits, so common cases stay one word.

| Trait | Values (illustrative) | What the Player maps it to |
| --- | --- | --- |
| `shape` | `frame` (default), `rule`, `dot` | Cursor geometry: full box frame, a side rule, a minimal marker |
| `presence` | `standard` (default), `quiet`, `hidden` | Ring contrast, pulse/motion, scroll easing; `hidden` yields visually |
| `anchor` | inferred (default), authored element or region | Where the cursor attaches and where scroll targeting aims |

Illustrative variant presets: `quiet` (`shape: dot`, `presence: quiet`),
`spotlight` (today's full treatment, deliberately), `immersive`
(`presence: hidden` with the re-materialize behavior below).

How the Focus Beats would use it: `beat-breathe` and `beat-pause` declare the
`quiet` variant; `beat-think` stays `standard` so the held question reads as
work; `beat-timer` anchors the cursor to its prompt-and-track region rather
than the whole section.

Exact names and value sets are Core's to settle; the point is the shape of the
contract — few traits, enumerated values, composable, Player-rendered.

---

<!--
id: authoring-surfaces
title: Authoring Surfaces
-->

## Authoring surfaces

Three declaration points, from static to dynamic:

- **Block topmatter** for authored prose and raw HTML:

  ```md
  <!--
  cursor: quiet
  -->
  ```

- **Component template or usage attribute** for a component's default tone,
  e.g. `cursor="quiet"` on the template root, overridable at usage.

- **A runtime hint API** for dynamic anchors and presence inside live
  components, shaped like the existing ephemeral `ctx.play.actions` contract:

  ```js
  ctx.play.cursor.hint({ presence: "quiet", anchor: $("[data-track]") })
  ```

  Hints are ephemeral, owned by the instance, cleared on disposal, and
  republished when the meaningful geometry changes — the same lifecycle rules
  Context Actions already follow. A dynamic anchor is how a scene component
  keeps the cursor (and scroll targeting) on the point of interest as it
  moves.

---

<!--
id: hidden-and-immersive
title: Hidden And Immersive Behavior
-->

## The hidden case

`presence: hidden` is the sharpest edge and needs explicit rules:

- **Visual-only.** Play focus, Beat traversal, announcements, and input all
  keep working; only the rendered cursor yields.
- **Re-materialize on intent.** Like video-player controls, the cursor fades
  back in on keyboard navigation input or pointer movement toward it, then
  yields again. A learner is never stranded without wayfinding they asked for.
- **Accessibility floor wins.** Keyboard-driven focus indication cannot be
  removed by an authored hint; a user or host "always show cursor" preference
  overrides `hidden` entirely, the same way reduced motion overrides authored
  animation.
- **Exit restores.** Leaving the immersive Beat restores the surrounding
  presence; the hint never leaks past its owner.

---

<!--
id: precedence-and-boundaries
title: Precedence And Boundaries
-->

## Precedence and non-goals

Strongest to weakest:

1. user and host settings (always-show, forced colors, reduced motion);
2. Player accessibility minimums (keyboard focus indication);
3. runtime component hints;
4. usage attributes;
5. component template defaults;
6. Block topmatter;
7. theme and Player defaults.

Non-goals, deliberately: free CSS override of cursor chrome, per-Beat custom
cursor rendering or slotted cursor markup, authored control of cursor timing
curves, and any hint that carries meaning the content does not also carry
itself — content must remain fully usable if every hint is ignored.

---

<!--
id: open-questions
title: Open Questions
-->

## Open questions

- Is motion its own trait (`motion: standard | calm | none`) or folded into
  `presence`? Folding keeps the vocabulary smaller; splitting maps better onto
  reduced-motion handling.
- Should Block topmatter accept trait maps or only variant names? Variants
  only may be enough at the Block level, with traits reserved for components.
- Does `anchor` need a static form for raw HTML (an attribute on a
  descendant), or is it a component-only capability?
- Whether a public CSS-token escape hatch (`--pmx-play-cursor-*`) is ever
  warranted, or whether it reopens chrome restyling by the back door.

Next experiment: propose the trait contract in the main `pathmx` repository,
and once a Player build carries it, wire the Focus Beats declarations and
re-review the lab's Play feel end to end.

[Back to the research index](./index.path.md)
