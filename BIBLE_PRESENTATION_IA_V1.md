# BIBLE DE PRODUCTION — FORMATION IA
## Version 1.0 — Harness éditorial, pédagogique, graphique et industriel

> **Statut** : document de référence du projet.
> 
> **But** : permettre à une nouvelle conversation ChatGPT, à Work, à un agent ou à une équipe de reprendre la production de la formation sans perdre les décisions, les principes, les erreurs évitées, ni le niveau graphique validé.
>
> **Règle fondamentale** : ce document ne remplace pas le Google Sheet source. Il complète le Sheet en décrivant **comment interpréter, produire, maintenir et faire évoluer** la présentation.

---

# 1. OBJECTIF DU PROJET

Construire une formation IA en HTML, vivante, maintenable et régulièrement actualisable, sans dépendre de Google Slides ou PowerPoint.

La présentation doit :

- être projetable en 16:9 ;
- fonctionner dans un navigateur ;
- être pilotable clavier / souris ;
- pouvoir être mise à jour toutes les deux à trois semaines ;
- intégrer des contenus stables et des contenus volatils ;
- conserver une cohérence pédagogique malgré les mises à jour ;
- proposer un mode projection très lisible et un mode participant plus riche ;
- accepter plusieurs identités clients via des thèmes ;
- être produite par une chaîne structurée et non par génération libre de HTML slide par slide.

Le projet doit aboutir à une **usine de présentation** et non à un deck figé.

---

# 2. SOURCE DE VÉRITÉ

## Google Sheet principal

Titre : `Methode pedagogique formation`

URL :
`https://docs.google.com/spreadsheets/d/1PJWUS38QZp2q6FE8EFy-O116gihoouQjB5s5FMSZEEw/edit`

Onglets importants :

1. `Plan`
2. `Detail`
3. `Référentiel acteurs`
4. `Slides - Speaker & Visuels`
5. `Blueprint DA`
6. `Slide Spec 57-71`
7. `Design System V1`
8. `Slide Spec 4-16`

## Rôle des onglets

### `Slides - Speaker & Visuels`
Source éditoriale principale.

Colonnes structurantes :

- contenu original ;
- thème / titre ;
- texte du speaker ;
- description du visuel projeté ;
- enseignement pédagogique à retenir.

### `Référentiel acteurs`
Base de connaissance volatile du marché.

Doit alimenter :

- noms officiels des fonctions ;
- comparatifs fournisseurs ;
- disponibilité ;
- limites ;
- connecteurs ;
- agents ;
- projets ;
- assistants spécialisés ;
- date de vérification ;
- sources officielles.

### `Blueprint DA`
Couche de direction artistique et pédagogique générale.

Contient notamment :

- séquence ;
- rôle cognitif ;
- archétype ;
- densité ;
- système visuel ;
- média ;
- continuité ;
- volatilité ;
- instruction DA.

### `Slide Spec 57-71` et `Slide Spec 4-16`
Spécification de production détaillée.

Ces onglets font le pont entre l’intention pédagogique et le renderer HTML.

### `Design System V1`
Charte graphique et règles de production validées.

---

# 3. ARCHITECTURE GÉNÉRALE DE L’USINE

Chaîne cible :

```text
Google Sheet
    ↓
Content Normalizer
    ↓
Pedagogical Model
    ↓
Sequence Planner
    ↓
Art Director
    ↓
Slide Spec JSON
    ↓
Assets (SVG / DATA / PHOTO / GEN)
    ↓
HTML Renderer
    ↓
Screenshot / Visual QA
    ↓
Visual Critic
    ↓
Publication
```

## Principe majeur

L’IA ne doit **pas** générer directement le HTML final de manière libre.

Elle doit produire une structure contrôlée :

```text
intention → spec → composants → rendu déterministe
```

L’HTML est le résultat d’un moteur de rendu, pas d’un prompt improvisé.

---

# 4. CE QUI EST STABLE / CE QUI EST VOLATIL

## Pédagogie stable

Exemples :

- fonctionnement probabiliste ;
- importance du contexte ;
- différence entre prédiction et calcul ;
- anonymisation / pseudonymisation ;
- importance du contrôle humain ;
- décomposition des tâches ;
- principes de sécurité ;
- concept d’agent ;
- logique de harnais.

Ces éléments ne doivent pas être réécrits librement à chaque actualisation.

## Contenu lentement variable

Exemples :

- exemples d’entreprises ;
- outils open source ;
- cas d’usage ;
- chiffres historiques.

## Contenu volatile

Exemples :

- noms de produits ;
- fonctions ChatGPT / Gemini / Claude / Copilot ;
- interfaces ;
- connecteurs ;
- agents ;
- disponibilités ;
- limites ;
- prix ;
- modèles.

## Échelle de volatilité

- `V0` : concept intemporel
- `V1` : faible évolution
- `V2` : chiffres / données à rafraîchir
- `V3` : produits / fonctions à vérifier souvent
- `V4` : interfaces / noms très volatils

---

# 5. STRATÉGIE DE MISE À JOUR

Ne jamais régénérer tout le deck automatiquement.

Utiliser un modèle **diff / patch** :

1. charger le référentiel actuel ;
2. rechercher les changements ;
3. comparer ancienne / nouvelle information ;
4. identifier les slides impactées ;
5. proposer un patch ;
6. vérifier les faits ;
7. soumettre à validation humaine ;
8. reconstruire uniquement les composants concernés ;
9. lancer QA ;
10. republier.

## Change Report recommandé

Pour chaque cycle :

- changement détecté ;
- slide impactée ;
- ancien contenu ;
- nouveau contenu ;
- source ;
- date ;
- niveau de confiance ;
- décision : accepter / modifier / ignorer.

---

# 6. NARRATION GLOBALE DE LA FORMATION

Macro-récit :

```text
Une vague arrive
→ comprendre ce qu’elle est
→ comprendre le moteur
→ apprendre à le piloter
→ comprendre l’écosystème autour du moteur
→ sécuriser son usage
→ enrichir le contexte
→ passer de l’assistant à l’agent
→ industrialiser
→ mesurer la valeur
```

Cette narration doit rester perceptible dans le deck complet.

---

# 7. RÔLES COGNITIFS DES SLIDES

Enum recommandé :

- `PROVOKE`
- `QUESTION`
- `EXPLAIN`
- `PROVE`
- `COMPARE`
- `PRACTICE`
- `SYNTHESIZE`
- `TRANSITION`
- `REFERENCE`
- `CAUTION`
- `DECIDE`
- `CASE`

Avant tout choix visuel, demander :

> Quelle opération cognitive cette slide doit-elle provoquer ?

---

# 8. ARCHÉTYPES DE SLIDES

Archétypes contractuels :

- `H` — Hero
- `S` — Statement
- `Q` — Question
- `D` — Data Story
- `HS` — Historical Story
- `R` — Reveal
- `MM` — Mental Model
- `P` — Process
- `C` — Comparison
- `M` — Matrix
- `X` — Exercise
- `CS` — Case Study

La bibliothèque de composants doit couvrir ces rôles sans forcer toutes les slides dans un même gabarit.

---

# 9. SYSTÈMES VISUELS PERSISTANTS

Ne pas inventer une nouvelle métaphore à chaque slide.

Les six territoires visuels principaux sont :

## 1. LA VAGUE

Concepts :

- adoption ;
- accélération ;
- diffusion ;
- croissance ;
- urgence.

## 2. LA FRONTIÈRE

Concepts :

- Pascaline ;
- Deep Blue ;
- AlphaGo ;
- déplacement des compétences confiées à la machine.

## 3. LE MOTEUR

Concepts :

- machine learning ;
- GPT ;
- tokens ;
- prédiction ;
- température ;
- probable vs calculé.

## 4. LA ROUTE

Concepts :

- règles ;
- code de la route ;
- outils ;
- sorties ;
- connecteurs ;
- destinations fonctionnelles.

## 5. LE FLEUVE

Concepts :

- contexte ;
- instructions permanentes ;
- prompt ;
- assistant spécialisé ;
- projet ;
- agent ;
- accès.

## 6. L’USINE

Concepts :

- agent codeur ;
- harnais ;
- workflow ;
- bureau d’études ;
- usine ;
- produit final.

---

# 10. RÈGLE DE CONTINUITÉ

Une slide ne doit jamais être conçue isolément.

Toujours regarder :

- la slide précédente ;
- la slide suivante ;
- la séquence entière ;
- le système visuel actif ;
- ce qui doit être conservé à l’écran ;
- ce qui doit apparaître ;
- ce qui doit disparaître.

Champs importants :

- `scene_id`
- `scene_state_before`
- `scene_state_after`
- `continuity`
- `animation`

Principe :

> L’unité de génération n’est pas la slide. L’unité de génération est la **séquence pédagogique**.

---

# 11. DIRECTION ARTISTIQUE VALIDÉE — OPTION A

La direction validée est une esthétique :

> **Editorial Magazine / Visual Journalism**

Inspirations fonctionnelles :

- presse premium ;
- data journalism ;
- Financial Times Visual Journalism ;
- The Pudding pour la narration visuelle ;
- Tahta / Slidev comme inspiration d’industrialisation, pas comme esthétique obligatoire.

## Important

Ne pas imiter une marque ou une publication.

Le style doit être original mais appartenir à la famille :

- papier clair ;
- typographie éditoriale forte ;
- compositions asymétriques ;
- données centrales ;
- annotations fines ;
- sources visibles ;
- sophistication par hiérarchie, pas par effets.

---

# 12. DESIGN SYSTEM V1

## Canvas

- format : 16:9 ;
- référence : 1920×1080 ;
- mode navigateur full-bleed ;
- la slide doit exploiter toute la surface visible ;
- éviter les grandes bandes noires inutiles autour du canvas.

## Fond

Paper :

`#F7F3EA` ou équivalent très proche.

Fond chaud, clair, légèrement texturé.

## Couleurs

- Ink : `#171717`
- Editorial Red : `#B4242A`
- Data Blue : `#2D6178`
- Sage : `#657461`
- Ochre : `#B4863D`
- Hairline : `#D8D0C4`

Une slide ne doit généralement pas avoir plus d’une couleur d’accent dominante.

## Typographie

### Titres / chiffres-clés

Serif éditoriale.

Référence retenue : Source Serif 4 / fallback Georgia.

### Labels / data / sources

Sans-serif nette.

Référence : Libre Franklin / fallback Arial/Helvetica.

## Hiérarchie

Titre : 50–80 px selon rôle.

Hero number : peut atteindre 150–220 px si c’est le point de lecture principal.

Source : petite mais lisible et discrète.

---

# 13. INTERDICTIONS GRAPHIQUES

Ne pas utiliser par défaut :

- cartes arrondies ;
- cards SaaS ;
- glassmorphism ;
- gradients décoratifs ;
- glow ;
- illustrations de robot ;
- cerveau lumineux ;
- circuits électroniques ;
- icônes décoratives ;
- grilles de trois cartes répétitives ;
- cadres lourds ;
- paragraphes projetés ;
- graphiques standards sans insight ;
- éléments ajoutés uniquement pour remplir le vide.

Règle :

> Le vide est utile s’il crée de la hiérarchie. Il est mauvais s’il révèle une composition pauvre.

---

# 14. DATA VISUALIZATION — RÈGLES CRITIQUES

Cette section est prioritaire : plusieurs itérations ont permis de fixer le niveau attendu.

## Le graphe doit être une scène visuelle centrale

Ne pas poser un graphique générique dans une moitié de slide.

Le graphique doit :

- porter le message ;
- avoir une hauteur suffisante ;
- avoir une trajectoire expressive ;
- rendre la différence visible sans lire tous les chiffres ;
- présenter peu d’annotations ;
- intégrer directement les labels utiles ;
- éviter les légendes distantes quand possible.

## Hiérarchie attendue en 2 secondes

1. message principal ;
2. chiffre-clé ;
3. graphe ;
4. informations secondaires ;
5. source.

## Ce qu’il faut éviter

- lignes horizontales plates pour remplacer une vraie trajectoire ;
- graphes enfantins ;
- petits graphes écrasés ;
- labels posés sur les courbes ;
- labels posés directement sur les points ;
- annotations qui se croisent ;
- encadrés multiples ;
- mini-paragraphes autour du graphique ;
- grille plus forte que les données.

## Labels de points

Pour un milestone :

- aligner le label avec le point ;
- le décaler latéralement ;
- ne jamais superposer texte et courbe ;
- ne jamais superposer texte et point ;
- garder une distance suffisamment courte pour comprendre l’association.

## Échelle logarithmique

Si utilisée :

- l’indiquer explicitement ;
- expliquer pourquoi ;
- ne pas employer de jargon inutile ;
- faire comprendre qu’on traverse plusieurs ordres de grandeur.

---

# 15. SOURCES ET HYPERLIENS

Chaque slide factuelle doit avoir une source visible.

La source doit être :

- officielle si possible ;
- accessible publiquement ;
- cliquable ;
- en ligne ;
- partageable indépendamment du poste local.

Ne jamais pointer vers :

- un PDF local ;
- un chemin `C:\Users\...` ;
- un fichier téléchargé sur l’ordinateur du présentateur.

Préférer la page officielle du rapport ou du chapitre.

Exemple validé :

Stanford HAI — AI Index Report — page web officielle.

---

# 16. SLIDES 4 À 10 — ÉTAT VALIDÉ / LEÇONS

Cette séquence sert désormais de référence visuelle pour la suite.

## Slide 4 — Surfeur

Message :

> On n’apprend pas à surfer depuis la plage.

Règles :

- photo forte ;
- titre uniquement ;
- supprimer les explications du type “slide métaphorique” ;
- aucune justification pédagogique projetée ;
- ne pas ajouter de source chiffrée ;
- installer l’urgence par l’image et la phrase.

## Slide 5 — Adoption GenAI

Référence esthétique la plus aboutie.

À conserver :

- full-bleed ;
- titre serif fort ;
- 53 % / 3 ans ;
- vrai graphe à trajectoires ;
- grandes courbes ;
- hiérarchie nette ;
- source cliquable ;
- respiration ;
- pas de superposition.

Corrections apprises :

- le signe `%` doit être aligné ;
- `3 ans` doit être suffisamment séparé du 53 % ;
- texte secondaire doit respirer ;
- éviter toute collision de labels.

## Slide 6 — IA en entreprise

Deux courbes :

- rouge : IA utilisée dans au moins une fonction ;
- bleue : GenAI.

L’intérêt pédagogique de la courbe GenAI doit être explicitement compréhensible :

> Elle montre que 2023–2025 constitue une rupture : un nouvel usage rattrape très rapidement le niveau de l’IA installée au sens large.

Ne pas laisser l’audience se demander pourquoi il y a deux courbes.

## Slide 7 — Investissements

Message :

> après 2022, changement d’ordre de grandeur.

Décisions validées :

- supprimer la ligne noire du graphe de gauche ;
- supprimer `Avant · signal faible` ;
- conserver `Après · changement de régime` ;
- laisser respirer `33,9 Md$` ;
- ne pas coller le texte descriptif au chiffre ;
- éviter que les labels / courbes / textes se croisent.

## Slide 8 — Production scientifique

État jugé clair.

Ne pas modifier sans raison.

## Slide 9 — Datasets d’entraînement

Message : changement d’ordre de grandeur.

Décisions validées :

- échelle logarithmique ;
- texte clair sur le saut d’échelle ;
- supprimer les lignes décoratives inutiles sous le texte ;
- labels sur la même ligne horizontale que leur point ;
- labels décalés latéralement ;
- jamais sur le point ;
- jamais sur la courbe.

Milestones :

- Transformer ≈ 2 Md tokens ;
- GPT‑3 ≈ 374 Md ;
- Llama 3.3 ≈ 15 000 Md.

## Slide 10 — Brevets

Clôture de la séquence de preuves.

Doit donner une sensation de synthèse, pas simplement “un graphique de plus”.

---

# 17. RYTHME DU DECK

Le deck ne doit jamais devenir monotone.

Alterner :

```text
émotion
→ preuve
→ preuve
→ respiration
→ question
→ explication
→ photographie
→ comparaison
→ exercice
→ synthèse
```

## Exemple 4–16

- 4 : Hero photographique
- 5–10 : Data stories variées
- 11 : Question quasi vide
- 12 : Statement quasi vide
- 13–15 : Série historique répétée volontairement
- 16 : comparaison / rupture de layout

La répétition est acceptable uniquement quand elle sert un message pédagogique explicite.

---

# 18. DENSITÉ

Niveaux :

- `XS` : quasi vide
- `S` : très léger
- `M` : explicatif
- `L` : référence dense

Une séquence doit alterner les densités.

Ne jamais avoir six slides `M` identiques de suite.

---

# 19. MODE PROJECTION VS MODE PARTICIPANT

## Projection

Le participant doit comprendre immédiatement :

> qu’est-ce que je regarde ?

Règles :

- peu de texte ;
- gros message ;
- grande lisibilité ;
- aucune matrice exhaustive ;
- sources discrètes ;
- animation utile seulement.

## Participant

Peut contenir :

- explication complète ;
- définitions ;
- sources ;
- liens ;
- matrice complète ;
- limites ;
- disponibilité ;
- date de vérification ;
- détails fournisseurs.

Dans l’HTML, le mode participant pourra s’ouvrir via `Approfondir`.

---

# 20. MATRICES ACTEURS

Ne jamais projeter une grande matrice complète si elle est illisible.

Mode projection :

- 3–5 acteurs ;
- 3–4 dimensions ;
- highlight guidé par le speaker ;
- une question précise.

Mode participant :

- matrice complète ;
- sources officielles ;
- date de vérification ;
- statut par cellule ;
- limites.

Les slides comparatives produits sont généralement `V3` ou `V4`.

---

# 21. VISUAL QA — OBLIGATOIRE AVANT LIVRAISON

Aucune slide ne doit être livrée uniquement parce que le HTML fonctionne.

Avant livraison :

## Contrôle 1 — rendu navigateur

Tester :

- écran standard ;
- fenêtre Chrome avec barres visibles ;
- plein écran ;
- ratio paysage.

## Contrôle 2 — aucun chevauchement

Vérifier :

- titre ;
- chiffres ;
- labels ;
- points ;
- courbes ;
- annotations ;
- source ;
- boutons.

## Contrôle 3 — lecture à distance

À 5 mètres :

- titre ;
- chiffre ;
- insight ;
- forme du graphe.

## Contrôle 4 — test 2 secondes

Demander :

> En deux secondes, qu’est-ce que je comprends ?

Si la réponse n’est pas évidente, simplifier.

## Contrôle 5 — planche contact

Regarder 6 à 12 slides ensemble.

Détecter :

- monotonie ;
- répétition ;
- densité ;
- absence de respiration ;
- effets trop systématiques ;
- changement de DA involontaire.

---

# 22. VISUAL CRITIC — CHECKLIST AUTOMATISABLE

Pour chaque slide, évaluer :

1. message compris en 5 secondes ?
2. titre lisible ?
3. insight principal identifiable ?
4. graphe utile ou décoratif ?
5. labels lisibles ?
6. collisions ?
7. marges cohérentes ?
8. source présente ?
9. source cliquable si factuelle ?
10. élément inutile ?
11. répétition excessive avec slides voisines ?
12. cohérence avec le système visuel ?
13. densité adaptée ?
14. projection possible à 5 m ?
15. aucun texte critique < 16 px environ en projection ?

Si score insuffisant : patch et rerender.

Maximum conseillé : 2–3 cycles automatiques avant revue humaine.

---

# 23. MÉDIAS

## PHOTO

Pour :

- scènes documentaires ;
- histoire ;
- personnes / événements ;
- ouverture émotionnelle.

Préférer :

- image réelle ;
- source explicite ;
- cadrage fort ;
- pas de stock corporate générique.

## GEN

Pour :

- métaphore visuelle conceptuelle ;
- scène impossible à photographier ;
- besoin spécifique non documentaire.

Ne jamais générer du texte dans l’image.

## SVG / HTML

Pour :

- diagrammes ;
- mental models ;
- processus ;
- routes ;
- fleuve ;
- usine ;
- comparaisons ;
- graphiques.

## DATA

Pour les graphes chiffrés.

Toujours séparer :

- données ;
- spec du graphique ;
- rendu visuel.

---

# 24. SÉQUENCE 57–71 — PRINCIPES IMPORTANTS

Cette séquence est le test principal de continuité narrative.

Règle :

> S057, S059, S068, S070 utilisent le même `RIVER_MASTER`.

La caméra et la topologie ne changent pas arbitrairement.

## États

### 57
Instructions permanentes = berges / panneaux.

### 59
Prompt = itinéraire / cargaison du voyage.

### 60
Contexte = matière première.

### 68
Assistant spécialisé = poste spécialisé au bord du fleuve.

### 70
Projet = bassin / salle de mission.

Slides comparatives 58 / 69 / 71 : overlays documentaires temporaires.

On revient ensuite à la carte conceptuelle.

---

# 25. SÉCURITÉ — TERRITOIRE VISUEL

Utiliser une logique :

- sas ;
- contrôle ;
- barrière ;
- vérification ;
- niveaux de conséquence.

Messages fondamentaux :

- convaincant ≠ vérifié ;
- pseudonymiser ≠ anonymiser ;
- donnée transmise ≠ donnée autorisée ;
- outil technique ≠ conformité organisationnelle.

---

# 26. AGENTS / HARNAIS / USINE

Narration recommandée :

```text
assistant
→ projet
→ agent
→ agent codeur
→ boucle contrôlée
→ harnais
→ bureau d’études
→ usine
→ produit
```

Le harnais n’est pas “un gros prompt”.

Il doit être représenté comme un environnement :

- mission ;
- règles ;
- fichiers ;
- outils ;
- permissions ;
- tests ;
- critères de réussite.

---

# 27. CONNECTEURS

Métaphore validée :

> un connecteur n’est pas une sortie d’autoroute ; c’est un badge qui permet d’ouvrir certaines portes.

Le connecteur porte :

- identité ;
- périmètre ;
- permissions ;
- validation ;
- traçabilité.

---

# 28. ROI / VALEUR

Ne pas réduire le coût de l’IA au prix des tokens.

Montrer :

- génération ;
- intégration ;
- temps humain ;
- contrôle ;
- erreurs ;
- maintenance ;
- gouvernance ;
- sécurité.

Clôture recommandée :

```text
AVANT
vs
AVEC IA
→ mesurer temps / qualité / erreurs / coût
→ décider
```

---

# 29. FORMAT DU SLIDE SPEC MACHINE

Champs recommandés :

```yaml
slide_id:
source_row:
sequence_id:
cognitive_role:
archetype:
density:
visual_system:
scene_id:
scene_state_before:
scene_state_after:
screen_primary:
screen_secondary:
composition:
objects:
visual_hierarchy:
media_assets:
animation:
interaction:
transition_in:
transition_out:
participant_detail:
volatility:
source_rule:
implementation_note:
```

---

# 30. HIÉRARCHIE DE DÉCISION DU DIRECTEUR ARTISTIQUE

Toujours dans cet ordre :

1. Que doit comprendre l’audience ?
2. Que doit-elle voir pour le comprendre ?
3. Existe-t-il déjà un système visuel adapté ?
4. Quel archétype convient ?
5. Quel média ?
6. Quelle composition ?
7. Quel niveau de densité ?
8. Quelle animation éventuelle ?
9. Quelle source ?
10. Quelle adaptation client ?

Ne jamais commencer par :

> “Quel joli layout peut-on faire ?”

---

# 31. PRINCIPE DE SOBRIÉTÉ

Une slide professionnelle n’est pas une slide vide.

Une slide professionnelle est une slide dans laquelle chaque élément a une fonction.

Éviter :

- l’espace vide non intentionnel ;
- le remplissage artificiel ;
- les micro-blocs ;
- la multiplication des annotations ;
- la décoration technique.

Chercher :

- tension ;
- hiérarchie ;
- respiration ;
- contraste ;
- alignement ;
- rythme.

---

# 32. RÈGLES DE NON-RÉGRESSION

Quand une slide a été validée, ne pas la réinterpréter librement lors d’une correction micro.

Si le feedback porte sur :

- un alignement ;
- une marge ;
- un label ;
- une source ;
- une ligne inutile ;

alors corriger uniquement cet élément.

Ne pas changer :

- concept graphique ;
- typographie ;
- proportions ;
- couleurs ;
- composition globale ;

sauf demande explicite.

Cette règle est cruciale.

---

# 33. RÈGLE DE FEEDBACK

Interpréter le feedback de manière littérale et cumulative.

Exemple :

Si le feedback dit :

> conserver le graphe du premier essai + occupation de l’espace du second

alors :

- ne pas refaire le concept ;
- ne pas remplacer les courbes par des barres ;
- ne pas ajouter de texte ;
- recomposer la grille uniquement.

Chaque nouvelle version doit préserver les acquis précédents.

---

# 34. PROTOTYPES VALIDÉS / FICHIERS DE RÉFÉRENCE

Les fichiers produits pendant le projet servent de références visuelles. Le Google Sheet est l’unique source de vérité pour le contenu des slides ; cette Bible décrit les règles de conception et de maintenance.

Références importantes :

- slide 5 full-bleed validée ;
- début de présentation slides 4–10 ;
- Design System V1 ;
- Slide Spec 4–16 ;
- Slide Spec 57–71.

La version la plus récente du bloc 4–10 contient plusieurs micro-corrections successives.

Avant de reprendre le projet dans un nouvel environnement, récupérer la dernière version HTML disponible si possible.

---

# 35. PLAN DE PRODUCTION RECOMMANDÉ À PARTIR DE MAINTENANT

## Phase 1 — Figer 4–10

Finir les micro-corrections jusqu’à validation définitive.

## Phase 2 — Produire 11–16

- 11 : Question quasi vide ;
- 12 : définition quasi vide ;
- 13–15 : série historique avec grammaire identique ;
- 16 : comparaison Deep Blue / AlphaGo.

## Phase 3 — Refaire 57–71 avec la DA validée

Abandonner l’ancien prototype graphique de cette séquence.

Réutiliser uniquement :

- le Slide Spec ;
- le principe du RIVER_MASTER ;
- la DA Option A désormais validée.

## Phase 4 — Revue des 25 premières slides

Créer une planche contact :

- rythme ;
- variété ;
- cohérence ;
- densité ;
- progression narrative.

## Phase 5 — Étendre les Slide Specs

Compléter le reste du deck.

## Phase 6 — Construire toute la bibliothèque de composants

Uniquement les composants réellement nécessaires.

## Phase 7 — Industrialiser

Créer :

- parser du Sheet ;
- Slide Spec JSON ;
- renderer ;
- source updater ;
- visual QA ;
- publication.

---

# 36. INSTRUCTIONS À UN NOUVEL AGENT / NOUVELLE CONVERSATION

Copier cette section comme prompt de démarrage :

---

## MISSION

Tu reprends un projet de formation IA déjà avancé.

Ta mission n’est pas d’inventer une nouvelle direction graphique.

Tu dois poursuivre la présentation en respectant :

1. le Google Sheet source ;
2. la Bible de production ;
3. le Design System V1 ;
4. les Slide Specs existants ;
5. les slides 4–10 comme référence de niveau graphique.

### Comportement attendu

- agir comme directeur artistique senior ;
- agir comme expert pédagogique ;
- agir comme data journalist ;
- agir comme architecte d’un système de production ;
- préserver les décisions validées ;
- ne jamais réinterpréter un feedback micro comme une autorisation de redesign ;
- contrôler visuellement chaque slide avant livraison ;
- ne jamais livrer un graphique avec collision, label illisible ou chevauchement ;
- ne jamais inventer des données ;
- utiliser des sources publiques et cliquables ;
- éviter la monotonie à l’échelle de la séquence ;
- conserver la cohérence de la charte.

### Avant chaque slide

Demander :

- quel est le rôle cognitif ?
- quel est le message en 2 secondes ?
- quelle est la slide précédente ?
- quelle est la suivante ?
- quel système visuel est actif ?
- quel élément doit dominer ?

### Avant livraison

Vérifier :

- aucun chevauchement ;
- aucune superposition ;
- aucun texte coupé ;
- aucun label sur une courbe ;
- aucune source locale ;
- aucun élément décoratif inutile ;
- lisibilité ;
- pleine utilisation du paysage ;
- cohérence de la série ;
- source officielle accessible.

---

# 37. COMMENT TRAITER LES DONNÉES MANQUANTES

Ne jamais inventer une courbe complète à partir de deux points sans l’indiquer.

Si les données sources sont insuffisantes :

- chercher la source officielle ;
- extraire les vraies valeurs ;
- ou représenter uniquement les points documentés ;
- ou signaler clairement “schéma illustratif”.

La crédibilité du deck est prioritaire sur la beauté graphique.

---

# 38. CLIENT BRANDING

L’identité client doit être un thème, pas un redesign.

Tokens :

- logo ;
- accent principal ;
- typographie si autorisée ;
- pied de page ;
- éventuellement photo d’ouverture.

La structure éditoriale reste identique.

---

# 39. QUALITÉ ATTENDUE

Le niveau cible n’est pas :

- “propre pour PowerPoint” ;
- “joli template” ;
- “présentation corporate standard”.

Le niveau cible est :

> une présentation éditoriale premium, comparable à un travail de visual journalism ou de grande rédaction, avec une narration pédagogique très maîtrisée.

Les slides doivent être :

- intelligentes ;
- lisibles ;
- expressives ;
- crédibles ;
- simples sans être naïves ;
- élégantes sans être décoratives ;
- cohérentes sans être monotones.

---

# 40. CRITÈRE FINAL

Une slide réussie répond à cette règle :

> Le participant comprend ce qu’il regarde avant que le speaker ait terminé sa première phrase.

Et une séquence réussie répond à celle-ci :

> Chaque slide paraît appartenir à la même publication, mais aucune ne donne l’impression d’être la copie mécanique de la précédente.

---

# 41. NEXT STEP RECOMMANDÉ

À partir de cette Bible :

1. terminer les micro-corrections de 4–10 ;
2. produire 11–16 dans la même DA ;
3. produire une planche contact 4–16 ;
4. valider la première grande séquence ;
5. refaire 57–71 avec le nouveau système ;
6. compléter les Slide Specs ;
7. industrialiser la génération.

Le présent fichier doit être versionné à chaque décision majeure :

- `V1.0` : état actuel ;
- `V1.1` : corrections 4–16 ;
- `V1.2` : validation 57–71 ;
- `V2.0` : pipeline industriel complet.

---

# 42. RECOMMANDATION D’ARCHITECTURE DOCUMENTAIRE

Ne pas tout mettre dans un unique prompt à terme.

Conserver trois artefacts :

## A. `BIBLE_PRESENTATION_IA.md`

Document humain complet.

## B. `presentation_design_contract.yaml`

Version courte et machine-readable :

- tokens ;
- interdictions ;
- composants ;
- règles de QA ;
- types de slides ;
- systèmes visuels.

## C. Google Sheet

Contenu éditorial et données source.

Ainsi :

```text
Google Sheet = QUOI
Bible = POURQUOI / COMMENT
YAML contract = CONTRAINTES MACHINE
Renderer = EXÉCUTION
```

C’est l’architecture recommandée pour confier ensuite la production à Work ou à un agent durable.

---

**Fin — Bible de production V1.0**
