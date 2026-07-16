---
type: task
status: ready
owner: Andrew
reviewer: Mark
date: 2026-07-15
due: 2026-07-17
related:
  - ../labs/index.path.md
  - ../labs/kepler-orbit/index.demo.md
  - ../../.agents/skills/pathmx-authoring/SKILL.md
---

# Explore Reference Labs And Test The Authoring Skill

## Outcome

Use the reviewed labs to understand the current PathMX authoring patterns, then
test whether a fresh Codex task can apply the repo-local authoring skill to a
small, coherent lab change.

---

## Next Move

Pull current `main` on `muthurd`, open the reviewed labs from the
[labs index](../labs/index.path.md), then ask Codex to use `pathmx-authoring`
while creating or materially revising one small lab.

---

## Done When

- Andrew has explored each item under **Reviewed References**, including the
  Kepler orbit demo, and notes useful or confusing patterns.
- The exact prompt used to invoke the repo-local authoring skill is recorded.
- Codex creates or materially revises one focused lab and links it from the
  labs index.
- The result records `pathmx build` plus the relevant Play, keyboard,
  narrow-screen, and reduced-motion checks.
- Skill friction or product gaps are captured here and linked upstream when
  they need Core work.

---

## Activity

- **2026-07-15:** Reframed the unstarted learner-scenario task around Andrew's
  immediate lab tour and agent-driven authoring test. The repo-local
  `pathmx-authoring` skill was synchronized byte-for-byte from the current
  `~/sources/pathmx` checkout at `c50ab7c` before handoff.
