# Les Recettes d'Avdol — Hunter Fantasy
Projet JavaScript — Cours 122 (ESIG)

## Description
Site web de gestion de consommables RPG inspiré de mon jeu video que je suis entrain de faire.
J'ai choisi de gérer des ingrédients et recettes de cuisine façon jeu vidéo car je voulais un outil
qui me serve vraiment — la boutique d'items de mon jeu "Hunter Fantasy". Chaque ingrédient a des stats
(HP, MP, ATK, DEF, AGI) et un prix en Or, comme dans un vrai RPG.

## Lien GitHub Pages
https://nehemie-z.github.io/122-projet-perso-nehemie-zahrane/

## Dépôt GitHub
https://github.com/nehemie-z/122-projet-perso-nehemie-zahrane/

## Fonctionnalités
- [x] Affichage dynamique de la liste (cartes avec image, nom, catégorie, stats RPG)
- [x] Tri par prix (ascendant / descendant)
- [x] Recherche en temps réel par nom
- [x] Filtrage par catégorie (Soin, Buff, Feu, Glace, Vitesse, Eau, Snack, Spécial)
- [x] Ajout d'un ingrédient via formulaire avec drag & drop d'image
- [x] Suppression avec confirmation
- [x] Modification inline directement sur la carte
- [x] Livre de recettes (combinaisons d'ingrédients → plat)
- [x] Notifications visuelles (toast) à chaque action
- [x] Responsive (mobile + desktop)

## Captures d'écran

### Onglet Ingrédients
<img width="1887" height="944" alt="image" src="https://github.com/user-attachments/assets/4e2fcbc9-0cd2-4743-8edf-3d4f5f7739d9" />


### Livre de Recettes
<img width="1871" height="939" alt="image" src="https://github.com/user-attachments/assets/498ad6e0-2ad3-46f1-babe-b8e044c68286" />


### Formulaire d'ajout
<img width="542" height="567" alt="image" src="https://github.com/user-attachments/assets/089ab4e0-6baf-4592-9dc2-960eae5b17e7" />


## Transparence IA

### Outils utilisés
- Claude (Anthropic) — utilisé tout au long du projet


### Ce que j'ai fait avec l'IA

**CSS & Design**
J'ai beaucoup utilisé Claude pour le CSS car je voulais un résultat visuel professionnel.
Le site est directement lié à mon jeu RPG Maker MZ que je développe en parallèle,
donc l'esthétique comptait vraiment. Claude m'a aidé à construire les cartes horizontales avec barres de progression,
et le style général "jeu vidéo / restaurant".

**Correction de logique JS**
Sur la fonctionnalité de modification, ma première approche (réutiliser le formulaire d'ajout)
posait des problèmes de logique — le formulaire ne modifiait pas vraiment l'item existant.
Claude m'a proposé une alternative : un mini formulaire inline directement sur la carte,
ce qui était plus propre et plus intuitif pour l'utilisateur.

**Travail fait par moi**
- La structure des données (choix des stats, des catégories, des recettes)
- Le tableau des different ingrédients de la boutique 
- Les recettes et leur logique (combinaisons avec variantes)
- Affihage du tableau dans le code html
- Creation du formulaire d'ajout
- Une partie de la modification des carte

### Ce que j'ai appris ( code que je ne connaiaissait pas et donc demander à l'IA )
- Comment `splice` et `findIndex` fonctionnent ensemble pour supprimer proprement
- La différence entre `filter` (nouveau tableau) et `splice` (modification en place)
- Le système de drag & drop avec `FileReader` pour lire une image en base64
- Comment `closest()` permet de remonter dans le DOM depuis un bouton pour trouver la carte parente
Mets les 3 screenshots dans un dossier img/ à la racine de ton projet avec ces noms :
