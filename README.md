# Destins — Biographies de personnalités

Site statique (HTML/CSS/JS, sans dépendances) qui présente les biographies de
personnalités africaines et internationales, chacune racontée en chapitres.

## Structure

- `index.html` + `home.js` — accueil : galerie, recherche, filtres région / domaine
- `bio.html` + `bio.js` — page biographie générique (`bio.html?id=angelique-kidjo`)
- `data.js` — **toutes les biographies** (le seul fichier à modifier pour le contenu)
- `style.css` — design (chaque personnalité a sa couleur `accent`)
- `render.yaml` — configuration Render

## Ajouter une personnalité

1. Ouvrir `data.js`.
2. Copier un bloc `{ ... },` existant et le coller à la fin de la liste.
3. Changer `id` (unique, sans accent ni espace), `nom`, `region` (`Afrique` ou
   `International`), `domaine`, les chapitres, les dates, etc.
4. **Photos** : prendre des images libres de droits sur https://commons.wikimedia.org
   (ou sur la page Wikipédia de la personne : cliquer sur la photo → « Plus de détails »).
   Renseigner `photo` et `galerie` avec le lien de l'image, l'auteur et la licence.
5. **Vidéos** : copier l'identifiant YouTube (ce qui suit `v=` dans l'adresse) dans `videos`.
   Privilégier les chaînes officielles (artiste, fondation, chaîne TV, Prix Nobel…).
6. **Sources** : ajouter des liens `{ titre, url }` vers des sites fiables.

Elle apparaît automatiquement sur l'accueil, avec les bons filtres.

## Tester en local

```bash
python -m http.server 8080
```
puis ouvrir http://localhost:8080

## Déployer sur Render

1. Pousser ce dossier sur un dépôt GitHub :
   ```bash
   git init
   git add .
   git commit -m "Site Destins"
   git branch -M main
   git remote add origin https://github.com/<ton-compte>/destins.git
   git push -u origin main
   ```
2. Sur https://dashboard.render.com : **New → Blueprint**, choisir le dépôt
   (ou **New → Static Site**, Build Command vide, Publish Directory `.`).
3. Chaque `git push` met le site à jour automatiquement.
