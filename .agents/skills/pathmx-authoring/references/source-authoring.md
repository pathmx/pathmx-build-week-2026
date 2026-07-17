# PathMX Source Authoring

Use this reference when creating or reviewing PathMX Markdown sources.

## Contents

- Project discovery
- Sources and roles
- Frontmatter and Block data
- Blocks and Beats
- Links, imports, and capabilities
- Interactive and version-sensitive surfaces
- Review checklist

## Project Discovery

Before authoring:

1. Read the nearest repository instructions.
2. Inspect `pathmx.config.md`, `pathmx.json`, package scripts, or other local
   configuration when present.
3. Check the installed PathMX version before using a recently added feature.
4. Inspect nearby sources with the same role and reuse their established
   metadata, directives, and links.

Treat a repository's structure as project policy, not a PathMX requirement.
PathMX can build sources from many folder layouts and entry files.

## Sources And Roles

PathMX turns files into Sources, Sources into Blocks, and rendered content
inside Blocks into playable Beats:

```txt
repository -> Source -> Block -> Beat -> build artifacts -> Runtime/Player
```

The final filename hint determines the canonical build type. Examples:

| Filename               | Build type          | Common role              |
| ---------------------- | ------------------- | ------------------------ |
| `index.path.md`        | `pathmx/path`       | route or hub             |
| `topic.guide.md`       | `pathmx/guide`      | explanation or reference |
| `exercise.lab.md`      | `pathmx/lab`        | guided practice          |
| `feature.demo.md`      | `pathmx/demo`       | playable example         |
| `deck.slides.md`       | `pathmx/slides`     | presentation             |
| `notes.notes.md`       | `pathmx/notes`      | working notes            |
| `family.components.md` | `pathmx/components` | component family         |
| `widget.component.md`  | `pathmx/component`  | one component            |

Projects may use any meaningful suffix. A plain `topic.md` is
`pathmx/document`. Authored frontmatter `type` describes source-facing domain
semantics; it does not replace the filename-derived build type.

## Frontmatter And Block Data

Keep frontmatter short and source-level:

```md
---
type: guide
status: active
tags: [python, variables]
related:
  - ./loops.lab.md
---

# Variables
```

PathMX can derive `title`, `description`, and an image from the Markdown, so
author them only when the derived value is wrong or explicit metadata matters.

Use source-facing `type`; do not introduce a parallel `kind` discriminator.
Keep prose in the body, and keep local links relative to the current source.

Not every Block needs topmatter. Use topmatter when the Block needs a stable
identity or additional data to render. When appropriate, give a Block stable
data with comment topmatter immediately after its divider:

```md
---

<!--
type: checkpoint
id: predict-output
title: Predict the Output
tags: [practice]
-->

## Predict the Output
```

Prefer comment topmatter because it stays valid, invisible Markdown. Use a
stable `id` when a Block will be linked, annotated, submitted, or used as an
evidence target.

## Blocks And Beats

Put `---` on its own line, with blank lines around it, to start a new Block.
Use `***` for a literal horizontal rule that should remain inside a Block.

A Block should express one coherent move: orient, explain, model, inspect,
practice, answer, receive feedback, reflect, or decide. Split when the goal,
interaction mode, or evidence target changes. Merge fragments that only make
sense together.

PathMX can project headings, paragraphs, list items, table rows, authored table
focus steps, media, code focus steps, component roots, and ordered component
states into Beats. Use those Beats for reveal or interaction stages within one
Block. Do not hide meaningful learning steps inside an opaque component loop.
Read `plugin-backed-authoring.md` before authoring table focus steps, code
steps, generated media, or other plugin-shaped Play surfaces.

For a substantial playable source, inspect forward, backward, and skip-out
behavior; dense tables and code; component viewport fit; and keyboard/touch
interaction.

## Links, Imports, And Capabilities

Prefer ordinary Markdown and relative paths:

```md
[Next lab](./loops.lab.md)
![Diagram](./images/flow.png)
```

PathMX rewrites known Source links to routes and tracks local assets as build
dependencies. Use `pathmx mv` or another graph-aware move when available rather
than manually moving a heavily linked Source.

The default PathMX stack supports these authoring surfaces; configuration can
disable some of them or add more:

| Capability                                 | Authoring shape                                                   |
| ------------------------------------------ | ----------------------------------------------------------------- |
| GFM and raw HTML                           | headings, tables, task lists, footnotes, fenced code, HTML        |
| Tags                                       | frontmatter/block `tags` or inline `#tags` outside code           |
| Wikilinks                                  | `[[Target]]` when the project enables them                        |
| Variables                                  | `{{ block.name }}`, `{{ source.title }}`, `{{ value: fallback }}` |
| Includes                                   | `[@include: Label](./shared.include.md#block-id)`                 |
| Source CSS                                 | `[@styles]: ./source.css`                                         |
| Root CSS                                   | `[@root.styles]: ./bundle.css` in the active root Source          |
| Components                                 | `[@widgets]: ./widgets.components.md` plus custom tags            |
| Callouts                                   | the project's existing `> [!NOTE]`-style pattern                  |
| Theme/fonts                                | named `theme` and `fonts` frontmatter values                      |
| Math, Mermaid, highlighting, images, icons | use only when enabled locally                                     |

Read `styling-and-theming.md` before authoring CSS, theme tokens, or fonts; it
defines directive scope, selector scope, color modes, cascade order, and
presentation boundaries.

Named directive definitions are useful for reuse:

```md
[Shared note][@include.note]

[@include.note]: ./shared.include.md#note
[@styles.print]: ./print.css
[@widgets]: ./widgets.components.md
```

Do not guess directive labels or options. Copy an implemented local example or
consult the plugin documentation for the installed version. For directive
pipelines, image generation, includes, and optional rendering plugins, use
`plugin-backed-authoring.md` as the practical authoring checklist.

## Interactive And Version-Sensitive Surfaces

Plain task lists remain portable Markdown. Durable task or question submission
requires a compatible PathMX version, an Action Mapping, and a Host that can
execute it. Follow the repository's accepted contract rather than inferring
persistence from checkboxes, form controls, or component state.

When supported, a single-choice question uses a stable `type: question` Block,
a stable `id`, top-level list options, and the installed question Action. Keep
the question and its options readable without the Player.

Keep learner-facing question copy focused on the learner's goal, decision,
constraints, or next move. Do not mix implementation commentary into the
prompt—for example, that an answer is saved as readable evidence, written to
Source, submitted through an Action, or consumed by an agent. Put maintainer
context in hidden Block data, comments, or reviewer documentation. When
persistence or data use needs a learner-facing disclosure for trust or consent,
present it deliberately as product policy rather than as question instruction.

Treat generated images, AI spaceholders, annotations, persistent responses,
and custom Actions as plugin- or version-sensitive. Verify configuration and
existing examples before authoring them. Never introduce a proposed API as if
it were part of the portable baseline.

## Review Checklist

- The filename expresses the Source role.
- Frontmatter is short; authored discriminators use `type`.
- Each `---` Block represents one coherent move.
- Meaningful stages remain addressable Beats.
- Important Blocks have stable IDs.
- Question copy contains only goal-relevant learner instructions; internal
  persistence, provenance, and agent details live outside the prompt.
- Links and assets are relative and resolve from the current Source.
- Directives and interactive contracts exist in the installed PathMX version.
- The source remains readable as plain Markdown and coherent in Play.
