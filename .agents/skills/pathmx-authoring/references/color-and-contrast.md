# PathMX Color And Contrast

Use this reference when selecting, converting, or reviewing authored colors in
a PathMX theme, Source stylesheet, or Literate Component. Start with semantic
roles and observable states; do not build a palette merely because a color
scale is available.

This guidance adapts selected ideas from Jakub Krehel's
[Better Colors](https://github.com/jakubkrehel/skills/tree/main/skills/better-colors)
while keeping WCAG 2.2 checks, PathMX tokens, and rendered behavior
authoritative.

## Contents

- [Start With Semantic Roles](#start-with-semantic-roles)
- [Use OKLCH Intentionally](#use-oklch-intentionally)
- [Design Color Modes Separately](#design-color-modes-separately)
- [Verify Actual Contrast Pairs](#verify-actual-contrast-pairs)
- [Handle Gamut And Fallbacks](#handle-gamut-and-fallbacks)
- [Review Color Work](#review-color-work)

## Start With Semantic Roles

Prefer existing public `--pmx-*` variables and component-local semantic tokens
for background, foreground, accent, border, focus, code, and feedback roles.
Keep the token name tied to purpose rather than hue or a numeric palette step.
Add a component-local scale only when the component genuinely needs multiple
values of one color.

Color may reinforce state, category, or hierarchy, but must not carry the only
signal. Pair it with text, shape, position, pattern, iconography, or another
observable cue where meaning depends on the distinction.

## Use OKLCH Intentionally

OKLCH separates perceptual lightness (`L`), chroma (`C`), and hue (`H`):

```css
color: oklch(0.62 0.18 250);
background: oklch(0.96 0.02 250 / 0.9);
```

Use that separation to tune a color deliberately, not to infer accessibility
from one channel. When mechanically converting existing hex, RGB, or HSL
values, preserve selectors, gradients, alpha, token roles, and CSS structure.
Do not turn a color-format change into an unrequested visual redesign.

## Design Color Modes Separately

Treat light, dark, system, and intentionally forced schemes as related but
independent compositions. Do not produce dark mode by mechanically reversing a
light palette. Recheck foreground emphasis, chroma, borders, elevation cues,
images, code, focus, disabled states, and feedback in each mode.

Let forced-colors mode and user preferences override authored decoration. Use
system colors or existing Runtime behavior when a custom color would obscure
focus, controls, or meaning.

## Verify Actual Contrast Pairs

Identify the rendered foreground and the background directly behind it,
including transparency, gradients, images, overlays, and state changes. Check
the computed pair with a contrast tool; token names and an OKLCH lightness gap
are not proof.

For [WCAG 2.2 contrast conformance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html),
use the applicable published thresholds:

- `4.5:1` for ordinary text;
- `3:1` for large text;
- `3:1` for meaningful UI components and graphical objects; and
- the relevant exceptions and enhanced criteria from the project's target.

APCA may be used as an additional perceptual diagnostic, but
[WCAG 3 remains a working draft](https://www.w3.org/TR/wcag-3.0/). Do not
replace the project's accepted WCAG 2.x conformance check with an experimental
metric.

Review at least these pairs when they exist:

| Foreground | Background or comparison |
| --- | --- |
| body, muted, link, and code text | their actual document or component surface |
| button label and icon | rest, hover, pressed, selected, and disabled surfaces |
| focus indicator | adjacent colors on both sides of the indicator |
| success, warning, and error content | feedback surface and surrounding document |
| diagram, chart, or simulation marks | plot, scene, overlap, and selected states |
| text over media or gradients | every materially different region it may cross |

## Handle Gamut And Fallbacks

An OKLCH color can be syntactically valid but outside sRGB. Check the intended
baseline gamut and reduce chroma while preserving lightness and hue when a color
clips. Prefer an sRGB-safe baseline. Add wider-gamut enhancement only when it
matters and keep the baseline declaration first:

```css
.accent {
  color: oklch(0.7 0.18 150);
}

@media (color-gamut: p3) {
  .accent {
    color: oklch(0.7 0.25 150);
  }
}
```

Recheck contrast after gamut mapping or fallback selection. A displayable
fallback can differ enough from the intended color to change the result.

## Review Color Work

Inspect the applicable set in the rendered Player:

- default, light, dark, system, and deliberately forced schemes;
- rest, hover, focus-visible, pressed, selected, disabled, loading, success,
  warning, error, and empty states;
- foreground/background contrast after alpha compositing;
- links, focus indicators, code, tables, diagrams, and data marks;
- information conveyed by color with color removed or altered;
- sRGB baseline and any wider-gamut enhancement;
- forced colors, higher-contrast preferences, print, and transparency changes;
- selector and token leakage into other Sources, components, or Player chrome;
  and
- plain-Markdown readability without the authored palette.

Use `styling-and-theming.md` for the implemented PathMX theme, scope, color-mode,
and cascade contracts. Use the repository's accessibility target and pinned
PathMX version as the final authority.
