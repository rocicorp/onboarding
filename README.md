# Onboarding

This repo is a small, self-contained playground for the Zero [installation](https://zero.rocicorp.dev/docs/install) and [deploy](https://zero.rocicorp.dev/docs/deploy) guides. It’s meant for experimenting when wiring Zero into your own project would be too much work.

## Branches

- `0-start`: starting point (intentionally incomplete; you'll see `TODO`s).
- `1-install`: end state after completing the installation guide ([view `1-install` on GitHub](../../tree/install), or `git switch 1-install`).
- `2-deploy`: final state after adding Docker Compose ([view `2-deploy` on GitHub](../../tree/deploy), or `git switch 2-deploy`).

## Repo tour

- `apps/web`: TanStack Start app (UI + API routes).
- `packages/db`: Drizzle DB schema + Postgres migrations/seed data.
- `packages/zero`: Zero schema, queries, and mutators.

### Key files

- Drizzle schema: [packages/db/src/drizzle.ts](packages/db/src/drizzle.ts)
- Seed data: [packages/db/migrations/1111_music_seed_data.sql](packages/db/migrations/1111_music_seed_data.sql)
- Zero schema (generated on `maximal`): [packages/zero/src/schema.ts](packages/zero/src/schema.ts)
- Queries + mutators: [packages/zero/src/queries.ts](packages/zero/src/queries.ts), [packages/zero/src/mutators.ts](packages/zero/src/mutators.ts)
- Query/mutate endpoints: [apps/web/src/routes/api/query.ts](apps/web/src/routes/api/query.ts), [apps/web/src/routes/api/mutate.ts](apps/web/src/routes/api/mutate.ts)
- Example client usage: [apps/web/src/routes/index.tsx](apps/web/src/routes/index.tsx)

## Run it (optional)

Prereqs: Bun + Docker.

- Install deps: `bun install`
- In one terminal, start Postgres (includes schema + seed data): `cd packages/db && docker compose up`
- In another terminal, start the web app: `cd apps/web && bun dev`

On `maximal`, also run the `zero-cache-dev` command from the Installation guide (the example app expects Zero at `http://localhost:4848`).

## Trying your own schema

If you want a working baseline to modify, start from `maximal`, then:

- Edit `packages/db/src/drizzle.ts`
- Re-generate the Zero schema: `cd packages/zero && bun run generate`
