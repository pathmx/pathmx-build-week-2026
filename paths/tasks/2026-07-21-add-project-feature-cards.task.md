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

Add a reusable project-feature card to the shared layout components and place
three placeholder cards on the Build Week home page for the TBD featured
projects.

---

## Result

`<project-feature>` now lives with the shared layout components. The home page
and layout demo each show three placeholder cards in a responsive grid; swap
title, summary, and `href` when the showcase picks lock.

---

## Done When

- `layout.components.md` defines a `<project-feature>` card with title, label,
  href, and yielded description.
- The layout demo shows the card in a three-column grid.
- `index.path.md` imports the layout components and shows three placeholder
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
