# Bookshelf Components

A skeuomorphic bookshelf built from three components: individual books, shelves to
hold them, and a bookcase to frame the whole composition. The visual model is a
real shelf rather than a generic grid: books stand on planks, covers lift on
fine-pointer hover, and the frame supplies shared wood tones.

Cover art comes from Open Library ISBN URLs. The tag contract is intentionally
small because the object being modeled is simple: authors name a book and supply
an ISBN, while the component handles the cover image, fake spine, and shelf
alignment.

---

# Book

Each book is a cover image sitting on the shelf. Give it an `isbn` and it pulls the cover from Open Library's Covers API. The `title` prop becomes the alt text.

The cover gets a subtle right-edge gradient to fake a spine, and a top-edge highlight that catches imaginary light from above.

The markup is deliberately just the cover object. Shelf spacing and wood are
owned by parent components, so a book can move between shelves without carrying layout
rules with it.

## HTML

```html
<div class="book">
  <div class="book-cover">
    <img
      src="https://covers.openlibrary.org/b/isbn/{{ isbn }}-M.jpg"
      alt="{{ title }}"
      loading="lazy"
      class="book-cover-image"
      referrerpolicy="no-referrer"
    />
    <span class="book-edge" aria-hidden="true"></span>
    <span class="book-highlight" aria-hidden="true"></span>
  </div>
</div>
```

The style gives the rendered book root a lift interaction, then draws the cover
edge inside the image frame. The edge is CSS, not an extra authoring concern.

## CSS

```css
:self {
  position: relative;
  z-index: 0;
  flex: 0 0 auto;
  transition: transform 0.2s ease;
}

.book-cover {
  position: relative;
  overflow: hidden;
  inline-size: 70px;
  block-size: 105px;
  border-radius: 0.125rem;
  background: color-mix(in srgb, var(--pmx-color-surface) 84%, black);
  color: var(--pmx-color-fg);
  box-shadow:
    1px 1px 3px rgba(0, 0, 0, 0.4),
    -1px 0 2px rgba(0, 0, 0, 0.15);
}

.book-cover-image {
  position: absolute;
  inset: 0;
  inline-size: 100%;
  block-size: 100%;
  object-fit: cover;
}

.book-edge {
  position: absolute;
  top: 2px;
  right: 0;
  bottom: 2px;
  width: 3px;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.1),
    rgba(255, 255, 255, 0.08) 40%,
    rgba(0, 0, 0, 0.15)
  );
  pointer-events: none;
}

.book-highlight {
  position: absolute;
  inset: 0 0 auto;
  block-size: 0.25rem;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), transparent);
  pointer-events: none;
}

@media (hover: hover) and (pointer: fine) {
  :self:hover {
    z-index: 1;
    transform: translateY(-6px);
  }
}

@media (prefers-reduced-motion: reduce) {
  :self {
    transition: none;
  }
}
```

## Example

<book title="The Count of Monte Cristo" isbn="9780140449266" />

---

# Shelf

A shelf is a horizontal row that holds books. The visual trick is layering: a shadow element at the top (cast by the shelf above), the books in the middle, and a wooden plank at the bottom. The plank sits on top via z-index so it looks like the books are standing on it. If there are too many books to fit, the row scrolls horizontally.

## HTML

```html
<div class="shelf-row">
  <div class="shelf-shadow"></div>
  <div class="books-grid flex-1">
    <yield />
  </div>
  <div class="shelf-plank"></div>
</div>
```

The shelf owns its own row layout so it works as a standalone component and
inside a larger bookcase. When a shelf is nested in a bookcase, it inherits the
bookcase wood tokens; otherwise it falls back to default wood colors. Cover
images are loaded from Open Library at runtime; if a cover cannot load, the
image's title alt text remains the readable fallback.

## CSS

```css
:self {
  --shelf-wood-light: var(--bookshelf-wood-light, hsl(15, 30%, 38%));
  --shelf-wood-mid: var(--bookshelf-wood-mid, hsl(12, 28%, 28%));
  --shelf-wood-dark: var(--bookshelf-wood-dark, hsl(10, 25%, 20%));
  --shelf-wood-darker: var(--bookshelf-wood-darker, hsl(8, 22%, 14%));

  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 8px 6px 0;
  min-height: 130px;
  margin-bottom: 6px;
  background: color-mix(in srgb, var(--shelf-wood-dark) 88%, black);
}

.shelf-shadow {
  position: absolute;
  top: 0;
  left: 4px;
  right: 4px;
  height: 18px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.08) 50%,
    transparent
  );
  border-radius: 0 0 50% 50% / 0 0 100% 100%;
  pointer-events: none;
  z-index: 1;
}

.books-grid {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  padding-bottom: 4px;
  position: relative;
  z-index: 2;
  overflow-x: auto;
  justify-content: safe center;
  scrollbar-width: thin;
  scrollbar-color: #888 transparent;
  scrollbar-gutter: stable;
}

.shelf-plank {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 12px;
  background: linear-gradient(
    to bottom,
    var(--shelf-wood-light) 0%,
    var(--shelf-wood-mid) 35%,
    var(--shelf-wood-dark) 75%,
    var(--shelf-wood-darker) 100%
  );
  z-index: 3;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.35);
}

.shelf-plank::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    to right,
    transparent 0%,
    rgba(255, 255, 255, 0.2) 15%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0.2) 85%,
    transparent 100%
  );
}
```

## Example

<shelf>
  <book title="The Count of Monte Cristo" isbn="9780140449266" />
  <book title="Slaughterhouse-Five" isbn="9780385333481" />
  <book title="Les Miserables" isbn="9780451419439" />
</shelf>

---

# Bookcase

The bookcase wraps everything — just a vertical stack of shelves with no gap, so the planks butt up against each other.

## HTML

```html
<div class="bookcase">
  <yield />
</div>
```

The styles do most of the work. We define a set of wood-tone CSS custom properties and reuse them throughout — gradients on the plank, a dark background behind the shelves, and an inset border that gives the whole thing some depth. The shelf shadow is a radial gradient fading downward, clipped into an ellipse so it reads as light falling from above. Books get a hover transform that lifts them off the shelf, and each cover has a fake spine edge on the right side.

## CSS

```css
:self {
  --bookshelf-wood-light: hsl(15, 30%, 38%);
  --bookshelf-wood-mid: hsl(12, 28%, 28%);
  --bookshelf-wood-dark: hsl(10, 25%, 20%);
  --bookshelf-wood-darker: hsl(8, 22%, 14%);
  --bookshelf-wood-grain: hsl(12, 20%, 32%);

  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
  background: var(--bookshelf-wood-dark);
  border: 6px solid var(--bookshelf-wood-darker);
  border-radius: 6px;

  padding: 12px 10px 16px;
  box-shadow:
    inset 0 2px 8px rgba(0, 0, 0, 0.3),
    0 4px 20px rgba(0, 0, 0, 0.4);
}

:self::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 2px;
  border: 2px solid var(--bookshelf-wood-grain);
  opacity: 0.3;
  pointer-events: none;
}
```

---

**Example**

Stack books across several shelves inside a bookcase to make one complete
bookcase:

```html
<bookcase>
  <shelf>
    <book title="To Kill a Mockingbird" isbn="9780060935467" />
    <book title="The Catcher in the Rye" isbn="9780316769488" />
    <book title="Crime and Punishment" isbn="9780486415871" />
  </shelf>
  <shelf>
    <book title="The Left Hand of Darkness" isbn="9780441478125" />
    <book title="Dune" isbn="9780441172719" />
    <book title="Project Hail Mary" isbn="9780593135204" />
    <book title="The Martian" isbn="9780553418026" />
  </shelf>
  <shelf>
    <book title="Pride and Prejudice" isbn="9780141439518" />
    <book title="Jane Eyre" isbn="9780141441146" />
    <book title="The Great Gatsby" isbn="9780743273565" />
  </shelf>
</bookcase>
```

**Result**

<bookcase>
  <shelf>
    <book title="To Kill a Mockingbird" isbn="9780060935467" />
    <book title="The Catcher in the Rye" isbn="9780316769488" />
    <book title="Crime and Punishment" isbn="9780486415871" />
  </shelf>
  <shelf>
    <book title="The Left Hand of Darkness" isbn="9780441478125" />
    <book title="Dune" isbn="9780441172719" />
    <book title="Project Hail Mary" isbn="9780593135204" />
    <book title="The Martian" isbn="9780553418026" />
  </shelf>
  <shelf>
    <book title="Pride and Prejudice" isbn="9780141439518" />
    <book title="Jane Eyre" isbn="9780141441146" />
    <book title="The Great Gatsby" isbn="9780743273565" />
  </shelf>
</bookcase>

---
