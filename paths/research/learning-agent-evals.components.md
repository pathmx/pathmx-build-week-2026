# Learning agent eval components

Quiet, reusable figures for the learning-agent evaluation report. The chart
components expose every value as text and use CSS only for the redundant visual
encoding.

---

<!--
componentName: eval-bars
-->

# Eval bars

```html
<figure class="eval-bars">
  <div class="eval-bars__plot" role="group" aria-label="{{ label: Comparison chart }}">
    <yield />
  </div>
  <figcaption>{{ caption }}</figcaption>
</figure>
```

```css
:self {
  display: grid;
  gap: 0.85rem;
  margin-block: 1.5rem 2rem;
  padding-block: 1rem;
  border-block: 1px solid var(--pmx-color-border);
}

.eval-bars__plot {
  display: grid;
  gap: 0.85rem;
}

:self figcaption {
  color: var(--pmx-color-muted);
  font-size: 0.9rem;
  line-height: 1.5;
}
```

---

<!--
componentName: eval-bar
-->

# Eval bar

Props:

- `label`: condition or scenario.
- `value`: displayed measurement.
- `percent`: width on a 0–100 comparison scale.
- `detail`: optional experimental qualifier.

```html
<div class="eval-bar" role="img" aria-label="{{ label }}: {{ value }}. {{ detail }}">
  <div class="eval-bar__label">
    <span>{{ label }}</span>
    <strong>{{ value }}</strong>
  </div>
  <div class="eval-bar__track" aria-hidden="true">
    <span style="inline-size: {{ percent: 0 }}%"></span>
  </div>
  <small>{{ detail }}</small>
</div>
```

```css
:self {
  display: grid;
  gap: 0.32rem;
}

.eval-bar__label {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.95rem;
}

.eval-bar__label strong {
  font-family: var(--pmx-font-mono, ui-monospace, monospace);
  font-variant-numeric: tabular-nums;
  font-size: 0.9rem;
}

.eval-bar__track {
  overflow: hidden;
  block-size: 0.52rem;
  border: 1px solid var(--pmx-color-border);
  border-radius: 999px;
  background: var(--pmx-color-surface);
}

.eval-bar__track > span {
  display: block;
  block-size: 100%;
  max-inline-size: 100%;
  border-radius: inherit;
  background: var(--pmx-color-accent);
}

:self small {
  color: var(--pmx-color-muted);
  font-size: 0.8rem;
  line-height: 1.4;
}

@media (forced-colors: active) {
  .eval-bar__track > span {
    background: Highlight;
  }
}
```
