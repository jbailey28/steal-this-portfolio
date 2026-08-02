# Deploy — free, in minutes

The site is plain static files, so any static host works. Pick one.

## GitHub Pages (recommended — free, no other account)
1. Fork the repo (or push the customized folder to a new GitHub repo).
2. In the repo: **Settings → Pages → Build and deployment → Deploy from a branch → `main` → `/(root)` → Save.**
3. Wait ~1 minute. The site is live at `https://USERNAME.github.io/REPO/`.
4. Editing afterward: change `site.config.js` in the browser (pencil icon → Commit) and the page rebuilds automatically in ~1 minute.

Enable Pages programmatically if you have `gh`:
```
gh api -X POST repos/OWNER/REPO/pages -f 'source[branch]=main' -f 'source[path]=/'
```

## Netlify (instant)
Drag the project folder onto https://app.netlify.com/drop — live immediately. Or connect the GitHub repo for auto-deploys on push.

## Vercel
Import the repo at https://vercel.com/new — no build settings to change (it's static).

## Custom domain
Add the domain in the host's dashboard (Pages: Settings → Pages → Custom domain; Netlify/Vercel: Domains). Then, at the domain registrar, point DNS as the host instructs (usually a CNAME to the host, or A records for an apex domain). HTTPS is issued automatically once DNS resolves.

## Gotcha: CSS changes not showing (cache)
If you change styling and it doesn't appear, it's almost always browser cache — the stylesheet is served with a version query (`style.css?ver=X`) and the browser reuses the cached copy. Fixes:
- **Test in an incognito window** to confirm it's cache.
- **Bump the version** wherever the stylesheet is referenced (e.g., `?ver=1.0.1`), which forces every browser to re-download. On managed hosts (like GoDaddy), also clear any server/page cache.

## WordPress path (optional)
The repo's `wordpress/` folder holds the same design as a block theme (child of Twenty Twenty-Five) plus `starter-content.xml`. Use it only if the person wants to write in a WordPress dashboard: install both themes, import the starter content, set the homepage/permalinks, and update the Site Title. It needs WordPress hosting and takes longer than 30 minutes. Full steps are in `wordpress/SETUP.md`.
