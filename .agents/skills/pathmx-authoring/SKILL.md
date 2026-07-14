---
name: pathmx-authoring
description: Create, revise, and review PathMX project hubs, learning labs, evaluation reports, team guides, and playable Sources in this Build Week repository.
---

# PathMX Authoring

1. Read `AGENTS.md`, `README.md`, and `paths/index.path.md` before editing.
2. Inspect the nearest Source with the same filename role before adding a new
   pattern.
3. Write useful plain Markdown first; add PathMX behavior only when it improves
   learning, review, navigation, or interaction.
4. Use type-hinted filenames, short frontmatter, and relative links.
5. Split major playable moments with `---`; make each block one coherent
   learning move, experiment, decision, or evidence target.
6. Keep experiments in `paths/labs/` until accepted. Preserve useful failures
   as reports rather than patching around them silently.
7. Put reproducible setup, workflow, evaluation, and performance evidence in
   `paths/reports/` with environment and version details.
8. Do not copy private links, credentials, task identifiers, learner answers,
   or raw transcripts into shared Sources.
9. Do not reshape public PathMX contracts or patch PathMX Core from this
   repository.
10. Verify with `pathmx build -o .pathmx-check`; visually inspect the relevant
    route with `pathmx play` when presentation or interaction changed.

Report the changed Sources, verification result, and any skipped check.
