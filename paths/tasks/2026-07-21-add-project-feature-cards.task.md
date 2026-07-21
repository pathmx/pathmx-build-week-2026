---
type: task
status: done
owner: Mark
date: 2026-07-21
related:
  - ../labs/layout-components/layout.components.md
  - ../labs/layout-components/index.demo.md
  - ../index.path.md
---

# Add Project Feature Cards

## Outcome

Add a reusable project-feature card to the shared layout components and use it
to make the Build Week home page's three primary review paths explicit.

---

## Result

`<project-feature>` now lives with the shared layout components. The home page
uses three responsive cards for the hosted learner bootstrap, technical eval
review, and playable lab index; the layout demo retains fictional examples.

---

## Done When

- `layout.components.md` defines a `<project-feature>` card with title, label,
  href, and yielded description.
- The layout demo shows the card in a three-column grid.
- `index.path.md` imports the layout components and shows three real
  project-feature cards under "What we built".
- A PathMX scratch build passes for the changed Sources.

---

## Activity

- **2026-07-21:** Mark claimed the home-page featured-work polish and started
  the project-feature card component.
- **2026-07-21:** Added `<project-feature>` with label/title/href/cta props,
  demoed it in the layout lab, and placed three TBD placeholders on
  `index.path.md`. Verification: `pathmx build -o .pathmx-check` succeeded
  (only known Tufte-theme and unrelated work-log link warnings). Live Player
  review at `/index.path` confirmed the three-card grid, TBD labels, and
  Coming soon CTAs.
- **2026-07-21:** Hub polish follow-up: removed feature-card hover lift that
  clipped against the block, dropped list hover border/underline shift, and
  added short Featured Work descriptions.
- **2026-07-21:** After Core fixes landed on the local Player, dropped the
  named-slot CSS hide workaround, restored ordinary heading selectors (no
  `:scope` specificity boost), and moved hub header styling onto authored
  `styles.classes` (`landing-page` / `page-header`).
- **2026-07-21:** Replaced the TBD home cards with the actual judge and learner
  paths: one-prompt bootstrap, technical eval report, and labs hub. The home
  page now also gives each teammate a concrete contribution summary, including
  Tram's learner testing and its direct influence on the buffered loop.
