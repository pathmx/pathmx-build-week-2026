---
title: Session Spine
description: A four-part session model that bends around player choice.
componentName: session-spine
---

# Session Spine

Use `<session-spine>` to rehearse a first session as a causal structure rather
than a required scene order.

## Experience brief

- **Thesis:** A prepared session can bend around a chosen lead without losing
  its opening, human stakes, or responsive ending.
- **Arrival:** Four moments remain visible; the opening change is selected.
- **Anti-targets:** Not a scene checklist, flowchart maze, or plot lock.
- **Arc:** Inspect change, need, leads, and response; choose a lead; observe the
  corresponding faction move and next decision.
- **Protected invariants:** The same opening supports every lead, the ignored
  faction acts, and every response opens another choice.
- **Degradation:** Remove transitions and the horizontal spine first; preserve
  all moments, lead-response mappings, controls, and static outline.

The four moments are ordered Player-visible state. The chosen lead is private,
browser-local rehearsal state; neither is durable evidence. Without JavaScript,
the complete outline and all response mappings remain readable.

## HTML

```html
<section class="session-spine" states="change | need | leads | response" initial-state="change" aria-labelledby="session-spine-title">
  <header class="session-spine__header"><div><p>Session rehearsal</p><h3 id="session-spine-title">A spine that bends without breaking</h3></div><output data-session-status aria-live="polite">Moment 1 of 4 · Visible change</output></header>
  <nav class="session-spine__steps" aria-label="Session moments">
    <button type="button" data-session-state="change" aria-pressed="true" disabled><span>1</span>Visible change</button>
    <button type="button" data-session-state="need" aria-pressed="false" disabled><span>2</span>Person in need</button>
    <button type="button" data-session-state="leads" aria-pressed="false" disabled><span>3</span>Three leads</button>
    <button type="button" data-session-state="response" aria-pressed="false" disabled><span>4</span>World response</button>
  </nav>

  <div class="session-spine__panels">
    <article data-session-panel="change"><p>Moment one · Make waiting impossible</p><h4>The harbor lantern turns black.</h4><p>During the arrival festival, a boat crashes into the Crooked Jetty. The situation visibly changes before anyone asks the heroes to care.</p><dl><div><dt>Reusable prep</dt><dd>A public celebration, a dead light, and a wreck.</dd></div><div><dt>Do not prepare</dt><dd>Which lead the party must follow afterward.</dd></div></dl></article>
    <article data-session-panel="need"><p>Moment two · Give pressure a face</p><h4>A courier is trapped under the wreckage.</h4><p>Something circles beneath the boards. Saving the courier reveals a sealed message addressed to one character.</p><dl><div><dt>Reusable prep</dt><dd>The courier's fear, the unstable wreck, and the sealed message.</dd></div><div><dt>Do not prepare</dt><dd>The single correct rescue method.</dd></div></dl></article>
    <article data-session-panel="leads"><p>Moment three · Point in three directions</p><h4>Choose the lead the party follows first.</h4><div class="session-spine__leads" role="group" aria-label="Choose the party's lead"><button type="button" data-lead="hall" aria-pressed="true" disabled>Footprints → Wickkeeper Hall</button><button type="button" data-lead="glasshouse" aria-pressed="false" disabled>Question alchemist → Glasshouse</button><button type="button" data-lead="bell" aria-pressed="false" disabled>Deliver message → Saint Orra's Bell</button></div><p class="session-spine__hint">The lead is a rehearsal choice. Advance to World response to see what the ignored factions do.</p></article>
    <article data-session-panel="response"><p>Moment four · Let the world answer</p><h4 data-response-heading>The Reed Council installs an untested beacon.</h4><dl><div><dt>Party chose</dt><dd data-response-choice>Follow the footprints to Wickkeeper Hall.</dd></div><div><dt>World answered</dt><dd data-response-world>The Reed Council acts while attention is elsewhere.</dd></div><div><dt>Next decision</dt><dd data-response-next>Stop the beacon test or learn whose name entered the succession book?</dd></div></dl></article>
  </div>
  <p class="session-spine__fallback" data-session-fallback>Static rehearsal: read the four moments above. Hall leads to the Reed Council's beacon; Glasshouse leads to the Wickkeepers naming a successor; the Bell leads to the Drowned Court opening the Sunken Road.</p>
</section>
```

## CSS

```css
:self { --spine-gold: var(--pmx-color-accent, #e9ad43); display: grid; gap: 1.2rem; inline-size: min(100%, 60rem); margin-inline: auto; border: 1px solid color-mix(in oklch, var(--spine-gold) 42%, transparent); border-radius: .8rem; background: linear-gradient(145deg, #201d17, var(--pmx-color-bg, #10100f) 72%); color: var(--pmx-color-fg, #f5ecda); box-shadow: 0 1.2rem 3rem rgb(0 0 0 / .24); padding: clamp(1rem, 4cqi, 2rem); }
.session-spine__header { display: flex; align-items: end; justify-content: space-between; gap: 1rem; border-block-end: 1px solid color-mix(in oklch, var(--spine-gold) 28%, transparent); padding-block-end: 1rem; }.session-spine__header p, .session-spine__header h3, .session-spine__header output, .session-spine__panels p, .session-spine__panels h4, .session-spine__panels dl, .session-spine__panels dd, .session-spine__fallback { margin: 0; }.session-spine__header p, .session-spine__panels > article > p:first-child { color: var(--pmx-color-link, #f3c969); font-size: .75rem; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }.session-spine__header h3, .session-spine__panels h4 { font-family: Georgia, "Times New Roman", var(--pmx-font-heading); line-height: 1.08; }.session-spine__header h3 { margin-block-start: .2rem; font-size: clamp(1.4rem, 1.1rem + 1.2cqi, 2.1rem); }.session-spine__header output { color: var(--pmx-color-muted, #c3b69f); font-size: .86rem; text-align: end; }
.session-spine__steps { position: relative; display: grid; grid-template-columns: repeat(4, 1fr); gap: .6rem; }.session-spine__steps::before { position: absolute; inset: 1.45rem 10% auto; block-size: 2px; background: color-mix(in oklch, var(--spine-gold) 34%, transparent); content: ""; }.session-spine__steps button { z-index: 1; display: grid; justify-items: center; gap: .35rem; min-block-size: 4.6rem; border: 0; background: transparent; color: var(--pmx-color-muted, #c3b69f); cursor: pointer; font: inherit; font-size: .78rem; font-weight: 760; }.session-spine__steps button span { display: grid; place-items: center; inline-size: 3rem; block-size: 3rem; border: 1px solid var(--pmx-color-border, #554a38); border-radius: 50%; background: #171612; font-size: 1rem; }.session-spine__steps button[aria-pressed="true"] { color: var(--pmx-color-fg, #f5ecda); }.session-spine__steps button[aria-pressed="true"] span { border: 3px solid var(--spine-gold); }.session-spine__steps button:focus-visible, .session-spine__leads button:focus-visible { outline: 3px solid var(--pmx-color-focus, #ffe29a); outline-offset: 3px; }.session-spine__steps button:disabled, .session-spine__leads button:disabled { cursor: not-allowed; opacity: .64; }:self[data-ready="true"] button { opacity: 1; }
.session-spine__panels > article { display: grid; gap: .85rem; border-block-start: 1px solid color-mix(in oklch, var(--spine-gold) 24%, transparent); padding-block-start: 1rem; }.session-spine__panels > article[hidden] { display: none; }.session-spine__panels h4 { font-size: clamp(1.4rem, 1.1rem + 1cqi, 2rem); }.session-spine__panels > article > p:not(:first-child), .session-spine__hint { color: var(--pmx-color-muted, #c3b69f); line-height: 1.5; }.session-spine__panels dl { display: grid; gap: .65rem; }.session-spine__panels dl > div { display: grid; grid-template-columns: 8rem 1fr; gap: .7rem; border-block-start: 1px solid color-mix(in oklch, var(--spine-gold) 20%, transparent); padding-block-start: .55rem; }.session-spine__panels dt { color: var(--pmx-color-link, #f3c969); font-size: .74rem; font-weight: 800; text-transform: uppercase; }.session-spine__leads { display: grid; grid-template-columns: repeat(3, 1fr); gap: .55rem; }.session-spine__leads button { min-block-size: 3.5rem; border: 1px solid var(--pmx-color-border, #554a38); border-radius: .5rem; background: #171612; color: var(--pmx-color-muted, #c3b69f); cursor: pointer; font: inherit; font-size: .82rem; font-weight: 740; padding: .6rem; }.session-spine__leads button[aria-pressed="true"] { border-width: 2px; border-color: var(--spine-gold); color: var(--pmx-color-fg, #f5ecda); }.session-spine__fallback { border-inline-start: .25rem solid var(--spine-gold); color: var(--pmx-color-muted, #c3b69f); font-size: .9rem; padding-inline-start: .8rem; }
@media (hover: hover) and (pointer: fine) { :self[data-ready="true"] button:hover { color: var(--pmx-color-fg, #f5ecda); } }
@container pathmx-runtime (max-width: 38rem) { .session-spine__header { display: grid; }.session-spine__header output { text-align: start; }.session-spine__steps { grid-template-columns: 1fr; }.session-spine__steps::before { inset: 1.5rem auto 1.5rem 1.5rem; inline-size: 2px; block-size: auto; }.session-spine__steps button { grid-template-columns: 3rem 1fr; justify-items: start; align-items: center; min-block-size: 3.2rem; text-align: start; }.session-spine__leads { grid-template-columns: 1fr; }.session-spine__panels dl > div { grid-template-columns: 1fr; gap: .15rem; } }
@media (prefers-reduced-motion: reduce) { .session-spine__steps button, .session-spine__leads button { transition: none; } }
@media (forced-colors: active) { :self { border-color: CanvasText; background: Canvas; color: CanvasText; box-shadow: none; }.session-spine__steps::before { background: CanvasText; }.session-spine__steps button[aria-pressed="true"] span, .session-spine__leads button[aria-pressed="true"] { border-color: Highlight; } }
@media print { :self { border-color: black; background: transparent; color: black; box-shadow: none; }.session-spine__steps, .session-spine__header output, .session-spine__fallback { display: none; }.session-spine__panels > article[hidden] { display: grid; } }
```

## JavaScript

```js
const moments = ['change', 'need', 'leads', 'response']
const momentLabels = { change: 'Visible change', need: 'Person in need', leads: 'Three leads', response: 'World response' }
const local = ctx.state(function () { return { lead: 'hall' } })
const responses = {
  hall: { choice: 'Follow the footprints to Wickkeeper Hall.', heading: 'The Reed Council installs an untested beacon.', world: 'The Reed Council acts while attention is elsewhere.', next: "Stop the beacon test or learn whose name entered the succession book?" },
  glasshouse: { choice: 'Question the alchemist at the Glasshouse.', heading: 'The Wickkeepers name a successor without consent.', world: 'The Wickkeepers act while the beacon is investigated.', next: 'Challenge the succession or expose the beacon runoff?' },
  bell: { choice: "Deliver the courier's message to Saint Orra's Bell.", heading: 'The Drowned Court opens the Sunken Road.', world: 'The Court demands the final flame for safe passage.', next: 'Accept the bargain, defend the road, or warn the town?' },
}
const controls = $$('[data-session-state]'), panels = $$('[data-session-panel]'), leadControls = $$('[data-lead]')
const status = $('[data-session-status]'), fallback = $('[data-session-fallback]')
function currentIndex() { return Math.max(0, moments.indexOf(state.get())) }
function selectMoment(name) { if (moments.includes(name)) state.set(name) }
function reset() { local.lead = 'hall'; selectMoment('change'); sync() }
function publishActions() { const index = currentIndex(); try { ctx.play.actions.set([
  { id: 'previous-session-moment', label: 'Previous moment', disabled: index === 0, run: function () { selectMoment(moments[Math.max(0, currentIndex() - 1)]) } },
  { id: 'next-session-moment', label: 'Next moment', disabled: index === moments.length - 1, run: function () { selectMoment(moments[Math.min(moments.length - 1, currentIndex() + 1)]) } },
  { id: 'reset-session-spine', label: 'Reset session', disabled: index === 0 && local.lead === 'hall', run: reset },
]) } catch (error) { /* Direct controls remain available. */ } }
function sync() { const current = state.get(); if (!moments.includes(current)) { state.set(moments[0]); return }
  panels.forEach(function (panel) { panel.hidden = panel.dataset.sessionPanel !== current })
  controls.forEach(function (button) { button.setAttribute('aria-pressed', button.dataset.sessionState === current ? 'true' : 'false') })
  leadControls.forEach(function (button) { button.setAttribute('aria-pressed', button.dataset.lead === local.lead ? 'true' : 'false') })
  const response = responses[local.lead]; $('[data-response-heading]').textContent = response.heading; $('[data-response-choice]').textContent = response.choice; $('[data-response-world]').textContent = response.world; $('[data-response-next]').textContent = response.next
  status.textContent = `Moment ${currentIndex() + 1} of ${moments.length} · ${momentLabels[current]}`; publishActions()
}
controls.forEach(function (button) { button.disabled = false; on(button, 'click', function () { selectMoment(button.dataset.sessionState) }) })
leadControls.forEach(function (button) { button.disabled = false; on(button, 'click', function () { local.lead = button.dataset.lead; sync() }) })
fallback.hidden = true; el.dataset.ready = 'true'
ctx.cleanup(function () { try { ctx.play.actions.clear() } catch (error) { /* Browse mode. */ } })
state.on(sync); sync()
```
