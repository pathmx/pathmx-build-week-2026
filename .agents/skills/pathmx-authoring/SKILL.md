---
name: pathmx-authoring
description: Write, revise, and review PathMX author-facing repositories and playable markdown sources. Use when creating or editing PathMX files, source roles, frontmatter, block topmatter, relative links, directives, literate components, play pacing, or PathMX authoring/tooling guidance.
---

# PathMX Authoring

Write PathMX sources that stay useful as plain Markdown and become good
playable documents in PathMX.

## Grounding

1. In an existing PathMX repo, read local agent instructions first. For this
   workspace that means `readme.md`, `paths/index.path.md`, and
   `paths/inbox/index.inbox.md`.
2. Inspect nearby sources with the same role before inventing a new pattern.
3. Prefer relative links to source files and assets so PathMX can rewrite,
   move, and verify the graph.
4. Verify authoring changes with scratch output, not a live `.pathmx`
   directory that may belong to a running dev/play server.

## Reference Routing

Load only the reference needed for the current task:

- `references/source-authoring.md`: use for all PathMX source roles, frontmatter, block topmatter, links, directives, and play pacing.
- `references/literate-components.md`: use for custom tags, HTML/CSS/JS fences, component state, and component authoring review.
- `references/tooling-and-verification.md`: use before running PathMX commands, previewing output, or deciding how to verify a repo-local authoring change.

## Workflow

1. Identify the source role and audience e.g. path, guide, demo, lab, notes, spec, decision, or project-specific role. These may vary by repo.
2. Draft or revise the source as normal Markdown first. Add PathMX capability
   only when it improves navigation, review, learning, or interaction.
3. Split major playable moments with thematic breaks (`---`) on their own
   lines with blank lines around them.
4. Add source frontmatter and block topmatter when it improves metadata,
   search, routing, play labels, or agent continuity.
5. Keep blocks self-contained enough to work in play mode. A block should be a
   useful teaching, review, or demo beat, not an arbitrary wall of prose.
6. Use existing directives and components by linking their source definitions.
   Do not silently invent new directive syntax for one document.

## Output Expectations

- For new sources, include a short note naming the source role, why the block
  pacing is appropriate, and what command verified it.
- For reviews, lead with concrete authoring issues: broken links, weak block
  pacing, missing metadata, non-playable structure, or component contracts that do not match the literate runtime.
- For broader repo work, keep documented workflows and bookkeeping up to date.
