---
name: pathmx-authoring
description: Author, revise, review, and verify PathMX Markdown sources. Use for source roles, frontmatter, Blocks, Beats, links, directives, variables, includes, CSS, themes, color, contrast, typography, fonts, tasks or questions, Literate Components, interactive or presentational design engineering, learning and focus flows, Play pacing, and PathMX CLI preview or build checks in any repository.
---

# PathMX Authoring

Create readable Markdown that also works as a coherent PathMX source graph and
playable experience.

## Workflow

1. Read the nearest repository instructions, then inspect only the config,
   version, entry Source, and nearby examples relevant to the requested change.
   Do not assume a particular folder layout or preload broad workspace indexes.
2. Identify the source's role and audience. Prefer the repository's existing
   type-hinted filename conventions.
3. For ambitious visual or interactive work, write a short experience brief
   before choosing Blocks or implementation: name the thesis, arrival,
   anti-targets, arc, meaningful controls, protected invariants, and proof.
4. Draft ordinary Markdown first. Add PathMX metadata or capabilities only when
   they improve structure, reuse, navigation, presentation, or interaction.
5. Shape each Block as one coherent reader, learner, or reviewer move. Use
   Beats for meaningful reveal or interaction stages inside that move.
6. Preserve relative links and reuse existing directives, components, and
   project conventions. Do not invent syntax or runtime APIs.
7. Verify in proportion to the change, using the project's pinned tooling and
   a scratch output directory when building.

## Reference Routing

Open a reference only when that surface is part of the task. Read the relevant
sections needed to make and verify the change; do not preload unrelated
references:

- `references/source-authoring.md` — source roles, metadata, Blocks, Beats,
  links, built-in capabilities, and review.
- `references/plugin-backed-authoring.md` — implemented plugin-backed
  authoring shapes, including table focus steps, code steps, spaceholders,
  image directives, includes, and optional rendering plugins.
- `references/styling-and-theming.md` — source and root CSS, selector scope,
  theme tokens, color modes, fonts, cascade order, and print.
- `references/color-and-contrast.md` — semantic color roles, OKLCH, modes,
  contrast pairs, gamut, fallbacks, and color review.
- `references/typography.md` — hierarchy, measure, wrapping, interface text,
  font behavior, language direction, and typography review.
- `references/literate-components.md` — component definitions, templates,
  resources, styles, scripts, state, lifecycle, and Player Context Actions.
- `references/design-engineering.md` — visual direction, hierarchy, interaction
  feedback, motion, Block/Beat focus flow, responsive composition, performance,
  and rendered polish review.
- `references/tooling-and-verification.md` — CLI selection, builds, preview,
  diagnostics, and verification.
- `references/question-play-verification.md` — direct choice actions,
  text-control focus, durable submission, forward navigation, and test-response
  cleanup in the Player.

Combine references by task:

| Task surface | Read |
| --- | --- |
| CSS, themes, color modes, or fonts | `source-authoring` and `styling-and-theming`; add `color-and-contrast` or `typography` when that craft surface is part of the task |
| Literate Component styling | the styling set above plus `literate-components` |
| Interactive or presentational components, custom HTML/CSS | `design-engineering`, after the applicable Source, styling, and component contracts |
| Plugin-backed syntax, generated media, directive pipelines, table or code stepping, includes, optional render plugins | `source-authoring` and `plugin-backed-authoring` |
| Task or question authoring | `source-authoring`; when the work answers, submits, restores, or advances a question in Play, add `question-play-verification` and follow its write-cleanup boundary |
| Version-sensitive, graph-mutating, or preview commands | `tooling-and-verification`, before running them |

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
