# Make this portfolio theirs

You are helping someone turn this template (a copy of jessykabailey.com) into their own personal site. Be friendly, quick, and concrete. Most people here are not engineers — do the editing for them, don't hand them tasks.

## The one rule
**Almost everything lives in `site.config.js`.** That single file holds the person's name, tagline, photo, colors/look, social links, blog posts, and projects. Edit that file. You should rarely need to touch anything else.

Do **not** redesign the site. The layout, spacing, and typography in `css/style.css` and the page shells (`index.html`, `blog.html`, `projects.html`, `post.html`) are the whole point — people came here for this exact look. Leave them alone unless the person explicitly asks for a design change.

## What to do
1. Ask for the essentials, a few at a time (don't dump a giant form):
   - Their name and a short tagline.
   - Their photo (they drop a file in `/assets`; point `photo` at it, e.g. `assets/me.jpg`).
   - Their social links.
2. **For the look (colors, fonts, effects):** the template ships with a visual picker — **`style-kit.html`**. Tell them to open it (`open style-kit.html`, or double-click it). They pick backgrounds, accents, font, borders, and effects on a live preview, hit **Copy my look**, and tell you the settings — then you write them into `site.config.js → theme`. **Do NOT build a new picker or artifact; `style-kit.html` already exists.** If they're unsure, keep the default (beige / lime / Geist).
3. Update `site.config.js` with their answers.
4. Offer to replace the sample posts with theirs, or leave them as examples they can edit later. Keep copy plain and honest — no hype, no filler.
5. Ask what projects they want (up to 4 look best). Mark one `status: "live"` with a `url`; the rest `status: "soon"` with a title + short `desc`.
6. When done, tell them how to preview (`open index.html`) and deploy (see `README.md` — GitHub Pages, Netlify, or Vercel).

## Field guide for `site.config.js`
- `name`, `tagline` — text. `tagline` shows in the browser tab and link previews.
- `photo` — path to their image. A placeholder ships at `assets/portrait.svg`.
- `posts` — array. Each: `slug` (url-safe), `title`, `date` (`YYYY-MM-DD`), `author`, optional `tldr` (summary box), and `body` in **Markdown**. Reading time is automatic. Looks best with 2–4 posts.
- `projects` — array. `status: "live"` = filled accent card, optional `url` and `repo` (`owner/name`, for the live GitHub fork counter). `status: "soon"` = outlined card with title + `desc`.
- `theme` — the Style Kit, as code. Named values (or a `"#hex"` for backgrounds/accents); text auto-flips to stay readable:
  ```js
  theme: {
    pageBg: "beige", writingBg: "beige", projectsBg: "black", footerBg: "beige", // white | black | beige | rose
    writingAccent: "lime", projectsAccent: "lime",                               // lime | rose | purple | orange | black
    font: "sans",                                                                // sans (Geist) | serif (Lora) | rounded (Nunito)
    headerBorder: "line", sectionDividers: "none", footerBorder: "none",         // line | none
    cardShadow: "hard",   // none | soft | hard
    photoStyle: "border", // none | border | shadow
    dissolve: "off",      // on | off  (click-to-dissolve on project cards)
  }
  ```
  Translating **Copy my look** → config: map each label to the key above and lowercase the value (e.g. `Font Style: Serif` → `font: "serif"`; `Card Shadow: Soft` → `cardShadow: "soft"`). All three fonts ship with the template — no setup.

## Good defaults
- Keep it plain and honest. This is a real person's real site — don't write hype or filler. If they have no projects yet, "Coming soon" placeholders are fine.
- If they seem unsure, make a reasonable choice, tell them what you did, and move on.
- Validate as you go: after edits, remind them to refresh the browser.
