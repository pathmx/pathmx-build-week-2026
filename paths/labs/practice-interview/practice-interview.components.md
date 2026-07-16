---
status: experimental
parseComponents: true
---

# Practice Interview Components

Local-only components for the practice interview spike. They do not call the
OpenAI API, request microphone access, or write durable evidence. The real
version should delegate those responsibilities to Host Actions described in
the companion research note.

---

<!--
componentName: interview-rehearsal
-->

# Interview Rehearsal

Use `<interview-rehearsal>` for a four-stage practice simulation: briefing,
live answer, debrief, and evidence. The component owns local draft text, mock
session state, visual pressure/readiness signals, and simulated scores. It
deliberately keeps persistence out of browser state.

## HTML

```html
<section class="interview-sim" aria-label="{{ label: Interview practice simulation }}">
  <div class="interview-sim__shell">
    <header class="interview-sim__topbar">
      <div>
        <p>Voice interview simulator</p>
        <h3 data-role-title>{{ role: Frontend engineer intern }}</h3>
      </div>
      <div class="interview-sim__hud" data-session-status>
        <span class="interview-sim__beacon" aria-hidden="true"></span>
        <strong data-session-state-label>Briefing</strong>
        <small data-session-clock>00:00</small>
      </div>
    </header>

    <div class="interview-sim__arena" data-arena>
      <div class="interview-sim__room" aria-hidden="true">
        <div class="interview-sim__wall">
          <span></span><span></span><span></span>
        </div>
        <div class="interview-sim__screen">
          <strong data-room-score>--</strong>
          <span data-room-route>awaiting signal</span>
        </div>
        <div class="interview-sim__table"></div>
        <div class="interview-sim__avatar interview-sim__avatar--interviewer">
          <span></span>
        </div>
        <div class="interview-sim__avatar interview-sim__avatar--candidate">
          <span></span>
        </div>
        <div class="interview-sim__wave">
          <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
        </div>
      </div>

      <div class="interview-sim__brief">
        <p class="interview-sim__eyebrow">Interviewer prompt</p>
        <h4 data-question-text>{{ question: Tell me about a time you solved a hard problem. }}</h4>
        <p data-mode-summary>
          Select a mission, enter the room, and answer like this is live.
        </p>
      </div>
    </div>

    <nav class="interview-sim__steps" data-stage-controls aria-label="Simulation stages"></nav>

    <div class="interview-sim__body">
      <article data-panel="setup">
        <div class="interview-sim__mission-grid" data-mode-controls></div>

        <section class="interview-sim__rubric-deck" aria-label="Active rubric" data-rubric-preview></section>

        <div class="interview-sim__actions">
          <button type="button" data-start-session>Enter mock interview</button>
        </div>
      </article>

      <article data-panel="answer" hidden>
        <div class="interview-sim__live-grid">
          <section class="interview-sim__transcript-console">
            <div class="interview-sim__console-head">
              <div>
                <p class="interview-sim__eyebrow">Live transcript</p>
                <h4 data-live-question></h4>
              </div>
              <span data-pressure-label>Composure steady</span>
            </div>
            <label class="interview-sim__answer">
              <span>Your answer</span>
              <textarea data-answer rows="10"></textarea>
            </label>
          </section>

          <aside class="interview-sim__coach-panel" aria-label="Realtime signals">
            <p class="interview-sim__eyebrow">Realtime signals</p>
            <div class="interview-sim__meter" aria-label="Answer readiness">
              <span data-readiness-meter></span>
            </div>
            <dl>
              <div><dt>Length</dt><dd data-word-count>0 words</dd></div>
              <div><dt>Rubric hits</dt><dd data-coverage>0 signals</dd></div>
              <div><dt>Readiness</dt><dd data-answer-readiness>Needs answer</dd></div>
            </dl>
            <p data-answer-status>Waiting for transcript.</p>
          </aside>
        </div>

        <div class="interview-sim__actions">
          <button type="button" data-strong-sample>Load strong sample</button>
          <button type="button" data-rough-sample>Load rough sample</button>
          <button type="button" data-clear-answer>Clear</button>
          <button type="button" data-score-answer>Run debrief</button>
        </div>
      </article>

      <article data-panel="score" hidden>
        <div class="interview-sim__report">
          <section class="interview-sim__rank-panel">
            <p class="interview-sim__eyebrow">Performance report</p>
            <strong data-rank-label>Unscored</strong>
            <div class="interview-sim__score">
              <span data-overall-score>--</span>
              <small>overall</small>
            </div>
            <p data-score-summary>No answer has been scored yet.</p>
          </section>

          <section class="interview-sim__dimensions" data-score-list aria-label="Rubric dimensions"></section>
        </div>

        <section class="interview-sim__follow-up">
          <p class="interview-sim__eyebrow">Interviewer follow-up</p>
          <h4 data-follow-up>Score an answer to get a targeted follow-up.</h4>
        </section>

        <div class="interview-sim__actions">
          <button type="button" data-revise-answer>Back to answer</button>
          <button type="button" data-show-route>Open evidence dossier</button>
        </div>
      </article>

      <article data-panel="route" hidden>
        <div class="interview-sim__dossier">
          <section>
            <p class="interview-sim__eyebrow">Unlocked next practice</p>
            <h4 data-next-route>Answer one question first.</h4>
            <p data-route-rationale>
              The live path should route the next Block from the weakest rubric
              dimension after evidence is saved.
            </p>
          </section>
          <section>
            <p class="interview-sim__eyebrow">Host Action boundary</p>
            <p data-action-boundary>
              interview.evidence.save writes accepted evidence after the
              learner reviews the summary.
            </p>
          </section>
        </div>

        <pre><code data-evidence-preview>{
  "status": "waiting_for_answer"
}</code></pre>
      </article>
    </div>
  </div>
</section>
```

## CSS

```css
:self {
  --sim-bg: oklch(0.12 0.025 252);
  --sim-surface: oklch(0.18 0.035 252);
  --sim-panel: oklch(0.22 0.04 248);
  --sim-fg: oklch(0.96 0.01 250);
  --sim-muted: oklch(0.75 0.04 250);
  --sim-line: oklch(0.42 0.05 250);
  --sim-cyan: oklch(0.78 0.13 195);
  --sim-green: oklch(0.73 0.14 158);
  --sim-amber: oklch(0.78 0.15 75);
  --sim-red: oklch(0.68 0.17 28);
  --sim-violet: oklch(0.72 0.12 300);
  color-scheme: dark;
  display: block;
  inline-size: min(100%, 64rem);
  margin-inline: auto;
  color: var(--sim-fg);
}

.interview-sim__shell {
  display: grid;
  gap: 1rem;
  overflow: hidden;
  border: 1px solid color-mix(in oklch, var(--sim-line) 70%, transparent);
  border-radius: 0.65rem;
  background:
    linear-gradient(135deg, oklch(0.15 0.04 255), oklch(0.1 0.025 232));
  box-shadow: 0 1.2rem 3rem oklch(0 0 0 / 0.28);
  padding: clamp(0.9rem, 2.5vw, 1.2rem);
}

.interview-sim__topbar {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 0.75rem 1rem;
  align-items: start;
}

.interview-sim__topbar p,
.interview-sim__topbar h3,
.interview-sim__brief h4,
.interview-sim__brief p,
.interview-sim__body h4,
.interview-sim__body p {
  margin: 0;
}

.interview-sim__topbar p,
.interview-sim__eyebrow {
  color: var(--sim-muted);
  font-size: 0.72rem;
  font-weight: 760;
  letter-spacing: 0;
  text-transform: uppercase;
}

.interview-sim__topbar h3 {
  color: var(--sim-fg);
  font-size: clamp(1.25rem, 2vw, 1.65rem);
  line-height: 1.08;
}

.interview-sim__hud {
  display: grid;
  grid-template-columns: auto auto;
  gap: 0 0.5rem;
  align-items: center;
  justify-content: end;
  min-inline-size: 8.4rem;
  border: 1px solid color-mix(in oklch, var(--sim-line) 70%, transparent);
  border-radius: 0.55rem;
  background: oklch(0.13 0.025 252 / 0.72);
  padding: 0.58rem 0.7rem;
}

.interview-sim__hud strong {
  font-size: 0.86rem;
}

.interview-sim__hud small {
  grid-column: 2;
  color: var(--sim-muted);
  font-variant-numeric: tabular-nums;
}

.interview-sim__beacon {
  grid-row: 1 / span 2;
  inline-size: 0.72rem;
  aspect-ratio: 1;
  border-radius: 999px;
  background: var(--sim-muted);
}

:self[data-session-state="listening"] .interview-sim__beacon {
  background: var(--sim-green);
  box-shadow: 0 0 0 0.35rem color-mix(in oklch, var(--sim-green) 22%, transparent);
}

:self[data-session-state="scored"] .interview-sim__beacon {
  background: var(--sim-cyan);
}

.interview-sim__arena {
  display: grid;
  grid-template-columns: minmax(18rem, 1.15fr) minmax(16rem, 0.85fr);
  gap: 1rem;
  align-items: stretch;
}

.interview-sim__room {
  position: relative;
  overflow: hidden;
  min-block-size: clamp(18rem, 38vw, 25rem);
  border: 1px solid color-mix(in oklch, var(--sim-line) 68%, transparent);
  border-radius: 0.65rem;
  background:
    linear-gradient(180deg, oklch(0.2 0.04 248), oklch(0.1 0.025 252) 58%),
    var(--sim-bg);
}

.interview-sim__wall {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  opacity: 0.85;
}

.interview-sim__wall span {
  border-inline-end: 1px solid oklch(0.34 0.04 250 / 0.45);
  background: linear-gradient(180deg, oklch(0.23 0.045 248), transparent);
}

.interview-sim__screen {
  position: absolute;
  inset-block-start: 12%;
  inset-inline-start: 50%;
  display: grid;
  place-items: center;
  inline-size: min(36%, 14rem);
  aspect-ratio: 16 / 10;
  border: 1px solid color-mix(in oklch, var(--sim-cyan) 62%, transparent);
  border-radius: 0.45rem;
  background:
    repeating-linear-gradient(
      0deg,
      oklch(0.17 0.03 245 / 0.9) 0 0.42rem,
      oklch(0.2 0.04 248 / 0.9) 0.42rem 0.84rem
    );
  box-shadow: 0 0 2rem color-mix(in oklch, var(--sim-cyan) 16%, transparent);
  transform: translateX(-50%);
}

.interview-sim__screen strong {
  font-size: clamp(1.6rem, 5vw, 3rem);
  line-height: 1;
}

.interview-sim__screen span {
  color: var(--sim-cyan);
  font-size: 0.76rem;
  font-weight: 740;
  text-transform: uppercase;
}

.interview-sim__table {
  position: absolute;
  inset-block-end: 16%;
  inset-inline: 15%;
  block-size: 16%;
  border-radius: 999px 999px 35% 35%;
  background:
    linear-gradient(180deg, oklch(0.35 0.05 62), oklch(0.18 0.035 62));
  box-shadow: 0 1rem 2.4rem oklch(0 0 0 / 0.32);
}

.interview-sim__avatar {
  position: absolute;
  display: grid;
  place-items: center;
  inline-size: clamp(4.6rem, 10vw, 6.8rem);
  aspect-ratio: 1;
  border-radius: 50%;
  background: color-mix(in oklch, var(--sim-panel) 88%, var(--sim-cyan));
  box-shadow: inset 0 -0.8rem 1.2rem oklch(0 0 0 / 0.24);
}

.interview-sim__avatar span {
  inline-size: 44%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: oklch(0.82 0.06 70);
  box-shadow: 0 2.4rem 0 0.9rem oklch(0.28 0.055 252);
}

.interview-sim__avatar--interviewer {
  inset-block-end: 22%;
  inset-inline-start: 18%;
}

.interview-sim__avatar--candidate {
  inset-block-end: 18%;
  inset-inline-end: 17%;
  background: color-mix(in oklch, var(--sim-panel) 88%, var(--sim-violet));
}

.interview-sim__wave {
  position: absolute;
  inset-block-end: 8%;
  inset-inline: 24%;
  display: grid;
  grid-template-columns: repeat(7, minmax(0.35rem, 1fr));
  gap: 0.28rem;
  align-items: end;
  block-size: 3.4rem;
}

.interview-sim__wave i {
  display: block;
  block-size: 28%;
  border-radius: 999px;
  background: color-mix(in oklch, var(--sim-cyan) 42%, var(--sim-line));
}

:self[data-session-state="listening"] .interview-sim__wave i:nth-child(2),
:self[data-session-state="listening"] .interview-sim__wave i:nth-child(6) {
  block-size: 58%;
}

:self[data-session-state="listening"] .interview-sim__wave i:nth-child(3),
:self[data-session-state="listening"] .interview-sim__wave i:nth-child(5) {
  block-size: 84%;
}

:self[data-session-state="listening"] .interview-sim__wave i:nth-child(4) {
  block-size: 100%;
}

.interview-sim__brief {
  display: grid;
  align-content: center;
  gap: 0.75rem;
  border: 1px solid color-mix(in oklch, var(--sim-line) 70%, transparent);
  border-radius: 0.65rem;
  background: oklch(0.16 0.03 252 / 0.78);
  padding: clamp(1rem, 3vw, 1.4rem);
}

.interview-sim__brief h4 {
  color: var(--sim-fg);
  font-size: clamp(1.2rem, 2.8vw, 1.8rem);
  line-height: 1.15;
}

.interview-sim__brief p:last-child {
  color: var(--sim-muted);
}

.interview-sim__steps,
.interview-sim__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.interview-sim__steps button,
.interview-sim__actions button,
.interview-sim__mission-grid button {
  min-block-size: 2.45rem;
  border: 1px solid color-mix(in oklch, var(--sim-line) 74%, transparent);
  border-radius: 0.45rem;
  background: oklch(0.15 0.03 252);
  color: var(--sim-fg);
  cursor: pointer;
  font: inherit;
  font-weight: 740;
  padding-inline: 0.82rem;
}

.interview-sim__steps button {
  flex: 1 1 8rem;
}

.interview-sim__steps button[aria-pressed="true"],
.interview-sim__mission-grid button[aria-pressed="true"],
.interview-sim__actions button[data-start-session],
.interview-sim__actions button[data-score-answer],
.interview-sim__actions button[data-show-route] {
  border-color: var(--sim-cyan);
  background: var(--sim-cyan);
  color: oklch(0.13 0.03 252);
}

.interview-sim__steps button:focus-visible,
.interview-sim__actions button:focus-visible,
.interview-sim__mission-grid button:focus-visible,
.interview-sim__answer textarea:focus-visible {
  outline: 2px solid var(--sim-amber);
  outline-offset: 2px;
}

.interview-sim__body {
  border-block-start: 1px solid color-mix(in oklch, var(--sim-line) 68%, transparent);
  padding-block-start: 1rem;
}

.interview-sim__body article {
  display: grid;
  gap: 1rem;
}

.interview-sim__body article[hidden] {
  display: none;
}

.interview-sim__mission-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.7rem;
}

.interview-sim__mission-grid button {
  display: grid;
  gap: 0.32rem;
  align-content: start;
  min-block-size: 8.4rem;
  padding: 0.82rem;
  text-align: start;
}

.interview-sim__mission-grid strong,
.interview-sim__rubric-deck strong,
.interview-sim__dimensions strong {
  font-weight: 820;
}

.interview-sim__mission-grid span,
.interview-sim__rubric-deck span,
.interview-sim__dimensions p,
.interview-sim__coach-panel,
.interview-sim__route p {
  color: var(--sim-muted);
  font-size: 0.9rem;
}

.interview-sim__rubric-deck,
.interview-sim__dimensions,
.interview-sim__dossier {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.65rem;
}

.interview-sim__rubric-deck > div,
.interview-sim__dimensions > div,
.interview-sim__dossier > section,
.interview-sim__rank-panel,
.interview-sim__follow-up,
.interview-sim__coach-panel,
.interview-sim__transcript-console {
  display: grid;
  gap: 0.58rem;
  border: 1px solid color-mix(in oklch, var(--sim-line) 72%, transparent);
  border-radius: 0.55rem;
  background: oklch(0.15 0.03 252 / 0.88);
  padding: 0.85rem;
}

.interview-sim__live-grid,
.interview-sim__report {
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(16rem, 0.75fr);
  gap: 1rem;
  align-items: stretch;
}

.interview-sim__console-head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 0.75rem;
  align-items: start;
}

.interview-sim__console-head > span {
  border: 1px solid color-mix(in oklch, var(--sim-amber) 58%, transparent);
  border-radius: 999px;
  color: var(--sim-amber);
  font-size: 0.78rem;
  font-weight: 760;
  padding: 0.25rem 0.55rem;
}

.interview-sim__answer {
  display: grid;
  gap: 0.45rem;
  font-weight: 740;
}

.interview-sim__answer textarea {
  box-sizing: border-box;
  inline-size: 100%;
  border: 1px solid color-mix(in oklch, var(--sim-line) 78%, transparent);
  border-radius: 0.45rem;
  background: oklch(0.1 0.025 252);
  color: var(--sim-fg);
  font: inherit;
  line-height: 1.55;
  padding: 0.78rem;
  resize: vertical;
}

.interview-sim__coach-panel dl {
  display: grid;
  gap: 0.55rem;
  margin: 0;
}

.interview-sim__coach-panel div {
  display: grid;
  gap: 0.12rem;
}

.interview-sim__coach-panel dt {
  color: var(--sim-muted);
  font-size: 0.72rem;
  font-weight: 760;
  text-transform: uppercase;
}

.interview-sim__coach-panel dd {
  margin: 0;
  color: var(--sim-fg);
  font-weight: 780;
}

.interview-sim__meter {
  overflow: hidden;
  block-size: 0.72rem;
  border-radius: 999px;
  background: oklch(0.09 0.02 252);
}

.interview-sim__meter span {
  display: block;
  inline-size: var(--readiness, 0%);
  block-size: 100%;
  border-radius: inherit;
  background: var(--readiness-color, var(--sim-amber));
}

.interview-sim__score {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.interview-sim__score span {
  font-size: clamp(3rem, 9vw, 5rem);
  font-weight: 860;
  line-height: 1;
}

.interview-sim__score small {
  color: var(--sim-muted);
  font-weight: 740;
}

.interview-sim__rank-panel > strong {
  color: var(--sim-cyan);
  font-size: 1rem;
  text-transform: uppercase;
}

.interview-sim__bar {
  overflow: hidden;
  block-size: 0.62rem;
  border-radius: 999px;
  background: oklch(0.09 0.02 252);
}

.interview-sim__bar span {
  display: block;
  inline-size: var(--score-width, 0%);
  block-size: 100%;
  border-radius: inherit;
  background: var(--score-color, var(--sim-cyan));
}

.interview-sim__follow-up {
  border-color: color-mix(in oklch, var(--sim-violet) 62%, transparent);
  background: color-mix(in oklch, var(--sim-violet) 14%, oklch(0.13 0.03 252));
}

.interview-sim__dossier {
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
}

.interview-sim__body pre {
  overflow: auto;
  border: 1px solid color-mix(in oklch, var(--sim-line) 74%, transparent);
  border-radius: 0.55rem;
  margin: 0;
  background: oklch(0.1 0.025 252);
  padding: 0.9rem;
}

.interview-sim__body code {
  color: var(--sim-fg);
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}

@container pathmx-runtime (max-width: 50rem) {
  .interview-sim__topbar,
  .interview-sim__arena,
  .interview-sim__live-grid,
  .interview-sim__report,
  .interview-sim__dossier,
  .interview-sim__console-head {
    grid-template-columns: 1fr;
  }

  .interview-sim__hud {
    justify-content: start;
  }

  .interview-sim__mission-grid,
  .interview-sim__rubric-deck,
  .interview-sim__dimensions {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: no-preference) {
  :self[data-session-state="listening"] .interview-sim__beacon {
    animation: sim-beacon 1.4s ease-out infinite;
  }

  :self[data-session-state="listening"] .interview-sim__wave i {
    animation: sim-wave 1.1s ease-in-out infinite alternate;
  }

  :self[data-session-state="listening"] .interview-sim__wave i:nth-child(2n) {
    animation-delay: 160ms;
  }
}

@keyframes sim-beacon {
  0% {
    box-shadow: 0 0 0 0 color-mix(in oklch, var(--sim-green) 34%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0.62rem transparent;
  }
}

@keyframes sim-wave {
  from {
    transform: scaleY(0.65);
  }
  to {
    transform: scaleY(1);
  }
}

```

## JavaScript

```js
const modes = {
  behavioral: {
    label: "Behavioral",
    role: ctx.props.role || "Frontend engineer intern",
    summary: "Mission: land one concise STAR answer with a memorable result.",
    question:
      ctx.props.question ||
      "Tell me about a time you handled disagreement on a team.",
    minWords: 55,
    maxWords: 145,
    strongSample:
      "In a class project, our team disagreed about whether to rewrite the interface before the deadline. I asked each person to name the user risk they were worried about, then I mapped the tradeoffs on the whiteboard. We kept the stable flow, fixed the confusing checkout step, and shipped on time. The result was a clearer demo and fewer last-minute bugs. I learned to turn disagreement into criteria before arguing for a solution.",
    roughSample:
      "My team disagreed on a design. I talked to them and we figured it out. It went fine and I learned communication is important.",
    rubric: [
      {
        id: "structure",
        label: "Structure",
        target: "Situation, action, result, lesson",
        groups: [["when", "project", "team"], ["i asked", "i led", "i mapped"], ["result", "shipped", "improved"], ["learned", "next time"]],
        coach: "Tighten the STAR outline so the action and result are easy to repeat.",
        followUp: "What was the specific result of your action?",
        route: "practice-star-outline",
      },
      {
        id: "evidence",
        label: "Evidence",
        target: "Concrete details and stakes",
        groups: [["deadline", "risk", "stake"], ["bugs", "demo", "user"], ["fewer", "more", "percent", "hours"], ["because", "so that", "tradeoff"]],
        coach: "Add one measurable outcome or concrete detail.",
        followUp: "What detail proves the team was better off afterward?",
        route: "practice-evidence",
      },
      {
        id: "reflection",
        label: "Reflection",
        target: "What changed afterward",
        groups: [["learned", "changed"], ["criteria", "feedback"], ["now", "next time"], ["because", "why"]],
        coach: "Name the lesson and how it changed your later behavior.",
        followUp: "How would you handle a similar disagreement now?",
        route: "practice-reflection",
      },
      {
        id: "delivery",
        label: "Delivery",
        target: "Specific and not overlong",
        groups: [["i ", "we "], ["team", "person"], ["solution", "decision"], ["result", "learned"]],
        coach: "Keep the story between 60 and 90 seconds with one clean thread.",
        followUp: "Can you retell that in four sentences?",
        route: "practice-delivery",
      },
    ],
  },
  technical: {
    label: "Technical",
    role: "Frontend engineer",
    summary: "Mission: explain a tradeoff-rich implementation under pressure.",
    question:
      "How would you make a slow autocomplete input feel fast and reliable?",
    minWords: 65,
    maxWords: 155,
    strongSample:
      "I would start by separating perceived speed from actual network time. On the client, I would debounce keystrokes, cancel stale requests with AbortController, cache recent queries, and show an immediate loading or empty state. On the server, I would check query latency, indexing, and result limits. I would measure input delay and request duration before and after, because the goal is not just fewer requests but a search box that feels responsive and returns trustworthy results.",
    roughSample:
      "I would use debounce and maybe caching. Then it would be faster. If that did not work I would optimize the backend.",
    rubric: [
      {
        id: "correctness",
        label: "Correctness",
        target: "Technically sound steps",
        groups: [["debounce", "throttle"], ["cancel", "abort"], ["cache"], ["loading", "empty", "error"]],
        coach: "Include the key client-side mechanics and state behavior.",
        followUp: "How do you prevent stale responses from overwriting newer results?",
        route: "practice-correctness",
      },
      {
        id: "tradeoffs",
        label: "Tradeoffs",
        target: "Latency, load, freshness, complexity",
        groups: [["latency", "network"], ["request", "server"], ["fresh", "stale"], ["because", "tradeoff"]],
        coach: "Make the tradeoff visible instead of listing techniques.",
        followUp: "What would you measure before choosing the debounce interval?",
        route: "practice-tradeoffs",
      },
      {
        id: "diagnosis",
        label: "Diagnosis",
        target: "Measure before and after",
        groups: [["measure", "metric"], ["input delay", "duration"], ["before", "after"], ["index", "profile"]],
        coach: "Add a measurement plan so the answer sounds production-ready.",
        followUp: "Which metric tells you the user experience improved?",
        route: "practice-diagnosis",
      },
      {
        id: "communication",
        label: "Communication",
        target: "Clear layered explanation",
        groups: [["client", "server"], ["first", "then"], ["goal"], ["responsive", "reliable"]],
        coach: "Group the answer into client, server, and measurement layers.",
        followUp: "Can you explain the same plan to a product manager?",
        route: "practice-communication",
      },
    ],
  },
  product: {
    label: "Product/System",
    role: "Product-minded engineer",
    summary: "Mission: design a small system around learner value and risk.",
    question:
      "Design a lightweight practice scheduler for students preparing interviews.",
    minWords: 70,
    maxWords: 170,
    strongSample:
      "I would start with the user need: students need short practice blocks that fit around classes and create evidence of progress. The core model would have goals, scheduled sessions, reminders, and saved outcomes. I would design the first version for one learner, then add sharing or peer matching later. The main risks are notification fatigue, stale plans, and privacy around interview notes, so I would measure completion rate, reschedules, and whether saved feedback leads to the next practice.",
    roughSample:
      "I would let users make events and get reminders. They could track progress and maybe invite friends. The app would have a database and notifications.",
    rubric: [
      {
        id: "framing",
        label: "Framing",
        target: "User, goal, and success measure",
        groups: [["student", "learner", "user"], ["goal"], ["progress", "outcome"], ["measure", "completion"]],
        coach: "Start with the user's job and one success metric.",
        followUp: "What user behavior proves the scheduler is working?",
        route: "practice-product-framing",
      },
      {
        id: "system",
        label: "System Shape",
        target: "Entities and flow",
        groups: [["session", "schedule"], ["reminder", "notification"], ["saved", "evidence"], ["model", "database"]],
        coach: "Name the core entities and the main flow.",
        followUp: "What is the smallest data model for the first version?",
        route: "practice-system-shape",
      },
      {
        id: "risk",
        label: "Risk",
        target: "Failure modes and privacy",
        groups: [["risk"], ["privacy"], ["fatigue", "stale"], ["reschedule"]],
        coach: "Call out privacy and behavior risks before scaling the feature.",
        followUp: "What should the product avoid storing by default?",
        route: "practice-risk",
      },
      {
        id: "iteration",
        label: "Iteration",
        target: "First slice before expansion",
        groups: [["first version", "mvp"], ["later"], ["measure"], ["because"]],
        coach: "Separate the first slice from later collaboration features.",
        followUp: "What would you ship before peer matching?",
        route: "practice-iteration",
      },
    ],
  },
}

const configuredStates = (el.getAttribute("data-pathmx-states") || "")
  .split("|")
  .map(function (name) {
    return name.trim()
  })
  .filter(Boolean)
const stageNames = configuredStates.length
  ? configuredStates
  : ["setup", "answer", "score", "route"]
const stageLabels = {
  setup: "Briefing",
  answer: "Live",
  score: "Debrief",
  route: "Dossier",
}

const roleTitle = $("[data-role-title]")
const stageControls = $("[data-stage-controls]")
const panels = $$("[data-panel]")
const modeControls = $("[data-mode-controls]")
const rubricPreview = $("[data-rubric-preview]")
const modeSummary = $("[data-mode-summary]")
const questionText = $("[data-question-text]")
const liveQuestion = $("[data-live-question]")
const sessionStateLabel = $("[data-session-state-label]")
const sessionClock = $("[data-session-clock]")
const roomScore = $("[data-room-score]")
const roomRoute = $("[data-room-route]")
const startSession = $("[data-start-session]")
const answer = $("[data-answer]")
const strongSample = $("[data-strong-sample]")
const roughSample = $("[data-rough-sample]")
const clearAnswer = $("[data-clear-answer]")
const scoreAnswer = $("[data-score-answer]")
const answerStatus = $("[data-answer-status]")
const wordCount = $("[data-word-count]")
const coverage = $("[data-coverage]")
const readiness = $("[data-answer-readiness]")
const readinessMeter = $("[data-readiness-meter]")
const pressureLabel = $("[data-pressure-label]")
const rankLabel = $("[data-rank-label]")
const overallScore = $("[data-overall-score]")
const scoreList = $("[data-score-list]")
const scoreSummary = $("[data-score-summary]")
const followUp = $("[data-follow-up]")
const reviseAnswer = $("[data-revise-answer]")
const showRoute = $("[data-show-route]")
const nextRoute = $("[data-next-route]")
const routeRationale = $("[data-route-rationale]")
const evidencePreview = $("[data-evidence-preview]")
const actionBoundary = $("[data-action-boundary]")

const local = ctx.state(function () {
  return {
    mode: "behavioral",
    result: null,
    started: false,
    startedAt: 0,
    elapsed: 0,
  }
})

let timer

function currentMode() {
  return modes[local.mode] || modes.behavioral
}

function stopTimer() {
  if (timer !== undefined) clearInterval(timer)
  timer = undefined
}

function formatClock(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
}

function updateClock() {
  if (local.started && local.startedAt) {
    local.elapsed = Math.max(0, Math.floor((Date.now() - local.startedAt) / 1000))
  }
  sessionClock.textContent = formatClock(local.elapsed || 0)
}

function startTimer() {
  stopTimer()
  updateClock()
  if (!local.started) return
  timer = setInterval(updateClock, 1000)
}

function setSessionState(name) {
  el.dataset.sessionState = name
  sessionStateLabel.textContent = {
    ready: "Briefing",
    listening: "Live",
    scored: "Scored",
  }[name]
}

function words(text) {
  return text.trim().split(/\s+/).filter(Boolean)
}

function hasAny(text, values) {
  return values.some(function (value) {
    return text.includes(value)
  })
}

function clampScore(value) {
  return Math.max(1, Math.min(5, value))
}

function matchedGroups(text, groups) {
  return groups.reduce(function (count, group) {
    return count + (hasAny(text, group) ? 1 : 0)
  }, 0)
}

function summarize(text) {
  const list = words(text)
  const compact = list.slice(0, 34).join(" ")
  return compact ? `${compact}${list.length > 34 ? "..." : ""}` : ""
}

function scoreDraft(text, mode) {
  const normalized = text.toLowerCase()
  const count = words(text).length
  const dimensions = mode.rubric.map(function (dimension) {
    const matches = matchedGroups(normalized, dimension.groups)
    const lengthFit = count >= mode.minWords && count <= mode.maxWords ? 1 : 0
    const score = clampScore(1 + matches + lengthFit)
    return {
      ...dimension,
      score,
      matches,
      reason:
        score >= 4
          ? "Strong signal for this dimension."
          : dimension.coach,
    }
  })
  const total = dimensions.reduce(function (sum, item) {
    return sum + item.score
  }, 0)
  const weakest = dimensions.reduce(function (lowest, item) {
    return item.score < lowest.score ? item : lowest
  }, dimensions[0])
  const strongest = dimensions.reduce(function (highest, item) {
    return item.score > highest.score ? item : highest
  }, dimensions[0])
  const polish = weakest.score >= 4

  return {
    overall: Math.round((total / dimensions.length) * 10) / 10,
    dimensions,
    weakest,
    strongest,
    transcriptSummary: summarize(text),
    nextRoute: polish ? `polish-${weakest.id}` : weakest.route,
    revisionTarget: polish
      ? `Polish ${weakest.label.toLowerCase()} with one sharper detail.`
      : weakest.coach,
    followUp: polish
      ? "What specific detail would make this answer more memorable?"
      : weakest.followUp,
  }
}

function scoreColor(score) {
  if (score >= 4) return "var(--sim-green)"
  if (score >= 3) return "var(--sim-amber)"
  return "var(--sim-red)"
}

function rankFor(score) {
  if (score >= 4.6) return "Offer-ready pass"
  if (score >= 3.6) return "Strong callback"
  if (score >= 2.6) return "Needs one focused rep"
  return "Reset and rehearse"
}

function buildStageControls() {
  stageControls.replaceChildren(
    ...stageNames.map(function (name, index) {
      const button = document.createElement("button")
      button.type = "button"
      button.dataset.stage = name
      button.textContent = `${index + 1}. ${stageLabels[name] || name}`
      on(button, "click", function () {
        state.set(name)
      })
      return button
    }),
  )
}

function buildModeControls() {
  modeControls.replaceChildren(
    ...Object.entries(modes).map(function (entry) {
      const id = entry[0]
      const mode = entry[1]
      const button = document.createElement("button")
      const strong = document.createElement("strong")
      const span = document.createElement("span")
      button.type = "button"
      button.dataset.mode = id
      strong.textContent = mode.label
      span.textContent = mode.summary
      button.append(strong, span)
      on(button, "click", function () {
        local.mode = id
        local.result = null
        local.started = false
        local.startedAt = 0
        local.elapsed = 0
        answer.value = ""
        answerStatus.textContent = "Waiting for transcript."
        stopTimer()
        render()
        state.set("setup")
      })
      return button
    }),
  )
}

function renderRubric(mode) {
  rubricPreview.replaceChildren(
    ...mode.rubric.map(function (dimension, index) {
      const item = document.createElement("div")
      const title = document.createElement("strong")
      const target = document.createElement("span")
      title.textContent = `Signal ${index + 1}: ${dimension.label}`
      target.textContent = dimension.target
      item.append(title, target)
      return item
    }),
  )
}

function updateSignals() {
  const mode = currentMode()
  const text = answer.value
  const count = words(text).length
  const normalized = text.toLowerCase()
  const totalSignals = mode.rubric.reduce(function (sum, dimension) {
    return sum + matchedGroups(normalized, dimension.groups)
  }, 0)
  const readinessScore = Math.min(
    100,
    Math.round((count / mode.minWords) * 55 + (totalSignals / 16) * 45),
  )
  wordCount.textContent = `${count} ${count === 1 ? "word" : "words"}`
  coverage.textContent = `${totalSignals} signals`
  readiness.textContent =
    count >= mode.minWords
      ? "Ready to debrief"
      : `${Math.max(0, mode.minWords - count)} words to target`
  readinessMeter.style.setProperty("--readiness", `${readinessScore}%`)
  readinessMeter.style.setProperty(
    "--readiness-color",
    readinessScore >= 80
      ? "var(--sim-green)"
      : readinessScore >= 48
        ? "var(--sim-amber)"
        : "var(--sim-red)",
  )
  pressureLabel.textContent =
    readinessScore >= 80
      ? "Composure steady"
      : readinessScore >= 48
        ? "Answer forming"
        : "Pressure rising"
}

function renderScore(result) {
  scoreList.replaceChildren()
  if (!result) {
    roomScore.textContent = "--"
    roomRoute.textContent = "awaiting signal"
    rankLabel.textContent = "Unscored"
    overallScore.textContent = "--"
    scoreSummary.textContent = "No answer has been scored yet."
    followUp.textContent = "Score an answer to get a targeted follow-up."
    nextRoute.textContent = "Answer one question first."
    routeRationale.textContent =
      "The live path should route the next Block from the weakest rubric dimension after evidence is saved."
    evidencePreview.textContent = JSON.stringify(
      { status: "waiting_for_answer" },
      null,
      2,
    )
    return
  }

  roomScore.textContent = String(result.overall)
  roomRoute.textContent = result.nextRoute
  rankLabel.textContent = rankFor(result.overall)
  overallScore.textContent = String(result.overall)
  scoreSummary.textContent = `${result.strongest.label} is the clearest strength. Revision target: ${result.revisionTarget}`
  followUp.textContent = result.followUp
  nextRoute.textContent = result.nextRoute
  routeRationale.textContent = result.nextRoute.startsWith("polish-")
    ? `Polish ${result.weakest.label.toLowerCase()} next, because all rubric dimensions are interview-ready and this is the narrowest upgrade.`
    : `Route next practice to ${result.weakest.label.toLowerCase()}, because it is the lowest scoring dimension.`
  result.dimensions.forEach(function (dimension) {
    const item = document.createElement("div")
    const title = document.createElement("strong")
    const bar = document.createElement("span")
    const fill = document.createElement("span")
    const note = document.createElement("p")
    title.textContent = `${dimension.label}: ${dimension.score} / 5`
    bar.className = "interview-sim__bar"
    bar.style.setProperty("--score-width", `${(dimension.score / 5) * 100}%`)
    bar.style.setProperty("--score-color", scoreColor(dimension.score))
    bar.appendChild(fill)
    note.textContent = dimension.reason
    item.append(title, bar, note)
    scoreList.appendChild(item)
  })
  evidencePreview.textContent = JSON.stringify(
    {
      action: "interview.evidence.save",
      mode: local.mode,
      role: currentMode().role,
      question: currentMode().question,
      transcriptSummary: result.transcriptSummary,
      scores: Object.fromEntries(
        result.dimensions.map(function (dimension) {
          return [dimension.id, dimension.score]
        }),
      ),
      overall: result.overall,
      rank: rankFor(result.overall),
      strength: result.strongest.label,
      revisionTarget: result.revisionTarget,
      followUp: result.followUp,
      nextRoute: result.nextRoute,
    },
    null,
    2,
  )
}

function render() {
  const mode = currentMode()
  roleTitle.textContent = mode.role
  questionText.textContent = mode.question
  liveQuestion.textContent = mode.question
  modeSummary.textContent = mode.summary
  renderRubric(mode)
  updateSignals()
  renderScore(local.result)
  actionBoundary.textContent =
    "interview.evidence.save writes accepted evidence after the learner reviews the summary."
  $$("[data-mode]").forEach(function (button) {
    button.setAttribute(
      "aria-pressed",
      button.dataset.mode === local.mode ? "true" : "false",
    )
  })
  const current = state.get() || stageNames[0]
  $$("[data-stage]").forEach(function (button) {
    button.setAttribute(
      "aria-pressed",
      button.dataset.stage === current ? "true" : "false",
    )
  })
  panels.forEach(function (panel) {
    panel.hidden = panel.dataset.panel !== current
  })
  if (local.started) setSessionState("listening")
  else if (local.result) setSessionState("scored")
  else setSessionState("ready")
  updateClock()
}

on(startSession, "click", function () {
  local.started = true
  local.startedAt = Date.now()
  local.elapsed = 0
  local.result = null
  answerStatus.textContent = "Mock Realtime session is listening."
  state.set("answer")
  startTimer()
  render()
  answer.focus()
})

on(strongSample, "click", function () {
  answer.value = currentMode().strongSample
  local.result = null
  answerStatus.textContent = "Loaded a strong sample transcript."
  updateSignals()
})

on(roughSample, "click", function () {
  answer.value = currentMode().roughSample
  local.result = null
  answerStatus.textContent = "Loaded a rough sample transcript."
  updateSignals()
})

on(clearAnswer, "click", function () {
  answer.value = ""
  local.result = null
  answerStatus.textContent = "Transcript cleared."
  updateSignals()
  answer.focus()
})

on(answer, "input", function () {
  local.result = null
  answerStatus.textContent = "Transcript changed."
  updateSignals()
})

on(scoreAnswer, "click", function () {
  const draft = answer.value.trim()
  if (!draft) {
    answerStatus.textContent = "Write or load an answer before scoring."
    answer.focus()
    return
  }
  local.result = scoreDraft(draft, currentMode())
  local.started = false
  stopTimer()
  answerStatus.textContent = "Debrief complete."
  state.set("score")
  render()
})

on(reviseAnswer, "click", function () {
  state.set("answer")
  render()
  answer.focus()
})

on(showRoute, "click", function () {
  state.set("route")
  render()
})

state.on(render)
ctx.effect(
  function () {
    startTimer()
    return stopTimer
  },
  { when: "presented" },
)
ctx.cleanup(stopTimer)

buildStageControls()
buildModeControls()
if (!state.get()) state.set(stageNames[0])
render()
```
