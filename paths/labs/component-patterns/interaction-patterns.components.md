---
status: experimental
parseComponents: true
---

# Interaction Patterns

Three deliberately small Literate Component patterns for Build Week lab work:
Player-visible ordered state, data-driven local interaction, and
lifecycle-managed asynchronous activity. Each definition owns one component
instance and uses only the implemented PathMX component contract.

---

<!--
componentName: model-stepper
-->

# Model Stepper

Use `<model-stepper>` when an interaction has meaningful stages that should be
addressable in Play. The usage declares an ordered `states` domain and provides
one child with `data-model-panel` for each state.

## HTML

```html
<section class="model-stepper" aria-label="{{ label: Model steps }}">
  <header class="model-stepper__header">
    <p>{{ eyebrow: Inspect a model }}</p>
    <h3>{{ title: Work through the evidence }}</h3>
  </header>
  <div class="model-stepper__controls" data-model-controls role="toolbar"></div>
  <div class="model-stepper__panels" aria-live="polite">
    <yield />
  </div>
</section>
```

## CSS

```css
:self {
  display: grid;
  gap: 0.9rem;
  inline-size: min(100%, 48rem);
  margin-inline: auto;
  border: 1px solid var(--pmx-color-border, #d5dbe3);
  border-radius: 0.8rem;
  background: var(--pmx-color-surface, #ffffff);
  padding: clamp(1rem, 3vw, 1.4rem);
}

.model-stepper__header {
  display: grid;
  gap: 0.25rem;
}

.model-stepper__header p,
.model-stepper__header h3 {
  margin: 0;
}

.model-stepper__header p {
  color: var(--pmx-color-muted, #667085);
  font-size: 0.75rem;
  font-weight: 750;
  text-transform: uppercase;
}

.model-stepper__controls {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.model-stepper__controls button {
  min-block-size: 2.4rem;
  border: 1px solid var(--pmx-color-border, #d5dbe3);
  border-radius: 999px;
  background: var(--pmx-color-bg, #ffffff);
  color: var(--pmx-color-fg, #172033);
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  padding-inline: 0.85rem;
}

.model-stepper__controls button[aria-pressed="true"] {
  border-color: var(--pmx-color-accent, #2563eb);
  background: var(--pmx-color-accent, #2563eb);
  color: var(--pmx-color-bg, #ffffff);
}

.model-stepper__controls button:focus-visible {
  outline: 2px solid var(--pmx-color-focus, #2563eb);
  outline-offset: 2px;
}

.model-stepper__panels [data-model-panel] {
  margin: 0;
}

.model-stepper__panels [data-model-panel][hidden] {
  display: none;
}

@dark {
  :self {
    background: color-mix(
      in oklch,
      var(--pmx-color-surface) 92%,
      var(--pmx-color-bg)
    );
  }
}
```

## JavaScript

```js
const controls = $("[data-model-controls]")
const panels = $$('[data-model-panel]')
const names = (el.getAttribute("data-pathmx-states") || "")
  .split("|")
  .map(function (name) {
    return name.trim()
  })
  .filter(Boolean)

controls.replaceChildren()
names.forEach(function (name, index) {
  const button = document.createElement("button")
  button.type = "button"
  button.dataset.modelState = name
  button.textContent = `${index + 1}. ${name}`
  on(button, "click", function () {
    state.set(name)
  })
  controls.appendChild(button)
})

function sync() {
  const current = state.get()
  panels.forEach(function (panel) {
    panel.hidden = panel.dataset.modelPanel !== current
  })
  $$('[data-model-state]').forEach(function (button) {
    button.setAttribute(
      "aria-pressed",
      button.dataset.modelState === current ? "true" : "false",
    )
  })
}

state.on(sync)
sync()
```

---

<!--
componentName: outlier-studio
-->

# Outlier Studio

Use `<outlier-studio>` for a local, data-driven manipulation where browser
state is exploratory rather than durable learner evidence. The final authored
value is adjustable; the component recomputes the mean and median.

## HTML

```html
<figure class="outlier-studio" aria-label="{{ label: Outlier model }}">
  <div class="outlier-studio__plot" data-outlier-plot aria-hidden="true"></div>
  <label class="outlier-studio__control">
    <span>Final observation</span>
    <input
      data-outlier-input
      type="range"
      min="{{ min: 14 }}"
      max="{{ max: 100 }}"
      step="1"
    />
    <output data-outlier-value></output>
  </label>
  <dl class="outlier-studio__stats">
    <div><dt>Mean</dt><dd data-outlier-mean></dd></div>
    <div><dt>Median</dt><dd data-outlier-median></dd></div>
  </dl>
  <figcaption>
    Move one extreme value and compare how the two summaries respond.
  </figcaption>
</figure>
```

## CSS

```css
:self {
  display: grid;
  gap: 1rem;
  inline-size: min(100%, 50rem);
  margin-inline: auto;
  border: 1px solid var(--pmx-color-border, #d5dbe3);
  border-radius: 0.8rem;
  background: var(--pmx-color-surface, #ffffff);
  padding: clamp(1rem, 3vw, 1.4rem);
}

.outlier-studio__plot {
  display: grid;
  grid-template-columns: repeat(var(--outlier-count), minmax(1.2rem, 1fr));
  align-items: end;
  gap: clamp(0.35rem, 2vw, 0.75rem);
  min-block-size: 12rem;
  border-block-end: 1px solid var(--pmx-color-border, #d5dbe3);
}

.outlier-studio__bar {
  display: grid;
  align-items: end;
  min-block-size: 1.25rem;
  border-radius: 0.4rem 0.4rem 0 0;
  background: var(--pmx-color-accent, #2563eb);
  color: var(--pmx-color-bg, #ffffff);
  font-size: 0.75rem;
  font-weight: 750;
  padding: 0.25rem 0.1rem;
  text-align: center;
}

.outlier-studio__bar:last-child {
  background: var(--pmx-color-focus, #c2410c);
}

.outlier-studio__control {
  display: grid;
  grid-template-columns: auto minmax(8rem, 1fr) 3ch;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
}

.outlier-studio__control input {
  inline-size: 100%;
}

.outlier-studio__stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 0;
}

.outlier-studio__stats div {
  border-radius: 0.6rem;
  background: color-mix(
    in oklch,
    var(--pmx-color-accent, #2563eb) 10%,
    transparent
  );
  padding: 0.75rem;
}

.outlier-studio__stats dt {
  color: var(--pmx-color-muted, #667085);
  font-size: 0.75rem;
  font-weight: 750;
  text-transform: uppercase;
}

.outlier-studio__stats dd {
  margin: 0.2rem 0 0;
  font-size: 1.4rem;
  font-weight: 800;
}

:self figcaption {
  color: var(--pmx-color-muted, #667085);
  font-size: 0.9rem;
}

@container (max-width: 520px) {
  .outlier-studio__control {
    grid-template-columns: 1fr auto;
  }

  .outlier-studio__control input {
    grid-column: 1 / -1;
    grid-row: 2;
  }
}
```

## JavaScript

```js
const input = $("[data-outlier-input]")
const output = $("[data-outlier-value]")
const plot = $("[data-outlier-plot]")
const meanOutput = $("[data-outlier-mean]")
const medianOutput = $("[data-outlier-median]")
const authored = String(ctx.props.values || "12,13,12,14,13,60")
  .split(",")
  .map(Number)
  .filter(Number.isFinite)
const local = ctx.state(function () {
  return {
    values: authored.length >= 3 ? authored : [12, 13, 60],
  }
})

input.value = String(local.values[local.values.length - 1])

function median(values) {
  const ordered = [...values].sort(function (a, b) {
    return a - b
  })
  const middle = Math.floor(ordered.length / 2)
  return ordered.length % 2
    ? ordered[middle]
    : (ordered[middle - 1] + ordered[middle]) / 2
}

function format(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1)
}

function render() {
  const values = local.values
  const max = Math.max(...values, 1)
  plot.style.setProperty("--outlier-count", String(values.length))
  plot.replaceChildren(
    ...values.map(function (value) {
      const bar = document.createElement("span")
      bar.className = "outlier-studio__bar"
      bar.style.blockSize = `${Math.max(12, (value / max) * 100)}%`
      bar.textContent = format(value)
      return bar
    }),
  )
  const mean = values.reduce(function (total, value) {
    return total + value
  }, 0) / values.length
  output.value = format(values[values.length - 1])
  meanOutput.textContent = format(mean)
  medianOutput.textContent = format(median(values))
}

on(input, "input", function () {
  local.values[local.values.length - 1] = Number(input.value)
  render()
})

render()
```

---

<!--
componentName: sample-stream
-->

# Sample Stream

Use `<sample-stream>` as a reference for asynchronous data loading and work
that must stop while a component is offscreen or off-Beat. The bundled data is
small on purpose; the lifecycle behavior is the example.

[@data.samples]: ./sample-stream.json

## HTML

```html
<figure class="sample-stream" data-loading aria-label="{{ label: Sample stream }}">
  <header>
    <div>
      <p>{{ eyebrow: Sampling process }}</p>
      <h3>{{ title: Running mean }}</h3>
    </div>
    <button type="button" data-sample-toggle>Pause</button>
  </header>
  <div class="sample-stream__reading" aria-live="polite">
    <span>Current <strong data-sample-current>—</strong></span>
    <span>Running mean <strong data-sample-mean>—</strong></span>
  </div>
  <div class="sample-stream__track" data-sample-track aria-hidden="true"></div>
  <p data-sample-status>Loading local sample data…</p>
</figure>
```

## CSS

```css
:self {
  display: grid;
  gap: 1rem;
  inline-size: min(100%, 48rem);
  margin-inline: auto;
  border: 1px solid var(--pmx-color-border, #d5dbe3);
  border-radius: 0.8rem;
  background: var(--pmx-color-surface, #ffffff);
  padding: clamp(1rem, 3vw, 1.4rem);
}

:self > header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

:self > header p,
:self > header h3 {
  margin: 0;
}

:self > header p {
  color: var(--pmx-color-muted, #667085);
  font-size: 0.75rem;
  font-weight: 750;
  text-transform: uppercase;
}

:self button {
  min-block-size: 2.4rem;
  border: 1px solid var(--pmx-color-border, #d5dbe3);
  border-radius: 0.55rem;
  background: var(--pmx-color-bg, #ffffff);
  color: var(--pmx-color-fg, #172033);
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  padding-inline: 0.8rem;
}

.sample-stream__reading {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}

.sample-stream__reading span {
  border-radius: 0.6rem;
  background: color-mix(
    in oklch,
    var(--pmx-color-accent, #2563eb) 10%,
    transparent
  );
  padding: 0.75rem;
}

.sample-stream__reading strong {
  display: block;
  font-size: 1.4rem;
}

.sample-stream__track {
  display: grid;
  grid-template-columns: repeat(var(--sample-count), minmax(0, 1fr));
  gap: 0.35rem;
}

.sample-stream__dot {
  aspect-ratio: 1;
  border-radius: 999px;
  background: var(--pmx-color-border, #d5dbe3);
}

.sample-stream__dot[data-seen="true"] {
  background: var(--pmx-color-accent, #2563eb);
}

:self > [data-sample-status] {
  min-block-size: 1.4em;
  margin: 0;
  color: var(--pmx-color-muted, #667085);
  font-size: 0.9rem;
}
```

## JavaScript

```js
const toggle = $("[data-sample-toggle]")
const currentOutput = $("[data-sample-current]")
const meanOutput = $("[data-sample-mean]")
const track = $("[data-sample-track]")
const status = $("[data-sample-status]")
const reducedMotion =
  typeof globalThis.matchMedia === "function" &&
  globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches
const local = ctx.state(function () {
  return {
    index: 0,
    wantsRunning: !reducedMotion,
  }
})
let values = []
let timer
let presented = false
toggle.disabled = true

function stop() {
  if (timer !== undefined) clearInterval(timer)
  timer = undefined
}

function syncButton() {
  toggle.textContent = local.wantsRunning ? "Pause" : "Resume"
  toggle.setAttribute("aria-pressed", local.wantsRunning ? "false" : "true")
}

function render() {
  if (!values.length) return
  const seen = values.slice(0, local.index + 1)
  const mean = seen.reduce(function (total, value) {
    return total + value
  }, 0) / seen.length
  currentOutput.textContent = String(values[local.index])
  meanOutput.textContent = mean.toFixed(1)
  $$('[data-sample-index]').forEach(function (dot, index) {
    if (index <= local.index) dot.dataset.seen = "true"
    else dot.removeAttribute("data-seen")
  })
  status.textContent = `Observed ${seen.length} of ${values.length} samples.`
}

function advance() {
  local.index = (local.index + 1) % values.length
  render()
}

function syncTimer() {
  stop()
  if (presented && local.wantsRunning && values.length) {
    timer = setInterval(advance, 800)
  }
  syncButton()
}

on(toggle, "click", function () {
  local.wantsRunning = !local.wantsRunning
  syncTimer()
})

async function loadSamples() {
  try {
    const data = await ctx.data.samples.json()
    values = Array.isArray(data.values)
      ? data.values.map(Number).filter(Number.isFinite)
      : []
    if (!values.length) throw new Error("No numeric samples were provided.")
    track.style.setProperty("--sample-count", String(values.length))
    track.replaceChildren(
      ...values.map(function (_, index) {
        const dot = document.createElement("span")
        dot.className = "sample-stream__dot"
        dot.dataset.sampleIndex = String(index)
        return dot
      }),
    )
    toggle.disabled = false
    el.removeAttribute("data-loading")
    render()
    syncTimer()
  } catch (error) {
    local.wantsRunning = false
    status.textContent = `Sample data unavailable: ${error.message}`
    syncButton()
  }
}

ctx.effect(
  function () {
    presented = true
    syncTimer()
    return function () {
      presented = false
      stop()
    }
  },
  { when: "presented" },
)

void loadSamples()
```
