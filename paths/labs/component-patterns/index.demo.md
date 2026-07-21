---
status: experimental
---

[@patterns]: ./interaction-patterns.components.md

# Interaction Patterns

Three small interaction patterns: staged reasoning, a direct-manipulation
studio with a saved observation, and an async sample stream.

---

## Player-Visible Model Steps

Predict, Inspect, and Explain are ordered stages on one Beat.

<model-stepper
states="predict | inspect | explain"
label="Outlier reasoning stages"
title="Why did the mean move?"

>

  <div data-model-panel="predict">
    <strong>Predict:</strong> If the largest value grows, which statistic will
    move farther?
  </div>
  <div data-model-panel="inspect">
    <strong>Inspect:</strong> The mean uses the magnitude of every value; the
    median uses the middle position.
  </div>
  <div data-model-panel="explain">
    <strong>Explain:</strong> State what changed, what stayed fixed, and why.
  </div>
</model-stepper>

---

<!--
type: model
id: outlier-model
actions:
  save: responses.save
response:
  observation: 22
-->

## Data-Driven Direct Manipulation

Move the slider, then save the observation you want to keep.

<outlier-studio
  values="12,13,12,14,13,60"
  min="14"
  max="100"
  label="Delivery times in minutes"
/>

---

## Async Data And Presented Lifetime

A local JSON stream that loads, fails loudly when needed, and only advances
while this Beat is presented.

<sample-stream label="Delivery-time samples" />
