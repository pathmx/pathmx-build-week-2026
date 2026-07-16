---
type: task
status: in-progress
owner: Mark
reviewer: Andrew
date: 2026-07-15
due: 2026-07-17
related:
  - ./2026-07-15-prepare-learner-starter-and-submission.task.md
  - ../work-log/2026-07-14-hackathon-meeting.notes.md
  - ../labs/self-learning-box/manual-test.guide.md
  - https://github.com/pathmx/pathmx-learning-starter
  - https://github.com/pathmx/pathmx/blob/main/paths/inbox/2026-07-15-pathmx-starter-init-mvp.issue.md
  - https://github.com/pathmx/pathmx/blob/main/paths/plans/pathmx-starter-init-mvp.design.md
  - https://github.com/pathmx/pathmx/blob/main/paths/plans/pathmx-starter-init-mvp.plan.md
---

# Spike The Starter Init Flow

## Outcome

Scope and prove the smallest PathMX Core flow that can materialize the
learner-facing repository as an ordinary folder with its `paths/` scaffold,
repository instructions, and Codex teaching skills.

The spike should make the Build Week clean-start claim concrete without
turning arbitrary remote templates, starter updates, or a general extension
installer into competition scope.

---

## Next Move

Finish and publish the MVP guide flow and required initializer path. Keep the
tester handoff pending until the guide is actually ready, then create one guide
copy and hub task per tester and run the
[self-learning Starter MVP test](../labs/self-learning-box/manual-test.guide.md)
from two uniquely generated folders with fresh Codex tasks.

---

## Done When

- Two independent testers record the full workflow beginning with the candidate
  `pathmx init <folder> --template self-learning` command, including exact CLI
  and Starter revisions.
- Each run reaches a working Player, natural Codex onboarding, an initial
  profile and path, one proximal-edge task, an explicit return from Player to
  Codex, one durable learner submission, and one evidence-based adaptation—or
  identifies the narrow owner of the failure.
- Each tester completes the Actor-backed survey in their own guide copy,
  confirms saved choices survive reload, records concise causal notes, and
  commits the guide plus their assigned task result.
- The clean learner command and resulting repository tree are explicit.
- The `pathmx-learning-starter` repository is the content baseline rather than
  a second hand-maintained scaffold invented in the CLI.
- The spike preserves current bare `pathmx init` behavior and stops before any
  unreviewed public manifest or arbitrary-URL contract.
- A clean temporary folder can be materialized, built, played, and opened by a
  fresh Codex task using only public or packed artifacts.
- The result records what should change in the Starter, skill, CLI, Player,
  Browser handoff, or Action path before a second Starter family is attempted.

---

## Activity

- **2026-07-15:** Reviewed the Build Week meeting notes, task board,
  `teach-me-anything` skill, current learner starter, and PathMX Core Starter
  shaping. Core contract design is in progress.
- **2026-07-15:** Created the public
  [`pathmx/pathmx-learning-starter`](https://github.com/pathmx/pathmx-learning-starter)
  repository and pushed its clean `main` baseline at
  `2019cc8749445e244041b21828a865bf2ddf904c`.
- **2026-07-15:** Core scope is tracked as the general
  [named Starter init issue](https://github.com/pathmx/pathmx/blob/main/paths/inbox/2026-07-15-pathmx-starter-init-mvp.issue.md),
  [contract packet](https://github.com/pathmx/pathmx/blob/main/paths/plans/pathmx-starter-init-mvp.design.md),
  and
  [implementation plan](https://github.com/pathmx/pathmx/blob/main/paths/plans/pathmx-starter-init-mvp.plan.md).
- **2026-07-15:** `pathmx self-update --check` confirmed 0.1.8 is current.
  The Build Week scratch build wrote 113 artifacts, the Core scratch build
  wrote 3,672 artifacts, and `git diff --check` passed in both workspaces.
- **2026-07-15:** Reframed the
  [self-learning Starter MVP test](../labs/self-learning-box/manual-test.guide.md)
  around the required candidate init flow, Codex folder/task setup, built-in
  Player browser, and a proximal-edge evidence/adaptation cycle. The guide now
  treats a missing public command as blocked rather than falling back to a Git
  clone.
- **2026-07-15:** PathMX 0.1.8 remains current. A scratch build wrote 113
  artifacts, and a temporary Player on port 3102 reports the guide at
  `/labs/self-learning-box/manual-test.guide` with 11 playable Blocks. The
  upcoming durable Action path was not exercised while authoring the guide;
  the workflow records a run as blocked when the required public release is
  unavailable.
- **2026-07-15:** Added a per-tester copy/task/commit workflow and seven
  decision-oriented `questions.submitSingleChoice` survey Blocks. The survey
  makes each run a direct Actor/input persistence test while retaining concise
  free-form notes for causal evidence. Public PathMX remains at 0.1.8, so live
  submission verification waits for 0.1.9 or a matching packed candidate.
- **2026-07-15:** The public 0.1.8 scratch build remains readable and writes
  113 artifacts. A current-Core build writes 18 artifacts and emits exactly
  seven `questions.submitSingleChoice` forms for the survey. Fourteen focused
  question and server Action tests pass, including readable Markdown writeback
  and checked-answer reconstruction after reload. The running public Player
  reports the expanded guide at the same route with 23 Blocks and HTTP 200;
  live survey submission remains deliberately unclaimed until 0.1.9 or the
  packed candidate is used with a tester copy.
- **2026-07-15:** Mark is continuing the MVP guide and initializer flow with a
  goal of publishing it later today. It is not ready for Andrew or Tram's
  tester handoff yet; their current work does not depend on it.
