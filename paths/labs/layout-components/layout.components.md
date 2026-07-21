# Layout Components

Small layout primitives for composing demos and other literate components. These components
own only spatial behavior: spacing, alignment, tracks, and neutral wrapping.
They avoid utility-class coupling so demos can use them without depending on a
particular CSS toolchain.

Design review notes from the first-pass components:

- Keep the authoring API small and predictable.
- Preserve existing tag names: `<box>`, `<hstack>`, `<vstack>`, `<zstack>`,
  `<grid>`, `<center>`, `<project-feature>`, and `<team-member>`.
- Use scoped CSS and data attributes instead of Tailwind utility strings.
- Make `min-inline-size: 0` and margin cleanup part of every primitive, because
  composed widgets should not accidentally overflow their grid/flex cell.
- Keep the spatial primitives visually quiet. `box` has optional neutral
  framing, but project cards belong on `<project-feature>`.

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
  background: color-mix(
    in oklch,
    var(--pmx-color-accent) 12%,
    var(--pmx-color-surface)
  );
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
    grid-template-columns: repeat(
      auto-fit,
      minmax(min(var(--layout-min, 14rem), 100%), 1fr)
    );
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

# Project Feature

Opinionated feature card for hub pages and featured-work grids. Use it when a
composition needs a linked project teaser with a label, title, short summary,
and clear call to action. Keep spatial arrangement on `<grid>` or the stacks;
this tag owns the card chrome.

Props:

- `title`: feature heading, defaults to `Project feature`
- `label`: small eyebrow above the title, defaults to `Feature`
- `href`: destination URL or Source path, defaults to `#`
- `cta`: footer action text, defaults to `Explore`

Slots:

- `icon`: optional Lucide shortcode (decorative). Prefer
  `:lucide-name:` in the slot body; shortcodes are ignored in HTML
  attributes, so do not pass the icon through a prop.

## HTML

```html
<a
  class="project-feature"
  href="{{ href: # }}"
  aria-label="{{ title: Project feature }}"
>
  <span class="project-feature-icon"><slot name="icon" /></span>
  <p class="project-feature-label">{{ label: Feature }}</p>
  <h3 class="project-feature-title">{{ title: Project feature }}</h3>
  <div class="project-feature-body">
    <slot />
  </div>
  <span class="project-feature-cta">{{ cta: Explore }}</span>
</a>
```

## CSS

```css
:self {
  display: grid;
  align-content: start;
  gap: 0.95rem;
  min-inline-size: 0;
  min-block-size: 100%;
  padding: clamp(1.2rem, 2.6cqi, 1.5rem);
  border: 1px solid color-mix(in oklch, var(--pmx-color-border) 78%, transparent);
  border-radius: 1rem;
  background:
    linear-gradient(
      160deg,
      color-mix(in oklch, var(--pmx-color-accent) 10%, var(--pmx-color-surface)),
      var(--pmx-color-surface) 42%
    );
  color: inherit;
  text-decoration: none;
  box-shadow: 0 0.85rem 1.8rem color-mix(in oklch, var(--pmx-color-fg) 8%, transparent);
  transition:
    border-color 160ms ease,
    box-shadow 160ms ease;
}

:self:hover,
:self:focus-visible {
  border-color: color-mix(in oklch, var(--pmx-color-accent) 42%, var(--pmx-color-border));
  box-shadow:
    0 0 0 1px color-mix(in oklch, var(--pmx-color-accent) 28%, transparent),
    0 1rem 2rem color-mix(in oklch, var(--pmx-color-accent) 14%, transparent);
  outline: none;
}

:self:focus-visible {
  outline: 2px solid var(--pmx-color-focus);
  outline-offset: 2px;
}

.project-feature-label,
.project-feature-title,
.project-feature-body,
.project-feature-body > *,
.project-feature-cta {
  margin: 0;
}

.project-feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  inline-size: 2.4rem;
  block-size: 2.4rem;
  border-radius: 0.7rem;
  background: color-mix(in oklch, var(--pmx-color-accent) 14%, transparent);
  color: var(--pmx-color-accent);
  font-size: 1.25rem;
  line-height: 1;
}

.project-feature-icon:empty {
  display: none;
}

/* Workaround: named slot assignments currently also land in the default
   slot body. Tracked in pathmx inbox
   2026-07-21-literate-named-slot-default-leak.issue.md */
.project-feature-body > slot[name="icon"] {
  display: none;
}

.project-feature-label {
  color: color-mix(in oklch, var(--pmx-color-accent) 72%, var(--pmx-color-fg));
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  line-height: 1.2;
  text-transform: uppercase;
}

.project-feature-title {
  max-inline-size: 16ch;
  color: var(--pmx-color-fg);
  font-size: clamp(1.15rem, 2.2cqi, 1.35rem);
  font-weight: 720;
  letter-spacing: -0.03em;
  line-height: 1.2;
  text-wrap: balance;
}

.project-feature-body {
  color: var(--pmx-color-muted);
  font-size: 0.95rem;
  line-height: 1.5;
}

.project-feature-body > * + * {
  margin-block-start: 0.55rem;
}

.project-feature-cta {
  justify-self: start;
  margin-block-start: 0.35rem;
  color: var(--pmx-color-link);
  font-size: 0.92rem;
  font-weight: 650;
}

.project-feature-cta::after {
  content: " →";
}
```

---

# Team Member

Bio card for hub team grids. Supports a short role line, yielded bio copy, and
an avatar region that can hold initials now and a photo later.

Props:

- `name`: display name, defaults to `Teammate`
- `role`: short role or contribution line, defaults to `Contributor`
- `initials`: fallback avatar text when the avatar slot is empty, defaults to `?`

Slots:

- `avatar`: optional photo or custom mark. Prefer an `<img>` here when a
  portrait is ready; otherwise the `initials` prop fills the circle.
- default: bio / contribution summary

## HTML

```html
<article class="team-member" aria-label="{{ name: Teammate }}">
  <div class="team-member-avatar" aria-hidden="true">
    <span class="team-member-initials">{{ initials: TM }}</span>
    <slot name="avatar" />
  </div>
  <div class="team-member-copy">
    <h3 class="team-member-name">{{ name: Teammate }}</h3>
    <p class="team-member-role">{{ role: Contributor }}</p>
    <div class="team-member-bio">
      <slot />
    </div>
  </div>
</article>
```

## CSS

```css
:self {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 0.95rem 1rem;
  align-items: start;
  min-inline-size: 0;
  min-block-size: 100%;
  padding: clamp(1.05rem, 2.2cqi, 1.3rem);
  border: 1px solid color-mix(in oklch, var(--pmx-color-border) 78%, transparent);
  border-radius: 1rem;
  background: var(--pmx-color-surface);
  box-shadow: 0 0.75rem 1.6rem color-mix(in oklch, var(--pmx-color-fg) 7%, transparent);
}

.team-member-avatar {
  position: relative;
  display: grid;
  place-items: center;
  inline-size: 3.4rem;
  block-size: 3.4rem;
  overflow: hidden;
  border: 1px solid color-mix(in oklch, var(--pmx-color-border) 70%, transparent);
  border-radius: 999px;
  background: color-mix(in oklch, var(--pmx-color-accent) 14%, var(--pmx-color-surface));
  color: var(--pmx-color-accent);
  font-size: 0.92rem;
  font-weight: 780;
  letter-spacing: 0.04em;
  line-height: 1;
  text-transform: uppercase;
}

.team-member-initials {
  grid-area: 1 / 1;
}

.team-member-avatar img,
.team-member-avatar .pmx-icon {
  grid-area: 1 / 1;
  inline-size: 100%;
  block-size: 100%;
  object-fit: cover;
}

.team-member-avatar:has(img) {
  background: var(--pmx-color-surface);
  color: transparent;
}

.team-member-avatar:has(img) .team-member-initials {
  display: none;
}

.team-member-copy {
  display: grid;
  gap: 0.35rem;
  min-inline-size: 0;
}

.team-member-name,
.team-member-role,
.team-member-bio,
.team-member-bio > * {
  margin: 0;
}

.team-member-name {
  color: var(--pmx-color-fg);
  font-size: 1.08rem;
  font-weight: 720;
  letter-spacing: -0.02em;
  line-height: 1.25;
}

.team-member-role {
  color: color-mix(in oklch, var(--pmx-color-accent) 72%, var(--pmx-color-fg));
  font-size: 0.78rem;
  font-weight: 750;
  letter-spacing: 0.02em;
  line-height: 1.3;
  text-transform: uppercase;
}

.team-member-bio {
  color: var(--pmx-color-muted);
  font-size: 0.94rem;
  line-height: 1.5;
}

.team-member-bio > * + * {
  margin-block-start: 0.5rem;
}

/* Workaround: named slot assignments currently also land in the default
   slot body. Tracked in pathmx inbox
   2026-07-21-literate-named-slot-default-leak.issue.md */
.team-member-bio > slot[name="avatar"] {
  display: none;
}

@container pathmx-runtime (max-width: 28rem) {
  :self {
    grid-template-columns: minmax(0, 1fr);
    justify-items: start;
  }
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

Featured project teasers use the dedicated card:

```html
<grid cols="3" gap="4">
  <project-feature
    title="Project feature one"
    label="TBD"
    href="#"
    cta="Coming soon"
  >
    <slot name="icon">:lucide-orbit:</slot>
    Placeholder summary for the first featured project.
  </project-feature>
  <project-feature
    title="Project feature two"
    label="TBD"
    href="#"
    cta="Coming soon"
  >
    <slot name="icon">:lucide-swords:</slot>
    Placeholder summary for the second featured project.
  </project-feature>
  <project-feature
    title="Project feature three"
    label="TBD"
    href="#"
    cta="Coming soon"
  >
    <slot name="icon">:lucide-sparkles:</slot>
    Placeholder summary for the third featured project.
  </project-feature>
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

<grid cols="3" gap="4">
  <project-feature
    title="Project feature one"
    label="TBD"
    href="#"
    cta="Coming soon"
  >
    <slot name="icon">:lucide-orbit:</slot>
    Placeholder summary for the first featured project.
  </project-feature>
  <project-feature
    title="Project feature two"
    label="TBD"
    href="#"
    cta="Coming soon"
  >
    <slot name="icon">:lucide-swords:</slot>
    Placeholder summary for the second featured project.
  </project-feature>
  <project-feature
    title="Project feature three"
    label="TBD"
    href="#"
    cta="Coming soon"
  >
    <slot name="icon">:lucide-sparkles:</slot>
    Placeholder summary for the third featured project.
  </project-feature>
</grid>
