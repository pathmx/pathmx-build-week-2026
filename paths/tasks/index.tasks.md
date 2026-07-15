---
type: task-dashboard
status: active
date: 2026-07-15
---

# Build Week Tasks

This is the working queue for humans and Codex through the July 21 submission.
Each linked task file is the source of truth; this dashboard projects its
status, owner, next move, and due date. Row order is priority within a lane.

Status moves through `ready`, `in-progress`, `review`, `blocked`, and `done`.
The owner is the accountable human, never a Codex task or session identifier.

---

## In Progress

| Task | Owner | Next move | Due |
| --- | --- | --- | --- |
| [Spike the Starter init flow](./2026-07-15-spike-starter-init-flow.task.md) | Mark | Land the candidate flow, then assign tester-specific guide copies and run tasks | July 17 |

---

## Review

No tasks currently need review.

---

## Ready

| Task | Owner | Next move | Due |
| --- | --- | --- | --- |
| [Design scheduled Git sync for muthurd](./2026-07-15-design-scheduled-git-sync.task.md) | Mark | Agree on pull-only versus bidirectional authority and conflict behavior | July 16 |
| [Prototype learner scenarios](./2026-07-15-prototype-learner-scenarios.task.md) | Andrew | Choose a scenario and build the smallest coherent flow | July 18 |
| [Draft the college-student scenario](./2026-07-15-draft-college-student-scenario.task.md) | Tram | Choose the learning outcome and outline its learner journey | July 18 |
| [Define and run Codex-driven evaluations](./2026-07-15-run-codex-driven-evaluations.task.md) | Tram | Define the first reproducible evaluation case | July 19 |
| [Select the demo story and video outline](./2026-07-15-select-demo-story.task.md) | Tram | Rank the candidate scenarios against the product claim | July 18 |
| [Prepare the learner starter and submission](./2026-07-15-prepare-learner-starter-and-submission.task.md) | Unassigned | Name an owner and audit the starter's current gap | July 20 |
| [Set up repository commit notifications](./2026-07-15-set-up-commit-notifications.task.md) | Andrew | Choose the team-safe notification trigger | July 16 |

---

## Blocked

No tasks are currently blocked.

---

## Done

| Task | Owner | Result |
| --- | --- | --- |
| [Verify and graduate the PathMX 0.1.9 reference set](./2026-07-15-verify-pathmx-0-1-9-reference-set.task.md) | Mark | Released-contract review, full build, and focused reference Play checks complete |
| [Provision the Build Week Space on muthurd](./2026-07-15-provision-muthurd-space.task.md) | Mark | Clean checkout, current tooling, and read-only `build-week.pathmx.net` Space verified |
| [Publish the workspace checkpoint to main](./2026-07-15-publish-workspace-checkpoint.task.md) | Mark | Full worktree audited, merged with remote `main`, and published |
| [Scaffold Codex task coordination](./2026-07-15-scaffold-codex-task-coordination.task.md) | Mark | Dashboard, agent workflow, stale-reference cleanup, and verification complete |

---

## Codex Shortcuts

- **Track or add work:** create a dated `.task.md` Source and add its row.
- **Take or work on a task:** claim it as `in-progress` before implementation.
- **Block or review a task:** update its Source and move its row in one change.
- **Finish a task:** link artifacts, record verification, and move it to Done.
- **Refresh the board:** reconcile all task frontmatter with these lanes.
