# Formation IA pour l’entreprise

118 slides HTML : contenu historique du Google Sheet, complété par 8 slides sur les biais cognitifs insérées après S044 (S045 à S052), les 18 slides de méthode suivent en S092 à S109, puis une clôture en S118. Les numéros suivent l’ordre de présentation sans rupture.

## Consultation en ligne (GitHub Pages)

Le dépôt contient les sources et les validations ; le fichier HTML autonome est reconstruit par GitHub Actions car il dépasse la limite GitHub de 100 Mo pour un fichier Git classique. Après le premier push, ouvrir **Settings → Pages** du dépôt et choisir **GitHub Actions** comme source. Chaque push sur `main` exécute le build, les contrôles, puis publie la présentation à l’adresse :

`https://yvesfrerot.github.io/AI_trainning_support/`

Le lien devient consultable dès que le workflow « Deploy training to GitHub Pages » a réussi. Pour diffuser une nouvelle version, il suffit de pousser sur `main`.

## Utilisation locale

Ouvrir dist/Presentation_IA_complete.html dans un navigateur. C’est l’unique version de présentation à utiliser : elle contient toutes les images et polices dans un seul fichier. Le tutoriel Optimum Prompt de la slide S078 est un fichier séparé, copié dans dist/ à côté de la présentation lors du build ; conserver les deux fichiers ensemble pour une utilisation locale. Aucun CDN ni requête distante n’est nécessaire au rendu. Les liens vers les autres sources s’ouvrent sur le web.

Flèches, Espace ou PageDown/PageUp : navigation. F : plein écran. P : participant. N : formateur. O : sommaire. L : pointeur. B : masquer. Échap : fermer le panneau. Les réponses des exercices apparaissent progressivement. Le sommaire recherche un titre, un sujet ou un identifiant Sxxx. Les comparatifs affichent jusqu’à six acteurs par page et les onze acteurs en détail.

## Contenu maintenable

- deck.json : contenu normalisé, notes, enseignement, références, thème et spécifications.
- Le Google Sheet source reste la référence éditoriale vivante pour le contenu d’origine. Les slides S092 à S109 reprennent le document fourni `methodologie_ia_18_slides_codex.md` ; deck.json contient la version intégrée.
- renderer.js : composants de rendu déterministes.
- style.css : charte éditoriale 16:9, rail, couleurs, hiérarchie et responsive.
- template.html : interface navigateur et modes participant / formateur.
- assets/ : images, polices et licences locales.
- asset-sources.json : provenance et SHA-256 des ressources.

Après une modification de deck.json, renderer.js ou style.css : `node build.mjs`. Pour vérifier le package : `node check.mjs`. Le build remplace l’unique fichier de présentation dist/Presentation_IA_complete.html. Node 18 ou ultérieur suffit. Aucun package externe n’est nécessaire.

Le thème se configure dans deck.json : client, accent, et nom. La structure reste identique. L’interface permet d’essayer une couleur et d’exporter les données du thème.

## Mise à jour

Les concepts stables V0 ne sont pas régénérés. Les chiffres V2 et comparatifs V3/V4 doivent être actualisés par diff / patch. Conserver pour chaque changement l’ancienne valeur, la nouvelle, la source, la date, la slide concernée et la décision humaine. Vérifier les faits et les rendus avant publication. Les matrices retiennent la date de leur source (27/09/2026, vocabulaire d’interface 01/10/2026) et ne prétendent pas à une vérification intégrale au jour du build.

Les courbes d’adoption de S005 reprennent les vecteurs de la figure 4.3.9 Stanford 2026. S006 utilise les séries fournies, confirmées par la figure détaillée du rapport. Le résumé web indique 70 % de GenAI en contradiction avec les 79 % du texte et de la figure détaillée ; le deck retient ces derniers. Les autres données montrent uniquement des valeurs documentées. Les années manquantes ne sont pas inventées.

La séquence Lenovo inclut les sept captures fournies par l’utilisateur ; les prix et conditions restent présentés comme des éléments de ce cas pédagogique, non comme une offre actuelle. Les exemples de tables Excel et de dé-identification sont pédagogiques.

## Intégration au site décrit dans Audits.md

Le dossier est prêt pour `src/audits/tuto/2026-formation-ia-fr/` : index.html, metadata.json, assets/ et asset-sources.json. Le type est tutorial, langue fr et statut published pour la validation / prévisualisation locale. Ce statut ne signifie pas que le support est déjà publié.

Dans le dépôt cible, suivre Audits.md : audit:validate, build, test, revue navigateur avec ressources externes bloquées, puis commit des sources et de dist/ et push. Aucun dépôt ni accès de publication n’a été fourni dans cette demande. Le package livré n’a pas été déployé.

## Sources de production

Google Sheet (source de vérité vivante) : https://docs.google.com/spreadsheets/d/1PJWUS38QZp2q6FE8EFy-O116gihoouQjB5s5FMSZEEw/edit
La Bible de production V1 décrit les règles de conception et de maintenance ; elle ne remplace pas le contenu à jour du Sheet. Aucun instantané du Sheet n’est conservé dans ce dossier.
