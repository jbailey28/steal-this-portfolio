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
     These are the exact options from the original site. Change the hex values
     to re-skin the whole thing. Text auto-sits readably on your accent color. */
  theme: {
    accent:     "#9FE500",  // hover color + the "live" project card
    onAccent:   "#111111",  // text that sits on top of the accent
    ink:        "#1F1F1F",  // main text color
    pageBg:     "#F3EBDD",  // page background (beige)
    projectsBg: "#1F1F1F",  // the projects strip (black)
    font:       "'Geist', 'Helvetica Neue', Helvetica, Arial, sans-serif",
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
    { title: "—", status: "soon", tag: "In progress" },
    { title: "—", status: "soon", tag: "In progress" },
    { title: "—", status: "soon", tag: "In progress" },
  ],

};
