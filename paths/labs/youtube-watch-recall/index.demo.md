---
type: lesson
status: outline
title: "YouTube Watch and Recall: Feynman on Method"
description: A one-video, provided-transcript demo of watching a short educational clip, inspecting timestamped excerpts, and leaving durable recall answers as Source evidence a Codex task can read back.
route: /labs/youtube-watch-recall
tags: [youtube, transcripts, recall, provided-transcript, demo]
related:
  - ../../research/youtube-learning-skill.path.md
  - ../../tasks/2026-07-21-build-youtube-watch-recall-lab.task.md
  - ./transcript.segments.json
play:
  steps:
    lists: items
    tables: rows
---

# Watch, then recall, then keep the evidence

This is a small demo of the
[YouTube learning skill sketch](../../research/youtube-learning-skill.path.md).
It uses one public, official YouTube embed and one **provided, demo-authored
transcript excerpt** — not scraped captions — to drive a short recall loop.

By the end you will have:

1. watched the first minute of Richard Feynman describing the scientific
   method;
2. inspected five short, timestamped transcript excerpts we authored to match
   that segment; and
3. left three to five durable recall answers as ordinary Source evidence a
   later Codex task can read back with the exact transcript span each answer
   was grounded in.

Boundaries this MVP intentionally keeps:

- Only one video. Only the official YouTube embed.
- Only one transcript mode: **provided**. The excerpts below are demo-authored
  to match the video and are labeled as such in the local
  [`transcript.segments.json`](./transcript.segments.json) with
  `source: provided-vtt`.
- No autoplay. No unofficial caption download. No hidden browser-only state
  for anything a Codex follow-up needs to read.

---

<!--
type: orientation
id: watch-the-video
title: Watch The Video
-->

## Watch the video

<div class="pmx-wide">
<figure>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube-nocookie.com/embed/EYPapE-3FRw?rel=0"
    title="Feynman on Scientific Method — Cornell Messenger Lectures, 1964 (public YouTube embed)"
    frameborder="0"
    loading="lazy"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
  <figcaption>
    Richard Feynman on the scientific method (Cornell Messenger Lectures,
    1964). Public YouTube embed at
    <a href="https://www.youtube.com/watch?v=EYPapE-3FRw">youtube.com/watch?v=EYPapE-3FRw</a>.
  </figcaption>
</figure>
</div>

For this lab, focus on the first sixty to ninety seconds. Feynman lays out a
three-step description of how a new law is found and tested. You do not need
to watch the whole ten-minute clip to answer the recall questions below.

If the video is unavailable in your region or the embed is blocked, the
transcript excerpts in the next Block still support the recall questions.

---

<!--
type: transcript
id: provided-transcript-excerpts
title: Inspect The Provided Transcript Excerpts
-->

## Inspect the provided transcript excerpts

These excerpts are **demo-authored, provided** transcript text. They paraphrase
the opening minute of the linked video closely enough to support recall, but
they were written for this lab, not scraped from YouTube captions. The same
segments live as machine-readable data in
[`transcript.segments.json`](./transcript.segments.json) with
`source: provided-vtt`.

| Start | End   | Excerpt |
| ----: | ----: | ------- |
| 00:04 | 00:18 | "In general, we look for a new law by the following process. First, we guess it." |
| 00:18 | 00:36 | "Then we compute the consequences of the guess to see what it would imply if this law that we guessed were right." |
| 00:36 | 00:54 | "Then we compare the result of the computation to nature — to experiment or experience — to see if it works." |
| 00:54 | 01:12 | "If it disagrees with experiment, it is wrong. In that simple statement is the key to science." |
| 01:12 | 01:28 | "It doesn't make a difference how beautiful your guess is, how smart you are, who made the guess, or what their name is. If it disagrees with experiment, it is wrong." |

The questions that follow point at spans of these excerpts as their evidence.
Hidden `youtube:` topmatter on each question records the exact video id and
start/end seconds so a later Codex task can inspect the grounding without a
browser session.

---

<!--
type: question
id: yt-feynman-three-steps
actions:
  submit: questions.submitSingleChoice
youtube:
  videoId: EYPapE-3FRw
  evidence:
    start: 4.0
    end: 54.0
    source: provided-vtt
-->

## What three steps does Feynman describe for finding a new law?

Pick the option best supported by the first minute of the segment.

- Observe carefully, form a hypothesis, then publish a paper.
- Guess a law, compute its consequences, then compare with experiment.
- Read the current theory, extend it mathematically, then reinterpret older data.
- Design an experiment, run it, then look for a pattern in the results.

---

<!--
type: question
id: yt-feynman-disagreement
actions:
  submit: questions.submitSingleChoice
youtube:
  videoId: EYPapE-3FRw
  evidence:
    start: 54.0
    end: 72.0
    source: provided-vtt
-->

## When the computed consequences disagree with experiment, what does Feynman say about the guess?

Base your answer on the "key to science" segment.

- The guess is wrong.
- The experiment probably needs to be redesigned.
- The guess should be adjusted with a correction term.
- The theory can still be beautiful and useful.

---

<!--
type: question
id: yt-feynman-what-does-not-matter
actions:
  submit: questions.submitSingleChoice
youtube:
  videoId: EYPapE-3FRw
  evidence:
    start: 72.0
    end: 88.0
    source: provided-vtt
-->

## Which of these does *not* rescue a wrong guess, in Feynman's account?

- The reputation of the person who proposed it.
- Whether the consequences were computed carefully.
- Whether the guess was tested against experiment.
- The exact wording of the guess.

---

<!--
type: question
id: yt-feynman-in-your-words
question:
  type: long
actions:
  submit: questions.submitText
youtube:
  videoId: EYPapE-3FRw
  evidence:
    start: 54.0
    end: 88.0
    source: provided-vtt
-->

## In your own words, what is Feynman claiming is the *key* to science?

Try to answer without replaying the video. Two or three sentences is enough;
this Block is not scored automatically. A later Codex task will read your
answer beside the transcript span above.

---

<!--
type: question
id: yt-feynman-your-turn
question:
  type: long
actions:
  submit: questions.submitText
youtube:
  videoId: EYPapE-3FRw
  evidence:
    start: 4.0
    end: 54.0
    source: provided-vtt
-->

## Describe one claim of your own that you could test with Feynman's three steps.

Name the guess. Sketch one consequence you could compute. Note what kind of
observation would either agree or disagree with it.

---

<!--
type: next
id: codex-follow-up
title: Codex Follow-Up Prompt
-->

## Continue in Codex

After you submit the two long-text questions above, copy this prompt into a
Codex task pointed at this repository:

```text
Read my responses in paths/labs/youtube-watch-recall/index.demo.md, especially
the answers to yt-feynman-in-your-words and yt-feynman-your-turn. Cross-check
them against the transcript excerpts and the hidden youtube evidence spans in
each question Block (videoId, start, end, source: provided-vtt). Then propose
one next move: either a follow-up recall question grounded in a different span
of the same transcript, or a tiny experiment I could actually run to test the
guess I described.
```

The point of this lab is not the video. It is that your answers live in
readable Source with hidden pointers back to the exact transcript span that
grounded each question, so a later Codex task can read that evidence directly
instead of trusting a chat summary.

[Back to the labs index](../index.path.md)
