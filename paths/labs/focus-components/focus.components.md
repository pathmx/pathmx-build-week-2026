---
title: Focus Components
description: Literate Components for pausing, focusing, reflecting, and resetting inside a learning flow.
parseComponents: true
---

# Focus Components

These Literate Components are a first test set for the Focus Components family.
They help a learner take a deliberate beat without turning local calming or
reflection state into durable evidence.

The components share these boundaries:

- Local interaction state stays in the browser unless a surrounding stable
  PathMX Block deliberately maps a durable response Action.
- Controls use native buttons, inputs, labels, textarea, and progress elements.
- Animation is quiet, optional, and reduced-motion aware.
- No component plays audio, diagnoses the learner, or blocks forward movement.

---

<!--
componentName: focus-lens
-->

# Focus Lens

Use `<focus-lens>` before a task, exercise, or dense reading move. It turns an
author-supplied sequence of panels into ordered Player-visible states, so the
learner can traverse Notice, Narrow, and Begin as real Beats.

Props:

- `eyebrow`: small label above the component title.
- `title`: visible heading.
- `states`: ordered state names separated with `|`; each yielded panel should
  declare `data-focus-panel` with a matching name.

Failure boundary: without JavaScript, the yielded panels remain visible as
ordinary readable content.

## HTML

```html
<section
  class="focus-lens"
  states="{{ states: notice | narrow | begin }}"
  initial-state="{{ initialState: notice }}"
  aria-label="{{ label: Focus lens }}"
>
  <header class="focus-lens__header">
    <p>{{ eyebrow: Focus component }}</p>
    <h2>{{ title: Choose one useful next action }}</h2>
  </header>
  <div class="focus-lens__controls" data-focus-controls role="toolbar" aria-label="Focus stages"></div>
  <div class="focus-lens__panels" aria-live="polite">
    <yield />
  </div>
  <p class="focus-lens__status" data-focus-status></p>
</section>
```

## CSS

```css
:self {
  --focus-component-accent: var(--pmx-color-accent, #0f766e);
  --focus-component-warm: var(--pmx-color-focus, #b45309);
  display: grid;
  gap: 1rem;
  inline-size: min(100%, 50rem);
  margin-inline: auto;
  border: 1px solid var(--pmx-color-border, #d7ded9);
  border-radius: 0.5rem;
  background:
    linear-gradient(
      135deg,
      color-mix(in oklch, var(--focus-component-accent) 12%, transparent),
      transparent 42%
    ),
    var(--pmx-color-surface, #ffffff);
  padding: clamp(1rem, 3vw, 1.35rem);
}

.focus-lens__header {
  display: grid;
  gap: 0.25rem;
}

.focus-lens__header p,
.focus-lens__header h2,
.focus-lens__status {
  margin: 0;
}

.focus-lens__header p {
  color: var(--pmx-color-muted, #59665f);
  font-size: 0.76rem;
  font-weight: 750;
  letter-spacing: 0;
  text-transform: uppercase;
}

.focus-lens__header h2 {
  font-size: clamp(1.35rem, 1.2rem + 1vw, 2rem);
  line-height: 1.1;
}

.focus-lens__controls {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.focus-lens__controls button {
  min-block-size: 2.4rem;
  border: 1px solid var(--pmx-color-border, #d7ded9);
  border-radius: 0.5rem;
  background: var(--pmx-color-bg, #ffffff);
  color: var(--pmx-color-fg, #17211b);
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  padding-inline: 0.85rem;
}

.focus-lens__controls button[aria-pressed="true"] {
  border-color: color-mix(in oklch, var(--focus-component-accent) 78%, black);
  background: var(--focus-component-accent);
  color: white;
}

.focus-lens__controls button:focus-visible {
  outline: 3px solid var(--pmx-color-focus, #b45309);
  outline-offset: 2px;
}

.focus-lens__panels {
  border-inline-start: 0.35rem solid var(--focus-component-warm);
  padding-inline-start: 1rem;
}

.focus-lens__panels [data-focus-panel] {
  display: grid;
  gap: 0.45rem;
  margin: 0;
}

.focus-lens__panels [data-focus-panel][hidden] {
  display: none;
}

.focus-lens__panels h3,
.focus-lens__panels p {
  margin: 0;
}

.focus-lens__status {
  color: var(--pmx-color-muted, #59665f);
  font-size: 0.92rem;
}

@media (prefers-reduced-motion: no-preference) {
  .focus-lens__panels [data-focus-panel] {
    animation: focus-lens-panel 180ms ease-out;
  }
}

@keyframes focus-lens-panel {
  from {
    opacity: 0.72;
    transform: translateY(0.25rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@container (max-width: 34rem) {
  :self {
    padding: 1rem;
  }

  .focus-lens__controls {
    display: grid;
  }
}

@dark {
  :self {
    background:
      linear-gradient(
        135deg,
        color-mix(in oklch, var(--focus-component-accent) 18%, transparent),
        transparent 45%
      ),
      var(--pmx-color-surface, #17201b);
  }
}
```

## JavaScript

```js
const controls = $("[data-focus-controls]")
const panels = $$("[data-focus-panel]")
const status = $("[data-focus-status]")
const configuredNames = (el.getAttribute("data-pathmx-states") || "")
  .split("|")
  .map(function (name) {
    return name.trim()
  })
  .filter(Boolean)
const panelNames = panels
  .map(function (panel) {
    return panel.dataset.focusPanel
  })
  .filter(Boolean)
const names = configuredNames.length ? configuredNames : panelNames
const labels = new Map(
  panels.map(function (panel) {
    return [
      panel.dataset.focusPanel,
      panel.dataset.label ||
        panel.querySelector("h3")?.textContent?.replace(/[.:]$/, "") ||
        panel.dataset.focusPanel,
    ]
  }),
)
let focusAnimation

if (!configuredNames.length && names.length) {
  state.declare(names)
}

function currentIndex() {
  return Math.max(0, names.indexOf(state.get()))
}

function publishActions() {
  if (!names.length) return
  const index = currentIndex()
  try {
    ctx.play.actions.set([
      {
        id: "previous-focus-stage",
        label: "Previous focus stage",
        disabled: index === 0,
        run: function () {
          state.set(names[Math.max(0, currentIndex() - 1)])
        },
      },
      {
        id: "next-focus-stage",
        label: "Next focus stage",
        disabled: index === names.length - 1,
        run: function () {
          state.set(names[Math.min(names.length - 1, currentIndex() + 1)])
        },
      },
    ])
  } catch (error) {
    // Context Actions exist only in the Player shell; direct component controls still work.
  }
}

controls.replaceChildren()
names.forEach(function (name, index) {
  const button = document.createElement("button")
  button.type = "button"
  button.dataset.focusStage = name
  button.textContent = `${index + 1}. ${labels.get(name) || name}`
  button.setAttribute("aria-pressed", "false")
  on(button, "click", function () {
    state.set(name)
  })
  controls.appendChild(button)
})

function sync() {
  if (!names.length) {
    status.textContent = "Focus panels are readable without staged controls."
    return
  }
  const current = state.get()
  if (!names.includes(current)) {
    state.set(names[0])
    return
  }
  panels.forEach(function (panel) {
    panel.hidden = panel.dataset.focusPanel !== current
  })
  $$("[data-focus-stage]").forEach(function (button) {
    button.setAttribute(
      "aria-pressed",
      button.dataset.focusStage === current ? "true" : "false",
    )
  })
  status.textContent = `${currentIndex() + 1} of ${names.length}: ${labels.get(current) || current}.`
  publishActions()
}

on(el, "pathmx:beat-enter", function (event) {
  if (event.target !== el) return
  focusAnimation?.cancel()
  if (
    typeof el.animate !== "function" ||
    globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  )
    return
  focusAnimation = el.animate(
    [
      { opacity: 0.86, transform: "translateY(0.2rem)" },
      { opacity: 1, transform: "translateY(0)" },
    ],
    { duration: 180, easing: "cubic-bezier(0.23, 1, 0.32, 1)" },
  )
})

on(el, "pathmx:beat-exit", function (event) {
  if (event.target !== el) return
  focusAnimation?.cancel()
})

ctx.cleanup(function () {
  focusAnimation?.cancel()
  try {
    ctx.play.actions.clear()
  } catch (error) {
    // No Player Context Actions were published in browse mode.
  }
})

state.on(sync)
sync()
```

---

<!--
componentName: breath-pacer
-->

# Breath Pacer

Use `<breath-pacer>` for a short, opt-in regulation pause. The component has an
ordered breath-cycle state, local play/pause controls, and a timer that runs
only while the component is presented.

Props:

- `inhale`, `hold`, `exhale`, and `rest`: phase durations in seconds.
- `eyebrow` and `title`: visible labels.

Failure boundary: without JavaScript, the phase list and controls remain
visible, but timing does not run. Reduced-motion users start paused.

## HTML

```html
<section
  class="breath-pacer"
  states="{{ states: inhale | hold | exhale | rest }}"
  initial-state="{{ initialState: inhale }}"
  aria-label="{{ label: Breath pacer }}"
>
  <header class="breath-pacer__header">
    <div>
      <p>{{ eyebrow: Take a beat }}</p>
      <h2>{{ title: Four quiet breaths }}</h2>
    </div>
    <div class="breath-pacer__actions">
      <button type="button" data-breath-toggle>Pause</button>
      <button type="button" data-breath-reset>Reset</button>
    </div>
  </header>

  <div class="breath-pacer__body">
    <div class="breath-pacer__visual" aria-hidden="true">
      <span class="breath-pacer__ring" data-breath-ring></span>
      <strong data-breath-count>4</strong>
    </div>
    <div class="breath-pacer__sequence" aria-label="Breath phases">
      <button type="button" data-breath-phase="inhale">
        <span>Inhale</span>
        <output data-breath-duration="inhale">{{ inhale: 4 }}s</output>
      </button>
      <button type="button" data-breath-phase="hold">
        <span>Hold</span>
        <output data-breath-duration="hold">{{ hold: 2 }}s</output>
      </button>
      <button type="button" data-breath-phase="exhale">
        <span>Exhale</span>
        <output data-breath-duration="exhale">{{ exhale: 6 }}s</output>
      </button>
      <button type="button" data-breath-phase="rest">
        <span>Rest</span>
        <output data-breath-duration="rest">{{ rest: 2 }}s</output>
      </button>
    </div>
  </div>

  <p class="breath-pacer__status" data-breath-status aria-live="polite">
    Breath pacer ready.
  </p>
</section>
```

## CSS

```css
:self {
  --breath-accent: var(--pmx-color-accent, #0f766e);
  --breath-warm: var(--pmx-color-focus, #b45309);
  display: grid;
  gap: 1rem;
  inline-size: min(100%, 50rem);
  margin-inline: auto;
  border: 1px solid var(--pmx-color-border, #d7ded9);
  border-radius: 0.5rem;
  background: var(--pmx-color-surface, #ffffff);
  padding: clamp(1rem, 3vw, 1.35rem);
}

.breath-pacer__header {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1rem;
}

.breath-pacer__header p,
.breath-pacer__header h2,
.breath-pacer__status {
  margin: 0;
}

.breath-pacer__header p {
  color: var(--pmx-color-muted, #59665f);
  font-size: 0.76rem;
  font-weight: 750;
  letter-spacing: 0;
  text-transform: uppercase;
}

.breath-pacer__header h2 {
  font-size: clamp(1.35rem, 1.2rem + 1vw, 2rem);
  line-height: 1.1;
}

.breath-pacer__actions,
.breath-pacer__sequence {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

:self button {
  min-block-size: 2.4rem;
  border: 1px solid var(--pmx-color-border, #d7ded9);
  border-radius: 0.5rem;
  background: var(--pmx-color-bg, #ffffff);
  color: var(--pmx-color-fg, #17211b);
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  padding-inline: 0.85rem;
}

:self button:focus-visible {
  outline: 3px solid var(--pmx-color-focus, #b45309);
  outline-offset: 2px;
}

.breath-pacer__body {
  display: grid;
  grid-template-columns: minmax(10rem, 14rem) minmax(0, 1fr);
  align-items: center;
  gap: clamp(1rem, 4vw, 2rem);
}

.breath-pacer__visual {
  display: grid;
  min-block-size: 12rem;
  place-items: center;
  position: relative;
}

.breath-pacer__ring {
  position: absolute;
  inline-size: min(10rem, 80%);
  aspect-ratio: 1;
  border: 0.6rem solid color-mix(in oklch, var(--breath-accent) 78%, white);
  border-radius: 50%;
  background: color-mix(in oklch, var(--breath-accent) 12%, transparent);
  box-shadow: inset 0 0 0 0.6rem color-mix(in oklch, var(--breath-warm) 16%, transparent);
  transform: scale(0.9);
  transition:
    transform var(--breath-duration, 4s) ease-in-out,
    border-color 180ms ease-out;
}

.breath-pacer__visual strong {
  position: relative;
  font-size: clamp(2rem, 1.4rem + 3vw, 3.4rem);
  line-height: 1;
}

:self[data-breath-running="true"][data-breath-phase="inhale"] .breath-pacer__ring {
  transform: scale(1.08);
}

:self[data-breath-running="true"][data-breath-phase="hold"] .breath-pacer__ring {
  transform: scale(1.08);
}

:self[data-breath-running="true"][data-breath-phase="exhale"] .breath-pacer__ring {
  transform: scale(0.82);
}

:self[data-breath-running="true"][data-breath-phase="rest"] .breath-pacer__ring {
  transform: scale(0.9);
}

.breath-pacer__sequence button {
  display: grid;
  gap: 0.15rem;
  min-inline-size: 7rem;
  text-align: start;
}

.breath-pacer__sequence button[aria-pressed="true"] {
  border-color: color-mix(in oklch, var(--breath-accent) 78%, black);
  background: color-mix(in oklch, var(--breath-accent) 18%, var(--pmx-color-bg, white));
}

.breath-pacer__sequence output {
  color: var(--pmx-color-muted, #59665f);
  font-size: 0.85rem;
  font-weight: 650;
}

.breath-pacer__status {
  color: var(--pmx-color-muted, #59665f);
}

@media (prefers-reduced-motion: reduce) {
  .breath-pacer__ring {
    transition: none;
  }
}

@container (max-width: 38rem) {
  .breath-pacer__header,
  .breath-pacer__body {
    display: grid;
  }

  .breath-pacer__body {
    grid-template-columns: 1fr;
  }

  .breath-pacer__visual {
    min-block-size: 10rem;
  }

  .breath-pacer__sequence {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .breath-pacer__sequence button {
    min-inline-size: 0;
  }
}
```

## JavaScript

```js
const toggle = $("[data-breath-toggle]")
const reset = $("[data-breath-reset]")
const count = $("[data-breath-count]")
const status = $("[data-breath-status]")
const phaseButtons = $$("[data-breath-phase]")
const durationOutputs = $$("[data-breath-duration]")
const reducedMotion =
  typeof globalThis.matchMedia === "function" &&
  globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches

function secondsProp(name, fallback) {
  const parsed = Number(ctx.props[name])
  return Number.isFinite(parsed) && parsed > 0 ? Math.round(parsed) : fallback
}

const phases = [
  { name: "inhale", label: "Inhale", seconds: secondsProp("inhale", 4) },
  { name: "hold", label: "Hold", seconds: secondsProp("hold", 2) },
  { name: "exhale", label: "Exhale", seconds: secondsProp("exhale", 6) },
  { name: "rest", label: "Rest", seconds: secondsProp("rest", 2) },
]
const byName = new Map(
  phases.map(function (phase) {
    return [phase.name, phase]
  }),
)
const local = ctx.state(function () {
  return {
    remaining: phases[0].seconds,
    wantsRunning: !reducedMotion,
  }
})
let presented = false
let timer

function currentPhase() {
  return byName.get(state.get()) || phases[0]
}

function phaseIndex() {
  return Math.max(
    0,
    phases.findIndex(function (phase) {
      return phase.name === currentPhase().name
    }),
  )
}

function stopTimer() {
  if (timer !== undefined) clearInterval(timer)
  timer = undefined
}

function publishActions() {
  try {
    ctx.play.actions.set([
      {
        id: "toggle-breath-pacer",
        label: local.wantsRunning ? "Pause breath pacer" : "Resume breath pacer",
        run: function () {
          local.wantsRunning = !local.wantsRunning
          syncTimer()
        },
      },
      {
        id: "reset-breath-pacer",
        label: "Reset breath pacer",
        run: resetCycle,
      },
    ])
  } catch (error) {
    // Context Actions exist only in the Player shell; direct component controls still work.
  }
}

function render() {
  const phase = currentPhase()
  el.dataset.breathPhase = phase.name
  el.dataset.breathRunning = local.wantsRunning && presented ? "true" : "false"
  el.style.setProperty("--breath-duration", `${phase.seconds}s`)
  count.textContent = String(local.remaining)
  toggle.textContent = local.wantsRunning ? "Pause" : "Resume"
  toggle.setAttribute("aria-pressed", local.wantsRunning ? "false" : "true")
  phaseButtons.forEach(function (button) {
    button.setAttribute(
      "aria-pressed",
      button.dataset.breathPhase === phase.name ? "true" : "false",
    )
  })
  durationOutputs.forEach(function (output) {
    const matchingPhase = byName.get(output.dataset.breathDuration)
    if (matchingPhase) output.value = `${matchingPhase.seconds}s`
  })
  status.textContent = `${phase.label}: ${local.remaining} seconds remaining.`
  publishActions()
}

function syncTimer() {
  stopTimer()
  if (presented && local.wantsRunning) {
    timer = setInterval(tick, 1000)
  }
  render()
}

function requestPhase(name) {
  const phase = byName.get(name) || phases[0]
  local.remaining = phase.seconds
  if (state.get() === phase.name) {
    syncTimer()
  } else {
    state.set(phase.name)
  }
}

function tick() {
  if (local.remaining <= 1) {
    const next = phases[(phaseIndex() + 1) % phases.length]
    requestPhase(next.name)
  } else {
    local.remaining -= 1
    render()
  }
}

function resetCycle() {
  local.wantsRunning = false
  requestPhase(phases[0].name)
}

phaseButtons.forEach(function (button) {
  on(button, "click", function () {
    requestPhase(button.dataset.breathPhase)
  })
})

on(toggle, "click", function () {
  local.wantsRunning = !local.wantsRunning
  syncTimer()
})

on(reset, "click", resetCycle)

state.on(function () {
  local.remaining = currentPhase().seconds
  syncTimer()
})

ctx.effect(
  function () {
    presented = true
    syncTimer()
    return function () {
      presented = false
      stopTimer()
      render()
    }
  },
  { when: "presented" },
)

if (!byName.has(state.get())) state.set(phases[0].name)
else syncTimer()

ctx.cleanup(function () {
  stopTimer()
  try {
    ctx.play.actions.clear()
  } catch (error) {
    // No Player Context Actions were published in browse mode.
  }
})
```

---

<!--
componentName: reflection-prompt
-->

# Reflection Prompt

Use `<reflection-prompt>` after an answer, practice round, or critique. It
supports a small set of author-provided prompts and one local textarea. The
draft intentionally stays private browser-local state.

Props:

- `prompts`: prompts separated by `|`.
- `placeholder`: textarea placeholder text.
- `maxlength`: maximum draft length.

Failure boundary: without JavaScript, the textarea remains usable with the
initial prompt.

## HTML

```html
<section class="reflection-prompt" aria-label="{{ label: Reflection prompt }}">
  <header class="reflection-prompt__header">
    <p>{{ eyebrow: Reflect }}</p>
    <h2>{{ title: Name what changed }}</h2>
  </header>
  <p class="reflection-prompt__question" data-reflection-prompt>
    {{ prompt: What is clearer now? }}
  </p>
  <textarea
    data-reflection-note
    maxlength="{{ maxlength: 280 }}"
    rows="4"
    placeholder="{{ placeholder: Write one private sentence... }}"
  ></textarea>
  <div class="reflection-prompt__footer">
    <div class="reflection-prompt__buttons" data-reflection-buttons></div>
    <span data-reflection-count>0 / 280</span>
    <button type="button" data-reflection-clear disabled>Clear</button>
  </div>
  <p class="reflection-prompt__boundary">
    This draft is local to this browser session; use a response Block when the
    reflection should become durable evidence.
  </p>
</section>
```

## CSS

```css
:self {
  display: grid;
  gap: 0.9rem;
  inline-size: min(100%, 48rem);
  margin-inline: auto;
  border: 1px solid var(--pmx-color-border, #d7ded9);
  border-radius: 0.5rem;
  background: var(--pmx-color-surface, #ffffff);
  padding: clamp(1rem, 3vw, 1.35rem);
}

.reflection-prompt__header {
  display: grid;
  gap: 0.25rem;
}

.reflection-prompt__header p,
.reflection-prompt__header h2,
.reflection-prompt__question,
.reflection-prompt__boundary {
  margin: 0;
}

.reflection-prompt__header p {
  color: var(--pmx-color-muted, #59665f);
  font-size: 0.76rem;
  font-weight: 750;
  letter-spacing: 0;
  text-transform: uppercase;
}

.reflection-prompt__header h2 {
  font-size: clamp(1.35rem, 1.2rem + 1vw, 1.85rem);
  line-height: 1.12;
}

.reflection-prompt__question {
  border-inline-start: 0.35rem solid var(--pmx-color-focus, #b45309);
  font-size: 1.08rem;
  font-weight: 720;
  padding-inline-start: 0.85rem;
}

:self textarea {
  box-sizing: border-box;
  inline-size: 100%;
  min-block-size: 7rem;
  border: 1px solid var(--pmx-color-border, #d7ded9);
  border-radius: 0.5rem;
  background: var(--pmx-color-bg, #ffffff);
  color: var(--pmx-color-fg, #17211b);
  font: inherit;
  line-height: 1.45;
  padding: 0.8rem;
  resize: vertical;
}

:self textarea:focus-visible,
:self button:focus-visible {
  outline: 3px solid var(--pmx-color-focus, #b45309);
  outline-offset: 2px;
}

.reflection-prompt__footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
}

.reflection-prompt__buttons {
  display: flex;
  flex: 1 1 18rem;
  flex-wrap: wrap;
  gap: 0.45rem;
}

:self button {
  min-block-size: 2.35rem;
  border: 1px solid var(--pmx-color-border, #d7ded9);
  border-radius: 0.5rem;
  background: var(--pmx-color-bg, #ffffff);
  color: var(--pmx-color-fg, #17211b);
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  padding-inline: 0.75rem;
}

:self button[aria-pressed="true"] {
  border-color: var(--pmx-color-accent, #0f766e);
  background: color-mix(in oklch, var(--pmx-color-accent, #0f766e) 16%, transparent);
}

:self button:disabled {
  cursor: not-allowed;
  opacity: 0.58;
}

.reflection-prompt__footer span,
.reflection-prompt__boundary {
  color: var(--pmx-color-muted, #59665f);
  font-size: 0.9rem;
}

@container (max-width: 34rem) {
  .reflection-prompt__footer {
    display: grid;
  }
}
```

## JavaScript

```js
const prompt = $("[data-reflection-prompt]")
const note = $("[data-reflection-note]")
const count = $("[data-reflection-count]")
const clear = $("[data-reflection-clear]")
const buttons = $("[data-reflection-buttons]")
const prompts = String(
  ctx.props.prompts ||
    "What is clearer now? | What still feels noisy? | What is the next honest move?",
)
  .split("|")
  .map(function (item) {
    return item.trim()
  })
  .filter(Boolean)
const local = ctx.state(function () {
  return {
    index: 0,
    note: "",
  }
})

buttons.replaceChildren()
prompts.forEach(function (text, index) {
  const button = document.createElement("button")
  button.type = "button"
  button.textContent = `Prompt ${index + 1}`
  button.dataset.reflectionIndex = String(index)
  button.setAttribute("aria-pressed", "false")
  on(button, "click", function () {
    local.index = index
    render()
    note.focus()
  })
  buttons.appendChild(button)
})

function render() {
  const max = note.maxLength > 0 ? note.maxLength : 280
  const index = Math.min(local.index, prompts.length - 1)
  prompt.textContent = prompts[index] || "What is clearer now?"
  note.value = local.note
  count.textContent = `${local.note.length} / ${max}`
  clear.disabled = local.note.length === 0
  $$("[data-reflection-index]").forEach(function (button) {
    button.setAttribute(
      "aria-pressed",
      Number(button.dataset.reflectionIndex) === index ? "true" : "false",
    )
  })
}

on(note, "input", function () {
  local.note = note.value
  render()
})

on(clear, "click", function () {
  local.note = ""
  render()
  note.focus()
})

render()
```

---

<!--
componentName: grounding-check
-->

# Grounding Check

Use `<grounding-check>` after overload, a difficult practice attempt, or a
failed check. It is a local checklist for returning attention to the room and
choosing a next small move.

Props:

- `eyebrow` and `title`: visible labels.

Failure boundary: without JavaScript, the native checklist still works. The
progress meter and reset command are enhancements.

## HTML

```html
<section class="grounding-check" aria-label="{{ label: Grounding check }}">
  <header class="grounding-check__header">
    <div>
      <p>{{ eyebrow: Reset }}</p>
      <h2>{{ title: Come back to the room }}</h2>
    </div>
    <button type="button" data-grounding-reset>Reset</button>
  </header>
  <ol class="grounding-check__items">
    <li>
      <label>
        <input type="checkbox" value="see" data-grounding-item />
        <span>Name five things you can see.</span>
      </label>
    </li>
    <li>
      <label>
        <input type="checkbox" value="touch" data-grounding-item />
        <span>Notice four points of contact.</span>
      </label>
    </li>
    <li>
      <label>
        <input type="checkbox" value="hear" data-grounding-item />
        <span>Listen for three sounds.</span>
      </label>
    </li>
    <li>
      <label>
        <input type="checkbox" value="breathe" data-grounding-item />
        <span>Take two slower breaths.</span>
      </label>
    </li>
    <li>
      <label>
        <input type="checkbox" value="next" data-grounding-item />
        <span>Choose one next move.</span>
      </label>
    </li>
  </ol>
  <div class="grounding-check__progress">
    <progress value="0" max="5" data-grounding-progress></progress>
    <span data-grounding-status>0 of 5 complete.</span>
  </div>
</section>
```

## CSS

```css
:self {
  display: grid;
  gap: 1rem;
  inline-size: min(100%, 48rem);
  margin-inline: auto;
  border: 1px solid var(--pmx-color-border, #d7ded9);
  border-radius: 0.5rem;
  background: var(--pmx-color-surface, #ffffff);
  padding: clamp(1rem, 3vw, 1.35rem);
}

.grounding-check__header {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1rem;
}

.grounding-check__header p,
.grounding-check__header h2 {
  margin: 0;
}

.grounding-check__header p {
  color: var(--pmx-color-muted, #59665f);
  font-size: 0.76rem;
  font-weight: 750;
  letter-spacing: 0;
  text-transform: uppercase;
}

.grounding-check__header h2 {
  font-size: clamp(1.35rem, 1.2rem + 1vw, 1.85rem);
  line-height: 1.12;
}

:self button {
  min-block-size: 2.4rem;
  border: 1px solid var(--pmx-color-border, #d7ded9);
  border-radius: 0.5rem;
  background: var(--pmx-color-bg, #ffffff);
  color: var(--pmx-color-fg, #17211b);
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  padding-inline: 0.85rem;
}

:self button:focus-visible,
:self input:focus-visible + span {
  outline: 3px solid var(--pmx-color-focus, #b45309);
  outline-offset: 2px;
}

.grounding-check__items {
  display: grid;
  gap: 0.55rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.grounding-check__items label {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 0.7rem;
  min-block-size: 2.75rem;
  border: 1px solid var(--pmx-color-border, #d7ded9);
  border-radius: 0.5rem;
  background: var(--pmx-color-bg, #ffffff);
  cursor: pointer;
  padding: 0.65rem 0.8rem;
}

.grounding-check__items input {
  inline-size: 1.15rem;
  block-size: 1.15rem;
  accent-color: var(--pmx-color-accent, #0f766e);
}

.grounding-check__items label:has(input:checked) {
  border-color: var(--pmx-color-accent, #0f766e);
  background: color-mix(in oklch, var(--pmx-color-accent, #0f766e) 14%, transparent);
}

.grounding-check__items label:has(input:checked) span {
  text-decoration: line-through;
  text-decoration-thickness: 0.08em;
  text-decoration-color: color-mix(in oklch, var(--pmx-color-accent, #0f766e) 70%, transparent);
}

.grounding-check__progress {
  display: grid;
  gap: 0.35rem;
  color: var(--pmx-color-muted, #59665f);
}

:self progress {
  inline-size: 100%;
  block-size: 0.8rem;
  accent-color: var(--pmx-color-accent, #0f766e);
}

@container (max-width: 34rem) {
  .grounding-check__header {
    display: grid;
  }
}
```

## JavaScript

```js
const inputs = $$("[data-grounding-item]")
const reset = $("[data-grounding-reset]")
const progress = $("[data-grounding-progress]")
const status = $("[data-grounding-status]")
const local = ctx.state(function () {
  return {
    checked: [],
  }
})

function publishActions() {
  try {
    ctx.play.actions.set([
      {
        id: "reset-grounding-check",
        label: "Reset grounding check",
        disabled: local.checked.length === 0,
        run: resetCheck,
      },
    ])
  } catch (error) {
    // Context Actions exist only in the Player shell; direct component controls still work.
  }
}

function render() {
  inputs.forEach(function (input) {
    input.checked = local.checked.includes(input.value)
  })
  progress.max = inputs.length
  progress.value = local.checked.length
  status.textContent = `${local.checked.length} of ${inputs.length} complete.`
  publishActions()
}

function capture() {
  local.checked = inputs
    .filter(function (input) {
      return input.checked
    })
    .map(function (input) {
      return input.value
    })
  render()
}

function resetCheck() {
  local.checked = []
  render()
}

inputs.forEach(function (input) {
  on(input, "change", capture)
})

on(reset, "click", resetCheck)

ctx.cleanup(function () {
  try {
    ctx.play.actions.clear()
  } catch (error) {
    // No Player Context Actions were published in browse mode.
  }
})

render()
```
