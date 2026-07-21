---
type: task
status: done
owner: Mark
date: 2026-07-15
related:
  - ../work-log/changes.log.md
  - ../../AGENTS.md
  - ../../scripts/check-change-log.sh
---

# Add A Change Log Workflow

## Outcome

Give humans and agents a concise playable record of landed work, with one
change entry per Block and a lightweight check that requires an update before
new commits are pushed.

---

## Result

The repository now has a playable, newest-first changes log with one landed
change per Block, agent instructions that require an update before push, and a
local outgoing-range check.

---

## Done When

- The root and work-log hubs link a playable changes log.
- Each Block contains one outcome-first change entry with important artifacts,
  verification, and follow-up without duplicating task-level detail.
- `AGENTS.md` requires agents to prepend or materially update an entry before
  push, keeping newest entries first.
- A repository script rejects outgoing work with no changes-log update or with
  malformed entry Blocks and passes the bootstrapping change.
- Today's landed Build Week work has an initial summary entry.
- A PathMX scratch build passes and skipped visual checks are recorded.

---

## Activity

- **2026-07-15:** Mark claimed the workflow bootstrap. The initial design uses
  one concise entry per push range rather than one entry per commit, so agents
  can land a coherent multi-commit change without noisy duplicate prose.
- **2026-07-15:** Pivoted from separate fragment files and an index to the
  established PathMX Core pattern: one `changes.log.md` Source, newest entries
  first, with exactly one playable change per Block.
- **2026-07-15:** Bootstrapped five Blocks covering today's coordination,
  references, hosting, handoffs, and this workflow. The checker rejected an
  outgoing fixture with no log update and passed the same coherent range after
  the log changed. PathMX 0.1.9 wrote 132 artifacts with only the three known
  Tufte warnings. A real Play review found five rendered Blocks, entered Play,
  advanced from the first change to the second with `Next block`, and reported
  no browser console errors. `sh -n` and `git diff --check` passed.
