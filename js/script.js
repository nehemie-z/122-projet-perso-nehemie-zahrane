"use strict";
// Tableau de données — consommables RPG Maker
let data = [
  // ── SOIN ──────────────────────────────────────────────
  {
    id: 1,
    name: "Salade",
    category: "Soin",
    effect: "Restaure 20 HP",
    price: 15,
    tags: ["hp"],
    image: "ressources/Salade.png"
  },
  {
    id: 2,
    name: "Tomate",
    category: "Soin",
    effect: "Restaure 25 HP",
    price: 20,
    tags: ["hp"],
    image: "ressources/Tomate.png"
  },
  {
    id: 3,
    name: "Salade de Tomate",
    category: "Soin",
    effect: "Restaure 50 HP",
    price: 40,
    tags: ["hp"],
    image: "ressources/SaladeTomate.png"
  },
  {
    id: 4,
    name: "Avocat",
    category: "Soin",
    effect: "Restaure 35 HP + DEF +5 (2t)",
    price: 45,
    tags: ["hp", "défense"],
    image: "ressources/Avocat.png"
  },
  {
    id: 5,
    name: "Orange",
    category: "Soin",
    effect: "Restaure 30 HP + Annule Poison",
    price: 25,
    tags: ["hp"],
    image: "ressources/Orange (1).png"
  },
  {
    id: 6,
    name: "Pastèque",
    category: "Soin",
    effect: "Restaure 60 HP + Annule Chaleur",
    price: 40,
    tags: ["hp"],
    image: "ressources/Pastèque.png"
  },
  {
    id: 7,
    name: "Figue de Barbarie",
    category: "Soin",
    effect: "Restaure 45 HP + Résistance Feu",
    price: 55,
    tags: ["hp"],
    image: "ressources/FigueDeBarbarie.png"
  },
  {
    id: 8,
    name: "Fruit du Passion",
    category: "Soin",
    effect: "Restaure 40 HP + Moral +10",
    price: 50,
    tags: ["hp"],
    image: "ressources/passionfruit.png"
  },
  {
    id: 9,
    name: "Chocolat",
    category: "Soin",
    effect: "Restaure 40 HP + Moral +10",
    price: 60,
    tags: ["hp"],
    image: "ressources/Chocolat.png"
  },
  {
    id: 10,
    name: "Gaufre",
    category: "Soin",
    effect: "Restaure 70 HP",
    price: 65,
    tags: ["hp"],
    image: "ressources/Gauffre.png"
  },
  {
    id: 11,
    name: "Gaufre Choco",
    category: "Soin",
    effect: "Restaure 90 HP + Moral +15",
    price: 90,
    tags: ["hp"],
    image: "ressources/GauffreChoco (1).png"
  },
  {
    id: 12,
    name: "Pain Brioché",
    category: "Soin",
    effect: "Restaure 30 HP + Satiété",
    price: 25,
    tags: ["hp"],
    image: "ressources/PainBrioché.png"
  },
  {
    id: 13,
    name: "Riz",
    category: "Soin",
    effect: "Restaure 80 HP",
    price: 50,
    tags: ["hp"],
    image: "ressources/Riz.png"
  },
  {
    id: 14,
    name: "Bento",
    category: "Soin",
    effect: "Restaure 150 HP + ATK +5 (2t)",
    price: 130,
    tags: ["hp", "force"],
    image: "ressources/Bento.png"
  },
  {
    id: 15,
    name: "Nouilles Instantanées",
    category: "Soin",
    effect: "Restaure 60 HP",
    price: 30,
    tags: ["hp"],
    image: "ressources/Nouille Instantanée.png"
  },
  {
    id: 16,
    name: "Jiaozi",
    category: "Soin",
    effect: "Restaure 100 HP + DEF +8 (2t)",
    price: 110,
    tags: ["hp", "défense"],
    image: "ressources/jiaozi.png"
  },
  {
    id: 17,
    name: "Guacamole",
    category: "Soin",
    effect: "Restaure 70 HP + DEF +10 (3t)",
    price: 120,
    tags: ["hp", "défense"],
    image: "ressources/Guacamole.png"
  },
  {
    id: 18,
    name: "Jus d'Orange",
    category: "Soin",
    effect: "Restaure 50 HP + VIT +8 (2t)",
    price: 55,
    tags: ["hp", "vitesse"],
    image: "ressources/JusOrange.png"
  },
  {
    id: 19,
    name: "Glace",
    category: "Glace",
    effect: "Restaure 40 HP + Annule Brûlure",
    price: 45,
    tags: ["hp", "glace"],
    image: "ressources/Glace.png"
  },
  {
    id: 20,
    name: "Glace Pastèque",
    category: "Glace",
    effect: "Restaure 80 HP + Annule Brûlure + Chaleur",
    price: 80,
    tags: ["hp", "glace"],
    image: "ressources/GlacePastèque.png"
  },
  // ── ATTAQUE ───────────────────────────────────────────
  {
    id: 21,
    name: "Piment",
    category: "Feu",
    effect: "ATK +20 + Inflige Brûlure (2t)",
    price: 90,
    tags: ["feu", "force"],
    image: "ressources/Piment.png"
  },
  {
    id: 22,
    name: "Fruit du Dragon",
    category: "Feu",
    effect: "ATK +15 + Résistance Feu (3t)",
    price: 100,
    tags: ["feu"],
    image: "ressources/FruitDuDragon.png"
  },
  // ── VITESSE ───────────────────────────────────────────
  {
    id: 23,
    name: "Café",
    category: "Vitesse",
    effect: "AGI +20 (3t) + Annule Sommeil",
    price: 70,
    tags: ["vitesse"],
    image: "ressources/Café.png"
  },
  {
    id: 24,
    name: "Boisson Énergisante",
    category: "Vitesse",
    effect: "AGI +30 + ATK +10 (3t)",
    price: 130,
    tags: ["vitesse", "force"],
    image: "ressources/BoissonEnergisante.png"
  },
  // ── EAU ───────────────────────────────────────────────
  {
    id: 25,
    name: "Poisson",
    category: "Eau",
    effect: "Restaure 60 HP + Résistance Feu",
    price: 70,
    tags: ["hp", "eau"],
    image: "ressources/Poisson.png"
  },
  {
    id: 26,
    name: "Sashimi",
    category: "Eau",
    effect: "Restaure 90 HP + AGI +10 (2t)",
    price: 110,
    tags: ["hp", "eau", "vitesse"],
    image: "ressources/Sashimi.png"
  },
  {
    id: 27,
    name: "Sushi",
    category: "Eau",
    effect: "Restaure 100 HP + DEF +8 (2t)",
    price: 120,
    tags: ["hp", "eau", "défense"],
    image: "ressources/sushi.png"
  },
  {
    id: 28,
    name: "Sushi Saumon",
    category: "Eau",
    effect: "Restaure 110 HP + ATK +8 (2t)",
    price: 130,
    tags: ["hp", "eau", "force"],
    image: "ressources/SuhsiSaumon.png"
  },
  {
    id: 29,
    name: "Tempura",
    category: "Eau",
    effect: "Restaure 120 HP + DEF +12 (3t)",
    price: 150,
    tags: ["hp", "eau", "défense"],
    image: "ressources/Tempura.png"
  },
  // ── BUFF ──────────────────────────────────────────────
  {
    id: 30,
    name: "Tenders",
    category: "Buff",
    effect: "ATK +15 + Restaure 80 HP",
    price: 110,
    tags: ["force", "hp"],
    image: "ressources/Tenders.png"
  },
  {
    id: 31,
    name: "Burger",
    category: "Buff",
    effect: "Restaure 180 HP + ATK +15 (3t)",
    price: 200,
    tags: ["hp", "force"],
    image: "ressources/Burgers.png"
  },
  {
    id: 32,
    name: "Burger Tenders",
    category: "Buff",
    effect: "Restaure 220 HP + ATK +20 + VIT +10 (3t)",
    price: 250,
    tags: ["hp", "force", "vitesse"],
    image: "ressources/TendersBurgers.png"
  },
  {
    id: 33,
    name: "Viande Cuite",
    category: "Buff",
    effect: "ATK +20 + Restaure 100 HP (3t)",
    price: 140,
    tags: ["force", "hp"],
    image: "ressources/ViandeCuite.png"
  },
  // ── SNACK ─────────────────────────────────────────────
  {
    id: 34,
    name: "Chips",
    category: "Snack",
    effect: "Restaure 20 HP",
    price: 15,
    tags: ["hp"],
    image: "ressources/Chips.png"
  },
  // ── SPÉCIAL ───────────────────────────────────────────
  {
    id: 35,
    name: "Potion d'Amour",
    category: "Spécial",
    effect: "Charme l'ennemi (3t) + Moral +20",
    price: 300,
    tags: ["spécial"],
    image: "ressources/potion-love.png"
  },
  {
    id: 36,
    name: "Potion Étoile",
    category: "Spécial",
    effect: "Tous les stats +15 (5t) + Immunité totale",
    price: 500,
    tags: ["spécial", "hp", "force", "vitesse", "défense"],
    image: "ressources/potion-star.png"
  },
  {
    id: 37,
    name: "Bandage",
    category: "Soin",
    effect: "Soigne Saignement + Restaure 30 HP",
    price: 35,
    tags: ["hp"],
    image: "ressources/bandage.png"
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


refresh();