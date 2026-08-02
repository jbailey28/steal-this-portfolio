# Make it yours — a 30-minute walkthrough

This is the hand-held version. Follow it top to bottom and you'll have your own version of this site, live on the internet, by the end. Every step has a **✅ Check** so you always know it worked before moving on.

You don't need to know how to code. You need a web browser and a free GitHub account.

---

## Part 1 — See it running on your computer (5 min, no account needed)

**1.1** On the repo page, click the green **Code** button → **Download ZIP**.

**1.2** Find the ZIP in your Downloads and double-click it to unzip.

**1.3** Open the unzipped folder and **double-click `index.html`**. It opens in your browser.

> ✅ **Check:** You see the site — a "Writing" pill on the left, a photo placeholder that says *ADD YOUR PHOTO*, and a black "Projects" strip with a green *Steal This Portfolio* card. Click **Blog**, **Projects**, and the post. They all work. This is running entirely from your computer — no internet needed.

---

## Part 2 — Make it yours (15 min)

Everything you change lives in one file: **`site.config.js`**.

**A note on editing it:** this file is code, so open it in a plain-text/code editor, **not** TextEdit's default mode or Word — those turn straight quotes (`"`) into curly quotes (`"`) and break it. Two safe options:
- **Easiest:** edit it right on GitHub in your browser (Part 3 shows this — GitHub never messes with quotes).
- **On your computer:** use a free code editor like [VS Code](https://code.visualstudio.com).

Open `site.config.js`. Make these changes, saving and refreshing `index.html` after each so you see it happen:

**2.1 — Your name.** Find `name:` near the top. Change `"Jessyka Bailey"` to your name. Change `tagline:` to a short line about you.
> ✅ **Check:** Refresh `index.html`. The header (top-left) and the browser tab now show your name.

**2.2 — Your color.** Find the `theme:` section. Change `accent:` from `"#9FE500"` to any hex color (try `"#4600E5"`).
> ✅ **Check:** Refresh, then hover a Writing pill — it fills with your new color. The live project card uses it too.

**2.3 — Your photo.** Put an image in the `assets` folder. Change `photo:` to point at it, e.g. `"assets/me.jpg"`.
> ✅ **Check:** Refresh — your photo replaces the placeholder.

**2.4 — Your first post.** Find `posts:`. Change the `title`, `date`, `tldr`, and `body` of the example post to something of yours. (`body` is written in Markdown — blank lines separate paragraphs.)
> ✅ **Check:** Refresh, click the pill on the homepage, and read your post. The date, reading time, and byline update automatically.

**2.5 — Your projects.** Find `projects:`. Edit the first (live) card's `title` and `desc`. Leave the three `"soon"` ones as "Coming soon," or fill them in.
> ✅ **Check:** Refresh — the Projects strip shows your cards.

> 💡 If the site ever goes blank after an edit, you almost certainly have a small typo — a missing comma, or a curly quote. Undo your last change (Cmd+Z), save, refresh. That fixes it 99% of the time.

---

## Part 3 — Put it online for free (10 min)

We'll use GitHub Pages. It's free and needs no other accounts.

**3.1** Make sure you're signed in to [github.com](https://github.com). On this repo's page, click **Fork** (top-right) → **Create fork**. Now you have your own copy.

**3.2** In *your* fork, go to **Settings → Pages**. Under "Build and deployment," set **Source → Deploy from a branch**, **Branch → main**, **folder → / (root)**, and click **Save**.

**3.3** Wait about a minute, then refresh that Settings → Pages page.
> ✅ **Check:** It shows *"Your site is live at `https://YOURNAME.github.io/steal-this-portfolio/`"*. Click it — your site is on the internet.

**3.4 — Edit directly on GitHub (the safe, no-tools way).** In your fork, click `site.config.js`, then the **pencil icon** to edit. Make a change (your name, if you didn't already), scroll down, click **Commit changes**.
> ✅ **Check:** Wait ~1 minute (GitHub rebuilds the page), then refresh your live `github.io` URL. Your change is live. This is now your publishing loop: edit `site.config.js` → commit → it's live.

---

## Optional — the "Stolen 12×" counter
In `site.config.js`, the live project's `repo:` value (e.g. `"yourname/your-repo"`) makes the card show how many people have forked *your* repo, live from GitHub. Point it at your own repo, or delete the line and the card just links out.

## Optional — let the AI do it
Prefer not to touch the file at all? Open the folder in [Claude Code](https://claude.com/claude-code) and say **"make this mine."** It reads `CLAUDE.md` and edits everything for you. (See the note in `README.md`.)

---

## If something's off
- **A page is blank / broken after editing** → typo in `site.config.js`. Undo, save, refresh. Watch for curly quotes and missing commas.
- **My photo won't show** → check the filename matches exactly (capitals count) and that it's really in the `assets` folder.
- **The post is empty** → make sure the `slug` in the link matches the `slug` in the post, and that `body` is wrapped in backticks `` ` ``.
- **Pages says "not built yet"** → give it 1–2 minutes after saving; the first build is the slowest.

That's the whole thing. Fork it, make it yours, and if you build something with it I'd love to see it.
