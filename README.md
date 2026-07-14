# PathMX Build Week 2026

Team workspace for OpenAI Build Week 2026: project decisions, learning labs,
evaluation reports, demo preparation, and submission evidence.

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
pathmx --version
pathmx play
```

## Repository shape

```text
AGENTS.md
.agents/skills/pathmx-authoring/SKILL.md
paths/
├── index.path.md
├── team/index.guide.md
├── labs/index.path.md
└── reports/index.path.md
```

- `paths/index.path.md` is the project hub.
- `paths/team/` records working agreements and accepted ownership.
- `paths/labs/` contains experiments that may fail.
- `paths/reports/` contains clean-install, workflow, bug, and evaluation
  evidence.

## Private information

Do not commit Devpost invitation links, credentials, private contact details,
learner records, raw transcripts, or Codex task identifiers. Share sensitive
team administration through the agreed private channel.

## Status

Light team scaffold. Roles and the canonical learning topic remain open until
the team kickoff.
