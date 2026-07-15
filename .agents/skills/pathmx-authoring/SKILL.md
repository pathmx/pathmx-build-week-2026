---
name: pathmx-authoring
description: Author, revise, review, and verify PathMX Markdown sources. Use for source roles, frontmatter, Blocks, Beats, links, directives, variables, includes, CSS, themes, fonts, tasks or questions, Literate Components, Play pacing, and PathMX CLI preview or build checks in any repository.
---

# PathMX Authoring

Create readable Markdown that also works as a coherent PathMX source graph and
playable experience.

## Workflow

1. Read the nearest repository instructions and inspect its PathMX config,
   installed version, entry sources, and nearby examples. Do not assume a
   particular folder layout or project workflow.
2. Identify the source's role and audience. Prefer the repository's existing
   type-hinted filename conventions.
3. Draft ordinary Markdown first. Add PathMX metadata or capabilities only when
   they improve structure, reuse, navigation, presentation, or interaction.
4. Shape each Block as one coherent reader, learner, or reviewer move. Use
   Beats for meaningful reveal or interaction stages inside that move.
5. Preserve relative links and reuse existing directives, components, and
   project conventions. Do not invent syntax or runtime APIs.
6. Verify in proportion to the change, using the project's pinned tooling and
   a scratch output directory when building.

## Reference Routing

Read the complete reference that matches the task:

- `references/source-authoring.md` — source roles, metadata, Blocks, Beats,
  links, built-in capabilities, and review.
- `references/styling-and-theming.md` — source and root CSS, selector scope,
  theme tokens, color modes, fonts, cascade order, and print.
- `references/literate-components.md` — component definitions, templates,
  resources, styles, scripts, state, lifecycle, and Player Context Actions.
- `references/tooling-and-verification.md` — CLI selection, builds, preview,
  diagnostics, and verification.

For CSS, theme, or font work, read the source-authoring and styling references.
For component styling, also read the Literate Component reference. Read the
tooling reference before running PathMX commands.

## Guardrails

- Keep sources useful as plain Markdown.
- Use source-facing `type`, not a new `kind` discriminator.
- Prefer relative source and asset links so graph-aware tools can move,
  rewrite, and verify them.
- Treat local repository instructions and pinned PathMX versions as
  authoritative for enabled or version-sensitive capabilities.
- Use only implemented contracts. When a capability is proposed, absent, or
  version-mismatched, report the boundary instead of polyfilling it in source.

## Handoff

Report the changed sources, the verification performed, and any skipped checks
or version/configuration assumptions.
