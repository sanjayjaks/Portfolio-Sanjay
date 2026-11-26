// ================= EDIT YOUR CONTENT HERE =================
// Every Drive file must be shared as "Anyone with the link → Viewer",
// otherwise thumbnails and playback won't load for visitors.

const DRIVE = {
  thumb:  (id, w = 1280) => `https://drive.google.com/thumbnail?id=${id}&sz=w${w}`,
  alt:    (id, w = 1280) => `https://lh3.googleusercontent.com/d/${id}=w${w}`,
  stream: id => `https://drive.google.com/uc?export=download&id=${id}`,
  embed:  id => `https://drive.google.com/file/d/${id}/preview`,
  view:   id => `https://drive.google.com/file/d/${id}/view`,
  folder: id => `https://drive.google.com/embeddedfolderview?id=${id}#grid`,
  folderView: id => `https://drive.google.com/drive/folders/${id}`
};

// Hero credits: one line per role you apply for.
// [role, proof shown beside it, where it links, video filter to apply (optional)]
const credits = [
  ["AI Video Editor",                   "Veo · Kling · Runway → Premiere", "#work", "ai"],
  ["AI Video Creator",                  "Text & image to video, AI characters", "#work", "ai"],
  ["Video Editor",                      "D2C ads, documentary, long form", "#work", "all"],
  ["AI Dubbing Artist",                 "ElevenLabs voice · HeyGen lip sync", "#services"],
  ["Creative Designer",                 "Key visuals, social creatives", "#design"],
  ["Multimedia Designer",               "Carousels, threads, motion, UI", "#carousels"],
  ["AI Creative & Multimedia Designer", "Current role · Netram Defence", "#experience"],
  ["Creative Strategist",               "Hooks, scripts, formats, retention", "#process"]
];

// Videos. Each clip tries `src` (an MP4 in a /videos folder next to index.html)
// first, then streams from Drive. `did` = what you did on it. `d` = description
// (only shown on the featured first project). Check these lines are accurate.
const projects = [
  {t:"AI Generated & Edited Film", c:"ai", tag:"AI video", id:"1diFCGfNpIGNV39Yd_DhE_72LA7XbF-Bx", src:"videos/ai-1.mp4",
   did:"AI generation · Edit · Sound · Grade",
   d:"A short film generated shot by shot with AI video models, then cut, scored and graded like live action."},
  {t:"AI Generated & Edited Video 02", c:"ai", tag:"AI video", id:"1aeP4RIACDsA0La0sO69BTcCCJL6Iszsc", src:"videos/ai-2.mp4", did:"AI generation · Edit · Sound"},
  {t:"AI & Motion Graphics", c:"ai",  tag:"Motion",            id:"16GjFI7bSzjBxJd3jRtCn3KTanE7XFJ8I", src:"videos/motion.mp4",      did:"Motion design · AI generation"},
  {t:"supply6",              c:"d2c", tag:"D2C brand",         id:"1nigDtwtiVxzyDlk2Ei6DwrjHVIAnPgFz", src:"videos/supply6.mp4",     did:"Edit · Motion · Sound"},
  {t:"rockED",               c:"d2c", tag:"D2C brand",         id:"1cWYOD5sLjmaNqWQOVYGge78lfYqlIZyy", src:"videos/rocked.mp4",      did:"Edit · Motion · Sound"},
  {t:"Documentary Edit",     c:"long",tag:"YouTube long form", id:"15TFPk32gTTzxp9MFKfXsEaNmdGeSBOE1", src:"videos/documentary.mp4", did:"Story edit · Color · Sound"},
  {t:"Super Nova",           c:"d2c", tag:"D2C brand",         id:"1LOFcBeeL6ZXIlDDCHRL1KT-KMOgNxfM2", src:"videos/supernova.mp4",   did:"Edit · Motion · Sound"},
  {t:"Narrative & Storytelling", c:"long", tag:"YouTube long form", id:"1Df1RyytiibgRULIkYHFKqNJjUvN1-Zji", src:"videos/narrative.mp4", did:"Story edit · Pacing · Sound"},
  {t:"Finance Explainer",    c:"biz", tag:"Freelance project", id:"1wJYgyFm6567bmSjtBWLOmO32w0AonR15", src:"videos/finance.mp4",     did:"Edit · Motion graphics · Subtitles"}
];

// Graphic design pieces (images on Drive).
const designs = [
  {t:"Arun Khetarpal — PVC carousel", tag:"Social creative", id:"1GZKKlHg8HSpiBiPrRh2WVEcteNeoiFRy"},
  {t:"MAPH26 campaign visual",        tag:"Key visual",      id:"1EyAhpSTzZu43pfZugrjb1ZoDEKV_fB6v"}
];

// Carousels & threads.
// While this list is empty, the section shows your Drive folder directly.
// For the swipeable Instagram-style view, add one entry per carousel with its slide
// file IDs in order (the ID is the part between /d/ and /view in a share link):
//   {t:"Carousel name", tag:"Instagram carousel", slides:["ID1","ID2","ID3"]},
const carouselFolder = "1LYeaUKmVjNqHM4zIsJvSl30zdFBKwpko";
const carousels = [
];

const services = [
  {as:"AI Video Creator", t:"AI video creation",
   p:"Original footage from prompts, images and references, with characters that stay consistent from shot to shot.",
   list:["Text-to-video","Image-to-video","AI characters","AI B-roll"],
   stack:"Veo 3 · Kling · Runway · Higgsfield · Midjourney"},
  {as:"Video Editor · AI Video Editor", t:"Editing & post-production",
   p:"Story-first edits for ads, YouTube and social, finished with color, sound and subtitles.",
   list:["D2C ads","Documentary & long form","Reels & Shorts","Color grading","Sound design"],
   stack:"Premiere Pro · DaVinci Resolve · After Effects · CapCut"},
  {as:"AI Dubbing Artist", t:"AI dubbing & voice",
   p:"Voiceovers and dubs in new languages, synced to the speaker's lips and mixed to sit right under the music.",
   list:["AI voiceover","Multilingual dubbing","Lip sync","Voice cleanup"],
   stack:"ElevenLabs · HeyGen · Premiere / Resolve audio"},
  {as:"Creative · Multimedia Designer", t:"Graphic & multimedia design",
   p:"On-brand visuals for social, campaigns and product, from a single key visual to a full carousel.",
   list:["Key visuals","Carousels & threads","Thumbnails","UI/UX wireframes"],
   stack:"Firefly · Midjourney · Canva Pro · After Effects"},
  {as:"Creative Strategist", t:"Creative strategy",
   p:"Deciding what to make before making it: the hook, the format, the platform and what keeps people watching.",
   list:["Hooks & scripts","Storyboards","Content formats","Retention editing"],
   stack:"Research · Scripting · ChatGPT · Gemini · Claude"},
  {as:"Bonus", t:"Websites for the work",
   p:"I studied computer science, so I can also build and ship the landing page your campaign points to.",
   list:["Landing pages","Portfolio sites","React apps"],
   stack:"React · Node.js · Express · MongoDB · Vercel"}
];

const steps = [
  ["Brief",    "Goal, audience, platform and deadline, agreed in one call."],
  ["Hook",     "The first three seconds and the angle, scripted before anything is made."],
  ["Generate", "AI footage, characters and visuals, built from tested prompts."],
  ["Edit",     "Pacing, story, motion graphics, color and sound design."],
  ["Voice",    "Voiceover, dubbing and lip sync in the languages you need."],
  ["Deliver",  "Exports for every platform, thumbnails and carousels to match."]
];

const jobs = [
  ["Aug 2026 – Present","AI Creative & Multimedia Designer","Netram Defence Foundation · Gurugram, on-site",
    ["Lead UI/UX design for the SDD project: wireframes, screen layouts and end-to-end user flows.",
     "Produce AI-assisted video, graphics and multimedia with Veo, Runway, Midjourney and Firefly, on brand."]],
  ["Mar 2026 – Jul 2026","Video Editor","Yellowred Photography · Hyderabad, on-site",
    ["Edited client films with a focus on cinematic storytelling and visual quality, delivered on client timelines."]],
  ["Jan 2026 – Mar 2026","Video Editor Intern","Protrainy · Remote",
    ["Edited product marketing videos with the product team, delivering every asset on schedule with consistent branding."]],
  ["Sep 2025 – Dec 2025","Video Editor & Content Writer Intern","Dragon's Perception · Remote",
    ["Researched, scripted and edited 30–90s short-form and long-form videos for Indian youth audiences.",
     "Handled motion graphics, subtitles, sound cleanup and color correction to spec and deadline."]],
  ["Jul 2024 – May 2026","Video Editor","Hacnic Club, MLR Institute of Technology",
    ["Produced event highlight reels and Instagram/YouTube reels with subtitles, transitions and effects under tight deadlines."]],
  ["2024 – Present","Freelance Video Editor & Event Specialist","Self-employed · Hyderabad / Remote",
    ["Delivered promotional and educational videos for clients in India, the UAE and Africa.",
     "Shot and edited event recaps with synced music and overlays."]]
];
// ==========================================================

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const REDUCE = matchMedia("(prefers-reduced-motion: reduce)").matches;
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
document.documentElement.classList.add("js");

/* ---------- hero credits ---------- */
$("#credits").innerHTML = credits.map(([role, proof, href, f], i) => `
  <li style="--i:${i}"><a href="${href}"${f ? ` data-filter="${f}"` : ""}>
    <span class="role">${esc(role)}</span><span class="dots" aria-hidden="true"></span>
    <span class="proof">${esc(proof)}</span><span class="go" aria-hidden="true">→</span>
  </a></li>`).join("");
$("#credits").addEventListener("click", e => {
  const a = e.target.closest("a[data-filter]");
  if (a) setFilter(a.dataset.filter);
});

/* ---------- inline autoplay video ---------- */
const videoTag = p => `<video muted loop playsinline preload="none" poster="${DRIVE.thumb(p.id)}">
  <source data-src="${p.src}" type="video/mp4"><source data-src="${DRIVE.stream(p.id)}" type="video/mp4"></video>`;

function loadVideo(v){
  if (v.dataset.loaded) return;
  v.dataset.loaded = "1";
  $$("source", v).forEach(s => s.src = s.dataset.src);
  v.preload = "auto";
  v.load();
}

// Start loading just before a clip scrolls in; play only while it's on screen.
const preloader = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting){ loadVideo(e.target); preloader.unobserve(e.target); }
}), {rootMargin: "400px 0px"});

const autoplayer = new IntersectionObserver(entries => entries.forEach(e => {
  const v = e.target;
  if (e.isIntersecting && !REDUCE){ loadVideo(v); v.play().catch(() => {}); }
  else v.pause();
}), {threshold: .35});

function watchVideo(v){
  // Vertical reels are shown whole over a blurred backdrop instead of being cropped.
  v.addEventListener("loadedmetadata", () => {
    if (v.videoHeight > v.videoWidth) v.closest(".card")?.classList.add("portrait");
  });
  preloader.observe(v);
  autoplayer.observe(v);
}

/* ---------- video grid ---------- */
const grid = $("#grid");
grid.innerHTML = projects.map((p, i) => {
  const media = `<button class="open" style="--poster:url('${DRIVE.thumb(p.id, 640)}')" data-i="${i}" aria-label="Watch ${esc(p.t)} with sound">
      ${videoTag(p)}<span class="hint" aria-hidden="true">Play with sound</span></button>`;
  if (i === 0) return `
    <article class="card feature" data-c="${p.c}">
      ${media}
      <div class="meta">
        <div class="meta-top"><span class="tag mono">Featured · ${esc(p.tag)}</span><h3>${esc(p.t)}</h3></div>
        ${p.d ? `<p class="desc">${esc(p.d)}</p>` : ""}
        <p class="did">${esc(p.did)}</p>
        <button class="btn" data-i="${i}">Watch with sound</button>
      </div>
    </article>`;
  return `
    <article class="card" data-c="${p.c}">
      ${media}
      <div class="meta">
        <div class="meta-top"><h3>${esc(p.t)}</h3><span class="tag">${esc(p.tag)}</span></div>
        <p class="did">${esc(p.did)}</p>
      </div>
    </article>`;
}).join("");
$$("video", grid).forEach(watchVideo);

function setFilter(f){
  $$("#work .filters button").forEach(x => x.setAttribute("aria-pressed", String(x.dataset.f === f)));
  $$(".card", grid).forEach(c => c.hidden = f !== "all" && c.dataset.c !== f);
}
$$("#work .filters button").forEach(b => b.onclick = () => setFilter(b.dataset.f));

/* ---------- graphic design ---------- */
const designsEl = $("#designs");
designsEl.innerHTML = designs.map((d, i) => `
  <figure class="design">
    <button class="open" data-d="${i}" aria-label="View ${esc(d.t)} full size">
      <img loading="lazy" src="${DRIVE.thumb(d.id, 1600)}" data-id="${d.id}" alt="${esc(d.t)}">
    </button>
    <figcaption><b>${esc(d.t)}</b><span>${esc(d.tag)}</span></figcaption>
  </figure>`).join("");

// If Drive's thumbnail endpoint refuses an image, retry through Google's image CDN once.
document.addEventListener("error", e => {
  const im = e.target;
  if (im.tagName === "IMG" && im.dataset.id && !im.dataset.fb){
    im.dataset.fb = "1";
    im.src = DRIVE.alt(im.dataset.id, 1600);
  }
}, true);

/* ---------- carousels & threads ---------- */
const setsEl = $("#sets");
if (!carousels.length){
  setsEl.innerHTML = `<div class="folder">
    <iframe src="${DRIVE.folder(carouselFolder)}" title="Carousels and threads" loading="lazy"></iframe>
    <p><a href="${DRIVE.folderView(carouselFolder)}" target="_blank" rel="noopener">Open the full folder in Drive ↗</a></p>
  </div>`;
} else {
  setsEl.innerHTML = carousels.map(s => `
    <article class="set">
      <div class="set-head">
        <div><h3>${esc(s.t)}</h3><span>${esc(s.tag)} · ${s.slides.length} slides</span></div>
        <div class="ctrl">
          <button class="prev" aria-label="Previous slide">←</button>
          <span class="count">1 / ${s.slides.length}</span>
          <button class="next" aria-label="Next slide">→</button>
        </div>
      </div>
      <div class="track" tabindex="0" aria-label="${esc(s.t)} slides">
        ${s.slides.map((id, j) => `<button class="slide" data-id="${id}" data-n="${j + 1}" aria-label="View slide ${j + 1} full size">
          <img loading="lazy" src="${DRIVE.thumb(id, 1080)}" data-id="${id}" alt="${esc(s.t)}, slide ${j + 1}"></button>`).join("")}
      </div>
    </article>`).join("");

  $$(".set", setsEl).forEach(set => {
    const track = $(".track", set), count = $(".count", set), total = $$(".slide", set).length;
    const prev = $(".prev", set), next = $(".next", set);
    const step = () => $(".slide", track).getBoundingClientRect().width + 12;
    const update = () => {
      const n = Math.min(total, Math.round(track.scrollLeft / step()) + 1);
      count.textContent = `${n} / ${total}`;
      prev.disabled = track.scrollLeft < 4;
      next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    };
    prev.onclick = () => track.scrollBy({left: -step(), behavior: REDUCE ? "auto" : "smooth"});
    next.onclick = () => track.scrollBy({left:  step(), behavior: REDUCE ? "auto" : "smooth"});
    track.addEventListener("scroll", update, {passive: true});
    addEventListener("resize", update);
    update();
  });
}

/* ---------- services & process ---------- */
$("#svc").innerHTML = services.map((s, i) => `
  <article class="svc">
    <p class="as"><span>${esc(s.as)}</span><span>${String(i + 1).padStart(2, "0")}</span></p>
    <h3>${esc(s.t)}</h3>
    <p>${esc(s.p)}</p>
    <ul>${s.list.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
    <p class="stack">${esc(s.stack)}</p>
  </article>`).join("");

$("#steps").innerHTML = steps.map(([h, p], i) => `
  <li><span class="n">${String(i + 1).padStart(2, "0")}</span><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`).join("");

/* ---------- experience ---------- */
$("#xp").innerHTML = jobs.map(([when, role, where, points]) => `
  <li class="${/present/i.test(when) && /Netram/.test(where) ? "current" : ""}">
    <time>${esc(when)}</time>
    <div><h3>${esc(role)}</h3><small>${esc(where)}</small>
    <ul>${points.map(p => `<li>${esc(p)}</li>`).join("")}</ul></div>
  </li>`).join("");

/* ---------- viewer (video with sound / full-size image) ---------- */
const dlg = $("#modal"), mbody = $("#modal-body");

function openViewer(title, id){
  $("#mtitle").textContent = title;
  $("#mopen").href = DRIVE.view(id);
  dlg.showModal();
}

function openVideo(p){
  mbody.innerHTML = `<video controls playsinline autoplay poster="${DRIVE.thumb(p.id, 1920)}">
    <source src="${p.src}" type="video/mp4"><source src="${DRIVE.stream(p.id)}" type="video/mp4"></video>`;
  // Both direct sources failed: fall back to Drive's own player.
  $("source:last-of-type", mbody).addEventListener("error", () => {
    mbody.innerHTML = `<iframe src="${DRIVE.embed(p.id)}" allow="autoplay; fullscreen" allowfullscreen title="${esc(p.t)}"></iframe>`;
  });
  openViewer(p.t, p.id);
}

function openImage(title, id){
  mbody.innerHTML = `<img src="${DRIVE.thumb(id, 2400)}" data-id="${id}" alt="${esc(title)}">`;
  openViewer(title, id);
}

grid.addEventListener("click", e => {
  const b = e.target.closest("[data-i]"); if (b) openVideo(projects[b.dataset.i]);
});
designsEl.addEventListener("click", e => {
  const b = e.target.closest("[data-d]"); if (!b) return;
  const d = designs[b.dataset.d]; openImage(d.t, d.id);
});
setsEl.addEventListener("click", e => {
  const b = e.target.closest(".slide"); if (!b) return;
  openImage(`${$("h3", b.closest(".set")).textContent} — slide ${b.dataset.n}`, b.dataset.id);
});

$("#close").onclick = () => dlg.close();
dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
dlg.addEventListener("close", () => { mbody.innerHTML = ""; });

/* ---------- nav: mobile menu + current section ---------- */
const burger = $(".burger"), menu = $("#menu");
const setMenu = open => {
  menu.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
};
burger.onclick = () => setMenu(!menu.classList.contains("open"));
menu.onclick = e => { if (e.target.tagName === "A") setMenu(false); };
addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

const navLinks = $$("#menu a:not(.pill)");
const spy = new IntersectionObserver(entries => entries.forEach(e => {
  if (!e.isIntersecting) return;
  navLinks.forEach(a => a.getAttribute("href") === `#${e.target.id}`
    ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current"));
}), {rootMargin: "-45% 0px -50% 0px"});
$$("main section[id]").forEach(s => spy.observe(s));

/* ---------- reveal on scroll ---------- */
if (!REDUCE){
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); }
  }), {threshold: .12, rootMargin: "0px 0px -40px 0px"});
  $$(".head, .card, .design, .svc, .process li, .xp > li, .about, .contact-wrap").forEach(el => {
    el.classList.add("rv"); io.observe(el);
  });
}

/* ---------- contact ---------- */
$("#copy").onclick = async e => {
  const btn = e.currentTarget, mail = "sanjayjaks71@gmail.com";
  try { await navigator.clipboard.writeText(mail); btn.textContent = "Copied ✓"; }
  catch { btn.textContent = mail; }
  setTimeout(() => btn.textContent = "Copy email", 2000);
};

$("#form").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target), note = $("#note");
  if (!f.get("name") || !/\S+@\S+\.\S+/.test(f.get("email")) || !f.get("msg")){
    note.textContent = "Add your name, a valid email and a few lines about the project.";
    return;
  }
  const body = `${f.get("msg")}\n\nType: ${f.get("type")}\nFrom: ${f.get("name")} (${f.get("email")})`;
  location.href = `mailto:sanjayjaks71@gmail.com?subject=${encodeURIComponent(`${f.get("type")} enquiry from ${f.get("name")}`)}&body=${encodeURIComponent(body)}`;
  note.textContent = "Opening your email app to send this.";
});

const yr = new Date().getFullYear();
$("#yr").textContent = yr;
$("#yr2").textContent = yr;
