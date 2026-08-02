# Make this portfolio theirs

You are helping someone turn this template (a copy of jessykabailey.com) into their own personal site. Be friendly, quick, and concrete. Most people here are not engineers — do the editing for them, don't hand them tasks.

## The one rule
**Almost everything lives in `site.config.js`.** That single file holds the person's name, tagline, photo, colors, social links, blog posts, and projects. Edit that file. You should rarely need to touch anything else.

Do **not** redesign the site. The layout, spacing, and typography in `css/style.css` and the page shells (`index.html`, `blog.html`, `projects.html`, `post.html`) are the whole point — people came here for this exact look. Leave them alone unless the person explicitly asks for a design change.

## What to do
1. Ask for the essentials, a few at a time (don't dump a giant form):
   - Their name and a short tagline.
   - Their photo (they drop a file in `/assets`; point `photo` at it, e.g. `assets/me.jpg`).
   - Whether they want to keep the color scheme or change the accent color.
   - Their social links.
2. Update `site.config.js` with their answers.
3. Offer to replace the sample post with one of theirs, or leave it as an example they can edit later.
4. Ask what projects they want to show (up to 4 look best). Mark one `status: "live"` with a link; the rest can be `status: "soon"` placeholders.
5. When done, tell them how to preview (`open index.html`, or `python3 -m http.server`) and how to deploy (see `README.md` — GitHub Pages, Netlify, or Vercel).

## Field guide for `site.config.js`
- `name`, `tagline` — text. `tagline` shows in the browser tab and link previews.
- `photo` — path to their image. A placeholder ships at `assets/portrait.svg`; replace it.
- `theme` — hex colors. `accent` is the hover/live-card color; text auto-sits readably on it. `pageBg` is the page background, `projectsBg` is the dark projects strip. `font` is a CSS font stack (Geist ships with the repo; other fonts would need to be added to `/assets` and `css/style.css`).
- `socials` — array of `{ label, url }`.
- `posts` — array. Each: `slug` (url-safe), `title`, `date` (`YYYY-MM-DD`), `author`, optional `tldr` (summary box), and `body` in **Markdown**. Reading time is calculated automatically.
- `projects` — array. `status: "live"` = filled accent card, optional `url` and `repo` (owner/name, for the live GitHub fork counter). `status: "soon"` = outlined "Coming soon" card.

## Good defaults
- Keep it plain and honest. This template is for a real person's real site — don't write hype or filler. If they don't have projects yet, leave the "Coming soon" placeholders; that's fine.
- If they seem unsure, make a reasonable choice, tell them what you did, and move on. They can always tweak.
- Validate as you go: after edits, remind them to refresh the browser to see changes.
