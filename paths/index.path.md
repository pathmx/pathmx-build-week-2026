---
theme:
  color:
    bg: "#f4f5fb"
    fg: "#191b26"
    muted: "#666a7b"
    surface: "#ffffff"
    link: "#4148cb"
    accent: "#4148cb"
    border: "#d9dbea"
    focus: "#4148cb"
  prose:
    size: 1.0625rem
    leading: 1.68
  measure: 53rem
  shape:
    radius: 0.75rem
  dark:
    color:
      bg: "#0e1018"
      fg: "#f3f4fb"
      muted: "#a7abba"
      surface: "#191c29"
      link: "#969bff"
      accent: "#969bff"
      border: "#34384b"
      focus: "#aeb2ff"
styles:
  classes:
    - landing-page
---

<!--
id: hub-header
styles:
  classes:
    - page-header
-->

[@components]: ./labs/layout-components/layout.components.md
[@root.styles]: ./styles/base.css

# Learn Anything with Codex

**OpenAI Build Week 2026 · PathMX Learning Labs**

## What we built

We built a Markdown-first learning harness that helps Codex turn a learner's
goal into a structured, playable Path they can keep, revise, and resume.

<div class="pmx-wide">
<grid cols="3" gap="4">
  <project-feature
    title="Start a learning space"
    label="Start here"
    href="./guides/start-learning-with-codex.guide.md"
    cta="Copy the prompt"
  >
    <slot name="icon">:lucide-terminal:</slot>
    Give Codex one hosted instruction URL. It installs the current tools,
    creates a personal repository, asks the useful questions, and opens the
    first playable map.
  </project-feature>
  <project-feature
    title="Review the agent-loop evals"
    label="Evidence"
    href="./presentation/walkthrough.slides.md"
    cta="Read the report"
  >
    <slot name="icon">:lucide-gauge:</slot>
    See the real Codex CLI harness, phase contracts, scoring rubric, latency
    measurements, failures, and the instruction changes those failures drove.
  </project-feature>
  <project-feature
    title="Explore the learning labs"
    label="Playground"
    href="./labs/index.path.md"
    cta="Open the labs"
  >
    <slot name="icon">:lucide-flask-conical:</slot>
    Try focused lessons, simulations, practice tools, and personal knowledge
    experiments authored as ordinary PathMX Sources.
  </project-feature>
</grid>
</div>

---

## Try the learner flow

Open an empty writable folder in Codex Desktop and send this prompt:

```text
Follow the instructions at https://raw.githubusercontent.com/pathmx/pathmx-skills/main/bootstrap.md. Create a new learning space in ./learning-space and help me learn [your topic or goal].
```

The hosted file is the canonical entry point. The agent takes it from there;
you do not need to clone this repository or know Bun, Git, or PathMX first.

---

## Our Team

<div class="pmx-wide">
<grid cols="3" gap="4">
  <team-member name="Mark Johnson" role="Learning system + integration" initials="MJ">
    Shaped the PathMX learning model, Starter architecture, eval harness, and
    the integration work connecting Codex authoring to the Player.
  </team-member>
  <team-member name="Tram Le" role="Learner testing + research" initials="TL">
    Tested the early learner loop as a beginner, contributed the Campus
    Constellation exploration, and surfaced the structure and waiting-time
    problems that drove the buffered `/learn` workflow.
  </team-member>
  <team-member name="Andrew Miller" role="Learning labs + review" initials="AM">
    Built and tested the chess lesson, developed the Relationship Garden and
    Greenville concepts, and reviewed the authoring workflow through concrete
    learning experiments.
  </team-member>
</grid>
</div>

---

## PathMX

Our workflow and lab examples use [PathMX](https://pathmx.dev), a methodology
and toolchain for authoring curriculum as readable Markdown Sources. PathMX
builds those Sources into a linked graph and a Player for focused, interactive
progress. This site and its linked examples are PathMX content.

<aside class="italic text-sm">
PathMX is currently in private beta and its Core repository is closed-source.
During Build Week we used Codex to extend that Core alongside the public work
collected here.

See the [PathMX Core progress log](./work-log/pathmx-changes.log.md) for a
self-contained, living account of what landed during the Build Week window.

</aside>

## How we built this

We kept the work, decisions, and agent instructions in the same repository.
Humans and Codex could therefore work from the same durable context instead of
reconstructing it from chat history.

- [:lucide-list-todo: Tasks](./tasks/index.tasks.md) — The working queue for our team and our agents.
- [:lucide-git-commit-horizontal: Changes](./work-log/changes.log.md) — The living log of what was built during the build week.
- [:lucide-flask-conical: Labs](./labs/index.path.md) — Lab experiments and demos.
- [:lucide-library: Research/Reference](./research/index.path.md) — Research and reference materials.
- [:lucide-notebook-pen: Work log/notes](./work-log/index.path.md) — Work log and notes.
- [:lucide-book-open: Guides](./guides/index.guides.md) — Guides and documentation.

---

## Featured Work

These are the demos, presentation materials, and other work we built during the build week.

- [Submission walkthrough](./presentation/submission-walkthrough.slides.md) — The three-minute public Path that tells the learning story end to end.
- [Agent Loop Evals](./presentation/walkthrough.slides.md) — Internal review of the eval harness, scoring evidence, and what the agent loop proved.
- [PathMX Build Week (this repository)](https://github.com/pathmx/pathmx-build-week-2026) — Labs, tasks, and the living record of Build Week collaboration.
- [PathMX Learning Starter](https://github.com/pathmx/pathmx-learning-starter) — The learner-facing starter for durable personal learning Paths.
- [PathMX Skills](https://github.com/pathmx/pathmx-skills) — Canonical agent skills for authoring PathMX and guiding personal learning.
