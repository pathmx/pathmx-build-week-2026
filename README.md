# PathMX Build Week 2026

Team workspace for OpenAI Build Week 2026: task coordination, project
decisions, learning labs, evaluations, demo preparation, and submission
evidence.

The reusable learner-facing template lives in the separate
`pathmx-learning-starter` repository. PathMX Core implementation stays in the
main `pathmx` repository. This workspace should not become a second product or
a place for unreviewed Core patches.

## Working claim

Codex is the conversation and orchestration surface. PathMX is the durable,
playable learning surface. The learner leaves with a living curriculum,
evidence of learning, and a next step—not only a chat transcript.

## Current contributor setup

```sh
bun add -g @fellowhumans/pathmx@latest
pathmx self-update
pathmx --version
pathmx play
```

## Repository shape

```text
AGENTS.md
.agents/skills/pathmx-authoring/SKILL.md
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
