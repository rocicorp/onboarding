# Onboarding

This repo is a small, self-contained playground for the Zero [installation guide](https://zero.rocicorp.dev/docs/install). It’s meant for experimenting when wiring Zero into your own project would be too much work.

## Branches

- `main`: starting point (intentionally incomplete; you'll see `TODO`s).
- `maximal`: finished end state after completing the guide ([view on GitHub](../../tree/maximal), or `git switch maximal`).

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
