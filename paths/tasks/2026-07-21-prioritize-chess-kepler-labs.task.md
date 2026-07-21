---
type: task
status: done
owner: Andrew
date: 2026-07-21
related:
  - ../labs/index.path.md
---

# Prioritize Chess And Kepler Labs

## Outcome

Put Chess, Chess Opening Lesson, and Kepler Orbit first on the Labs hub in
Andrew's requested order while preserving every other demo link.

## Next Move

No implementation follow-up remains. Keep this order unless Andrew changes the
showcase sequence.

## Done When

- The Demos list begins Chess, Chess Opening Lesson, then Kepler Orbit.
- Every other existing demo entry remains present in its prior relative order.
- A focused scratch build, exact-route lookup, and whitespace check pass.

## Activity

- **2026-07-21:** Claimed the Labs-hub ordering change for Andrew; confirmed
  native PathMX 0.1.26 and preserved the existing Relationship Garden and
  submission work already present in the worktree.
- **2026-07-21:** Moved Chess, Chess Opening Lesson, and Kepler Orbit into the
  first three Demos positions without changing the remaining link set or its
  relative order. `git diff --check` passed; `bunx pathmx build
  paths/labs/index.path.md -o /tmp/pathmx-labs-order.YwQyh4 --clean` built one
  Path with 206 artifacts; exact-route lookup resolved
  `http://127.0.0.1:3000/labs/index.path`. Live visual review was skipped
  because this change only reorders existing Markdown links.
