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

Each book is a cover image sitting on the shelf. Give it an `isbn` and it pulls the cover from Open Library's Covers API. The `title` prop becomes the alt text and the hover / Play tip.

The cover gets a subtle right-edge gradient to fake a spine, and a top-edge highlight that catches imaginary light from above. A compact title card appears on fine-pointer hover and whenever the book is the active Play Beat (`data-pathmx-presentation-active`).

The markup keeps the cover object and tip together. Shelf spacing and wood are
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
  <div class="book-title-tip" aria-hidden="true">{{ title }}</div>
</div>
```

The style lifts the book, draws the cover edge inside the image frame, and
reveals the title tip on hover or active Play focus. The edge and tip are CSS,
not extra authoring concerns.

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

.book-title-tip {
  /* Paper card stays readable over dark wood in light and dark themes. */
  --book-tip-bg: #f3eee4;
  --book-tip-fg: #1b1712;
  --book-tip-border: rgba(40, 28, 18, 0.35);

  position: absolute;
  left: 50%;
  bottom: calc(100% + 0.4rem);
  z-index: 4;
  box-sizing: border-box;
  min-inline-size: 4.75rem;
  max-inline-size: min(12rem, 70vw);
  padding: 0.4rem 0.55rem;
  border: 1px solid var(--book-tip-border);
  border-radius: 0.35rem;
  background: var(--book-tip-bg);
  color: var(--book-tip-fg);
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.28),
    0 10px 22px rgba(0, 0, 0, 0.38);
  font-size: 0.72rem;
  font-weight: 650;
  line-height: 1.25;
  letter-spacing: 0.01em;
  text-align: center;
  text-wrap: balance;
  white-space: normal;
  pointer-events: none;
  opacity: 0;
  transform: translateX(-50%) translateY(0.3rem);
  transition:
    opacity 0.16s ease,
    transform 0.16s ease;
}

.book-title-tip::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 100%;
  inline-size: 0.55rem;
  block-size: 0.55rem;
  border-right: 1px solid var(--book-tip-border);
  border-bottom: 1px solid var(--book-tip-border);
  background: var(--book-tip-bg);
  transform: translateX(-50%) translateY(-55%) rotate(45deg);
}

:self[data-pathmx-presentation-active] {
  z-index: 5;
  transform: translateY(-8px);
}

:self[data-pathmx-presentation-active] .book-title-tip {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

:self[data-pathmx-presentation-active] .book-cover {
  box-shadow:
    0 0 0 2px color-mix(in srgb, var(--pmx-color-focus, #0f7a8a) 70%, white),
    1px 1px 3px rgba(0, 0, 0, 0.4),
    -1px 0 2px rgba(0, 0, 0, 0.15);
}

@media (hover: hover) and (pointer: fine) {
  :self:hover {
    z-index: 4;
    transform: translateY(-6px);
  }

  :self:hover .book-title-tip {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  :self[data-pathmx-presentation-active]:hover {
    z-index: 5;
    transform: translateY(-8px);
  }
}

@media (prefers-reduced-motion: reduce) {
  :self,
  .book-title-tip {
    transition: none;
  }
}
```

## Example

<book title="Neuromancer" isbn="9780441569595" />

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
  /* Keep title tips inside this scrollport; overflow-x:auto otherwise clips them. */
  padding-block: 2.75rem 4px;
  position: relative;
  z-index: 2;
  overflow-x: auto;
  overflow-y: hidden;
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
  <book title="Neuromancer" isbn="9780441569595" />
  <book title="Snow Crash" isbn="9780553380958" />
  <book title="Exhalation" isbn="9781101972120" />
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
  overflow: visible;
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
    <book title="Neuromancer" isbn="9780441569595" />
    <book title="Snow Crash" isbn="9780553380958" />
    <book title="Exhalation" isbn="9781101972120" />
  </shelf>
  <shelf>
    <book title="Gödel, Escher, Bach" isbn="9780465026562" />
    <book title="Superintelligence" isbn="9780199678112" />
    <book title="Human Compatible" isbn="9780525558613" />
    <book title="The Alignment Problem" isbn="9780393635829" />
  </shelf>
  <shelf>
    <book title="Hackers and Painters" isbn="9780596006624" />
    <book title="Code" isbn="9780735611313" />
    <book title="Co-Intelligence" isbn="9780593716717" />
  </shelf>
</bookcase>
```

**Result**

<bookcase>
  <shelf>
    <book title="Neuromancer" isbn="9780441569595" />
    <book title="Snow Crash" isbn="9780553380958" />
    <book title="Exhalation" isbn="9781101972120" />
  </shelf>
  <shelf>
    <book title="Gödel, Escher, Bach" isbn="9780465026562" />
    <book title="Superintelligence" isbn="9780199678112" />
    <book title="Human Compatible" isbn="9780525558613" />
    <book title="The Alignment Problem" isbn="9780393635829" />
  </shelf>
  <shelf>
    <book title="Hackers and Painters" isbn="9780596006624" />
    <book title="Code" isbn="9780735611313" />
    <book title="Co-Intelligence" isbn="9780593716717" />
  </shelf>
</bookcase>

---
