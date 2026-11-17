/*
  Compteur de visites (service gratuit Abacus : https://abacus.jasoncameron.dev)
  - "site"        : nombre de visites du site (1 par visiteur et par session)
  - "bio-<id>"    : nombre de lectures de chaque biographie
  Aucune donnée personnelle n'est envoyée : seul un compteur est incrémenté.
*/
// En local (tests), on utilise un compteur séparé pour ne pas fausser les vrais chiffres
const COUNTER_NS = /^(localhost|127\.0\.0\.1)$/.test(location.hostname)
  ? "destins-biographies-dev"
  : "destins-biographies-onrender";
const COUNTER_API = "https://abacus.jasoncameron.dev";

function seen(key) {
  try {
    if (sessionStorage.getItem("dc-" + key)) return true;
    sessionStorage.setItem("dc-" + key, "1");
  } catch (e) { /* stockage indisponible : on compte quand même */ }
  return false;
}

async function countVisit(key) {
  const action = seen(key) ? "get" : "hit";
  try {
    const r = await fetch(`${COUNTER_API}/${action}/${COUNTER_NS}/${encodeURIComponent(key)}`);
    if (!r.ok) return null;
    const data = await r.json();
    return typeof data.value === "number" ? data.value : null;
  } catch (e) {
    return null;
  }
}

// Affiche le nombre avec une petite animation de comptage
function showCount(el, value) {
  if (!el || value == null) return;
  const wrap = el.closest("[data-counter-wrap]");
  if (wrap) wrap.hidden = false;
  const start = performance.now();
  const dur = 1200;
  const step = (t) => {
    const k = Math.min(1, (t - start) / dur);
    el.textContent = Math.round(value * (1 - Math.pow(1 - k, 3))).toLocaleString("fr-FR");
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
