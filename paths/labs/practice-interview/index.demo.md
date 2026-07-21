---
type: demo
status: experimental
title: Practice Interview Simulator
description: A voice practice interview path with scoring, coaching follow-up, and an evidence packet.
route: /labs/practice-interview
related:
  - ../../research/practice-interview-voice-agent.path.md
  - ../../tasks/2026-07-16-spike-practice-interview-voice.task.md
---

[@interview]: ./practice-interview.components.md

# Practice Interview Simulator

Pick a role, see the rubric, run a practice session, then leave with a scored
follow-up and an evidence packet.

---

<!--
type: design
id: what-this-proves
title: What This Path Needs
-->

## What this path needs

1. a practice mode and question that match the target role;
2. a visible rubric before the answer begins;
3. a live-session state you can trust;
4. transcript and answer-quality signals while you work;
5. dimension-level scoring with one concrete follow-up question;
6. a dossier-style evidence packet for the next move.

---

<!--
type: simulation
id: behavioral-loop
title: Behavioral Interview Loop
-->

## Behavioral Interview Loop

Try the strong and rough sample answers across Behavioral, Technical, and
Product/System modes.

<interview-rehearsal
  states="setup | answer | score | route"
  label="Practice interview simulator"
  role="Frontend engineer intern"
  question="Tell me about a time you handled disagreement on a team."
/>

[Back to the labs](../index.path.md)
