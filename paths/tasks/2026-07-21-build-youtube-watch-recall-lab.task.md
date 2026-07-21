---
type: task
status: in-progress
owner: Andrew
date: 2026-07-21
related:
  - ../research/youtube-learning-skill.path.md
  - ../andrew/2026-07-21-next-demo-shortlist.notes.md
  - ../labs/index.path.md
---

# Build A YouTube Watch-And-Recall Lab

## Outcome

Ship a small Labs demo that proves watch → timestamped recall → durable Source
evidence using one YouTube embed and a provided transcript only.

---

## Next Move

Implement the MVP under `paths/labs/youtube-watch-recall/`, link it from the
Labs hub, verify build/route/Play, and record evidence here.

---

## Done When

- One demo Source embeds a public YouTube video through an official embed.
- A local provided transcript (synthetic or user-supplied excerpts) backs 3–5
  durable question Blocks with timestamp evidence in topmatter.
- No unofficial transcript scraping; transcript mode is explicitly "provided".
- Linked from `paths/labs/index.path.md`.
- `pathmx build` and exact route lookup pass; Browse/Play checks recorded or
  skipped with reason.

---

## Activity

- **2026-07-21:** Claimed from the next-demo shortlist. Research note already
  frames the boundary; MVP stays URL + provided transcript, not search or
  caption download.
