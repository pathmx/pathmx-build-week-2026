---
status: personal
owner: Andrew
date: 2026-07-21
related:
  - ./index.path.md
  - ./2026-07-17-build-week-wedge-demo-memory.notes.md
  - ./2026-07-21-reputation-garden-outline.notes.md
  - ../research/campus-constellation-networking.path.md
  - ../research/campus-constellation.components.md
  - ../labs/focus-components/index.demo.md
  - ../../.agents/skills/pathmx-authoring/SKILL.md
---

# Reputation Garden — Implementation Plan For Agents

Handoff plan for another agent to implement the first Reputation Garden lab.
Product intent lives in
[2026-07-21-reputation-garden-outline.notes.md](./2026-07-21-reputation-garden-outline.notes.md).
This file is the **build contract**: locked decisions, file map, schemas,
component behavior, path outline, slices, acceptance checks, and out of scope.

**Owner intent (Andrew):** personal / branch-local until promoted. Implement as
a Build Week lab under `paths/labs/reputation-garden/`. Do **not** link from
`paths/andrew/`. Do link from `paths/labs/index.path.md` when the lab is
playable. Do not invent PathMX plugins or Host Actions.

---

## 0. Agent Preamble

Before editing:

1. Read repo `AGENTS.md` and `.agents/skills/pathmx-authoring/SKILL.md`.
2. Read the outline linked above.
3. Skim `paths/research/campus-constellation.components.md` and
   `paths/labs/focus-components/` for Literate Component patterns.
4. `pathmx self-update` and note the version in the owning task.
5. Create or claim a dated task (`owner` = human accountable; reviewer Mark,
   Tram, or Andrew). Update `paths/tasks/index.tasks.md` in the same change.
6. Prepend a change-log Block before pushing shared work.

Implement with ordinary Markdown + one Literate Component family. Prefer
readable Sources over clever runtime. Private browser state may power the
garden interaction; durable CRM truth stays in Markdown person Sources.

---

## 1. Locked Decisions (Do Not Re-Litigate In MVP)

| Topic | Decision |
| --- | --- |
| Lab id / route | `reputation-garden` → `/labs/reputation-garden` |
| Display name | **Reputation Garden** in titles; in-UI microcopy prefers “your garden,” “tend,” “dormant,” never “leads” or “pipeline” |
| Metaphor | Garden plants in beds (not orbit hybrid) |
| Parallel Lives | Toggle **lens** on the garden (default off). Person panel always lists lives |
| Data truth | `people/*.person.md` are canonical for humans/agents |
| Playable data | `garden.people.json` resource mirrors samples for the component |
| Sync rule | When editing sample CRM content, update **both** the `.person.md` and the JSON mirror in the same commit |
| Touch logging in Player | Updates component state + visible freshness immediately; also exposes a Codex preset to persist into the person Source |
| Durable PathMX evidence | Optional single-choice or short reflection Block after tending — do not invent new Action types |
| Campus Constellation bridge | **Out of scope** for MVP |
| Inbox/calendar scraping | **Forbidden** |
| Naming alternatives | Do not rename the lab folder in MVP |

---

## 2. Success Definition

A reviewer can:

1. Open `/labs/reputation-garden` in Play.
2. Filter to the **Internship** bed and see at least two drooping/quiet plants.
3. Select **Priya** (or equivalent sample), read how/when they met, and see ≥2
   parallel lives.
4. Toggle Parallel Lives lens and understand context-bleed caution copy.
5. Log a touch and watch plant posture recover.
6. Copy a preset prompt that tells Codex to persist the touch into Source.
7. Open the matching `people/*.person.md` and recognize the same human.

Narrow viewport (~390px) must not horizontally overflow. Keyboard can reach
bed filters, plant selects, lens toggle, and log-touch controls. Reduced motion
disables non-essential transitions.

---

## 3. Target File Map

Create this tree:

```text
paths/labs/reputation-garden/
├── index.demo.md                 # playable tending path
├── reputation-garden.components.md
├── reputation-garden.css         # optional; prefer scoped component CSS first
├── garden.people.json            # component resource mirror
├── prompt-ritual.path.md         # five Codex presets (link from demo)
└── people/
    ├── index.path.md             # catalog of person Sources
    ├── priya-nair.person.md
    ├── marcus-chen.person.md
    ├── jordan-okonkwo.person.md
    ├── sam-reyes.person.md
    ├── avery-kim.person.md
    └── riley-booth.person.md
```

Also:

- Link the demo from `paths/labs/index.path.md` (Demos list).
- Do **not** add links from `paths/index.path.md` hub unless asked.
- Keep Andrew outline files untouched except relative links if needed.

---

## 4. Person Source Schema

Use ordinary Markdown with YAML frontmatter. Filename: `kebab-name.person.md`.

### Frontmatter contract

```yaml
---
type: person
status: sample
name: Priya Nair
slug: priya-nair
primaryLife: alumni-panelist
lives:
  - id: alumni-panelist
    label: Alumni panelist
    bed: internship
  - id: recruiter
    label: Recruiter coffee
    bed: internship
beds:
  - internship
strength: warming
lastTouched: 2026-05-15
touchStaleDays:
  recent: 14
  warming: 45
  quiet: 90
neverGuiltWilt: false
nextMove: Send a short alumni-lane thank-you and one sincere question.
openLoops:
  - Thank her for the career-fair conversation
met:
  when: 2026-05-15
  where: Campus career fair
  how: Asked about transitioning from CS into PM
---
```

### Body contract

```md
# Priya Nair

## Origin

One short paragraph: how you met and why they matter.

## Notes

- Bullet evidence only (no raw dumps)

## Touches

- `2026-05-15` · event · Met at career fair; warm 10-minute chat
```

### Freshness derivation

Given `lastTouched` (ISO date) and optional `touchStaleDays`:

| State | Default rule | Plant posture |
| --- | --- | --- |
| `recent` | age ≤ 14d | upright / vivid |
| `warming` | 15–45d | neutral |
| `quiet` | 46–90d | drooping |
| `dormant` | > 90d | mulched seed/bulb |

If `neverGuiltWilt: true`, force display state `recent` styling with badge
“pinned — no guilt wilt” (still show real last-touched date in the panel).

`strength` is independent of freshness.

---

## 5. JSON Mirror Contract (`garden.people.json`)

Array of person objects consumed by the component. Keep field names stable:

```json
{
  "generatedFor": "reputation-garden-mvp",
  "asOf": "2026-07-21",
  "people": [
    {
      "id": "priya-nair",
      "name": "Priya Nair",
      "source": "./people/priya-nair.person.md",
      "primaryLife": "alumni-panelist",
      "lives": [
        {
          "id": "alumni-panelist",
          "label": "Alumni panelist",
          "bed": "internship"
        },
        {
          "id": "recruiter",
          "label": "Recruiter coffee",
          "bed": "internship"
        }
      ],
      "beds": ["internship"],
      "strength": "warming",
      "lastTouched": "2026-05-15",
      "touchStaleDays": { "recent": 14, "warming": 45, "quiet": 90 },
      "neverGuiltWilt": false,
      "nextMove": "Send a short alumni-lane thank-you and one sincere question.",
      "openLoops": ["Thank her for the career-fair conversation"],
      "met": {
        "when": "2026-05-15",
        "where": "Campus career fair",
        "how": "Asked about transitioning from CS into PM"
      },
      "origin": "Met during a crowded career-fair walkaround...",
      "notes": ["Warm, specific advice about PM internships"]
    }
  ]
}
```

Bed ids to use in MVP: `internship`, `campus`, `craft`, `hometown`.

---

## 6. Sample Cohort Requirements

Ship **6 fictional** people (no real private contacts):

| Person | Bed(s) | Freshness goal | Parallel lives |
| --- | --- | --- | --- |
| Priya Nair | internship | quiet (~60–70d before demo date) | alumni-panelist + recruiter |
| Marcus Chen | internship | drooping/quiet | mentor |
| Jordan Okonkwo | campus | recent | classmate + club-lead |
| Sam Reyes | craft | warming | collaborator |
| Avery Kim | hometown | dormant + `neverGuiltWilt: true` | family-friend |
| Riley Booth | campus + craft | warming | classmate + collaborator (multi-bed) |

Pick `lastTouched` dates relative to implementation day so postures match the
table. Recompute before handoff screenshots if needed.

Tone: stewardship, warm, specific. No “leads,” “funnel,” or “exploit.”

---

## 7. Literate Component Spec

File: `reputation-garden.components.md`

### Components

1. `<reputation-garden>` — main instrument
2. Optional inner structure can be plain HTML inside that one component for MVP.
   Do not create a large component family unless needed.

### Suggested attributes / props

- `label` — aria label
- `resource` / documented resource hook for `garden.people.json` (follow local
  Literate Component resource patterns used in chess/globe labs)
- `states` if using ordered Player states — prefer:

```text
glance | person | tended
```

Where:

- `glance` — garden + filters + lens
- `person` — detail panel open
- `tended` — after a successful log-touch in-session

If ordered states fight the UX, keep a single interactive surface with clear
Context Actions instead — but document the choice in the task.

### Required UI regions

1. **Bed filter** — All + each bed id (native `<button>`s)
2. **Parallel Lives lens toggle** — native button, `aria-pressed`
3. **Garden plot** — one selectable control per person (button)
4. **Person panel** — name, origin/met, lives, last touched, freshness label,
   next move, open loops, log-touch form
5. **Context-bleed note** — shown when selected person has ≥2 lives
6. **Preset strip** — readonly textarea or copy-friendly block with the active
   Codex prompt for the current phase

### Log-touch form (in panel)

Fields:

- date (default today)
- channel: `coffee | text | event | call | class | other`
- note (short text)

On submit (in-browser):

1. Set in-memory `lastTouched` to the chosen date
2. Recompute freshness/posture
3. Append a visible “pending persistence” note
4. Refresh preset to the Return prompt filled with that person
5. Do **not** silently claim the Markdown file was rewritten unless a real
   PathMX Action did it

### Parallel Lives lens behavior

- Off: each person appears once, using `primaryLife` badge
- On: people with multiple lives can appear once per life **or** show multi
  badges without duplicating plants if duplication gets noisy — prefer **one
  plant with multiple life chips** if collision is messy; document choice
- Always keep person panel lives list complete

### Accessibility

- Native buttons/inputs only for controls
- Visible focus rings (≥3px high contrast)
- `aria-live="polite"` on freshness/posture changes
- No information only in color — pair posture with text label
- `prefers-reduced-motion: reduce` disables posture animation

### No-JS fallback

Readable static list of people (name, bed, last touched, next move) in the
component template or adjacent Markdown so the path still works as a CRM index.

---

## 8. Path Outline (`index.demo.md`)

Type: demo/workshop. Route: `/labs/reputation-garden`.

Keep **one job per Block**. Suggested Block sequence:

| # | Block id | Job |
| --- | --- | --- |
| 1 | `why-garden` | Thesis + anti-targets in 1 short section |
| 2 | `choose-bed` | Explain beds; optional single-choice North Star / bed focus if easy with existing question Action — otherwise plain Markdown choice instruction |
| 3 | `garden-glance` | Mount `<reputation-garden>` |
| 4 | `read-parallel-lives` | Teach the lens + context-bleed idea; point at Priya |
| 5 | `log-a-touch` | Instruct learner to water one quiet plant |
| 6 | `persist-with-codex` | Show Return preset; link person Source |
| 7 | `prompt-ritual` | Link `prompt-ritual.path.md` |
| 8 | `what-this-proves` | Chess contrast + local memory claim |

Theme: calm stewardship. Avoid purple-glow AI clichés; use earthy garden tokens
(soil, leaf, soft light) with accessible contrast. Follow design-engineering
reference for motion and focus.

---

## 9. Prompt Ritual (`prompt-ritual.path.md`)

Exactly five presets (learner voice):

1. **Begin**
   `Help me tend my Reputation Garden for the internship bed. Read only paths/labs/reputation-garden/people/ and garden.people.json. Suggest one human to contact and why, using written notes only.`
2. **Capture**
   `I met someone. Draft a new people/<slug>.person.md and a matching garden.people.json entry from this note: """ … """`
3. **Parallel lives**
   `Add or clarify parallel lives for <name> without flattening context. Warn me if a proposed ask mixes lives badly.`
4. **Return / persist touch**
   `I tended <name> on <date> via <channel>: "<note>". Update lastTouched, Touches, freshness fields in both the person Source and JSON mirror. Propose a next move only if one is needed.`
5. **Fade**
   `Help me gracefully mark <name> dormant — no guilt. Keep the origin story. Set a calm next review date if useful.`

Render each as a copyable fenced block or prompt chip pattern if a tiny chip
component is easy; otherwise Markdown quotes are enough for MVP.

---

## 10. Implementation Slices (Execute In Order)

### Slice A — Schema + samples
- Create `people/*.person.md` + `people/index.path.md`
- Create `garden.people.json`
- Acceptance: six people open as readable Markdown; dates produce mixed postures

### Slice B — Component shell
- Author `<reputation-garden>` with bed filters + plant buttons + panel
- Wire JSON resource
- Acceptance: selecting Priya shows met/lives/next move

### Slice C — Recency postures + log touch
- Derive freshness in JS from `lastTouched`
- Implement posture classes + text labels
- Log-touch updates session state
- Acceptance: watering a quiet plant moves it to `recent` in-session

### Slice D — Parallel Lives lens + bleed copy
- Toggle lens + caution note for multi-life people
- Acceptance: keyboard-toggle works; copy is stewardship-toned

### Slice E — Demo path + presets + labs index link
- Write `index.demo.md` + `prompt-ritual.path.md`
- Link from `paths/labs/index.path.md`
- Acceptance: full Play route works desktop + 390px

### Slice F — Verify + task evidence
- Run checks below; record in task; change log; push

Do not start Campus Constellation integration in these slices.

---

## 11. Explicit Out Of Scope

- Real CRM import (LinkedIn, Contacts, Gmail)
- Server-side persistence Host Actions
- Push notifications / nag reminders
- Serendipity edges, time machine, future-self casting
- Voice interview integration
- Renaming Campus Constellation
- Graduating into `pathmx-learning-starter` (separate task later)
- Hard dependency on D&D campaign forge patterns

---

## 12. Verification Checklist

Record all of this in the owning task:

```sh
pathmx self-update
pathmx --version
pathmx build -o .pathmx-check
git diff --check
./scripts/check-change-log.sh origin/main   # before push
```

Play / Browse:

- `/labs/reputation-garden` loads
- Bed filter changes visible set
- Priya detail + ≥2 lives
- Lens toggle
- Log touch → posture/label update
- 390×844: no horizontal overflow
- Keyboard tab order through controls; visible focus
- Reduced-motion: no essential info lost
- No-JS / readable fallback inspected (source or Browse degraded path)

Build diagnostics: only pre-existing known warnings (e.g. Tufte) unless you
introduce new ones — fix new ones.

---

## 13. Change Log / Task / PR Notes For The Implementing Agent

- Task title suggestion: `Build Reputation Garden MVP lab`
- Owner: human (Andrew unless reassigned); reviewer: Mark or Tram
- Change-log Block: outcome-first — lab route, what the garden proves, checks
- If working on Andrew’s personal branch only for notes, implement the lab on a
  **new** `cursor/<descriptive>-e6b1` branch off latest `main` unless Andrew
  says otherwise
- Do not commit private contacts, credentials, or real learner data

---

## 14. Design Tokens (Starting Point)

Use source/component CSS variables; adjust for contrast:

```css
--rg-soil: #2c261f;
--rg-leaf: #3f6b4d;
--rg-leaf-quiet: #8a9a7b;
--rg-bloom: #d4a373;
--rg-mulch: #6b5b4b;
--rg-paper: #f4efe6;
--rg-ink: #1e1a16;
```

Avoid purple-on-white AI defaults and heavy glow. Cards only if required for
the interactive garden plot; person panel may be a simple adjacent region.

---

## 15. Done When (MVP Exit)

- [ ] Lab exists at `paths/labs/reputation-garden/` with route working
- [ ] Six sample person Sources + JSON mirror in sync
- [ ] Playable garden with bed filter, postures, select, log touch
- [ ] Parallel Lives lens + multi-life caution
- [ ] Five preset prompts linked
- [ ] Labs index link added
- [ ] Verification recorded; change log updated; branch pushed
- [ ] No Campus bridge required for acceptance

---

## 16. Message To The Implementing Agent

Build the **stewardship garden**, not a sales CRM. If a choice appears between
more features and clearer tending of one quiet relationship, choose clarity.
When uncertain about PathMX syntax, copy an implemented lab pattern and use
`pathmx-authoring` — do not invent contracts.
