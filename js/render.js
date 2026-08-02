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

  /* ---- theme: map the Style Kit choices to CSS variables + data-attributes -- */
  var BG = {
    white: { bg: "#FFFFFF", tx: "#1F1F1F" },
    black: { bg: "#1F1F1F", tx: "#F3EBDD" },
    beige: { bg: "#F3EBDD", tx: "#1F1F1F" },
    rose:  { bg: "#D58E97", tx: "#1F1F1F" }
  };
  var ACCENT = {
    lime:   { v: "#9FE500", on: "#111111" },
    rose:   { v: "#D58E97", on: "#1F1F1F" },
    purple: { v: "#4600E5", on: "#ffffff" },
    orange: { v: "#FF4800", on: "#111111" },
    black:  { v: "#000000", on: "#ffffff" }
  };
  var FONT = {
    sans:    { f: '"Geist","Helvetica Neue",Helvetica,Arial,sans-serif',  t: "0em" },
    serif:   { f: '"Lora",Georgia,"Times New Roman",serif',               t: "0em" },
    rounded: { f: '"Nunito","Helvetica Neue",Helvetica,Arial,sans-serif', t: "-0.004em" }
  };
  function luminance(hex) {
    hex = String(hex).replace("#", "");
    if (hex.length === 3) hex = hex.replace(/./g, "$&$&");
    var r = parseInt(hex.substr(0, 2), 16) / 255, g = parseInt(hex.substr(2, 2), 16) / 255, b = parseInt(hex.substr(4, 2), 16) / 255;
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }
  function bg(name) {
    if (typeof name === "string" && name.charAt(0) === "#") return { bg: name, tx: luminance(name) > 0.55 ? "#1F1F1F" : "#F3EBDD" };
    return BG[name] || BG.beige;
  }
  function accent(name) {
    if (typeof name === "string" && name.charAt(0) === "#") return { v: name, on: luminance(name) > 0.55 ? "#111111" : "#ffffff" };
    return ACCENT[name] || ACCENT.lime;
  }
  function applyTheme(el) {
    var t = S.theme || {}, st = el.style;
    var page = bg(t.pageBg || "beige"), s1 = bg(t.writingBg || "beige"), s2 = bg(t.projectsBg || "black"), foot = bg(t.footerBg || "beige");
    var wa = accent(t.writingAccent || "lime"), pa = accent(t.projectsAccent || "lime");
    var fn = FONT[t.font] || FONT.sans;
    st.setProperty("--pagebg", page.bg); st.setProperty("--pagetx", page.tx);
    st.setProperty("--s1bg", s1.bg);     st.setProperty("--s1tx", s1.tx);
    st.setProperty("--s2bg", s2.bg);     st.setProperty("--s2tx", s2.tx);
    st.setProperty("--fbg", foot.bg);    st.setProperty("--ftx", foot.tx);
    st.setProperty("--accent", wa.v);    st.setProperty("--on", wa.on);
    st.setProperty("--accent-p", pa.v);  st.setProperty("--on-p", pa.on);
    st.setProperty("--font", fn.f);      st.setProperty("--tracking", fn.t);
    el.setAttribute("data-s1", s1.bg.toUpperCase());
    el.setAttribute("data-shadow",   t.cardShadow || "hard");
    el.setAttribute("data-photo",    t.photoStyle || "border");
    el.setAttribute("data-hdiv",     t.headerBorder === "line" ? "line" : "off");
    el.setAttribute("data-divider",  t.sectionDividers === "line" ? "line" : "off");
    el.setAttribute("data-fdiv",     t.footerBorder === "line" ? "line" : "off");
    el.setAttribute("data-dissolve", t.dissolve === "on" ? "on" : "off");
    document.title = (S.name || "Portfolio") + (S.tagline ? " — " + S.tagline : "");
  }

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

  /* ---- dissolve: click-to-dissolve on project cards (when theme.dissolve = "on") ---- */
  function setupDissolve(jb) {
    if (jb.getAttribute("data-dissolve") !== "on") return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var cv = document.getElementById("jb-fx");
    if (!cv) { cv = document.createElement("canvas"); cv.id = "jb-fx"; cv.setAttribute("aria-hidden", "true"); document.body.appendChild(cv); }
    var ctx = cv.getContext("2d");
    var dpr = Math.min(2, window.devicePixelRatio || 1);
    function resize() { cv.width = innerWidth * dpr; cv.height = innerHeight * dpr; cv.style.width = innerWidth + "px"; cv.style.height = innerHeight + "px"; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
    resize(); addEventListener("resize", resize);
    var parts = [], raf = null;
    function tick() {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      var alive = false;
      ctx.fillStyle = parts.length ? parts[0].c : "#000";
      for (var i = 0; i < parts.length; i++) {
        var p = parts[i];
        if (p.a <= 0) continue;
        alive = true;
        if (p.t >= p.delay) { p.vy += 0.06; p.x += p.vx; p.y += p.vy; p.a -= 0.032; }
        p.t++;
        ctx.globalAlpha = Math.max(0, p.a);
        ctx.fillRect(p.x - p.s / 2, p.y - p.s / 2, p.s, p.s);
      }
      ctx.globalAlpha = 1;
      parts = parts.filter(function (p) { return p.a > 0; });
      raf = alive ? requestAnimationFrame(tick) : null;
    }
    function dissolve(el, color) {
      var r = el.getBoundingClientRect();
      var rad = Math.min(28, r.width / 2, r.height / 2), cell = 2.5, s = 1, maxDelay = 8;
      var cols = Math.floor(r.width / cell), rows = Math.floor(r.height / cell);
      for (var iy = 0; iy < rows; iy++) {
        for (var ix = 0; ix < cols; ix++) {
          var px = r.left + ix * cell + cell / 2, py = r.top + iy * cell + cell / 2;
          var lx = Math.min(px - r.left, r.right - px), ly = Math.min(py - r.top, r.bottom - py);
          if (lx < rad && ly < rad) { var dx = rad - lx, dy = rad - ly; if (dx * dx + dy * dy > rad * rad) continue; }
          parts.push({ x: px, y: py, s: s, a: 1, c: color, t: 0, delay: Math.round((ix / cols) * maxDelay + Math.random() * 4), vx: (Math.random() - 0.35) * 2.2, vy: -(0.6 + Math.random() * 2.6) });
        }
      }
      if (!raf) raf = requestAnimationFrame(tick);
    }
    jb.querySelectorAll(".jb-proj").forEach(function (el) {
      el.addEventListener("click", function (e) {
        var href = el.getAttribute("href");
        e.preventDefault();
        var color = getComputedStyle(jb).getPropertyValue("--accent-p").trim() || "#1F1F1F";
        dissolve(el, color);
        el.style.opacity = "0";
        if (href && href !== "#") {
          if (el.getAttribute("target") === "_blank") { window.open(href, "_blank", "noopener"); setTimeout(function () { el.style.opacity = ""; }, 700); }
          else { setTimeout(function () { window.location.href = href; }, 620); }
        } else {
          setTimeout(function () { el.style.opacity = ""; }, 800);
        }
      });
    });
  }

  /* ---- boot --------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    var mount = document.getElementById("jb");
    if (!mount) return;
    applyTheme(mount);
    var page = document.body.getAttribute("data-page");
    if (page === "blog") renderBlog(mount);
    else if (page === "projects") renderProjects(mount);
    else if (page === "post") renderPost(mount);
    else renderHome(mount);
    forkCounters();
    setupDissolve(mount);
  });
})();
