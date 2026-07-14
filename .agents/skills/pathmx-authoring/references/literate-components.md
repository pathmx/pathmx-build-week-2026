# PathMX Literate Components

Use this reference for `.component.md`, `.components.md`, custom tags, and
component authoring review.

## Component Sources

The literate plugin expands component definitions from:

- `*.component.md` for one component;
- `*.components.md` for one or more components;
- sources with `parseComponents: true` when a project intentionally opts in.

Each component definition is a PathMX block with:

- one `html` fence for the template;
- optional `css` fences for instance styles;
- optional `js` or `javascript` fences for instance scripts.

Multi-component files should read like literate programs: prose explains the
authoring contract, then the implementation fences show how it works.

## Names

Component names resolve in this order:

1. block-level `componentName`;
2. source-level `componentName` for single-definition component sources;
3. filename for `*.component.md` and one-definition `*.components.md`;
4. block `title`, then first heading, for multi-definition `.components.md`
   files.

Prefer stable names. Editing a heading should not unexpectedly rename a tag
that other sources use.

## Definition Shape

````md
# Flashcard

Interactive wrapper for front/back faces.

Props:

- `label`: accessible label
- `ar`: CSS aspect ratio, default `4 / 3`

## HTML

```html
<article class="flashcard" states="front | back" role="button" tabindex="0">
  <yield />
</article>
```

## CSS

```css
:self {
  display: block;
}

:self[data-state="back"] {
  transform: rotateY(180deg);
}
```

## JavaScript

```js
on(el, "click", function () {
  state.set(state.get() === "back" ? "front" : "back")
})
```
````

## Templates

The `html` fence is the component template. Usage attributes become props, and
`<yield />` receives authored children.

```html
<section class="callout" aria-label="{{ label: Note }}">
  <yield />
</section>
```

Keep the generated HTML semantic. Use normal accessibility attributes and
button/input elements where interactions require them.

## CSS

Component CSS is scoped to rendered roots for that component.

- Use `:self` for the component root.
- Use ordinary selectors for descendants.
- Use `@dark` and `@light` for color-mode overrides.
- Prefer container queries against the PathMX runtime container when layout
  should respond to embedded/player panes instead of the full viewport.

```css
:self {
  --card-bg: white;
  display: grid;
  gap: 0.75rem;
}

@dark {
  :self {
    --card-bg: oklch(0.2 0.02 250);
  }
}
```

PathMX lowers `:self` and wraps component styles. Authors should not hand-write
the internal runtime color-scheme attributes.

## JavaScript

Instance scripts run once per rendered component root. Do not write page-level
`querySelectorAll` loops or init guards.

Available locals:

- `el`: current component root;
- `$`: `el.querySelector(selector)`;
- `$$`: `Array.from(el.querySelectorAll(selector))`;
- `on`: event helper with component-scoped missing-target errors;
- `state`: component state helper for declared `states`;
- `ctx.attrs`: authored attributes copied from the rendered root;
- `ctx.props`: definition defaults merged with authored attributes;
- `ctx.assets`: named asset resources with emitted `url` values;
- `ctx.data`: named data resources with cached `text()`, `json()`, and
  `bytes()` readers;
- `ctx.morph(target, next, options?)`: component-local DOM patch helper;
- `ctx.transition(update, options?)`: View Transition wrapper with fallback;
- `ctx.effect(setup, { when })`: restartable continuous-work scope for
  `visible` or `presented` components;
- `ctx.state(initial)`: private, browser-local state for this component
  instance;
- `ctx.cleanup(fn)`: cleanup for timers, observers, global listeners, and
  library disposers.

```js
const button = $("[data-action]")

on(button, "click", function () {
  ctx.transition(function () {
    el.toggleAttribute("data-open")
  })
})

const timer = setInterval(tick, 1000)
ctx.cleanup(function () {
  clearInterval(timer)
})
```

Keep scripts component-owned. They should not reach across the page unless the
component's authoring contract explicitly says it owns that external behavior.

`state` and `ctx.state(...)` are different. Use `state` for a named state that
the Player should observe or traverse. Use `ctx.state(...)` for private
implementation data such as counters, cached selections, or handles. Neither
is durable learner evidence.

Use `ctx.effect(..., { when: "presented" })` for animation frames, intervals,
audio, or library loops that should stop offscreen or off-Beat. `visible`
means connected, intersecting, and in a visible document. `presented` means
visible in browse mode, or visible and active in Play. The scope signal aborts
before cleanup; setup restarts without overlap. Reduced-motion behavior stays
an authored decision.

A rendered block-level component root owns its component Beat and receives
`pathmx:beat-enter`, `pathmx:beat-exit`, and `pathmx:play-step` directly. Do
not add sibling Beat-host lookups or a page-level Player query.

## Component State And Play

The `states` attribute declares a component state domain.

```html
<div class="tabs" states="html, css, js">
  <yield />
</div>
```

- `states="front | back"` is an ordered sequence. Play can traverse the states
  as step beats.
- `states="html, css, js"` is an unordered set. Play surfaces choices but does
  not step through them in order.
- Do not mix `|` and `,` in one states value.
- State names should be stable, short, and meaningful.
- Omitted `initial-state` selects the first name. `initial-state=""` starts
  empty; `state.get()` returns `null` and `state.set(null)` clears it.

Use `state.get()`, `state.set(name)`, `state.on(handler)`, and
`state.declare(states, { initial?: string | null })` for runtime-declared
domains. Empty scalar state is never another Player choice. Do not model
multi-select as a comma-joined scalar value.

Local ESM dependencies should be ordinary linked assets:

```md
[@asset.renderer]: ./vendor/renderer.bundle.js
```

```js
const renderer = await import(ctx.assets.renderer.url)
```

Native import shares the content-derived emitted URL. Do not invent
`window.__pathmx*` caches or a `ctx.modules` API.

## Blocks, Beats, And Component Pacing

A component does not replace source pacing. The containing block should still
represent one coherent learner or reviewer move. Use ordered component states
or explicit nested Beats when the interaction has meaningful stages that
should appear in the Player route. Keep purely visual micro-state private.

Large simulations and 3D scenes need a readable entry, an observable learning
goal, and a clear way to leave the component. A full-screen canvas with all
teaching logic hidden inside its JavaScript is not a well-paced PathMX source.

## Review Checklist

- Source role is `.component.md` or `.components.md`.
- Each definition has a clear prose contract before implementation fences.
- Component names are stable and not accidentally heading-dependent.
- CSS uses `:self`, `@dark`, and `@light` instead of internal runtime hooks.
- JS uses instance locals instead of scanning the whole document.
- Lifetime listeners/resources are cleaned up with `ctx.cleanup`; continuous
  work that should pause uses `ctx.effect`.
- Component state is declared through `states` or `state.declare`, not ad hoc
  parallel state if play should understand it.
- The containing block has one clear learning/review move, and meaningful
  component stages remain addressable in Play.
- Play lifecycle behavior is verified on the component root and off-Beat work
  schedules no frames or intervals.
