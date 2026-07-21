---
status: personal
owner: Andrew
date: 2026-07-17
related:
  - ./index.path.md
  - ../work-log/2026-07-14-hackathon-meeting.notes.md
  - ../labs/practice-interview/index.demo.md
  - ../research/campus-constellation-networking.path.md
  - ../labs/campaign-forge/index.demo.md
  - ../tasks/2026-07-15-spike-starter-init-flow.task.md
---

# Build Week Wedge, Demo, And Memory Notes

Andrew's scratch notes from a July 17 strategy pass. Not team doctrine yet.
Promote useful pieces into research or the submission story when ready.

---

## Working Claim

Codex is the conversation and orchestration surface. PathMX is the durable,
playable learning surface. The learner leaves with a living curriculum,
evidence of learning, and a next step—not only a chat transcript.

Sharper Build Week sentence:

> Codex authors a playable learning product in Markdown — you practice in a
> real local Player, your evidence persists as Source, and the agent's next
> move is grounded in that artifact — so learning doesn't die in chat.

Even sharper product feeling:

> Your tutor and your textbook are both running on your machine — and they
> can see the same work.

---

## Build Week Asks (External)

From OpenAI Build Week / Devpost:

- Track fit: **Education**
- Build with **Codex + GPT-5.6**
- Working runnable project, README, repo, `/feedback` session ID
- Demo video ≤3 minutes with voiceover covering the product **and** how
  Codex / GPT-5.6 were used

Equal-weight judging:

1. **Technological Implementation** — skillful Codex use; non-trivial working code
2. **Design** — complete coherent product experience, not a PoC zoo
3. **Potential Impact** — specific real problem + real audience; demo proves it
4. **Quality of the Idea** — creative/novel vs existing concepts

Internal team tenants still matter (Markdown source of truth, learner brings
the agent, durable Player mutations, starter + skills submission), but judges
score the four criteria above—not PathMX roadmap purity.

---

## Is "Adaptive Teach Loop" Enough?

**B (too thin alone):**
"I asked my coding agent to teach me something hard, and it adapted."

Necessary, but insufficient:

- Collides with Matt Pocock `/teach`-style skills (agent lessons + record)
- "Learn anything" is vague on Impact
- Lab menagerie hurts Design / coherent product
- Pre-existing PathMX Core only counts for Build Week delta + Codex craft

**B′ (stronger):**
Durable playable curriculum + local dual-surface loop + evidence-grounded
adaptation + one specific learner pain.

---

## Local Dual-Surface Advantage

The underrated wow:

- Codex and the localhost Player interact on the same machine
- Platform-agnostic at the agent layer (bring your agent)
- Curriculum lives as ordinary files on the computer
- Same folder is readable by human, Player, and agent

This is not just "offline." It is:

- **Local** — inspectable memory, not a black-box tutor profile
- **Portable** — change machines or agents; keep the curriculum
- **Long-term learning memory** — profile → attempts → artifacts →
  adaptations → next edge, in Markdown

Demo money shot: split-screen handshake.

1. Act in the Player
2. Source file updates
3. Codex reads the file and adapts the next Block

Translation for the video:

| Engineer phrase | Demo phrase |
| --- | --- |
| localhost Player | learning app beside your agent |
| Markdown source of truth | curriculum files you own |
| platform agnostic | bring your agent; keep your materials |
| durable mutations | app actions become tutor evidence |

---

## Making It Impressive Without Becoming Something Else

Substance risk: incredible system, not sexy in three minutes.
Spectacle risk: flashy demo that abandons the PathMX claim.

Reveal order:

1. Desire / human stakes
2. Playable object (app, not notes)
3. Durable Source evidence
4. Live adaptation from that evidence
5. Short range montage (platform power)

Avoid leading with architecture, infra, or ten equal labs.
Avoid betting the hero on fragile live Realtime voice.

---

## Best Ways To Demonstrate

1. **Live Teach Loop** — init/starter → prompt Codex → Player Beat →
   submit → Source changes → Codex adapts
2. **App-not-notes Beat** — one interaction that cannot be a chat bubble
3. **Evidence reveal** — Player → Markdown → agent read
4. **Range montage** — only after the hero lands
5. **Recovery moment** — weak attempt → remediation (optional trust builder)

Suggested timing:

| Time | Beat |
| --- | --- |
| 0:00–0:20 | Stakes + one Codex prompt |
| 0:20–0:50 | Starter / Player opens |
| 0:50–1:40 | One gorgeous interactive practice Beat |
| 1:40–2:10 | Source evidence + Codex adaptation |
| 2:10–2:35 | Range montage |
| 2:35–3:00 | Audience + CTA |

---

## What Someone Should Want To Learn

Prefer topics that are urgent, completable on camera, need practice + feedback,
and are close to existing labs.

### Tier S hero topics

1. **Behavioral interview rehearsal**
   - Existing lab: `paths/labs/practice-interview/`
   - Prompt: teach a frontend-intern behavioral answer, practice in Player,
     adapt from the submitted attempt
2. **Campus networking / one real conversation**
   - Existing path: Campus Constellation
   - Prompt: help a college sophomore start one useful career-event conversation

### Tier A

3. **D&D campaign workshop** — Campaign Forge as craft / studio exhibit
4. **Kepler / instrument intuition** — "not a PDF" STEM receipt

### Supporting only

- Focus/breath as warmup inside interview nerves, not the hero topic
- Rubik's / cooking / discrete math as range later, costly as new heroes now

Default recommendation: **behavioral interview** as hero; Campaign Forge or
Kepler as montage proof of authored interactive quality.

---

## It Does Not Have To Be A Course

PathMX is strong for learning objects that leave durable artifacts:

| Shape | Example | Memory left behind |
| --- | --- | --- |
| Practice arena | interview drills | attempts, rubrics, weak spots |
| Studio / workshop | campaign forge | drafts, decisions, artifact |
| Rehearsal room | awkward conversations | recovery moves, transcripts |
| Field guide + mission | networking quest | real-world evidence + reflection |
| Instrument lab | Kepler / globe | manipulations + inferences |
| Coach loop | teach-me-anything | profile + adapted next edge |
| Playbook / runbook | first-30-days on a job | checklists actually run |
| Research bench | "what should I believe?" | claims, citations, questions |
| Portfolio spine | projects over time | proof of growth |

### More powerful path options to consider later

Career / life:

- Negotiation practice
- New-job onboarding playbook
- Manager hard-conversation rehearsal

Creative craft:

- Songwriting / beat sheet studio
- Design critique studio
- Living worldbuilding bible

Embodied:

- Rubik's / cooking / instrument practice with session logs

STEM / meta:

- Systems-thinking bench
- Debugging dojo
- Exam-season command center
- Accessibility-adapted Persona paths

"Not education product" but still learning:

- Personal research OS
- Health-literacy visit prep
- Travel competence pack
- Family project decision log

Pattern: anything where tomorrow-you needs yesterday's attempts.

---

## Andrew Plate (At Time Of Writing)

Owned:

- Finish authoring-skill / Campaign Forge lab tour after Mark's Play pass

Hinge / reviewer:

- Starter init spike (Mark)
- Learner starter + submission prep (unassigned; likely needs an owner)

Strategic next moves if this wedge holds:

1. Lock hero scenario (interview vs campus networking)
2. Design the 60-second Player moment + evidence/adapt cut
3. Stay close to Mark's init as the demo cold start
4. Keep Campaign Forge / Kepler / globe as range receipts, not co-heroes
5. Volunteer to own or co-own submission packaging when ready

---

## Open Questions

- Hero = interview rehearsal or campus networking?
- Should long-term memory (multi-session dossier) be shown even if simulated?
- What exactly graduates into `pathmx-learning-starter` vs stays Build Week labs?
- How explicitly should the video name local files / portability vs just show them?
