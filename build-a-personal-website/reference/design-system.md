# Design system

Read this before changing anything in `css/style.css`. The look is deliberate; most requests can be satisfied from `site.config.js` without touching CSS at all.

## Philosophy
Minimal, editorial, personal — closer to a printed page than a web app. The writing carries the personality, so the layout stays quiet. Two full-width sections (Writing, Projects), a portrait, a plain footer. Nothing decorative that doesn't earn its place. It should feel like a designer made it, not a template.

## Tokens (CSS custom properties on `:root`)
| Token | Default | Meaning |
|---|---|---|
| `--beige` / `--page-bg` | `#F3EBDD` | page background |
| `--ink` | `#1F1F1F` | main text |
| `--lime` | `#9FE500` | accent (pill hover + live project card) |
| `--on-lime` | `#111111` | text that sits on the accent |
| `--projects-bg` | `#1F1F1F` | the dark Projects strip |
| `--jb-sans` | Geist stack | the one typeface |
| `--grain` | inline SVG noise | film grain on accent fills |

`site.config.js` → `theme` overrides these at runtime (via `render.js`), so re-skinning never means editing CSS.

## Type scale
One family (Geist), self-hosted via `@font-face` (`assets/geist-sans.woff2`). Weights do the work, not extra fonts.
- Section labels ("WRITING", "PROJECTS"): 1.05rem, weight 600, uppercase, letter-spacing .1em.
- Pill title: 1.08rem, weight 600, tight tracking.
- Post H1: 56px desktop / 44px tablet / 36px mobile, line-height ~1.06.
- Post intro (first paragraph): 24px, weight 500 — treated as a lede.
- Post body: 19px / line-height 1.7, capped at ~66 characters per line.
- Metadata row (date · reading time · author): 13px uppercase, low opacity.

## Components
- **Writing pill (`.jb-post`)** — white, 1px black border, `999px` radius (stadium), hard offset shadow `5px 5px 0 #000`. On hover: fills with the accent, lifts, shadow grows, film grain fades in. **Key layout behavior:** pills use `flex:1` inside a column that stretches to the photo's height (`.jb-hero{align-items:stretch}`, `.jb-writing{min-height:100%}`, `.jb-cards{flex:1}`), so multiple pills grow to equal height and the last one lines up flush with the bottom of the photo. Best with 2–4 posts; a single post stretches tall.
- **Portrait (`.jb-photo`)** — 3:4 aspect, 2px black border, 26px radius, `object-fit:cover`. On mobile it moves *above* the writing (`order:-1`) and switches to 4:5.
- **Project card (`.jb-proj`)** — 1:1 square, 28px radius. `.jb-live` = filled with accent + grain, shows an optional live GitHub fork count. `.jb-soon` = outlined, "Coming soon", optional title + description. Hover lifts and casts a soft shadow.
- **Header** — brand (name, links home) left, nav right, 1.5px black underline. **The name comes from config**, not hardcoded.
- **Footer** — centered "© YEAR Name · links", low-key.

## Layout skeleton
- Container `.jb-wrap`: `max-width:1080px`, 28px side padding, centered.
- Hero: CSS grid, `minmax(0,1fr) 360px` (writing | photo), 40px gap, `align-items:stretch`.
- Projects grid: 4 equal columns → 2 at ≤760px → 1 at ≤440px.
- Inner pages (`.jb-page`): 720px reading column; article (`.jb-article`): 760px; Projects page (`.jb-projpage`): 1080px so its title and grid share a left edge with the homepage feel.

## Rendering model (static path)
`site.config.js` defines `window.SITE`. `js/render.js` reads it on load, applies the theme tokens, and builds each page (home / blog / projects / post) into `<div id="jb">`. Markdown post bodies are converted by the vendored `js/vendor/marked.min.js`. Everything works from `file://` — no server, no build. Trade-off: content is rendered client-side (fine for Google; for maximum crawlability use the WordPress path).

## If a design change is genuinely requested
Change tokens first (colors/fonts via config). Only edit `css/style.css` for true structural asks, and preserve: the single-typeface discipline, the hard-shadow pill, the grain-on-accent, the 3:4 portrait, and readable line lengths (~66ch). Keep both the light ground and the dark Projects strip legible with whatever accent is chosen.
