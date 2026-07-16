# PathMX Literate Components

Use this reference for `.component.md`, `.components.md`, custom tags, and
component authoring review.

## Contents

- Definition sources and names
- Templates and usage
- Styles and resources
- Instance script API
- State and lifecycle
- Player Context Actions
- Pacing, boundaries, and review

## Definition Sources And Names

PathMX discovers definitions in:

- `*.component.md` for one component;
- `*.components.md` for one or more components;
- a Source with `parseComponents: true` when a project opts in explicitly.

Define one component per PathMX Block with:

- exactly one `html` fence;
- zero or more `css` fences or named `[@styles.*]` resources;
- zero or more `js`/`javascript` fences or named `[@script.*]` resources;
- optional named `[@asset.*]` and `[@data.*]` resources.

Write the Source as a literate program: explain purpose, inputs, slots, behavior,
and failure modes before or beside the implementation fences.

Resolve names in this order:

1. Block `componentName`;
2. Source `componentName` for a single definition;
3. the type-hinted filename for `.component.md` or a one-definition
   `.components.md` Source;
4. Block `title`, then its first heading, in a multi-definition Source.

Prefer explicit or filename-stable names for exported components. Do not let a
presentation-heading edit accidentally rename a widely used tag.

## Templates And Usage

Use semantic, accessible HTML for the template:

````md
# Disclosure Card

Use `<disclosure-card>` for a short expandable explanation.

```html
<article class="disclosure-card" aria-label="{{ label: Details }}">
  <button type="button" data-toggle>Toggle</button>
  <div data-body><yield /></div>
</article>
```
````

Usage attributes become template props and are copied to the rendered root:

```md
<disclosure-card label="Why this works">
  The median depends on position, not the size of the outlier.
</disclosure-card>
```

Use `{{ name }}` for a prop value and `{{ name: fallback }}` for a template
default. `<yield />` receives ordinary children. Use named slots when the
contract needs separate regions:

```html
<article><header><slot name="header" /></header><slot /></article>
```

```md
<slotted-card>
  <slot name="header">Summary</slot>
  Card body.
</slotted-card>
```

Keep yielded content useful without JavaScript. Use native buttons, links,
inputs, labels, landmarks, and ARIA before recreating their behavior.

## Styles And Resources

Component CSS is scoped to rendered roots of that component:

```css
:self {
  display: grid;
  gap: 0.75rem;
}

[data-body] {
  min-inline-size: 0;
}

@dark {
  :self {
    color-scheme: dark;
  }
}

@container pathmx-runtime (max-width: 36rem) {
  :self {
    gap: 0.5rem;
  }
}
```

- Use `:self` for the component root and ordinary selectors for descendants.
- Use `@dark` and `@light` instead of PathMX's internal color-scheme hooks.
- Prefer the `pathmx-runtime` container when layout should follow an embedded,
  split, or focused content surface rather than the browser viewport.
- Do not rely on Player DOM structure or generated `data-pmx-*` attributes.

Declare local resources in the definition Block:

```md
[@styles.layout]: ./layout.css
[@script.behavior]: ./behavior.js
[@asset.renderer]: ./vendor/renderer.js
[@data.samples]: ./samples.json
```

Fenced and linked styles/scripts run in authored order. Read assets through
`ctx.assets.name.url`. Read data asynchronously through cached
`ctx.data.name.text()`, `.json()`, or `.bytes()`.

Treat `[@script.*]` as component implementation chunks. For a shared local ESM
dependency, declare it as an asset and import the emitted URL:

```js
const renderer = await import(ctx.assets.renderer.url)
```

Do not invent package resolution, `ctx.modules`, or page-global module caches.

## Instance Script API

Each script runs once for one rendered component root. PathMX owns page
scanning, initialization guards, live-update reinitialization, and disposal.
Do not add page-level `querySelectorAll` loops or custom init flags.

| Local | Meaning |
| --- | --- |
| `el` | current rendered component root |
| `$` | `el.querySelector(selector)` |
| `$$` | array from `el.querySelectorAll(selector)` |
| `on` | event helper with automatic cleanup and scoped missing-target errors |
| `state` | one named Player-visible state domain |
| `ctx.attrs` | attributes present on the rendered root at initialization |
| `ctx.props` | definition defaults merged with rendered attributes |
| `ctx.assets` | named asset records with emitted `url` values |
| `ctx.data` | named data records with cached async readers |
| `ctx.morph` | component-owned DOM patching |
| `ctx.transition` | View Transition wrapper with fallback |
| `ctx.effect` | restartable work while `visible` or `presented` |
| `ctx.state` | private browser-local state for this instance |
| `ctx.play.actions` | owner-bound ephemeral Player commands |
| `ctx.cleanup` | lifetime cleanup registration |

Keep scripts component-owned. Reach outside `el` only when the component's
documented contract explicitly owns that external behavior.

Use `ctx.morph(target, next, { mode? })` for identity-preserving local updates;
the default mode patches children and `mode: "element"` patches or replaces the
target. Wrap an update in `ctx.transition(update, options?)` when a progressive
View Transition helps. The helper falls back when unsupported or when reduced
motion should skip it.

Register observers, global listeners, timers, and library disposers with
`ctx.cleanup`. Use `ctx.effect` for continuous work that should pause:

```js
ctx.effect(
  function ({ signal }) {
    let frame
    function draw() {
      if (signal.aborted) return
      renderFrame()
      frame = requestAnimationFrame(draw)
    }
    frame = requestAnimationFrame(draw)
    return function () {
      cancelAnimationFrame(frame)
    }
  },
  { when: "presented" },
)
```

`visible` means connected, intersecting, and in a visible document.
`presented` means visible in browse mode, or visible and active in Play. The
scope aborts before cleanup and restarts without overlapping its predecessor.

## State And Play

Declare one named state domain on the template or usage root:

```html
<article states="front | back" initial-state="front">...</article>
```

- `|` declares an ordered, Play-traversable sequence.
- `,` declares an unordered choice set that stays one Beat.
- Never mix separators or use numeric/counting state names.
- Omitted `initial-state` selects the first state.
- `initial-state=""` starts empty; `state.get()` returns `null` and
  `state.set(null)` clears it.

Use `state.get()`, `state.set(value)`, and `state.on(listener)`. Declare a
data-driven ordered domain with:

```js
state.declare(
  [{ name: "predict", label: "Predict" }, "inspect", "explain"],
  { initial: null },
)
```

Use `state` only for one value the Player should observe or traverse. Use
`ctx.state(initial)` for private draft data, selections, counters, or handles.
Neither is durable learner evidence.

A rendered Block-level component root owns its component Beat and receives
`pathmx:beat-enter`, `pathmx:beat-exit`, and `pathmx:play-step` directly. Do not
look up a sibling Beat host or query Player chrome.

## Player Context Actions

Use Context Actions for ephemeral component-local commands such as Previous,
Next, Pause, or Reset view:

```js
function publishActions() {
  ctx.play.actions.set([
    {
      id: "previous-move",
      label: "Previous move",
      disabled: moveIndex === 0,
      run: previousMove,
    },
    {
      id: "next-move",
      label: "Next move",
      disabled: moveIndex === moves.length - 1,
      run: nextMove,
    },
  ])
}
```

Each action requires a non-empty unique `id`, a non-empty `label`, and a `run`
function; `disabled` is optional. `set` replaces the root's complete ordered
list. Republish whenever labels or availability change. Keep boundary actions
present and disabled so Player-assigned positional shortcuts stay stable.

Use `ctx.play.actions.clear()` to remove the list; instance disposal also
clears it. Components declare order and behavior, never shortcut keys.

Context Actions are browser-local commands. Never use them for Save, Submit,
grading, or other durable work. A durable Action must remain backed by the
project's canonical Action/form contract.

Call `ctx.play.actions` only when the project includes the PathMX browser
Runtime. Its `run` function may return `void` or a Promise.

## Pacing, Boundaries, And Review

Keep the containing Block coherent even when the component is complex. Expose
meaningful stages as ordered states or explicit nested Beats; keep hover,
camera, animation-frame, and purely visual state private. Give large scenes a
readable entry, observable goal, useful fallback/loading/failure UI, and a
clear exit.

For a large scene or simulation, translate the experience brief into one
component contract before coding: initial render, Player-visible state, private
interaction state, reset behavior, continuous `presented` work, observable
consequences, protected invariants, and degradation order. Do not expose a
camera pose, particle count, or render-quality tier as authored state unless it
is itself a meaningful learner step.

Do not assume these portable-baseline APIs exist: persistent component state,
set-valued state, a generic readiness protocol, package module resolution,
TypeScript/JSX compilation, or framework-specific rendering. Treat
`ctx.response`, component Save helpers, and similar persistence surfaces as
available only when the installed PathMX version and repository's accepted
documentation explicitly provide them.

Review that:

- the definition has one HTML template and a stable name;
- prose explains props, slots, behavior, and failure modes;
- markup is semantic and keyboard/touch accessible;
- CSS uses component and runtime-container scopes;
- scripts operate on one `el` and clean up owned resources;
- Player-visible and private state are not confused with durable evidence;
- the initial render, reset, low-capability result, and protected invariants
  match the experience brief;
- Context Actions stay ephemeral;
- Play, narrow width, reduced motion, live refresh, loading, and failure paths
  behave coherently.
