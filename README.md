# Learn Anything — PathMX Learning Labs

What if a useful conversation with an agent became a learning path you could
keep, change, and continue tomorrow? Our OpenAI Build Week 2026 project uses
Codex and PathMX to turn ordinary Markdown into focused, playable learning
experiences.

The submission has three parts:

1. This **Learning Labs** repository records the experiments, decisions,
   evaluations, and evidence.
2. The public
   [PathMX Learning Starter](https://github.com/pathmx/pathmx-learning-starter)
   gives a learner a durable workspace with the agent skills included.
3. The [playable examples](./paths/labs/index.path.md) explore practice,
   simulation, and creation through the same Markdown-first format.

Canonical public companions:

- [PathMX Learning Starter](https://github.com/pathmx/pathmx-learning-starter) —
  the learner-facing starter for durable personal learning Paths
- [PathMX Skills](https://github.com/pathmx/pathmx-skills) — the canonical
  agent skills for authoring PathMX and guiding personal learning
  (`bootstrap.md` is the one-prompt entry point)

Start with the public [Learning Labs site](https://build-week.pathmx.net/) or
the [three-minute submission walkthrough](./paths/presentation/submission-walkthrough.slides.md).

## Working claim

Codex is the conversation and orchestration surface. PathMX is the durable,
playable learning surface. The learner leaves with a living curriculum,
evidence of learning, and a next step—not only a chat transcript.

## How Codex and GPT-5.6 were used

We worked in Codex with GPT-5.6 throughout Build Week. It helped us research
learning patterns, author and revise Markdown Sources, implement interactive
components, diagnose Player behavior, run verification, maintain the task
graph, and synthesize evaluation findings. The repository itself is the
durable record of that collaboration: see the [task
dashboard](./paths/tasks/index.tasks.md), [technical eval
review](./paths/presentation/walkthrough.slides.md), and [change
log](./paths/work-log/changes.log.md).

The team chose the product direction, set the learning goals, reviewed the
experiences as learners, and accepted or rejected the results. Codex and
GPT-5.6 accelerated the work; they did not replace those decisions.

## What existed before Build Week

Mark Johnson created the PathMX methodology, framework, and Player before the
event. During Build Week, the team built or meaningfully extended the Learning
Labs workspace, learner Starter, agent skills, interactive examples, reusable
components, evaluation harness and evidence, and the workflow for preserving
human-agent decisions. PathMX is currently in Labs, with its Core source kept
private while its APIs and product boundaries stabilize. Core changes supported
the public work but are not the submission's primary technical claim.

The [PathMX Core progress log](./paths/work-log/pathmx-changes.log.md) records
that boundary without exposing the private Core repository.

## Start with one Codex prompt

Open an empty writable folder in Codex Desktop and send:

```text
Follow the instructions at https://raw.githubusercontent.com/pathmx/pathmx-skills/main/bootstrap.md. Create a new learning space in ./learning-space and help me learn [your topic or goal].
```

That hosted file is the canonical bootstrap. The agent checks or installs Bun,
sets up the current PathMX Labs release, creates a repository from the Learning
Starter, asks a short set of learner questions, and launches the Player. See
the [judge and learner walkthrough](./paths/guides/start-learning-with-codex.guide.md)
for expected checkpoints and fallbacks.

## Try it without rebuilding this project

No OpenAI API key, credits, or plugin build is required for the judge path.

1. Open the [public Learning Labs site](https://build-week.pathmx.net/).
2. Follow the submission walkthrough.
3. Open a featured example and use its visible Player controls.
4. Inspect the linked Markdown Source in this repository to see the durable
   artifact behind the experience.

The one-prompt flow above tests the learner-facing agent skills without
compiling or packaging a plugin. For repository inspection, see
[PathMX Skills](https://github.com/pathmx/pathmx-skills) and the public
[Learning Starter](https://github.com/pathmx/pathmx-learning-starter), which
ships the same repo-local skills under `.agents/skills/`.

## Local setup and test

Prerequisite: [Bun](https://bun.sh/). Until the submission is frozen, local
verification follows the latest published PathMX Labs CLI.

```sh
bunx @fellowhumans/pathmx@latest build paths/index.path.md -o .pathmx-check --clean
bunx @fellowhumans/pathmx@latest play
```

The first command is the reproducible build check. The second launches the
Player for local review. The primary judge path does not require credentials;
AI image generation in unrelated experiments is optional and is not part of
the required test.

## Repository shape

```text
AGENTS.md
.agents/skills/pathmx/SKILL.md
paths/
├── index.path.md
├── tasks/index.tasks.md
├── labs/index.path.md
├── research/index.path.md
├── work-log/index.path.md
└── work-log/changes.log.md
```

- `paths/index.path.md` is the project hub.
- `paths/tasks/` is the Codex-managed work queue and evidence trail.
- `paths/labs/` contains experiments that may fail.
- `paths/research/` collects useful external references.
- `paths/work-log/` contains dated notes, handoffs, and the playable changes log
  required before shared pushes.

## Private information

Do not commit Devpost invitation links, credentials, private contact details,
learner records, raw transcripts, or Codex task identifiers. Share sensitive
team administration through the agreed private channel.

## Status

Active Build Week execution. Current ownership, blockers, next moves, and
completion evidence live in the [task dashboard](./paths/tasks/index.tasks.md).

Current limitation: the demonstrated loop is local and single-player. Shared
and multi-user Paths remain future work.
