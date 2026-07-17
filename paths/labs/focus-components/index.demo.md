---
title: Focus Beats
description: Minimal beat components — pause, breathe, think, timed focus — demonstrated inside a playable micro-lesson.
route: /labs/focus-components
theme:
  color:
    accent: "#0f766e"
    focus: "#b45309"
  dark:
    color:
      accent: "#5eead4"
      focus: "#fbbf24"
---

[@focus]: ./focus.components.md

# Focus Beats

Focus beats are punctuation for attention. Each one is a small, quiet mark in
the flow — a rest, a breath, a held question, a timebox — that curriculum can
drop between moves to shape how a lesson feels to play through.

The family's design rules:

- A beat is typographic, not a widget. No cards, no chrome, no dashboards;
  whitespace and stillness carry the design.
- The Player does the pacing. Advancing the lesson is the interaction; a beat
  makes that moment feel intentional.
- A beat never blocks, scores, diagnoses, plays audio, or records. All state
  stays in the browser.

The micro-lesson below uses all four beats in earnest. Play it end to end
first; the author-facing grammar follows it.

---

<!--
type: lesson
id: estimate-arrival
title: A Two-Minute Estimate
-->

## A two-minute estimate

You are going to produce a defensible number for something you have never
counted: **how many piano tuners work in Chicago?**

No searching, no calculator. The skill being trained is decomposition —
turning one unknowable number into a chain of roughly knowable ones.

<beat-breathe cycles="2">Two slow breaths, and commit to doing this without looking anything up.</beat-breathe>

---

<beat-think prompt="Before any arithmetic: is the answer closer to 10, 100, or 1,000? Pick one and hold it.">
  Most people's instinct lands near 100. The next two minutes find out whether
  a reasoned chain agrees with your gut — not whether it beats it.
</beat-think>

---

Build the chain out of numbers you can half-know: people in Chicago, people
per household, households with a piano, tunings a piano needs per year, and
tunings one tuner can do in a year.

<beat-timer minutes="2">Work the chain with round numbers. A wrong-but-reasoned answer beats no answer.</beat-timer>

<beat-pause seconds="6">Hold your number. Don't revise it yet.</beat-pause>

---

## One worked chain

About 2.7 million people, at roughly 2.5 per household, is about a million
households. If one in twenty has a piano, that is 50,000 pianos, each tuned
about once a year — 50,000 tunings. A tuner doing four a day, five days a
week, does about 1,000 a year. So Chicago supports on the order of **fifty
piano tuners**.

Fermi's point was never the number. Honest links rarely miss by more than a
factor of two each, and their errors tend to cancel.

<beat-think prompt="Where did your chain diverge from this one — and did the divergence change the order of magnitude?">
  One shaky link rarely moves the exponent. Optimism in every link is what
  ruins an estimate, which is also why writing the chain down beats holding it
  in your head.
</beat-think>

---

<!--
id: grammar
title: The Grammar
-->

## The grammar

Four beats, one authoring shape each. All of them read as plain Markdown, keep
state in the browser, and never gate forward movement.

| Beat | The move | Props |
| --- | --- | --- |
| `<beat-pause>` | A typographic rest. With `seconds`, its three dots fill quietly while the learner sits with the moment. | `seconds` (optional) |
| `<beat-breathe>` | A short breath cycle before demanding work. Runs only while presented, settles on its own, and stays settled. | `cycles` (3), `inhale` (4), `exhale` (6) |
| `<beat-think>` | A held question. The prompt stands alone as its own Beat; advancing — or Reveal in Browse — uncovers the continuation. | `cue`, `reveal` |
| `<beat-timer>` | A timebox for doing, not reading. Learner-started, pausable, pauses itself off-Beat, never auto-advances. | `minutes` (2), `cue` |

Authored, a beat reads as one quiet line in the source:

```md
<beat-pause seconds="6">Hold your number. Don't revise it yet.</beat-pause>

<beat-think prompt="Before any arithmetic: 10, 100, or 1,000?">
  Most instincts land near 100.
</beat-think>
```

---

## Boundaries

- All beat state is browser-local. A durable reflection or answer belongs to a
  question Block with a real response contract, never to a beat.
- Timing and breathing are private interaction state, not Player states;
  skipping forward never steps a learner through animation phases.
- Reduced motion swaps animation for immediate state changes and plain text.
- Without JavaScript, every beat renders as readable prose.

[Back to the labs index](../index.path.md)
