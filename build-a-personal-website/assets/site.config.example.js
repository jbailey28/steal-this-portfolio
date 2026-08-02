/* =============================================================================
   site.config.js  —  THE WHOLE SITE. Edit this one file.

   This is a neutral starting template. Replace the placeholders with the
   person's real details. Everything here is documented inline.
   ============================================================================= */

window.SITE = {

  /* ---- who you are ------------------------------------------------------- */
  name: "Your Name",
  tagline: "What you do, in a few plain words.",   // shows in the browser tab + link previews
  photo: "assets/portrait.svg",                     // drop an image in /assets and point here, e.g. "assets/me.jpg"
  photoAlt: "Your Name",

  /* ---- the Style Kit, as code (see reference/style-kit.md) ---------------- */
  theme: {
    accent:     "#9FE500",  // hover color + the "live" project card
    onAccent:   "#111111",  // text that sits on the accent (dark on bright accents)
    ink:        "#1F1F1F",  // main text color
    pageBg:     "#F3EBDD",  // page background (beige)
    projectsBg: "#1F1F1F",  // the projects strip (dark, for contrast)
    font:       "'Geist', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  },

  /* ---- footer / social links (optional) ---------------------------------- */
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/you" },
    { label: "GitHub",   url: "https://github.com/you" },
  ],

  /* ---- writing -----------------------------------------------------------
     Each post = a pill on the homepage + a page at post.html?slug=…
     `tldr` is optional (the summary box). `body` is Markdown.
     Looks best with 2–4 posts. Keep it honest (see reference/writing-voice.md). */
  posts: [
    {
      slug:   "hello",
      title:  "Start here",
      date:   "2026-01-01",
      author: "Your Name",
      tldr:   "One or two honest sentences summarizing this post.",
      body: `Open with the subject directly — no throat-clearing.

A few paragraphs and a short list can be a complete post:

- **A thing** you're working on
- **A question** you're chasing
- **Something** you learned

Write like you'd explain it to a colleague. End when the point is made.`,
    },
  ],

  /* ---- projects ----------------------------------------------------------
     Up to 4 in one row. status "live" = filled accent card (optional GitHub
     fork counter via `repo`); status "soon" = outlined card with title + desc. */
  projects: [
    {
      title:  "A project you're proud of",
      status: "live",
      tag:    "Live",
      desc:   "One or two sentences on what it is and who it's for.",
      url:    "https://example.com",
      repo:   "",   // optional "owner/name" → shows a live GitHub fork count
    },
    { status: "soon", tag: "In progress", title: "Something you're building", desc: "A short line about it." },
    { status: "soon", tag: "In progress", title: "On the roadmap", desc: "A short line about it." },
    { status: "soon", tag: "In progress", title: "Idea", desc: "A short line about it." },
  ],

};
