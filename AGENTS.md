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

- **Important:** Use the repo-local `/pathmx` skill for all PathMX content.
- Use `/learn` for the personal learning workflow, `/teach` for reusable paths
  intended for multiple learners, and `/pathmx` for PathMX syntax, Player
  routes, and verification.
- Treat the repo-local `learn`, `teach`, and `pathmx` packages as byte-for-byte
  mirrors of the canonical skill pack. Do not customize the copied packages
  here; make reusable changes in canonical and sync them back.
- `pathmx-authoring` is a retired compatibility name and must not compete with
  `/pathmx` for new work.
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
- Use only these task statuses: `in-progress` and `done`.
- Before starting work, find or create its task, set `status: in-progress`, name
  the accountable human in `owner`, and update the dashboard in the same change.
  Never use a Codex task ID or agent session as an owner.
- A prompt to track or add work creates and links a task. A prompt to take or
  work on a task claims it. A prompt to finish a task updates both the task and
  dashboard. A prompt to refresh the board reconciles every task file with the
  dashboard.
- Keep task bodies concise: outcome, next move, done-when checks, and dated
  activity or result notes. Put implementation in the appropriate lab or
  external repository and link it from the task.
- To finish work, record the checks run and any skipped verification, link the
  result artifacts, set `status: done`, and move its dashboard row to Done.
- Record decisions and accepted changes in this repository, not only in chat.
- Never commit private team links, credentials, sensitive learner data, raw
  transcripts, or Codex task IDs.

## Change log and pushes

- Tasks record planned work and detailed evidence. The change log records the
  concise outcome of work that is landing in a shared push; it does not replace
  the owning task's activity or result.
- Before pushing new repository work, prepend one entry to
  `paths/work-log/changes.log.md`, or materially update the newest entry when
  the outgoing work is part of that same coherent change.
- Keep the newest entry first and exactly one change entry per `---` Block.
  Begin each Block with a `##` outcome heading, then concise prose that links
  the owning task and durable artifacts, records meaningful verification or
  skipped review, and names any remaining follow-up.
- Do not copy raw command logs, chat transcripts, commit-by-commit narration,
  or task activity into the change log.
- Commit the entry with the work it describes. After fetching the remote and
  completing normal verification, run:

  ```sh
  ./scripts/check-change-log.sh origin/main
  ```

- Do not push when the change-log check fails. One entry may cover multiple
  outgoing commits when they form one coherent push; a later push needs a new
  Block or a material update to the current one.

## Verification

For authored-source changes:

```sh
pathmx build -o .pathmx-check
```

Use `pathmx play` for visual review. When reproducibility matters, record the
environment, versions, reproduction steps, expected result, actual result, and
evidence in the owning task. Create a separate report only when an evaluation
needs a durable standalone artifact.
