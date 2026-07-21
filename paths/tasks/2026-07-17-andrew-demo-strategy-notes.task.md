---
type: task
status: done
owner: Andrew
reviewer: Mark
date: 2026-07-17
due: 2026-07-21
related:
  - ../andrew/index.path.md
  - ../andrew/2026-07-17-build-week-wedge-demo-memory.notes.md
  - ../andrew/2026-07-21-relationship-garden-outline.notes.md
  - ../andrew/2026-07-21-relationship-garden-implementation.plan.md
  - ../research/index.path.md
  - ../work-log/2026-07-14-hackathon-meeting.notes.md
---

# Capture Andrew Demo Strategy Notes On Main

## Outcome

Park Andrew's Build Week wedge, demo, and long-term-memory brainstorm plus the
Relationship Garden agent handoff plan under `paths/andrew/`, then land them on
`main` so other agents can implement from a stable path.

---

## Next Move

None for this task. Implementing agents should follow
[relationship-garden-implementation.plan.md](../andrew/2026-07-21-relationship-garden-implementation.plan.md)
on a fresh lab branch off `main`.

---

## Done When

- Notes live under `paths/andrew/` and are readable as ordinary Markdown.
- The Relationship Garden implementation plan is reachable from `main`.
- Research index links the plan for agent discovery.
- A scratch PathMX build still passes with the new Sources present.

---

## Activity

- **2026-07-21:** Renamed the concept from Reputation Garden to **Relationship
  Garden** (lab id `relationship-garden`). Merged notes onto `main`, linked the
  implementation plan from the research index, and marked this task done so
  implementing agents have a stable handoff path.
- **2026-07-21:** Added agent handoff
  [implementation plan](../andrew/2026-07-21-relationship-garden-implementation.plan.md)
  with locked decisions, file map, schemas, component/path specs, slices A–F,
  verification, and out-of-scope.
- **2026-07-21:** Added
  [Relationship Garden + Parallel Lives outline](../andrew/2026-07-21-relationship-garden-outline.notes.md).
- **2026-07-17:** Created `paths/andrew/` with wedge / demo / memory notes.
