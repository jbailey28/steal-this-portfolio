# Style Kit — the choices to offer

## Let them choose visually (do this — do NOT build a new picker)
The template **ships with the full Style Kit**: `style-kit.html` in the project root. When the person wants to design their look, just open it for them:

```
open style-kit.html        # macOS (or: double-click the file, or visit /style-kit.html on the deployed site)
```

They click through every option on a **live mock-up of their real layout**, then hit **Copy my look** (which copies a plain settings list) and tell you what it says — or just describe their pick ("purple accent, beige page, serif"). You write it into `site.config.js → theme`.

It's self-contained (works offline, no accounts) and every option applies to the real site. **Never build a new picker or a claude.ai artifact for this** — `style-kit.html` already exists and is the one to use.

---

## The `theme` block (every Style Kit option maps here)
Set these in `site.config.js`. Use the **named values** below (they match the Style Kit's "Copy my look" output) — a raw `"#hex"` also works for backgrounds and accents, and text auto-flips to stay readable.

```js
theme: {
  // Backgrounds — white | black | beige | rose
  pageBg:     "beige",   // page (header + inner pages)
  writingBg:  "beige",   // the Writing section
  projectsBg: "black",   // the Projects section
  footerBg:   "beige",   // the footer
  // Accents — lime | rose | purple | orange | black
  writingAccent:  "lime",   // pill hover color
  projectsAccent: "lime",   // the filled "live" project card
  // Typography — sans (Geist) | serif (Lora) | rounded (Nunito)
  font: "sans",
  // Lines — "line" | "none"
  headerBorder:    "line",
  sectionDividers: "none",
  footerBorder:    "none",
  // Effects
  cardShadow: "hard",    // none | soft | hard
  photoStyle: "border",  // none | border | shadow
  dissolve:   "off",     // on | off  (click-to-dissolve on project cards)
}
```

## Translating "Copy my look" → config
The Style Kit copies lines like `Page Background: White`, `Font Style: Serif`, `Card Shadow: Soft`, `Dissolve: On`. Map each label to the key above and **lowercase the value**:

| Style Kit label | config key | values |
|---|---|---|
| Page / Writing / Projects / Footer Background | `pageBg` / `writingBg` / `projectsBg` / `footerBg` | white, black, beige, rose |
| Writing Accent / Projects Accent | `writingAccent` / `projectsAccent` | lime, rose, purple, orange, black |
| Font Style | `font` | sans, serif, rounded |
| Header Border / Section Dividers / Footer Border | `headerBorder` / `sectionDividers` / `footerBorder` | line, none |
| Card Shadow | `cardShadow` | none, soft, hard |
| Photo Style | `photoStyle` | none, border, shadow |
| Dissolve | `dissolve` | on, off |

## Guidance
- If the person is unsure, keep the default (beige / lime / Geist / hard shadow / border photo) — it's Jessyka's locked look and always works.
- Readability first: the engine auto-flips text on dark backgrounds, but avoid a low-contrast accent on a same-tone background.
- Writing and Projects accents can differ (e.g., lime writing, purple projects) — that's a deliberate feature, not a mistake.
- The three fonts ship with the template (Geist, Lora, Nunito) — no setup needed. To add a *different* font, drop its `woff2` in `/assets`, add an `@font-face` in `css/style.css`, and set `font` to a raw family string.
