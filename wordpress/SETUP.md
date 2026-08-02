# The WordPress way

This is the exact stack behind [jessykabailey.com](https://jessykabailey.com): a WordPress block theme, plus my content as a starter import. Use this if you want to write posts in a normal WordPress dashboard instead of editing files.

You need WordPress hosting (or [Local](https://localwp.com) to run it on your computer first). Budget more than 30 minutes — if you want fast, use the file-based version in the repo root instead.

## What's in this folder
- `theme/steal-this-portfolio/` — the theme. It's a **child theme of Twenty Twenty-Five**, so that parent theme must be installed too (it ships free with WordPress).
- `starter-content.xml` — my pages, sample post, and projects, as a WordPress export you can import.

## Steps

**1. Install the themes**
- In WordPress: **Appearance → Themes**. Make sure **Twenty Twenty-Five** is installed (it usually is).
- Upload `theme/steal-this-portfolio/` as a new theme (zip that folder first, then **Add New → Upload Theme**), and **Activate** it.

**2. Import the starter content**
- **Tools → Import → WordPress** (install the importer if prompted).
- Upload `starter-content.xml`. When it asks, assign the content to your user and check **"Download and import file attachments."**
- This creates the Home, Blog, Projects, and About pages, a sample post, and the project cards.

**3. Point WordPress at the right pages**
- **Settings → Reading → Your homepage displays → A static page.** Set **Homepage = Home** and **Posts page = Blog.**
- **Settings → Permalinks → Post name → Save.** (This also fixes any "page not found" errors.)

**4. Make it yours**
- **Settings → General → Site Title:** your name. The header and footer read from this automatically.
- Replace the sample post with your own writing. Put a one-line summary in each post's **Excerpt** field — that becomes the TL;DR box.
- **Projects** (left menu): edit the cards. Set one to **Live** with a link; if the link is a GitHub repo, the card shows a live fork counter automatically.
- Swap the placeholder photo: replace `assets/portrait.svg` in the theme with your own image (name it `portrait.jpg` and update the reference, or keep the filename).

That's the whole site. Everything else — layout, fonts, colors — is already the design from jessykabailey.com.
