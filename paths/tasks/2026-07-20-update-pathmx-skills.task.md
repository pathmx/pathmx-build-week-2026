---
type: task
status: in-progress
owner: Tram
date: 2026-07-20
related:
  - ../work-log/2026-07-20-build-week-checkin.notes.md
  - ../work-log/2026-07-16-working-session.notes.md
  - ../guides/2026-07-20-build-week-submission-readiness.guide.md
  - ./2026-07-15-prepare-learner-starter-and-submission.task.md
---

# Update The PathMX Skills Package

## Outcome

Validate the canonical `/learn`, `/teach`, and `/pathmx` skill pack against the
Saturday learner-test findings and keep the Learning Starter synchronized.

---

## Next Move

Tram and Mark run the current hosted-bootstrap flow together in Codex Desktop
and record any remaining learner-language or waiting-time gaps in the manual
test guide. The canonical pack and Starter are no longer blocked on a skill
push or rescaffold.

---

## Done When

- The buffered personal workflow is shipped as `/learn`; reusable teaching is
  separated into `/teach`; both delegate PathMX syntax to `/pathmx`.
- Tram and Mark retest the updated workflow together in a clean session.
- The Learning Starter contains byte-identical copies of the canonical skills.
- Any remaining skill gaps are recorded as follow-ups rather than silent
  omissions.

---

## Activity

- **2026-07-20:** Created from the
  [July 20 Build Week check-in](../work-log/2026-07-20-build-week-checkin.notes.md).
  Tram owns updating and pushing the `paths` workflow skill; Mark retests after
  the push. The
  [July 16 working session](../work-log/2026-07-16-working-session.notes.md)
  already noted that Learner Starter skills and the `paths/` folder still need
  to match useful Build Week patterns.
- **2026-07-21:** Tram's beginner test findings—especially the too-tight loop,
  weak milestone visibility, and long waits between useful learner actions—fed
  the canonical buffered `/learn` workflow. The pack now separates `/learn`
  from reusable `/teach`, keeps syntax in `/pathmx`, authors a visible map plus
  a complete 2–4-session module, and exposes staged progress while agents work.
  Canonical sync and automated checks landed in both consumer repositories.
  The remaining work is the paired Codex Desktop retest, not another Starter
  rescaffold.
- **2026-07-21:** Skill sync now performs a rollback-safe complete replacement
  of the managed skill tree directly in the current checkout, with no temporary
  Git branch. Canonical, Starter, and Build Week copies are byte-identical.
  Subagent evaluation found that explicit two-worker instructions shortened the
  longest silent interval but increased first-module wall time; two worker-model
  probes still inherited Sol/low, so the unverified Terra configuration was
  removed.
