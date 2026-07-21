---
type: task
status: in-progress
owner: Mark
date: 2026-07-21
related:
  - ../index.path.md
  - ../work-log/pathmx-changes.log.md
  - ../work-log/index.path.md
---

# Publish The PathMX Core Progress Log

## Outcome

Publish a self-contained, public-facing account of the PathMX Core work that
landed during Build Week without exposing private repository history or
confusing release candidates with verified CLI releases.

---

## Next Move

`pathmx self-update` now verifies public CLI 0.1.24. Compare the log with the
latest Core journal, prepend any new verified milestone for that release, then
freeze the cutoff and finish this task before 8 PM EDT.

---

## Done When

- The log distinguishes the pre-existing PathMX baseline from Build Week work.
- Newest-first milestone Blocks explain learner impact, implementation scope,
  verification, and relevant release boundaries in public language.
- The home page and work-log index reach the Source.
- Only versions verified through the public CLI distribution are called
  published; later candidates remain explicitly provisional.
- A full PathMX scratch build passes, with final-deadline refresh evidence
  recorded here.

---

## Activity

- **2026-07-21:** Claimed the living Core-progress journal for Mark. The
  initial pass will synthesize the private Core shipped-work journal and Git
  release boundaries into public, thematic milestones rather than copying its
  commit history.
- **2026-07-21:** `pathmx self-update` detected 0.1.24 as the expected latest
  package but the installed binary still reported 0.1.23. The log therefore
  treats 0.1.23 as the latest verified public release and leaves room for a
  later final-day entry after clean-install verification catches up.
- **2026-07-21:** Published the initial eight newest-first milestone Blocks,
  linked the log from both the home page and work-log index, and resolved the
  pre-existing task-dashboard index conflict by preserving the newer wording
  from each side and removing duplicate rows. PathMX 0.1.23 built the full
  graph into `.pathmx-check` as one Path with 301 written artifacts; the only
  warnings were the three pre-existing unsupported Tufte theme fields. Route
  lookup resolves the Source exactly at `/work-log/pathmx-changes.log`, with
  all eight milestone Blocks and publication components in built metadata.
  Live Player review was skipped because this pass changes ordinary prose and
  reuses the already-reviewed publication component without changing layout or
  interaction.
- **2026-07-21:** `pathmx self-update` later verified the installed binary as
  0.1.24. The living log still needs a final Core-journal compare and any new
  milestone for that release before the cutoff freeze.
