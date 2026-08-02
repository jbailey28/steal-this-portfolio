---
name: build-a-personal-website
description: Build a clean, minimal personal website — portfolio or blog — with the user, using the "Steal This Portfolio" system: a free, config-driven static site (beige/lime/Geist design, rounded "writing" pills, square project cards) that deploys in about 30 minutes with no framework or database. Use when someone wants to build, scaffold, or customize a personal site, portfolio, or blog, wants a simple no-framework personal website, or references "steal this portfolio."
---

# Build a personal website

Guide someone from nothing to their own personal website, live on the internet, in about 30 minutes. The design is fixed and intentional; the person's **content and colors** are what change. Your job is to do the editing for them and keep the result honest and clean.

## The one rule
**Everything the person changes lives in one file: `site.config.js`.** Name, tagline, photo, colors, fonts, posts, projects — all there, commented line by line. Edit that file. **Do not redesign** the layout, spacing, or typography (`css/style.css` and the page shells). People come to this system *for* this exact look; changing it defeats the purpose. Only touch the CSS if the person explicitly asks for a design change.

## What this builds
A two-section personal site:
- **Writing** — rounded pill buttons (one per post) beside a portrait photo. Pills grow to line up flush with the bottom of the photo.
- **Projects** — a row of up to four square cards; one can be "live" (filled with the accent color, optional live GitHub fork counter), the rest "coming soon."
- Individual **blog post** pages with editorial typography (big title, a TL;DR box, a large intro paragraph, readable body).
- Clean **Blog** and **Projects** index pages.

Default palette: beige `#F3EBDD` background, near-black `#1F1F1F` ink, lime `#9FE500` accent, self-hosted **Geist** font. All of it is re-skinnable from `site.config.js` — see `reference/style-kit.md`.

## Workflow

**1. Get the template.**
```
git clone https://github.com/jbailey28/steal-this-portfolio their-site
cd their-site
```
(Or have them download the ZIP from the repo.) No `npm install`, no build step — it's plain files.

**2. Interview the person — a few questions at a time, never a giant form.**
Start with the essentials:
- Their name and a one-line tagline (shows in the browser tab and link previews).
- What they do / what they want the site to say about them.
- A photo (they drop an image in `/assets`; you point `photo:` at it). A placeholder ships if they don't have one yet.
- Their links (LinkedIn, GitHub, etc.).
- Do they already have writing or projects, or should you keep the examples as a starting scaffold?

**3. Set identity + theme in `site.config.js`.**
Fill in `name`, `tagline`, `photo`, `socials`. For colors and fonts, if the person wants to choose visually, **send them to the existing live Style Kit** (link in `reference/style-kit.md`) — **do NOT build a new picker or artifact for this**; reuse the one that's already published. When they tell you their pick, write the values into the config. Text auto-sits readably on whatever accent they choose. If unsure, keep the default beige/lime/Geist.

**4. Content.**
- **Posts:** `posts` is an array; each has `slug`, `title`, `date` (`YYYY-MM-DD`), `author`, an optional `tldr` (the summary box), and a Markdown `body`. Offer to help them write one or two starter posts — follow `reference/writing-voice.md` (plain, honest, no hype). If they're not ready, leave the example posts; they read as replaceable templates. **The layout looks best with 2–4 posts** (pills grow to fill, so a single post stretches tall).
- **Projects:** up to four look best in one row. Mark one `status: "live"` with a `url` (and optional `repo: "owner/name"` for the live fork counter). The rest are `status: "soon"` with a title + short `desc`.

**5. Preview.** Open `index.html` directly in a browser (it works from `file://` — no server needed). For live-reload while editing, `python3 -m http.server` then visit `http://localhost:8000`.

**6. Deploy free.** See `reference/deploy.md`. Fastest is GitHub Pages (fork → Settings → Pages → deploy from `main` / root). Netlify drop and Vercel import also work. Point a custom domain at it whenever they're ready.

**7. (Optional) WordPress.** If they'd rather write posts in a real dashboard, the repo's `wordpress/` folder has the same design as a WordPress theme plus starter content. It needs hosting and takes longer — only suggest it if they ask.

## Principles to hold
- **The design is the product.** Reskin via config; don't rebuild.
- **Honest copy, always.** No marketing hype, no filler. If they have nothing yet, "Coming soon" placeholders are fine. See `reference/writing-voice.md`.
- **Do the work for them.** Most people here aren't engineers. Make reasonable choices, tell them what you did, and let them adjust — don't hand them homework.
- **Validate as you go.** After edits, tell them to refresh the browser. If a page breaks, it's almost always a typo in `site.config.js` (a curly quote or a missing comma) — undo and re-save.

## Reference files
- `reference/design-system.md` — the exact tokens, components, and *why* behind the look (read before any design change).
- `reference/style-kit.md` — the color / font / background options to offer.
- `reference/writing-voice.md` — how to write copy and posts for this system.
- `reference/deploy.md` — step-by-step free deployment (Pages, Netlify, Vercel) + custom domain + the cache/version gotcha.
- `assets/site.config.example.js` — a fully annotated config to copy from.
