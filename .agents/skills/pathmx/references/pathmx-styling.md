---
theme:
  color:
    accent: oklch(0.62 0.16 245)
  measure: 72ch
---

# PathMX Styling

Use the narrowest layer that owns the visual choice.

| Need | Use |
| --- | --- |
| Color, type, measure, or shape tokens | `theme` frontmatter |
| CSS for one Block | `[@styles]` in that Block |
| CSS for one root graph | `[@root.styles]` in the root Source |
| CSS inside a component | Component CSS with `:self` |

## CSS imports

```md
[@styles]: ./lesson.css
[@styles.print]: ./print.css
[@root.styles]: ./course.css
```

Targets must be local CSS. `@styles` follows its Block. `@root.styles` applies
to the active root graph and is ignored with a warning outside the root.

Directive scope does not rewrite CSS selectors. Scope rules when they must not
match other documents:

```css
@scope (.pmx-document[data-pathmx-source="paths/example.lesson"]) {
  :scope {
    --lesson-accent: oklch(0.62 0.16 245);
  }
}
```

## Compose graph and Source styles

Core propagates `@root.styles` to every built Source and emits named or local
Source styles after the root stylesheet. Use three ownership layers:

1. Put readable graph defaults in one root stylesheet.
2. Let Source `theme` frontmatter own local color, type, measure, and shape.
3. Use named `@styles` imports for opt-in treatments and local CSS for
   document or Block flourishes.

Use root CSS for shared project variables and element rules:

```css
@scope (.pmx-document) {
  :scope {
    --project-code-size: 0.95em;
  }

  :where(code, th) {
    font-family: ui-monospace, monospace;
    font-size: var(--project-code-size);
  }
}
```

Local styles load after root styles and can refine them:

```md
[@styles.lab]: ./lab.css
[@styles]: ./document.css
```

Do not enumerate Source IDs to opt out of graph styles. Do not depend on
generated `data-pathmx-*` markup unless this reference documents that attribute
as an authoring contract.

Source `theme` frontmatter is independent from root CSS. Do not use a root
stylesheet to redeclare `--pmx-*` theme tokens when linked Sources also own
theme frontmatter unless the project's pinned PathMX fixture verifies the
intended cascade. Prefer Source theme frontmatter for PathMX theme tokens and
root CSS for shared structural rules.

## Theme tokens

```yaml
theme:
  color:
    bg: oklch(0.98 0.01 250)
    fg: oklch(0.22 0.03 250)
    accent: oklch(0.62 0.16 245)
  prose:
    size: 1rem
    leading: 1.65
  measure: 72ch
  shape:
    radius: 0.75rem
  dark:
    color:
      bg: oklch(0.18 0.02 250)
      fg: oklch(0.94 0.01 250)
```

PathMX maps supported values to `--pmx-*` variables. Use `light` and `dark`
branches for mode-specific values. Do not assume a named theme preset exists.

## Learner personalization

Start from a readable repository theme. Ask for a small set of preferences
instead of asking the learner to design an interface:

- visual mood, such as calm, warm, playful, editorial, or technical;
- one color direction;
- light, dark, or system preference;
- larger text, stronger contrast, reduced motion, or other access needs.

Translate confirmed answers into existing theme tokens and a few repository CSS
variables. Keep document structure, navigation, focus states, and component
behavior stable. Prefer one restrained accent and clear surfaces over many
decorative colors.

Use a readable body and heading face by default. Reserve full-mono treatments
for Sources that opt into a technical or lab style. Keep code, data, and short
technical labels monospaced without shrinking them below comfortable prose.

Do not record inferred accessibility needs or personal traits. Save only what
the learner chose.

## Fonts

Load a hosted stylesheet or local font, then select the family through theme
tokens:

```yaml
fonts:
  inter:
    family: Inter
    src: ./fonts/InterVariable.woff2
    weight: "100 900"
    display: swap
theme:
  font:
    body: '"Inter", var(--pmx-font-body)'
```

## Live proof

<div class="pathmx-styling-example">
  <strong>PathMX styling is active.</strong>
  <span>This Block imports local CSS and uses theme tokens.</span>
</div>

[@styles]: ./assets/pathmx-styling-example.css

## Review

- Check light and dark modes.
- Check narrow and wide layouts.
- Check keyboard focus, forced colors, and reduced motion.
- Check print when print styles changed.
- Check selector leakage and missing assets.
- Check an unthemed linked Source, a Source with `theme` frontmatter, and any
  opt-in stylesheet treatment when root styles changed.
- Build and review warnings.
