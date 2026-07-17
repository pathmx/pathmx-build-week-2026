---
type: task-dashboard
status: active
date: 2026-07-15
reviewers: [Mark, Tram, Andrew]
---

# Build Week Tasks

This is the working queue for humans and Codex through the July 21 submission.
Each linked task file is the source of truth; this dashboard projects its
status, owner, reviewer, next move, and due date. Row order is priority within a
lane.

Status moves through `ready`, `in-progress`, `review`, `blocked`, and `done`.
The owner is the accountable human, never a Codex task or session identifier.
The reviewer is Mark, Tram, or Andrew; prefer someone other than the owner when
the task has a named owner.

---

## In Progress

| Task | Owner | Reviewer | Next move | Due |
| --- | --- | --- | --- | --- |
| [Explore reference labs and test the authoring skill](./2026-07-15-explore-reference-labs-and-test-authoring-skill.task.md) | Andrew | Mark | Manually review the campaign theme, keyboard behavior, and reduced motion; then finish the lab tour | July 17 |
| [Spike the Starter init flow](./2026-07-15-spike-starter-init-flow.task.md) | Mark | Andrew | Finish and publish the MVP guide flow; tester handoff waits until it is ready | July 17 |

---

## Review

| Task | Owner | Reviewer | Next move | Due |
| --- | --- | --- | --- | --- |
| [Build Focus Components](./2026-07-16-plan-focus-beat-components.task.md) | Mark | Tram | Tram reviews the lab in Play, including narrow layout and all four component interactions | July 18 |
| [Contribute research explorations and ideas](./2026-07-15-contribute-research-explorations.task.md) | Tram | Mark | Mark reviews both Campus Constellation components in Play with keyboard and pointer | July 18 |

---

## Ready

| Task | Owner | Reviewer | Next move | Due |
| --- | --- | --- | --- | --- |
| [Design scheduled Git sync for muthurd](./2026-07-15-design-scheduled-git-sync.task.md) | Mark | Tram | Agree on pull-only versus bidirectional authority and conflict behavior | July 16 |
| [Prepare the learner starter and submission](./2026-07-15-prepare-learner-starter-and-submission.task.md) | Unassigned | Andrew | Name an owner and audit the starter's current gap | July 20 |

---

## Blocked

No tasks are currently blocked.

---

## Done

| Task | Owner | Reviewer | Result |
| --- | --- | --- | --- |
| [Add YouTube Learning Skill Research](./2026-07-16-add-youtube-learning-research.task.md) | Mark | Andrew | Research note captures official YouTube constraints, skill package, player shape, and MVP path |
| [Spike practice interview voice agent](./2026-07-16-spike-practice-interview-voice.task.md) | Mark | Tram | Immersive Realtime interview simulator, research note, and proposed Host Action shape added |
| [Add task reviewers to the workflow](./2026-07-16-add-task-reviewers.task.md) | Mark | Andrew | Reviewer frontmatter, dashboard projection, and Codex workflow guidance added |
| [Sync the PathMX authoring skill](./2026-07-16-sync-pathmx-authoring-skill.task.md) | Mark | Andrew | Complete canonical package synchronized; repeatable check/write command verified |
| [Resolve the Campus Constellation merge](./2026-07-15-resolve-campus-constellation-merge.task.md) | Mark | Tram | Both outcomes preserved as valid Blocks; conflict markers and whitespace errors removed |
| [Add a reviewed 3D Globe reference](./2026-07-15-add-three-globe-reference.task.md) | Mark | Andrew | One-scene local-data globe copied from reviewed Core, linked, and verified in Browse and Play |
| [Update the muthurd gateway to PathMX 0.1.10](./2026-07-15-update-muthurd-gateway-pathmx-0-1-10.task.md) | Mark | Andrew | CLI updated, gateway replaced, tunnel preserved, and public 0.1.10 assets verified |
| [Narrow the labs index to ready demos](./2026-07-15-narrow-labs-index.task.md) | Mark | Tram | Labs hub now links only ready demos; unfinished Sources remain unlinked |
| [Add a change log workflow](./2026-07-15-add-change-log-workflow.task.md) | Mark | Andrew | Playable Block-based log, agent push rule, checker, and July 15 history added |
| [Verify and graduate the PathMX 0.1.9 reference set](./2026-07-15-verify-pathmx-0-1-9-reference-set.task.md) | Mark | Andrew | Released-contract review, full build, and focused reference Play checks complete |
| [Provision the Build Week Space on muthurd](./2026-07-15-provision-muthurd-space.task.md) | Mark | Andrew | Clean checkout, current tooling, and read-only `build-week.pathmx.net` Space verified |
| [Publish the workspace checkpoint to main](./2026-07-15-publish-workspace-checkpoint.task.md) | Mark | Andrew | Full worktree audited, merged with remote `main`, and published |
| [Scaffold Codex task coordination](./2026-07-15-scaffold-codex-task-coordination.task.md) | Mark | Tram | Dashboard, agent workflow, stale-reference cleanup, and verification complete |

---

## Codex Shortcuts

- **Track or add work:** create a dated `.task.md` Source, assign a reviewer,
  and add its row.
- **Take or work on a task:** claim it as `in-progress` before implementation.
- **Block or review a task:** update its Source, reviewer, and row in one
  change.
- **Finish a task:** link artifacts, record verification and review outcome,
  and move it to Done.
- **Refresh the board:** reconcile all task frontmatter with these lanes.
