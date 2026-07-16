---
status: experimental
---

# Campus Constellation Components

Interactive learning surfaces for the Campus Constellation path. These components enhance ordinary instructions without replacing durable question responses.

---

<!--
componentName: constellation-map
-->

# Constellation Map

Use `<constellation-map>` to explore four useful relationship perspectives. The selected orbit is browser-local visual state; the surrounding path remains readable without JavaScript.

## HTML

```html
<section class="constellation" aria-label="{{ label: Relationship constellation }}">
  <header>
    <p class="eyebrow">Your North Star</p>
    <h3>{{ goal: Explore a career direction }}</h3>
    <p>Select an orbit to see who belongs there and what you might learn.</p>
  </header>
  <div class="orbit-map" aria-label="Relationship orbits">
    <button type="button" data-orbit="beside" aria-pressed="true">Beside me</button>
    <button type="button" data-orbit="ahead" aria-pressed="false">One step ahead</button>
    <button type="button" data-orbit="guide" aria-pressed="false">Guide</button>
    <button type="button" data-orbit="field" aria-pressed="false">Field signal</button>
    <div class="north-star" aria-hidden="true">★</div>
  </div>
  <div class="orbit-detail" aria-live="polite">
    <p class="eyebrow" data-orbit-label>Beside me</p>
    <h4 data-orbit-people>Classmate, teammate, or resident assistant</h4>
    <p data-orbit-purpose>Learn from shared experiences and discover nearby opportunities you may have missed.</p>
    <p><strong>Try asking:</strong> <span data-orbit-question>“What helped you choose this course, club, or major?”</span></p>
  </div>
</section>
```

## CSS

```css
:self {
  --constellation-accent: var(--pmx-color-accent, #635bff);
  display: grid;
  gap: 1.25rem;
  inline-size: min(100%, 58rem);
  margin-inline: auto;
  padding: clamp(1rem, 4cqi, 2rem);
  border: 1px solid var(--pmx-color-border, #d7dce5);
  border-radius: 1.25rem;
  background:
    radial-gradient(circle at 50% 34%, color-mix(in srgb, var(--constellation-accent) 18%, transparent), transparent 28%),
    var(--pmx-color-surface, #fff);
}

:self header {
  text-align: center;
}

:self header h3,
:self header p,
.orbit-detail h4,
.orbit-detail p {
  margin: 0;
}

.eyebrow {
  color: var(--constellation-accent);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.orbit-map {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  min-block-size: 18rem;
  place-content: center;
  padding: 2rem;
  border-radius: 50%;
  background:
    radial-gradient(circle, transparent 17%, color-mix(in srgb, var(--constellation-accent) 30%, transparent) 18% 18.5%, transparent 19% 35%, color-mix(in srgb, var(--constellation-accent) 22%, transparent) 36% 36.5%, transparent 37% 52%, color-mix(in srgb, var(--constellation-accent) 16%, transparent) 53% 53.5%, transparent 54%);
}

.north-star {
  position: absolute;
  inset: 50% auto auto 50%;
  translate: -50% -50%;
  display: grid;
  inline-size: 3.25rem;
  block-size: 3.25rem;
  place-items: center;
  border-radius: 50%;
  background: var(--constellation-accent);
  color: white;
  box-shadow: 0 0 2rem color-mix(in srgb, var(--constellation-accent) 55%, transparent);
  font-size: 1.5rem;
}

.orbit-map button {
  position: relative;
  z-index: 1;
  min-block-size: 3rem;
  border: 1px solid var(--pmx-color-border, #d7dce5);
  border-radius: 999px;
  background: var(--pmx-color-bg, #fff);
  color: var(--pmx-color-fg, #172033);
  cursor: pointer;
  font: inherit;
  font-weight: 750;
}

.orbit-map button:focus-visible {
  outline: 3px solid var(--constellation-accent);
  outline-offset: 3px;
}

.orbit-map button[aria-pressed="true"] {
  border-color: var(--constellation-accent);
  background: var(--constellation-accent);
  color: white;
}

.orbit-detail {
  display: grid;
  gap: 0.5rem;
  padding: 1rem;
  border-inline-start: 0.3rem solid var(--constellation-accent);
  border-radius: 0.5rem;
  background: color-mix(in srgb, var(--constellation-accent) 8%, transparent);
}

@container pathmx-runtime (max-width: 36rem) {
  .orbit-map {
    min-block-size: 22rem;
    grid-template-columns: 1fr;
    border-radius: 1rem;
  }

  .north-star {
    opacity: 0.18;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .orbit-map button {
    transition: background-color 160ms ease-out, color 160ms ease-out, transform 120ms ease-out;
  }

  .orbit-map button:active {
    transform: scale(0.98);
  }
}
```

## JavaScript

```js
const choices = {
  beside: {
    label: "Beside me",
    people: "Classmate, teammate, or resident assistant",
    purpose: "Learn from shared experiences and discover nearby opportunities you may have missed.",
    question: "“What helped you choose this course, club, or major?”",
  },
  ahead: {
    label: "One step ahead",
    people: "Senior student, recent graduate, or teaching assistant",
    purpose: "Learn about near-term choices and mistakes they still remember clearly.",
    question: "“What do you wish you had tried one year earlier?”",
  },
  guide: {
    label: "Guide",
    people: "Professor, advisor, coach, or campus staff member",
    purpose: "Find fields, resources, and practical ways to prepare.",
    question: "“What experience would help me test whether this field fits?”",
  },
  field: {
    label: "Field signal",
    people: "Alum, practitioner, recruiter, or community leader",
    purpose: "Understand daily work, workplace context, and changing expectations.",
    question: "“What does a normal week include that students rarely see?”",
  },
}
const buttons = $$('[data-orbit]')
const label = $('[data-orbit-label]')
const people = $('[data-orbit-people]')
const purpose = $('[data-orbit-purpose]')
const question = $('[data-orbit-question]')

function selectOrbit(name) {
  const choice = choices[name]
  if (!choice) return
  buttons.forEach(function (button) {
    button.setAttribute('aria-pressed', String(button.dataset.orbit === name))
  })
  label.textContent = choice.label
  people.textContent = choice.people
  purpose.textContent = choice.purpose
  question.textContent = choice.question
}

buttons.forEach(function (button) {
  on(button, 'click', function () {
    ctx.transition(function () {
      selectOrbit(button.dataset.orbit)
    })
  })
})
```

---

<!--
componentName: recovery-deck
-->

# Recovery Deck

Use `<recovery-deck>` to rehearse one uncomfortable networking moment at a time. Its ordered states are visible to the PathMX Player.

## HTML

```html
<section class="recovery-deck" states="short-answer | forget | busy | unknown-term | cannot-help" aria-label="{{ label: Awkward moment practice }}">
  <header>
    <p class="eyebrow">Awkward-moment simulator</p>
    <h3>Practice recovering, not performing perfectly</h3>
  </header>
  <nav data-recovery-controls aria-label="Choose a scenario"></nav>
  <div class="recovery-panel" aria-live="polite">
    <p class="scenario" data-scenario></p>
    <p class="response" data-response></p>
    <p class="encouragement" data-encouragement></p>
  </div>
</section>
```

## CSS

```css
:self {
  display: grid;
  gap: 1rem;
  inline-size: min(100%, 52rem);
  margin-inline: auto;
  padding: clamp(1rem, 4cqi, 2rem);
  border: 1px solid var(--pmx-color-border, #d7dce5);
  border-radius: 1rem;
  background: var(--pmx-color-surface, #fff);
}

:self header h3,
:self header p,
.recovery-panel p {
  margin: 0;
}

[data-recovery-controls] {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding-block-end: 0.25rem;
}

[data-recovery-controls] button {
  flex: 0 0 auto;
  padding: 0.55rem 0.8rem;
  border: 1px solid var(--pmx-color-border, #d7dce5);
  border-radius: 999px;
  background: var(--pmx-color-bg, #fff);
  color: var(--pmx-color-fg, #172033);
  cursor: pointer;
  font: inherit;
}

[data-recovery-controls] button[aria-pressed="true"] {
  border-color: var(--pmx-color-accent, #635bff);
  background: var(--pmx-color-accent, #635bff);
  color: white;
}

[data-recovery-controls] button:focus-visible {
  outline: 3px solid var(--pmx-color-focus, #2563eb);
  outline-offset: 2px;
}

.recovery-panel {
  display: grid;
  gap: 0.8rem;
  min-block-size: 12rem;
  align-content: center;
  padding: clamp(1rem, 4cqi, 2rem);
  border-radius: 0.8rem;
  background: color-mix(in srgb, var(--pmx-color-accent, #635bff) 9%, transparent);
}

.scenario {
  font-size: 1.2rem;
  font-weight: 800;
}

.response {
  font-size: 1.05rem;
}

.encouragement {
  color: var(--pmx-color-muted, #667085);
}
```

## JavaScript

```js
const scenarios = {
  'short-answer': {
    label: 'Short answer',
    scenario: 'They answer with only one sentence.',
    response: 'Try: “That makes sense. What part of that experience surprised you most?”',
    encouragement: 'A short answer is information, not rejection. One curious follow-up is enough.',
  },
  forget: {
    label: 'I forget',
    scenario: 'You forget your next question.',
    response: 'Try: “You mentioned ___. Could you tell me more about it?”',
    encouragement: 'Listening can give you the next question. You do not need to memorize a script.',
  },
  busy: {
    label: 'They are busy',
    scenario: 'The person needs to leave.',
    response: 'Try: “No problem. Is there a better time, or would a short email be easier?”',
    encouragement: 'Respecting their time leaves the relationship stronger.',
  },
  'unknown-term': {
    label: 'New term',
    scenario: 'They use a term you do not know.',
    response: 'Try: “I haven’t encountered that yet. How would you explain it to a student entering the field?”',
    encouragement: 'An honest learning question is more useful than pretending to understand.',
  },
  'cannot-help': {
    label: 'Cannot help',
    scenario: 'They say they are not the right person.',
    response: 'Try: “Thank you for letting me know. Is there a resource or perspective you would suggest instead?”',
    encouragement: 'A graceful ending is still a successful practice.',
  },
}
const controls = $('[data-recovery-controls]')
const scenario = $('[data-scenario]')
const response = $('[data-response]')
const encouragement = $('[data-encouragement]')

Object.entries(scenarios).forEach(function ([name, item]) {
  const button = document.createElement('button')
  button.type = 'button'
  button.textContent = item.label
  button.dataset.recoveryState = name
  on(button, 'click', function () {
    state.set(name)
  })
  controls.appendChild(button)
})

function render(name) {
  const item = scenarios[name]
  if (!item) return
  scenario.textContent = item.scenario
  response.textContent = item.response
  encouragement.textContent = item.encouragement
  $$('[data-recovery-state]').forEach(function (button) {
    button.setAttribute('aria-pressed', String(button.dataset.recoveryState === name))
  })
}

state.on(render)
render(state.get())
```
