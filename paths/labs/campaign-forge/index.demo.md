---
type: workshop
status: experiment
title: Build a Dungeons & Dragons Campaign
description: A compact, playable workshop for turning one fantasy premise into a campaign and a runnable first session.
route: /labs/campaign-forge
tags: [tabletop, campaign-design, storytelling]
theme:
  forceColorScheme: dark
  color:
    bg: "#10100f"
    fg: "#f5ecda"
    muted: "#c3b69f"
    surface: "#1b1a17"
    link: "#f3c969"
    accent: "#e9ad43"
    border: "#554a38"
    focus: "#ffe29a"
  font:
    heading: 'Georgia, "Times New Roman", var(--pmx-font-heading)'
  measure: 74ch
  prose:
    size: 1rem
    leading: 1.68
    flow: 1.05em
  shape:
    radius: 0.65rem
  code:
    bg: "#171612"
---

[@campaign]: ./lantern-clock.component.md
[@styles]: ./campaign-forge.css

# Build a Dungeons & Dragons Campaign

In this lab, you will turn one sentence into a campaign your group can begin
playing. You do not need a world encyclopedia, a finished map, or a planned
ending. You need a promise, a pressure, and choices that can change what
happens next.

We will build **The Lanterns of Duskmere**, a small fantasy campaign about a
town whose protective lights are going dark.

By the end, you will have:

- a campaign promise;
- three factions that want incompatible things;
- five places worth visiting;
- a first session with a strong opening; and
- a one-page campaign card you can keep changing after play.

Bring a blank page and about 45 minutes. No rules mastery required.

---

<!--
type: lesson
id: campaign-engine
title: Find the campaign engine
-->

## Start with a campaign engine

A campaign is not a plot the players must follow. It is a situation that keeps
producing meaningful choices.

Use this engine:

1. **Promise:** What kind of adventure are we here to have?
2. **Pressure:** What gets worse if nobody acts?
3. **Choice:** What can the characters genuinely decide?
4. **Consequence:** How does the world answer their decision?

For Duskmere:

> **Promise:** Protect a strange marsh town while uncovering why its guardian
> lanterns are failing. **Pressure:** Each dark lantern lets something ancient
> move closer. **Choice:** Repair the old pact, replace it, or break it.

Advance the lantern clock to see how pressure changes the situation without
deciding what the players must do.

<lantern-clock />

Notice what is missing: the correct ending. The players will create that at the
table.

---

<!--
type: practice
id: write-promise
title: Write the promise
-->

## Write your one-sentence promise

Complete this sentence:

> We are **[who the characters are]** trying to **[what they can change]**
> before **[the pressure becomes unavoidable]**.

Keep the scope playable. “Save all existence” gives you little to touch.
“Keep three lanterns lit until the drowned moon rises” gives you people,
places, a clock, and hard choices.

Stress-test your sentence:

- Can the players picture what they might do next session?
- Does failure change the situation instead of simply ending the game?
- Could two reasonable heroes disagree about the right answer?

If all three answers are yes, keep going.

---

<!--
type: model
id: faction-triangle
title: Build a faction triangle
-->

## Give three factions incompatible hopes

Interesting factions do not divide neatly into good and evil. Each should want
something understandable that creates a cost for somebody else.

### The Wickkeepers

- **Want:** Restore the ancient lantern pact.
- **Reason:** It protected Duskmere for generations.
- **Cost:** One resident must become the next immortal keeper.

### The Reed Council

- **Want:** Replace magic with alchemical beacons.
- **Reason:** Nobody should be sacrificed to an old promise.
- **Cost:** The beacons poison part of the marsh.

### The Drowned Court

- **Want:** Let every lantern go dark.
- **Reason:** The town was built on land stolen from the marsh.
- **Cost:** Hundreds of living residents would lose their homes.

Draw a triangle. Put one faction at each corner. On every edge, write one thing
the neighboring factions can cooperate on and one thing they cannot forgive.
Now any alliance carries tension.

---

<!--
type: practice
id: five-place-map
title: Map only what matters
-->

## Map five places, not a continent

Your first map is a menu of decisions. Give every place a question or danger
that can change the campaign.

1. **The Crooked Jetty:** Who keeps relighting the dead harbor lantern?
2. **Saint Orra's Bell:** Why does it ring from beneath the water?
3. **The Glasshouse:** Which alchemist is hiding the beacon's true cost?
4. **Wickkeeper Hall:** Whose name has appeared in the succession book?
5. **The Sunken Road:** What returns when travelers carry no flame?

For your campaign, name five places. Beside each, write:

- one sensory detail the players will notice immediately;
- one person or creature that wants something there; and
- one question you are excited to discover through play.

Leave the answer blank. A useful mystery invites play; it does not conceal a
paragraph you already decided is true.

---

<!--
type: model
id: session-one-spine
title: Build the first session
-->

## Build a session that can bend

Prepare situations, not a required sequence. Duskmere's first session has four
pieces:

### 1. Open with a change

During the characters' arrival festival, the harbor lantern turns black and a
boat crashes into the Crooked Jetty.

### 2. Put a person in immediate need

A soaked courier is trapped under the wreckage while something circles below.
The rescue reveals a sealed message addressed to a character.

### 3. Offer three leads

- Follow wet footprints toward Wickkeeper Hall.
- Question the alchemist who inspected the lantern yesterday.
- Take the courier's message to Saint Orra's Bell.

### 4. End on a changed situation

Whichever lead the party follows, a second lantern fails. The faction they
ignored acts without them.

The leads can happen in any order. The consequence responds to the party
instead of punishing them for missing your preferred scene.

---

<!--
type: practice
id: session-one-draft
title: Draft the first session
-->

## Draft your first session

Write one line for each prompt:

1. **Visible change:** What happens that cannot be ignored?
2. **Person in need:** Who makes the situation matter now?
3. **Three leads:** Where can the players choose to go?
4. **Flexible obstacle:** What danger fits more than one lead?
5. **World response:** What changes after the players act?

Then remove any scene that only works if the players make one specific choice.
Keep names, motives, locations, and pressures; those ingredients are easy to
move when the party surprises you.

---

<!--
type: review
id: pressure-test
title: Pressure-test the campaign
-->

## Ask three dangerous questions

Before play, challenge the design from three directions.

### What if the party refuses the main quest?

- **Weak answer:** Nothing happens.
- **Stronger revision:** The factions recruit, bargain, and act while the
  pressure advances.

### What if they befriend the apparent villain?

- **Weak answer:** The story breaks.
- **Stronger revision:** The new alliance reveals a cost and creates a
  different enemy.

### What if they fail the first challenge?

- **Weak answer:** Try the same roll again.
- **Stronger revision:** They succeed at a cost, lose time, or face a changed
  situation.

Failure should create the next decision. It should not close the book.

For Duskmere, a failed rescue might save the courier but lose the message to
the marsh. Now the party must decide who to trust about its contents.

---

<!--
type: artifact
id: campaign-card
title: Make the campaign card
-->

## Put the whole campaign on one card

Copy this template into your notes and fill it with short phrases:

```md
# Campaign title

## Promise
We are ... trying to ... before ...

## Pressure
When the characters wait or fail, ...

## Factions
- Name — wants — cost
- Name — wants — cost
- Name — wants — cost

## Five places
1. Place — question
2. Place — question
3. Place — question
4. Place — question
5. Place — question

## First session
- Visible change:
- Person in need:
- Three leads:
- Flexible obstacle:
- World response:
```

If the card overflows, cut lore before you cut choices.

---

<!--
type: reflection
id: after-play
title: Let play rewrite the plan
-->

## After the session, keep only living threads

Spend five minutes recording what actually mattered:

- **A choice:** What decision showed what the party cares about?
- **A consequence:** What changed because of that decision?
- **A curiosity:** What did the players want to learn more about?
- **A loose thread:** Which person, place, or danger might return?

Prepare the next session from those four signals. Promote a side character the
players loved. Let an ignored faction advance its plan. Retire mysteries nobody
cares about.

That is the campaign loop: offer pressure, honor choices, show consequences,
and build from the evidence your table gives you.

[Back to the Build Week labs](../index.path.md)
