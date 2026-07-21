---
status: personal
owner: Andrew
date: 2026-07-21
related:
  - ./index.path.md
  - ./2026-07-17-build-week-wedge-demo-memory.notes.md
  - ../research/campus-constellation-networking.path.md
  - ../research/campus-constellation.components.md
---

# Reputation Garden + Parallel Lives Outline

Personal concept brief for a playable relationship map that doubles as a local
personal CRM. Intentionally not linked from the team hub yet.

Working name options: **Reputation Garden**, **Constellation Garden**,
**People Garden**. Parallel Lives is a view mode inside it, not a separate app.

---

## Experience Brief

**Thesis:** Your relationships are a living garden on your machine — you can
see who is thriving, wilting, or living in parallel contexts, and your agent
helps you tend the next human move from durable notes you own.

**Arrival:** A garden/map of a few people. Recency is visible at a glance.
Selecting someone reveals how you met, parallel contexts, and the next touch.

**Anti-targets:**
- Not LinkedIn growth hacking
- Not a creepy surveillance CRM
- Not a guilt dashboard that shames you daily
- Not a course about networking theory
- Not a second brain with 40 required fields

**Arc:**
1. See the garden (who needs tending?)
2. Open one person (story + parallel lives)
3. Capture or update a touch
4. Ask Codex for one next move
5. Optional rehearsal Beat before outreach
6. Return and watch the plant/orbit respond

**Controls:** select person, switch Parallel Lives lens, log a touch, change
garden bed / goal, copy a preset prompt for Codex.

**Visible consequences:** freshness changes; plant posture or orbit ring
updates; open loops appear/disappear; parallel-life badges clarify context.

**Protected invariants:**
- Markdown person files remain source of truth
- Capture is intentional (no inbox scraping by default)
- One primary next move at a time
- Recency is informative, not punitive
- Privacy: local-first; learner chooses what is shared

**Proof:** A reviewer can open the garden, spot a wilting contact, read how/when
they met, see two parallel lives, log a touch, and watch freshness recover.

---

## Why This Helps

People do not fail at networking because they lack tips. They fail because:

1. they forget who matters across contexts;
2. they lose the story of how a relationship started;
3. they do not know who has gone quiet;
4. they feel overwhelmed by a flat contact list.

This surface helps by making **memory, context, and recency playable**.

Chess opening lesson: practice a skill instrument.  
Reputation Garden: tend a life-memory instrument.

---

## Core Objects

### Person Source (`people/<slug>.person.md`)

Minimum useful fields:

| Field | Purpose |
| --- | --- |
| Name | Display identity |
| Met how / when / where | Origin story |
| Lives | Parallel contexts (see below) |
| Garden bed | Goal cluster (internship, craft, hometown, …) |
| Strength | weak / warming / strong (optional manual override) |
| Last touched | ISO date; drives wilt/freshness |
| Next move | One concrete human action |
| Open loops | Promises, intros, thank-yous owed |
| Notes | Short durable evidence, not a transcript dump |

Keep the schema small enough that Codex can draft a person from a rough note.

### Garden bed

A cluster tied to a North Star or life area. Examples:

- Internship exploration
- Craft collaborators
- Campus community
- Hometown / family-adjacent
- “Ideas hitchhikers”

Beds are filters for the map, not separate databases.

### Touch

A tiny event: `date`, `channel` (coffee, text, event, class), `note`, optional
`mood` or `outcome`. Append-only in the person Source or a sibling log.

---

## Parallel Lives Board

**Idea:** The same human can exist in multiple contexts without forcing one
label.

Examples for one person:

- Classmate
- Potential collaborator
- Climbing-gym acquaintance

### UX

- Default garden view shows one **primary life** badge per person
- Person panel lists all lives as chips/lanes
- Toggle **Parallel Lives lens**:
  - duplicate presence lightly across beds, or
  - split view with lanes (Campus / Work / Play)
- Explicit warning when contexts collide (“don’t pitch the internship in the
  gym lane unless invited”)

### Why it is helpful

- Prevents awkward context bleed
- Lets AI brief you in the right voice for the right life
- Makes the CRM feel human instead of flattened into “contact”

### AI presets

- `Brief me on Alex for the campus lane only.`
- `I might ask Alex for a collaborator intro — is that mixing lives badly based on my notes?`
- `Add a new life to Priya: recruiter coffee, without erasing classmate.`

---

## Reputation Garden (playable map)

### Visual metaphor

Each person is a plant (or stone + plant) in a bed:

| Freshness | Plant posture | Meaning |
| --- | --- | --- |
| Recent touch (e.g. ≤14 days) | Upright, vivid | Tended |
| Warming (e.g. 15–45 days) | Neutral | Fine |
| Quiet (e.g. 46–90 days) | Drooping | Consider a light touch |
| Dormant (>90 days) | Seed/bulb / mulched | Not dead — resting; intentional reopen |

Exact thresholds should be editable per person (“mom” ≠ “recruiter”).

### Recency as first-class signal

The primary glanceable question:

> Who have I not talked to in a while — that I still care about?

Rules of tone:

- Wilt means “maybe tend,” not “you failed”
- Dormant can be healthy (seasonal relationships)
- Manual pin: “never guilt-wilt” for sensitive ties
- Strength and recency are separate (strong + quiet is allowed)

### Interactions

1. **Glance** — scan beds for droop
2. **Select** — open person story + parallel lives + next move
3. **Water** — log a touch (date + tiny note)
4. **Transplant** — move bed / change primary life
5. **Stake** — set or clear one next move
6. **Ask the gardener (Codex)** — suggest one tending action this week

### Motion / feedback (keep purposeful)

- Soft posture change on water (respect reduced motion)
- Bed filter crossfade
- No confetti for sending a text to a human being

---

## Relationship To Campus Constellation

Campus Constellation is the **starter quest** (goal → practice → mission).  
Reputation Garden is the **ongoing studio** that accumulates people over time.

Possible bridge:

- Constellation mission complete → “plant” the person in the garden
- Garden quiet contact → optional awkward-moment / follow-up rehearsal Beat

Do not require Constellation to use the Garden; keep them composable.

---

## Learner Loop (path shape)

Not a long course. A repeatable tending ritual:

1. **North Star / bed focus** — what am I tending toward this week?
2. **Garden glance** — playable map by recency
3. **Choose one plant** — parallel lives + origin story
4. **Decide** — keep, light touch, deep conversation, or graceful fade
5. **Optional rehearsal** — if the touch is scary
6. **Act in the world**
7. **Log touch** — garden responds
8. **Codex adapt** — update next moves for the bed

Preset ritual pack:

1. Begin: `Help me tend my Reputation Garden for [bed]. Suggest one human I should contact, using only my local people files.`
2. Capture: `I met someone. Draft a person Source from this note: …`
3. Parallel lives: `Add/clarify lives for [name] without flattening context.`
4. Return: `I logged a touch with [name]. Update freshness and propose the next move only if one is needed.`
5. Fade: `Help me gracefully dormancy-archive [name] — no guilt, keep the origin story.`

---

## Helpful Capabilities Checklist

### Must-have for a strong MVP

- Person Markdown schema + 5–8 sample people
- Garden map with recency postures
- Person detail: met how/when, last touch, next move
- Parallel Lives list + lens toggle
- Log-touch flow that updates `last touched`
- One-bed filter
- Preset prompts for Codex intake and weekly tending

### Should-have soon after

- Open-loop ghosts (owed thank-you / intro)
- Per-person wilt threshold
- “Never guilt-wilt” pin
- Bridge from Campus Constellation mission → plant person
- Weekly “tend the garden” path Codex can regenerate

### Later / crazier adjacent

- Serendipity edges (“these two people share a thread in your notes”)
- Time machine (garden in September vs now)
- Graceful-fade ceremony as a first-class Beat
- Future-self casting (people as witnesses to a becoming)
- Belief/idea hitchhikers riding on people nodes

---

## Demo Story (60–90 seconds)

1. Open garden on **Internship** bed — two plants drooping
2. Select **Priya** — met at career fair 67 days ago; lives: recruiter + alumni panelist
3. Parallel Lives lens shows why a casual “what’s up” may be wrong for recruiter lane
4. Codex preset suggests a short alumni-lane thank-you + one question
5. Log touch → plant recovers posture
6. Cut to person Source Markdown — durable CRM the agent can reread tomorrow

Chess proves instruments teach skills.  
Garden proves instruments keep a life.

---

## Risks And Design Guards

| Risk | Guard |
| --- | --- |
| Creepy CRM | Stewardship language; no scraping defaults |
| Guilt UX | Dormant ≠ dead; pins; soft copy |
| Empty garden | Seed sample people for first run |
| Over-schema | Cap required fields hard |
| Context bleed | Parallel Lives warnings |
| AI inventing closeness | Agent may only use written notes; say when unknown |

---

## MVP Build Slices (when ready to implement)

1. **Schema + samples** — `people/*.person.md` + index path
2. **Garden component** — beds + recency postures + select
3. **Person panel** — story, lives, next move, log touch
4. **Parallel Lives lens** — lane filter / dual presence
5. **Preset ritual Source** — five prompts
6. **Optional** — link from Campus Constellation as “plant this person”

No new PathMX plugin required for slice 1–5 if the garden is a Literate
Component over local JSON/Markdown resources.

---

## Open Questions

- Plant metaphor vs orbit constellation — commit to garden, or hybrid?
- Is Parallel Lives a toggle lens or a permanent split board?
- Default wilt thresholds by life type (family vs recruiter)?
- Should “reputation” stay in the name, or does it sound extractive?
- Demo data: fictional cohort vs anonymized real patterns?
- How much of this graduates to `pathmx-learning-starter` vs Build Week lab?

---

## Next Move

Implementation handoff for another agent:

- [Reputation Garden implementation plan](./2026-07-21-reputation-garden-implementation.plan.md)

Naming for MVP is locked there as **Reputation Garden** (soft stewardship
copy in UI).
