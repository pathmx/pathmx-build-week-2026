# Plugin-Backed PathMX Authoring

Use this reference when a Source needs an implemented plugin-backed authoring
shape rather than plain Markdown, CSS, or a Literate Component.

## Contents

- Ground rules
- Table focus steps
- Code focus steps
- Generated images and spaceholders
- Image presentation directives
- Includes and generated Source content
- Optional render plugins
- Verification checklist

## Ground Rules

Plugin-backed syntax is version-sensitive. Before authoring it:

1. Read the nearest repository instructions and relevant config.
2. Check local examples and focused tests for the installed version.
3. Use ordinary Markdown when it communicates the same thing cleanly.
4. Build the changed Source into a scratch output directory and inspect any
   warnings.

Do not teach or copy proposed syntax into a Source. If a design doc conflicts
with an implemented local example, prefer the implemented contract and mention
the mismatch.

## Table Focus Steps

Use authored table focus steps when one table needs a deliberate Play sequence
over regions of the same grid. The block must contain one rendered table for
this first slice.

Put `play.table.steps` in block-local comment topmatter after a `---` divider:

```md
---

<!--
type: play-fixture
id: compare-cases
play:
  table:
    steps:
      - label: Compare inputs
        rows: 1-3
        columns: 1-3
      - label: Inspect the outlier
        rows: 4
        columns: 5
      - label: Sweep the output column
        columns: 5
-->

## Compare Cases

| Case | Input A | Input B | Rule | Output |
| ---- | ------- | ------- | ---- | ------ |
| one  | 2       | 3       | add  | 5      |
| two  | 4       | 5       | add  | 9      |
| out  | 8       | 9       | add  | 99     |
```

Rules:

- `rows` and `columns` are 1-based positive integers or inclusive ranges
  such as `2` or `2-4`.
- At least one of `rows` or `columns` is required for each step.
- Omitted `rows` means all body rows; omitted `columns` means all rendered
  columns.
- Overlap is allowed; a cell can belong to more than one step.
- Column-focused steps mark matching header cells as context.
- Rowspan and colspan are not supported by the first slice.

A valid sequence keeps the table establishing Beat, suppresses inferred
`table-row` Beats for that table, and emits ordered child `table-step` Beats
with IDs like `TABLE_ID:step-1`. The rendered cells use tokenized
`data-pathmx-beat-member` values so the same cell can project active or seen
state from multiple steps.

If validation fails, PathMX warns with `choreographer/table-steps-invalid` and
falls back to ordinary row Beats.

## Code Focus Steps

Use authored code steps when a code fence needs an intentional reveal order.
Put a reveal.js-style step spec after the language in the fence info:

````md
```js [1-2|3]
let a = 1
let b = 2
let c = (x) => a + b + x
c(3)
```
````

`|` separates steps. Within one step, comma-separated lines and ranges light
up together:

````md
```js [1,5|2-4]
function outer() {
  const inner = () => {
    return "the middle is one step"
  }
  return inner()
}
```
````

Rules:

- Line numbers are 1-based.
- `N-M` is an inclusive range.
- Each step must contain at least one valid line.
- The rendered fence info strips the step spec.
- Plain fences are one code Beat; PathMX does not invent line-by-line steps.
- `play.steps.code: none` in frontmatter opts fences out of code Beats.

Invalid or out-of-range specs warn with code-step diagnostics. Verify the
route contains `code-step` children and active lines remain legible.

## Generated Images And Spaceholders

Current generated image authoring uses normal Markdown images plus an attached
`@spaceholder` directive comment. The old `@image.generate` authoring form is
historical and should be migrated.

```md
![Ambient cyberpunk skyline](./images/skyline.png) <!-- @spaceholder prompt="ambient cyberpunk skyline" ar=16:9 -->
```

The generic `@spaceholder` form resolves from the Markdown owner:

- on an image, it means an image spaceholder;
- on a link, it means a PathMX Source spaceholder.

Explicit forms remain valid when the output type needs to be stated:

```md
![Hero portrait](./hero.png) <!-- @spaceholder.image prompt="profile portrait of the hero" ar=1:1 -->
[Hero lore](./hero.lore.md) <!-- @spaceholder.pathmx prompt="write three short paragraphs of lore" -->
```

Keep alt text and link labels human-readable. Put generation parameters in the
attached comment, not in the visible label. Spaceholders materialize source
files and may queue deferred work, so inspect the Source diff after a real
generation run and keep generated assets plus sidecar/provenance files that
the implementation owns.

## Image Presentation Directives

Use image presentation directives for layout, not generation:

```md
![@image.cover: System overview](./images/system.png)
![@image.background: cover](./images/hero.png)
![Lab banner](./images/lab.png) <!-- @spaceholder prompt="forest lab" ar=16:9 | @image.background fit=cover -->
```

The attached-comment pipeline lets a source-stage directive such as
`@spaceholder` compose with one presentation stage such as `@image.cover`,
`@image.wide`, or `@image.background`. Do not stack competing presentation
stages on the same image.

## Includes And Generated Source Content

Use `@include` when another Source should render inline:

```md
[@include: Shared explanation](./shared.include.md#main)
```

Generated PathMX Source content can pipe a spaceholder to `@include`:

```md
[Hero stats](./hero.stats.md) <!-- @spaceholder prompt="generate a markdown table of stats" | @include -->
```

The generated target remains a normal Source with its own lifecycle. The
include only changes how that target renders at the current location.

## Optional Render Plugins

Capabilities such as math, Mermaid, callouts, icons, syntax highlighting,
wikilinks, custom directives, resources, and plugin-provided components depend
on repository configuration. Copy a current local example or plugin doc for
the installed version. If the capability is absent or disabled, fall back to
plain Markdown, a local asset, CSS, or a Literate Component rather than
inventing Source syntax.

## Verification Checklist

- The capability is enabled in local config or demonstrated by a current
  example/test.
- The Source stays readable as Markdown without the Player.
- Authored labels, alt text, and link text remain human-facing.
- Build warnings are expected and recorded, or fixed.
- Play routes expose the intended Beat types (`table-step`, `code-step`,
  include/component Beats, etc.) when the behavior affects pacing.
- Generated files, sidecars, pending targets, and response data are reviewed
  before handoff; remove only test data you created.
