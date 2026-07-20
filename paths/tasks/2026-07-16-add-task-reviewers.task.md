---
type: task
status: done
owner: Mark
date: 2026-07-16
due: 2026-07-16
related:
  - ./index.tasks.md
  - ../../AGENTS.md
  - ../work-log/changes.log.md
---

# Add Task Reviewers To The Workflow

## Outcome

Make reviewer assignment a first-class part of task Sources and the dashboard,
restricted to Mark, Tram, or Andrew.

---

## Result

Task frontmatter now includes `reviewer`, dashboard lanes show reviewer next to
owner, and `AGENTS.md` tells Codex how to assign, move, and finish tasks with
review accountability.

---

## Done When

- Task workflow docs define reviewer assignment and allowed names.
- Dashboard lanes project reviewer for every task row.
- Existing task Sources have reviewer frontmatter.
- A scratch PathMX build passes, or any skipped verification is recorded.

---

## Activity

- **2026-07-16:** Mark claimed the workflow revision; Andrew is assigned as
  reviewer for the coordination update.
- **2026-07-16:** `pathmx self-update` verified PathMX 0.1.13 is current.
- **2026-07-16:** Backfilled reviewer frontmatter across all task Sources and
  updated the task dashboard and agent workflow guidance.
- **2026-07-16:** `pathmx build -o .pathmx-check` built 164 artifacts with only
  the three known Tufte theme warnings. `git diff --check` passed, and every
  task Source has a reviewer from Mark, Tram, or Andrew.
- **Skipped:** Play review was not needed because this change is workflow prose,
  frontmatter, and dashboard tables with no new interaction behavior. Separate
  human review by Andrew has not run in this Codex pass.
