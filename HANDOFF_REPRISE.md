# Handoff de reprise — Formation IA

## Point de départ

Le support actif est une présentation HTML de **90 slides**, numérotées sans rupture de `S001` à `S090`.

- Source éditoriale vivante : [Google Sheet](https://docs.google.com/spreadsheets/d/1PJWUS38QZp2q6FE8EFy-O116gihoouQjB5s5FMSZEEw/edit)
- Présentation à ouvrir et à transmettre : `dist/Presentation_IA_complete.html`
- Dossier de travail : `C:\Users\Utilisateur\Downloads\Presentation_IA_sources\formation-ia-complete`

Le Google Sheet reste la source de vérité. Toute demande orale doit être traduite dans le Sheet, puis dans `deck.json` et dans le rendu HTML.

## Règles de continuité

1. Ne générer qu’un seul fichier de présentation : `dist/Presentation_IA_complete.html`.
2. Ne pas créer de variantes HTML parallèles ni conserver de copies de travail dans `dist`.
3. Ne supprimer une slide que sur instruction explicite. Lorsqu’une slide est ajoutée ou retirée, renuméroter l’ensemble du parcours dans le Sheet et dans `deck.json`.
4. Conserver la direction artistique éditoriale : fond ivoire, rail latéral, typographie serif forte, langage de presse ou de magazine. Les visuels du fleuve suivent la référence « Press / Magazine » du comparatif éditorial fourni par l’utilisateur.
5. Éviter les illustrations enfantines, les interfaces décoratives et les pictogrammes redessinés lorsqu’un logo officiel existe.

## État éditorial utile

- L’onglet de spécification unique du Sheet, `Slide Spec complet`, couvrait le parcours précédent jusqu’à `S087`. Dans cette copie locale, les slides ajoutées S052, S066 et S077 décalent les slides suivantes jusqu’à `S090`; la synchronisation de l’onglet reste à faire.
- `S019` est la question de transition **« Que veut dire G.P.T. ? »** ; `S020`, `S021` et `S022` déplient ensuite les lettres G, P et T.
- `S028` à `S031` montrent quatre cas de rédaction avec une table de contexte sans acronyme visible. La première ligne indique l’action attendue.
- `S032` rassemble ces quatre cas dans une matrice QQQCOP et la relie aux 5W journalistiques ainsi qu’aux repères d’Aristote : ethos, logos et pathos.
- La séquence Lenovo occupe `S056` à `S060`. Elle part des captures fournies par l’utilisateur et conduit vers une analyse argumentée.
- `S060` conclut le cas Lenovo. Son dernier bloc est **« Décision humaine »** : le LLM prépare l’analyse, la personne garde la décision et le contrôle.
- `S067` détaille la méthode de création d’un assistant : rôle, mission, connaissances, instructions et boucle Tester → Évaluer → Corriger → Tester.
- `S070` distingue l’assistant, unité de compétence, du projet, unité de contexte partagé.
- `S071` explique le déplacement du goulot d’étranglement vers le cadrage, le jugement et l’arbitrage ; les ratios 20/80 et 80/20 y sont explicitement pédagogiques.
- `S072` est **« Quatre façons de retrouver ou produire de l’information »**.
- `S037` et `S038` prolongent désormais les trois architectures par le comparatif des véhicules autour du LLM, puis par les ateliers qu’ils ouvrent.
- `S075` à `S077` rendent le métier visible, le transforment en graphe, puis répartissent les rôles entre code, LLM simple, agent et humain avant la boucle d’orchestration.
- Les comparatifs acteurs utilisent des logos officiels lorsqu’ils sont disponibles. Les slides consacrées aux fichiers affichent des repères visuels pour les formats, notamment PDF, Excel, Word, TXT, CSV, JSON et Markdown.

## Éléments techniques à modifier selon le besoin

- `deck.json` : contenu normalisé, ordre des slides, notes et champs spécifiques aux layouts.
- `renderer.js` : composants et layouts déterministes.
- `style.css` : mise en page, typographie et corrections de lisibilité.
- `assets/` : images locales ; leur provenance est dans `asset-sources.json`.
- `build.mjs` : produit l’unique HTML dans `dist/`.

Après toute modification locale, reconstruire avec `node build.mjs`.

## Prochaine priorité

Poursuivre la revue slide par slide à partir des retours de l’utilisateur, en contrôlant à chaque correction : lisibilité à l’écran, absence de chevauchement, continuité pédagogique avec la slide précédente et la suivante, et cohérence avec la direction artistique éditoriale.

Avant d’intervenir sur un comparatif, vérifier l’actualité des fonctionnalités, noms de produits et logos dans le `Référentiel acteurs` du Sheet.
