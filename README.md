# Onboarding Example (Add to Existing Project)

This repo is the sample referenced in the [add to existing project](https://zero.rocicorp.dev/docs/add-to-existing-project) documentation.

- **Drizzle source schema**: [packages/db/src/drizzle.ts](packages/db/src/drizzle.ts) (tables + relationships)
- **Generated Zero schema**: [packages/zero/src/schema.ts](packages/zero/src/schema.ts) (built from Drizzle via `bun --filter @tutorial-tanstack-drizzle/zero generate`)
- **SQL migration**: [packages/db/migrations/0000_glorious_agent_zero.sql](packages/db/migrations/0000_glorious_agent_zero.sql)
- **SQL seed data**: [packages/db/migrations/1111_music_seed_data.sql](packages/db/migrations/1111_music_seed_data.sql)
