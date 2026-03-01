# Verdant & Co. — Nursery Website Project

## About This Project
I am learning HTML, CSS, and JavaScript by building a one-page static website for my wife's plant nursery business. This is a **practice project** — the goal is to learn, not just to produce a working file. I am following a structured lesson plan and building the site from scratch.

**When I ask for feedback, explain what is wrong and why — do not just fix it for me. I want to understand the problem so I can fix it myself.**

---

## Project File Structure
- Three separate files — HTML, CSS, and JS are **not** combined into one file
- `index.html` — structure and content only, no `<style>` tags and no inline `<script>` tags
- `style.css` — all CSS lives here, linked in the `<head>` with `<link rel="stylesheet" href="style.css">`
- `script.js` — all JavaScript lives here, linked just before `</body>` with `<script src="script.js"></script>`
- No frameworks, no build tools, no external JS libraries

---

## Design Reference
The finished site is called **Verdant & Co.** and uses a lush, botanical aesthetic.

**Colour palette (CSS variables I should be using):**
```css
--green-deep:  #1a2e1a;
--green-mid:   #2f5233;
--green-light: #6b9e6b;
--cream:       #f5f0e8;
--gold:        #c9a84c;
--text-dark:   #1a2e1a;
--text-mid:    #4a6349;
```

**Fonts (loaded from Google Fonts):**
- Display / headings: `'Cormorant Garamond', Georgia, serif`
- Body: `'Jost', sans-serif`

---

## Page Structure
The page has six blocks in this order:

| Section | Element | Notes |
|---|---|---|
| Navigation | `<nav>` | Fixed to top, logo left, links right |
| Hero | `<section id="hero">` | Image panel + text panel |
| About | `<section id="about">` | Dark green bg, brand story + stats |
| Products | `<section id="products">` | 3-card plant category grid |
| Contact | `<section id="contact">` | Info + hours left, form right |
| Footer | `<footer>` | One-line copyright |

Each section has an `id` attribute so nav links can scroll to it.

---

## CSS Approach: Mobile-First
This is the most important rule. All base styles target small screens. Larger layouts are added with `min-width` media queries on top. I should **never** use `max-width` queries — that is desktop-first.

**Breakpoints used in this project:**
| min-width | What changes |
|---|---|
| `480px` | Submit button goes from `width: 100%` to `width: auto` |
| `560px` | Product grid: 1 col → 2 col |
| `768px` | Nav goes horizontal, hero and contact become 2-col grids |
| `900px` | About and products switch to full desktop layouts |
| `1024px` | Section padding increases |

**Section padding scale:**
```css
section { padding: 4rem 6vw; }                          /* mobile default */
@media (min-width: 768px)  { section { padding: 6rem 6vw; } }
@media (min-width: 1024px) { section { padding: 7rem 6vw; } }
```

---

## Navigation Details
- Fixed bar: `position: fixed; top: 0;` with a blurred background
- **Mobile:** Logo left, hamburger `<button>` right. The `<ul>` is hidden with `max-height: 0; overflow: hidden` and slides open when `.open` class is added
- **Desktop (`min-width: 768px`):** Hamburger gets `display: none`, `<ul>` becomes a horizontal flex row
- JS toggles `.open` on the `<ul>` and `<button>` on hamburger click
- Menu closes when any nav link is tapped
- `aria-expanded` on the button should update (true/false) via JS

---

## Hero Section
- **Mobile:** `display: flex; flex-direction: column` — image stacks above text
- **Desktop (`min-width: 768px`):** `display: grid; grid-template-columns: 1fr 1fr`
- Image comes first in the HTML DOM (and visually on mobile via `order: 1`)
- Text panel uses `order: 2` on mobile, `order: 1` on desktop (so it appears left)
- Image panel: CSS gradient placeholder, `height: 45vh` on mobile, `height: auto` on desktop

---

## About Section
- Dark green background (`--green-deep`), cream text
- **Mobile:** Single column
- **Desktop (`min-width: 900px`):** Two-column grid — text left, photo placeholder right
- Photo placeholder block: `display: none` on mobile, `display: block` on desktop
- Stat numbers use the display font in large size with `--gold` colour

---

## Products Grid
- **Mobile:** `grid-template-columns: 1fr`
- **560px:** `repeat(2, 1fr)`
- **900px:** `repeat(3, 1fr)`
- Each card: white background, subtle border, `overflow: hidden`
- Hover: `transform: translateY(-6px)` with `box-shadow` transition

---

## Contact Section
- **Mobile:** Info block stacks above form
- **Desktop (`min-width: 768px`):** `display: grid; grid-template-columns: 1fr 1fr`
- Form inputs must have `font-size: 1rem` (minimum 16px to prevent iOS auto-zoom on focus)
- Inputs need `-webkit-appearance: none` and `border-radius: 0` to remove iOS default styling
- Submit button: `width: 100%` on mobile, `width: auto` at `min-width: 480px`

---

## JavaScript (Three things only)
1. **Hamburger toggle** — add/remove `.open` on `<ul>` and `<button>` on click; close on link tap; update `aria-expanded`
2. **Scroll fade-in** — `IntersectionObserver` watches `.fade-up` elements; adds `.visible` class when they enter the viewport
3. **Active nav highlight** — `scroll` event listener checks which section is in view and updates nav link colour

All three functions live in `script.js`. It is linked in `index.html` just before `</body>` with `<script src="script.js"></script>`.

---

## Accessibility Reminders
- Hamburger `<button>` needs `aria-label="Toggle navigation"`
- `aria-expanded` must be `"true"` or `"false"` (string) and update when menu opens/closes
- Inputs need `font-size: 1rem` minimum (iOS zoom prevention)
- Include `@media (prefers-reduced-motion: reduce)` to disable `.fade-up` animations for users who prefer it

---

## Lesson Plan Schedule
I am working Monday–Friday only, starting March 3, 2025.

| Week | Days | Focus |
|---|---|---|
| Week 1 | Mar 3–7 | HTML skeleton, CSS variables, nav, hero |
| Week 2 | Mar 10–14 | About, products, contact, JS, polish |

**Detailed day-by-day:**

- **Mon Mar 3** — File setup, boilerplate, full HTML skeleton (all sections, no CSS)
- **Tue Mar 4** — CSS reset, `:root` variables, base body/section styles
- **Wed Mar 5** — Navigation: mobile hamburger + desktop horizontal layout + JS toggle
- **Thu Mar 6** — Hero section: mobile stacked → desktop 2-col grid
- **Fri Mar 7** — Review and catch-up
- **Mon Mar 10** — About section
- **Tue Mar 11** — Products grid
- **Wed Mar 12** — Contact section and footer
- **Thu Mar 13** — Scroll animations and active nav JS
- **Fri Mar 14** — Accessibility, polish, final review

---

## How to Ask Me for Feedback
When I share code and ask for a review, please:
1. Tell me **what is wrong** (if anything) and **why** it's a problem
2. Point me to the **specific line or rule** to look at
3. **Do not rewrite my code for me** — give me enough to fix it myself
4. If my mobile-first approach is broken, call that out first — it is the most important concept I am learning
