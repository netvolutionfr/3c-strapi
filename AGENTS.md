# Repository Guidelines

## Project Structure & Module Organization
- Runtime entry lives in `src/index.ts`; environment configuration sits under `config/*.ts` (server, plugins, middlewares, database, admin).
- Content types reside in `src/api/<collection>/content-types/<collection>/schema.json` (e.g., `tag`, `fiche`, `hospital`, `category`, `section`, `external-link`). Extend with Strapi generators to keep schemas coherent.
- Admin customizations live in `src/admin` (Vite and app examples); generated TypeScript defs are in `types/generated`—do not hand-edit.
- Static assets go in `public/`; built output is written to `dist/` and should not be edited directly.

## Build, Test, and Development Commands
```bash
npm run develop   # Start Strapi with auto-reload for local work
npm run start     # Start in production mode (uses built admin)
npm run build     # Build the admin panel
npm run console   # Open the Strapi console for ad hoc data/tasks
npm run deploy    # Deploy via Strapi Cloud (if configured)
npm run upgrade   # Upgrade Strapi to the latest compatible version
npm run upgrade:dry  # Preview the upgrade without applying changes
```
Use Node 20–24 (see `package.json` engines). Prefer `npm` to stay consistent with the lockfile.

## Coding Style & Naming Conventions
- TypeScript first; keep 2-space indentation, single quotes, and trailing semicolons to match existing config files.
- Name content-type folders in kebab-case and align collection names with API routes.
- Prefer Strapi helpers/services over ad hoc DB calls; keep environment access centralized in `config`.

## Testing Guidelines
- No automated suite is present. When adding custom controllers, services, or lifecycles, add Jest or integration tests near the feature or under `tests/` (new) and run them before opening a PR.
- For manual verification, run `npm run develop` and exercise the relevant collection types and admin screens; capture screenshots for UI-facing changes.

## Commit & Pull Request Guidelines
- Adopt Conventional Commits (`feat:`, `fix:`, `chore:`, `refactor:`) to keep history readable in the absence of an existing pattern.
- Commits should be scoped and minimal; avoid bundling schema changes with unrelated config updates.
- PRs: include a short summary, link to the related issue/ticket, list build/test steps taken (or note if no tests exist), and attach screenshots for admin/UI adjustments. Highlight any migration or environment variable changes.

## Security & Configuration Notes
- Keep secrets in `.env` and never commit them. Ensure `APP_KEYS`, `API_TOKEN_SALT`, and DB credentials are set per environment.
- Rebuild (`npm run build`) after changing environment-dependent admin settings to validate production readiness.
