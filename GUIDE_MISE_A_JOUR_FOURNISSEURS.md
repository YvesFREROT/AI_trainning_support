# Actualiser les informations des fournisseurs d’IA

Ce guide décrit le fonctionnement préparé le 19 octobre 2026. La veille mensuelle recherche les nouveautés utiles au cours ; Yves ou Jérémy examine les propositions, puis Yves valide la publication. L’objectif est de conserver des supports fiables, avec des sources consultables.

## Parcours d’une nouveauté

1. Repérer une information susceptible de changer le cours et consulter une source officielle. Relever sa date, les pays et les comptes concernés, ainsi que les limites connues.
2. Comparer cette information avec le tableau Google de référence et la présentation. Préparer une proposition indiquant l’ancien texte, le nouveau texte, les diapositives concernées et le lien vers la source.
3. Présenter la proposition à Yves. Une nouveauté n’est pas publiée automatiquement : la validation reste humaine.
4. Après validation, reporter les modifications dans les emplacements concernés : tableau Google, données détaillées, résumé projeté, notes et sources. Les contrôler ensemble : une modification peut concerner plusieurs sujets.
5. Construire une version de contrôle, vérifier l’affichage et les liens, puis publier uniquement la version approuvée. Conserver la possibilité de revenir à la précédente version.

Une source inaccessible ne prouve pas qu’il n’y a pas de nouveauté. La date « vérifié le » ne doit pas laisser croire que tous les sujets d’un fournisseur ont été vérifiés lorsqu’un seul point l’a été.

## Où se trouvent les informations de la présentation ?

Les textes courts des tableaux sont rassemblés dans `deck.json`, rubrique `actors.matrix_summaries`. Ils sont classés par sujet puis par fournisseur, au lieu d’être écrits dans le programme qui dessine la présentation. Cela aide à retrouver le bon texte et évite de l’attribuer au mauvais fournisseur si l’ordre de la liste change.

| Sujet dans les données | Diapositive | Exemple de contenu |
|---|---|---|
| `vehicle` | S037 | Environnement et offre du fournisseur |
| `profile` | S060 | Personnalisation et profil |
| `assistant` | S077 | Assistant spécialisé et consignes réutilisables |
| `project` | S081 | Projet et contexte de travail |
| `agent` | S087 | Agents, tâches et déclenchement |
| `connector` | S115 | Connexions et accès aux services |
| `lexicon` | Prévu pour un éventuel comparatif lexical | Termes utilisés pour la recherche, les documents et le code |

Les fiches détaillées restent dans `actors.rows` et sont affichées dans le panneau « Approfondir ». Les titres, notes du formateur, textes pédagogiques et sources propres aux diapositives restent dans `slides`. Le tableau Google reste une référence distincte. **Ces éléments ne sont pas encore reliés automatiquement : il faut vérifier et actualiser chacun des emplacements concernés.**

## Contrôles techniques

Les contrôles techniques vérifient que chaque thème possède un résumé complet pour chacun des fournisseurs, sans nom oublié ou inconnu, ainsi que la pagination définie pour les tableaux. Ils détectent des données manquantes ; ils ne garantissent ni l’exactitude factuelle ni la cohérence avec Google Sheets. Avant la publication de cette amélioration, une comparaison avec la version précédente a également vérifié les six comparatifs, leurs 19 sous-pages et leurs détails.

## Ce qui reste à construire

- Une comparaison assistée entre le tableau Google, les fiches détaillées, les résumés, les notes et les sources, avec des différences à examiner.
- Une manière simple pour Yves et Jérémy de relire, valider et suivre chaque proposition.
- Le suivi des premières exécutions de la veille mensuelle et de la couverture réelle des onze fournisseurs.
- Les variantes graphiques et, ultérieurement, l’essai PostgreSQL envisagé. Le changement présent ne constitue pas une migration vers PostgreSQL.
