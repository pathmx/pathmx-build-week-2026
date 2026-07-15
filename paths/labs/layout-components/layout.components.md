# Layout Components

Small layout primitives for composing demos and other literate components. These components
own only spatial behavior: spacing, alignment, tracks, and neutral wrapping.
They avoid utility-class coupling so demos can use them without depending on a
particular CSS toolchain.

Design review notes from the first-pass components:

- Keep the authoring API small and predictable.
- Preserve existing tag names: `<box>`, `<hstack>`, `<vstack>`, `<zstack>`,
  `<grid>`, and `<center>`.
- Use scoped CSS and data attributes instead of Tailwind utility strings.
- Make `min-inline-size: 0` and margin cleanup part of every primitive, because
  composed widgets should not accidentally overflow their grid/flex cell.
- Do not make these primitives visually opinionated. `box` has optional neutral
  framing, but it should not become the project card component.

---

# Box

Neutral wrapper for content. Use it when a composition needs padding, optional
surface color, radius, or a subtle border without adopting a full card style.

Props:

- `padding`: spacing step, defaults to `4`
- `tone`: `plain`, `surface`, or `accent`
- `border`: `none` or `subtle`
- `rounded`: `none`, `sm`, `md`, `lg`, or `full`

## HTML

```html
<div
  class="layout-box"
  data-tone="{{ tone: plain }}"
  data-border="{{ border: none }}"
  data-rounded="{{ rounded: md }}"
  style="--layout-padding: {{ padding: 4 }}"
>
  <yield />
</div>
```

## CSS

```css
:self {
  display: block;
  min-inline-size: 0;
  padding: calc(var(--layout-padding, 4) * 0.25rem);
  border: 1px solid transparent;
  border-radius: 0.75rem;
  background: transparent;
}

:self[data-tone="surface"] {
  background: var(--pmx-color-surface);
}

:self[data-tone="accent"] {
  background: color-mix(in oklch, var(--pmx-color-accent) 12%, var(--pmx-color-surface));
}

:self[data-border="subtle"] {
  border-color: color-mix(in oklch, var(--pmx-color-border) 72%, transparent);
}

:self[data-rounded="none"] {
  border-radius: 0;
}

:self[data-rounded="sm"] {
  border-radius: 0.35rem;
}

:self[data-rounded="lg"] {
  border-radius: 1rem;
}

:self[data-rounded="full"] {
  border-radius: 999px;
}

:self > * {
  margin-block: 0;
}

:self > * + * {
  margin-block-start: var(--pmx-block-gap, 1rem);
}

:self img {
  display: block;
  inline-size: 100%;
  block-size: auto;
  object-fit: contain;
}
```

---

# HStack

Responsive horizontal stack. It starts as a vertical stack on narrow screens and
switches to a row at the medium breakpoint by default.

Props:

- `gap`: spacing step, defaults to `4`
- `align`: `start`, `center`, `end`, `stretch`, or `baseline`
- `justify`: `start`, `center`, `end`, or `between`
- `collapse`: `md` or `never`

## HTML

```html
<div
  class="layout-hstack"
  data-align="{{ align: center }}"
  data-justify="{{ justify: start }}"
  data-collapse="{{ collapse: md }}"
  style="--layout-gap: {{ gap: 4 }}"
>
  <yield />
</div>
```

## CSS

```css
:self {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  gap: calc(var(--layout-gap, 4) * 0.25rem);
  min-inline-size: 0;
}

@container pathmx-runtime (min-width: 48rem) {
  :self:not([data-collapse="never"]) {
    flex-direction: row;
    align-items: center;
  }
}

:self[data-collapse="never"] {
  flex-direction: row;
}

:self[data-align="start"] {
  align-items: flex-start;
}

:self[data-align="center"] {
  align-items: center;
}

:self[data-align="end"] {
  align-items: flex-end;
}

:self[data-align="stretch"] {
  align-items: stretch;
}

:self[data-align="baseline"] {
  align-items: baseline;
}

:self[data-justify="center"] {
  justify-content: center;
}

:self[data-justify="end"] {
  justify-content: flex-end;
}

:self[data-justify="between"] {
  justify-content: space-between;
}

:self > * {
  min-inline-size: 0;
  margin: 0;
}
```

---

# VStack

Vertical stack with controlled spacing and alignment.

Props:

- `gap`: spacing step, defaults to `4`
- `align`: `start`, `center`, `end`, or `stretch`
- `justify`: `start`, `center`, `end`, or `between`

## HTML

```html
<div
  class="layout-vstack"
  data-align="{{ align: center }}"
  data-justify="{{ justify: start }}"
  style="--layout-gap: {{ gap: 4 }}"
>
  <yield />
</div>
```

## CSS

```css
:self {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: calc(var(--layout-gap, 4) * 0.25rem);
  min-inline-size: 0;
}

:self[data-align="start"] {
  align-items: flex-start;
}

:self[data-align="end"] {
  align-items: flex-end;
}

:self[data-align="stretch"] {
  align-items: stretch;
}

:self[data-justify="center"] {
  justify-content: center;
}

:self[data-justify="end"] {
  justify-content: flex-end;
}

:self[data-justify="between"] {
  justify-content: space-between;
}

:self > * {
  min-inline-size: 0;
  margin: 0;
}
```

---

# ZStack

Layered stack. Children occupy the same grid cell, with later children painted
above earlier children.

Props:

- `align`: `start`, `center`, `end`, or `stretch`

## HTML

```html
<div class="layout-zstack" data-align="{{ align: center }}">
  <yield />
</div>
```

## CSS

```css
:self {
  display: grid;
  place-items: center;
  min-inline-size: 0;
}

:self[data-align="start"] {
  place-items: start;
}

:self[data-align="end"] {
  place-items: end;
}

:self[data-align="stretch"] {
  place-items: stretch;
}

:self > * {
  grid-area: 1 / 1;
  min-inline-size: 0;
  margin: 0;
}
```

---

# Grid

Responsive grid for repeated content. It starts as one column, then uses fixed
column count or auto-fit tracks from the medium breakpoint.

Props:

- `cols`: fixed column count, defaults to `1`
- `gap`: spacing step, defaults to `4`
- `fit`: `fixed` or `auto`
- `min`: minimum auto-fit track size, defaults to `14rem`
- `align`: `stretch`, `start`, `center`, or `end`

## HTML

```html
<div
  class="layout-grid"
  data-fit="{{ fit: fixed }}"
  data-align="{{ align: stretch }}"
  style="--layout-cols: {{ cols: 1 }}; --layout-gap: {{ gap: 4 }}; --layout-min: {{ min: 14rem }}"
>
  <yield />
</div>
```

## CSS

```css
:self {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: stretch;
  gap: calc(var(--layout-gap, 4) * 0.25rem);
  min-inline-size: 0;
}

@container pathmx-runtime (min-width: 48rem) {
  :self {
    grid-template-columns: repeat(var(--layout-cols, 1), minmax(0, 1fr));
  }

  :self[data-fit="auto"] {
    grid-template-columns: repeat(auto-fit, minmax(min(var(--layout-min, 14rem), 100%), 1fr));
  }
}

:self[data-align="start"] {
  align-items: start;
}

:self[data-align="center"] {
  align-items: center;
}

:self[data-align="end"] {
  align-items: end;
}

:self > * {
  min-inline-size: 0;
  margin: 0;
}
```

---

# Center

Centers children on both axes.

Props:

- `align`: `center`, `start`, `end`, or `stretch`
- `min`: optional minimum block size, defaults to `auto`

## HTML

```html
<div
  class="layout-center"
  data-align="{{ align: center }}"
  style="--layout-min-block: {{ min: auto }}"
>
  <yield />
</div>
```

## CSS

```css
:self {
  display: grid;
  place-items: center;
  min-block-size: var(--layout-min-block, auto);
  min-inline-size: 0;
}

:self[data-align="start"] {
  place-items: start;
}

:self[data-align="end"] {
  place-items: end;
}

:self[data-align="stretch"] {
  place-items: stretch;
}

:self > * {
  min-inline-size: 0;
  margin: 0;
}
```

---

**Example**

Compose the small layout primitives around ordinary markdown content:

```html
<grid cols="3" gap="4">
  <box padding="4" rounded="lg" border="subtle" tone="surface">
    <vstack align="start" gap="2">
      <strong>One</strong>

      A compact vertical stack.
    </vstack>
  </box>
  <box padding="4" rounded="lg" border="subtle" tone="surface">
    <center min="8rem">
      <strong>Centered</strong>
    </center>
  </box>
  <box padding="4" rounded="lg" border="subtle" tone="surface">
    <hstack gap="3" justify="between">
      <span>Left</span>
      <span>Right</span>
    </hstack>
  </box>
</grid>
```

**Result**

<grid cols="3" gap="4">
  <box padding="4" rounded="lg" border="subtle" tone="surface">
    <vstack align="start" gap="2">
      <strong>One</strong>

      A compact vertical stack.
    </vstack>
  </box>
  <box padding="4" rounded="lg" border="subtle" tone="surface">
    <center min="8rem">
      <strong>Centered</strong>
    </center>
  </box>
  <box padding="4" rounded="lg" border="subtle" tone="surface">
    <hstack gap="3" justify="between">
      <span>Left</span>
      <span>Right</span>
    </hstack>
  </box>
</grid>
