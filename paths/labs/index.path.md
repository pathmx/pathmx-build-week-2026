---
theme:
  color:
    bg: "#f3f7f8"
    fg: "#152024"
    muted: "#5f6d72"
    surface: "#ffffff"
    link: "#0f7a8a"
    accent: "#0f7a8a"
    border: "#d3e0e3"
    focus: "#0f7a8a"
  prose:
    size: 1.0625rem
    leading: 1.68
  measure: 53rem
  shape:
    radius: 0.75rem
  dark:
    color:
      bg: "#0c1416"
      fg: "#eef6f7"
      muted: "#9aadb2"
      surface: "#152225"
      link: "#5ec8d4"
      accent: "#5ec8d4"
      border: "#2a3b3f"
      focus: "#7ad6e0"
styles:
  classes:
    - landing-page
---

<!--
id: labs-header
styles:
  classes:
    - page-header
-->

[@components]: ./layout-components/layout.components.md
[@root.styles]: ../styles/base.css

# Build Week Labs

**OpenAI Build Week 2026 · PathMX Learning Labs**

Safe experiments — incomplete, wrong, or discarded when they stop being useful.
These three are the clearest demos to open first.

<div class="pmx-wide">
<grid cols="3" gap="4">
  <project-feature
    title="Chess"
    href="./chess/index.demo.md"
    cta="Play the Opera Game"
  >
    <slot name="icon">:lucide-swords:</slot>
    Morphy's Opera Game on an interactive board with annotated PGN replay.
  </project-feature>
  <project-feature
    title="Kepler orbit"
    href="./kepler-orbit/index.demo.md"
    cta="Open the orbit"
  >
    <slot name="icon">:lucide-orbit:</slot>
    Equal areas, unequal speeds: a focus-aware orbital instrument for Kepler's
    second law.
  </project-feature>
  <project-feature
    title="Campus Constellation"
    href="./campus-constellation/index.demo.md"
    cta="Start the mission"
  >
    <slot name="icon">:lucide-sparkles:</slot>
    A 20-minute networking Path: pick a North Star, draft one ask, rehearse
    awkward moments, and leave with a 48-hour mission.
  </project-feature>
</grid>
</div>

---

## All demos

- [Dialectic spiral](./dialectic-spiral/index.demo.md) — thesis → antithesis →
  synthesis as ordered, Play-traversable states on a scheme-aware canvas.
- [Dungeons & Dragons campaign workshop](./campaign-forge/index.demo.md) — turn
  one fantasy premise into factions, places, a first session, and a campaign
  card.
- [Chess](./chess/index.demo.md) — Morphy's Opera Game on an interactive board
  with annotated PGN replay.
- [Chess opening lesson](./chess-opening-lesson/index.demo.md) — center control,
  development, and king safety through replay and practice.
- [Tufte theme](./tufte-theme/index.demo.md) — calm editorial typography with
  sidenotes, figures, and print-aware CSS.
- [Layout components](./layout-components/index.demo.md) — grids, stacks, boxes,
  and hub cards composed into page structures.
- [Bookshelf](./bookshelf/index.demo.md) — a skeuomorphic shelf of Build Week
  reading, with title tips on hover and Play.
- [Kepler orbit](./kepler-orbit/index.demo.md) — equal areas, unequal speeds: a
  focus-aware orbital instrument.
- [Focus beats](./focus-components/index.demo.md) — pause, breath, held question,
  and timebox inside a short estimation lesson.
- [3D globe](./three-globe/index.demo.md) — a data-backed night-side Earth with
  local hubs and routes.
- [Practice interview simulator](./practice-interview/index.demo.md) — a
  Realtime voice interview path with scoring, coaching, and an evidence packet.
- [Relationship Garden](./relationship-garden/index.demo.md) — stewardship of
  people and parallel contexts, with one logged touch per session.
- [My Greenville: Coffee Field Notes](./my-greenville/index.demo.md) — five
  Greenville coffee shops as a living personal atlas.
- [YouTube watch and recall](./youtube-watch-recall/index.demo.md) — a one-video,
  provided-transcript MVP that pairs an official YouTube embed with
  timestamped Feynman excerpts and durable recall Blocks whose hidden
  `youtube:` evidence points a Codex follow-up at the exact transcript span.
- [Campus Constellation](./campus-constellation/index.demo.md) — a 20-minute
  networking mission Path: pick a North Star, draft one modular ask, rehearse
  awkward moments with random flashcards, and leave with a 48-hour real-world
  mission plus a reason-based follow-up.
- [Research Bench: What Should I Believe?](./research-bench/index.demo.md) — a
  durable evidence bench for one contested question, with pinned competing
  claims, ordinary Markdown citations, dated confidence and open-questions
  responses, and a copyable Codex prompt for the next discriminating question.
