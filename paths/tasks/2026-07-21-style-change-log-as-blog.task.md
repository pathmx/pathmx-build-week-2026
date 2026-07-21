---
type: task
status: in-progress
owner: Mark
date: 2026-07-21
related:
  - ../work-log/changes.log.md
  - ../work-log/changes.components.md
  - ../styles/base.css
  - ../../scripts/check-change-log.sh
---

# Style The Change Log As A Blog

## Outcome

Turn each change-log Block into a compact blog entry with structured publish
dates, reusable date/time rendering, and a vertical Path line connecting the
entry titles.

---

## Result

The change log is now a newest-first build journal: every entry owns a quoted
ISO timestamp in Block topmatter, renders localized semantic publication
metadata, and aligns to a continuous Path line with a filled node beside its
title. The repository check enforces the new shape.

---

## Next Move

Keep the entry rail and title node connected when Player presents a Block in
Play mode, then repeat the desktop, mobile, light, and dark checks.

---

## Done When

- Every change entry has one machine-readable publish timestamp in Block
  topmatter rather than a date embedded in its title.
- The change-log check rejects missing timestamps, missing renderers, and
  entries that are not newest-first.
- Semantic date/time components render a readable metadata line below each
  entry title.
- Each Block reads as a mini blog post and the entry titles align to a vertical
  Path line with a filled node.
- A full PathMX scratch build and focused Player review pass, with skipped
  checks recorded here.

---

## Activity

- **2026-07-21:** Mark claimed the change-log presentation and data-shape
  refactor. The implementation will use the installed PathMX Block-variable
  contract so topmatter remains the single source of truth for timestamps.
- **2026-07-21:** Migrated all 22 entries, moved one July 17 entry into correct
  newest-first order, and added the `change-published` component with a
  multiline ISO fallback so live incremental projections keep the date
  visible. PathMX 0.1.22 produced 291 artifacts in a clean full build with only
  the three pre-existing Tufte-theme warnings; the final incremental full-Path
  build also passed. `sh -n scripts/check-change-log.sh`, the strengthened
  change-log check against `HEAD~1`, and `git diff --check` passed.
- **2026-07-21:** Reviewed
  `http://127.0.0.1:3010/work-log/changes.log` in the Player at 1280 × 720 and
  390 × 844 across dark and light schemes. All 22 metadata components rendered
  a long date and local time, the rail and nodes stayed aligned, no horizontal
  overflow appeared, and a clean final browser session reported no warnings or
  errors. The temporary review server was stopped afterward.
- **2026-07-21:** Reopened for a Play-specific layout correction after the
  presented Block widened to the Player canvas and left the rail at the
  viewport edge while centering the post content.
