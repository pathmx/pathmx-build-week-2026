# Lab display components

Reusable, quiet display primitives for lab results. They inherit the active
PathMX color tokens, use no shadows, and collapse cleanly on narrow surfaces.

---

<!--
componentName: lab-stats
-->

# Lab stats

Groups related `<lab-stat>` elements into a responsive two-column region.

Props:

- `label`: accessible name for the group (default “Key results”).

```html
<section class="lab-stats" aria-label="{{ label: Key results }}">
  <yield />
</section>
```

```css
:self {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(0.75rem, 2cqi, 1rem);
  margin-block: clamp(1.25rem, 3cqi, 1.75rem);
}

:self > * {
  min-inline-size: 0;
}

@container pathmx-runtime (max-width: 42rem) {
  :self {
    grid-template-columns: 1fr;
  }
}
```

---

<!--
componentName: lab-stat
-->

# Lab stat

Presents one result as a value, label, and optional detail. The definition
keeps a description list so the relationship survives without component CSS.

Props:

- `value`: the measured value.
- `label`: what was measured.
- `detail`: short context or qualifier.

Slots:

- `icon`: optional Lucide shortcode (decorative). Prefer `:lucide-name:` in
  the slot body; shortcodes are ignored in HTML attributes, so do not pass the
  icon through a prop.

```html
<div class="lab-stat">
  <span class="lab-stat__icon"><slot name="icon" /></span>
  <dl class="lab-stat__metrics">
    <dt>{{ label: Result }}</dt>
    <dd class="lab-stat__value">{{ value: — }}</dd>
    <dd class="lab-stat__detail">{{ detail }}</dd>
  </dl>
</div>
```

```css
:self {
  display: grid;
  grid-template-rows: auto 1fr;
  align-content: start;
  gap: 0.7rem;
  min-block-size: 7.5rem;
  margin: 0;
  padding: clamp(1rem, 2.5cqi, 1.35rem);
  border: 1px solid color-mix(in oklch, var(--pmx-color-border) 72%, transparent);
  border-radius: max(var(--pmx-shape-radius, 0.75rem), 1rem);
  background:
    linear-gradient(
      165deg,
      color-mix(in oklch, var(--pmx-color-accent) 8%, var(--pmx-color-surface)),
      var(--pmx-color-surface) 46%
    );
  box-shadow: none;
}

.lab-stat__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  inline-size: 2.15rem;
  block-size: 2.15rem;
  border-radius: 0.65rem;
  background: color-mix(in oklch, var(--pmx-color-accent) 14%, transparent);
  color: var(--pmx-color-accent);
  font-size: 1.1rem;
  line-height: 1;
}

.lab-stat__icon:empty {
  display: none;
}

.lab-stat__metrics {
  display: grid;
  grid-template-rows: auto auto 1fr;
  align-content: start;
  gap: 0.28rem;
  margin: 0;
}

.lab-stat__metrics dt {
  order: 2;
  margin: 0;
  color: var(--pmx-color-fg);
  font-family: var(--pmx-font-body);
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.01em;
  text-transform: none;
}

.lab-stat__metrics dd {
  margin: 0;
}

.lab-stat__value {
  order: 1;
  color: var(--pmx-color-accent);
  font-family: var(--pmx-font-heading);
  font-size: clamp(2rem, 5cqi, 3rem);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  line-height: 1;
  letter-spacing: -0.045em;
}

.lab-stat__detail {
  order: 3;
  color: var(--pmx-color-muted);
  font-size: 0.88rem;
  line-height: 1.4;
}

@media (forced-colors: active) {
  :self {
    border-color: CanvasText;
  }

  .lab-stat__icon {
    background: Canvas;
    color: CanvasText;
    border: 1px solid CanvasText;
  }
}
```
