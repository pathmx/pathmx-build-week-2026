---
type: demo
status: experimental
title: Practice Interview Simulator
description: A local PoC for a Realtime voice interview simulator, scoring loop, coaching follow-up, and evidence packet.
route: /labs/practice-interview
related:
  - ../../research/practice-interview-voice-agent.path.md
  - ../../tasks/2026-07-16-spike-practice-interview-voice.task.md
---

[@interview]: ./practice-interview.components.md

# Practice Interview Simulator

This lab prototypes the learner experience for a voice-first practice interview
path. The live Realtime API and custom Host Actions are intentionally not wired
here; this route proves the path shape, rubric, feedback loop, and durable
evidence boundary with a local simulation.

[Research and endpoint design](../../research/practice-interview-voice-agent.path.md)

---

<!--
type: design
id: what-this-proves
title: What This Proves
-->

## What This Proves

The smallest useful interview path needs six things:

1. a practice mode and question that match the learner's target role;
2. a visible rubric before the answer begins;
3. a live-session state the learner can trust;
4. transcript and answer-quality signals while the learner works;
5. dimension-level scoring with one concrete follow-up question;
6. a dossier-style evidence packet that can route the next PathMX Block.

The live version should replace the simulated text area with a browser WebRTC
session, but the evidence contract should stay the same: transcript summary,
scores, rationale, revision target, and next route.

---

<!--
type: simulation
id: behavioral-loop
title: Behavioral Interview Loop
-->

## Behavioral Interview Loop

Use the simulator directly or step through it in Play. Try the strong and rough
sample answers across the Behavioral, Technical, and Product/System modes. The
scoring is local and deterministic; it is only a stand-in for the proposed
`interview.turn.score` endpoint.

<interview-rehearsal
  states="setup | answer | score | route"
  label="Practice interview simulator"
  role="Frontend engineer intern"
  question="Tell me about a time you handled disagreement on a team."
/>

---

<!--
type: review
id: reviewer-checks
title: Reviewer Checks
-->

## Reviewer Checks

Review this as a product spike, not as a released integration.

- Does the four-stage loop feel like enough structure for a first interview
  path?
- Are mission choice, live-session state, transcript signals, score, follow-up,
  and evidence dossier legible without extra explanation?
- Is the proposed durable evidence small enough to be useful in Source while
  still capturing the reason for the next practice?
- Should the first real Action family be interview-specific, or should it prove
  a reusable custom Action endpoint shape?

[Back to the labs index](../index.path.md)
