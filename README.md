# 3c des 3 caps – Backend Strapi

Backend Strapi pour l’application web et mobile de l’association « 3c des 3 caps », active auprès des hôpitaux de la Côte d’Opale. L’application sert de classeur numérique pour informer les patients sur les soins, services, parcours et ressources locales.

## Aperçu du projet
- Basé sur Strapi v5 (TypeScript), Node 20–24.
- Expose les contenus des fiches, sections, hôpitaux, liens externes, tags et catégories pour les clients web et mobiles.
- Admin personnalisable côté Strapi pour la saisie des contenus par l’équipe 3c.

## Structure
- `src/index.ts` : point d’entrée Strapi.
- `src/api/*/content-types/*/schema.json` : définitions des contenus (fiche, section, hospital, category, tag, external-link).
- `config/*.ts` : configuration serveur, plugins, middlewares, base de données.
- `src/admin` : overrides/admin front; `types/generated` : définitions générées (ne pas éditer).
- `public/` : actifs statiques; `dist/` : build généré.

## Démarrage rapide
1) Prérequis : Node 20+ et npm (utiliser le `package-lock.json`).
2) Installer : `npm install`.
3) Variables d’environnement (exemple `.env` minimal) :
```
HOST=0.0.0.0
PORT=1337
APP_KEYS=change-me-1,change-me-2
API_TOKEN_SALT=change-me
ADMIN_JWT_SECRET=change-me
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=3c
DATABASE_USERNAME=3c
DATABASE_PASSWORD=secret
```
4) Développer : `npm run develop` (watch/auto-reload).

## Scripts utiles
- `npm run develop` : serveur Strapi en mode dev.
- `npm run start` : mode production (nécessite un build préalable).
- `npm run build` : build du panel admin.
- `npm run console` : console Strapi pour scripts ponctuels.
- `npm run deploy` : déploiement via Strapi Cloud (si configuré).
- `npm run upgrade` / `npm run upgrade:dry` : mise à jour Strapi (dry-run disponible).

## Tests et qualité
- Aucun jeu de tests livré. Ajouter des tests (Jest ou intégration) pour tout nouveau contrôleur/service et les placer près des sources ou dans `tests/`.
- Avant une PR, vérifier manuellement les parcours admin et API exposées (collections listées ci-dessus).

## Licence
Sous licence Apache 2.0. Voir `LICENSE` pour les conditions. Merci de ne pas inclure de secrets ou de données patients dans le dépôt.
