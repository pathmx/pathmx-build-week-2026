---
type: task
status: done
owner: Mark
date: 2026-07-21
related:
  - ../labs/index.path.md
  - ../labs/chess/index.demo.md
  - ../labs/kepler-orbit/index.demo.md
  - ../labs/campus-constellation/index.demo.md
  - ../labs/layout-components/layout.components.md
  - ../index.path.md
---

# Feature Labs Index Demos

## Outcome

Give the Labs hub the same featured-card treatment as the home page, leading
with Chess, Kepler orbit, and Campus Constellation.

---

## Result

`paths/labs/index.path.md` now uses the shared landing theme, layout
components, and a top `page-header` Block with three `<project-feature>` cards
for Chess, Kepler orbit, and Campus Constellation. The remaining demos stay in
an All demos chip-styled list.

---

## Done When

- Labs index uses the shared landing theme, layout components, and page-header.
- Chess, Kepler orbit, and Campus Constellation appear as featured cards in the
  top Block.
- The remaining demos stay linked in a clearer All demos list.
- Build and live Player review confirm the featured route and card layout.

---

## Activity

- **2026-07-21:** Claimed the Labs hub polish so featured demos match the home
  page presentation.
- **2026-07-21:** Restyled the Labs hub with landing-page / page-header chrome,
  three featured cards, and an All demos list. Verification: scratch build of
  `paths/labs/index.path.md` wrote 183 artifacts with resolved card routes
  (`/labs/chess`, `/labs/kepler-orbit`, `/labs/campus-constellation`); live
  Player review at `http://localhost:3000/labs/index.path` confirmed the
  featured grid, wash/header treatment, and chip-styled demo list.
