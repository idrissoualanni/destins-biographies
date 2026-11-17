const people = window.PERSONNALITES || [];
const grid = document.getElementById("grid");
const search = document.getElementById("search");
const regionSel = document.getElementById("region");
const domaineSel = document.getElementById("domaine");
const countEl = document.getElementById("count");

const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const lifespan = (p) => (p.deces ? `${p.naissance} – ${p.deces}` : `Depuis ${p.naissance}`);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const bioUrl = (p) => `bio.html?id=${encodeURIComponent(p.id)}`;

// Menus déroulants
function fillSelect(sel, values) {
  values.forEach((v) => sel.add(new Option(v, v)));
}
fillSelect(regionSel, [...new Set(people.map((p) => p.region))]);
fillSelect(domaineSel, [...new Set(people.map((p) => p.domaine))].sort((a, b) => a.localeCompare(b, "fr")));

// Rangée de portraits dans l'en-tête
document.getElementById("portraits").innerHTML = people
  .filter((p) => p.photo)
  .slice(0, 9)
  .map((p) => `<a href="${bioUrl(p)}" title="${esc(p.nom)}"><img src="${p.photo.src}" alt="${esc(p.nom)}"></a>`)
  .join("");

function card(p) {
  const a = document.createElement("a");
  a.className = "card reveal";
  a.href = bioUrl(p);
  a.setAttribute("aria-label", `Lire la biographie de ${p.nom}`);
  a.style.setProperty("--accent", p.accent || "#c9a24b");
  const nPhotos = (p.photo ? 1 : 0) + (p.galerie || []).length;
  const nVideos = (p.videos || []).length;
  a.innerHTML = `
    <div class="card-media">
      ${p.photo ? `<img src="${p.photo.src}" alt="" loading="lazy">` : ""}
      <span class="badge left">${esc(p.region)}</span>
      ${nVideos ? `<span class="badge right">${nVideos} vidéo${nVideos > 1 ? "s" : ""}</span>` : ""}
      <span class="card-years">${lifespan(p)}</span>
    </div>
    <div class="card-body">
      <p class="card-meta"><span>${esc(p.domaine)}</span><i></i><span>${esc(p.pays)}</span></p>
      <h3>${esc(p.nom)}</h3>
      <p class="card-resume">${esc(p.resume)}</p>
      <div class="card-foot">
        <span class="card-stats">
          <span title="Chapitres"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/></svg>${p.chapitres.length}</span>
          <span title="Photos"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="m21 17-5-5-8 7"/></svg>${nPhotos}</span>
        </span>
        <span class="card-go">Lire <b>→</b></span>
      </div>
    </div>`;
  return a;
}

function render() {
  const q = norm(search.value);
  const list = people.filter((p) =>
    (!regionSel.value || p.region === regionSel.value) &&
    (!domaineSel.value || p.domaine === domaineSel.value) &&
    (!q || norm(`${p.nom} ${p.pays} ${p.domaine} ${p.resume}`).includes(q))
  );
  if (list.length) {
    grid.replaceChildren(...list.map(card));
  } else {
    grid.innerHTML = `<p class="empty">Aucune personnalité ne correspond à ta recherche.</p>`;
  }
  countEl.textContent = list.length ? `${list.length} biographie${list.length > 1 ? "s" : ""}` : "";
  observe();
}

// Apparition au défilement
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
}, { threshold: 0.1 });
function observe() {
  document.querySelectorAll(".reveal:not(.visible)").forEach((el, i) => {
    el.style.transitionDelay = el.classList.contains("card") ? `${(i % 3) * 90}ms` : "";
    io.observe(el);
  });
}

// Nav qui s'opacifie
const nav = document.getElementById("nav");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 40), { passive: true });

[search, regionSel, domaineSel].forEach((el) => el.addEventListener("input", render));
render();
