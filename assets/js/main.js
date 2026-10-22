/* ==========================================================================
   Veltriq Alliance — site behaviour
   ========================================================================== */

// ---------------------------------------------------------------------------
// Company details. Edit here; every page reads from this object.
// ---------------------------------------------------------------------------
const SITE = {
  email: "sales@veltriqalliance.com.ng",
  phone: "+234 (0) 916 037 3651",
  phoneHref: "+2349160373651",
  whatsapp: "2349160373651", // international format, digits only; "" hides the button
  address: "10 Agbaoku Street, Allen, Ikeja, Lagos, Nigeria",
  // Optional form backend (e.g. a Formspree endpoint). Empty = the form opens
  // the visitor's email app with the enquiry pre-filled.
  formEndpoint: "",
};

// ---------------------------------------------------------------------------
// Icons (24×24, stroke). Use <i data-icon="name"></i> in the HTML.
// ---------------------------------------------------------------------------
const ICONS = {
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  integration: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4"/>',
  support: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="2.5" y="13" width="4" height="6" rx="1.5"/><rect x="17.5" y="13" width="4" height="6" rx="1.5"/><path d="M19.5 19v.5a2.5 2.5 0 0 1-2.5 2.5h-4"/>',
  datacenter: '<rect x="3" y="3" width="18" height="6" rx="1.5"/><rect x="3" y="11" width="18" height="6" rx="1.5"/><path d="M7 6h.01M7 14h.01M11 6h6M11 14h6M8 21h8M12 17v4"/>',
  network: '<circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M12 7.5v4M12 11.5l-5.5 5.5M12 11.5l5.5 5.5"/>',
  shield: '<path d="M12 2.5l8 3v6c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10v-6l8-3z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  compass: '<circle cx="12" cy="12" r="9.5"/><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z"/>',
  check: '<path d="M5 12l5 5 9-10"/>',
  phone: '<path d="M21 16.5v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.5 5.2 2 2 0 0 1 4.5 3h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.4 10.9a16 16 0 0 0 4.7 4.7l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  mail: '<rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="M3 6l9 7 9-7"/>',
  pin: '<path d="M12 21.5s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9.5" r="2.5"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  clock: '<circle cx="12" cy="12" r="9.5"/><path d="M12 7v5l3 2"/>',
  bolt: '<path d="M13 2.5L4.5 13.5H12l-1 8 8.5-11H12l1-8z"/>',
  eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14a6.5 6.5 0 0 1 3.5 6"/>',
  target: '<circle cx="12" cy="12" r="9.5"/><circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="1.5"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14l-1.5 7.5 5-2.5 5 2.5-1.5-7.5"/>',
  thermo: '<path d="M14 14.8V4.5a2 2 0 0 0-4 0v10.3a4 4 0 1 0 4 0z"/>',
  lock: '<rect x="4.5" y="10.5" width="15" height="11" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/>',
  wifi: '<path d="M2 8.8a15 15 0 0 1 20 0M5 12.4a10 10 0 0 1 14 0M8.5 15.9a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r=".8"/>',
  bank: '<path d="M3 9.5L12 4l9 5.5M4.5 10v8M9.5 10v8M14.5 10v8M19.5 10v8M3 20.5h18"/>',
  energy: '<path d="M12 2.5c3 3.5 6 6.4 6 10.5a6 6 0 0 1-12 0c0-2.6 1.4-4.5 3-6 0 2 1 3 2 3 0-3 0-5.5 1-7.5z"/>',
  health: '<path d="M20.4 5.6a5 5 0 0 0-7.1 0L12 6.9l-1.3-1.3a5 5 0 0 0-7.1 7.1L12 21.1l8.4-8.4a5 5 0 0 0 0-7.1z"/><path d="M7 12h2.5l1.5-2.5 2 5 1.5-2.5H17"/>',
  education: '<path d="M2 9l10-5 10 5-10 5L2 9z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 9v6"/>',
  government: '<path d="M12 2.5v3M8 8.5h8M5 21V11h14v10M3 21h18M9 21v-6h6v6"/><path d="M8 8.5a4 4 0 0 1 8 0"/>',
  retail: '<path d="M3 3.5h2.5l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.5L21 7.5H6.3"/><circle cx="10" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/>',
  telecom: '<path d="M12 10v11.5M8.5 21.5h7M9 13.5l3-3.5 3 3.5"/><path d="M7.5 6.5a6.4 6.4 0 0 0 0 7M16.5 6.5a6.4 6.4 0 0 1 0 7M5 4a10 10 0 0 0 0 12M19 4a10 10 0 0 1 0 12"/>',
  refresh: '<path d="M20 12a8 8 0 0 1-14.3 4.9M4 12A8 8 0 0 1 18.3 7.1"/><path d="M18.5 3v4.3h-4.3M5.5 21v-4.3h4.3"/>',
  whatsapp: '<path fill="currentColor" stroke="none" d="M19.1 4.9A9.9 9.9 0 0 0 3.5 16.8L2 22l5.4-1.4A9.9 9.9 0 0 0 22 12a9.8 9.8 0 0 0-2.9-7.1zM12 20.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.2.8.9-3.1-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1 4.9 4.9 0 0 0 1 2.6 11.2 11.2 0 0 0 4.3 3.8c1.6.7 2.2.7 3 .6a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .1-1.2c0-.1-.2-.2-.4-.3z"/>',
};

function svgIcon(name) {
  const body = ICONS[name];
  if (!body) return "";
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
}

function renderIcons(root = document) {
  root.querySelectorAll("i[data-icon]").forEach((el) => {
    el.outerHTML = svgIcon(el.dataset.icon);
  });
}

// ---------------------------------------------------------------------------
// Company details → [data-site] elements
// ---------------------------------------------------------------------------
function fillSiteDetails() {
  document.querySelectorAll("[data-site]").forEach((el) => {
    const key = el.dataset.site;
    if (key === "email") {
      el.textContent = SITE.email;
      if (el.tagName === "A") el.href = `mailto:${SITE.email}`;
    } else if (key === "phone") {
      el.textContent = SITE.phone;
      if (el.tagName === "A") el.href = `tel:${SITE.phoneHref}`;
    } else if (key === "address") {
      el.textContent = SITE.address;
    } else if (key === "year") {
      el.textContent = new Date().getFullYear();
    }
  });
  document.querySelectorAll("a[data-href]").forEach((a) => {
    const key = a.dataset.href;
    if (key === "email") a.href = `mailto:${SITE.email}`;
    if (key === "phone") a.href = `tel:${SITE.phoneHref}`;
    if (key === "whatsapp") a.href = whatsappLink();
    if (key === "map") a.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}`;
  });
  const map = document.querySelector("[data-map]");
  if (map) {
    map.innerHTML = `<iframe title="Map showing our office" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed"></iframe>`;
  }
}

function whatsappLink(text = "Hello Veltriq Alliance, I'd like to discuss an IT project.") {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

function initWhatsApp() {
  if (!SITE.whatsapp) {
    document.querySelectorAll('[data-href="whatsapp"]').forEach((a) => a.remove());
    return;
  }
  const a = document.createElement("a");
  a.className = "wa-float";
  a.href = whatsappLink();
  a.target = "_blank";
  a.rel = "noopener";
  a.setAttribute("aria-label", "Chat with us on WhatsApp");
  a.innerHTML = svgIcon("whatsapp");
  document.body.appendChild(a);
}

// ---------------------------------------------------------------------------
// Technology partners. Shown as wordmarks; to use an official logo, put the
// file in assets/img/partners/ and set `logo` to its file name.
// ---------------------------------------------------------------------------
const PARTNERS = [
  { name: "Cisco", focus: "Networking & security", logo: "" },
  { name: "Sophos", focus: "Firewall & endpoint security", logo: "" },
  { name: "Cloudflare", focus: "Web & network security", logo: "" },
  { name: "Veeam", focus: "Backup & recovery", logo: "" },
  { name: "Quest", focus: "Identity & Microsoft platform management", logo: "" },
  { name: "Entrust", focus: "Identity, PKI & digital trust", logo: "" },
  { name: "Varonis", focus: "Data security & governance", logo: "" },
  { name: "AppSentinels", focus: "API security", logo: "" },
  { name: "Ruijie", focus: "Switching & enterprise Wi-Fi", logo: "" },
  { name: "ManageEngine", focus: "IT operations management", logo: "" },
  { name: "KnowBe4", focus: "Security awareness training", logo: "" },
];

function partnerMark(p) {
  return p.logo
    ? `<img src="assets/img/partners/${p.logo}" alt="${p.name}" loading="lazy">`
    : `<span class="partner__word">${p.name}</span>`;
}

function initPartners() {
  const strip = document.querySelector('[data-partners="strip"]');
  if (strip) {
    const items = PARTNERS.map((p) => `<li class="partner">${partnerMark(p)}</li>`).join("");
    // The list is rendered twice so the scroll loops seamlessly; the copy is hidden from screen readers.
    strip.innerHTML = `<ul class="marquee__track">${items}</ul><ul class="marquee__track" aria-hidden="true">${items}</ul>`;
  }
  const grid = document.querySelector('[data-partners="grid"]');
  if (grid) {
    grid.innerHTML = PARTNERS.map((p) => `
      <li class="partner-card">${partnerMark(p)}<span class="partner-card__focus">${p.focus}</span></li>`).join("");
  }
}

// ---------------------------------------------------------------------------
// Header: solid on scroll, mobile menu
// ---------------------------------------------------------------------------
function initHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("is-solid", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const toggle = header.querySelector(".nav-toggle");
  const nav = header.querySelector(".nav");
  if (!toggle || !nav) return;
  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    header.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.innerHTML = svgIcon(open ? "close" : "menu");
  };
  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
}

// ---------------------------------------------------------------------------
// Reveal on scroll
// ---------------------------------------------------------------------------
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  items.forEach((el) => io.observe(el));
}

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------------------------------------------------------------------------
// Hero: animated network of nodes with data packets moving along links
// ---------------------------------------------------------------------------
function initNetworkCanvas() {
  const canvas = document.querySelector(".hero__canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w, h, dpr, nodes, packets, raf;
  const mouse = { x: -9999, y: -9999 };

  function setup() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(Math.min(70, Math.max(26, (w * h) / 22000)));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.6 + 1,
      hub: Math.random() < 0.12,
    }));
    packets = [];
  }

  const linkDist = () => Math.min(170, Math.max(120, w / 9));

  function step() {
    ctx.clearRect(0, 0, w, h);
    const D = linkDist();
    for (const n of nodes) {
      n.x += n.vx; n.y += n.vy;
      if (n.x < -20) n.x = w + 20; if (n.x > w + 20) n.x = -20;
      if (n.y < -20) n.y = h + 20; if (n.y > h + 20) n.y = -20;
    }
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.hypot(dx, dy);
        if (d < D) {
          const near = Math.hypot((a.x + b.x) / 2 - mouse.x, (a.y + b.y) / 2 - mouse.y) < 160;
          ctx.strokeStyle = near ? `rgba(233,198,111,${(1 - d / D) * 0.55})` : `rgba(91,188,208,${(1 - d / D) * 0.22})`;
          ctx.lineWidth = near ? 1.1 : 0.8;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          if (!reducedMotion && packets.length < 18 && Math.random() < 0.0009) packets.push({ a, b, t: 0, s: 0.006 + Math.random() * 0.01 });
        }
      }
    }
    for (const n of nodes) {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.hub ? n.r + 1.6 : n.r, 0, Math.PI * 2);
      ctx.fillStyle = n.hub ? "rgba(217,168,56,.9)" : "rgba(160,215,228,.7)";
      ctx.fill();
      if (n.hub) {
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r + 6, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(217,168,56,.25)"; ctx.lineWidth = 1; ctx.stroke();
      }
    }
    packets = packets.filter((p) => {
      p.t += p.s;
      if (p.t >= 1 || Math.hypot(p.a.x - p.b.x, p.a.y - p.b.y) > D) return false;
      const x = p.a.x + (p.b.x - p.a.x) * p.t, y = p.a.y + (p.b.y - p.a.y) * p.t;
      const g = ctx.createRadialGradient(x, y, 0, x, y, 7);
      g.addColorStop(0, "rgba(255,230,160,1)"); g.addColorStop(1, "rgba(217,168,56,0)");
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, 7, 0, Math.PI * 2); ctx.fill();
      return true;
    });
    if (!reducedMotion) raf = requestAnimationFrame(step);
  }

  setup(); step();
  let t;
  window.addEventListener("resize", () => {
    clearTimeout(t);
    t = setTimeout(() => { cancelAnimationFrame(raf); setup(); step(); }, 150);
  });
  const hero = canvas.parentElement;
  hero.addEventListener("pointermove", (e) => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  });
  hero.addEventListener("pointerleave", () => { mouse.x = mouse.y = -9999; });
  // Pause when off screen to save battery.
  if ("IntersectionObserver" in window && !reducedMotion) {
    new IntersectionObserver(([e]) => {
      cancelAnimationFrame(raf);
      if (e.isIntersecting) raf = requestAnimationFrame(step);
    }).observe(canvas);
  }
}

// ---------------------------------------------------------------------------
// Hero monitoring panel: live-looking throughput chart (illustrative)
// ---------------------------------------------------------------------------
function initMonitor() {
  const chart = document.querySelector("[data-monitor-chart]");
  if (!chart) return;
  const valueEl = document.querySelector("[data-monitor-value]");
  const threatsEl = document.querySelector("[data-monitor-threats]");
  const N = 40;
  const pts = Array.from({ length: N }, (_, i) => 55 + Math.sin(i / 3) * 12 + Math.random() * 10);
  let threats = 1284;

  const draw = () => {
    const W = 300, H = 70, max = 100;
    const xy = pts.map((v, i) => [(i / (N - 1)) * W, H - (v / max) * H]);
    const line = xy.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
    chart.innerHTML = `
      <defs><linearGradient id="mg" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stop-color="#5bbcd0" stop-opacity=".45"/><stop offset="1" stop-color="#5bbcd0" stop-opacity="0"/>
      </linearGradient></defs>
      <path d="${line} L${W} ${H} L0 ${H} Z" fill="url(#mg)"/>
      <path d="${line}" fill="none" stroke="#5bbcd0" stroke-width="2" stroke-linejoin="round"/>
      <circle cx="${xy[N - 1][0]}" cy="${xy[N - 1][1]}" r="3.5" fill="#e9c66f"/>`;
    if (valueEl) valueEl.textContent = (pts[N - 1] * 9.4).toFixed(0) + " Mbps";
  };
  draw();
  if (reducedMotion) return;
  setInterval(() => {
    const last = pts[pts.length - 1];
    pts.shift();
    pts.push(Math.max(25, Math.min(92, last + (Math.random() - 0.48) * 14)));
    draw();
    if (threatsEl && Math.random() < 0.35) threatsEl.textContent = (threats += 1).toLocaleString() + " blocked";
  }, 1200);
}

// ---------------------------------------------------------------------------
// Service finder
// ---------------------------------------------------------------------------
const SERVICES = {
  integration: { name: "IT Systems Integration", icon: "integration" },
  managed: { name: "Managed Support Services", icon: "support" },
  datacenter: { name: "Datacenter & Infrastructure", icon: "datacenter" },
  networking: { name: "Networking", icon: "network" },
  security: { name: "Cyber Security", icon: "shield" },
};

const FINDER = [
  {
    problem: "Our systems don't talk to each other",
    service: "integration",
    summary: "Disconnected applications, duplicate data entry and manual workarounds slow everything down. We connect your platforms so information flows where it should.",
    steps: ["Map your current systems, data flows and pain points", "Design an integration architecture that fits your budget", "Implement, test and hand over with full documentation"],
  },
  {
    problem: "We need reliable IT support without a large in-house team",
    service: "managed",
    summary: "Get a dedicated team of engineers on call, with proactive monitoring and maintenance so problems are fixed before your staff notice them.",
    steps: ["Agree service levels and response times that suit you", "Onboard your users, devices and systems into monitoring", "Provide helpdesk, on-site visits and monthly health reports"],
  },
  {
    problem: "We're building or upgrading a server room or datacenter",
    service: "datacenter",
    summary: "From racks and power to cooling and environmental monitoring, we design and build facilities that stay up and scale with you.",
    steps: ["Site survey and capacity planning (power, cooling, space)", "Supply and install racks, UPS, cooling and monitoring", "Commission, label, document and hand over"],
  },
  {
    problem: "Our network is slow, patchy or keeps going down",
    service: "networking",
    summary: "We find the bottlenecks, then design and deploy a stable wired and wireless network with the right redundancy for your business.",
    steps: ["Network assessment and Wi-Fi survey", "Redesign for performance, segmentation and failover", "Deploy, configure and monitor"],
  },
  {
    problem: "We're worried about cyber attacks or data breaches",
    service: "security",
    summary: "We assess where you're exposed, close the gaps and put layered protection in place, aligned with the Nigeria Data Protection Act (NDPA).",
    steps: ["Security assessment and vulnerability scan", "Firewall, endpoint, email and access hardening", "Staff awareness training and ongoing monitoring"],
  },
  {
    problem: "We're opening a new office or site",
    service: "integration",
    also: ["networking", "datacenter"],
    summary: "One partner for the whole fit-out: cabling, network, Wi-Fi, comms room, devices and security, delivered to a single plan and timeline.",
    steps: ["Plan requirements with your facilities team", "Coordinate cabling, hardware and vendor delivery", "Go-live support and handover to managed support"],
  },
];

function initFinder() {
  const root = document.querySelector("[data-finder]");
  if (!root) return;
  const list = root.querySelector(".finder__options");
  const result = root.querySelector(".finder__result");

  list.innerHTML = FINDER.map((f, i) => `
    <button type="button" class="finder__option" aria-pressed="false" data-i="${i}">
      <span class="finder__radio" aria-hidden="true"></span>${f.problem}
    </button>`).join("");

  list.addEventListener("click", (e) => {
    const btn = e.target.closest(".finder__option");
    if (!btn) return;
    list.querySelectorAll(".finder__option").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    const f = FINDER[+btn.dataset.i];
    const svc = SERVICES[f.service];
    const also = (f.also || []).map((k) => SERVICES[k].name).join(" and ");
    result.classList.remove("is-swapping");
    void result.offsetWidth;
    result.classList.add("is-swapping");
    result.innerHTML = `
      <div class="finder__body">
        <span class="finder__tag">Recommended</span>
        <div class="svc__head" style="margin-bottom:12px"><span class="icon-badge">${svgIcon(svc.icon)}</span><h3 style="margin:0">${svc.name}</h3></div>
        ${also ? `<p style="font-size:.9rem;color:var(--muted);margin-bottom:10px">Usually combined with ${also}.</p>` : ""}
        <p>${f.summary}</p>
        <strong style="color:var(--ink)">How we'd approach it</strong>
        <ul class="check-list">${f.steps.map((s) => `<li>${s}</li>`).join("")}</ul>
        <div style="display:flex;flex-wrap:wrap;gap:12px">
          <a class="btn btn--primary" href="contact.html?service=${f.service}&topic=${encodeURIComponent(f.problem)}">Discuss this with us ${svgIcon("arrow")}</a>
          <a class="btn btn--outline" href="services.html#${f.service}">Service details</a>
        </div>
      </div>`;
  });
}

// ---------------------------------------------------------------------------
// Security self-check
// ---------------------------------------------------------------------------
const SCAN_QUESTIONS = [
  { q: "Do staff use multi-factor authentication (MFA) for email and remote access?", hint: "A code or app prompt in addition to a password.", gap: "Enable MFA", fix: "Turn on MFA for email, VPN and admin accounts. It blocks the large majority of account-takeover attacks." },
  { q: "Are your backups tested regularly and kept offline or off-site?", hint: "Ransomware often targets backups that sit on the same network.", gap: "Protect and test backups", fix: "Keep at least one copy offline or immutable, and test a restore every quarter." },
  { q: "Is your firewall actively managed and its firmware up to date?", hint: "Including rules review and security subscriptions.", gap: "Manage your firewall", fix: "Review rules, update firmware and enable intrusion prevention and web filtering." },
  { q: "Are operating systems and applications patched within a month of release?", hint: "Windows, servers, network devices and key business software.", gap: "Patch consistently", fix: "Set up a monthly patch cycle with reporting so nothing falls through the cracks." },
  { q: "Does every laptop, desktop and server have modern endpoint protection?", hint: "EDR or next-generation antivirus that is centrally monitored.", gap: "Deploy endpoint protection", fix: "Roll out centrally managed EDR so threats are detected and isolated quickly." },
  { q: "Have staff had security-awareness or phishing training in the last 12 months?", hint: "Most breaches start with a convincing email.", gap: "Train your people", fix: "Run short awareness sessions and simulated phishing to build good habits." },
  { q: "Do you have a written plan for what to do if you're hacked?", hint: "Who to call, what to isolate, how to communicate.", gap: "Prepare an incident response plan", fix: "Document roles, contacts and first steps so you can act in minutes, not days." },
  { q: "Do you know where personal data is stored and who can access it?", hint: "Required under the Nigeria Data Protection Act (NDPA) 2023.", gap: "Map and control personal data", fix: "Inventory personal data, restrict access and review NDPA compliance obligations." },
];

function initScan() {
  const root = document.querySelector("[data-scan]");
  if (!root) return;
  const inner = root.querySelector(".scan__inner");
  const bar = root.querySelector(".scan__progress span");
  let answers = [];

  function renderQuestion(focus = true) {
    const i = answers.length;
    bar.style.width = `${(i / SCAN_QUESTIONS.length) * 100}%`;
    const item = SCAN_QUESTIONS[i];
    inner.innerHTML = `
      <div class="finder__body">
        <div class="scan__count">Question ${i + 1} of ${SCAN_QUESTIONS.length}</div>
        <p class="scan__q" id="scan-q">${item.q}</p>
        <p class="scan__hint">${item.hint}</p>
        <div class="scan__answers" role="group" aria-labelledby="scan-q">
          <button type="button" class="scan__answer" data-v="2">Yes</button>
          <button type="button" class="scan__answer" data-v="1">Partly / not sure</button>
          <button type="button" class="scan__answer" data-v="0">No</button>
        </div>
        <div class="scan__nav">
          <button type="button" class="scan__back" ${i === 0 ? "disabled" : ""}>← Back</button>
          <span style="font-size:.82rem;color:var(--muted)">Takes about 1 minute</span>
        </div>
      </div>`;
    if (focus) inner.querySelector(".scan__answer").focus({ preventScroll: true });
  }

  function renderResult() {
    bar.style.width = "100%";
    const score = Math.round((answers.reduce((a, b) => a + b, 0) / (SCAN_QUESTIONS.length * 2)) * 100);
    const level = score >= 75 ? ["Low risk", "low", "#0f8a5f"] : score >= 45 ? ["Moderate risk", "med", "#b7791f"] : ["High risk", "high", "#c53030"];
    const gaps = SCAN_QUESTIONS.map((q, i) => ({ ...q, v: answers[i] })).filter((q) => q.v < 2).sort((a, b) => a.v - b.v);
    const C = 2 * Math.PI * 46;
    inner.innerHTML = `
      <div class="finder__body scan__result" aria-live="polite">
        <div class="gauge">
          <div class="gauge__ring">
            <svg viewBox="0 0 112 112"><circle class="track" cx="56" cy="56" r="46"/>
              <circle class="bar" cx="56" cy="56" r="46" stroke="${level[2]}" stroke-dasharray="${C}" stroke-dashoffset="${C}"/></svg>
            <div class="gauge__value"><div>${score}<small>/ 100</small></div></div>
          </div>
          <div>
            <div class="scan__count">Your security posture</div>
            <div class="risk risk--${level[1]}">${level[0]}</div>
            <p style="margin:4px 0 0;font-size:.93rem;color:var(--muted)">${gaps.length ? `${gaps.length} area${gaps.length > 1 ? "s" : ""} to strengthen` : "Strong fundamentals. Keep testing them."}</p>
          </div>
        </div>
        ${gaps.length ? `<ul class="gaps">${gaps.slice(0, 4).map((g) => `<li><strong>${g.gap}</strong>${g.fix}</li>`).join("")}</ul>` : ""}
        <div style="display:flex;flex-wrap:wrap;gap:12px">
          <a class="btn btn--primary" href="contact.html?service=security&topic=${encodeURIComponent(`Security self-check result: ${score}/100 (${level[0]})`)}">Discuss my results ${svgIcon("arrow")}</a>
          <button type="button" class="btn btn--outline" data-restart>Start again</button>
        </div>
        <p class="form-note">This quick check is a starting point, not a full audit. Your answers stay in your browser.</p>
      </div>`;
    requestAnimationFrame(() => {
      inner.querySelector(".bar").style.strokeDashoffset = C * (1 - score / 100);
    });
  }

  root.addEventListener("click", (e) => {
    const ans = e.target.closest(".scan__answer");
    if (ans) {
      answers.push(+ans.dataset.v);
      answers.length === SCAN_QUESTIONS.length ? renderResult() : renderQuestion();
      return;
    }
    if (e.target.closest(".scan__back")) { answers.pop(); renderQuestion(); return; }
    if (e.target.closest("[data-restart]")) { answers = []; renderQuestion(); }
  });

  renderQuestion(false);
}

// ---------------------------------------------------------------------------
// Services page: scroll-spy for the side navigation
// ---------------------------------------------------------------------------
function initScrollSpy() {
  const nav = document.querySelector(".svc-nav");
  if (!nav || !("IntersectionObserver" in window)) return;
  const links = [...nav.querySelectorAll("a")];
  const sections = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => {
        const on = a.getAttribute("href") === `#${entry.target.id}`;
        a.classList.toggle("is-active", on);
        if (on && window.innerWidth <= 1080) a.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
      });
    });
  }, { rootMargin: "-35% 0px -60% 0px" });
  sections.forEach((s) => io.observe(s));
}

// ---------------------------------------------------------------------------
// Contact form
// ---------------------------------------------------------------------------
function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const params = new URLSearchParams(location.search);
  const svc = params.get("service");
  if (svc) {
    const box = form.querySelector(`input[name="services"][value="${CSS.escape(svc)}"]`);
    if (box) box.checked = true;
  }
  const topic = params.get("topic");
  if (topic) form.querySelector("[name=message]").value = `${topic}\n\n`;

  const rules = {
    name: (v) => v.trim().length >= 2 || "Please enter your name.",
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || "Please enter a valid email address.",
    message: (v) => v.trim().length >= 10 || "Please tell us a little about what you need.",
  };

  function validate() {
    let ok = true;
    for (const [name, rule] of Object.entries(rules)) {
      const input = form.elements[name];
      const res = rule(input.value);
      const field = input.closest(".field");
      const err = field.querySelector(".field__error");
      if (res !== true) {
        ok = false;
        field.classList.add("has-error");
        err.textContent = res;
        input.setAttribute("aria-invalid", "true");
      } else {
        field.classList.remove("has-error");
        err.textContent = "";
        input.removeAttribute("aria-invalid");
      }
    }
    return ok;
  }

  form.addEventListener("input", (e) => {
    if (e.target.closest(".has-error")) validate();
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!validate()) {
      form.querySelector(".has-error input, .has-error textarea")?.focus();
      return;
    }
    const data = new FormData(form);
    if (data.get("website")) return; // honeypot
    const services = data.getAll("services").map((k) => SERVICES[k]?.name || k);
    const lines = [
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company") || "-"}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "-"}`,
      `Services: ${services.join(", ") || "-"}`,
      `Timeline: ${data.get("timeline") || "-"}`,
      "",
      data.get("message"),
    ];
    const btn = form.querySelector("[type=submit]");

    if (SITE.formEndpoint) {
      btn.disabled = true;
      btn.textContent = "Sending…";
      try {
        const res = await fetch(SITE.formEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error(res.statusText);
        showSuccess(false);
      } catch {
        btn.disabled = false;
        btn.textContent = "Send enquiry";
        alert(`Sorry, something went wrong. Please email us at ${SITE.email}.`);
      }
      return;
    }

    const subject = `Website enquiry${services.length ? ` – ${services.join(", ")}` : ""} – ${data.get("company") || data.get("name")}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    showSuccess(true);
  });

  function showSuccess(viaEmail) {
    form.closest(".form-card").innerHTML = `
      <div class="form-success" aria-live="polite">
        <div class="form-success__icon">${svgIcon("check")}</div>
        <h3>${viaEmail ? "Almost done" : "Thank you, we've received your enquiry"}</h3>
        <p style="color:var(--muted);max-width:420px;margin:0 auto 22px">${viaEmail
          ? `Your email app should have opened with your enquiry ready to send. If it didn't, email us directly at <a href="mailto:${SITE.email}">${SITE.email}</a>.`
          : "A member of our team will be in touch within one business day."}</p>
        <a class="btn btn--outline" href="index.html">Back to home</a>
      </div>`;
  }
}

// ---------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderIcons();
  fillSiteDetails();
  initPartners();
  initHeader();
  initReveal();
  initNetworkCanvas();
  initMonitor();
  initFinder();
  initScan();
  initScrollSpy();
  initContactForm();
  initWhatsApp();
});
