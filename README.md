# Steal This Portfolio

This is my personal site, [jessykabailey.com](https://jessykabailey.com), packaged up so you can take it and make it your own. Same layout, same fonts, same design. Change the words, the colors, and the photo, and it's yours.

It's free. Fork it, keep it, sell nothing back to me. I'd just ask that you make it your own rather than leave my name on it.

There are two ways to use it. Pick the one that fits you.

---

## Option A — The fast way (no WordPress, no build tools)

Plain HTML, CSS, and JavaScript. Nothing to install. You edit **one file** and deploy for free. Most people finish in under 30 minutes.

**New to this? Follow [`WALKTHROUGH.md`](WALKTHROUGH.md)** — a hand-held, step-by-step version with a checkpoint at every stage. The short version is below.

**1. Get the files**
- Click **Fork** (top right) to copy this repo to your own GitHub, or download it as a ZIP.

**2. Make it yours — edit `site.config.js`**
Open `site.config.js`. It's the whole site: your name, your photo, your colors, your posts, your projects. It's commented line by line. Change the values, save.

**3. Preview it**
Open `index.html` in your browser. That's it — no server needed. (If your posts don't load when opening the file directly, run a tiny local server instead: `python3 -m http.server` in this folder, then visit `http://localhost:8000`.)

**4. Put it online, free**
- **GitHub Pages:** in your forked repo, go to **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save.** Your site is live at `yourname.github.io/steal-this-portfolio` in a minute or two.
- **Netlify:** drag this folder onto [app.netlify.com/drop](https://app.netlify.com/drop). Live instantly.
- **Vercel:** import your forked repo at [vercel.com/new](https://vercel.com/new). No settings to change.

Point your own domain at it whenever you're ready.

### Don't want to touch code? Let the AI do it.
Open this folder in [Claude Code](https://claude.com/claude-code) and say **"make this mine."** It reads [`CLAUDE.md`](CLAUDE.md), asks you a few questions, and edits `site.config.js` for you. This is how I actually build — it felt right to hand it over the same way.

---

## Option B — The WordPress way (my exact stack)

If you want the real thing I run — WordPress, so you edit posts in a normal dashboard — everything's in the [`wordpress/`](wordpress/) folder: the theme and my content as a starter import. Full steps are in [`wordpress/SETUP.md`](wordpress/SETUP.md).

This one needs WordPress hosting and takes longer than 30 minutes. Use it if you already know WordPress and want to write posts without editing files.

---

## What you're changing

| You want to change… | Option A (files) | Option B (WordPress) |
|---|---|---|
| Your name, colors, photo | `site.config.js` | Site Title + theme |
| Add a blog post | add to `posts` in `site.config.js` | write a post in the dashboard |
| Add a project | add to `projects` in `site.config.js` | add a Project in the dashboard |
| The design itself | `css/style.css` (you rarely need to) | `style.css` in the theme |

## The "Stolen 12×" counter
The live project card can show how many people have forked your repo. Set `repo: "yourname/your-repo"` on that project in `site.config.js` and it pulls the live fork count from GitHub. Leave it off and the card just links out.

## License
[MIT](LICENSE) — do what you want with it. The design is a gift. Your words should be your own.

Built by [Jessyka Bailey](https://jessykabailey.com).
