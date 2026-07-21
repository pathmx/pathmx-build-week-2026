---
type: task
status: done
owner: Mark
date: 2026-07-21
related:
  - ../labs/bookshelf/index.demo.md
  - ../labs/bookshelf/bookshelf.components.md
---

# Retune Bookshelf Demo Titles For Build Week

## Outcome

Replace the generic classics on the Bookshelf demo with sci-fi, AI philosophy,
and computing-culture titles that fit an OpenAI Build Week audience.

## Next Move

None — selection swapped and verified in Player.

## Done When

- `paths/labs/bookshelf/index.demo.md` uses Build Week–appropriate titles
- Component examples in `bookshelf.components.md` match the new tone
- Open Library cover ISBNs return real covers (`default=false` → 200)
- Live Player review confirms covers render on `/labs/bookshelf`

## Activity

- 2026-07-21: Claimed and curated five thematic shelves (minds SF, cyberpunk,
  contemporary SF, alignment/philosophy, computing culture).
- 2026-07-21: Corrected the first-slot ISBN/title mismatch (`I, Robot` rather
  than a mislabeled Foundation edition). Player review at
  `http://localhost:3000/labs/bookshelf` loaded all 30 covers.

## Result

Five shelves now read as a Build Week collection: Asimov/Le Guin/Lem/Clarke;
Gibson/Stephenson/Stross/Watts/Egan; Liu/Chiang/Dick/Ishiguro/Weir;
Hofstadter/Bostrom/Tegmark/Russell/Christian; Graham/Petzold/Kidder/Papert/
Waldrop/Mollick. Component examples updated to the same tone.
