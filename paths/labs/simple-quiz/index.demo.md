---
type: quiz
status: reference
title: Simple Learner Quiz
description: A short one-question-at-a-time quiz whose answers are submitted through PathMX Actor Actions and remain readable Markdown.
route: /labs/simple-quiz
---

[@styles]: ./simple-quiz.css

# Simple Learner Quiz

This is the smallest durable quiz pattern in PathMX: one readable question per
Block, one normal form per question, and one trusted Actor Action for each
submission. Enter Play to move through it like a short Typeform.

Each answer is written back into this Source as `response.choice` in the
question Block's invisible comment topmatter. A learner agent can read that
durable source evidence after reload, while the rendered lesson does not repeat
the learner's answer as content.

## What to copy

Copy a `type: question` Block with a stable `id`, at least two plain list
options, and a Block-local `submit` Action name mapped to
`questions.submitSingleChoice`. Use `---` between questions so each remains a
coherent Play step. The
[scoped stylesheet](https://github.com/pathmx/pathmx/blob/main/paths/demos/simple-quiz/simple-quiz.css)
is optional.

Minimum PathMX: `@fellowhumans/pathmx@0.1.9`. This reference intentionally has
no 0.1.8 compatibility layer.

Upstream review source:
[canonical Simple Learner Quiz](https://github.com/pathmx/pathmx/tree/main/paths/demos/simple-quiz).
The immutable reviewed-commit link replaces this branch link when the Core
release gate lands.

---

<!--
type: question
id: learning-goal
actions:
  submit: questions.submitSingleChoice
-->

<p class="simple-quiz-step">Question 1 of 3 · learner intent</p>

## What would be most useful to accomplish today?

Choose the answer that best describes the outcome you want.

- Understand a difficult idea
- Practice a skill with feedback
- Prepare for a test or review
- Build something I can use

---

<!--
type: question
id: current-confidence
actions:
  submit: questions.submitSingleChoice
-->

<p class="simple-quiz-step">Question 2 of 3 · self-assessment</p>

## How confident do you feel about this topic right now?

Pick the closest starting point. There is no penalty for choosing honestly.

- I am completely new to it
- I recognize the basics
- I can use it with some help
- I can explain it to someone else

---

<!--
type: question
id: durable-source
actions:
  submit: questions.submitSingleChoice
-->

<p class="simple-quiz-step">Question 3 of 3 · knowledge check</p>

## Where should a durable PathMX learner answer live?

Choose the artifact that a person or agent can inspect after the browser
session ends.

- Only in the chat transcript
- In readable Markdown Source
- Only in browser-local component state

---

## The learner agent's next move

The first two answers collect learner context. The third provides a small
knowledge check. PathMX records the evidence; it does not hide an automatic
score in browser state. A learner agent can inspect the resulting
`response.choice` values, compare the knowledge-check response with the lesson
goal, and author the next explanation, practice Block, or follow-up quiz.
