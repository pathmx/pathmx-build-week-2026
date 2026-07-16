# PathMX Styling And Theming

Use the narrowest styling layer that owns the visual decision. Preserve the
runtime's readable, accessible defaults and keep document styles separate from
Player chrome.

## Contents

- [Choose A Layer](#choose-a-layer)
- [Attach Authored CSS](#attach-authored-css)
- [Scope Selectors Explicitly](#scope-selectors-explicitly)
- [Set Theme Tokens And Color Modes](#set-theme-tokens-and-color-modes)
- [Load And Select Fonts](#load-and-select-fonts)
- [Respect The Cascade And Boundaries](#respect-the-cascade-and-boundaries)
- [Verify Styling Work](#verify-styling-work)

## Choose A Layer

| Need | Use |
| --- | --- |
| Change PathMX color, typography, prose, or code tokens | `theme` frontmatter |
| Style content associated with one Block | `[@styles]` in that Block |
| Style every Source in one root bundle | `[@root.styles]` in the active root Source |
| Style one Literate Component's internals | component CSS and `:self` |
| Extend print presentation | `[@styles.print]` or `[@root.styles.print]` |
| Style Player controls or other host UI | the host's own scoped stylesheet |

Most Sources need no theme configuration. Prefer tokens for ordinary visual
system changes and authored CSS for selectors, layout, or behavior tokens that
the theme contract does not express.

## Attach Authored CSS

Attach local CSS with Markdown reference definitions:

```md
[@styles]: ./source.css
[@styles.print]: ./print.css
[@root.styles]: ./bundle.css
[@root.styles.screen]: ./bundle-screen.css
```

`[@styles]` is Block-scoped. Its stylesheet applies to the rendered Source that
contains the declaring Block and follows that Block through includes or other
Block composition.

`[@root.styles]` is valid only in the active root Source and applies to every
rendered Source in that root bundle. A root-style directive in a non-root
Source warns and is ignored.

Use suffixes to register multiple stylesheets. Only `print` and `screen` add
media behavior; other suffixes are names for distinct runtime contributions.
The implemented directive is plural `[@styles]`; `[@style]` is an ordinary
Markdown reference.

Targets must be local `.css` files. External URLs, non-CSS targets, and missing
files are build errors. Write standards-native CSS; modern nesting, container
queries, and `@scope` do not require a preprocessor.

PathMX emits content-hashed CSS artifacts. In a live view, changed authored CSS
can be swapped without a full page reload.

## Scope Selectors Explicitly

Directive scope controls which rendered documents receive a stylesheet. It
does not rewrite or isolate the stylesheet's selectors. Scope selectors when a
rule must not match other PathMX content:

```css
@scope (.pmx-document[data-pathmx-source="demos/example.demo"]) {
  :scope {
    --example-accent: oklch(0.72 0.18 250);
  }

  :scope > .pmx-block {
    border-block-start: 1px solid var(--pmx-color-border);
  }

  a:hover {
    color: var(--example-accent);
  }
}
```

Use stable runtime hooks such as `.pmx-document`, `.pmx-block`, the emitted
`data-pathmx-source` value, or a component/root attribute. Do not depend on
Player chrome structure to style document content.

For component-local CSS, use the `:self` contract and the
`pathmx-runtime` container described in `literate-components.md`; do not copy
document-specific selectors into a reusable component definition.

## Set Theme Tokens And Color Modes

Set named token groups in frontmatter:

```yaml
---
theme:
  color:
    accent: oklch(0.58 0.18 250)
  measure: 72ch
  prose:
    size: 1rem
    leading: 1.65
    flow: 1em
  shape:
    radius: 0.5rem
  code:
    bg: oklch(0.96 0 0)
  dark:
    color:
      bg: oklch(0.18 0 0)
---
```

PathMX maps these values to public `--pmx-*` variables consumed by runtime
CSS. `measure` controls document width; `prose.size`, `prose.leading`, and
`prose.flow` control typography and vertical rhythm. A frontmatter theme
applies only to that Source's mounted document. Navigating to another Source
selects its own theme or the Runtime defaults. Use `[@root.styles]` when token
overrides should deliberately span a root bundle.

By default, themes follow the runtime or Player scheme and the user's system
preference. Put mode-specific tokens under `light:` and `dark:`. Lock a Source
only when it intentionally represents a fixed visual environment:

```yaml
theme:
  forceColorScheme: dark
  color:
    bg: oklch(0.08 0.02 250)
    fg: oklch(0.94 0.01 250)
```

PathMX does not currently ship a theme preset registry. Do not use
`theme: graphite` or `theme.preset`; they warn and are ignored.

Use `color-and-contrast.md` when selecting or converting colors, shaping light
and dark compositions, checking gamut, or verifying rendered contrast pairs.
Keep this reference authoritative for the implemented theme shape.

## Load And Select Fonts

Declare hosted stylesheets with `href` or local font faces with `src`:

```yaml
---
fonts:
  hosted-mono:
    href: https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap
  inter:
    family: Inter
    src: ./fonts/InterVariable.woff2
    weight: "100 900"
    display: swap
theme:
  font:
    body: '"Inter", var(--pmx-font-body)'
    mono: '"Geist Mono", var(--pmx-font-mono)'
---
```

Hosted font entries require an `https:` stylesheet URL. Local entries are
copied to content-hashed font artifacts and registered through generated
`@font-face` CSS.

`fonts` loads or defines faces; it does not select them for content. Select
faces with `theme.font.body`, `theme.font.heading`, and `theme.font.mono`, and
include a PathMX fallback token.

Use `typography.md` for hierarchy, measure, wrapping, changing values, font
behavior, language direction, and rendered typography review. Keep this
reference authoritative for the implemented `fonts` and theme contracts.

## Respect The Cascade And Boundaries

PathMX's effective order is:

1. runtime reset, prose, code, accessibility, and print defaults;
2. theme token overrides;
3. optional additive Tailwind styles;
4. authored source and root styles;
5. Literate Component CSS.

Do not assume Tailwind, Tailwind Preflight, or a `.prose` wrapper exists. Let
component CSS own component internals while inheriting `--pmx-*` tokens.

The runtime view uses `.pmx-page`, `.pmx-document`, `.pmx-block`, `.pmx-prose`,
and `.pmx-code-block`. `.pmx-block` is the scene/focus boundary; `.pmx-prose`
owns ordinary Markdown typography. Literate Components receive
`data-pathmx-prose="off"` automatically so baseline prose selectors do not
style their internal UI. Authors can use the same attribute on custom nested
interfaces. Player chrome and other augmented interfaces are separate surfaces
and should keep their own scope.

The runtime already provides print, focus, forced-colors, reduced-motion, and
readability defaults. Extend those defaults narrowly instead of replacing
them wholesale.

## Verify Styling Work

Review the rendered result, not only the CSS source. Check the applicable set:

- default, light, dark, system, and deliberately forced color schemes;
- source-local themes and deliberate root-style token overrides;
- included Blocks and the Sources that receive their Block-scoped styles;
- wide and narrow layouts, including `pathmx-runtime` container behavior;
- print output for print-specific work;
- actual foreground/background pairs across interactive states and color modes;
- hierarchy, measure, wrapping, font fallback, zoom, and text-spacing changes;
- keyboard focus, forced colors, reduced motion, and readable code;
- live CSS refresh after editing an imported file;
- selector leakage into other documents, components, or host UI; and
- build diagnostics for missing assets, invalid directives, or unsupported
  theme shapes.

Use the repository's enabled plugins, pinned PathMX version, and local examples
as the final authority when a styling capability is version-sensitive.
