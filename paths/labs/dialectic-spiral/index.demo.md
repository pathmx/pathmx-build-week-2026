---
title: The Spiral of Thought
description: A native PathMX port of the Hegelian Spiral generative artifact.
route: /labs/dialectic-spiral
fonts:
  editorial:
    href: https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400..700&family=Inter:opsz,wght@14..32,400..700&display=swap
theme:
  font:
    heading: '"Fraunces", var(--pmx-font-heading)'
    body: '"Inter", var(--pmx-font-body)'
  measure: 88ch
  color:
    bg: "#f6f3ec"
    fg: "#211f1a"
    muted: "#6f6a5c"
    surface: "#fbf9f4"
    link: "#6d4fa3"
    accent: "#6d4fa3"
    border: "rgba(96, 88, 70, 0.28)"
    focus: "#6d4fa3"
  dark:
    color:
      bg: "#0c0c15"
      fg: "#e9e7f5"
      muted: "#9a96b8"
      surface: "#14131f"
      link: "#b388ff"
      accent: "#b388ff"
      border: "rgba(154, 150, 184, 0.28)"
      focus: "#b388ff"
---

[@spiral]: ./dialectic-spiral.components.md
[@styles]: ./styles/dialectic-spiral-demo.css

<p class="spiral-demo__kicker">A generative artifact, rebuilt natively</p>

# The spiral of thought.

Hegel's dialectic is usually drawn as a circle: thesis, antithesis, synthesis,
repeat. The circle is wrong in one decisive way — **nothing ever returns to
where it started**. Each resolution keeps what it cancels and lifts it higher.
The honest shape is a spiral.

<div class="spiral-demo__hero-mark" aria-hidden="true">
  <span></span><i></i><b></b>
</div>

---

<!--
type: experiment
id: climb-the-dialectic
title: Climb the Dialectic
-->

<p class="spiral-demo__kicker">Conceptual instrument</p>

# One turn per triad.

Step through the stages, or play the whole climb. Each turn of the spiral
cycles through its three moments; each synthesis becomes the next thesis, one
level higher and one radius wider.

<dialectic-spiral />

---

<!--
type: explanation
id: read-the-motion
title: Read the Motion
-->

<p class="spiral-demo__kicker">Read the motion</p>

# What should your eye notice?

- **The motion is double.** Circular — the triad repeats — and upward: no turn
  ends at the height where it began.
- **Negation is the engine.** The rose-colored arcs are not failures; they are
  what forces each position to grow past itself.
- **The radius widens.** Later syntheses hold more inside them, so each turn
  is literally bigger than the last.

---

<!--
type: reflection
id: carry-the-shape
title: Carry the Shape Forward
-->

<p class="spiral-demo__kicker">Aufhebung</p>

# To sublate: cancel, preserve, lift.

The German *aufheben* means all three at once, and the spiral is that word
drawn as a figure:

<p class="spiral-demo__equation"><span>thesis</span><b>⊕</b><span>antithesis</span><strong>→ synthesis</strong><b>=</b><span>the next thesis, one level up</span></p>

Wherever an idea, a codebase, or an institution grows by absorbing its own
contradictions, this is the shape it traces.

---

<!--
type: reference
id: lineage
title: Lineage
-->

<p class="spiral-demo__kicker">Lineage</p>

# Where this came from.

This lab is a native port of the
[Hegelian Spiral](https://hegelianspiral.pplx.app/) from the team's
[shared Perplexity artifacts](../../research/resources.path.md). The original
autoplays once; here the spiral's stages are ordered component states, so the
Player's own forward step performs each sublation. The cross-artifact style
ideas worth reusing are collected in the
[design notes](../../research/perplexity-artifact-design-notes.notes.md).

[Back to the labs index](../index.path.md)
