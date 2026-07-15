---
status: experimental
---

[@patterns]: ./interaction-patterns.components.md

# Literate Component Proving Ground

These examples are reference implementations for Andrew and other Build Week
agents. Copy the smallest pattern that matches the experiment; do not combine
all three into every interaction.

Minimum PathMX: `@fellowhumans/pathmx@0.1.9`. The durable Outlier Studio uses
`ctx.response` and `responses.save` and intentionally has no 0.1.8
compatibility path.

| Pattern        | Use it for                                       | Canonical seam                                   |
| -------------- | ------------------------------------------------ | ------------------------------------------------ |
| Model Stepper  | Meaningful stages the Player should traverse     | ordered `states` and `state.set`                 |
| Outlier Studio | Direct manipulation plus explicit durable evidence | `ctx.response`, local draft state, and `responses.save` |
| Sample Stream  | Async data plus continuous work                  | `ctx.data`, loading/failure UI, and `ctx.effect` |

---

## Player-Visible Model Steps

The states are ordered with `|`, so Predict, Inspect, and Explain become
meaningful steps on the component's Beat. The buttons and Player controls use
the same `state` channel.

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

Moving the slider changes a private draft. Save writes only the final
observation into this Block's readable `response` data. Reloading reconstructs
the component from `ctx.response`; intermediate slider positions stay local.

<outlier-studio
  values="12,13,12,14,13,60"
  min="14"
  max="100"
  label="Delivery times in minutes"
/>

---

## Async Data And Presented Lifetime

The stream loads a local JSON resource, renders an explicit loading or failure
message, and advances only while the component is presented. Enter and leave
this Beat in Play to verify that its interval stops and resumes without
overlap.

<sample-stream label="Delivery-time samples" />

---

## Copy Rules

1. Keep each script scoped to its supplied `el`; never scan the page.
2. Use ordered component state only for stages the Player should understand.
3. Keep exploratory browser state out of learner evidence.
4. Put one hidden `response` control in the coordinating component when the
   stable Block maps `save: responses.save`.
5. Show loading, failure, and reduced-motion behavior in authored UI.
6. Put intervals, animation frames, audio, and render loops in
   `ctx.effect(..., { when: "presented" })`.
7. Link any proposed new runtime or Player capability from a design review;
   do not prototype it as an undocumented local API.

Review the full literate definitions in
[Interaction Patterns](./interaction-patterns.components.md).
