---
title: Start A Learning Space With Codex
description: The one-prompt learner and judge flow for the hosted PathMX bootstrap.
route: /guides/start-learning-with-codex
---

# Start a Learning Space with Codex

This is the shortest supported path from a learning goal to a personal PathMX
repository. It uses the same hosted bootstrap and learner workflow exercised by
the automated eval harness.

## Before you begin

Open an empty folder in Codex Desktop. Codex needs permission to read and write
that folder, run local commands, and reach GitHub and the package registry. You
do not need to install Bun or PathMX first; the bootstrap tells the agent how to
check and set them up.

## Send one prompt

Replace the bracketed text with a real goal:

```text
Follow the instructions at https://raw.githubusercontent.com/pathmx/pathmx-skills/main/bootstrap.md. Create a new learning space in ./learning-space and help me learn [your topic or goal].
```

The raw GitHub URL is intentionally plain text that an agent can fetch. It
always points to the current canonical bootstrap on the `main` branch of
`pathmx-skills`.

## What a successful setup looks like

Codex should:

1. read the hosted bootstrap before improvising;
2. check Bun, install or update PathMX to the current Labs release, and
   report the versions it actually used;
3. create `./learning-space` from the public Learning Starter and read its
   repository instructions;
4. ask only the questions needed to shape a visible milestone map;
5. author a buffered first module so one session does not depend on another
   long agent turn;
6. start or confirm a Player server and link you to the most useful Path,
   Source, Block, or Beat.

The repository—not the chat transcript—is the durable learning space. Your
profile, map, sessions, activity, annotations, and later adaptations stay in
ordinary files you control.

## If the agent cannot fetch the URL

Open the [canonical bootstrap](https://raw.githubusercontent.com/pathmx/pathmx-skills/main/bootstrap.md)
yourself and paste its contents into Codex. If network access is disabled,
grant it temporarily or clone the public
[Learning Starter](https://github.com/pathmx/pathmx-learning-starter) and open
that folder directly.

## Team testing

For a repeatable human review with explicit observations, use the
[self-learning manual test](./self-learning-manual-test.guide.md). Record where
the agent first becomes useful, any silent wait longer than expected, whether
the learner can finish a session without another agent turn, and whether the
return flow adapts from durable evidence.

[Back to the Learning Labs](../index.path.md)
