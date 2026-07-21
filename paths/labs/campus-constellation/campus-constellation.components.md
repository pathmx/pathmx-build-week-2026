---
status: experimental
---

# Campus Constellation Components

Independent, progressively enhanced practice surfaces for the Campus Constellation path. Component drafts are browser-local; durable choices remain in the path's native question Blocks.

---

<!-- componentName: networking-loop -->

# Networking Loop

Four ordered learning moves that the Player and learner can traverse.

```html
<section class="loop" states="wonder | reach | listen | return" initial-state="wonder" aria-label="{{ label: Networking learning loop }}">
  <header><p>Networking loop</p><h3 data-loop-title>Wonder</h3></header>
  <nav data-loop-controls aria-label="Learning-loop stages"></nav>
  <p data-loop-copy>Decide what you genuinely want to learn.</p>
</section>
```

```css
:self { display:grid; gap:1rem; padding:1.25rem; border:1px solid var(--pmx-color-border,#d7dce5); border-radius:1rem; background:var(--pmx-color-surface,#fff); }
:self header p,:self header h3,:self>p { margin:0; }
:self header p { color:var(--pmx-color-accent,#635bff); font-size:.75rem; font-weight:800; letter-spacing:.08em; text-transform:uppercase; }
[data-loop-controls] { display:grid; grid-template-columns:repeat(4,1fr); gap:.5rem; }
button { min-block-size:2.75rem; border:1px solid var(--pmx-color-border,#d7dce5); border-radius:999px; background:var(--pmx-color-bg,#fff); color:var(--pmx-color-fg,#172033); cursor:pointer; font:inherit; }
button[aria-pressed="true"] { border-color:var(--pmx-color-accent,#635bff); background:var(--pmx-color-accent,#635bff); color:#fff; }
button:focus-visible { outline:3px solid var(--pmx-color-focus,#2563eb); outline-offset:2px; }
@container pathmx-runtime (max-width:32rem) { [data-loop-controls] { grid-template-columns:repeat(2,1fr); } }
```

```js
const moves = {
  wonder: ['Wonder', 'Decide what you genuinely want to learn.'],
  reach: ['Reach', 'Ask one relevant person for a small conversation.'],
  listen: ['Listen', 'Notice one story, insight, or useful next question.'],
  return: ['Return', 'Thank them, act on something useful, and reconnect with a reason.'],
}
const controls = $('[data-loop-controls]')
const title = $('[data-loop-title]')
const copy = $('[data-loop-copy]')
Object.entries(moves).forEach(function ([name, move]) {
  const button = document.createElement('button')
  button.type = 'button'; button.textContent = move[0]; button.dataset.loopState = name
  on(button, 'click', function () { render(name); state.set(name) })
  controls.append(button)
})
function render(name) {
  const move = moves[name]; if (!move) return
  title.textContent = move[0]; copy.textContent = move[1]
  $$('[data-loop-state]').forEach(function (button) { button.setAttribute('aria-pressed', String(button.dataset.loopState === name)) })
}
state.on(function(){render(state.get())}); render(state.get())
```

---

<!-- componentName: north-star-planner -->

# North Star Planner

Turns a broad goal into a visible, editable target. Draft text is not durable evidence.

```html
<section class="planner" states="timeframe | purpose | topic | review" initial-state="timeframe" aria-label="{{ label: North Star goal planner }}">
  <header><p>Goal studio</p><h3>Make your North Star specific</h3></header>
  <div class="fields">
    <label>Time frame<input data-weeks type="number" min="1" max="16" value="4" /></label>
    <label>What should networking help you do?<select data-purpose><option>learn about a career</option><option>prepare for an internship</option><option>build campus relationships</option><option>practice starting conversations</option></select></label>
    <label>Topic or community<input data-topic value="data analytics" /></label>
  </div>
  <output data-goal aria-live="polite"></output>
</section>
```

```css
:self { display:grid; gap:1rem; padding:1.25rem; border:1px solid var(--pmx-color-border,#d7dce5); border-radius:1rem; background:var(--pmx-color-surface,#fff); }
:self header p,:self header h3 { margin:0; } :self header p { color:var(--pmx-color-accent,#635bff); font-size:.75rem; font-weight:800; text-transform:uppercase; }
.fields { display:grid; grid-template-columns:8rem 1fr 1fr; gap:.75rem; } label { font-size:.85rem; font-weight:750; }
input,select { box-sizing:border-box; inline-size:100%; min-block-size:2.75rem; margin-block-start:.35rem; border:1px solid var(--pmx-color-border,#d7dce5); border-radius:.55rem; background:var(--pmx-color-bg,#fff); color:var(--pmx-color-fg,#172033); font:inherit; padding:.55rem; }
input:focus-visible,select:focus-visible { outline:3px solid var(--pmx-color-focus,#2563eb); outline-offset:2px; }
output { display:block; padding:1rem; border-inline-start:.3rem solid var(--pmx-color-accent,#635bff); background:color-mix(in srgb,var(--pmx-color-accent,#635bff) 9%,transparent); font-weight:750; }
@container pathmx-runtime (max-width:38rem) { .fields { grid-template-columns:1fr; } }
```

```js
const weeks = $('[data-weeks]'), purpose = $('[data-purpose]'), topic = $('[data-topic]'), output = $('[data-goal]')
function render() { output.textContent = `Over the next ${weeks.value || 1} weeks, I want networking to help me ${purpose.value} in ${topic.value || 'a field I care about'}.` }
function show(name){const targets={timeframe:weeks,purpose:purpose,topic:topic,review:output};const target=targets[name];if(target&&target.focus)target.focus();$$('[data-play-current]').forEach(function(el){el.removeAttribute('data-play-current')});if(target)target.closest('label')?.setAttribute('data-play-current','')}
on(weeks,'input',render); on(purpose,'change',render); on(topic,'input',render); render()
state.on(function(){show(state.get())})
```

---

<!-- componentName: difficulty-explorer -->

# Difficulty Explorer

Compares the three practice levels without replacing the durable level question.

```html
<section class="difficulty" states="warmup | stretch | expedition" initial-state="warmup" aria-label="{{ label: Practice difficulty explorer }}">
  <header><p>Choose a useful stretch</p><h3 data-level-title>Warm-up</h3></header>
  <div data-level-controls role="group" aria-label="Difficulty levels"></div>
  <p data-level-copy></p><p><strong>Mission:</strong> <span data-level-mission></span></p>
</section>
```

```css
:self { display:grid; gap:1rem; padding:1.25rem; border:1px solid var(--pmx-color-border,#d7dce5); border-radius:1rem; background:var(--pmx-color-surface,#fff); }
:self header p,:self header h3,:self>p { margin:0; } :self header p { color:var(--pmx-color-accent,#635bff); font-size:.75rem; font-weight:800; text-transform:uppercase; }
[data-level-controls] { display:flex; flex-wrap:wrap; gap:.5rem; } button { min-block-size:2.75rem; padding-inline:1rem; border:1px solid var(--pmx-color-border,#d7dce5); border-radius:999px; background:var(--pmx-color-bg,#fff); color:inherit; cursor:pointer; font:inherit; }
button[aria-pressed="true"] { background:var(--pmx-color-accent,#635bff); color:#fff; } button:focus-visible { outline:3px solid var(--pmx-color-focus,#2563eb); outline-offset:2px; }
```

```js
const levels = {
  warmup:['Warm-up','Best when confidence is low or networking is new.','Ask a classmate one curiosity question.'],
  stretch:['Stretch','Best when you can start but want to continue naturally.','Have a five-minute conversation with a campus connection.'],
  expedition:['Expedition','Best when you are ready for purposeful outreach.','Request a 15–20 minute informational conversation.'],
}
const controls=$('[data-level-controls]'), title=$('[data-level-title]'), copy=$('[data-level-copy]'), mission=$('[data-level-mission]')
Object.entries(levels).forEach(function([name,item]) { const b=document.createElement('button'); b.type='button'; b.textContent=item[0]; b.dataset.level=name; on(b,'click',function(){select(name);state.set(name)}); controls.append(b) })
function select(name){ const item=levels[name]; title.textContent=item[0]; copy.textContent=item[1]; mission.textContent=item[2]; $$('[data-level]').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.level===name))}) }
state.on(function(){select(state.get())});select(state.get())
```

---

<!-- componentName: constellation-map -->

# Constellation Map

Explores four relationship perspectives around one learner goal.

```html
<section class="constellation" states="beside | ahead | guide | field" initial-state="beside" aria-label="{{ label: Relationship constellation }}">
  <header><p>Your North Star</p><h3>{{ goal: Explore a career direction }}</h3></header>
  <div class="orbits" data-orbit-controls></div>
  <article aria-live="polite"><p data-orbit-label></p><h4 data-orbit-people></h4><p data-orbit-purpose></p><p><strong>Try asking:</strong> <span data-orbit-question></span></p></article>
</section>
```

```css
:self { display:grid; gap:1rem; padding:1.25rem; border:1px solid var(--pmx-color-border,#d7dce5); border-radius:1rem; background:radial-gradient(circle at 50% 20%,color-mix(in srgb,var(--pmx-color-accent,#635bff) 16%,transparent),transparent 32%),var(--pmx-color-surface,#fff); }
:self header p,:self header h3,:self article p,:self article h4 { margin:0; } :self header { text-align:center; } :self header p,[data-orbit-label] { color:var(--pmx-color-accent,#635bff); font-size:.75rem; font-weight:800; text-transform:uppercase; }
.orbits { display:grid; grid-template-columns:repeat(4,1fr); gap:.5rem; padding:1.5rem; border-radius:999px; background:color-mix(in srgb,var(--pmx-color-accent,#635bff) 8%,transparent); }
button { min-block-size:3rem; border:1px solid var(--pmx-color-border,#d7dce5); border-radius:999px; background:var(--pmx-color-bg,#fff); color:inherit; cursor:pointer; font:inherit; }
button[aria-pressed="true"] { background:var(--pmx-color-accent,#635bff); color:#fff; } button:focus-visible { outline:3px solid var(--pmx-color-focus,#2563eb); outline-offset:2px; }
:self article { display:grid; gap:.5rem; padding:1rem; border-inline-start:.3rem solid var(--pmx-color-accent,#635bff); background:color-mix(in srgb,var(--pmx-color-accent,#635bff) 8%,transparent); }
@container pathmx-runtime (max-width:38rem) { .orbits { grid-template-columns:repeat(2,1fr); border-radius:1rem; } }
```

```js
const choices={beside:['Beside me','Classmate, teammate, or resident assistant','Learn from shared experiences and nearby opportunities.','“What helped you choose this course, club, or major?”'],ahead:['One step ahead','Senior student, recent graduate, or teaching assistant','Learn near-term choices and mistakes they remember.','“What do you wish you had tried one year earlier?”'],guide:['Guide','Professor, advisor, coach, or campus staff','Find resources and practical ways to prepare.','“What experience would help me test whether this field fits?”'],field:['Field signal','Alum, practitioner, recruiter, or community leader','Understand daily work and changing expectations.','“What does a normal week include that students rarely see?”']}
const controls=$('[data-orbit-controls]'), label=$('[data-orbit-label]'), people=$('[data-orbit-people]'), purpose=$('[data-orbit-purpose]'), question=$('[data-orbit-question]')
Object.entries(choices).forEach(function([name,item]){const b=document.createElement('button');b.type='button';b.textContent=item[0];b.dataset.orbit=name;on(b,'click',function(){select(name);state.set(name)});controls.append(b)})
function select(name){const item=choices[name];label.textContent=item[0];people.textContent=item[1];purpose.textContent=item[2];question.textContent=item[3];$$('[data-orbit]').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.orbit===name))})} state.on(function(){select(state.get())});select(state.get())
```

---

<!-- componentName: introduction-builder -->

# Introduction Builder

Builds a short introduction from three editable modules.

```html
<section class="builder" states="present | curiosity | bridge | practice" initial-state="present" aria-label="{{ label: Introduction builder }}">
  <header><p>Conversation opener</p><h3>Build, then say it aloud</h3></header>
  <label>Present<input data-present value="I’m a second-year computer science student" /></label>
  <label>Curiosity<input data-curiosity value="exploring how network engineers keep systems reliable" /></label>
  <label>Bridge<input data-bridge value="your campus-network work made me curious about what beginners misunderstand" /></label>
  <output data-introduction aria-live="polite"></output>
  <button type="button" data-copy>Copy introduction</button><p data-copy-status aria-live="polite"></p>
</section>
```

```css
:self { display:grid; gap:.75rem; padding:1.25rem; border:1px solid var(--pmx-color-border,#d7dce5); border-radius:1rem; background:var(--pmx-color-surface,#fff); }
:self header p,:self header h3,:self>p { margin:0; } :self header p { color:var(--pmx-color-accent,#635bff); font-size:.75rem; font-weight:800; text-transform:uppercase; }
label { font-size:.85rem; font-weight:750; } input { box-sizing:border-box; inline-size:100%; min-block-size:2.75rem; margin-block-start:.3rem; border:1px solid var(--pmx-color-border,#d7dce5); border-radius:.55rem; background:var(--pmx-color-bg,#fff); color:inherit; font:inherit; padding:.55rem; }
output { display:block; padding:1rem; border-radius:.65rem; background:color-mix(in srgb,var(--pmx-color-accent,#635bff) 9%,transparent); font-weight:750; }
button { min-block-size:2.75rem; justify-self:start; border:0; border-radius:999px; background:var(--pmx-color-accent,#635bff); color:#fff; cursor:pointer; font:inherit; padding-inline:1rem; } input:focus-visible,button:focus-visible { outline:3px solid var(--pmx-color-focus,#2563eb); outline-offset:2px; }
```

```js
const fields=[$('[data-present]'),$('[data-curiosity]'),$('[data-bridge]')], output=$('[data-introduction]'), status=$('[data-copy-status]')
function render(){output.textContent=`${fields[0].value}, ${fields[1].value}, and ${fields[2].value}.`} fields.forEach(function(f){on(f,'input',render)})
on($('[data-copy]'),'click',async function(){try{await navigator.clipboard.writeText(output.textContent);status.textContent='Copied. Now practice saying it naturally.'}catch{status.textContent='Copy is unavailable; select the introduction manually.'}});render()
state.on(function(){const target={present:fields[0],curiosity:fields[1],bridge:fields[2],practice:output}[state.get()];if(target&&target.focus)target.focus()})
```

---

<!-- componentName: curiosity-ladder -->

# Curiosity Ladder

Lets the learner choose three conversation questions in a purposeful order.

```html
<section class="ladder" states="story | reality | judgment | action | bridge" initial-state="story" aria-label="{{ label: Curiosity question ladder }}">
  <header><p>Choose up to three</p><h3>Build your conversation route</h3></header>
  <div data-question-list></div><p data-question-count aria-live="polite"></p>
</section>
```

```css
:self { display:grid; gap:1rem; padding:1.25rem; border:1px solid var(--pmx-color-border,#d7dce5); border-radius:1rem; background:var(--pmx-color-surface,#fff); }
:self header p,:self header h3,:self>p { margin:0; } :self header p { color:var(--pmx-color-accent,#635bff); font-size:.75rem; font-weight:800; text-transform:uppercase; }
[data-question-list] { display:grid; gap:.55rem; } button { min-block-size:3rem; border:1px solid var(--pmx-color-border,#d7dce5); border-radius:.65rem; background:var(--pmx-color-bg,#fff); color:inherit; cursor:pointer; font:inherit; padding:.65rem; text-align:start; }
button[aria-pressed="true"] { border-color:var(--pmx-color-accent,#635bff); background:color-mix(in srgb,var(--pmx-color-accent,#635bff) 12%,transparent); } button:disabled { cursor:not-allowed; opacity:.55; } button:focus-visible { outline:3px solid var(--pmx-color-focus,#2563eb); outline-offset:2px; }
```

```js
const questions=['Story — How did you first become interested in this field?','Reality — What does a normal week look like that students rarely see?','Judgment — What separates someone who enjoys this work from someone who only likes the idea?','Action — What small project would you recommend at my stage?','Bridge — What other perspective should I seek before deciding?']
const list=$('[data-question-list]'), count=$('[data-question-count]'), selected=ctx.state(new Set())
const names=['story','reality','judgment','action','bridge']
questions.forEach(function(text,index){const b=document.createElement('button');b.type='button';b.textContent=text;b.dataset.index=String(index);b.dataset.questionState=names[index];on(b,'click',function(){selected.has(index)?selected.delete(index):selected.add(index);state.set(names[index]);render()});list.append(b)})
function render(){const full=selected.size>=3;$$('[data-index]').forEach(function(b){const active=selected.has(Number(b.dataset.index));b.setAttribute('aria-pressed',String(active));b.disabled=full&&!active});count.textContent=`${selected.size} of 3 selected. ${selected.size===3?'You have a conversation route.':'Choose another question.'}`}render()
state.on(function(){const current=$(`[data-question-state="${state.get()}"]`);if(current)current.focus()})
```

---

<!-- componentName: recovery-flashcards -->

# Random Recovery Flashcards

Random prompt-first practice. The learner rehearses before revealing a model response; random order stays private browser state.

```html
<section class="flashcards" states="prompt | coaching" initial-state="prompt" aria-label="{{ label: Random networking recovery flashcards }}">
  <header><p>Random practice card <span data-card-count></span></p><h3>What would you say?</h3></header>
  <article class="card" aria-live="polite">
    <p class="scenario" data-card-scenario></p>
    <div data-card-coaching hidden><p><strong>Try:</strong> <span data-card-response></span></p><p data-card-encouragement></p></div>
  </article>
  <div class="actions"><button type="button" data-reveal>Reveal coaching</button><button type="button" data-next>Random next card</button><button type="button" data-reset>Reset deck</button></div>
</section>
```

```css
:self { display:grid; gap:1rem; inline-size:min(100%,52rem); margin-inline:auto; padding:1.25rem; border:1px solid var(--pmx-color-border,#d7dce5); border-radius:1rem; background:var(--pmx-color-surface,#fff); }
:self header p,:self header h3,.card p { margin:0; } :self header p { color:var(--pmx-color-accent,#635bff); font-size:.75rem; font-weight:800; text-transform:uppercase; }
.card { display:grid; gap:1rem; min-block-size:14rem; align-content:center; padding:clamp(1rem,5cqi,2.5rem); border-radius:1rem; background:linear-gradient(145deg,color-mix(in srgb,var(--pmx-color-accent,#635bff) 14%,transparent),color-mix(in srgb,var(--pmx-color-accent,#635bff) 5%,transparent)); box-shadow:0 .8rem 2rem color-mix(in srgb,#000 10%,transparent); }
.scenario { font-size:clamp(1.2rem,4cqi,1.7rem); font-weight:800; line-height:1.35; } [data-card-coaching] { display:grid; gap:.7rem; padding-block-start:1rem; border-block-start:1px solid var(--pmx-color-border,#d7dce5); }
[data-card-coaching][hidden] { display:none; } .actions { display:flex; flex-wrap:wrap; gap:.5rem; } button { min-block-size:2.75rem; border:1px solid var(--pmx-color-border,#d7dce5); border-radius:999px; background:var(--pmx-color-bg,#fff); color:inherit; cursor:pointer; font:inherit; padding-inline:1rem; }
button[data-reveal] { border-color:var(--pmx-color-accent,#635bff); background:var(--pmx-color-accent,#635bff); color:#fff; } button:disabled { opacity:.5; cursor:not-allowed; } button:focus-visible { outline:3px solid var(--pmx-color-focus,#2563eb); outline-offset:2px; }
@media (prefers-reduced-motion:no-preference) { .card { transition:opacity 160ms ease-out; } }
```

```js
const cards=[
  ['They answer with only one sentence. How do you keep the conversation going?','“That makes sense. What part of that experience surprised you most?”','A short answer is information, not rejection. One curious follow-up is enough.'],
  ['You forget your next question. How do you recover without apologizing?','“You mentioned ___. Could you tell me more about it?”','Listening can give you the next question. You do not need a memorized script.'],
  ['The person says they need to leave. What do you say?','“No problem. Is there a better time, or would a short email be easier?”','Respecting their time leaves the relationship stronger.'],
  ['They use a term you do not know. How do you respond?','“I haven’t encountered that yet. How would you explain it to a student entering the field?”','An honest learning question is more useful than pretending.'],
  ['They say they are not the right person. How do you close gracefully?','“Thank you for letting me know. Is there a resource or perspective you would suggest instead?”','A graceful ending is still successful practice.'],
  ['You realize you have been talking too long. How do you hand the conversation back?','“I’ve shared a lot—what has your experience been like?”','Noticing and rebalancing the conversation is a strong social skill.'],
  ['You disagree with their advice. How can you stay curious?','“That’s different from what I expected. What experience led you to that view?”','Curiosity lets you learn without pretending to agree.'],
]
const scenario=$('[data-card-scenario]'), response=$('[data-card-response]'), encouragement=$('[data-card-encouragement]'), coaching=$('[data-card-coaching]'), reveal=$('[data-reveal]'), count=$('[data-card-count]')
const deck=ctx.state({remaining:[],current:-1,seen:0})
function refill(){deck.remaining=cards.map(function(_,i){return i})}
function randomNext(){if(!deck.remaining.length)refill();const pick=Math.floor(Math.random()*deck.remaining.length);deck.current=deck.remaining.splice(pick,1)[0];deck.seen+=1;const card=cards[deck.current];scenario.textContent=card[0];response.textContent=card[1];encouragement.textContent=card[2];count.textContent=`${deck.seen}`;renderState('prompt');state.set('prompt')}
function renderState(name){const revealed=name==='coaching';coaching.hidden=!revealed;reveal.disabled=revealed}
on(reveal,'click',function(){renderState('coaching');state.set('coaching')});on($('[data-next]'),'click',randomNext);on($('[data-reset]'),'click',function(){deck.remaining=[];deck.seen=0;randomNext()})
state.on(function(){renderState(state.get())})
randomNext()
```

---

<!-- componentName: mission-picker -->

# Mission Picker

Shows one actionable 48-hour mission at a time.

```html
<section class="mission" states="warmup | stretch | expedition" initial-state="warmup" aria-label="{{ label: Networking mission picker }}"><header><p>Next 48 hours</p><h3 data-mission-title></h3></header><div data-mission-controls></div><p data-mission-copy></p><p><strong>Backup version:</strong> <span data-mission-backup></span></p></section>
```

```css
:self { display:grid; gap:1rem; padding:1.25rem; border:1px solid var(--pmx-color-border,#d7dce5); border-radius:1rem; background:var(--pmx-color-surface,#fff); } :self header p,:self header h3,:self>p{margin:0}:self header p{color:var(--pmx-color-accent,#635bff);font-size:.75rem;font-weight:800;text-transform:uppercase}[data-mission-controls]{display:flex;flex-wrap:wrap;gap:.5rem}button{min-block-size:2.75rem;border:1px solid var(--pmx-color-border,#d7dce5);border-radius:999px;background:var(--pmx-color-bg,#fff);color:inherit;cursor:pointer;font:inherit;padding-inline:1rem}button[aria-pressed="true"]{background:var(--pmx-color-accent,#635bff);color:#fff}button:focus-visible{outline:3px solid var(--pmx-color-focus,#2563eb);outline-offset:2px}
```

```js
const missions={warmup:['Warm-up','Ask one classmate what helped them choose this course, club, or major.','Write the question now and ask it at your next shared class.'],stretch:['Stretch','Use your introduction and one Curiosity Ladder question with a professor, staff member, or club peer.','Send a short message requesting five minutes instead.'],expedition:['Expedition','Request a 15–20 minute informational conversation with an alum or professional.','Draft the request and ask a professor or friend for one introduction.']}
const controls=$('[data-mission-controls]'),title=$('[data-mission-title]'),copy=$('[data-mission-copy]'),backup=$('[data-mission-backup]');Object.entries(missions).forEach(function([name,item]){const b=document.createElement('button');b.type='button';b.textContent=item[0];b.dataset.mission=name;on(b,'click',function(){select(name);state.set(name)});controls.append(b)});function select(name){const item=missions[name];title.textContent=item[0];copy.textContent=item[1];backup.textContent=item[2];$$('[data-mission]').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.mission===name))})}state.on(function(){select(state.get())});select(state.get())
```

---

<!-- componentName: evidence-reflection -->

# Evidence Reflection

Supports immediate reflection; drafts remain browser-local until carried into durable learner evidence.

```html
<section class="reflection" states="before | after | reflect" initial-state="before" aria-label="{{ label: Practice evidence reflection }}"><header><p>Capture the signal</p><h3>What changed?</h3></header><label>Confidence before <input data-before type="range" min="1" max="5" value="2" /><output data-before-value>2</output></label><label>Confidence after <input data-after type="range" min="1" max="5" value="3" /><output data-after-value>3</output></label><label>One thing I learned<textarea data-learned></textarea></label><label>One thing I handled well<textarea data-well></textarea></label><p data-reflection-summary aria-live="polite"></p></section>
```

```css
:self{display:grid;gap:1rem;padding:1.25rem;border:1px solid var(--pmx-color-border,#d7dce5);border-radius:1rem;background:var(--pmx-color-surface,#fff)}:self header p,:self header h3,:self>p{margin:0}:self header p{color:var(--pmx-color-accent,#635bff);font-size:.75rem;font-weight:800;text-transform:uppercase}label{display:grid;grid-template-columns:10rem 1fr auto;gap:.75rem;align-items:center;font-weight:750}textarea{grid-column:2/-1;min-block-size:4rem;resize:vertical;border:1px solid var(--pmx-color-border,#d7dce5);border-radius:.55rem;background:var(--pmx-color-bg,#fff);color:inherit;font:inherit;padding:.55rem}input{inline-size:100%}input:focus-visible,textarea:focus-visible{outline:3px solid var(--pmx-color-focus,#2563eb);outline-offset:2px}[data-reflection-summary]{padding:1rem;background:color-mix(in srgb,var(--pmx-color-accent,#635bff) 9%,transparent)}@container pathmx-runtime (max-width:34rem){label{grid-template-columns:1fr auto}label input,label textarea{grid-column:1/-1}}
```

```js
const before=$('[data-before]'),after=$('[data-after]'),beforeValue=$('[data-before-value]'),afterValue=$('[data-after-value]'),summary=$('[data-reflection-summary]');function render(){beforeValue.value=before.value;afterValue.value=after.value;const change=Number(after.value)-Number(before.value);summary.textContent=change>0?'Your confidence increased. Name the behavior that helped.':change<0?'The mission exposed a useful challenge. Make the next practice smaller and specific.':'Confidence held steady. Look for one concrete behavior you improved.'}on(before,'input',render);on(after,'input',render);state.on(function(){const target={before:before,after:after,reflect:$('[data-learned]')}[state.get()];if(target)target.focus()});render()
```

---

<!-- componentName: follow-up-builder -->

# Follow-Up Builder

Builds a concise thank-you from evidence that the learner listened.

```html
<section class="followup" states="learn | change | act | preview" initial-state="learn" aria-label="{{ label: Follow-up message builder }}"><header><p>Close the loop</p><h3>Write a reason-based thank-you</h3></header><label>What they explained<input data-explained /></label><label>What changed for you<input data-changed /></label><label>What you will try<input data-try /></label><output data-message aria-live="polite"></output></section>
```

```css
:self{display:grid;gap:.75rem;padding:1.25rem;border:1px solid var(--pmx-color-border,#d7dce5);border-radius:1rem;background:var(--pmx-color-surface,#fff)}:self header p,:self header h3{margin:0}:self header p{color:var(--pmx-color-accent,#635bff);font-size:.75rem;font-weight:800;text-transform:uppercase}label{font-size:.85rem;font-weight:750}input{box-sizing:border-box;inline-size:100%;min-block-size:2.75rem;margin-block-start:.3rem;border:1px solid var(--pmx-color-border,#d7dce5);border-radius:.55rem;background:var(--pmx-color-bg,#fff);color:inherit;font:inherit;padding:.55rem}input:focus-visible{outline:3px solid var(--pmx-color-focus,#2563eb);outline-offset:2px}output{display:block;padding:1rem;border-inline-start:.3rem solid var(--pmx-color-accent,#635bff);background:color-mix(in srgb,var(--pmx-color-accent,#635bff) 9%,transparent)}
```

```js
const explained=$('[data-explained]'),changed=$('[data-changed]'),trying=$('[data-try]'),message=$('[data-message]');function value(field,fallback){return field.value.trim()||fallback}function render(){message.textContent=`Thank you for explaining ${value(explained,'your experience')}. Your point about ${value(changed,'what matters in this field')} changed how I’m thinking. I’m going to ${value(trying,'act on your advice')}. I appreciate your time.`}[explained,changed,trying].forEach(function(field){on(field,'input',render)});state.on(function(){const target={learn:explained,change:changed,act:trying,preview:message}[state.get()];if(target&&target.focus)target.focus()});render()
```

---

<!-- componentName: route-advisor -->

# Next Route Advisor

Previews the next practice from the learner's hardest moment without replacing the durable reflection question.

```html
<section class="advisor" states="start | continue | anxiety | followup | challenge" initial-state="start" aria-label="{{ label: Next practice advisor }}"><header><p>Adaptive route</p><h3>What needs practice next?</h3></header><select data-challenge><option value="start">Starting the conversation</option><option value="continue">Keeping it going</option><option value="anxiety">Managing anxiety</option><option value="followup">Following up</option><option value="challenge">I am ready for more challenge</option></select><p data-route aria-live="polite"></p></section>
```

```css
:self{display:grid;gap:1rem;padding:1.25rem;border:1px solid var(--pmx-color-border,#d7dce5);border-radius:1rem;background:var(--pmx-color-surface,#fff)}:self header p,:self header h3,:self>p{margin:0}:self header p{color:var(--pmx-color-accent,#635bff);font-size:.75rem;font-weight:800;text-transform:uppercase}select{min-block-size:2.75rem;border:1px solid var(--pmx-color-border,#d7dce5);border-radius:.55rem;background:var(--pmx-color-bg,#fff);color:inherit;font:inherit;padding:.55rem}select:focus-visible{outline:3px solid var(--pmx-color-focus,#2563eb);outline-offset:2px}[data-route]{padding:1rem;border-inline-start:.3rem solid var(--pmx-color-accent,#635bff);background:color-mix(in srgb,var(--pmx-color-accent,#635bff) 9%,transparent);font-weight:750}
```

```js
const routes={start:'Repeat a Warm-up with three people while keeping the same introduction.',continue:'Practice three Curiosity Ladder questions and one listening follow-up.',anxiety:'Choose a shorter mission and rehearse two random recovery flashcards first.',followup:'Draft one thank-you and one reason-based return message.',challenge:'Move one orbit outward and request a longer informational conversation.'};const select=$('[data-challenge]'),route=$('[data-route]');function render(name){const next=name||select.value;select.value=next;route.textContent=routes[next]}on(select,'change',function(){render(select.value);state.set(select.value)});state.on(function(){render(state.get())});render(state.get())
```
