# PathMX Typography

Use this reference when custom typography materially affects a PathMX Source or
Literate Component. Preserve the project's existing type system and the
Runtime's readable defaults unless the subject or task justifies a change.

This guidance adapts selected craft principles from Jakub Krehel's
[Better Typography](https://github.com/jakubkrehel/skills/tree/main/skills/better-typography)
to PathMX's source-first, standards-native styling contracts.

## Contents

- [Preserve Meaningful Structure](#preserve-meaningful-structure)
- [Shape Readable Text](#shape-readable-text)
- [Handle Interface And Data Text](#handle-interface-and-data-text)
- [Load Fonts Intentionally](#load-fonts-intentionally)
- [Support Language And Reader Settings](#support-language-and-reader-settings)
- [Verify Typography](#verify-typography)

## Preserve Meaningful Structure

Choose heading levels from the Source outline, not from their default size.
Keep levels sequential and style their appearance through theme tokens or
scoped CSS. Within one Source, lower-level headings should not visually
overpower the levels that contain them.

Use the repository's existing type scale and roles. Prefer a small, repeatable
set of body, label, code, and heading treatments over one-off sizes and weights.
Write copy in natural case and use CSS for an intentional uppercase or display
treatment so the underlying Markdown remains readable and reusable.

## Shape Readable Text

- Keep long-form prose near 60–75 characters per line. Start with the PathMX
  `measure` token, then inspect the actual font, size, container, and content.
- Use comfortable unitless leading. Body text commonly lands around `1.5–1.7`;
  headings are usually tighter. Treat those ranges as starting points, not a
  replacement for rendered review.
- Use `text-wrap: balance` for short headings and `text-wrap: pretty` for short
  descriptions when they improve the result. Do not balance long prose.
- Use `overflow-wrap: break-word` where URLs, identifiers, formulas, or long
  terms could escape their container.
- Keep links visibly recognizable. When customizing underlines, preserve
  `text-decoration-skip-ink` and prefer font-provided position or thickness
  before inventing a decorative replacement.

Do not solve a wrapping or hierarchy problem by shrinking important text below
a comfortable reading size. Reconsider the measure, wording, layout, or type
role first.

## Handle Interface And Data Text

Apply `font-variant-numeric: tabular-nums` to changing values such as timers,
scores, prices, counters, and simulation readouts so digit width does not shift
the layout.

Truncation hides content. Use an ellipsis or line clamp only when the complete
value remains available through an expanded view, accessible name, or another
clear path. Keep labels that must remain atomic on one line, but let explanatory
copy reflow.

Keep editable controls at least `16px` on narrow touch layouts so focusing an
input does not trigger avoidable viewport zoom on iOS. Preserve browser zoom
and do not use viewport restrictions as a typography fix.

## Load Fonts Intentionally

Use the project's existing faces unless a new typeface serves a clear subject
or brand purpose. Prefer local `.woff2` files for web delivery. Define the
weights and styles that the Source actually uses, and include PathMX fallback
tokens in `theme.font.*` values.

Use variable fonts when several weights, optical sizes, or subject-relevant
axes justify them; a variable file is not automatically smaller or better.
Prefer standard CSS properties such as `font-weight`, `font-stretch`,
`font-style`, `font-optical-sizing`, and `font-variant-numeric` over raw
variation or OpenType tags when a property exists. The standard properties keep
working with fallback fonts.

Do not disable synthesized bold or italic until every intended face has been
loaded and the stricter fidelity is deliberate. A missing style that fails
visibly may be useful during development but is not a universal authoring rule.

## Support Language And Reader Settings

Let the host or project own the document's default language and direction. When
authored HTML switches language or direction locally, declare that change with
`lang` or `dir`. Use logical CSS properties such as `margin-inline-start` and
`text-align: start` so the same surface can adapt to right-to-left content.

Typography must survive reader-controlled zoom, larger default fonts, changed
line height, and changed letter spacing. Avoid fixed-height text containers and
layouts that depend on one font's exact metrics.

## Verify Typography

Inspect the applicable set in the rendered Player:

- Source outline and visual heading hierarchy;
- body measure, leading, paragraph rhythm, and short-heading wrapping;
- long URLs, identifiers, code, tables, footnotes, and dense labels;
- changing numeric values and truncated content;
- form controls on a narrow touch viewport;
- fallback rendering while a hosted or local font is unavailable or loading;
- browser zoom and reader text-spacing overrides;
- right-to-left or mixed-language content when the Source supports it;
- Browse, Play, focused, embedded, narrow, wide, and print presentation; and
- plain-Markdown usefulness without custom typography.

Use `styling-and-theming.md` for the implemented PathMX font, theme, scope, and
cascade contracts. Use the repository's pinned version and local examples as
the final authority.
