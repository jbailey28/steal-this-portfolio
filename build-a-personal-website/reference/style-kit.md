# Style Kit — the choices to offer

## Let them choose visually (do this — do NOT build a new picker)
The template **ships with a color picker**: `style-kit.html` in the project root. When the person wants to choose colors visually, just open it for them:

```
open style-kit.html        # macOS (or: double-click the file, or visit /style-kit.html on the deployed site)
```

They click an accent + a background on a **live mock-up of their real layout**, then either hit **Copy theme** and paste it over the `theme` block in `site.config.js`, or just tell you their pick (e.g. "purple on beige") and you write it in.

It's self-contained (works offline, no accounts, no sign-in) and always matches the template's real options. **Never build a new picker or a claude.ai artifact for this** — `style-kit.html` already exists and is the one to use.

---

All of these are set in `site.config.js` under `theme`. Offer them as options; if the person is unsure, keep the default (beige / lime / Geist). Change hex values and everything re-skins — text automatically sits readably on the accent.

```js
theme: {
  accent:     "#9FE500",  // hover color + the "live" project card
  onAccent:   "#111111",  // text that sits on the accent (dark on light accents)
  ink:        "#1F1F1F",  // main text
  pageBg:     "#F3EBDD",  // page background
  projectsBg: "#1F1F1F",  // the dark projects strip
  font:       "'Geist', 'Helvetica Neue', Helvetica, Arial, sans-serif",
}
```

## Accent color (the signature choice)
One accent drives pill hover + the live project card. Pick one with contrast against the page background. Field-tested options:
- **Lime** `#9FE500` (default) — with dark text `#111111`
- **Purple** `#4600E5` — with light text `#FFFFFF`
- **Orange** `#FF4800` — with light text `#FFFFFF`
- **Pink** `#D58E97` — with dark text `#1F1F1F`
- **Black** `#1F1F1F` — with light text `#F3EBDD`

Rule: set `onAccent` to whichever of dark/light stays readable on the chosen accent. When in doubt, dark text on bright accents, light text on deep accents.

## Backgrounds
Keep it to a restrained palette so text stays readable:
- **Beige** `#F3EBDD` (default, warm), **White** `#FFFFFF`, or **Black** `#1F1F1F`.
- `pageBg` is the main page; `projectsBg` is the strip behind the project cards (defaults to black for contrast). If `pageBg` is dark, set `ink` light so text reads.

## Fonts
Ships with **Geist** (self-hosted, no external request). To offer alternatives, add the font's `woff2` to `/assets`, add an `@font-face` in `css/style.css`, then set `font` in the config. Sans options that fit the system's tone: Geist (default), Inter, Instrument Sans, IBM Plex Sans. Keep it to **one** family — the design relies on weight, not typeface mixing.

## Optional looks (only if asked)
The original system also explored: hard drop-shadows on the pills (already on by default), a "dissolve"/particle click effect on project cards, and square vs. rounded card corners. These are deliberately left out of the shipped template to keep it simple. Don't add them unless the person specifically wants them — the default is the recommended look.

## What NOT to offer
- Multiple typefaces mixed together.
- Low-contrast accent/background combos (readability first).
- Gradients, heavy shadows everywhere, or decorative flourishes on the article body — the article stays plain.
