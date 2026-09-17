# Hearthglow Candle Co. — Website

A premium, animated multi-page website for a fictional consumer products business (hand-poured soy candles), built for **Week 2 (Individual Build & Deploy)** of the SDC internship task.

**Live demo:** _add your deployed link here once published (Vercel / Netlify / GitHub Pages)_

---

## Tech Stack

| Purpose            | Tool / Library                                                                 |
|---------------------|---------------------------------------------------------------------------------|
| Structure           | HTML5                                                                          |
| Styling             | CSS3 (custom, no framework), Google Fonts (Cormorant Garamond, Jost)          |
| Smooth scrolling    | [Locomotive Scroll](https://github.com/locomotivemtl/locomotive-scroll) 3.5.4 |
| Scroll animations   | [GSAP](https://gsap.com/) 3.12.2 + ScrollTrigger plugin                       |
| Icons               | [RemixIcon](https://remixicon.com/)                                           |
| Form validation     | Vanilla JavaScript (no libraries)                                             |
| Images              | Unsplash (free license, verified working links)                              |

No build tools, no frameworks (React/Next.js not used) — plain HTML/CSS/JS by design, since JavaScript was this week's primary tool to learn and practice directly.

---

## Pages

| Page            | File            | Purpose                                                        |
|-----------------|-----------------|------------------------------------------------------------------|
| Home            | `index.html`    | Hero, featured collections, brand statement, product highlights, testimonial, craft/impact section, footer |
| Our Story       | `about.html`    | Brand origin story, values grid, studio-today section           |
| Shop            | `shop.html`     | Full product grid (all 6 candles)                                |
| Gallery         | `gallery.html`  | Lifestyle/behind-the-scenes photo grid                            |
| Contact         | `contact.html`  | Enquiry form with client-side validation                          |

All pages share the same navigation bar and footer for consistency.

---

## Key Features

- **Hero animation** — staggered text reveal, scale-in on the featured media, and a mouse-following "play" button, powered by GSAP.
- **Smooth scroll + parallax** — Locomotive Scroll drives buttery scrolling; select images use `data-scroll-speed` for a subtle parallax effect.
- **Scroll-triggered nav** — the logo and nav links slide away as you scroll past the hero, synced via GSAP ScrollTrigger.
- **Custom cursor** — a soft circular cursor that follows the mouse and scales up over product cards.
- **Contact form validation** — `contact-form.js` checks name, email format, a required dropdown, and message length, shows inline errors, and displays a mock "message sent" confirmation (no backend — ready to be wired to a service like Formspree or EmailJS).
- **Fully responsive** — a dedicated mobile breakpoint (`max-width: 600px`) restructures the hero, product grid, gallery, and footer for small screens; tested at mobile, tablet, and desktop widths.

---

## File Structure

```
├── index.html          # Home page
├── about.html           # Our Story page
├── shop.html             # Shop / product listing page
├── gallery.html         # Gallery page
├── contact.html          # Contact page + enquiry form
├── style.css              # Single shared stylesheet for all pages
├── script.js               # Locomotive Scroll + GSAP animations (hero, nav, cursor)
├── contact-form.js        # Contact form validation (separate from script.js)
└── README.md
```

---

## Running Locally

1. Download/clone all files into a single folder (keep them all together — the CSS and JS are linked by relative path).
2. Open `index.html` directly in a browser, **or** for the best experience with Locomotive Scroll, serve the folder with a local server (e.g. VS Code's "Live Server" extension, or `python3 -m http.server` from inside the folder) and visit `http://localhost:PORT`.
3. No install step and no dependencies to run — all libraries (Locomotive Scroll, GSAP, RemixIcon, Google Fonts) load from CDNs.

---

## Deployment

Deployed as a static site — no backend, no build step required. Recommended: drag-and-drop the folder into **Netlify**, or push to a GitHub repo and connect it to **Vercel** / **GitHub Pages**.

---

## Notes on Content

- Brand, copy, product names, and pricing are original/fictional, created for this assignment.
- All product and lifestyle photos are sourced from Unsplash under the free [Unsplash License](https://unsplash.com/license).
- Logo is an original inline SVG monogram, not based on any existing brand.

---

## What I Learned

- How to sync Locomotive Scroll's virtual scroll position with GSAP's ScrollTrigger using a scroller proxy, so scroll-based animations still fire correctly.
- How to build accessible, validated forms in plain JavaScript without a framework — per-field validation on blur, a single validation function reused on submit, and inline error messaging tied to each field's error state.
- How small CSS variables (a shared color palette and two font families) keep five separate HTML pages feeling like one consistent site.
