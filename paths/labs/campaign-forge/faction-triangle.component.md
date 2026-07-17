---
title: Faction Triangle
description: An interactive comparison of Duskmere's three factions and their fault lines.
componentName: faction-triangle
---

# Faction Triangle

Use `<faction-triangle>` to inspect why every alliance in Duskmere contains
both common ground and a breaking point.

## Experience brief

- **Thesis:** A faction becomes playable when its reasonable hope visibly
  collides with two other reasonable hopes.
- **Arrival:** All three factions are visible; the Wickkeepers are selected;
  their want, cost, move, and relationships are readable.
- **Anti-targets:** Not an alignment chart, decorative heraldry, or a campaign
  dashboard.
- **Arc:** Compare Wickkeepers, Reed Council, and Drowned Court, then use their
  fault lines to invent an unstable alliance.
- **Protected invariants:** Every faction stays understandable, every alliance
  contains tension, and meaning never depends on color or position alone.
- **Degradation:** Remove the triangular layout and transitions before hiding
  faction names, relationship text, controls, or the static comparison.

The ordered state is ephemeral practice, not durable learner evidence. Without
JavaScript, all three comparison panels remain readable.

## HTML

```html
<figure
  class="faction-triangle"
  states="wickkeepers | reed-council | drowned-court"
  initial-state="wickkeepers"
  aria-label="Duskmere faction triangle"
>
  <header class="faction-triangle__header">
    <div>
      <p class="faction-triangle__eyebrow">Alliance field guide</p>
      <h3>Every agreement has a fault line</h3>
    </div>
    <output data-faction-status aria-live="polite">The Wickkeepers selected</output>
  </header>

  <div class="faction-triangle__diagram" role="group" aria-label="Choose a faction">
    <span class="faction-triangle__lines" aria-hidden="true"></span>
    <button type="button" data-faction-state="wickkeepers" aria-pressed="true" disabled>
      <span aria-hidden="true">W</span>The Wickkeepers
    </button>
    <button type="button" data-faction-state="reed-council" aria-pressed="false" disabled>
      <span aria-hidden="true">R</span>The Reed Council
    </button>
    <button type="button" data-faction-state="drowned-court" aria-pressed="false" disabled>
      <span aria-hidden="true">D</span>The Drowned Court
    </button>
  </div>

  <div class="faction-triangle__panels">
    <article data-faction-panel="wickkeepers">
      <p class="faction-triangle__kicker">Tradition under pressure</p>
      <h4>The Wickkeepers</h4>
      <dl class="faction-triangle__facts">
        <div><dt>Want</dt><dd>Renew the lantern pact.</dd></div>
        <div><dt>Cost</dt><dd>One resident becomes the next immortal keeper.</dd></div>
        <div><dt>Current move</dt><dd>Quietly test candidates before the renewal rite.</dd></div>
      </dl>
      <div class="faction-triangle__relationships">
        <section><h5>With the Reed Council</h5><p><strong>Common ground:</strong> Protect Duskmere.</p><p><strong>Breaking point:</strong> Bind a person to the pact or risk the marsh with alchemy.</p></section>
        <section><h5>With the Drowned Court</h5><p><strong>Common ground:</strong> Duskmere owes an ancient debt.</p><p><strong>Breaking point:</strong> Renew the pact or extinguish it and reclaim the town.</p></section>
      </div>
    </article>

    <article data-faction-panel="reed-council">
      <p class="faction-triangle__kicker">Progress with a hidden price</p>
      <h4>The Reed Council</h4>
      <dl class="faction-triangle__facts">
        <div><dt>Want</dt><dd>Replace magic with alchemical beacons.</dd></div>
        <div><dt>Cost</dt><dd>The beacons poison part of the marsh.</dd></div>
        <div><dt>Current move</dt><dd>Install an untested beacon before the town can object.</dd></div>
      </dl>
      <div class="faction-triangle__relationships">
        <section><h5>With the Wickkeepers</h5><p><strong>Common ground:</strong> Protect Duskmere.</p><p><strong>Breaking point:</strong> Risk one keeper or poison the marsh.</p></section>
        <section><h5>With the Drowned Court</h5><p><strong>Common ground:</strong> End the sacrificial pact.</p><p><strong>Breaking point:</strong> Preserve the town or return it to the marsh.</p></section>
      </div>
    </article>

    <article data-faction-panel="drowned-court">
      <p class="faction-triangle__kicker">Restitution without compromise</p>
      <h4>The Drowned Court</h4>
      <dl class="faction-triangle__facts">
        <div><dt>Want</dt><dd>Let every lantern go dark.</dd></div>
        <div><dt>Cost</dt><dd>Hundreds of residents lose their homes.</dd></div>
        <div><dt>Current move</dt><dd>Offer safe passage in exchange for the final flame.</dd></div>
      </dl>
      <div class="faction-triangle__relationships">
        <section><h5>With the Wickkeepers</h5><p><strong>Common ground:</strong> Duskmere owes an ancient debt.</p><p><strong>Breaking point:</strong> Preserve the pact or end the town built upon it.</p></section>
        <section><h5>With the Reed Council</h5><p><strong>Common ground:</strong> End the sacrificial pact.</p><p><strong>Breaking point:</strong> Accept poisoned beacons or reclaim the marsh.</p></section>
      </div>
    </article>
  </div>

  <p class="faction-triangle__fallback" data-faction-fallback>
    Static view: compare each faction's common ground and breaking points above.
  </p>
</figure>
```

## CSS

```css
:self {
  --faction-gold: var(--pmx-color-accent, #e9ad43);
  --faction-paper: var(--pmx-color-fg, #f5ecda);
  display: grid;
  gap: 1.25rem;
  inline-size: min(100%, 58rem);
  margin-inline: auto;
  border: 1px solid color-mix(in oklch, var(--faction-gold) 42%, transparent);
  border-radius: 0.8rem;
  background: linear-gradient(145deg, #201d17, var(--pmx-color-bg, #10100f) 72%);
  color: var(--faction-paper);
  box-shadow: 0 1.2rem 3rem rgb(0 0 0 / 0.24);
  padding: clamp(1rem, 4cqi, 2rem);
}

.faction-triangle__header { display: flex; align-items: end; justify-content: space-between; gap: 1rem; border-block-end: 1px solid color-mix(in oklch, var(--faction-gold) 28%, transparent); padding-block-end: 1rem; }
.faction-triangle__header p, .faction-triangle__header h3, .faction-triangle__header output, .faction-triangle__panels h4, .faction-triangle__panels h5, .faction-triangle__panels p, .faction-triangle__facts, .faction-triangle__facts dd, .faction-triangle__fallback { margin: 0; }
.faction-triangle__eyebrow, .faction-triangle__kicker { color: var(--pmx-color-link, #f3c969); font-size: 0.76rem; font-weight: 800; letter-spacing: 0.11em; text-transform: uppercase; }
.faction-triangle__header h3, .faction-triangle__panels h4 { font-family: Georgia, "Times New Roman", var(--pmx-font-heading); line-height: 1.08; }
.faction-triangle__header h3 { margin-block-start: 0.2rem; font-size: clamp(1.4rem, 1.1rem + 1.2cqi, 2.1rem); }
.faction-triangle__header output { color: var(--pmx-color-muted, #c3b69f); font-size: 0.86rem; }

.faction-triangle__diagram { position: relative; display: grid; grid-template-areas: "top top" "left right"; justify-content: center; gap: 3.25rem clamp(1rem, 12cqi, 8rem); padding: 0.5rem 1rem; }
.faction-triangle__lines { position: absolute; inset: 1.8rem 20% 1.8rem; border: 1px solid color-mix(in oklch, var(--faction-gold) 32%, transparent); clip-path: polygon(50% 0, 100% 100%, 0 100%); }
.faction-triangle__diagram button { z-index: 1; display: grid; grid-template-columns: 2rem 1fr; align-items: center; gap: 0.6rem; min-block-size: 3rem; border: 1px solid var(--pmx-color-border, #554a38); border-radius: 999px; background: #171612; color: var(--pmx-color-muted, #c3b69f); cursor: pointer; font: inherit; font-weight: 750; padding: 0.45rem 0.9rem 0.45rem 0.5rem; transition: border-color 140ms ease-out, color 140ms ease-out, transform 120ms ease-out; }
.faction-triangle__diagram button:first-of-type { grid-area: top; justify-self: center; }
.faction-triangle__diagram button:nth-of-type(2) { grid-area: left; }
.faction-triangle__diagram button:nth-of-type(3) { grid-area: right; }
.faction-triangle__diagram button span { display: grid; place-items: center; inline-size: 2rem; block-size: 2rem; border: 1px solid currentColor; border-radius: 50%; }
.faction-triangle__diagram button[aria-pressed="true"] { border-width: 2px; border-color: var(--faction-gold); color: var(--faction-paper); }
.faction-triangle__diagram button:focus-visible { outline: 3px solid var(--pmx-color-focus, #ffe29a); outline-offset: 3px; }
.faction-triangle__diagram button:active { transform: translateY(1px); }
.faction-triangle__diagram button:disabled { cursor: not-allowed; opacity: 0.64; }
:self[data-ready="true"] .faction-triangle__diagram button { opacity: 1; }

.faction-triangle__panels > article { display: grid; gap: 0.9rem; border-block-start: 1px solid color-mix(in oklch, var(--faction-gold) 24%, transparent); padding-block-start: 1rem; }
.faction-triangle__panels > article[hidden] { display: none; }
.faction-triangle__panels h4 { font-size: clamp(1.4rem, 1.1rem + 1cqi, 2rem); }
.faction-triangle__facts { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.8rem; }
.faction-triangle__facts > div { border-inline-start: 2px solid var(--faction-gold); padding-inline-start: 0.75rem; }
.faction-triangle__facts dt { color: var(--pmx-color-link, #f3c969); font-size: 0.75rem; font-weight: 800; text-transform: uppercase; }
.faction-triangle__facts dd { margin-block-start: 0.2rem; line-height: 1.45; }
.faction-triangle__relationships { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.faction-triangle__relationships section { display: grid; gap: 0.35rem; border: 1px solid var(--pmx-color-border, #554a38); border-radius: 0.55rem; background: rgb(255 255 255 / 0.025); padding: 0.85rem; }
.faction-triangle__relationships h5 { color: var(--pmx-color-link, #f3c969); font-size: 0.92rem; }
.faction-triangle__relationships p { color: var(--pmx-color-muted, #c3b69f); font-size: 0.9rem; line-height: 1.45; }
.faction-triangle__fallback { border-inline-start: 0.25rem solid var(--faction-gold); color: var(--pmx-color-muted, #c3b69f); font-size: 0.9rem; padding-inline-start: 0.8rem; }

@media (hover: hover) and (pointer: fine) { :self[data-ready="true"] .faction-triangle__diagram button:hover { border-color: var(--pmx-color-link, #f3c969); color: var(--faction-paper); } }
@container pathmx-runtime (max-width: 36rem) {
  .faction-triangle__header { display: grid; }
  .faction-triangle__diagram { grid-template-areas: none; grid-template-columns: 1fr; gap: 0.55rem; padding: 0; }
  .faction-triangle__diagram button, .faction-triangle__diagram button:first-of-type, .faction-triangle__diagram button:nth-of-type(2), .faction-triangle__diagram button:nth-of-type(3) { grid-area: auto; justify-self: stretch; }
  .faction-triangle__lines { display: none; }
  .faction-triangle__facts, .faction-triangle__relationships { grid-template-columns: 1fr; }
}
@media (prefers-reduced-motion: reduce) { .faction-triangle__diagram button { transition: none; } }
@media (forced-colors: active) { :self { border-color: CanvasText; background: Canvas; color: CanvasText; box-shadow: none; } .faction-triangle__lines { border-color: CanvasText; } .faction-triangle__diagram button[aria-pressed="true"] { border-color: Highlight; } }
@media print { :self { border-color: black; background: transparent; color: black; box-shadow: none; } .faction-triangle__diagram, .faction-triangle__header output, .faction-triangle__fallback { display: none; } .faction-triangle__panels > article[hidden] { display: grid; } }
```

## JavaScript

```js
const factions = ['wickkeepers', 'reed-council', 'drowned-court']
const labels = { 'wickkeepers': 'The Wickkeepers', 'reed-council': 'The Reed Council', 'drowned-court': 'The Drowned Court' }
const controls = $$('[data-faction-state]')
const panels = $$('[data-faction-panel]')
const status = $('[data-faction-status]')
const fallback = $('[data-faction-fallback]')

function currentIndex() { return Math.max(0, factions.indexOf(state.get())) }
function selectFaction(name) { if (factions.includes(name)) state.set(name) }
function publishActions() {
  const index = currentIndex()
  try {
    ctx.play.actions.set([
      { id: 'previous-faction', label: 'Previous faction', disabled: index === 0, run: function () { selectFaction(factions[Math.max(0, currentIndex() - 1)]) } },
      { id: 'next-faction', label: 'Next faction', disabled: index === factions.length - 1, run: function () { selectFaction(factions[Math.min(factions.length - 1, currentIndex() + 1)]) } },
    ])
  } catch (error) { /* Direct controls remain available without Player Actions. */ }
}
function sync() {
  const current = state.get()
  if (!factions.includes(current)) { state.set(factions[0]); return }
  panels.forEach(function (panel) { panel.hidden = panel.dataset.factionPanel !== current })
  controls.forEach(function (button) { button.setAttribute('aria-pressed', button.dataset.factionState === current ? 'true' : 'false') })
  status.textContent = `${labels[current]} selected`
  publishActions()
}
controls.forEach(function (button) { button.disabled = false; on(button, 'click', function () { selectFaction(button.dataset.factionState) }) })
fallback.hidden = true
el.dataset.ready = 'true'
ctx.cleanup(function () { try { ctx.play.actions.clear() } catch (error) { /* Browse mode. */ } })
state.on(sync)
sync()
```
