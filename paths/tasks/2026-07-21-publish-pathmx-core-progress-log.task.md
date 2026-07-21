---
type: task
status: done
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

## Result

The public log now reflects the complete July 13–21 Core audit through verified
PathMX 0.1.26. It records the release range and aggregate scope, final
authoring/recovery wave, large-graph cache and memory work, secure Starter and
skill initialization, Markdown and annotation foundation, learner-facing
Player and Response changes, multi-Root Host architecture, verification, and
the remaining cold-build memory boundary.

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
- **2026-07-21:** Completed the final audit against the Core Git and changes
  journals: 135 commits and 18 tagged releases from the pre-window 0.1.7
  baseline through verified 0.1.26. Expanded the public log with the final
  release/recovery wave, large-graph performance and remaining memory boundary,
  safe Starter/skill initialization, and Markdown/annotation foundations.
  `pathmx self-update --check` confirms 0.1.26 is current. After fast-forwarding
  14 concurrent shared-main commits and preserving their dashboard and journal
  additions, `pathmx build -o .pathmx-check --clean` built the integrated graph
  as one Path with 410 artifacts and no warnings. Exact route lookup resolves
  the log at `/work-log/pathmx-changes.log`; `git diff --check` passes. Live
  Player review was skipped because this pass changes prose and reuses the
  already-reviewed journal component without changing its layout or behavior.
