# Zero Music

This repo is a small, self-contained playground for the Zero [tutorial](https://zero.rocicorp.dev/docs/tutorial).

## Branches

- `0-start`: starting point (intentionally incomplete; you'll see `TODO`s - [view `0-start` on GitHub](https://github.com/rocicorp/zero-music/tree/0-start), or `git switch 0-start`)..
- `1-install`: end state after completing the installation guide ([view `1-install` on GitHub](https://github.com/rocicorp/zero-music/tree/1-install), or `git switch 1-install`).
- `2-deploy`: final state after adding Docker Compose ([view `2-deploy` on GitHub](https://github.com/rocicorp/zero-music/tree/2-deploy), or `git switch 2-deploy`).

## Repo tour

- `apps/web`: TanStack Start app (UI + API routes).
- `packages/db`: Drizzle DB schema + Postgres migrations/seed data.
- `packages/zero`: Zero schema, queries, and mutators.

### Key files

- Drizzle schema: [packages/db/src/drizzle.ts](packages/db/src/drizzle.ts)
- Seed data: [./migrations/0000_seed_music.sql](migrations/0000_seed_music.sql)
- Zero schema: [packages/zero/src/schema.ts](packages/zero/src/schema.ts)
- Queries + mutators: [packages/zero/src/queries.ts](packages/zero/src/queries.ts), [packages/zero/src/mutators.ts](packages/zero/src/mutators.ts)
- Query/mutate endpoints: [apps/web/src/routes/api/query.ts](apps/web/src/routes/api/query.ts), [apps/web/src/routes/api/mutate.ts](apps/web/src/routes/api/mutate.ts)
- Example client usage: [apps/web/src/routes/index.tsx](apps/web/src/routes/index.tsx)

## Run it (optional)

Prereqs: Bun + Docker.

- Copy env file: `cp .env.example .env`
- Install deps: `bun install`
- In one terminal, start Postgres (includes schema + seed data): `docker compose up`
- In another terminal, start the web app: `bun dev`

On `1-install`, the `zero-cache-dev` command will also be run when you run `bun dev`. It defaults to running on `http://localhost:4848` but can be configured via the `VITE_ZERO_SERVER` environment variable.
