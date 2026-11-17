const people = window.PERSONNALITES || [];
const id = new URLSearchParams(location.search).get("id");
const p = people.find((x) => x.id === id);
const app = document.getElementById("app");
const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

if (!p) {
  document.title = "Biographie introuvable — Destins";
  app.innerHTML = `
    <header class="home-hero"><div>
      <p class="kicker center">Oups</p>
      <h1>Biographie<br><em>introuvable</em></h1>
      <a href="index.html" class="btn">Voir toutes les biographies</a>
    </div></header>`;
} else {
  render(p);
}

function credit(img) {
  if (!img || !img.credit) return "";
  return `<p class="credit">Photo : ${esc(img.credit)}${img.page ? ` · <a href="${img.page}" target="_blank" rel="noopener">Wikimedia Commons</a>` : ""}</p>`;
}

function figureCard(img, index) {
  return `
    <figure class="figure-card reveal">
      <button class="frame" type="button" data-lightbox="${index}" aria-label="Agrandir l'image">
        <img src="${img.src}" alt="${esc(img.legende)}" loading="lazy">
      </button>
      <figcaption>
        ${img.legende ? `<p class="legende">${esc(img.legende)}</p>` : ""}
        ${credit(img)}
      </figcaption>
    </figure>`;
}

function render(p) {
  document.title = `${p.nom} — Destins`;
  document.querySelector('meta[name="description"]').content = p.resume;
  document.documentElement.style.setProperty("--accent", p.accent || "#c9a24b");

  const parts = p.nom.split(" ");
  const first = parts.shift();
  const rest = parts.join(" ");
  const gal = p.galerie || [];
  const vids = p.videos || [];
  let side = 0;

  const chapters = p.chapitres.map((c, i) => {
    const img = Number.isInteger(c.image) ? gal[c.image] : null;
    const flip = img && side++ % 2 === 1;
    return `
    <section id="ch${i + 1}" class="chapter ${img ? "has-image" : ""} ${flip ? "flip" : ""}">
      <div class="chapter-body">
        <p class="chapter-num reveal">Chapitre ${roman[i] || i + 1}</p>
        <div class="ornament reveal" style="justify-content:flex-start"><span></span></div>
        <h2 class="reveal">${c.titre}</h2>
        <div class="reveal">${c.texte}</div>
        ${c.citation ? `<blockquote class="quote reveal">${c.citation}</blockquote>` : ""}
      </div>
      ${img ? figureCard(img, c.image) : ""}
    </section>`;
  }).join("");

  const facts = [
    ["Naissance", p.naissance],
    p.deces ? ["Décès", p.deces] : ["Aujourd'hui", "En activité"],
    ["Pays", p.pays],
    ["Domaine", p.domaine],
  ];

  const videosHtml = vids.length ? `
    <section class="band" id="videos">
      <div class="band-inner">
        <div class="section-head center"><p class="kicker reveal">Archives &amp; vidéos</p><h2 class="reveal">La voir, l'écouter</h2></div>
        <div class="videos">
          ${vids.map((v) => `
            <article class="video-card reveal">
              <div class="video-player" data-video="${esc(v.youtube)}" data-title="${esc(v.titre)}">
                <button type="button" aria-label="Lire la vidéo : ${esc(v.titre)}">
                  <img src="https://i.ytimg.com/vi/${esc(v.youtube)}/hqdefault.jpg" alt="" loading="lazy">
                  <span class="play"></span>
                </button>
              </div>
              <div class="video-info">
                <h3>${esc(v.titre)}</h3>
                <p>Source : ${esc(v.source)} · <a href="https://www.youtube.com/watch?v=${esc(v.youtube)}" target="_blank" rel="noopener">voir sur YouTube</a></p>
              </div>
            </article>`).join("")}
        </div>
      </div>
    </section>` : "";

  const galleryHtml = gal.length ? `
    <section class="band-inner" id="galerie">
      <div class="section-head center"><p class="kicker reveal">Galerie</p><h2 class="reveal">En images</h2></div>
      <div class="masonry">
        ${gal.map((g, i) => `
          <figure class="reveal" data-lightbox="${i}">
            <img src="${g.src}" alt="${esc(g.legende)}" loading="lazy">
            <figcaption>${esc(g.legende)}</figcaption>
          </figure>`).join("")}
      </div>
    </section>` : "";

  const photoCredits = [p.photo, ...gal].filter(Boolean);

  app.innerHTML = `
    <header class="bio-hero">
      ${p.photo ? `<div class="bio-hero-bg" style="background-image:url('${p.photo.src}')"></div>` : ""}
      <div class="bio-hero-inner">
        <div>
          <p class="kicker reveal">${esc(p.domaine)} · ${esc(p.pays)}</p>
          <h1 class="reveal">${esc(first)}${rest ? `<span>${esc(rest)}</span>` : ""}</h1>
          <p class="hook reveal">${esc(p.accroche)}</p>
          <a href="#ch1" class="btn reveal">Commencer l'histoire</a>
        </div>
        ${p.photo ? `
        <figure class="arch reveal">
          <div class="arch-frame"><img src="${p.photo.src}" alt="Portrait de ${esc(p.nom)}"></div>
          ${credit(p.photo)}
        </figure>` : ""}
      </div>
    </header>

    <div class="facts-wrap">
      <div class="facts">
        ${facts.map(([k, v]) => `<div class="fact reveal"><small>${k}</small><strong>${esc(v)}</strong></div>`).join("")}
      </div>
    </div>

    <main>
      ${chapters}
      ${videosHtml}
      ${galleryHtml}

      <section class="band" id="dates">
        <div class="band-inner timeline-wrap">
          <div class="section-head center"><p class="kicker reveal">Chronologie</p><h2 class="reveal">Une vie en quelques dates</h2></div>
          ${p.chiffre ? `<div class="big-stat reveal"><span class="count" data-target="${p.chiffre.valeur}">0</span><small>${esc(p.chiffre.label)}</small></div>` : ""}
          <ol class="timeline">
            ${p.dates.map((d) => `<li class="reveal"><span>${d.annee}</span>${d.texte}</li>`).join("")}
          </ol>
        </div>
      </section>

      <section class="finale">
        <div class="ornament reveal"><span></span></div>
        <blockquote class="reveal">${esc(p.conclusion)}</blockquote>
        <p class="signature reveal">${esc(p.nom)}</p>
      </section>

      <section class="band" id="sources">
        <div class="band-inner">
          <div class="section-head center"><p class="kicker reveal">Pour aller plus loin</p><h2 class="reveal">Sources &amp; crédits</h2></div>
          <div class="sources-grid">
            <div class="reveal">
              <h3>Sources</h3>
              <ul>${(p.sources || []).map((s) => typeof s === "string"
                ? `<li>${esc(s)}</li>`
                : `<li><a href="${s.url}" target="_blank" rel="noopener">${esc(s.titre)}</a></li>`).join("")}</ul>
            </div>
            ${photoCredits.length ? `
            <div class="reveal">
              <h3>Crédits photos</h3>
              <ul>${photoCredits.map((g) => `<li><a href="${g.page}" target="_blank" rel="noopener">${esc(g.legende || "Portrait")}</a><small>${esc(g.credit)}</small></li>`).join("")}</ul>
            </div>` : ""}
            ${vids.length ? `
            <div class="reveal">
              <h3>Vidéos</h3>
              <ul>${vids.map((v) => `<li><a href="https://www.youtube.com/watch?v=${esc(v.youtube)}" target="_blank" rel="noopener">${esc(v.titre)}</a><small>${esc(v.source)}</small></li>`).join("")}</ul>
            </div>` : ""}
          </div>
        </div>
      </section>

      <section class="share">
        <p class="kicker center">Partager</p>
        <h2>Fais découvrir son histoire</h2>
        <div class="share-buttons">
          <a id="share-wa" class="btn" href="#" target="_blank" rel="noopener">Partager sur WhatsApp</a>
          <button id="share-copy" class="btn ghost" type="button">Copier le lien</button>
        </div>
        <p id="copy-msg" class="copy-msg" role="status"></p>
        ${nextLink(p)}
      </section>
    </main>`;

  const navItems = [
    ...p.chapitres.map((c, i) => [`#ch${i + 1}`, `Chap. ${roman[i]}`]),
    vids.length && ["#videos", "Vidéos"],
    gal.length && ["#galerie", "Galerie"],
    ["#dates", "Dates"],
  ].filter(Boolean);
  document.getElementById("chapter-nav").innerHTML = navItems.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join("");

  setupReveal();
  setupCounter();
  setupScroll();
  setupVideos();
  setupLightbox(gal);
  setupShare(p);
}

function nextLink(p) {
  const i = people.indexOf(p);
  const next = people[(i + 1) % people.length];
  if (!next || next === p) return "";
  return `<a class="next-card" href="bio.html?id=${encodeURIComponent(next.id)}">
    ${next.photo ? `<img src="${next.photo.src}" alt="">` : ""}
    <span><small>Biographie suivante</small><strong>${esc(next.nom)}</strong></span>
    <span class="arrow">→</span></a>`;
}

function setupReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

function setupCounter() {
  const el = document.querySelector(".count");
  if (!el) return;
  const target = Number(el.dataset.target);
  const co = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    co.disconnect();
    const start = performance.now();
    const dur = 1600;
    const step = (t) => {
      const k = Math.min(1, (t - start) / dur);
      el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3))).toLocaleString("fr-FR");
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, { threshold: 0.5 });
  co.observe(el);
}

function setupScroll() {
  const bar = document.getElementById("progress-bar");
  const nav = document.getElementById("nav");
  const links = [...document.querySelectorAll("#chapter-nav a")];
  const targets = links.map((a) => document.querySelector(a.getAttribute("href")));
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + "%";
    nav.classList.toggle("scrolled", scrollY > 40);
    let current = -1;
    targets.forEach((t, i) => { if (t && t.getBoundingClientRect().top < innerHeight / 2) current = i; });
    links.forEach((a, i) => a.classList.toggle("active", i === current));
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// Vidéo : on charge le lecteur YouTube seulement au clic (page plus rapide)
function setupVideos() {
  document.querySelectorAll(".video-player").forEach((box) => {
    box.querySelector("button").addEventListener("click", () => {
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(box.dataset.video)}?autoplay=1&rel=0`;
      iframe.title = box.dataset.title;
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      box.replaceChildren(iframe);
    });
  });
}

function setupLightbox(gal) {
  const lb = document.getElementById("lightbox");
  const img = lb.querySelector("img");
  const cap = lb.querySelector("figcaption");
  const close = () => lb.classList.remove("open");
  document.querySelectorAll("[data-lightbox]").forEach((el) => {
    el.addEventListener("click", () => {
      const g = gal[Number(el.dataset.lightbox)];
      if (!g) return;
      img.src = g.src;
      img.alt = g.legende || "";
      cap.innerHTML = `${g.legende ? `<p class="legende">${esc(g.legende)}</p>` : ""}${credit(g)}`;
      lb.classList.add("open");
    });
  });
  lb.addEventListener("click", (e) => { if (e.target === lb || e.target.closest(".lightbox-close")) close(); });
  addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

function setupShare(p) {
  const url = location.href.split("#")[0];
  document.getElementById("share-wa").href =
    "https://wa.me/?text=" + encodeURIComponent(`${p.accroche} Découvre l'histoire de ${p.nom} : ${url}`);
  document.getElementById("share-copy").addEventListener("click", async () => {
    const msg = document.getElementById("copy-msg");
    try {
      await navigator.clipboard.writeText(url);
      msg.textContent = "Lien copié !";
    } catch {
      msg.textContent = "Copie impossible, copie l'adresse depuis la barre du navigateur.";
    }
  });
}
