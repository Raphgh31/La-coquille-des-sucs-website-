# La Coquille des Sucs — site internet

Nouveau site de **La Coquille des Sucs**, l'élevage d'escargots de Florian Peyroche à Yssingeaux (Haute-Loire).

C'est un site **statique** : de simples fichiers HTML, CSS et JavaScript, sans base de données ni outil à installer. On le modifie avec n'importe quel éditeur de texte, directement sur GitHub si besoin, et il s'héberge gratuitement.

> ⚠️ **Statut : ébauche.** Le site n'est pas indexé par Google : chaque page contient une balise `noindex`. Seules les personnes qui ont le lien peuvent le voir. Voir « Avant la mise en ligne définitive » plus bas.

---

## 1. Mettre le site en ligne (en deux clics)

Le site est prêt pour **GitHub Pages**.

1. Sur GitHub, ouvrez le dépôt, puis **Settings → Pages**.
2. Dans *Build and deployment*, choisissez **Source : Deploy from a branch**, **Branch : `main`**, dossier **`/ (root)`**, puis cliquez **Save**.

Une à deux minutes plus tard, le site est en ligne à l'adresse :

**https://raphgh31.github.io/La-coquille-des-sucs-website-/**

C'est ce lien que vous pouvez envoyer au gérant pour qu'il voie l'ébauche. Il s'ouvre dans n'importe quel navigateur, sur ordinateur comme sur téléphone, et le site n'apparaît pas dans les moteurs de recherche.

> GitHub Pages est gratuit pour un dépôt **public**. Si le dépôt est privé, il faut soit le passer en public (*Settings → General → Danger Zone → Change visibility*), soit avoir un compte GitHub Pro. Autre solution sans rien changer : glisser le dossier du site sur [app.netlify.com/drop](https://app.netlify.com/drop), qui donne aussi un lien de prévisualisation.

Chaque modification poussée sur `main` met automatiquement le site à jour.

---

## 2. Structure du site

| Page | Fichier | Contenu |
|---|---|---|
| Accueil | `index.html` | Présentation, chiffres clés, produits phares, où nous trouver, visites |
| L'élevage | `elevage.html` | Histoire de Florian, une saison à l'élevage, pourquoi le gros gris |
| Nos escargots | `produits.html` | Gamme par catégorie, commandes pour les fêtes, tarifs |
| Visites | `visites.html` | Déroulé d'une visite, infos pratiques, portes ouvertes |
| Où nous trouver | `points-de-vente.html` | Élevage, marché, magasins, carte dessinée du secteur |
| Contact & commandes | `contact.html` | Coordonnées et formulaire de message |
| Mentions légales | `mentions-legales.html` | Obligatoire en France (SIRET à compléter) |

```
assets/
  css/style.css   → toute la mise en forme (couleurs en haut du fichier)
  js/main.js      → menu mobile, transitions entre pages, formulaire
  img/            → photos et logo
```

**Choix de design**

- La palette vient directement du logo : brun escargot, vert prairie, fond crème « papier ». Le pied de page est couleur basalte, en clin d'œil à la pierre des sucs.
- La ligne de collines verte qui sépare les sections reprend les sucs dessinés sur le logo.
- Les photos sont présentées comme des tirages papier, avec ruban adhésif et légendes manuscrites. Cette mise en scène met en valeur des images de petite taille.
- Ce sont de vraies pages séparées, reliées par le menu du haut. Sur les navigateurs récents, la page glisse vers la gauche quand on avance dans le menu et vers la droite quand on recule.
- Le jour du marché et les jours de vente sont signalés automatiquement par une pastille « Aujourd'hui ».

---

## 3. Modifier le site

- **Un texte** : ouvrez le fichier `.html` de la page, cherchez la phrase, modifiez-la. Sur GitHub : cliquez sur le fichier, puis l'icône crayon ✏️, puis *Commit changes*.
- **Une photo** : déposez la nouvelle image dans `assets/img/` avec le même nom pour remplacer l'ancienne, ou changez le `src="assets/img/..."` dans la page. Format conseillé : JPG, environ 1200 px de large au maximum.
- **Un horaire ou un point de vente** : page `points-de-vente.html`. L'horaire apparaît aussi dans le bandeau de l'accueil (`index.html`, bloc « slate ») et dans la carte de contact (`contact.html`).
- **Le menu, le téléphone ou le pied de page** : ils sont répétés en haut et en bas de chaque page. Pensez à modifier les 7 fichiers (une recherche / remplacement suffit).
- **Les couleurs** : en haut de `assets/css/style.css`, bloc `:root`.

---

## 4. Avant la mise en ligne définitive

- [ ] Supprimer la ligne `<meta name="robots" content="noindex, nofollow">` dans les 7 pages, pour que Google puisse indexer le site.
- [ ] Compléter le **SIRET** dans `mentions-legales.html`.
- [ ] Brancher le nom de domaine **lacoquilledessucs.fr** : *Settings → Pages → Custom domain*, puis chez le registraire du domaine, faire pointer le DNS vers GitHub Pages (enregistrements A vers 185.199.108.153, .109, .110 et .111, ou CNAME `www` vers `raphgh31.github.io`). Récupérer d'abord les accès du domaine actuel, aujourd'hui sur un WordPress.
- [ ] Optionnel : remplacer le formulaire (qui ouvre la messagerie du visiteur) par un service d'envoi comme [Formspree](https://formspree.io) ou [Web3Forms](https://web3forms.com). Il suffit de changer l'attribut `action` du formulaire et de retirer `data-mode="mailto"`.
- [ ] Mettre à jour les liens d'aperçu Open Graph (`og:image`) avec l'adresse complète du site, pour que le partage sur Facebook affiche la photo.

---

## 5. Questions à poser à Florian

Le site a été rédigé à partir de l'ancien site, de la page Facebook, de l'article de *La Commère 43* et des fiches de Sucs & Loire Tourisme, Locavor et My Haute-Loire. Certains points sont à confirmer ou à compléter :

### Infos à vérifier (déjà sur le site)

1. **Vente à l'élevage** : est-ce toujours le lundi, mardi, mercredi et vendredi à partir de 18 h ? Cet horaire date d'une fiche de 2020.
2. **Marché d'Yssingeaux le jeudi matin** : toujours d'actualité ? Y a-t-il d'autres marchés (Monistrol, Le Puy, Retournac…) ?
3. **Magasins de producteurs** : en plus du *Panier Paysan* à Monistrol-sur-Loire, quels autres magasins vendent ses produits (Saveurs des Fermes d'Yssi ? autres ?) ? Adresses exactes ?
4. **Chiffres** : 270 m² de parcs et environ 70 000 escargots, ce sont les chiffres de la création en 2018. Ont-ils évolué ?
5. **Altitude** : 950 m (ancien site) ou 900 m (Locavor) ?
6. **Méthode d'élevage** : la reproduction se fait-elle sur place ? Eau de source et complément alimentaire bio, c'est exact ? La transformation se fait-elle dans un laboratoire à la ferme ?
7. **Calendrier de l'élevage** (page L'élevage, « Une saison au rythme des escargots ») : les périodes indiquées sont-elles justes ?

### Infos qui manquent

8. **La gamme complète** avec les formats et les poids : terrine au bleu, terrine bourguignonne, court-bouillon, brochettes panées… Que contenait la rubrique « Autres » de l'ancien site ?
9. **Les tarifs 2025-2026** : envoyer le PDF « Tarif particulier ». On pourra le mettre en téléchargement sur la page Nos escargots, ou afficher les prix directement.
10. **Les visites** : à quelle période de l'année ? Durée ? Prix (gratuit ou payant) ? Groupes et scolaires acceptés ? Y a-t-il une dégustation ?
11. **Portes ouvertes** : à quelle fréquence, à quelles dates ?
12. **Commandes pour les fêtes** : délai conseillé ? Livraison possible ou uniquement retrait ?
13. **Professionnels** : vend-il aux restaurants ou aux épiceries ?
14. **Labels ou distinctions** : Bienvenue à la ferme, marque Haute-Loire, concours… ?
15. **Instagram** : existe-t-il un compte, à ajouter à côté de Facebook ?
16. **SIRET** et statut juridique, pour les mentions légales.
17. **Plus de photos**, en bonne résolution : les parcs, Florian au travail, les produits cuisinés dans l'assiette, le paysage des sucs, une visite avec du public. Les photos actuelles sont petites (414 px), et de plus grandes permettraient des visuels plus larges.
18. **Une phrase de Florian** sur son métier, à citer sur la page L'élevage.
19. **Coordonnées GPS** de l'élevage ou un lien Google Maps exact, pour que l'itinéraire tombe pile au bon endroit.
