# PathMX Source Authoring

Use this reference when writing or reviewing PathMX markdown sources.

## Core Model

PathMX starts from normal files:

```txt
repository -> source -> block -> graph -> build artifacts -> runtime/player
```

- A source is one authored content node, usually a markdown file.
- A block is a playable unit inside a source.
- A path is a curated route through sources and blocks.
- Links, source data, block data, tags, and plugin facts form the graph.

## Source Roles

The current build infers the canonical source type from the filename suffix.

This is 100% malleable to the domain of the project but as an example, here are some common source roles:

| Filename              | Inferred source type | Typical use                     |
| --------------------- | -------------------- | ------------------------------- |
| `index.path.md`       | `pathmx/path`        | Root or curated route           |
| `topic.guide.md`      | `pathmx/guide`       | Stable reference or explanation |
| `feature.demo.md`     | `pathmx/demo`        | Playable feature/example        |
| `exercise.lab.md`     | `pathmx/lab`         | Guided practice                 |
| `deck.slides.md`      | `pathmx/slides`      | Presentation-like source        |
| `notes.notes.md`      | `pathmx/notes`       | Meeting or project notes        |
| `thing.components.md` | `pathmx/components`  | Component family                |
| `thing.component.md`  | `pathmx/component`   | Single component                |
| `schema.map.md`       | `pathmx/map`         | Source-type map data            |

Prefer a meaningful suffix over a generic `.md` file. Use frontmatter `type`
for authored/source-facing semantics when useful, but do not assume it
overrides the inferred build source type.

## Source Frontmatter

Use frontmatter for source-level props: title, description, status, date,
related links, tags, route, play options, theme/font options, or
project-specific data.

`title`, `type`, `description`, `image` is auto-inferred from markdown content so do not specifiy unless explicitness is needed.

Standard fields:

```md
---
type: guide # only define if not a type-hinted filename suffix
title: Variables Lab # Only defined if not the first heading
description: Review concepts before the lab. # Only defined if not the first paragraph/content
tags:
  - python
  - variables
related: # only use for "hidden inference", explicit markdown links are better
  - ./loops.lab.md
---

# Variables Lab Prep
```

Rules:

- Use `type`, not new authored `kind` fields.
- Keep relative links relative to the current source.
- Do not stuff long prose into frontmatter; put teaching content in blocks.
- Say whether a capability is implemented, proposed, or experimental when the
  source is a design or plan.

## Blocks And Play Pacing

Separate blocks with a thematic break on its own line:

```md
# Lesson Title

The opening block orients the reader.

---

## Try It

One exercise or inspection task.
```

PathMX recognizes `---` as a block divider when it is on its own line with
blank-line separation. Use `***` when the author wants a literal horizontal
rule inside a block.

Good blocks:

- answer one reader question;
- can stand alone as a play-mode stop;
- avoid mixing setup, example, task, answer, and follow-up in one long section;
- start with a heading or clear visual anchor when the block needs a label;
- keep tables, code, media, and components close to their explanatory text.

Treat one block as one coherent learner or reviewer move. Useful moves include
an orientation, one claim with its evidence, a worked-step cluster, one
experiment state, a decision, a question, or a checkpoint. Split a block when
the goal, interaction mode, or evidence target changes. Merge fragments that
only make sense together.

Avoid both extremes:

- do not place an entire lesson or full-screen application in one block unless
  it exposes a clear internal state or nested-Beat sequence;
- do not make every sentence its own block unless the short cadence is a
  deliberate reveal, dramatic pause, or retrieval rhythm.

For learning sources, a reliable sequence across blocks is:

1. orient the learner to the goal or question;
2. explain, model, or expose the object of study;
3. ask the learner to inspect, predict, manipulate, or answer;
4. provide feedback, evidence, or reflection;
5. link the next useful move.

## Beats Inside Blocks

Authors should shape blocks deliberately and let PathMX project ordinary
content into Beats. Headings, paragraphs, list items, table rows, media, code
focus steps, component roots, and ordered component states can become stops in
the Play route.

Use Beats for reveal rhythm inside one coherent move. Do not hide every
meaningful learning step inside an opaque component loop. If a dynamic
component has important stages, expose them through ordered states or explicit
nested Beats so the Player and block-based review can address them.

Before handing off a substantial playable source:

- preview the actual Player route, not only the Markdown;
- check that each block has a clear entry point and makes sense in isolation;
- check forward, backward, and skip-out behavior through nested content;
- check that dense tables, code, media, and interactive components fit the
  viewport and do not create accidental stops;
- check keyboard and touch interaction where the component accepts input;
- revise the source when the route feels too granular, too sparse, or hides the
  learner's meaningful steps.

## Block Topmatter

Use block topmatter when a block needs stable identity, metadata, tags, or a
source-facing role. Comment topmatter stays invisible in rendered Markdown:

```md
---

<!--
type: checkpoint
id: before-you-start
title: Before You Start
tags:
  - prep
-->

## Before You Start

- Explain what a variable stores.
- Predict one assignment statement.
```

Plain topmatter also works at the top of a block:

```md
id: route-overview
title: Route Overview

## Route Overview
```

Use stable `id` values for blocks that will be linked, reviewed, or used as
evidence targets.

## Links And Directives

Write normal Markdown links first:

```md
[Next lab](./loops.lab.md)
![Diagram](./images/flow.png)
```

Common PathMX directive-shaped links remain readable Markdown:

```md
[@include: Shared checklist](./includes/shared-checklist.include.md)
[@styles]: ./lesson.css
[@root.styles]: ./theme.css
![@image.generate prompt="network topology", ar=16:9](./images/topology.png)
```

Use existing directive forms. If a new form seems necessary, document it in a
plan/design first instead of adding one-off syntax to a source.

## Small Playable Source

````md
---
type: lab
title: Inspect a Function
description: A short lab for reading one Python function.
---

# Inspect a Function

By the end, the learner can explain inputs, body, and return value.

---

<!--
type: setup
id: setup
title: Setup
-->

## Setup

Open `area.py` and find `rectangle_area`.

---

<!--
type: practice
id: trace
title: Trace the Function
-->

## Trace the Function

```python
def rectangle_area(width, height):
    return width * height
```

- What are the inputs?
- What expression computes the output?

---

<!--
type: check
id: check-yourself
title: Check Yourself
-->

## Check Yourself

For `rectangle_area(4, 5)`, the result is `20`.
````

## Authoring Checklist

- Filename suffix matches the source role.
- Source frontmatter is short and uses `type`, not `kind`.
- Major ideas are split into `---` blocks.
- Each block represents one coherent learner or reviewer move.
- Meaningful stages inside interactive components remain addressable Beats.
- Important blocks have stable `id` values.
- Relative links resolve from the current file.
- Directives are existing PathMX forms, not invented local syntax.
- The source is readable as plain Markdown and useful in play mode.
