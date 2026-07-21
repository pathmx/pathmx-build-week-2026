---
title: Relationship Garden Components
description: A local-data relationship garden for tending context and recency without turning people into leads.
---

# Relationship Garden

The relationship-garden component reads the fictional person mirror, derives
a humane freshness state, and keeps all direct interaction in browser-local
state. The component never claims that an in-session touch rewrote a person
Source; it produces the exact Codex persistence prompt instead.

The garden intentionally stays one interactive surface rather than exposing
glance, person, and tended as ordered Player states. Filtering, selection, and
form entry are nonlinear direct-manipulation tasks, while the surrounding demo
Blocks own the guided sequence.

---

<!--
componentName: relationship-garden
-->

# Relationship Garden Instrument

[@data.people]: ./garden.people.json

## HTML

```html
<section
  class="relationship-garden"
  aria-label="{{ label: Your relationship garden }}"
  aria-busy="true"
  data-loading
>
  <header class="rg-header">
    <div>
      <p class="rg-kicker">A local memory you can tend</p>
      <h3>Your relationship garden</h3>
    </div>
    <p>Recency is a signal, not a score. Dormant never means dead.</p>
  </header>

  <div class="rg-toolbar">
    <div class="rg-filters" role="group" aria-label="Filter by garden bed">
      <button type="button" data-bed="all" aria-pressed="true">All</button>
      <button type="button" data-bed="internship" aria-pressed="false">Internship</button>
      <button type="button" data-bed="campus" aria-pressed="false">Campus</button>
      <button type="button" data-bed="craft" aria-pressed="false">Craft</button>
      <button type="button" data-bed="hometown" aria-pressed="false">Hometown</button>
    </div>
    <button class="rg-lens" type="button" data-lens aria-pressed="false">
      Parallel Lives: off
    </button>
  </div>

  <p class="rg-status" data-status role="status" aria-live="polite">
    Loading the local garden…
  </p>

  <div class="rg-layout">
    <section class="rg-plot-shell" aria-labelledby="rg-plot-title">
      <header>
        <div>
          <p class="rg-kicker">Garden glance</p>
          <h4 id="rg-plot-title">Who might welcome attention?</h4>
        </div>
        <span data-count>Six fictional people</span>
      </header>
      <div class="rg-plot" data-plot></div>
      <div class="rg-fallback" data-fallback>
        <p><strong>Static garden index</strong></p>
        <ul>
          <li>Priya Nair · Internship · last touched 2026-05-15 · send an alumni-lane thank-you.</li>
          <li>Marcus Chen · Internship · last touched 2026-05-01 · share the prototype lesson learned.</li>
          <li>Jordan Okonkwo · Campus · last touched 2026-07-18 · bring the accessibility test idea.</li>
          <li>Sam Reyes · Craft · last touched 2026-06-24 · send the revised opening.</li>
          <li>Avery Kim · Hometown · last touched 2026-02-08 · pinned against guilt; no task.</li>
          <li>Riley Booth · Campus + Craft · last touched 2026-06-30 · keep the next class check-in social.</li>
        </ul>
      </div>
    </section>

    <aside class="rg-panel" data-panel hidden aria-labelledby="rg-person-name">
      <header class="rg-panel__header">
        <div>
          <p class="rg-kicker">One human, in context</p>
          <h4 id="rg-person-name" data-name></h4>
        </div>
        <button class="rg-close" type="button" data-close aria-label="Close person details">Close</button>
      </header>

      <div class="rg-badges" data-lives aria-label="Parallel lives"></div>
      <p class="rg-freshness" data-freshness></p>
      <p data-origin></p>

      <dl class="rg-facts">
        <div><dt>Met</dt><dd data-met></dd></div>
        <div><dt>Last touched</dt><dd data-last-touched></dd></div>
        <div><dt>Next move</dt><dd data-next-move></dd></div>
        <div><dt>Open loops</dt><dd data-open-loops></dd></div>
      </dl>

      <p class="rg-caution" data-caution hidden>
        <strong>Keep the lanes distinct.</strong>
        A warm classmate conversation is not automatic permission to make a
        project or recruiting ask. Choose the life that fits this touch.
      </p>

      <form class="rg-form" data-touch-form>
        <fieldset>
          <legend>Log a touch in this session</legend>
          <label>
            Date
            <input type="date" data-touch-date required />
          </label>
          <label>
            Channel
            <select data-touch-channel>
              <option value="coffee">Coffee</option>
              <option value="text">Text</option>
              <option value="event">Event</option>
              <option value="call">Call</option>
              <option value="class">Class</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label class="rg-form__note">
            Tiny note
            <input
              type="text"
              data-touch-note
              maxlength="160"
              placeholder="What happened or changed?"
              required
            />
          </label>
        </fieldset>
        <button class="rg-primary" type="submit">Water this relationship</button>
      </form>

      <p class="rg-pending" data-pending hidden aria-live="polite"></p>
      <a data-source-link href="./people/">Open this person Source</a>
    </aside>
  </div>

  <section class="rg-preset" aria-labelledby="rg-preset-title">
    <div>
      <p class="rg-kicker">Codex handoff</p>
      <h4 id="rg-preset-title">Persist the human memory</h4>
      <p>Player state is temporary. This prompt makes the intended Source edit explicit.</p>
    </div>
    <textarea data-preset readonly rows="5">Help me tend my Relationship Garden for the internship bed. Read only paths/labs/relationship-garden/people/ and garden.people.json. Suggest one human to contact and why, using written notes only.</textarea>
    <div class="rg-copy-row">
      <button type="button" data-copy>Copy prompt</button>
      <span data-copy-status role="status" aria-live="polite"></span>
    </div>
  </section>
</section>
```

## CSS

```css
:self {
  --rg-soil: #2c261f;
  --rg-soil-soft: #51463a;
  --rg-leaf: #3f6b4d;
  --rg-leaf-light: #749179;
  --rg-leaf-quiet: #7c8a70;
  --rg-bloom: #d4a373;
  --rg-mulch: #6b5b4b;
  --rg-paper: #f4efe6;
  --rg-paper-deep: #e9dfcf;
  --rg-ink: #1e1a16;
  --rg-focus: #146c43;
  display: grid;
  gap: clamp(1rem, 3vw, 1.5rem);
  min-inline-size: 0;
  border: 1px solid color-mix(in srgb, var(--rg-soil) 24%, transparent);
  border-radius: 1.15rem;
  background:
    radial-gradient(circle at 12% 0%, color-mix(in srgb, var(--rg-bloom) 22%, transparent), transparent 32%),
    var(--rg-paper);
  color: var(--rg-ink);
  padding: clamp(1rem, 3vw, 1.6rem);
  box-shadow: 0 1rem 3rem color-mix(in srgb, var(--rg-soil) 13%, transparent);
}

@dark {
  :self {
    --rg-soil: #17130f;
    --rg-soil-soft: #6d5e4e;
    --rg-leaf: #72a27f;
    --rg-leaf-light: #9ab6a0;
    --rg-leaf-quiet: #96a48b;
    --rg-bloom: #e1b98f;
    --rg-mulch: #8c7865;
    --rg-paper: #211e1a;
    --rg-paper-deep: #2c2822;
    --rg-ink: #f5efe5;
    --rg-focus: #8ed4a5;
  }
}

:self h3,
:self h4,
:self p {
  margin: 0;
}

.rg-header,
.rg-panel__header,
.rg-plot-shell > header,
.rg-copy-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.rg-header > p {
  max-inline-size: 34ch;
  color: color-mix(in srgb, var(--rg-ink) 72%, transparent);
  font-size: 0.92rem;
}

.rg-kicker {
  color: var(--rg-leaf);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.11em;
  text-transform: uppercase;
}

.rg-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  min-inline-size: 0;
}

.rg-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

:self button,
:self input,
:self select,
:self textarea {
  box-sizing: border-box;
  font: inherit;
}

:self button {
  min-block-size: 2.65rem;
  border: 1px solid color-mix(in srgb, var(--rg-soil) 28%, transparent);
  border-radius: 999px;
  background: color-mix(in srgb, var(--rg-paper) 88%, white);
  color: var(--rg-ink);
  cursor: pointer;
  font-weight: 720;
  padding: 0.55rem 0.9rem;
}

:self button[aria-pressed="true"],
:self .rg-primary {
  border-color: var(--rg-leaf);
  background: var(--rg-leaf);
  color: #fff;
}

:self button:focus-visible,
:self input:focus-visible,
:self select:focus-visible,
:self textarea:focus-visible,
:self a:focus-visible {
  outline: 3px solid var(--rg-focus);
  outline-offset: 3px;
}

.rg-lens {
  flex: 0 0 auto;
}

.rg-status {
  min-block-size: 1.4em;
  color: color-mix(in srgb, var(--rg-ink) 72%, transparent);
  font-size: 0.86rem;
}

.rg-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: start;
  gap: 1rem;
  min-inline-size: 0;
}

.rg-plot-shell,
.rg-panel,
.rg-preset {
  min-inline-size: 0;
  border: 1px solid color-mix(in srgb, var(--rg-soil) 22%, transparent);
  border-radius: 0.9rem;
  background: color-mix(in srgb, var(--rg-paper) 92%, white);
  padding: 1rem;
}

.rg-plot-shell > header span {
  color: color-mix(in srgb, var(--rg-ink) 65%, transparent);
  font-size: 0.78rem;
  white-space: nowrap;
}

.rg-plot {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.65rem;
  margin-block-start: 1rem;
  padding: clamp(0.75rem, 3vw, 1.25rem);
  border-radius: 0.8rem;
  background:
    linear-gradient(180deg, transparent 0 64%, color-mix(in srgb, var(--rg-soil-soft) 24%, transparent) 64% 67%, transparent 67%),
    repeating-linear-gradient(90deg, transparent 0 31.5%, color-mix(in srgb, var(--rg-soil) 11%, transparent) 31.5% 32.5%),
    color-mix(in srgb, var(--rg-leaf) 7%, var(--rg-paper-deep));
}

.rg-plant {
  display: grid;
  grid-template-rows: 5.1rem auto auto;
  justify-items: center;
  align-items: end;
  gap: 0.35rem;
  min-inline-size: 0;
  min-block-size: 8.8rem;
  border-radius: 0.75rem;
  background: color-mix(in srgb, var(--rg-paper) 86%, transparent);
  padding: 0.65rem 0.4rem;
  text-align: center;
}

.rg-plant[aria-current="true"] {
  box-shadow: 0 0 0 3px var(--rg-focus);
}

.rg-plant__visual {
  position: relative;
  display: block;
  inline-size: 3.8rem;
  block-size: 4.8rem;
  transform-origin: 50% 100%;
  transition: transform 320ms ease, opacity 320ms ease;
}

.rg-plant__stem {
  position: absolute;
  inset-block-end: 0.8rem;
  inset-inline-start: calc(50% - 0.12rem);
  inline-size: 0.24rem;
  block-size: 3.2rem;
  border-radius: 999px;
  background: var(--rg-leaf);
}

.rg-plant__leaf,
.rg-plant__bloom {
  position: absolute;
  display: block;
}

.rg-plant__leaf {
  inline-size: 1.35rem;
  block-size: 0.72rem;
  border-radius: 90% 10% 90% 10%;
  background: var(--rg-leaf-light);
}

.rg-plant__leaf--left {
  inset-block-start: 1.8rem;
  inset-inline-start: 0.62rem;
  transform: rotate(25deg);
}

.rg-plant__leaf--right {
  inset-block-start: 2.55rem;
  inset-inline-end: 0.58rem;
  transform: scaleX(-1) rotate(25deg);
}

.rg-plant__bloom {
  inset-block-start: 0.15rem;
  inset-inline-start: calc(50% - 0.7rem);
  inline-size: 1.4rem;
  aspect-ratio: 1;
  border: 0.38rem dotted var(--rg-bloom);
  border-radius: 50%;
  background: color-mix(in srgb, var(--rg-bloom) 35%, var(--rg-paper));
}

.rg-plant__pot {
  position: absolute;
  inset-block-end: 0;
  inset-inline-start: calc(50% - 0.8rem);
  inline-size: 1.6rem;
  block-size: 1.05rem;
  border-radius: 0.2rem 0.2rem 0.55rem 0.55rem;
  background: var(--rg-mulch);
}

.rg-plant[data-freshness="warming"] .rg-plant__visual {
  transform: rotate(1.5deg);
}

.rg-plant[data-freshness="quiet"] .rg-plant__visual {
  transform: translateY(0.35rem) rotate(8deg);
}

.rg-plant[data-freshness="quiet"] .rg-plant__bloom {
  opacity: 0.42;
}

.rg-plant[data-freshness="dormant"] .rg-plant__visual {
  transform: translateY(1rem) scale(0.72);
  opacity: 0.72;
}

.rg-plant[data-freshness="dormant"] .rg-plant__stem,
.rg-plant[data-freshness="dormant"] .rg-plant__leaf,
.rg-plant[data-freshness="dormant"] .rg-plant__bloom {
  display: none;
}

.rg-plant__name,
.rg-plant__state {
  overflow-wrap: anywhere;
}

.rg-plant__name {
  font-size: 0.86rem;
  font-weight: 780;
}

.rg-plant__state {
  color: color-mix(in srgb, var(--rg-ink) 68%, transparent);
  font-size: 0.7rem;
  font-weight: 650;
}

.rg-plant__lives {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.2rem;
}

.rg-chip,
.rg-plant__lives span {
  border: 1px solid color-mix(in srgb, var(--rg-leaf) 35%, transparent);
  border-radius: 999px;
  background: color-mix(in srgb, var(--rg-leaf) 9%, transparent);
  padding: 0.2rem 0.42rem;
  font-size: 0.68rem;
  font-weight: 680;
}

.rg-empty {
  grid-column: 1 / -1;
  padding: 2rem 1rem;
  color: color-mix(in srgb, var(--rg-ink) 70%, transparent);
  text-align: center;
}

.rg-fallback {
  margin-block-start: 1rem;
  color: color-mix(in srgb, var(--rg-ink) 78%, transparent);
  font-size: 0.86rem;
}

.rg-fallback ul {
  padding-inline-start: 1.2rem;
}

.rg-panel {
  display: grid;
  gap: 0.9rem;
}

.rg-panel[hidden] {
  display: none;
}

.rg-close {
  min-block-size: 2.2rem;
  padding-block: 0.35rem;
}

.rg-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.rg-freshness,
.rg-pending,
.rg-caution {
  border-inline-start: 0.3rem solid var(--rg-leaf);
  background: color-mix(in srgb, var(--rg-leaf) 10%, transparent);
  padding: 0.75rem;
}

.rg-caution {
  border-inline-start-color: var(--rg-bloom);
  background: color-mix(in srgb, var(--rg-bloom) 14%, transparent);
  font-size: 0.88rem;
}

.rg-facts {
  display: grid;
  gap: 0.65rem;
  margin: 0;
}

.rg-facts div {
  display: grid;
  grid-template-columns: 6.5rem minmax(0, 1fr);
  gap: 0.6rem;
}

.rg-facts dt {
  color: color-mix(in srgb, var(--rg-ink) 63%, transparent);
  font-size: 0.78rem;
  font-weight: 760;
  text-transform: uppercase;
}

.rg-facts dd {
  min-inline-size: 0;
  margin: 0;
}

.rg-form fieldset {
  display: grid;
  grid-template-columns: minmax(8rem, 0.8fr) minmax(8rem, 0.8fr);
  gap: 0.65rem;
  min-inline-size: 0;
  margin: 0 0 0.75rem;
  border: 0;
  padding: 0;
}

.rg-form legend {
  margin-block-end: 0.6rem;
  font-weight: 780;
}

.rg-form label {
  display: grid;
  gap: 0.3rem;
  min-inline-size: 0;
  font-size: 0.78rem;
  font-weight: 740;
}

.rg-form__note {
  grid-column: 1 / -1;
}

:self input,
:self select,
:self textarea {
  inline-size: 100%;
  min-inline-size: 0;
  border: 1px solid color-mix(in srgb, var(--rg-soil) 28%, transparent);
  border-radius: 0.55rem;
  background: var(--rg-paper);
  color: var(--rg-ink);
  padding: 0.62rem;
}

.rg-preset {
  display: grid;
  grid-template-columns: minmax(12rem, 0.58fr) minmax(0, 1fr);
  gap: 0.9rem 1rem;
}

.rg-preset textarea {
  resize: vertical;
  font-family: var(--pmx-font-mono, ui-monospace, monospace);
  font-size: 0.78rem;
  line-height: 1.45;
}

.rg-copy-row {
  grid-column: 2;
  align-items: center;
}

.rg-copy-row span {
  color: color-mix(in srgb, var(--rg-ink) 68%, transparent);
  font-size: 0.78rem;
}

@container pathmx-runtime (max-width: 48rem) {
  .rg-layout { grid-template-columns: 1fr; }
}

@container pathmx-runtime (max-width: 36rem) {
  .rg-header,
  .rg-toolbar,
  .rg-panel__header,
  .rg-plot-shell > header {
    align-items: stretch;
    flex-direction: column;
  }

  .rg-lens {
    inline-size: 100%;
  }

  .rg-plot {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding-inline: 0.5rem;
  }

  .rg-facts div,
  .rg-form fieldset,
  .rg-preset {
    grid-template-columns: 1fr;
  }

  .rg-form__note,
  .rg-copy-row {
    grid-column: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .rg-plant__visual {
    transition: none;
  }
}

@media (forced-colors: active) {
  :self button,
  .rg-plot-shell,
  .rg-panel,
  .rg-preset,
  :self input,
  :self select,
  :self textarea {
    border: 1px solid CanvasText;
  }

  .rg-plant[aria-current="true"] {
    outline: 3px solid Highlight;
  }
}
```

## JavaScript

```js
const plot = $("[data-plot]")
const fallback = $("[data-fallback]")
const status = $("[data-status]")
const count = $("[data-count]")
const panel = $("[data-panel]")
const nameOutput = $("[data-name]")
const livesOutput = $("[data-lives]")
const freshnessOutput = $("[data-freshness]")
const originOutput = $("[data-origin]")
const metOutput = $("[data-met]")
const lastTouchedOutput = $("[data-last-touched]")
const nextMoveOutput = $("[data-next-move]")
const openLoopsOutput = $("[data-open-loops]")
const caution = $("[data-caution]")
const sourceLink = $("[data-source-link]")
const lensButton = $("[data-lens]")
const closeButton = $("[data-close]")
const form = $("[data-touch-form]")
const touchDate = $("[data-touch-date]")
const touchChannel = $("[data-touch-channel]")
const touchNote = $("[data-touch-note]")
const pending = $("[data-pending]")
const preset = $("[data-preset]")
const copyButton = $("[data-copy]")
const copyStatus = $("[data-copy-status]")
const bedButtons = $$("[data-bed]")
const local = ctx.state(function () {
  return {
    filter: "all",
    selected: "",
    lens: false,
    pending: {},
  }
})
let people = []

touchDate.value = new Date().toISOString().slice(0, 10)

function titleCase(value) {
  return String(value)
    .split("-")
    .map(function (part) {
      return part.charAt(0).toUpperCase() + part.slice(1)
    })
    .join(" ")
}

function freshnessFor(person) {
  const thresholds = person.touchStaleDays || {}
  const recent = Number(thresholds.recent) || 14
  const warming = Number(thresholds.warming) || 45
  const quiet = Number(thresholds.quiet) || 90
  const touched = Date.parse(String(person.lastTouched) + "T00:00:00Z")
  const now = new Date()
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  const age = Number.isFinite(touched)
    ? Math.max(0, Math.floor((today - touched) / 86400000))
    : 0
  let id = "dormant"
  if (age <= recent) id = "recent"
  else if (age <= warming) id = "warming"
  else if (age <= quiet) id = "quiet"

  if (person.neverGuiltWilt) {
    return {
      id: "recent",
      rawId: id,
      age: age,
      label: "Pinned — no guilt wilt",
    }
  }

  const labels = {
    recent: "Recently tended",
    warming: "Warming",
    quiet: "Quiet — consider a light touch",
    dormant: "Dormant — resting, not dead",
  }
  return { id: id, rawId: id, age: age, label: labels[id] }
}

function selectedPerson() {
  return people.find(function (person) {
    return person.id === local.selected
  })
}

function makePlant(person) {
  const freshness = freshnessFor(person)
  const button = document.createElement("button")
  const primaryLife =
    person.lives.find(function (life) {
      return life.id === person.primaryLife
    }) || person.lives[0]
  button.type = "button"
  button.className = "rg-plant"
  button.dataset.personId = person.id
  button.dataset.freshness = freshness.id
  button.setAttribute(
    "aria-label",
    person.name +
      ", " +
      freshness.label +
      ", " +
      person.beds.map(titleCase).join(" and "),
  )
  button.setAttribute(
    "aria-current",
    String(person.id === local.selected),
  )

  const visual = document.createElement("span")
  visual.className = "rg-plant__visual"
  visual.setAttribute("aria-hidden", "true")
  ;["stem", "leaf leaf--left", "leaf leaf--right", "bloom", "pot"].forEach(
    function (part) {
      const shape = document.createElement("span")
      shape.className =
        "rg-plant__" + part.split(" ").join(" rg-plant__")
      visual.append(shape)
    },
  )

  const name = document.createElement("span")
  name.className = "rg-plant__name"
  name.textContent = person.name
  const stateLabel = document.createElement("span")
  stateLabel.className = "rg-plant__state"
  stateLabel.textContent = freshness.label
  button.append(visual, name, stateLabel)

  if (local.lens) {
    const chips = document.createElement("span")
    chips.className = "rg-plant__lives"
    person.lives.forEach(function (life) {
      const chip = document.createElement("span")
      chip.textContent = life.label
      chips.append(chip)
    })
    button.append(chips)
  } else if (primaryLife) {
    const chips = document.createElement("span")
    chips.className = "rg-plant__lives"
    const chip = document.createElement("span")
    chip.textContent = primaryLife.label
    chips.append(chip)
    button.append(chips)
  }

  on(button, "click", function () {
    local.selected = person.id
    renderPlot()
    renderPanel()
    status.textContent =
      "Selected " + person.name + ". Read the person story before choosing a touch."
  })
  return button
}

function renderPlot() {
  const visible = people.filter(function (person) {
    return local.filter === "all" || person.beds.includes(local.filter)
  })
  if (!visible.length) {
    const empty = document.createElement("p")
    empty.className = "rg-empty"
    empty.textContent = "No people are planted in this bed yet."
    plot.replaceChildren(empty)
  } else {
    plot.replaceChildren.apply(
      plot,
      visible.map(makePlant),
    )
  }
  count.textContent =
    String(visible.length) +
    (visible.length === 1 ? " person" : " people") +
    (local.filter === "all" ? " across all beds" : " in " + titleCase(local.filter))
  bedButtons.forEach(function (button) {
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.bed === local.filter),
    )
  })
  lensButton.setAttribute("aria-pressed", String(local.lens))
  lensButton.textContent = "Parallel Lives: " + (local.lens ? "on" : "off")
}

function renderPanel() {
  const person = selectedPerson()
  if (!person) {
    panel.hidden = true
    return
  }

  const freshness = freshnessFor(person)
  panel.hidden = false
  nameOutput.textContent = person.name
  freshnessOutput.textContent =
    freshness.label +
    " · " +
    String(freshness.age) +
    " days since the last recorded touch"
  originOutput.textContent = person.origin
  metOutput.textContent =
    person.met.when +
    " at " +
    person.met.where +
    " — " +
    person.met.how
  lastTouchedOutput.textContent = person.lastTouched
  nextMoveOutput.textContent = person.nextMove
  openLoopsOutput.textContent = person.openLoops.length
    ? person.openLoops.join("; ")
    : "None recorded"
  livesOutput.replaceChildren.apply(
    livesOutput,
    person.lives.map(function (life) {
      const chip = document.createElement("span")
      chip.className = "rg-chip"
      chip.textContent = life.label + " · " + titleCase(life.bed)
      return chip
    }),
  )
  caution.hidden = person.lives.length < 2
  sourceLink.href =
    "/labs/relationship-garden/people/" + person.id + ".person"
  const saved = local.pending[person.id]
  pending.hidden = !saved
  pending.textContent = saved
    ? "Pending persistence: " +
      saved.date +
      " via " +
      saved.channel +
      " — " +
      saved.note
    : ""
}

bedButtons.forEach(function (button) {
  on(button, "click", function () {
    local.filter = button.dataset.bed
    const person = selectedPerson()
    if (
      person &&
      local.filter !== "all" &&
      !person.beds.includes(local.filter)
    ) {
      local.selected = ""
      renderPanel()
    }
    renderPlot()
    status.textContent =
      local.filter === "all"
        ? "Showing every garden bed."
        : "Showing the " + titleCase(local.filter) + " bed."
  })
})

on(lensButton, "click", function () {
  local.lens = !local.lens
  renderPlot()
  renderPanel()
  status.textContent = local.lens
    ? "Parallel Lives lens on. Multiple contexts stay visible without duplicating people."
    : "Parallel Lives lens off. Each person shows one primary context."
})

on(closeButton, "click", function () {
  local.selected = ""
  renderPlot()
  renderPanel()
  status.textContent = "Person details closed. The whole garden is visible."
})

on(form, "submit", function (event) {
  event.preventDefault()
  const person = selectedPerson()
  if (!person) return
  const note = touchNote.value.trim()
  if (!note) {
    touchNote.focus()
    return
  }
  const touch = {
    date: touchDate.value,
    channel: touchChannel.value,
    note: note,
  }
  person.lastTouched = touch.date
  local.pending[person.id] = touch
  preset.value =
    "I tended " +
    person.name +
    " on " +
    touch.date +
    " via " +
    touch.channel +
    ': "' +
    touch.note +
    '". Update lastTouched, Touches, and freshness fields in both the person Source and JSON mirror. Propose a next move only if one is needed.'
  renderPlot()
  renderPanel()
  status.textContent =
    person.name +
    " now appears recently tended in this session. Source persistence is still pending."
  touchNote.value = ""
})

on(copyButton, "click", async function () {
  try {
    await navigator.clipboard.writeText(preset.value)
    copyStatus.textContent = "Prompt copied."
  } catch (error) {
    preset.focus()
    preset.select()
    copyStatus.textContent = "Select and copy the highlighted prompt."
  }
})

async function loadPeople() {
  try {
    const data = await ctx.data.people.json()
    people = Array.isArray(data.people) ? data.people : []
    if (!people.length) throw new Error("No people were provided.")
    fallback.hidden = true
    el.removeAttribute("data-loading")
    el.setAttribute("aria-busy", "false")
    renderPlot()
    renderPanel()
    status.textContent =
      "Garden ready. Choose a bed or select one fictional person."
  } catch (error) {
    el.setAttribute("aria-busy", "false")
    status.textContent =
      "Interactive garden unavailable. The readable static index remains below."
  }
}

void loadPeople()
```
