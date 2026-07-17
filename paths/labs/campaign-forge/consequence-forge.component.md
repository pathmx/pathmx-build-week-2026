---
title: Consequence Forge
description: A deterministic comparison of three rulings that keep a failed rescue moving.
componentName: consequence-forge
---

# Consequence Forge

Use `<consequence-forge>` to compare three rulings for the same rescue. This is
a reasoning instrument, not a random result generator.

## Experience brief

- **Thesis:** A ruling moves play forward when something resolves, the world
  changes, and a new choice opens.
- **Arrival:** All three outcome types are visible; straightforward success is
  selected and evaluated with the same three prompts as the others.
- **Anti-targets:** Not a dice roller, punishment table, outcome ranking, or
  random encounter generator.
- **Arc:** Compare success, success at a cost, and a changed situation; notice
  that none requires repeating the same attempt.
- **Protected invariants:** Every result resolves something, changes the world,
  and opens a consequential choice.
- **Degradation:** Remove transitions and columns first; preserve all outcomes,
  prompts, controls, and the static comparison.

The ordered outcome state is ephemeral comparison, not durable evidence.
Without JavaScript, all three outcome articles remain readable.

## HTML

```html
<section class="consequence-forge" states="success | cost | changed" initial-state="success" aria-labelledby="consequence-title">
  <header class="consequence-forge__header"><div><p>Failure-forward instrument</p><h3 id="consequence-title">Forge the next decision</h3></div><output data-consequence-status aria-live="polite">Outcome 1 of 3 · Success</output></header>
  <div class="consequence-forge__controls" role="group" aria-label="Compare rescue outcomes">
    <button type="button" data-consequence-state="success" aria-pressed="true" disabled><span>1</span><strong>Success</strong><small>Clean resolution</small></button>
    <button type="button" data-consequence-state="cost" aria-pressed="false" disabled><span>2</span><strong>Success at a cost</strong><small>Trade one good for another</small></button>
    <button type="button" data-consequence-state="changed" aria-pressed="false" disabled><span>3</span><strong>Changed situation</strong><small>Failure creates new leverage</small></button>
  </div>

  <div class="consequence-forge__panels">
    <article data-consequence-panel="success"><p>Outcome one · Success</p><h4>The courier and sealed message are saved.</h4><dl><div><dt>What resolves</dt><dd>The creature withdraws and the rescue ends.</dd></div><div><dt>What changes</dt><dd>The party now possesses a message addressed to one character.</dd></div><div><dt>Next decision</dt><dd>Follow the footprints, question the alchemist, or carry the message to the Bell?</dd></div></dl></article>
    <article data-consequence-panel="cost"><p>Outcome two · Success at a cost</p><h4>The courier is saved; the message sinks into the marsh.</h4><dl><div><dt>What resolves</dt><dd>The trapped courier reaches safety.</dd></div><div><dt>What changes</dt><dd>The party loses the one object that could verify the courier's account.</dd></div><div><dt>Next decision</dt><dd>Recover the message or trust the courier's memory of its contents?</dd></div></dl></article>
    <article data-consequence-panel="changed"><p>Outcome three · Changed situation</p><h4>An alchemical beacon drives the creature off.</h4><dl><div><dt>What resolves</dt><dd>The immediate danger ends, but not through the party's rescue.</dd></div><div><dt>What changes</dt><dd>The Reed Council takes the courier and message into custody.</dd></div><div><dt>Next decision</dt><dd>Bargain with the Council, stage a rescue, or abandon this lead?</dd></div></dl></article>
  </div>

  <ul class="consequence-forge__invariants" aria-label="Checks every useful consequence passes"><li><span aria-hidden="true">✓</span> Something resolves</li><li><span aria-hidden="true">✓</span> The world changes</li><li><span aria-hidden="true">✓</span> A new choice opens</li></ul>
  <p class="consequence-forge__fallback" data-consequence-fallback>Static comparison: all three rulings above move the rescue forward. Compare what resolves, what changes, and the decision each outcome opens.</p>
</section>
```

## CSS

```css
:self { --forge-gold: var(--pmx-color-accent, #e9ad43); display: grid; gap: 1.2rem; inline-size: min(100%, 58rem); margin-inline: auto; border: 1px solid color-mix(in oklch, var(--forge-gold) 42%, transparent); border-radius: .8rem; background: linear-gradient(145deg, #201d17, var(--pmx-color-bg, #10100f) 72%); color: var(--pmx-color-fg, #f5ecda); box-shadow: 0 1.2rem 3rem rgb(0 0 0 / .24); padding: clamp(1rem, 4cqi, 2rem); }
.consequence-forge__header { display: flex; align-items: end; justify-content: space-between; gap: 1rem; border-block-end: 1px solid color-mix(in oklch, var(--forge-gold) 28%, transparent); padding-block-end: 1rem; }.consequence-forge__header p, .consequence-forge__header h3, .consequence-forge__header output, .consequence-forge__panels p, .consequence-forge__panels h4, .consequence-forge__panels dl, .consequence-forge__panels dd, .consequence-forge__invariants, .consequence-forge__fallback { margin: 0; }.consequence-forge__header p, .consequence-forge__panels > article > p { color: var(--pmx-color-link, #f3c969); font-size: .75rem; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }.consequence-forge__header h3, .consequence-forge__panels h4 { font-family: Georgia, "Times New Roman", var(--pmx-font-heading); line-height: 1.08; }.consequence-forge__header h3 { margin-block-start: .2rem; font-size: clamp(1.4rem, 1.1rem + 1.2cqi, 2.1rem); }.consequence-forge__header output { color: var(--pmx-color-muted, #c3b69f); font-size: .86rem; text-align: end; }
.consequence-forge__controls { display: grid; grid-template-columns: repeat(3, 1fr); gap: .6rem; }.consequence-forge__controls button { display: grid; grid-template-columns: 2rem 1fr; grid-template-rows: auto auto; column-gap: .55rem; min-block-size: 4.5rem; border: 1px solid var(--pmx-color-border, #554a38); border-radius: .55rem; background: #171612; color: var(--pmx-color-muted, #c3b69f); cursor: pointer; font: inherit; text-align: start; padding: .65rem; }.consequence-forge__controls button > span { grid-row: 1 / 3; display: grid; place-items: center; align-self: center; inline-size: 2rem; block-size: 2rem; border: 1px solid currentColor; border-radius: 50%; }.consequence-forge__controls strong { color: inherit; font-size: .9rem; }.consequence-forge__controls small { color: inherit; font-size: .73rem; }.consequence-forge__controls button[aria-pressed="true"] { border-width: 2px; border-color: var(--forge-gold); color: var(--pmx-color-fg, #f5ecda); }.consequence-forge__controls button:focus-visible { outline: 3px solid var(--pmx-color-focus, #ffe29a); outline-offset: 3px; }.consequence-forge__controls button:disabled { cursor: not-allowed; opacity: .64; }:self[data-ready="true"] .consequence-forge__controls button { opacity: 1; }
.consequence-forge__panels > article { display: grid; gap: .85rem; border-block-start: 1px solid color-mix(in oklch, var(--forge-gold) 24%, transparent); padding-block-start: 1rem; }.consequence-forge__panels > article[hidden] { display: none; }.consequence-forge__panels h4 { font-size: clamp(1.4rem, 1.1rem + 1cqi, 2rem); }.consequence-forge__panels dl { display: grid; grid-template-columns: repeat(3, 1fr); gap: .75rem; }.consequence-forge__panels dl > div { border-inline-start: 2px solid var(--forge-gold); padding-inline-start: .7rem; }.consequence-forge__panels dt { color: var(--pmx-color-link, #f3c969); font-size: .73rem; font-weight: 800; text-transform: uppercase; }.consequence-forge__panels dd { margin-block-start: .25rem; line-height: 1.45; }
.consequence-forge__invariants { display: grid; grid-template-columns: repeat(3, 1fr); gap: .5rem; padding: 0; list-style: none; }.consequence-forge__invariants li { border: 1px solid var(--pmx-color-border, #554a38); border-radius: 999px; color: var(--pmx-color-muted, #c3b69f); font-size: .8rem; font-weight: 720; text-align: center; padding: .45rem; }.consequence-forge__invariants span { color: var(--pmx-color-link, #f3c969); }.consequence-forge__fallback { border-inline-start: .25rem solid var(--forge-gold); color: var(--pmx-color-muted, #c3b69f); font-size: .9rem; padding-inline-start: .8rem; }
@media (hover: hover) and (pointer: fine) { :self[data-ready="true"] .consequence-forge__controls button:hover { border-color: var(--pmx-color-link, #f3c969); color: var(--pmx-color-fg, #f5ecda); } }
@container pathmx-runtime (max-width: 38rem) { .consequence-forge__header { display: grid; }.consequence-forge__header output { text-align: start; }.consequence-forge__controls, .consequence-forge__panels dl, .consequence-forge__invariants { grid-template-columns: 1fr; } }
@media (prefers-reduced-motion: reduce) { .consequence-forge__controls button { transition: none; } }
@media (forced-colors: active) { :self { border-color: CanvasText; background: Canvas; color: CanvasText; box-shadow: none; }.consequence-forge__controls button[aria-pressed="true"] { border-color: Highlight; }.consequence-forge__invariants span { color: CanvasText; } }
@media print { :self { border-color: black; background: transparent; color: black; box-shadow: none; }.consequence-forge__controls, .consequence-forge__header output, .consequence-forge__fallback { display: none; }.consequence-forge__panels > article[hidden] { display: grid; } }
```

## JavaScript

```js
const outcomes = ['success', 'cost', 'changed']
const labels = { success: 'Success', cost: 'Success at a cost', changed: 'Changed situation' }
const controls = $$('[data-consequence-state]'), panels = $$('[data-consequence-panel]')
const status = $('[data-consequence-status]'), fallback = $('[data-consequence-fallback]')
function currentIndex() { return Math.max(0, outcomes.indexOf(state.get())) }
function selectOutcome(name) { if (outcomes.includes(name)) state.set(name) }
function reset() { selectOutcome('success') }
function publishActions() { const index = currentIndex(); try { ctx.play.actions.set([
  { id: 'previous-consequence', label: 'Previous outcome', disabled: index === 0, run: function () { selectOutcome(outcomes[Math.max(0, currentIndex() - 1)]) } },
  { id: 'next-consequence', label: 'Next outcome', disabled: index === outcomes.length - 1, run: function () { selectOutcome(outcomes[Math.min(outcomes.length - 1, currentIndex() + 1)]) } },
  { id: 'reset-consequence', label: 'Reset comparison', disabled: index === 0, run: reset },
]) } catch (error) { /* Direct controls remain available. */ } }
function sync() { const current = state.get(); if (!outcomes.includes(current)) { state.set(outcomes[0]); return }
  panels.forEach(function (panel) { panel.hidden = panel.dataset.consequencePanel !== current })
  controls.forEach(function (button) { button.setAttribute('aria-pressed', button.dataset.consequenceState === current ? 'true' : 'false') })
  status.textContent = `Outcome ${currentIndex() + 1} of ${outcomes.length} · ${labels[current]}`; publishActions()
}
controls.forEach(function (button) { button.disabled = false; on(button, 'click', function () { selectOutcome(button.dataset.consequenceState) }) })
fallback.hidden = true; el.dataset.ready = 'true'
ctx.cleanup(function () { try { ctx.play.actions.clear() } catch (error) { /* Browse mode. */ } })
state.on(sync); sync()
```
