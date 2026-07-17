---
title: Lantern Clock
description: A three-state campaign-pressure instrument for The Lanterns of Duskmere.
componentName: lantern-clock
---

# Lantern Clock

Use `<lantern-clock>` to make the campaign engine observable. Each lost light
changes the pressure and gives a faction a reason to act, while the players'
response remains undecided.

## Experience brief

- **Thesis:** Pressure becomes easier to design when a learner can see the
  world change one step at a time.
- **Arrival:** Three lanterns are visibly lit, the current pressure is calm but
  specific, and all three states are available as native controls.
- **Anti-targets:** This is not a random encounter roller, a decorative flame
  animation, or a campaign-management dashboard.
- **Arc:** Compare bright, dim, and dark; notice the paired faction move; then
  restore the authored starting state.
- **Protected invariants:** State is named in text, each change has a visible
  consequence, keyboard and pointer use the same controls, and reset is always
  available.
- **Degradation:** Remove glow and transitions before simplifying the three
  states, controls, consequence text, or static fallback.

The ordered `bright | dim | dark` state is Player-visible. It is ephemeral
practice state, not durable learner evidence. Without JavaScript, the bright
state and its explanation remain readable and the inactive controls stay
disabled.

## HTML

```html
<figure
  class="lantern-clock"
  states="bright | dim | dark"
  initial-state="bright"
  aria-label="Duskmere lantern pressure clock"
>
  <header class="lantern-clock__header">
    <div>
      <p class="lantern-clock__eyebrow">Campaign pressure</p>
      <h3>The lanterns of Duskmere</h3>
    </div>
    <output class="lantern-clock__status" data-clock-status aria-live="polite">
      Bright watch · 3 of 3 lanterns lit
    </output>
  </header>

  <div class="lantern-clock__body">
    <ol class="lantern-clock__lanterns" aria-label="Three campaign lanterns">
      <li class="lantern-clock__lantern" data-lantern data-lit="true">
        <span class="lantern-clock__handle" aria-hidden="true"></span>
        <span class="lantern-clock__frame" aria-hidden="true">
          <span class="lantern-clock__flame"></span>
        </span>
        <span class="lantern-clock__lantern-label" data-lantern-label>Lit</span>
      </li>
      <li class="lantern-clock__lantern" data-lantern data-lit="true">
        <span class="lantern-clock__handle" aria-hidden="true"></span>
        <span class="lantern-clock__frame" aria-hidden="true">
          <span class="lantern-clock__flame"></span>
        </span>
        <span class="lantern-clock__lantern-label" data-lantern-label>Lit</span>
      </li>
      <li class="lantern-clock__lantern" data-lantern data-lit="true">
        <span class="lantern-clock__handle" aria-hidden="true"></span>
        <span class="lantern-clock__frame" aria-hidden="true">
          <span class="lantern-clock__flame"></span>
        </span>
        <span class="lantern-clock__lantern-label" data-lantern-label>Lit</span>
      </li>
    </ol>

    <div class="lantern-clock__consequences">
      <section data-clock-panel="bright">
        <p class="lantern-clock__phase">Bright watch</p>
        <h4>The town still trusts the old protection.</h4>
        <dl>
          <div>
            <dt>Pressure</dt>
            <dd>Boats return before dusk, and the marsh paths remain open.</dd>
          </div>
          <div>
            <dt>Faction move</dt>
            <dd>The Wickkeepers ask the party to witness the renewal rite.</dd>
          </div>
        </dl>
      </section>

      <section data-clock-panel="dim" hidden>
        <p class="lantern-clock__phase">Dim watch</p>
        <h4>One dark light turns doubt into action.</h4>
        <dl>
          <div>
            <dt>Pressure</dt>
            <dd>A supply boat vanishes between the jetty and Saint Orra's Bell.</dd>
          </div>
          <div>
            <dt>Faction move</dt>
            <dd>The Reed Council installs an untested beacon without permission.</dd>
          </div>
        </dl>
      </section>

      <section data-clock-panel="dark" hidden>
        <p class="lantern-clock__phase">Dark watch</p>
        <h4>The situation changes before the heroes choose.</h4>
        <dl>
          <div>
            <dt>Pressure</dt>
            <dd>The drowned road rises, cutting the harbor off from the town.</dd>
          </div>
          <div>
            <dt>Faction move</dt>
            <dd>The Drowned Court offers safe passage in exchange for the final flame.</dd>
          </div>
        </dl>
      </section>
    </div>
  </div>

  <div class="lantern-clock__controls" role="group" aria-label="Lantern clock state">
    <button type="button" data-clock-state="bright" aria-pressed="true" disabled>
      <span>3</span> Bright
    </button>
    <button type="button" data-clock-state="dim" aria-pressed="false" disabled>
      <span>2</span> Dim
    </button>
    <button type="button" data-clock-state="dark" aria-pressed="false" disabled>
      <span>0</span> Dark
    </button>
  </div>

  <p class="lantern-clock__fallback" data-clock-fallback>
    Static view: all three lanterns begin lit. The campaign starts with trust
    intact, but the pressure can still advance when the party waits or fails.
  </p>
</figure>
```

## CSS

```css
:self {
  --clock-gold: var(--pmx-color-accent, #e9ad43);
  --clock-gold-soft: var(--pmx-color-link, #f3c969);
  --clock-ink: var(--pmx-color-bg, #10100f);
  --clock-paper: var(--pmx-color-fg, #f5ecda);
  display: grid;
  gap: clamp(1rem, 3cqi, 1.5rem);
  inline-size: min(100%, 58rem);
  margin-inline: auto;
  overflow: hidden;
  border: 1px solid color-mix(in oklch, var(--clock-gold) 45%, transparent);
  border-radius: 0.8rem;
  background:
    radial-gradient(
      circle at 28% 42%,
      color-mix(in oklch, var(--clock-gold) 12%, transparent),
      transparent 34%
    ),
    linear-gradient(145deg, #201d17, var(--clock-ink) 72%);
  color: var(--clock-paper);
  box-shadow:
    inset 0 1px color-mix(in oklch, var(--clock-gold) 20%, transparent),
    0 1.2rem 3rem rgb(0 0 0 / 0.28);
  padding: clamp(1rem, 4cqi, 2rem);
}

.lantern-clock__header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1rem;
  border-block-end: 1px solid color-mix(in oklch, var(--clock-gold) 30%, transparent);
  padding-block-end: 1rem;
}

.lantern-clock__header p,
.lantern-clock__header h3,
.lantern-clock__status,
.lantern-clock__phase,
.lantern-clock__consequences h4,
.lantern-clock__fallback,
.lantern-clock__consequences dl,
.lantern-clock__consequences dd {
  margin: 0;
}

.lantern-clock__eyebrow,
.lantern-clock__phase {
  color: var(--clock-gold-soft);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.lantern-clock__header h3 {
  margin-block-start: 0.2rem;
  color: var(--clock-paper);
  font-family: Georgia, "Times New Roman", var(--pmx-font-heading);
  font-size: clamp(1.45rem, 1.12rem + 1.2cqi, 2.15rem);
  line-height: 1.05;
  text-wrap: balance;
}

.lantern-clock__status {
  max-inline-size: 17rem;
  color: var(--pmx-color-muted, #c3b69f);
  font-size: 0.88rem;
  font-variant-numeric: tabular-nums;
  text-align: end;
}

.lantern-clock__body {
  display: grid;
  grid-template-columns: minmax(13rem, 0.82fr) minmax(16rem, 1.18fr);
  align-items: center;
  gap: clamp(1.25rem, 5cqi, 3rem);
}

.lantern-clock__lanterns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(0.5rem, 2cqi, 1rem);
  margin: 0;
  padding: 0;
  list-style: none;
}

.lantern-clock__lantern {
  display: grid;
  justify-items: center;
  gap: 0.55rem;
  min-inline-size: 0;
}

.lantern-clock__handle {
  inline-size: 58%;
  block-size: 1.4rem;
  margin-block-end: -0.85rem;
  border: 2px solid var(--pmx-color-border, #554a38);
  border-block-end: 0;
  border-radius: 999px 999px 0 0;
}

.lantern-clock__frame {
  position: relative;
  display: grid;
  place-items: end center;
  inline-size: min(100%, 4.7rem);
  aspect-ratio: 0.78;
  border: 0.28rem solid var(--pmx-color-border, #554a38);
  border-radius: 42% 42% 18% 18% / 28% 28% 14% 14%;
  background: linear-gradient(180deg, rgb(255 255 255 / 0.06), rgb(0 0 0 / 0.3));
  box-shadow: inset 0 0 0 2px rgb(0 0 0 / 0.35);
}

.lantern-clock__frame::before,
.lantern-clock__frame::after {
  position: absolute;
  inset-block: 0.25rem;
  inline-size: 2px;
  background: var(--pmx-color-border, #554a38);
  content: "";
}

.lantern-clock__frame::before {
  inset-inline-start: 25%;
}

.lantern-clock__frame::after {
  inset-inline-end: 25%;
}

.lantern-clock__flame {
  z-index: 1;
  inline-size: 1.15rem;
  block-size: 2rem;
  margin-block-end: 0.65rem;
  border-radius: 70% 30% 64% 36% / 76% 42% 58% 24%;
  background: #ffd877;
  box-shadow:
    0 0 0.8rem #f2a52e,
    0 0 2rem color-mix(in oklch, var(--clock-gold) 72%, transparent);
  opacity: 1;
  transform: rotate(7deg) scale(1);
  transform-origin: 50% 100%;
  transition:
    opacity 160ms ease-out,
    transform 160ms ease-out;
}

.lantern-clock__lantern[data-lit="false"] .lantern-clock__flame {
  opacity: 0.08;
  transform: rotate(7deg) scale(0.4);
}

.lantern-clock__lantern-label {
  color: var(--pmx-color-muted, #c3b69f);
  font-size: 0.78rem;
  font-weight: 750;
  text-transform: uppercase;
}

.lantern-clock__lantern[data-lit="true"] .lantern-clock__lantern-label {
  color: var(--clock-gold-soft);
}

.lantern-clock__consequences {
  min-inline-size: 0;
}

.lantern-clock__consequences [data-clock-panel] {
  display: grid;
  gap: 0.8rem;
}

.lantern-clock__consequences [data-clock-panel][hidden] {
  display: none;
}

.lantern-clock__consequences h4 {
  color: var(--clock-paper);
  font-family: Georgia, "Times New Roman", var(--pmx-font-heading);
  font-size: clamp(1.35rem, 1.12rem + 0.9cqi, 1.9rem);
  line-height: 1.14;
  text-wrap: balance;
}

.lantern-clock__consequences dl {
  display: grid;
  gap: 0.75rem;
}

.lantern-clock__consequences dl > div {
  display: grid;
  grid-template-columns: 6.4rem 1fr;
  gap: 0.75rem;
  border-block-start: 1px solid color-mix(in oklch, var(--clock-gold) 20%, transparent);
  padding-block-start: 0.65rem;
}

.lantern-clock__consequences dt {
  color: var(--clock-gold-soft);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.lantern-clock__consequences dd {
  color: var(--clock-paper);
  line-height: 1.48;
}

.lantern-clock__controls {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.65rem;
}

.lantern-clock__controls button {
  min-block-size: 3rem;
  border: 1px solid var(--pmx-color-border, #554a38);
  border-radius: 0.55rem;
  background: color-mix(in oklch, var(--pmx-color-surface, #1b1a17) 88%, black);
  color: var(--pmx-color-muted, #c3b69f);
  cursor: pointer;
  font: inherit;
  font-weight: 780;
  transition:
    border-color 120ms ease-out,
    background-color 120ms ease-out,
    color 120ms ease-out,
    transform 100ms ease-out;
}

.lantern-clock__controls button span {
  display: inline-grid;
  place-items: center;
  min-inline-size: 1.6rem;
  margin-inline-end: 0.3rem;
  border: 1px solid currentColor;
  border-radius: 999px;
  font-variant-numeric: tabular-nums;
}

.lantern-clock__controls button[aria-pressed="true"] {
  border-color: var(--clock-gold);
  background: color-mix(in oklch, var(--clock-gold) 20%, var(--clock-ink));
  color: var(--clock-paper);
}

.lantern-clock__controls button:focus-visible {
  outline: 3px solid var(--pmx-color-focus, #ffe29a);
  outline-offset: 3px;
}

.lantern-clock__controls button:active {
  transform: translateY(1px);
}

.lantern-clock__controls button:disabled {
  cursor: not-allowed;
  opacity: 0.64;
}

:self[data-ready="true"] .lantern-clock__controls button {
  opacity: 1;
}

.lantern-clock__fallback {
  border-inline-start: 0.25rem solid var(--clock-gold);
  color: var(--pmx-color-muted, #c3b69f);
  font-size: 0.9rem;
  padding-inline-start: 0.9rem;
}

@media (hover: hover) and (pointer: fine) {
  :self[data-ready="true"] .lantern-clock__controls button:hover {
    border-color: var(--clock-gold-soft);
    color: var(--clock-paper);
  }
}

@container pathmx-runtime (max-width: 42rem) {
  .lantern-clock__header {
    display: grid;
  }

  .lantern-clock__status {
    max-inline-size: none;
    text-align: start;
  }

  .lantern-clock__body {
    grid-template-columns: 1fr;
  }

  .lantern-clock__lanterns {
    inline-size: min(100%, 18rem);
    margin-inline: auto;
  }
}

@container pathmx-runtime (max-width: 28rem) {
  :self {
    padding: 1rem;
  }

  .lantern-clock__consequences dl > div {
    grid-template-columns: 1fr;
    gap: 0.2rem;
  }

  .lantern-clock__controls {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .lantern-clock__flame,
  .lantern-clock__controls button {
    transition: none;
  }
}

@media (forced-colors: active) {
  :self {
    border-color: CanvasText;
    background: Canvas;
    color: CanvasText;
    box-shadow: none;
  }

  .lantern-clock__flame {
    background: Highlight;
    box-shadow: none;
  }
}

@media print {
  :self {
    border-color: black;
    background: transparent;
    color: black;
    box-shadow: none;
  }

  .lantern-clock__controls,
  .lantern-clock__fallback {
    display: none;
  }
}
```

## JavaScript

```js
const phases = ["bright", "dim", "dark"]
const litCounts = {
  bright: 3,
  dim: 2,
  dark: 0,
}
const labels = {
  bright: "Bright watch",
  dim: "Dim watch",
  dark: "Dark watch",
}
const controls = $$('[data-clock-state]')
const panels = $$('[data-clock-panel]')
const lanterns = $$('[data-lantern]')
const status = $('[data-clock-status]')
const fallback = $('[data-clock-fallback]')

function currentIndex() {
  return Math.max(0, phases.indexOf(state.get()))
}

function setPhase(name) {
  if (!phases.includes(name)) return
  state.set(name)
}

function publishActions() {
  const index = currentIndex()
  try {
    ctx.play.actions.set([
      {
        id: 'restore-lantern-clock',
        label: 'Restore light',
        disabled: index === 0,
        run: function () {
          setPhase(phases[Math.max(0, currentIndex() - 1)])
        },
      },
      {
        id: 'advance-lantern-clock',
        label: 'Advance pressure',
        disabled: index === phases.length - 1,
        run: function () {
          setPhase(phases[Math.min(phases.length - 1, currentIndex() + 1)])
        },
      },
    ])
  } catch (error) {
    // Direct controls remain available when the Player Action bridge is absent.
  }
}

function sync() {
  const current = state.get()
  if (!phases.includes(current)) {
    state.set(phases[0])
    return
  }

  const litCount = litCounts[current]
  el.dataset.phase = current
  lanterns.forEach(function (lantern, index) {
    const isLit = index < litCount
    lantern.dataset.lit = isLit ? 'true' : 'false'
    const lanternLabel = lantern.querySelector('[data-lantern-label]')
    if (lanternLabel) lanternLabel.textContent = isLit ? 'Lit' : 'Dark'
  })
  panels.forEach(function (panel) {
    panel.hidden = panel.dataset.clockPanel !== current
  })
  controls.forEach(function (button) {
    button.setAttribute(
      'aria-pressed',
      button.dataset.clockState === current ? 'true' : 'false',
    )
  })
  status.textContent = `${labels[current]} · ${litCount} of 3 lanterns lit`
  publishActions()
}

controls.forEach(function (button) {
  button.disabled = false
  on(button, 'click', function () {
    setPhase(button.dataset.clockState)
  })
})

fallback.hidden = true
el.dataset.ready = 'true'

ctx.cleanup(function () {
  try {
    ctx.play.actions.clear()
  } catch (error) {
    // No Player Context Actions were published in browse mode.
  }
})

state.on(sync)
sync()
```
