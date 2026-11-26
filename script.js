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

// Videos. Each card tries src (an MP4 next to index.html in /videos) first,
// then streams straight from Drive. The card's shape adapts to the clip, so
// vertical reels and horizontal films both fit.
const projects = [
  {t:"AI Generated & Edited Film", c:"ai",   tag:"AI video",          id:"1diFCGfNpIGNV39Yd_DhE_72LA7XbF-Bx", src:"videos/ai-1.mp4"},
  {t:"AI Generated & Edited Video 02", c:"ai", tag:"AI video",        id:"1aeP4RIACDsA0La0sO69BTcCCJL6Iszsc", src:"videos/ai-2.mp4"},
  {t:"AI & Motion Graphics",       c:"ai",   tag:"Motion",            id:"16GjFI7bSzjBxJd3jRtCn3KTanE7XFJ8I", src:"videos/motion.mp4"},
  {t:"supply6",                    c:"d2c",  tag:"D2C brand",         id:"1nigDtwtiVxzyDlk2Ei6DwrjHVIAnPgFz", src:"videos/supply6.mp4"},
  {t:"rockED",                     c:"d2c",  tag:"D2C brand",         id:"1cWYOD5sLjmaNqWQOVYGge78lfYqlIZyy", src:"videos/rocked.mp4"},
  {t:"Documentary Edit",           c:"long", tag:"YouTube long form", id:"15TFPk32gTTzxp9MFKfXsEaNmdGeSBOE1", src:"videos/documentary.mp4"},
  {t:"Super Nova",                 c:"d2c",  tag:"D2C brand",         id:"1LOFcBeeL6ZXIlDDCHRL1KT-KMOgNxfM2", src:"videos/supernova.mp4"},
  {t:"Narrative & Storytelling",   c:"long", tag:"YouTube long form", id:"1Df1RyytiibgRULIkYHFKqNJjUvN1-Zji", src:"videos/narrative.mp4"},
  {t:"Finance Explainer",          c:"biz",  tag:"Freelance project", id:"1wJYgyFm6567bmSjtBWLOmO32w0AonR15", src:"videos/finance.mp4"}
];

// Graphic design pieces (images on Drive). Rename t/tag to whatever you like.
const designs = [
  {t:"Arun Khetarpal — PVC carousel", tag:"Social creative", id:"1GZKKlHg8HSpiBiPrRh2WVEcteNeoiFRy"},
  {t:"MAPH26 campaign visual",        tag:"Key visual",      id:"1EyAhpSTzZu43pfZugrjb1ZoDEKV_fB6v"}
];

// Carousels & threads.
// Until you add sets below, the section shows your Drive folder directly.
// To get the swipeable Instagram-style view, add one entry per carousel, with its
// slide file IDs in order (the ID is the part between /d/ and /view in a share link):
//   {t:"Carousel name", tag:"Instagram carousel", slides:["ID1","ID2","ID3"]},
const carouselFolder = "1LYeaUKmVjNqHM4zIsJvSl30zdFBKwpko";
const carousels = [
];

const tools = ["Premiere Pro","DaVinci Resolve","After Effects","Veo 3","Kling","Runway","Higgsfield","HeyGen","ElevenLabs","Midjourney","Firefly","Canva Pro","React","Node.js","MongoDB"];

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

const skills = {
  creative: [
    ["Video editing",["Adobe Premiere Pro","DaVinci Resolve","CapCut","Filmora"]],
    ["Motion & VFX",["After Effects","Motion graphics","Compositing","Canva Pro"]],
    ["Generative AI video",["Google Veo","Kling AI","Runway","Higgsfield","HeyGen","ElevenLabs"]],
    ["AI workflows",["Text-to-video","Image-to-video","AI characters","Lip sync","AI voice","Prompt engineering"]],
    ["Color & audio",["Color correction","Color grading","Sound design","Audio mixing"]],
    ["Social content",["Instagram Reels","YouTube Shorts","Carousels & threads","Short-form ads","Retention editing"]],
    ["Story",["Hooks","Pacing","Storyboarding","Script collaboration"]],
    ["Post-production",["Subtitles","B-roll","Compression","Thumbnails","File management"]]
  ],
  dev: [
    ["Languages",["Java (OOP, DSA)","JavaScript","C"]],
    ["Frontend",["React.js","React Native","HTML","CSS"]],
    ["Backend",["Node.js","Express.js","REST APIs"]],
    ["Data & cloud",["MongoDB","PostgreSQL","Upstash"]],
    ["State",["Redux","Context API"]],
    ["Tooling & deploy",["Git","Vite","Render","Vercel","Postman"]],
    ["AI dev tools",["GitHub Copilot","ChatGPT","Claude"]],
    ["Ways of working",["Problem solving","Cross-functional teams","Stakeholder communication"]]
  ]
};
// ==========================================================

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const REDUCE = matchMedia("(prefers-reduced-motion: reduce)").matches;
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

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

// Start loading a little before a clip scrolls in; play only while it's on screen.
const preloader = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting){ loadVideo(e.target); preloader.unobserve(e.target); }
}), {rootMargin: "400px 0px"});

const autoplayer = new IntersectionObserver(entries => entries.forEach(e => {
  const v = e.target;
  if (e.isIntersecting && !REDUCE){ loadVideo(v); v.play().catch(() => {}); }
  else v.pause();
}), {threshold: .35});

function watchVideo(v){
  // Match the frame to the clip's real shape (9:16 reels stay vertical).
  v.addEventListener("loadedmetadata", () => {
    const box = v.closest("[data-ratio]");
    if (box && v.videoWidth) box.style.setProperty("--ar", `${v.videoWidth}/${v.videoHeight}`);
  });
  preloader.observe(v);
  autoplayer.observe(v);
}

/* ---------- hero reel ---------- */
const reelP = projects[0];
$("#reel-screen").innerHTML = videoTag(reelP);
$("#reel-title").textContent = reelP.t;
const reelVid = $("#reel-screen video");
watchVideo(reelVid);
$("#reel-sound").onclick = e => {
  reelVid.muted = !reelVid.muted;
  if (!reelVid.muted) reelVid.play().catch(() => {});
  e.currentTarget.setAttribute("aria-pressed", String(!reelVid.muted));
  e.currentTarget.textContent = reelVid.muted ? "Sound off" : "Sound on";
};

/* ---------- tools ---------- */
$("#tools").innerHTML = tools.map(t => `<span>${esc(t)}</span>`).join("");

/* ---------- video grid ---------- */
const grid = $("#grid");
grid.innerHTML = projects.map((p, i) => `
  <article class="card" data-c="${p.c}">
    <button class="open" data-ratio data-i="${i}" aria-label="Watch ${esc(p.t)} with sound">
      ${videoTag(p)}<span class="hint" aria-hidden="true">Watch with sound</span>
    </button>
    <div class="meta"><h3>${esc(p.t)}</h3><span>${esc(p.tag)}</span></div>
  </article>`).join("");
$$("video", grid).forEach(watchVideo);

$$("#work .filters button").forEach(b => b.onclick = () => {
  $$("#work .filters button").forEach(x => x.setAttribute("aria-pressed", String(x === b)));
  $$(".card", grid).forEach(c => c.hidden = b.dataset.f !== "all" && c.dataset.c !== b.dataset.f);
});

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
  setsEl.innerHTML = carousels.map((s, i) => `
    <article class="set" data-s="${i}">
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
    update();
  });
}

/* ---------- viewer (video with sound / full-size image) ---------- */
const dlg = $("#modal"), mbody = $("#modal-body");

function openViewer(title, id){
  $("#mtitle").textContent = title;
  $("#mopen").href = DRIVE.view(id);
  if (!reelVid.muted) $("#reel-sound").click();
  dlg.showModal();
}

function openVideo(p){
  mbody.innerHTML = `<video controls playsinline autoplay poster="${DRIVE.thumb(p.id, 1920)}">
    <source src="${p.src}" type="video/mp4"><source src="${DRIVE.stream(p.id)}" type="video/mp4"></video>`;
  const v = $("video", mbody);
  // Both direct sources failed: fall back to Drive's own player.
  $("source:last-of-type", v).addEventListener("error", () => {
    mbody.innerHTML = `<iframe src="${DRIVE.embed(p.id)}" allow="autoplay; fullscreen" allowfullscreen title="${esc(p.t)}"></iframe>`;
  });
  openViewer(p.t, p.id);
}

function openImage(title, id){
  mbody.innerHTML = `<img src="${DRIVE.thumb(id, 2400)}" data-id="${id}" alt="${esc(title)}">`;
  openViewer(title, id);
}

grid.addEventListener("click", e => {
  const b = e.target.closest(".open"); if (b) openVideo(projects[b.dataset.i]);
});
designsEl.addEventListener("click", e => {
  const b = e.target.closest(".open"); if (!b) return;
  const d = designs[b.dataset.d]; openImage(d.t, d.id);
});
setsEl.addEventListener("click", e => {
  const b = e.target.closest(".slide"); if (!b) return;
  const t = $("h3", b.closest(".set")).textContent;
  openImage(`${t} — slide ${b.dataset.n}`, b.dataset.id);
});

$("#close").onclick = () => dlg.close();
dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
dlg.addEventListener("close", () => { mbody.innerHTML = ""; });

/* ---------- skills ---------- */
function renderSkills(k){
  $("#cats").innerHTML = skills[k].map(([h, list]) =>
    `<article class="cat"><h3>${esc(h)}</h3><ul>${list.map(t => `<li>${esc(t)}</li>`).join("")}</ul></article>`).join("");
}
renderSkills("creative");
$$("#skills .filters button").forEach(b => b.onclick = () => {
  $$("#skills .filters button").forEach(x => x.setAttribute("aria-pressed", String(x === b)));
  renderSkills(b.dataset.k);
});

/* ---------- experience ---------- */
$("#xp").innerHTML = jobs.map(([when, role, where, points]) => `
  <li><time>${esc(when)}</time><div><h3>${esc(role)}</h3><small>${esc(where)}</small>
  <ul>${points.map(p => `<li>${esc(p)}</li>`).join("")}</ul></div></li>`).join("");

/* ---------- nav ---------- */
const burger = $(".burger"), menu = $("#menu");
burger.onclick = () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
};
menu.onclick = e => {
  if (e.target.tagName === "A"){
    menu.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Open menu");
  }
};

/* ---------- contact form (opens the visitor's email app) ---------- */
$("#form").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target), note = $("#note");
  if (!f.get("name") || !/\S+@\S+\.\S+/.test(f.get("email")) || !f.get("msg")){
    note.textContent = "Add your name, a valid email and a few lines about the project.";
    return;
  }
  const body = `${f.get("msg")}\n\nFrom: ${f.get("name")} (${f.get("email")})`;
  location.href = `mailto:sanjayjaks71@gmail.com?subject=${encodeURIComponent("Project enquiry from " + f.get("name"))}&body=${encodeURIComponent(body)}`;
  note.textContent = "Opening your email app to send this.";
});

$("#yr").textContent = new Date().getFullYear();
