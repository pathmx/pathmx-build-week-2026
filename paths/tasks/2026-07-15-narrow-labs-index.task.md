---
type: task
status: done
owner: Mark
date: 2026-07-15
due: 2026-07-15
related:
  - ../labs/index.path.md
  - ../work-log/changes.log.md
---

# Narrow The Labs Index To Ready Demos

## Outcome

Keep the labs hub focused on examples that are ready for the team to explore,
without deleting unfinished Sources that still need work.

---

## Result

The labs hub now lists only the six ready examples under a plain `Demos`
heading. Unfinished Sources remain available in the repository without being
advertised from the hub.

---

## Done When

- The labs index links only Chess, Tufte theme, layout components, the simple
  learner quiz, Bookshelf, and Kepler orbit.
- The section is named `Demos` without an additional reviewed label.
- Unfinished Sources remain in the repository but are not linked from the hub.
- A scratch build passes and the change-log entry records skipped visual review.

---

## Activity

- **2026-07-15:** Mark claimed the index cleanup. No lab implementation or
  unfinished Source will be deleted as part of this task.
- **2026-07-15:** Removed the Starter MVP, slides, and component proving-ground
  links; renamed the surviving section from Reviewed References to Demos; and
  preserved all underlying Sources. PathMX 0.1.9 built 123 artifacts with only
  the three known Tufte warnings, and `git diff --check` passed. Play review was
  skipped because the change only narrows a Markdown link list.
