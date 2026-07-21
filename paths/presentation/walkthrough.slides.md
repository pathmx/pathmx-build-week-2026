---
type: slides
status: ready
title: Codex learning-system eval review
date: 2026-07-21
related:
  - ../guides/self-learning-manual-test.guide.md
  - ../tasks/2026-07-15-prepare-learner-starter-and-submission.task.md
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
  dark:
    color:
      bg: "#101815"
      fg: "#e9f2ee"
      accent: "#63d2b8"
      surface: "#18241f"
      muted: "#a9bbb4"
      border: "#3c544b"
      link: "#8adfcf"
      focus: "#a8efe2"
play:
  steps:
    lists: items
    tables: rows
---

<!-- id: opening -->

# Codex learning-system eval review

### Method, findings, and changes to the PathMX skills and Learning Starter

**Review baseline:** PathMX 0.1.22 · Codex CLI · July 21, 2026

---

<!-- id: problem -->

# Evaluation objective and acceptance criteria

Starting from only `bootstrap.md`, could an agent create and maintain a useful
personal learning repository for a nontechnical learner?

- **Structure:** map the full Path before authoring a module.
- **Learning quality:** supply examples, practice, hints, review, and checks.
- **Repository quality:** leave valid PathMX and durable progress evidence.
- **Continuity:** adapt honestly when the learner returns with new evidence.
- **Responsiveness:** expose useful progress without blocking the learner.

Quality scores and learner-visible latency were evaluated separately.

---

<!-- id: harness -->

# Harness and phase protocol

```text
bootstrap.md
      ↓
temporary repository + real Codex CLI session
      ↓
onboard → propose map → confirm map → author module → learner return
      ↓
snapshot checks + phase contracts + independent judge + timing report
```

Each phase had an explicit allowed scope and expected repository state. The
harness retained the real agent transcript, working tree, check output, and
timing events for later inspection.

---

<!-- id: coverage -->

# Scenario coverage

| Profile | Purpose | Main failure surface |
| --- | --- | --- |
| SQL beginner | Concrete technical goal | Scaffolding and exact Player route |
| Ambiguous AI goal | Goal requires clarification | Question quality and map boundary |
| Offline guitar | Practice happens away from screen | Modality and durable evidence |
| Returning learner | Learner reports confusion | Honest progress and adaptation |

Default-strength runs tested the expected quality ceiling. Faster/lower-reasoning
runs tested whether the repository instructions carried enough of the behavior.

---

<!-- id: power-finding -->

# Default-strength results: quality passed, latency did not

| Scenario              |             Quality | Total flow | Experience finding                     |
| --------------------- | ------------------: | ---------: | -------------------------------------- |
| SQL beginner          |         100% checks |      8m55s | Buffered module and exact route passed |
| Ambiguous AI goal     | 100% checks + judge |     18m55s | Final turn alone took 12m43s           |
| Offline guitar        |         100% checks |     10m51s | Non-screen practice survived the flow  |
| Return with confusion | 100% checks + judge |     13m46s | Progress and feedback stayed honest    |

All four flows produced valid artifacts. The 12m43s final turn showed that
artifact quality alone was not sufficient for an acceptable learning loop.

---

<!-- id: floor-finding -->

# Lower-reasoning runs exposed instruction gaps

| Iteration              | What failed                                              |              Score |
| ---------------------- | -------------------------------------------------------- | -----------------: |
| Initial                | Authored a module before map confirmation; help was thin |              90.9% |
| Map-only revision      | Respected the boundary, but left the map in chat         |              86.5% |
| Persisted-map revision | Added an invalid Player root; module support failed      | 59%, critical fail |

The changing score is less important than the failure sequence: enforcing one
boundary exposed the next missing repository contract.

---

<!-- id: contracts -->

# Findings translated into repository contracts

| Eval finding            | Durable change                                                           |
| ----------------------- | ------------------------------------------------------------------------ |
| Premature authoring     | Phase contracts enforce map-first confirmation                           |
| Chat-only plan          | Proposed Paths are persisted and linked with milestone status            |
| Blank-page variance     | Path and two-session module scaffolds ship with the skill                |
| Accidental Player roots | The Starter allows one configured root and checks it                     |
| Thin learning support   | Checks require examples, hints, smaller attempts, review, and checkpoint |
| Ambiguous navigation    | Exact-route guidance rejects broad cache and basename searches           |
| Invisible waiting       | Reports track first update, silent gaps, and five-minute turns           |

---

<!-- id: candidate -->

# Final candidate results

- **100% / 100%** Checks / judge · ambiguous goal
- **6m56s** Complete flow · slowest turn 3m22s
- **100% / 100%** Checks / judge · return + adapt
- **10m07s** Five-turn flow · no turn over 5m

The learner saw a useful first update in **4–13 seconds** on every measured
turn. Staged authoring made progress visible while the module was being built.

[@styles]: ./walkthrough.css

---

<!-- id: limits -->

# Interpretation and limits

**Supported**

- The map-first boundary, buffered module, exact route, and return flow work.
- Strong and faster profiles can produce checked, useful learning artifacts.
- Failure-driven guardrails improve outcomes without relying on hidden context.

**Not yet established**

- Repeat final-candidate runs to measure variance.
- Exercise the published Starter and hosted bootstrap after release.
- Review the real Codex Desktop Browser and permission experience manually.
- Reduce silent gaps that still exceeded one minute in some turns.

---

<!-- id: next -->

# Recommended next validation

- Publish the Starter and canonical skills against the verified PathMX baseline.
- Run hosted-bootstrap scenarios in a fresh Codex Desktop project.
- Repeat fast and default-strength profiles; track quality and waiting separately.
- Compare repeated runs by phase, quality score, first-update time, and longest
  silent interval.

**Team test guide:** [Run the manual Codex Desktop flow](../guides/self-learning-manual-test.guide.md)

The deck reports the current evidence; it is not a substitute for repeated
runs or the manual Codex Desktop review.
