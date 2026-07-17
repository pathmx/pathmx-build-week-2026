---
title: Duskmere Map
description: A five-place field map for inspecting the decisions hidden in each location.
componentName: duskmere-map
---

# Duskmere Map

Use `<duskmere-map>` to make “five places, not a continent” spatial and
inspectable. Each place supplies a sensation, a person with a want, immediate
pressure, and an open question rather than settled lore.

## Experience brief

- **Thesis:** A small map becomes playable when every location offers a
  different decision.
- **Arrival:** The complete geography and all five controls are visible; the
  Crooked Jetty is selected and its four prompts are readable.
- **Anti-targets:** Not decorative parchment, pan-and-zoom software, a campaign
  dashboard, or lore that answers its own mysteries.
- **Arc:** Inspect five stable places in list order, then draft a new five-place
  menu with the same prompts.
- **Protected invariants:** Geography remains stable; selection uses text and a
  ring as well as color; every location retains the same four prompts.
- **Degradation:** Remove texture and emphasis first, then stack the layout;
  preserve labels, controls, all entries, and open questions.

The ordered location state is ephemeral practice, not durable evidence. The
SVG is descriptive rather than interactive; native buttons provide the single
keyboard and touch path. Without JavaScript, all five entries stay visible.

## HTML

```html
<section class="duskmere-map" states="crooked-jetty | saint-orras-bell | glasshouse | wickkeeper-hall | sunken-road" initial-state="crooked-jetty" aria-labelledby="duskmere-map-title">
  <header class="duskmere-map__header">
    <div><p>Five-place field map</p><h3 id="duskmere-map-title">Duskmere is a menu of decisions</h3></div>
    <output data-map-status aria-live="polite">Location 1 of 5 · The Crooked Jetty</output>
  </header>

  <div class="duskmere-map__stage">
    <svg class="duskmere-map__drawing" viewBox="0 0 800 480" role="img" aria-labelledby="duskmere-svg-title duskmere-svg-desc">
      <title id="duskmere-svg-title">Field map of Duskmere</title>
      <desc id="duskmere-svg-desc">Saint Orra's Bell lies northwest offshore, the Crooked Jetty southwest, Wickkeeper Hall at the center, the Glasshouse northeast, and the Sunken Road southeast.</desc>
      <path class="duskmere-map__water" d="M0 0H800V480H0z" />
      <path class="duskmere-map__land" d="M235 28C336 42 351 126 434 120c107-8 204 19 230 97 31 94-46 211-169 238H171C95 405 88 317 123 238c29-66 31-191 112-210Z" />
      <path class="duskmere-map__road" d="M210 365C311 321 354 262 412 238s128-12 211 111" />
      <path class="duskmere-map__road" d="M414 238c55-54 117-82 176-102" />
      <g data-map-marker="saint-orras-bell" transform="translate(155 105)"><circle r="25"/><circle class="duskmere-map__ring" r="34"/><text class="duskmere-map__number" y="6">2</text><text class="duskmere-map__label" x="40" y="5">Saint Orra's Bell</text></g>
      <g data-map-marker="crooked-jetty" data-selected="true" transform="translate(185 350)"><circle r="25"/><circle class="duskmere-map__ring" r="34"/><text class="duskmere-map__number" y="6">1</text><text class="duskmere-map__label" x="40" y="5">Crooked Jetty</text></g>
      <g data-map-marker="wickkeeper-hall" transform="translate(410 235)"><circle r="25"/><circle class="duskmere-map__ring" r="34"/><text class="duskmere-map__number" y="6">4</text><text class="duskmere-map__label" x="40" y="5">Wickkeeper Hall</text></g>
      <g data-map-marker="glasshouse" transform="translate(610 135)"><circle r="25"/><circle class="duskmere-map__ring" r="34"/><text class="duskmere-map__number" y="6">3</text><text class="duskmere-map__label" x="-40" y="-38" text-anchor="end">The Glasshouse</text></g>
      <g data-map-marker="sunken-road" transform="translate(625 370)"><circle r="25"/><circle class="duskmere-map__ring" r="34"/><text class="duskmere-map__number" y="6">5</text><text class="duskmere-map__label" x="-40" y="5" text-anchor="end">Sunken Road</text></g>
    </svg>

    <div class="duskmere-map__panels">
      <article data-map-panel="crooked-jetty"><p>Southwest · Harbor edge</p><h4>The Crooked Jetty</h4><dl><div><dt>Notice</dt><dd>Tarred rope and brackish spray.</dd></div><div><dt>Resident</dt><dd>Harbormaster Mara Venn wants the wreck cleared before the tide turns.</dd></div><div><dt>Pressure</dt><dd>The dead harbor lantern keeps relighting with a cold blue flame.</dd></div><div><dt>Open question</dt><dd>Who keeps relighting it?</dd></div></dl></article>
      <article data-map-panel="saint-orras-bell"><p>Northwest · Offshore</p><h4>Saint Orra's Bell</h4><dl><div><dt>Notice</dt><dd>The bell's note trembles through wet boards before it is heard.</dd></div><div><dt>Resident</dt><dd>Ferryman Olan Reed wants the submerged bell-rope cut.</dd></div><div><dt>Pressure</dt><dd>Every toll draws another empty boat toward shore.</dd></div><div><dt>Open question</dt><dd>Why does it ring beneath the water?</dd></div></dl></article>
      <article data-map-panel="glasshouse"><p>Northeast · High ground</p><h4>The Glasshouse</h4><dl><div><dt>Notice</dt><dd>Green condensation beads on warm panes; the air tastes metallic.</dd></div><div><dt>Resident</dt><dd>Alchemist Tavia Sorn wants one more night to prove her beacon works.</dd></div><div><dt>Pressure</dt><dd>Silver reeds spread downhill from the runoff trench.</dd></div><div><dt>Open question</dt><dd>Who is hiding the beacon's true cost?</dd></div></dl></article>
      <article data-map-panel="wickkeeper-hall"><p>Center · Old town</p><h4>Wickkeeper Hall</h4><dl><div><dt>Notice</dt><dd>Beeswax, soot, and hot brass cling to the stairwell.</dd></div><div><dt>Resident</dt><dd>Apprentice Elian Vale wants a new name removed from the succession book.</dd></div><div><dt>Pressure</dt><dd>The ink deepens whenever another lantern dims.</dd></div><div><dt>Open question</dt><dd>Whose name appeared in the book?</dd></div></dl></article>
      <article data-map-panel="sunken-road"><p>Southeast · Marsh ward</p><h4>The Sunken Road</h4><dl><div><dt>Notice</dt><dd>Black water covers the milestones while hoofbeats sound below.</dd></div><div><dt>Resident</dt><dd>Guide Edda Fen wants travelers to carry her last flame beyond the ward.</dd></div><div><dt>Pressure</dt><dd>The road rises nearer town each night.</dd></div><div><dt>Open question</dt><dd>What returns when travelers carry no flame?</dd></div></dl></article>
    </div>
  </div>

  <fieldset class="duskmere-map__controls"><legend>Inspect a location</legend>
    <button type="button" data-map-state="crooked-jetty" aria-pressed="true" disabled><span>1</span>Crooked Jetty</button>
    <button type="button" data-map-state="saint-orras-bell" aria-pressed="false" disabled><span>2</span>Saint Orra's Bell</button>
    <button type="button" data-map-state="glasshouse" aria-pressed="false" disabled><span>3</span>Glasshouse</button>
    <button type="button" data-map-state="wickkeeper-hall" aria-pressed="false" disabled><span>4</span>Wickkeeper Hall</button>
    <button type="button" data-map-state="sunken-road" aria-pressed="false" disabled><span>5</span>Sunken Road</button>
  </fieldset>
  <p class="duskmere-map__fallback" data-map-fallback>Static field guide: all five locations are shown above, each with a sensation, someone who wants something, immediate pressure, and an open question.</p>
</section>
```

## CSS

```css
:self { --map-gold: var(--pmx-color-accent, #e9ad43); display: grid; gap: 1.2rem; inline-size: min(100%, 62rem); margin-inline: auto; border: 1px solid color-mix(in oklch, var(--map-gold) 42%, transparent); border-radius: .8rem; background: linear-gradient(145deg, #201d17, var(--pmx-color-bg, #10100f) 72%); color: var(--pmx-color-fg, #f5ecda); box-shadow: 0 1.2rem 3rem rgb(0 0 0 / .24); padding: clamp(1rem, 4cqi, 2rem); }
.duskmere-map__header { display: flex; align-items: end; justify-content: space-between; gap: 1rem; border-block-end: 1px solid color-mix(in oklch, var(--map-gold) 28%, transparent); padding-block-end: 1rem; }
.duskmere-map__header p, .duskmere-map__header h3, .duskmere-map__header output, .duskmere-map__panels p, .duskmere-map__panels h4, .duskmere-map__panels dl, .duskmere-map__panels dd, .duskmere-map__fallback { margin: 0; }
.duskmere-map__header p, .duskmere-map__panels > article > p { color: var(--pmx-color-link, #f3c969); font-size: .75rem; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }
.duskmere-map__header h3, .duskmere-map__panels h4 { font-family: Georgia, "Times New Roman", var(--pmx-font-heading); line-height: 1.08; }
.duskmere-map__header h3 { margin-block-start: .2rem; font-size: clamp(1.4rem, 1.1rem + 1.2cqi, 2.1rem); }
.duskmere-map__header output { color: var(--pmx-color-muted, #c3b69f); font-size: .86rem; text-align: end; }
.duskmere-map__stage { display: grid; grid-template-columns: minmax(18rem, 1.25fr) minmax(16rem, .75fr); align-items: center; gap: clamp(1rem, 4cqi, 2rem); }
.duskmere-map__drawing { inline-size: 100%; border: 1px solid var(--pmx-color-border, #554a38); border-radius: .65rem; background: #111b1b; }
.duskmere-map__water { fill: #122526; }.duskmere-map__land { fill: #343329; stroke: #857552; stroke-width: 3; }.duskmere-map__road { fill: none; stroke: #9b8a66; stroke-width: 5; stroke-dasharray: 8 9; }
[data-map-marker] circle:first-of-type { fill: #171612; stroke: #c3b69f; stroke-width: 2; transition: fill 150ms ease-out; } [data-map-marker] .duskmere-map__ring { fill: none; stroke: transparent; stroke-width: 5; transition: stroke 150ms ease-out; } [data-map-marker][data-selected="true"] circle:first-of-type { fill: #8b5a16; stroke: #f5ecda; } [data-map-marker][data-selected="true"] .duskmere-map__ring { stroke: var(--map-gold); }
.duskmere-map__number, .duskmere-map__label { fill: #f5ecda; font-family: system-ui, sans-serif; font-weight: 800; }.duskmere-map__number { font-size: 18px; text-anchor: middle; }.duskmere-map__label { font-size: 17px; paint-order: stroke; stroke: #111b1b; stroke-width: 5px; stroke-linejoin: round; }
.duskmere-map__panels > article { display: grid; gap: .7rem; }.duskmere-map__panels > article[hidden] { display: none; }.duskmere-map__panels h4 { font-size: clamp(1.4rem, 1.15rem + 1cqi, 2rem); }.duskmere-map__panels dl { display: grid; gap: .6rem; }.duskmere-map__panels dl > div { border-block-start: 1px solid color-mix(in oklch, var(--map-gold) 22%, transparent); padding-block-start: .55rem; }.duskmere-map__panels dt { color: var(--pmx-color-link, #f3c969); font-size: .72rem; font-weight: 800; text-transform: uppercase; }.duskmere-map__panels dd { margin-block-start: .15rem; line-height: 1.42; }
.duskmere-map__controls { display: grid; grid-template-columns: repeat(5, 1fr); gap: .5rem; margin: 0; border: 0; padding: 0; }.duskmere-map__controls legend { position: absolute; inline-size: 1px; block-size: 1px; overflow: hidden; clip-path: inset(50%); }.duskmere-map__controls button { display: grid; grid-template-columns: 1.6rem 1fr; align-items: center; gap: .35rem; min-block-size: 3rem; border: 1px solid var(--pmx-color-border, #554a38); border-radius: .5rem; background: #171612; color: var(--pmx-color-muted, #c3b69f); cursor: pointer; font: inherit; font-size: .78rem; font-weight: 750; text-align: start; padding: .4rem; }.duskmere-map__controls button span { display: grid; place-items: center; border: 1px solid currentColor; border-radius: 50%; aspect-ratio: 1; }.duskmere-map__controls button[aria-pressed="true"] { border-width: 2px; border-color: var(--map-gold); color: var(--pmx-color-fg, #f5ecda); }.duskmere-map__controls button:focus-visible { outline: 3px solid var(--pmx-color-focus, #ffe29a); outline-offset: 3px; }.duskmere-map__controls button:disabled { cursor: not-allowed; opacity: .64; }:self[data-ready="true"] .duskmere-map__controls button { opacity: 1; }
.duskmere-map__fallback { border-inline-start: .25rem solid var(--map-gold); color: var(--pmx-color-muted, #c3b69f); font-size: .9rem; padding-inline-start: .8rem; }
@media (hover: hover) and (pointer: fine) { :self[data-ready="true"] .duskmere-map__controls button:hover { border-color: var(--pmx-color-link, #f3c969); color: var(--pmx-color-fg, #f5ecda); } }
@container pathmx-runtime (max-width: 42rem) { .duskmere-map__header { display: grid; }.duskmere-map__header output { text-align: start; }.duskmere-map__stage { grid-template-columns: 1fr; }.duskmere-map__drawing { max-block-size: 24rem; }.duskmere-map__controls { grid-template-columns: 1fr 1fr; } }
@container pathmx-runtime (max-width: 30rem) { .duskmere-map__label { display: none; }.duskmere-map__controls { grid-template-columns: 1fr; } }
@media (prefers-reduced-motion: reduce) { [data-map-marker] circle, .duskmere-map__controls button { transition: none; } }
@media (forced-colors: active) { :self, .duskmere-map__drawing { border-color: CanvasText; background: Canvas; color: CanvasText; box-shadow: none; }.duskmere-map__water, .duskmere-map__land { fill: Canvas; stroke: CanvasText; }.duskmere-map__road { stroke: CanvasText; }[data-map-marker] circle:first-of-type { fill: ButtonFace; stroke: ButtonText; }[data-map-marker][data-selected="true"] circle:first-of-type { fill: Highlight; stroke: HighlightText; }[data-map-marker][data-selected="true"] .duskmere-map__ring { stroke: CanvasText; }.duskmere-map__number, .duskmere-map__label { fill: CanvasText; stroke: Canvas; } }
@media print { :self, .duskmere-map__drawing { border-color: black; background: transparent; color: black; box-shadow: none; }.duskmere-map__controls, .duskmere-map__header output, .duskmere-map__fallback { display: none; }.duskmere-map__panels > article[hidden] { display: grid; } }
```

## JavaScript

```js
const places = ['crooked-jetty', 'saint-orras-bell', 'glasshouse', 'wickkeeper-hall', 'sunken-road']
const labels = { 'crooked-jetty': 'The Crooked Jetty', 'saint-orras-bell': "Saint Orra's Bell", 'glasshouse': 'The Glasshouse', 'wickkeeper-hall': 'Wickkeeper Hall', 'sunken-road': 'The Sunken Road' }
const controls = $$('[data-map-state]'), panels = $$('[data-map-panel]'), markers = $$('[data-map-marker]')
const status = $('[data-map-status]'), fallback = $('[data-map-fallback]')
function currentIndex() { return Math.max(0, places.indexOf(state.get())) }
function selectPlace(name) { if (places.includes(name)) state.set(name) }
function publishActions() { const index = currentIndex(); try { ctx.play.actions.set([
  { id: 'previous-duskmere-place', label: 'Previous place', disabled: index === 0, run: function () { selectPlace(places[Math.max(0, currentIndex() - 1)]) } },
  { id: 'next-duskmere-place', label: 'Next place', disabled: index === places.length - 1, run: function () { selectPlace(places[Math.min(places.length - 1, currentIndex() + 1)]) } },
]) } catch (error) { /* Direct controls remain available. */ } }
function sync() { const current = state.get(); if (!places.includes(current)) { state.set(places[0]); return }
  markers.forEach(function (marker) { marker.dataset.selected = marker.dataset.mapMarker === current ? 'true' : 'false' })
  panels.forEach(function (panel) { panel.hidden = panel.dataset.mapPanel !== current })
  controls.forEach(function (button) { button.setAttribute('aria-pressed', button.dataset.mapState === current ? 'true' : 'false') })
  status.textContent = `Location ${currentIndex() + 1} of ${places.length} · ${labels[current]}`; publishActions()
}
controls.forEach(function (button) { button.disabled = false; on(button, 'click', function () { selectPlace(button.dataset.mapState) }) })
fallback.hidden = true; el.dataset.ready = 'true'
ctx.cleanup(function () { try { ctx.play.actions.clear() } catch (error) { /* Browse mode. */ } })
state.on(sync); sync()
```
