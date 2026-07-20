---
title: Bookshelf Demo
description: A copyable Literate Component family for composing a skeuomorphic bookshelf from books, shelves, and a bookcase.
route: /labs/bookshelf
---

[@bookshelf]: ./bookshelf.components.md

# Bookshelf Demo

This reference composes three small Literate Components into one visual model:
books supply cover data, shelves own horizontal overflow and wood planks, and a
bookcase supplies the shared frame and color tokens.

## What to copy

- Import the [bookshelf component definitions](./bookshelf.components.md) for
  `<book>`, `<shelf>`, and `<bookcase>`.
- Copy the complete family when you want the shared shelf and bookcase styling;
  each definition keeps its markup and component-scoped CSS together.
- Give every `<book>` a readable `title` and an ISBN. Covers load from the
  [Open Library Covers API](https://openlibrary.org/dev/docs/api/covers) at
  runtime, so the title remains the image fallback when a remote cover is
  unavailable.

Minimum PathMX: `@fellowhumans/pathmx@0.1.9`.

Reviewed upstream commit:
[canonical Bookshelf demo](https://github.com/pathmx/pathmx/blob/da752ad5/paths/demos/bookshelf.demo.md)
and
[component definitions](https://github.com/pathmx/pathmx/blob/da752ad5/paths/demos/bookshelf.components.md).

---

## One model, three component boundaries

<bookcase>
  <shelf>
    <book title="Jane Eyre" isbn="9780141441146" />
    <book title="Pride and Prejudice" isbn="9780141439518" />
    <book title="Wuthering Heights" isbn="9780141439556" />
    <book title="Crime and Punishment" isbn="9780486415871" />
    <book title="Les Miserables" isbn="9780451419439" />
    <book title="To Kill a Mockingbird" isbn="9780060935467" />
  </shelf>
  <shelf>
    <book title="The Great Gatsby" isbn="9780743273565" />
    <book title="The Catcher in the Rye" isbn="9780316769488" />
    <book title="Slaughterhouse-Five" isbn="9780385333481" />
    <book title="The Count of Monte Cristo" isbn="9780140449266" />
    <book title="Animal Farm" isbn="9780451526342" />
    <book title="Fahrenheit 451" isbn="9781451673319" />
  </shelf>
  <shelf>
    <book title="Dune" isbn="9780441172719" />
    <book title="The Lord of the Rings" isbn="9780618640157" />
    <book title="The Hobbit" isbn="9780547928227" />
    <book title="The Hitchhiker's Guide to the Galaxy" isbn="9780345391803" />
    <book title="The Left Hand of Darkness" isbn="9780441478125" />
    <book title="Harry Potter and the Sorcerer's Stone" isbn="9780590353427" />
  </shelf>
  <shelf>
    <book title="The Martian" isbn="9780553418026" />
    <book title="Project Hail Mary" isbn="9780593135204" />
    <book title="The Name of the Wind" isbn="9780756404741" />
    <book title="A Wrinkle in Time" isbn="9780312367541" />
    <book title="Brave New World" isbn="9780060850524" />
    <book title="The Midnight Library" isbn="9780525559474" />
  </shelf>
  <shelf>
    <book title="Sapiens" isbn="9780062316097" />
    <book title="Thinking, Fast and Slow" isbn="9780374533557" />
    <book title="Educated" isbn="9780399590504" />
    <book title="The Alchemist" isbn="9780062315007" />
    <book title="The Silent Patient" isbn="9781250301697" />
  </shelf>
</bookcase>

[Back to the Build Week labs](../index.path.md)
