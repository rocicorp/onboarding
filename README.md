# Onboarding

This repo is the sample referenced in the [add to existing project](https://zero.rocicorp.dev/docs/add-to-existing-project) documentation. It is a simple integration between Zero, Tanstack Start, and Drizzle.

- **Seed data**: [packages/db/migrations/1111_music_seed_data.sql](packages/db/migrations/1111_music_seed_data.sql)
- **Drizzle schema**: [packages/db/src/drizzle.ts](packages/db/src/drizzle.ts) (tables + relationships)
- **Zero schema**: [packages/zero/src/schema.ts](packages/zero/src/schema.ts) (built from Drizzle via `bun --filter @zero-onboarding/zero generate`)
