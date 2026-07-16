---
title: Focus Components
description: A test lab for Literate Components that help learners pause, focus, reflect, and reset.
route: /labs/focus-components
theme:
  color:
    accent: "#0f766e"
    focus: "#b45309"
    surface: "#ffffff"
    border: "#d7ded9"
    muted: "#59665f"
  dark:
    color:
      bg: "#101412"
      fg: "#eef4ef"
      surface: "#17201b"
      border: "#33423a"
      muted: "#b0beb5"
      accent: "#5eead4"
      focus: "#fbbf24"
  measure: 88ch
---

[@focus]: ./focus.components.md

# Focus Components

This lab gives us a concrete set of Literate Components to test before naming
the family or deciding what should graduate into the learner Starter.

The working product name is **Focus Components**. The learner-facing move is
still “take a beat”: pause, narrow attention, regulate effort, then return to
the path with a clearer next action.

---

<!--
type: experiment
id: focus-lens
title: Single-task Focus Lens
-->

## Single-task Focus Lens

Use this when a learner is about to start a task and needs to choose one
specific next action instead of reading everything at once.

<focus-lens
  eyebrow="Focus component"
  title="Choose one useful next action"
  states="notice | narrow | begin"
>
  <section data-focus-panel="notice" data-label="Notice">
    <h3>Notice the whole task.</h3>
    <p>Read the prompt once. Let your eye find the part that feels most actionable.</p>
  </section>
  <section data-focus-panel="narrow" data-label="Narrow">
    <h3>Narrow to one input.</h3>
    <p>Pick the source, sentence, diagram, or question you will work with first.</p>
  </section>
  <section data-focus-panel="begin" data-label="Begin">
    <h3>Start with the smallest visible move.</h3>
    <p>Write one sentence, make one mark, or run one check. Then continue from evidence.</p>
  </section>
</focus-lens>

---

<!--
type: experiment
id: breath-pacer
title: Breath Pacer
-->

## Breath Pacer

Use this when a learner needs a short reset before continuing. It has no audio,
no durable evidence, and no hidden scoring.

<breath-pacer
  eyebrow="Take a beat"
  title="Four quiet breaths"
  inhale="4"
  hold="2"
  exhale="6"
  rest="2"
/>

---

<!--
type: experiment
id: reflection-prompt
title: Reflection Prompt
-->

## Reflection Prompt

Use this after an answer, practice round, or review note. The draft is private
browser-local state; a separate question or response Block should own durable
learner evidence.

<reflection-prompt
  eyebrow="Reflect"
  title="Name what changed"
  prompts="What is clearer now? | What still feels noisy? | What is the next honest move?"
  placeholder="Write one private sentence..."
/>

---

<!--
type: experiment
id: grounding-check
title: Grounding Check
-->

## Grounding Check

Use this after overload, failure, or a high-stakes practice moment. It gives the
learner a small checklist that restores agency without pretending to diagnose or
solve the underlying stress.

<grounding-check
  eyebrow="Reset"
  title="Come back to the room"
/>

---

## Review Notes

- `focus-lens` exposes meaningful stages as ordered Player-traversable state.
- `breath-pacer` runs timing only while presented and starts paused for reduced
  motion users.
- `reflection-prompt` keeps draft notes local and deliberately avoids durable
  response contracts.
- `grounding-check` is a keyboard-friendly checklist with local reset behavior.

[Back to the labs index](../index.path.md)
