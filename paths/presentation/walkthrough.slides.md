---
type: slides
status: ready
title: What the learning-system evals taught us
date: 2026-07-21
related:
  - ../guides/self-learning-manual-test.guide.md
  - ../tasks/2026-07-15-prepare-learner-starter-and-submission.task.md
  - ../tasks/2026-07-20-produce-submission-video.task.md
theme:
  color:
    bg: "#f7f3ea"
    fg: "#1d2a26"
    accent: "#147d6c"
    surface: "#fffdf8"
    muted: "#5e6e68"
    border: "#cad8d2"
  prose:
    size: 1.12rem
    leading: 1.45
  measure: 72ch
  shape:
    radius: 0.8rem
play:
  steps:
    lists: items
    tables: rows
---

<!-- id: opening -->

# We tested the learning system, not just the lesson

### What the Codex eval loop taught us about a durable PathMX starter

`bootstrap.md` → learner space → milestone map → complete module → adaptation

---

<!-- id: problem -->

# A lesson can be good and still make learning feel broken

Our first learning loop stayed too close to the learner's next move.

- The learner received too little structure to see achievable progress.
- Each small step could require another slow agent turn.
- Installation, context gathering, and authoring competed with learning time.

The product requirement became clear: **prepare a coherent learning buffer,
then adapt at meaningful checkpoints.**

---

<!-- id: harness -->

# The harness rehearses the real journey from one instruction

```text
hosted bootstrap
      ↓
isolated repository + real Codex CLI turns
      ↓
onboarding → proposed map → confirmed map → full module → return
      ↓
repository snapshots + phase contracts + quality judge + latency report
```

Four learner profiles exercised different failure surfaces: a concrete SQL
beginner, an ambiguous AI goal, off-screen guitar practice, and a returning
learner who reports confusion.

---

<!-- id: power-finding -->

# The default-strength profile passed quality—and exposed a 12m43s wait

| Scenario | Quality | Total flow | Experience finding |
| --- | ---: | ---: | --- |
| SQL beginner | 100% checks | 8m55s | Buffered module and exact route passed |
| Ambiguous AI goal | 100% checks + judge | 18m55s | Final turn alone took 12m43s |
| Offline guitar | 100% checks | 10m51s | Non-screen practice survived the flow |
| Return with confusion | 100% checks + judge | 13m46s | Progress and feedback stayed honest |

Quality was not the only acceptance criterion. **Agent latency is part of the
learner experience.**

---

<!-- id: floor-finding -->

# The weaker profile showed exactly where instructions were doing too little

| Iteration | What failed | Score |
| --- | --- | ---: |
| Initial | Authored a module before map confirmation; help was thin | 90.9% |
| Map-only revision | Respected the boundary, but left the map in chat | 86.5% |
| Persisted-map revision | Added an invalid Player root; module support failed | 59%, critical fail |

These were useful failures. Each one isolated a place where a capable agent
had been compensating for an underspecified system.

---

<!-- id: contracts -->

# Every failure became a repository contract

| Eval finding | Durable change |
| --- | --- |
| Premature authoring | Phase contracts enforce map-first confirmation |
| Chat-only plan | Proposed Paths are persisted and linked with milestone status |
| Blank-page variance | Path and two-session module scaffolds ship with the skill |
| Accidental Player roots | The Starter allows one configured root and checks it |
| Thin learning support | Checks require examples, hints, smaller attempts, review, and checkpoint |
| Ambiguous navigation | Exact-route guidance rejects broad cache and basename searches |
| Invisible waiting | Reports track first update, silent gaps, and five-minute turns |

---

<!-- id: candidate -->

# The hardened fast-profile candidate is green

<div class="scorecards">
  <div class="scorecard"><strong>100% / 100%</strong><span>checks / judge<br>ambiguous goal</span></div>
  <div class="scorecard"><strong>6m56s</strong><span>complete flow<br>slowest turn 3m22s</span></div>
  <div class="scorecard"><strong>100% / 100%</strong><span>checks / judge<br>return + adapt</span></div>
  <div class="scorecard"><strong>10m07s</strong><span>five-turn flow<br>no turn over 5m</span></div>
</div>

The learner saw a useful first update in **4–13 seconds** on every measured
turn. Staged authoring made progress visible while the module was being built.

[@styles]: ./walkthrough.css

---

<!-- id: limits -->

# This proves the candidate lane—not the whole release experience

**Supported by evidence**

- The map-first boundary, buffered module, exact route, and return flow work.
- Strong and faster profiles can produce checked, useful learning artifacts.
- Failure-driven guardrails improve outcomes without relying on hidden context.

**Still to prove**

- Repeat final-candidate runs to measure variance.
- Exercise the published Starter and hosted bootstrap after release.
- Review the real Codex Desktop Browser and permission experience manually.
- Reduce silent gaps that still exceeded one minute in some turns.

---

<!-- id: next -->

# Next: publish, rehearse manually, then gate on variance

- Publish the Starter and canonical skills against the verified PathMX baseline.
- Run hosted-bootstrap scenarios in a fresh Codex Desktop project.
- Repeat fast and default-strength profiles; track quality and waiting separately.
- Record only after Source, Player, exact routes, and the return flow pass.

**Team test guide:** [Run the manual Codex Desktop flow](../guides/self-learning-manual-test.guide.md)

**The durable artifact is the product:** a personal learning repository that
both the learner and their future agents can understand.
