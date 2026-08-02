/* =============================================================================
   render.js — reads site.config.js and builds the pages. You don't edit this.
   ============================================================================= */
(function () {
  "use strict";
  var S = window.SITE || {};
  var esc = function (s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  };

  /* ---- theme: push the Style Kit values into CSS variables ---------------- */
  (function applyTheme() {
    var t = S.theme || {};
    var r = document.documentElement.style;
    if (t.accent)     { r.setProperty("--lime", t.accent); }
    if (t.onAccent)   { r.setProperty("--on-lime", t.onAccent); }
    if (t.ink)        { r.setProperty("--ink", t.ink); }
    if (t.pageBg)     { r.setProperty("--page-bg", t.pageBg); r.setProperty("--beige", t.pageBg); }
    if (t.projectsBg) { r.setProperty("--projects-bg", t.projectsBg); }
    if (t.font)       { r.setProperty("--jb-sans", t.font); }
    document.title = (S.name || "Portfolio") + (S.tagline ? " — " + S.tagline : "");
  })();

  /* ---- shared header + footer -------------------------------------------- */
  function nav(current) {
    var items = [["Home", "index.html", "home"], ["Blog", "blog.html", "blog"], ["Projects", "projects.html", "projects"]];
    return items.map(function (i) {
      return '<a href="' + i[1] + '"' + (i[2] === current ? ' aria-current="page"' : "") + ">" + i[0] + "</a>";
    }).join("");
  }
  function header(current) {
    return '<header class="jb-header"><div class="jb-wrap jb-topbar">' +
      '<a class="jb-brand" href="index.html">' + esc(S.name || "Your Name") + "</a>" +
      '<nav class="jb-nav">' + nav(current) + "</nav></div></header>";
  }
  function footer() {
    var year = (S.year) || new Date().getFullYear();
    var links = (S.socials || []).map(function (s) {
      return '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.label) + "</a>";
    }).join(" · ");
    return '<footer class="jb-sec jb-foot"><div class="jb-wrap"><p>© ' + year + " " + esc(S.name || "") +
      (links ? " · " + links : "") + "</p></div></footer>";
  }

  /* ---- pieces ------------------------------------------------------------- */
  function postPill(p) {
    return '<a class="jb-post" href="post.html?slug=' + encodeURIComponent(p.slug) + '">' +
      '<span class="jb-t">' + esc(p.title) + '</span><span class="jb-arw">→</span></a>';
  }
  function projectCard(p) {
    if (p.status === "live") {
      var repoAttr = p.repo ? ' data-repo="' + esc(p.repo) + '"' : "";
      var target = p.url ? ' target="_blank" rel="noopener"' : "";
      return '<a class="jb-proj jb-live" href="' + esc(p.url || "#") + '"' + target + repoAttr + ">" +
        '<span class="jb-ptop"><span class="jb-tag">' + esc(p.tag || "Free · Open source") + "</span>" +
        '<span class="jb-count" data-count>Be the first</span></span>' +
        '<span class="jb-pt">' + esc(p.title) + "</span>" +
        '<span class="jb-pd">' + esc(p.desc || "") + "</span>" +
        '<span class="jb-go">Get it →</span></a>';
    }
    var soonDesc = p.desc ? '<span class="jb-pd">' + esc(p.desc) + "</span>" : "";
    return '<span class="jb-proj jb-soon"><span class="jb-tag">' + esc(p.tag || "In progress") + "</span>" +
      '<span class="jb-pt">' + esc(p.title || "—") + "</span>" + soonDesc +
      '<span class="jb-go">' + esc(p.cta || "Coming soon") + "</span></span>";
  }
  function fmtDate(d) {
    if (!d) return "";
    var parts = String(d).split("-");
    if (parts.length !== 3) return d;
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return months[parseInt(parts[1], 10) - 1] + " " + parseInt(parts[2], 10) + ", " + parts[0];
  }
  function readingTime(md) {
    var words = String(md || "").replace(/[#*_>\-`\[\]()]/g, " ").split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 200));
  }

  /* ---- page builders ------------------------------------------------------ */
  function renderHome(mount) {
    var posts = (S.posts || []).slice(0, 4);
    var projects = (S.projects || []).slice(0, 4);
    while (projects.length < 4) projects.push({ status: "soon", tag: "In progress", title: "—" });
    var photo = S.photo || "assets/portrait.svg";
    mount.innerHTML =
      header("home") +
      '<section class="jb-sec jb-sec1"><div class="jb-wrap"><div class="jb-hero">' +
        '<div class="jb-writing">' +
          '<div class="jb-whead"><p class="jb-lab">Writing</p><span class="jb-all"><a href="blog.html">All posts →</a></span></div>' +
          '<div class="jb-cards">' + posts.map(postPill).join("") + "</div>" +
        "</div>" +
        '<figure class="jb-photo"><img src="' + esc(photo) + '" alt="' + esc(S.photoAlt || S.name || "") + '"></figure>' +
      "</div></div></section>" +
      '<section class="jb-sec jb-sec2"><div class="jb-wrap">' +
        '<div class="jb-whead"><p class="jb-lab">Projects</p><span class="jb-all"><a href="projects.html">All projects →</a></span></div>' +
        '<div class="jb-projgrid">' + projects.map(projectCard).join("") + "</div>" +
      "</div></section>" +
      footer();
  }

  function renderBlog(mount) {
    var posts = S.posts || [];
    var list = posts.length
      ? '<div class="jb-bloglist">' + posts.map(postPill).join("") + "</div>"
      : '<p class="jb-empty">No posts yet.</p>';
    mount.innerHTML = header("blog") +
      '<main class="jb-page"><h1 class="jb-page-title">Writing</h1>' + list + "</main>" + footer();
  }

  function renderProjects(mount) {
    var projects = S.projects || [];
    mount.innerHTML = header("projects") +
      '<main class="jb-page jb-projpage"><h1 class="jb-page-title">Projects</h1>' +
        '<div class="jb-projgrid jb-projgrid-page">' + projects.map(projectCard).join("") + "</div>" +
      "</main>" + footer();
  }

  function renderPost(mount) {
    var slug = new URLSearchParams(location.search).get("slug");
    var p = (S.posts || []).filter(function (x) { return x.slug === slug; })[0];
    if (!p) {
      mount.innerHTML = header("blog") +
        '<main class="jb-page"><h1 class="jb-page-title">Post not found</h1><p><a href="blog.html">← Back to writing</a></p></main>' + footer();
      return;
    }
    document.title = p.title + " — " + (S.name || "");
    var meta = '<div class="jb-meta"><time>' + esc(fmtDate(p.date)) + "</time>" +
      '<span aria-hidden="true">·</span><span>' + readingTime(p.body) + " min read</span>" +
      (p.author ? '<span aria-hidden="true">·</span><span class="jb-byline">' + esc(p.author) + "</span>" : "") + "</div>";
    var tldr = p.tldr ? '<div class="jb-tldr"><span class="jb-tldr-label">TL;DR</span><p>' + esc(p.tldr) + "</p></div>" : "";
    var body = window.marked ? window.marked.parse(p.body || "") : "<p>" + esc(p.body) + "</p>";
    mount.innerHTML = header("blog") +
      '<main class="jb-page jb-article"><h1 class="jb-title">' + esc(p.title) + "</h1>" +
        meta + tldr + '<div class="jb-body">' + body + "</div>" +
      "</main>" + footer();
  }

  /* ---- live GitHub fork counter for "live" project cards ------------------ */
  function forkCounters() {
    document.querySelectorAll(".jb-live[data-repo]").forEach(function (card) {
      var repo = card.getAttribute("data-repo");
      var el = card.querySelector("[data-count]");
      if (!repo || !el) return;
      fetch("https://api.github.com/repos/" + repo)
        .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
        .then(function (d) {
          var n = d.forks_count || 0;
          el.textContent = n ? "Stolen " + n + "×" : "Be the first";
        })
        .catch(function () {});
    });
  }

  /* ---- boot --------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    var mount = document.getElementById("jb");
    if (!mount) return;
    var page = document.body.getAttribute("data-page");
    if (page === "blog") renderBlog(mount);
    else if (page === "projects") renderProjects(mount);
    else if (page === "post") renderPost(mount);
    else renderHome(mount);
    forkCounters();
  });
})();
