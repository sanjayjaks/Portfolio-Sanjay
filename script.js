// ===== EDIT YOUR CONTENT HERE =====
const drive = id => `https://drive.google.com/file/d/${id}/preview`;
const openUrl = id => `https://drive.google.com/file/d/${id}/view`;
const projects = [
  {t:"AI Generated & Edited Film",c:"ai",tag:"AI video",id:"1diFCGfNpIGNV39Yd_DhE_72LA7XbF-Bx",src:"videos/ai-1.mp4",g:"linear-gradient(135deg,#7a0010,#e11d2e)"},
  {t:"AI Generated & Edited Video 02",c:"ai",tag:"AI video",id:"1aeP4RIACDsA0La0sO69BTcCCJL6Iszsc",src:"videos/ai-2.mp4",g:"linear-gradient(135deg,#1a0c0e,#b3101f)"},
  {t:"AI & Motion Graphics",c:"ai",tag:"Motion",id:"16GjFI7bSzjBxJd3jRtCn3KTanE7XFJ8I",src:"videos/motion.mp4",g:"linear-gradient(135deg,#e11d2e,#ff7a59)"},
  {t:"supply6",c:"d2c",tag:"D2C brand",id:"1nigDtwtiVxzyDlk2Ei6DwrjHVIAnPgFz",src:"videos/supply6.mp4",g:"linear-gradient(135deg,#0d0d0f,#4a1016)"},
  {t:"rockED",c:"d2c",tag:"D2C brand",id:"1cWYOD5sLjmaNqWQOVYGge78lfYqlIZyy",src:"videos/rocked.mp4",g:"linear-gradient(135deg,#8c0b17,#ff4d5a)"},
  {t:"Documentary Edit",c:"long",tag:"YouTube long form",id:"15TFPk32gTTzxp9MFKfXsEaNmdGeSBOE1",src:"videos/documentary.mp4",g:"linear-gradient(135deg,#050506,#c4152a)"},
  {t:"Super Nova",c:"d2c",tag:"D2C brand",id:"1LOFcBeeL6ZXIlDDCHRL1KT-KMOgNxfM2",src:"videos/supernova.mp4",g:"linear-gradient(135deg,#5c0a14,#ff3d4c)"},
  {t:"Narrative & Storytelling",c:"long",tag:"YouTube long form",id:"1Df1RyytiibgRULIkYHFKqNJjUvN1-Zji",src:"videos/narrative.mp4",g:"linear-gradient(135deg,#1c1012,#9e1020)"},
  {t:"Finance Explainer",c:"biz",tag:"Freelance project",id:"1wJYgyFm6567bmSjtBWLOmO32w0AonR15",src:"videos/finance.mp4",g:"linear-gradient(135deg,#2a0a0f,#e11d2e)"}
];
const tools = ["Premiere Pro","DaVinci Resolve","After Effects","CapCut","Filmora","Veo 3","Runway ML","HeyGen","ElevenLabs","React.js","Node.js","Express.js","MongoDB","React Native"];
const jobs = [
  ["Sep 2026 – Present","AI Creative & Multimedia Designer","Netram Defence Foundation · Gurugram (on-site)","Designing AI-assisted creative, decks and campaign visuals."],
  ["Aug 2026 – Sep 2026","AI Dubbing Artist & Video Editor","Aview International · Remote","End-to-end editing and AI-powered dubbing and voice localisation for multilingual content."],
  ["Mar 2026 – Present","Video Editor","Yellowred Photography · Hyderabad","Editing for photography and event clients."],
  ["Jan 2026 – Mar 2026","Video Editor Intern","Protrainy · Remote","Product-focused video for business and marketing goals, delivered with the Products team."],
  ["Sep 2025 – Dec 2025","Video Editor & Content Writer","Dragon's Perception · Remote","Researched, scripted and edited 30–90s and long-form content for Indian youth audiences."],
  ["Jul 2024 – May 2026","Video Editor","Hacnic Club, MLR Institute of Technology","Highlight reels, promos, Instagram and YouTube shorts with subtitles, transitions and effects."],
  ["Jul 2024 – Apr 2026","Event Specialist","Freelance","Shot and edited event recaps with synced music, overlays and dynamic cuts."]
];
const skills={
 creative:[
  ["Video Editing",["Adobe Premiere Pro","DaVinci Resolve","CapCut","Filmora"]],
  ["Motion Graphics & VFX",["Adobe After Effects","Canva Pro","Motion Graphics","Compositing"]],
  ["Generative AI & AI Video",["Google Veo","Kling AI","Runway","Higgsfield","HeyGen","ElevenLabs","ChatGPT","Gemini"]],
  ["AI Video Workflows",["Text-to-Video","Image-to-Video","AI Character Videos","Lip Sync","AI Voice Generation","Prompt Engineering"]],
  ["Color & Audio",["Color Correction","Color Grading","Sound Design","Audio Mixing","Voice Sync"]],
  ["Social Media Content",["Instagram Reels","YouTube Shorts","TikTok","Short-Form Ads","Retention-Focused Editing"]],
  ["Creative Skills",["Storytelling","Pacing","Hooks","Storyboarding","Script Collaboration","Visual Consistency"]],
  ["Post-Production",["Subtitles","Transitions","B-Roll","File Management","Compression","Thumbnails"]]],
 dev:[
  ["Programming Languages",["Java (OOP, DSA)","JavaScript","C"]],
  ["Frontend",["React.js","React Native","HTML","CSS"]],
  ["Backend",["Node.js","Express.js","REST APIs"]],
  ["Databases & Cloud",["MongoDB","PostgreSQL","Upstash"]],
  ["AI & Developer Tools",["GitHub Copilot","ChatGPT","Claude","AI-assisted Code Generation","Debugging & Code Optimization","Technical Documentation"]],
  ["State Management",["Redux","Context API"]],
  ["Tools & Deployment",["Git","Vite","Render","Vercel","Postman","Excel"]],
  ["Core Competencies",["Problem Solving","Team Collaboration","Cross-Functional Communication","Adaptability","Stakeholder Interaction"]]]
};
// ==================================

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const REDUCE = matchMedia("(prefers-reduced-motion:reduce)").matches;
document.documentElement.classList.add("js");

const grid=$("#grid");
grid.innerHTML = projects.map((p,i)=>`<button class="card" data-c="${p.c}" data-i="${i}" style="--g:${p.g}"><video muted loop playsinline preload="metadata" src="${p.src}#t=0.5"></video><small>${p.tag}</small><h3>${p.t}</h3><span class="play"></span></button>`).join("");
$("#xp").innerHTML = jobs.map(j=>`<li><time>${j[0]}</time><div><h3>${j[1]}</h3><small>${j[2]}</small><p>${j[3]}</p></div></li>`).join("");
$("#yr").textContent = new Date().getFullYear();
$("#mq").innerHTML=[...tools,...tools].map(t=>`<span>${t}</span>`).join("");

// project filters
$$(".filters button").forEach(b=>b.onclick=()=>{
  $$(".filters button").forEach(x=>x.classList.toggle("active",x===b));
  $$(".card").forEach(c=>c.classList.toggle("hide",b.dataset.f!=="all"&&c.dataset.c!==b.dataset.f));
});

// card previews
$$(".card video").forEach(v=>{
  const c=v.closest(".card");
  v.addEventListener("loadeddata",()=>c.classList.add("has-vid"));
  v.addEventListener("error",()=>v.remove());
  c.addEventListener("pointerenter",()=>v.isConnected&&v.play().catch(()=>{}));
  c.addEventListener("pointerleave",()=>{if(v.isConnected){v.pause();v.currentTime=.5;}});
});

// modal
const modal=$("#modal"),frameEl=$("#frame"),player=$("#player");
const closeModal=()=>{modal.hidden=true;player.pause();player.removeAttribute("src");player.load();frameEl.src="";};
grid.addEventListener("click",e=>{
  const c=e.target.closest(".card"); if(!c) return;
  const p=projects[c.dataset.i];
  $("#mtitle").textContent=p.t; $("#mopen").href=openUrl(p.id);
  frameEl.hidden=true; player.hidden=false; frameEl.src="";
  player.onerror=()=>{player.hidden=true;frameEl.hidden=false;frameEl.src=drive(p.id);};
  player.src=p.src; player.play().catch(()=>{});
  modal.hidden=false; $("#close").focus();
});
$("#close").onclick=closeModal;
modal.addEventListener("click",e=>{if(e.target===modal)closeModal();});
addEventListener("keydown",e=>{if(e.key==="Escape"&&!modal.hidden)closeModal();});

// nav
const burger=$(".burger"),menu=$("#menu");
burger.onclick=()=>burger.setAttribute("aria-expanded",menu.classList.toggle("open"));
menu.onclick=e=>{if(e.target.tagName==="A"){menu.classList.remove("open");burger.setAttribute("aria-expanded","false");}};

// hero timeline
const tl=$("#timeline"),ph=$("#playhead"),tc=$("#timecode"),clips=[...tl.querySelectorAll("i")];
function scrub(x){
  const r=tl.getBoundingClientRect(),pad=18;
  const px=Math.min(Math.max(x-r.left,pad),r.width-pad);
  ph.style.left=px+"px";
  const s=Math.round((px-pad)/(r.width-pad*2)*90);
  tc.textContent="00:"+String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0");
  clips.forEach(c=>{const b=c.getBoundingClientRect();c.classList.toggle("on",x>=b.left&&x<=b.right);});
}
tl.addEventListener("pointermove",e=>scrub(e.clientX));
requestAnimationFrame(()=>{const r=tl.getBoundingClientRect();scrub(r.left+r.width*.2);});

// contact form
$("#form").addEventListener("submit",e=>{
  e.preventDefault();
  const f=new FormData(e.target),n=$("#note");
  if(!f.get("name")||!/\S+@\S+\.\S+/.test(f.get("email"))||!f.get("msg")){n.textContent="Add your name, a valid email and project details.";return;}
  const body=`${f.get("msg")}\n\nFrom: ${f.get("name")} (${f.get("email")})`;
  location.href=`mailto:sanjayjaks71@gmail.com?subject=${encodeURIComponent("Project enquiry from "+f.get("name"))}&body=${encodeURIComponent(body)}`;
  n.textContent="Opening your email app to send this.";
});

// background: red embers + particle web
(()=>{
  const cv=$("#bg"),x=cv.getContext("2d");
  let W,H,D,pts=[],m={x:.5,y:.4,on:false};
  const orbs=["225,29,46","140,10,24","255,77,90"].map((c,i)=>({c,a:i*2.1,s:.0005+i*.00017,r:.42+.06*i}));
  const size=()=>{D=Math.min(devicePixelRatio||1,1.5);W=cv.width=innerWidth*D;H=cv.height=innerHeight*D;
    pts=Array.from({length:Math.min(70,Math.floor(innerWidth/16))},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.3*D,vy:(Math.random()-.5)*.3*D}));};
  addEventListener("resize",size);size();
  addEventListener("pointermove",e=>{m.x=e.clientX/innerWidth;m.y=e.clientY/innerHeight;m.on=true;});
  function draw(t){
    x.globalCompositeOperation="source-over";x.fillStyle="#09090b";x.fillRect(0,0,W,H);
    x.globalCompositeOperation="lighter";
    orbs.forEach((o,i)=>{
      const px=W*(.5+.38*Math.cos(t*o.s+o.a)+(m.x-.5)*.1*(i+1)),py=H*(.5+.34*Math.sin(t*o.s*1.3+o.a*2)+(m.y-.5)*.1*(i+1)),r=Math.max(W,H)*o.r;
      const g=x.createRadialGradient(px,py,0,px,py,r);
      g.addColorStop(0,`rgba(${o.c},.22)`);g.addColorStop(1,`rgba(${o.c},0)`);
      x.fillStyle=g;x.fillRect(0,0,W,H);
    });
    const L=130*D;x.lineWidth=D;
    for(const p of pts){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;}
    for(let i=0;i<pts.length;i++){
      const a=pts[i];
      x.fillStyle="rgba(255,150,150,.7)";x.fillRect(a.x,a.y,2*D,2*D);
      for(let j=i+1;j<pts.length;j++){
        const b=pts[j],d=Math.hypot(a.x-b.x,a.y-b.y);
        if(d<L){x.strokeStyle=`rgba(255,80,90,${.2*(1-d/L)})`;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke();}
      }
    }
    if(!REDUCE)requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();

// skills
function renderSkills(k){
  $("#cats").innerHTML=skills[k].map((c,i)=>`<article class="cat" style="animation-delay:${i*60}ms"><h3>${c[0]}</h3><div>${c[1].map(t=>`<span>${t}</span>`).join("")}</div></article>`).join("");
}
renderSkills("creative");
$$(".tabs button").forEach(b=>b.onclick=()=>{
  $$(".tabs button").forEach(x=>x.classList.toggle("active",x===b));renderSkills(b.dataset.k);
});

// role typewriter
(()=>{
  const words=["AI video editor","motion designer","AI dubbing artist","full-stack developer"],el=$("#role");
  if(REDUCE){el.textContent=words[0];return;}
  let w=0,i=0,del=false;
  (function tick(){
    const full=words[w];
    el.textContent=full.slice(0,i);
    if(!del&&i===full.length){del=true;return setTimeout(tick,1500);}
    if(del&&i===0){del=false;w=(w+1)%words.length;}
    i+=del?-1:1;setTimeout(tick,del?35:70);
  })();
})();

// scroll progress
const prog=$("#prog");
addEventListener("scroll",()=>{prog.style.transform=`scaleX(${scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)})`;},{passive:true});

// reveal on scroll + counters (only headings/blocks; never hides the hero)
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return;
  e.target.classList.add("in");io.unobserve(e.target);
  e.target.querySelectorAll("[data-n]").forEach(n=>{
    const to=+n.dataset.n,t0=performance.now();
    (function step(t){const k=Math.min(1,(t-t0)/1200);n.textContent=Math.round(to*(1-Math.pow(1-k,3)))+n.dataset.s;if(k<1)requestAnimationFrame(step);})(t0);
  });
}),{threshold:.1});
$$(".section-head,.about-body,.xp li,.contact-wrap,.tabs,.section>h2").forEach(el=>{el.classList.add("rv");io.observe(el);});

// tilt + spotlight on cards
if(!REDUCE&&matchMedia("(pointer:fine)").matches){
  document.addEventListener("pointermove",e=>{
    const c=e.target.closest&&e.target.closest(".card,.cat");if(!c)return;
    const r=c.getBoundingClientRect(),px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;
    c.style.setProperty("--ry",((px-.5)*8).toFixed(2)+"deg");c.style.setProperty("--rx",((.5-py)*8).toFixed(2)+"deg");
    c.style.setProperty("--mx",px*100+"%");c.style.setProperty("--my",py*100+"%");
  });
  document.addEventListener("pointerout",e=>{
    const c=e.target.closest&&e.target.closest(".card,.cat");if(!c||c.contains(e.relatedTarget))return;
    c.style.setProperty("--rx","0deg");c.style.setProperty("--ry","0deg");
  });
}
