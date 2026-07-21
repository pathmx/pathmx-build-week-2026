[@components]: ./labs/layout-components/layout.components.md
[@root.styles]: ./styles/base.css

# Exploring Learning with Agents

**Open AI Build Week 2026**

## What we built

Our contribution is an exploration of using a markdown-first knowledge graphs and workflows to create interactive learning experiences along side of OpenAI Codex.

<div class="pmx-wide">
<grid cols="3" gap="4">
  <project-feature
    title="Project feature one"
    label="TBD"
    href="#"
    cta="Coming soon"
  >
    <slot name="icon">:lucide-orbit:</slot>
    Placeholder for the first featured project. Swap in title, summary, and
    destination once the showcase picks lock.
  </project-feature>
  <project-feature
    title="Project feature two"
    label="TBD"
    href="#"
    cta="Coming soon"
  >
    <slot name="icon">:lucide-swords:</slot>
    Placeholder for the second featured project. Link each card to its guide or
    playable demo when ready.
  </project-feature>
  <project-feature
    title="Project feature three"
    label="TBD"
    href="#"
    cta="Coming soon"
  >
    <slot name="icon">:lucide-sparkles:</slot>
    Placeholder for the third featured project. Keep the grid at three cards so
    the hub layout stays stable.
  </project-feature>
</grid>
</div>

---

## Our Team

<div class="pmx-wide">
<grid cols="3" gap="4">
  <team-member name="Mark Johnson" role="Contribution TBD" initials="MJ">
    Placeholder bio for Mark. Swap in a short contribution note and avatar
    photo when ready.
  </team-member>
  <team-member name="Tram Le" role="Contribution TBD" initials="TL">
    Placeholder bio for Tram. Swap in a short contribution note and avatar
    photo when ready.
  </team-member>
  <team-member name="Andrew Miller" role="Contribution TBD" initials="AM">
    Placeholder bio for Andrew. Swap in a short contribution note and avatar
    photo when ready.
  </team-member>
</grid>
</div>

---

## PathMX

Our workflow and lab examples are authored using [PathMX](https://pathmx.dev). PathMX (**Path**s **M**arkdown e**X**tension) is a methodology and toolchain for authoring curriculum-as-code. Its kind of like a Next.js for markdown-based knowledge wikis. This site, along with all the linked examples are authored using PathMX.

<!-- add tailwind classes for small/italic text? -->
<aside class="italic text-sm">
PathMX is currently in private beta and its Core repository is closed-source.
During Build Week we used Codex to extend that Core alongside the public work
collected here.

See the [PathMX Core progress log](./work-log/pathmx-changes.log.md) for a
self-contained, living account of what landed during the Build Week window.

</aside>

## How we built this

Our team built out our work using in the same repository (very meta). Having our workflows and work live alongside the agents in the same workspace lets us all work together with the same shared context.

- [:lucide-list-todo: Tasks](./tasks/index.tasks.md): The working queue for our team and our agents.
- [:lucide-git-commit-horizontal: Changes](./work-log/changes.log.md): The living log of what was built during the build week.
- [:lucide-flask-conical: Labs](./labs/index.path.md): Lab experiments and demos.
- [:lucide-library: Research/Reference](./research/index.path.md): Research and reference materials.
- [:lucide-notebook-pen: Work log/notes](./work-log/index.path.md): Work log and notes.
- [:lucide-book-open: Guides](./guides/index.guides.md): Guides and documentation.

---

## Featured Work

These are the demos, presentation materials, and other work we built during the build week.

- [Submission walkthrough](./presentation/submission-walkthrough.slides.md): The three-minute public Path that tells the learning story end to end.
- [Agent Loop Evals](./presentation/walkthrough.slides.md): Internal review of the eval harness, scoring evidence, and what the agent loop proved.
- [PathMX Build Week (this repository)](https://github.com/pathmx/pathmx-build-week): Labs, tasks, and the living record of Build Week collaboration.
- [PathMX Learning Starter](https://github.com/pathmx/pathmx-learning-starter): The learner-facing starter for durable personal learning Paths.
- [PathMX Skills](https://github.com/pathmx/pathmx-skills): Canonical agent skills for authoring PathMX and guiding personal learning.
