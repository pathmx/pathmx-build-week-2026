---
type: task
status: in-progress
owner: Andrew
reviewer: Mark
date: 2026-07-17
due: 2026-07-21
related:
  - ../andrew/index.path.md
  - ../andrew/2026-07-17-build-week-wedge-demo-memory.notes.md
  - ../andrew/2026-07-21-reputation-garden-outline.notes.md
  - ../work-log/2026-07-14-hackathon-meeting.notes.md
---

# Capture Andrew Demo Strategy Notes Off Main

## Outcome

Park Andrew's Build Week wedge, demo, and long-term-memory brainstorm in a
personal folder on Andrew's branch so the ideas are durable without polluting
the team hub or landing on `main` until he promotes them.

---

## Next Move

Andrew reviews the Reputation Garden outline, decides naming and whether to
author a thin lab skeleton next, then promotes selected slices only when ready.

---

## Done When

- Notes live under `paths/andrew/` and are readable as ordinary Markdown.
- The folder is not linked from the team hub indexes.
- A scratch PathMX build still passes with the new Sources present.
- Andrew decides whether any slice should graduate to shared research.

---

## Activity

- **2026-07-21:** Added
  [Reputation Garden + Parallel Lives outline](../andrew/2026-07-21-reputation-garden-outline.notes.md):
  experience brief, person/CRM schema, recency wilt postures, Parallel Lives
  lens, tending loop, preset prompts, MVP slices, and demo story. Still
  unlinked from the team hub. PathMX scratch build and `git diff --check`
  recorded with this push; Play review skipped (ordinary notes).
- **2026-07-17:** Created `paths/andrew/` with a personal index and
  [wedge / demo / memory notes](../andrew/2026-07-17-build-week-wedge-demo-memory.notes.md)
  covering Build Week criteria, B′, local dual-surface wow, demo methods,
  hero learn-topics, non-course path genres, and open questions. Kept off the
  team hub on purpose. PathMX 0.1.13 `pathmx build -o .pathmx-check` wrote 221
  artifacts with only the three known Tufte theme warnings. `git diff --check`
  passed. Play review skipped: ordinary notes, no new interaction behavior.
