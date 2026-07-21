---
type: task
status: done
owner: Mark
date: 2026-07-21
related:
  - ../index.path.md
  - ../labs/layout-components/layout.components.md
  - ../labs/layout-components/index.demo.md
---

# Add Team LinkedIn Links To Hub Cards

## Outcome

Give each hub team card a clean LinkedIn profile link.

---

## Result

`<team-member>` now accepts an optional `href` and renders a compact LinkedIn
chip. The hub cards link Mark, Tram, and Andrew to their profiles.

---

## Done When

- `<team-member>` supports an optional profile `href` with a compact LinkedIn
  chip.
- Hub cards link Mark, Tram, and Andrew to their LinkedIn profiles.
- Live Player review at `/index.path#our-team` shows the three chips.

---

## Activity

- **2026-07-21:** Mark claimed the hub LinkedIn chip polish.
- **2026-07-21:** Added the optional `href` LinkedIn chip to `<team-member>`,
  wired the three hub profiles, and updated the layout demo. Verification:
  live Player at `/index.path#our-team` showed three visible LinkedIn chips
  pointing at Mark, Tram, and Andrew.
