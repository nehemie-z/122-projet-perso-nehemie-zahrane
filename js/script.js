"use strict";

// Tableau de données — consommables RPG Maker
let data = [
  {
    id: 1,
    name: "Soupe de Champignons",
    category: "Soin",
    effect: "Restaure 80 HP",
    price: 50,
    tags: ["hp"],
    image: "https://placehold.co/400x300/27ae60/white?text=Soupe+de+Champignons"
  },
  {
    id: 2,
    name: "Tarte Épicée",
    category: "Attaque",
    effect: "Brûlure infligée + ATK +15 (3t)",
    price: 120,
    tags: ["feu", "force"],
    image: "https://placehold.co/400x300/e74c3c/white?text=Tarte+Épicée"
  },
  {
    id: 3,
    name: "Gelée de Givre",
    category: "Soin",
    effect: "Annule Gel + restaure 30 HP",
    price: 100,
    tags: ["glace", "hp"],
    image: "https://placehold.co/400x300/4a90d9/white?text=Gelée+de+Givre"
  },
  {
    id: 4,
    name: "Thé Venteux",
    category: "Buff",
    effect: "AGI +20 pendant 4 tours",
    price: 150,
    tags: ["vitesse"],
    image: "https://placehold.co/400x300/f39c12/white?text=Thé+Venteux"
  },
  {
    id: 5,
    name: "Rôti de Sanglier Royal",
    category: "Soin",
    effect: "Restaure 200 HP + ATK +10 (5t)",
    price: 200,
    tags: ["hp", "force"],
    image: "https://placehold.co/400x300/e67e22/white?text=Rôti+Royal"
  },
  {
    id: 6,
    name: "Bouillon d'Arcane",
    category: "Soin",
    effect: "Restaure 60 MP",
    price: 90,
    tags: ["mp"],
    image: "https://placehold.co/400x300/8e44ad/white?text=Bouillon+Arcane"
  },
  {
    id: 7,
    name: "Miel de Fer",
    category: "Buff",
    effect: "DEF +12 pendant 4 tours",
    price: 180,
    tags: ["défense"],
    image: "https://placehold.co/400x300/f39c12/white?text=Miel+de+Fer"
  },
  {
    id: 8,
    name: "Sorbet Arctique",
    category: "Attaque",
    effect: "Inflige Gel + résistance feu (2t)",
    price: 80,
    tags: ["glace", "feu"],
    image: "https://placehold.co/400x300/4a90d9/white?text=Sorbet+Arctique"
  },
  {
    id: 9,
    name: "Festin du Voyageur",
    category: "Soin",
    effect: "Restaure 150 HP + 80 MP + annule états",
    price: 350,
    tags: ["hp", "mp", "glace", "feu"],
    image: "https://placehold.co/400x300/27ae60/white?text=Festin+Voyageur"
  },
  {
    id: 10,
    name: "Consommé de Dragon",
    category: "Légendaire",
    effect: "PV + PM complets, ATK +30, AGI +20 (5t)",
    price: 500,
    tags: ["hp", "mp", "force", "vitesse"],
    image: "https://placehold.co/400x300/c0392b/white?text=Consommé+de+Dragon"
  }
];

// Éléments du DOM
const btnSort = document.getElementById("btn-sort");
const searchInput = document.getElementById("search");
const form = document.getElementById("form-add");
const inputName = document.getElementById("input-name");
const inputCategory = document.getElementById("input-category");
const inputEffect = document.getElementById("input-effect");
const inputPrice = document.getElementById("input-price");

// Sens du tri
let sortAsc = false;

/**
 * Rafraîchit l'affichage :
 * filtre + tri
 */
function refresh() {
  // Vérifier si la recherche existe (pour compatibilité avec les deux versions)
  const query = searchInput ? searchInput.value.toLowerCase() : "";

  // 1. Filtrer (si recherche existe)
  let result = data;
  if (searchInput && query) {
    result = data.filter(item => item.name.toLowerCase().includes(query));
  } else if (searchInput) {
    result = [...data];
  } else {
    result = [...data];
  }

  // 2. Trier
  result.sort((a, b) => sortAsc ? a.price - b.price : b.price - a.price);

  // 3. Afficher
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
// AJOUT D'UNE RECETTE
// =========================
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nouveauItem = {
      id: Date.now(),
      name: inputName.value.trim(),
      category: inputCategory.value,
      effect: inputEffect.value.trim(),
      price: Number(inputPrice.value),
      tags: [],
      image: "https://placehold.co/400x300/7f8c8d/white?text=" + encodeURIComponent(inputName.value.trim())
    };

    data.push(nouveauItem);
    refresh();
    form.reset();
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
    if (!confirm("Supprimer cette recette ?")) return;

    data = data.filter(item => item.id !== id);
    refresh();
  });
}

/**
 * Affiche les consommables
 * @param {Array} tabItems
 */
function afficherConsommables(tabItems) {
  const ulList = document.getElementById("list");
  if (!ulList) return;

  let html = "";

  tabItems.forEach(item => {
    // Génère les tags
    const tagsHtml = item.tags
        .map(tag => `<span class="tag tag-${tag}">${tag}</span>`)
        .join("");

    html += `
    <article class="card" data-id="${item.id}">
      <img src="${item.image}" alt="${item.name}">
      <div class="card-body">
        <h2>${item.name}</h2>
        <p>${item.category} — ${item.effect}</p>
        <div class="tags">
          ${tagsHtml}
        </div>
        <span class="price">
          ${item.price} Or
        </span>
        <button class="btn btn-danger btn-delete">
          Supprimer
        </button>
      </div>
    </article>
    `;
  });

  ulList.innerHTML = html;
}

// =========================
// AFFICHAGE INITIAL
// =========================
refresh();