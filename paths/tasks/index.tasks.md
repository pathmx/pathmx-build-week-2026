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
| [Spike the Starter init flow](./2026-07-15-spike-starter-init-flow.task.md) | Mark | Finish and publish the MVP guide flow; tester handoff waits until it is ready | July 17 |

---

## Review

| Task | Owner | Next move | Due |
| --- | --- | --- | --- |
| [Contribute research explorations and ideas](./2026-07-15-contribute-research-explorations.task.md) | Tram | Review both Campus Constellation components in Play with keyboard and pointer | July 18 |

---

## Ready

| Task | Owner | Next move | Due |
| --- | --- | --- | --- |
| [Explore reference labs and test the authoring skill](./2026-07-15-explore-reference-labs-and-test-authoring-skill.task.md) | Andrew | Tour the reviewed labs, then use Codex and the repo-local skill on one small lab | July 17 |
| [Design scheduled Git sync for muthurd](./2026-07-15-design-scheduled-git-sync.task.md) | Mark | Agree on pull-only versus bidirectional authority and conflict behavior | July 16 |
| [Prepare the learner starter and submission](./2026-07-15-prepare-learner-starter-and-submission.task.md) | Unassigned | Name an owner and audit the starter's current gap | July 20 |

---

## Blocked

No tasks are currently blocked.

---

## Done

| Task | Owner | Result |
| --- | --- | --- |
| [Sync the PathMX authoring skill](./2026-07-16-sync-pathmx-authoring-skill.task.md) | Mark | Complete canonical package synchronized; repeatable check/write command verified |
| [Resolve the Campus Constellation merge](./2026-07-15-resolve-campus-constellation-merge.task.md) | Mark | Both outcomes preserved as valid Blocks; conflict markers and whitespace errors removed |
| [Add a reviewed 3D Globe reference](./2026-07-15-add-three-globe-reference.task.md) | Mark | One-scene local-data globe copied from reviewed Core, linked, and verified in Browse and Play |
| [Update the muthurd gateway to PathMX 0.1.10](./2026-07-15-update-muthurd-gateway-pathmx-0-1-10.task.md) | Mark | CLI updated, gateway replaced, tunnel preserved, and public 0.1.10 assets verified |
| [Narrow the labs index to ready demos](./2026-07-15-narrow-labs-index.task.md) | Mark | Labs hub now links only the six ready demos; unfinished Sources remain unlinked |
| [Add a change log workflow](./2026-07-15-add-change-log-workflow.task.md) | Mark | Playable Block-based log, agent push rule, checker, and July 15 history added |
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
