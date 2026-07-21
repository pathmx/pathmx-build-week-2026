---
type: task
status: in-progress
owner: Andrew
date: 2026-07-21
related:
  - ../research/youtube-learning-skill.path.md
  - ../andrew/2026-07-21-next-demo-shortlist.notes.md
  - ../labs/index.path.md
  - ../labs/youtube-watch-recall/index.demo.md
  - ../labs/youtube-watch-recall/transcript.segments.json
---

# Build A YouTube Watch-And-Recall Lab

## Outcome

Ship a small Labs demo that proves watch → timestamped recall → durable Source
evidence using one YouTube embed and a provided transcript only.

---

## Next Move

Andrew reviews the live Player pass for `/labs/youtube-watch-recall`: watch
the embed, submit at least one single-choice and one long-text response,
confirm `response` data lands under each question Block, and either close
this task or record follow-ups.

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
- **2026-07-21:** MVP authored under
  [`paths/labs/youtube-watch-recall/`](../labs/youtube-watch-recall/index.demo.md).
  One Source, one iframe embed (Feynman on Scientific Method,
  `EYPapE-3FRw`, via `youtube-nocookie.com/embed`, no autoplay), one
  demo-authored provided transcript in
  [`transcript.segments.json`](../labs/youtube-watch-recall/transcript.segments.json)
  with `source: provided-vtt`, and five durable question Blocks (three
  single-choice, two long-text). Each question carries hidden `youtube:`
  topmatter with `videoId`, `evidence.start`, `evidence.end`, and
  `source: provided-vtt`. The lab ends with a copy-ready Codex follow-up
  prompt that names the two long-text ids so a later task can cross-check
  responses against the transcript spans. Linked one line from
  [`paths/labs/index.path.md`](../labs/index.path.md).
- **2026-07-21:** Verified with `bunx pathmx build paths/index.path.md -o
  .pathmx-check --clean` (PathMX 0.1.25). Build reports "Built 1 path from
  paths to .pathmx-check. Artifacts: 394 written, 0 deleted." Warnings are
  pre-existing unresolved `campus-constellation.components.md` links, not
  new. `bunx pathmx route paths/labs/youtube-watch-recall/index.demo.md -o
  .pathmx-check --json` resolves to `pathId: index.path`, `sourceId:
  labs/youtube-watch-recall/index.demo`, route `/labs/youtube-watch-recall`.
  `sources.json` lists every expected Block id
  (`yt-feynman-three-steps`, `yt-feynman-disagreement`,
  `yt-feynman-what-does-not-matter`, `yt-feynman-in-your-words`,
  `yt-feynman-your-turn`, plus `watch-the-video`,
  `provided-transcript-excerpts`, and `codex-follow-up`). Live Player
  submission review skipped — no repository-owned `pathmx play` server was
  running on this cloud environment; Andrew should complete that pass
  before closing.
