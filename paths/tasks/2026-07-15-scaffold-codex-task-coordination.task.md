---
type: task
status: done
owner: Mark
reviewer: Tram
date: 2026-07-15
due: 2026-07-15
related:
  - ./index.tasks.md
  - ../index.path.md
  - ../work-log/2026-07-14-hackathon-meeting.notes.md
  - ../../AGENTS.md
  - ../../README.md
---

# Scaffold Codex Task Coordination

## Outcome

Give Mark, Andrew, and Tram a small source-backed queue that Codex can create,
claim, link, reconcile, and finish from ordinary prompts.

---

## Result

The repository now has canonical task Sources, a compact status dashboard, and
prompt-level Codex workflow in `AGENTS.md`. Stale team/report guidance and
resolved meeting questions were removed. The teaching skill's removed lab
reference now points to the current durable quiz example.

---

## Done When

- The hub links a playable task dashboard.
- Every seeded row links to one canonical task Source.
- Repository instructions define the Codex task lifecycle and evidence policy.
- Deleted team and reports areas are no longer referenced as current structure.
- Stale meeting follow-ups are resolved or represented by active tasks.
- A scratch PathMX build passes, or any version boundary is recorded.

---

## Activity

- **2026-07-15:** Scaffold started from the current cleaned worktree. Existing
  lab, skill, configuration, and deletion changes were preserved.
- **2026-07-15:** `pathmx self-update` confirmed 0.1.8 remains the current
  release; 0.1.9 verification is tracked separately as blocked.
- **2026-07-15:** `pathmx build -o .pathmx-check` built the configured path and
  wrote 110 artifacts with no reported errors.
- **2026-07-15:** The local Markdown-link audit found no unresolved links in
  the hub, instructions, task Sources, paths, or teaching skill after cleanup.
- **2026-07-15:** `git diff --check` passed, every task Source appears in the
  dashboard, and the updated `teach-me-anything` skill passed
  `quick_validate.py`.
- **Skipped:** Play review was not needed because this change adds ordinary
  prose and tables without new interactive or presentation behavior.
- **2026-07-15:** Refreshed the queue around the current team handoffs. Andrew's
  next work now tours the reviewed labs and tests the repo-local authoring
  skill; Tram's three unstarted assignments are consolidated into one open
  research contribution; the unused commit-notification task was removed;
  Mark's MVP guide remains explicitly in progress and not ready for testers.
  The authoring skill now matches `~/sources/pathmx` at `c50ab7c`, including
  its design-engineering reference. PathMX 0.1.9 built 126 artifacts with only
  the three known Tufte token warnings, the skill validator passed, all nine
  canonical task files appear once on the dashboard, and `git diff --check`
  passed. Play was skipped because the PathMX changes are task prose, links,
  and guidance rather than new interactive behavior.
