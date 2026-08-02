/* =============================================================================
   site.config.js  —  THIS IS YOUR WHOLE SITE. Edit this one file.

   Change your name, photo, colors, posts, and projects below, then deploy.
   No build step, no framework, nothing to install. Save → refresh → done.

   (Prefer to just talk to it? Open this folder in Claude Code and say
    "make this mine" — see CLAUDE.md. The AI edits this file for you.)
   ============================================================================= */

window.SITE = {

  /* ---- who you are ------------------------------------------------------- */
  name: "Jessyka Bailey",
  // Short description used in the browser tab + link previews:
  tagline: "Tech sales, building with AI.",
  // Your photo. Drop an image in /assets and point to it, e.g. "assets/you.jpg".
  photo: "assets/portrait.svg",
  photoAlt: "Jessyka Bailey",

  /* ---- the Style Kit, as code -------------------------------------------
     Open style-kit.html to pick a look visually, then set it here. Every option
     below maps 1:1 to the Style Kit. Named values (or a "#hex") both work. */
  theme: {
    // Backgrounds — white | black | beige | rose  (or a #hex)
    pageBg:     "beige",   // page (header + inner pages)
    writingBg:  "beige",   // the Writing section
    projectsBg: "black",   // the Projects section
    footerBg:   "beige",   // the footer

    // Accents — lime | rose | purple | orange | black  (or a #hex)
    writingAccent:  "lime",   // pill hover color
    projectsAccent: "lime",   // the filled "live" project card

    // Typography — sans (Geist) | serif (Lora) | rounded (Nunito)
    font: "sans",

    // Lines — "line" or "none"
    headerBorder:    "line",
    sectionDividers: "none",
    footerBorder:    "none",

    // Effects
    cardShadow: "hard",    // none | soft | hard   (writing pills)
    photoStyle: "border",  // none | border | shadow
    dissolve:   "off",     // on | off  (click-to-dissolve on project cards)
  },

  /* ---- footer / social links (optional) ---------------------------------- */
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/" },
    { label: "GitHub",   url: "https://github.com/jbailey28" },
  ],

  /* ---- writing -----------------------------------------------------------
     Each post shows up as a pill on the homepage + a page at post.html?slug=…
     `tldr` is optional (the summary box). `body` is Markdown. */
  posts: [
    {
      slug:   "from-professional-skateboarder-to-tech-sales",
      title:  "From Professional Skateboarder to Tech Sales",
      date:   "2026-08-01",
      author: "Jessyka Bailey",
      tldr:   "I'm a professional skateboarder for There Skateboards, and I've worked in sales since I was 16. Now I spend my days in tech sales and my nights building with AI — agents, research systems, workflows, a trading bot — because I think the people selling AI should understand more than its talking points. Each part of my career has made the others possible, and this is where I document what I'm building, what has worked, what has failed, and how I'm giving back to the skate community.",
      body: `For most of my life, the clearest way to explain who I was involved a skateboard.

I started skating when I was young, and in 2022, after roughly twenty years of working toward it, I became a professional skateboarder for There Skateboards – the first queer-owned skateboarding company.

But skateboarding has never been the only work I have done.

I have worked in sales since I was 16. Building a sustainable career in skateboarding is difficult, so for most of my life, sales and skating have existed alongside each other. Sales gave me the financial stability and flexibility to continue pursuing skateboarding. What I enjoyed most is that I didn't have to leave one career behind to begin another. I could build both at the same time.

People can become uncomfortable when someone changes or begins exploring something outside the identity they are known for. There can be an expectation that once you become recognized for one thing, you should continue presenting yourself in that same way. But I still skateboard professionally. Learning about technology and building with AI does not erase that part of my life.

If anything, each part of my career has made the others possible.

Skateboarding taught me how to work toward something without knowing exactly when, or whether, it would pay off. It taught me how to repeat the same motion hundreds of times, study what went wrong, make small adjustments, and keep trying. Sales taught me how to understand people, communicate value, create opportunities, and navigate industries where success is rarely guaranteed.

More recently, those skills have led me toward artificial intelligence.

Over the last several months, I have been spending my days working in technology sales and my nights building with AI. I have experimented with AI agents, outbound research systems, data aggregation workflows, and a trading bot built with Claude Code. Some of these projects work. Some work only under the right conditions. Others have shown me how wide the gap still is between an impressive AI demonstration and a dependable system someone can actually use.

That gap is what interests me.

I am not an engineer, and I am not pretending to be one. I am a salesperson learning how to build because I believe the people selling AI should understand more than its talking points. They should understand what it feels like to turn an idea into a workflow, connect different tools, work through unreliable outputs, and decide which parts of a process should be handled by software and which still require a person.

At the same time, I have also been thinking differently about what it means to be a professional skateboarder.

Professional skateboarding can sometimes become centered on the individual: what sponsors you have, what opportunities you receive, what footage you produce, and what the industry can give you. I understand why. It is an incredibly difficult career to build, and the opportunities are limited.

But I am at a point where I am thinking more about what I can give back to the community that made me who I am.

Skateboarding gave me an identity, a career, friendships, confidence, and a way of understanding the world. Being part of There Skateboards has also shown me the importance of creating space for people who have historically been overlooked or made to feel that skateboarding was not built for them.

I want the next stage of my career to include more than what I can personally accomplish. I want to use the relationships, business experience, technology, and opportunities I have gained to help create access for other people.

That is part of what I want this site to document.

Some posts will explore AI, sales, commerce, my ideas, and the future of work. Others will show systems I am building, including what worked, what failed, and what I still haven't figured out. I also want to write about skateboarding, representation, and how I am contributing to the community that gave me so much.

These subjects may appear unrelated from the outside. To me, they are connected by the same questions.

How do people create opportunities when a traditional path does not exist? How can technology give someone more leverage? What systems allow people to participate, earn, and build sustainable careers? And once you have created opportunities for yourself, how can you make it easier for someone else to do the same?

Hello, and welcome to the journey.`,
    },

    // ---- Example posts below. Replace or delete them as you write your own. ----
    {
      slug:   "what-im-working-on",
      title:  "What I'm working on right now",
      date:   "2026-07-20",
      author: "Jessyka Bailey",
      tldr:   "A short, honest update on what's currently on my desk — no grand thesis, just work in motion.",
      body: `The posts that keep a site feeling alive are usually the simplest ones: a quick note on what you're actually doing right now.

Here's the kind of thing that fits:

- **A project** you're building, and what stage it's at
- **A question** you're trying to answer
- **Something** you're reading or learning from

A few paragraphs and a short list is plenty. The point is to show your thinking in motion, not to be polished.

*This is an example post — replace it with your own in \`site.config.js\`.*`,
    },
    {
      slug:   "something-i-learned",
      title:  "Something I learned this week",
      date:   "2026-07-10",
      author: "Jessyka Bailey",
      tldr:   "One idea that changed how I think about the work — written down while it's still fresh.",
      body: `Writing down what you learn is how you actually keep it. It doesn't have to be long.

## The idea

Pick one thing that shifted your thinking this week and explain it plainly — as if to a friend who wasn't there.

## Why it matters

Then say why it changes what you'll do next. That second part is what makes it worth reading.

*This is an example post — replace it with your own in \`site.config.js\`.*`,
    },
    {
      slug:   "how-this-site-is-built",
      title:  "A quick note on how this site is built",
      date:   "2026-07-01",
      author: "Jessyka Bailey",
      tldr:   "This whole site is a free, open template you can fork and make your own in about thirty minutes.",
      body: `This site runs on a small open-source template called [Steal This Portfolio](https://github.com/jbailey28/steal-this-portfolio). No page builder, no monthly fee — just a few files you edit and deploy for free.

If you like the look, you can have your own version running today. Fork it, change one file, and it's yours.

*This is an example post — replace it with your own in \`site.config.js\`.*`,
    },
  ],

  /* ---- projects ----------------------------------------------------------
     status: "live"  → filled with your accent color, clickable, optional GitHub
                       fork counter ("Stolen 12×") via `repo`.
     status: "soon"  → outlined "Coming soon" placeholder.
     Aim for up to 4 so they sit in one clean row. */
  projects: [
    {
      title:  "Steal This Portfolio",
      status: "live",
      tag:    "Free · Open source",
      desc:   "The agent that rebuilds this exact site — fonts, layout, all of it. Fork it, make it yours.",
      url:    "https://github.com/jbailey28/steal-this-portfolio",
      repo:   "jbailey28/steal-this-portfolio", // shows a live fork count on the card
    },
    // ---- Example projects. Swap in your own, or delete down to the ones you have. ----
    { status: "soon", tag: "In progress", title: "Newsletter", desc: "A short note on what I'm building and learning, sent when I have something worth sharing." },
    { status: "soon", tag: "In progress", title: "Experiments", desc: "Small tools and prototypes I'm testing — some work, some don't. That's the point." },
    { status: "soon", tag: "In progress", title: "Talks & workshops", desc: "Sharing what I've learned about sales, AI, and building things that actually hold up." },
  ],

};
