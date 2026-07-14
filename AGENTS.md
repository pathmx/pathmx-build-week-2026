# PathMX Build Week 2026 Instructions

Start by reading `README.md` and `paths/index.path.md`.

## Purpose

This repository coordinates Build Week labs, evaluations, project decisions,
and submission evidence. Reusable learner-facing work should graduate to
`pathmx-learning-starter`; PathMX Core changes belong in the main `pathmx`
repository.

## Authoring

- Use ordinary readable Markdown as the source of truth.
- Use type-hinted filenames and relative Markdown links.
- Separate major playable moments with `---` on its own line.
- Keep one coherent experiment, decision, review, or learning move per block.
- Put rough work in `paths/labs/`; record reproducible evidence in
  `paths/reports/`.
- Do not invent PathMX syntax or product contracts inside an experiment.

Use the repo-local `pathmx-authoring` skill for substantive PathMX content.

## Team workflow

- One outcome has one owner and one reviewer.
- Create one short-lived branch per outcome; keep `main` readable and buildable.
- Check `git status` before editing and preserve work you did not create.
- Record decisions and accepted changes in this repository, not only in chat.
- Keep lockfiles, shared indexes, release work, and generated assets with the
  coordinator unless explicitly assigned.
- Never commit private team links, credentials, sensitive learner data, raw
  transcripts, or Codex task IDs.

## Verification

For authored-source changes:

```sh
pathmx build -o .pathmx-check
```

Use `pathmx play` for visual review. Reports should name the environment,
versions, reproduction steps, expected result, actual result, and evidence.
