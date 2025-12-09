# Onboarding

Welcome to Zero!

You probably landed here from the [Installation](https://zero.rocicorp.dev/docs/install) docs.

This is a simple integration between Zero, Tanstack Start, and Drizzle.

Check out the main parts, and then head back to the doc:

- **Seed data**: [packages/db/migrations/1111_music_seed_data.sql](packages/db/migrations/1111_music_seed_data.sql)
- **Drizzle schema**: [packages/db/src/drizzle.ts](packages/db/src/drizzle.ts) (tables + relationships)
- **Zero schema**: [packages/zero/src/schema.ts](packages/zero/src/schema.ts) (built from Drizzle via `bun generate`)
