"use strict";

let data = [
  // ── SOIN ──────────────────────────────────────────────
  { id: 1,  name: "Salade",               category: "Soin",    stats: { hp: 20 },           price: 15,  image: "ressources/Salade.png" },
  { id: 2,  name: "Tomate",               category: "Soin",    stats: { hp: 25 },           price: 20,  image: "ressources/Tomate.png" },
  { id: 3,  name: "Salade de Tomate",     category: "Soin",    stats: { hp: 50 },           price: 40,  image: "ressources/SaladeTomate.png" },
  { id: 4,  name: "Avocat",               category: "Soin",    stats: { hp: 35, def: 5 },   price: 45,  image: "ressources/Avocat.png" },
  { id: 5,  name: "Orange",               category: "Soin",    stats: { hp: 30 },           price: 25,  image: "ressources/Orange (1).png" },
  { id: 6,  name: "Pastèque",             category: "Soin",    stats: { hp: 60 },           price: 40,  image: "ressources/Pastèque.png" },
  { id: 7,  name: "Figue de Barbarie",    category: "Soin",    stats: { hp: 45 },           price: 55,  image: "ressources/FigueDeBarbarie.png" },
  { id: 8,  name: "Fruit du Passion",     category: "Soin",    stats: { hp: 40 },           price: 50,  image: "ressources/passionfruit.png" },
  { id: 9,  name: "Chocolat",             category: "Soin",    stats: { mp: 40 },           price: 60,  image: "ressources/Chocolat.png" },
  { id: 10, name: "Gaufre",               category: "Soin",    stats: { hp: 70 },           price: 65,  image: "ressources/Gauffre.png" },
  { id: 11, name: "Gaufre Choco",         category: "Soin",    stats: { hp: 70, mp: 40 },           price: 100,  image: "ressources/GauffreChoco (1).png" },
  { id: 12, name: "Pain Brioché",         category: "Soin",    stats: { hp: 30 },           price: 25,  image: "ressources/PainBrioché.png" },
  { id: 13, name: "Riz",                  category: "Soin",    stats: { hp: 80 },           price: 50,  image: "ressources/Riz.png" },
  { id: 14, name: "Bento",                category: "Soin",    stats: { hp: 150, atk: 5 },  price: 130, image: "ressources/Bento.png" },
  { id: 15, name: "Nouilles Instantanées",category: "Soin",    stats: { hp: 60 },           price: 30,  image: "ressources/Nouille Instantanée.png" },
  { id: 16, name: "Jiaozi",               category: "Soin",    stats: { hp: 100, def: 8 },  price: 110, image: "ressources/jiaozi.png" },
  { id: 17, name: "Guacamole",            category: "Soin",    stats: { hp: 70, def: 10 },  price: 120, image: "ressources/Guacamole.png" },
  { id: 18, name: "Jus d'Orange",         category: "Soin",    stats: { hp: 50, agi: 8 },   price: 55,  image: "ressources/JusOrange.png" },
  { id: 39, name: "Carotte",              category: "Soin",    stats: { hp: 30, def: 5 },   price: 20,  image: "ressources/Carotte.png" },
  { id: 40, name: "Blé",                  category: "Soin",    stats: { hp: 25 },           price: 15,  image: "ressources/Blé.png" },
  { id: 44, name: "Thé à la Menthe", category: "Soin", stats: { hp: 45, mp: 30 }, price: 40, image: "ressources/theMenthe.png" },
  // ── GLACE ─────────────────────────────────────────────
  { id: 19, name: "Glace",                category: "Glace",   stats: { hp: 40 },           price: 45,  image: "ressources/Glace.png" },
  { id: 20, name: "Glace Pastèque",       category: "Glace",   stats: { hp: 80 },           price: 80,  image: "ressources/GlacePastèque.png" },
  // ── FEU ───────────────────────────────────────────────
  { id: 21, name: "Piment",               category: "Feu",     stats: { atk: 20, agi: 10 }, price: 90,  image: "ressources/Piment.png" },
  { id: 22, name: "Fruit du Dragon",      category: "Feu",     stats: { atk: 15 },          price: 100, image: "ressources/FruitDuDragon.png" },
  // ── VITESSE ───────────────────────────────────────────
  { id: 23, name: "Café",                 category: "Vitesse", stats: { agi: 20 },          price: 70,  image: "ressources/Café.png" },
  { id: 24, name: "Boisson Énergisante",  category: "Vitesse", stats: { agi: 30, atk: 10 }, price: 130, image: "ressources/BoissonEnergisante.png" },
  // ── EAU ───────────────────────────────────────────────
  { id: 25, name: "Poisson",              category: "Eau",     stats: { hp: 60 },           price: 70,  image: "ressources/Poisson.png" },
  { id: 26, name: "Sashimi",              category: "Eau",     stats: { hp: 150, agi: 10 },  price: 150, image: "ressources/Sashimi.png" },
  { id: 27, name: "Sushi",                category: "Eau",     stats: { hp: 100, def: 8 },  price: 120, image: "ressources/sushi.png" },
  { id: 29, name: "Tempura",              category: "Eau",     stats: { hp: 120, def: 12 }, price: 150, image: "ressources/Tempura.png" },
  // ── BUFF ──────────────────────────────────────────────
  { id: 30, name: "Tenders",              category: "Buff",    stats: { hp: 80, atk: 15 },  price: 110, image: "ressources/Tenders.png" },
  { id: 31, name: "Burger",               category: "Buff",    stats: { hp: 180, atk: 15 }, price: 200, image: "ressources/Burgers.png" },
  { id: 32, name: "Burger Tenders",       category: "Buff",    stats: { hp: 220, atk: 20, agi: 10 }, price: 250, image: "ressources/TendersBurgers.png" },
  { id: 33, name: "Viande Cuite",         category: "Buff",    stats: { hp: 100, atk: 20 }, price: 140, image: "ressources/ViandeCuite.png" },
  { id: 38, name: "Couscous",             category: "Buff",    stats: { hp: 400, atk: 50 }, price: 300, image: "ressources/couscous_32x32_v6.png" },
  { id: 42, name: "Potion de Force",      category: "Buff",    stats: { atk: 25 },          price: 180, image: "ressources/Potion1.png" },
  { id: 43, name: "Potion de Défense",    category: "Buff",    stats: { def: 20 },          price: 180, image: "ressources/Potion2.png" },
  // ── SNACK ─────────────────────────────────────────────
  { id: 34, name: "Chips",                category: "Snack",   stats: { hp: 20 },           price: 15,  image: "ressources/Chips.png" },
  { id: 41, name: "Chips Pimentée",       category: "Snack",   stats: { hp: 20, agi: 5 },   price: 25,  image: "ressources/ChipsPimenté.png" },
  // ── SPÉCIAL ───────────────────────────────────────────
  { id: 35, name: "Potion d'Amour",       category: "Spécial", stats: { hp: 50, mp: 50 },   price: 350, image: "ressources/potion-love.png" }, //transforme un ennemi en allié
  { id: 36, name: "Potion Étoile",        category: "Spécial", stats: { hp: 999, mp: 999, atk: 15, def: 15, agi: 15 }, price: 400, image: "ressources/potion-star.png" }, // Annule les dégat de la prochaine attaque subit
  { id: 37, name: "Bandage",              category: "Soin",    stats: { hp: 30 },           price: 35,  image: "ressources/bandage.png" },
  { id: 50, name: "Queue de Phénix",      category: "Spécial",    stats: { hp: 2000 },           price: 500,  image: "ressources/QueuePhénix.png" }, //Récussite un allié KO
];

// =========================
// RECETTES
// =========================
const RECIPES = [
  { ingredients: ["Orange", "Orange"],                                  result: "Jus d'Orange" },
  { ingredients: ["Salade", "Tomate"],                                  result: "Salade de Tomate" },
  { ingredients: ["Salade", "Tomate", "Pain Brioché", "Viande Cuite"], result: "Burger" },
  { ingredients: ["Salade de Tomate", "Pain Brioché", "Viande Cuite"], result: "Burger" },
  { ingredients: ["Salade", "Tomate", "Pain Brioché", "Tenders"],      result: "Burger Tenders" },
  { ingredients: ["Salade de Tomate", "Pain Brioché", "Tenders"],      result: "Burger Tenders" },
  { ingredients: ["Avocat", "Tomate"],                                  result: "Guacamole" },
  { ingredients: ["Glace", "Pastèque"],                                 result: "Glace Pastèque" },
  { ingredients: ["Gaufre", "Chocolat"],                                result: "Gaufre Choco" },
  { ingredients: ["Riz", "Poisson"],                                    result: "Sushi" },
  { ingredients: ["Poisson", "Poisson", "Riz"],                         result: "Sashimi" },
  { ingredients: ["Blé", "Carotte", "Tomate", "Viande Cuite"],         result: "Couscous" },
];

// Éléments du DOM
const btnSort     = document.getElementById("btn-sort");
const searchInput = document.getElementById("search");
const form        = document.getElementById("form-add");

// Sens du tri
let sortAsc = false;

// Valeurs max pour les barres
const STAT_MAX = { hp: 999, mp: 999, atk: 50, def: 20, agi: 30 };

// Emoji par catégorie
function getIcone(category) {
  const icones = {
    "Soin":    "💚",
    "Buff":    "💪",
    "Feu":     "🔥",
    "Glace":   "❄️",
    "Vitesse": "⚡",
    "Eau":     "💧",
    "Snack":   "🍿",
    "Spécial": "⭐"
  };
  return icones[category] || "•";
}

// Icône par stat
function getStatIcone(stat) {
  const icones = {
    hp:  "❤️",
    mp:  "⚡",
    atk: "<img src='ressources/Harold4.png' class='stat-icon'>",
    def: "<img src='ressources/Shield1.png' class='stat-icon'>",
    agi: "<img src='ressources/Harold3.png' class='stat-icon'>"
  };
  return icones[stat] || stat;
}

// Génère les barres de stats
function afficherStats(stats) {
  return Object.entries(stats).map(function([stat, valeur]) {
    const max = STAT_MAX[stat] || 100;
    const pourcent = Math.min((valeur / max) * 100, 100);
    return `
      <div class="stat">
        ${getStatIcone(stat)}
        <div class="stat-bar">
          <div class="stat-bar-fill ${stat}" style="width: ${pourcent}%"></div>
        </div>
        <span>${valeur}</span>
      </div>`;
  }).join("");
}

// Rafraîchit l'affichage
function refresh() {
  const query = searchInput ? searchInput.value.toLowerCase() : "";
  let result = query
      ? data.filter(item => item.name.toLowerCase().includes(query))
      : [...data];
  result.sort((a, b) => sortAsc ? a.price - b.price : b.price - a.price);
  afficherConsommables(result);
}

// =========================
// TRI
// =========================
if (btnSort) {
  btnSort.addEventListener("click", function () {
    sortAsc = !sortAsc;
    btnSort.textContent = sortAsc
        ? "Trier par prix ↑ (ASC)"
        : "Trier par prix ↓ (DESC)";
    refresh();
  });
}

// =========================
// RECHERCHE
// =========================
if (searchInput) {
  searchInput.addEventListener("input", refresh);
}

// =========================
// IMAGE — drag & drop
// =========================
const dropZone   = document.getElementById("drop-zone");
const inputImg   = document.getElementById("input-image");
const previewImg = document.getElementById("preview-img");
const dropText   = document.getElementById("drop-text");
let imageBase64  = "";

if (dropZone) {
  dropZone.addEventListener("click", function() {
    inputImg.click();
  });

  dropZone.addEventListener("dragover", function(e) {
    e.preventDefault();
    dropZone.classList.add("drag-over");
  });

  dropZone.addEventListener("dragleave", function() {
    dropZone.classList.remove("drag-over");
  });

  dropZone.addEventListener("drop", function(e) {
    e.preventDefault();
    dropZone.classList.remove("drag-over");
    const file = e.dataTransfer.files[0];
    if (file) lireImage(file);
  });
}

if (inputImg) {
  inputImg.addEventListener("change", function() {
    if (inputImg.files[0]) lireImage(inputImg.files[0]);
  });
}

function lireImage(file) {
  const reader = new FileReader();
  reader.onload = function(e) {
    imageBase64 = e.target.result;
    previewImg.src = imageBase64;
    previewImg.classList.remove("hidden");
    dropText.classList.add("hidden");
  };
  reader.readAsDataURL(file);
}

// =========================
// AJOUT D'UN PLAT
// =========================
if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const stats = {};
    const hp  = Number(document.getElementById("input-hp").value);
    const atk = Number(document.getElementById("input-atk").value);
    const def = Number(document.getElementById("input-def").value);
    const agi = Number(document.getElementById("input-agi").value);
    const mp  = Number(document.getElementById("input-mp").value);

    if (hp  > 0) stats.hp  = hp;
    if (atk > 0) stats.atk = atk;
    if (def > 0) stats.def = def;
    if (agi > 0) stats.agi = agi;
    if (mp  > 0) stats.mp  = mp;

    const nouveauItem = {
      id: Date.now(),
      name: document.getElementById("input-name").value.trim(),
      category: document.getElementById("input-category").value,
      stats: Object.keys(stats).length > 0 ? stats : { hp: 0 },
      price: Number(document.getElementById("input-price").value),
      image: imageBase64 || "https://placehold.co/400x300/7f8c8d/white?text=" + encodeURIComponent(document.getElementById("input-name").value.trim())
    };

    data.push(nouveauItem);
    refresh();
    form.reset();

    // Reset image
    imageBase64 = "";
    previewImg.classList.add("hidden");
    dropText.classList.remove("hidden");

    // Retourner sur la boutique
    document.querySelector('[data-tab="shop"]').click();
  });
}

// =========================
// SUPPRESSION
// =========================
const listElement = document.getElementById("list");
if (listElement) {
  listElement.addEventListener("click", function (event) {
    const btn = event.target.closest(".btn-delete");
    if (!btn) return;
    const card = btn.closest(".card");
    if (!card) return;
    const id = Number(card.dataset.id);
    if (!confirm("Supprimer cet ingrédient ?")) return;
    data = data.filter(item => item.id !== id);
    refresh();
  });
}

// =========================
// AFFICHAGE INGRÉDIENTS
// =========================
function afficherConsommables(tabItems) {
  const ulList = document.getElementById("list");
  if (!ulList) return;

  let html = "";
  tabItems.forEach(function(item) {
    html += `
    <article class="card" data-id="${item.id}" data-category="${item.category}">
      <img src="${item.image}" alt="${item.name}">
      <div class="card-body">
        <div class="card-category-badge">${getIcone(item.category)} ${item.category}</div>
        <h2>${item.name}</h2>
        <div class="card-stats">${afficherStats(item.stats)}</div>
        <div class="card-footer">
          <span class="price"><img src="ressources/Coin.png" class="stat-icon"> ${item.price}</span>
          <button class="btn-delete" data-id="${item.id}">🗑️</button>
        </div>
      </div>
    </article>`;
  });

  // Carte vide
  html += `
  <article class="card card-add" id="card-add">
    <div class="card-add-inner">
      <span>➕</span>
      <p>Ajouter un plat</p>
    </div>
  </article>`;

  ulList.innerHTML = html;
}

// =========================
// AFFICHAGE RECETTES
// =========================
function afficherRecettes() {
  const container = document.getElementById("recipes-list");
  if (!container) return;

  let html = "";
  RECIPES.forEach(function(recipe) {
    const ingredientsHtml = recipe.ingredients.map(function(nom) {
      const item = data.find(d => d.name === nom);
      const img = item ? `<img src="${item.image}" alt="${nom}">` : "❓";
      return `<div class="recipe-ing">${img}<span>${nom}</span></div>`;
    }).join('<span class="recipe-plus">+</span>');

    const resultItem = data.find(d => d.name === recipe.result);
    const resultImg = resultItem ? `<img src="${resultItem.image}" alt="${recipe.result}">` : "❓";

    html += `
    <div class="recipe-card">
      <div class="recipe-result">
        ${resultImg}
        <span>${recipe.result}</span>
      </div>
      <span class="recipe-arrow">⬅</span>
      <div class="recipe-card-body">
        ${ingredientsHtml}
      </div>
    </div>`;
  });

  container.innerHTML = html;
}

// =========================
// CARTE VIDE → ONGLET AJOUT
// =========================
document.addEventListener("click", function(e) {
  if (e.target.closest("#card-add")) {
    document.querySelector('[data-tab="craft"]').click();
  }
});

// =========================
// ONGLETS
// =========================
document.querySelectorAll(".nav-btn").forEach(function(btn) {
  btn.addEventListener("click", function() {
    document.querySelectorAll(".nav-btn").forEach(function(b) {
      b.classList.remove("active");
    });
    document.querySelectorAll(".tab-content").forEach(function(s) {
      s.classList.remove("active");
    });
    btn.classList.add("active");
    document.getElementById("tab-" + btn.dataset.tab).classList.add("active");

    if (btn.dataset.tab === "recipes") afficherRecettes();
  });
});

refresh();