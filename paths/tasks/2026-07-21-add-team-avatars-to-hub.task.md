---
type: task
status: done
owner: Mark
date: 2026-07-21
related:
  - ../index.path.md
  - ../assets/mark-avatar.jpg
  - ../assets/tram-avatar.jpg
  - ../assets/andrew-avatar.png
---

# Add Team Avatars To Hub Cards

## Outcome

Show each teammate's portrait on the Build Week home page team cards instead of
initials-only placeholders.

---

## Result

Each hub `<team-member>` card now uses its matching portrait from
`paths/assets/`. Initials remain as fallback props.

---

## Done When

- Each hub team card uses its matching avatar image from `paths/assets/`.
- Initials remain as fallback props.
- Live Player review at `/index.path` shows the three portraits.

---

## Activity

- **2026-07-21:** Mark claimed the hub team-avatar polish.
- **2026-07-21:** Wired Mark, Tram, and Andrew portraits into the hub
  `<team-member>` avatar slots. Verification: scratch build
  `pathmx build paths/index.path.md -o .pathmx-check-avatars` succeeded and
  copied the three assets; live Player at `/index.path#our-team` showed all
  three images loaded (`naturalWidth` > 0) with no initials fallback.
