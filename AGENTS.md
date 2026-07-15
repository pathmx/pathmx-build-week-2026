# PathMX Build Week 2026 Instructions

Start by reading `paths/index.path.md` and `paths/tasks/index.tasks.md`.

## Purpose

This repository coordinates Build Week labs, evaluations, project decisions,
and submission evidence. Reusable learner-facing work should graduate to
`pathmx-learning-starter`; PathMX Core changes belong in the main `pathmx`
repository.

## Authoring

Always check that the latest version of the PathMX CLI is installed:

```sh
pathmx self-update
```

- **Important:** Use the `pathmx-authoring` skill for all PathMX content.
- Use ordinary readable Markdown as the source of truth.
- Use type-hinted filenames and relative Markdown links.
- Separate major playable moments with `---` on its own line.
- Keep one coherent experiment, decision, review, or learning move per block.
- Put rough work in `paths/labs/`. Record verification and completion evidence
  in the task that owns the work, linking durable artifacts where they live.
- Do not invent PathMX syntax or product contracts inside an experiment.

## Team workflow

- Check `git status` before editing and preserve work you did not create.
- Treat each `paths/tasks/*.task.md` file as the source of truth for one work
  item. `paths/tasks/index.tasks.md` is the human- and Codex-facing projection.
- Use only these task statuses: `ready`, `in-progress`, `review`, `blocked`, and
  `done`.
- Before starting work, find or create its task, set `status: in-progress`, name
  the accountable human in `owner`, and update the dashboard in the same
  change. Never use a Codex task ID or agent session as an owner.
- A prompt to track or add work creates and links a task. A prompt to take or
  work on a task claims it. A prompt to block, review, or finish a task updates
  both the task and dashboard. A prompt to refresh the board reconciles every
  task file with the dashboard.
- Keep task bodies concise: outcome, next move, done-when checks, and dated
  activity or result notes. Put implementation in the appropriate lab or
  external repository and link it from the task.
- To finish work, record the checks run and any skipped verification, link the
  result artifacts, set `status: done`, and move its dashboard row to Done.
- Record decisions and accepted changes in this repository, not only in chat.
- Never commit private team links, credentials, sensitive learner data, raw
  transcripts, or Codex task IDs.

## Verification

For authored-source changes:

```sh
pathmx build -o .pathmx-check
```

Use `pathmx play` for visual review. When reproducibility matters, record the
environment, versions, reproduction steps, expected result, actual result, and
evidence in the owning task. Create a separate report only when an evaluation
needs a durable standalone artifact.
