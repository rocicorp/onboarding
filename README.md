# Onboarding Example (Add to Existing Project)

This repo is the sample referenced in the [add to existing project](https://zero.rocicorp.dev/docs/add-to-existing-project) documentation.

- **Drizzle source schema**: [packages/db/src/drizzle.ts](packages/db/src/drizzle.ts) (tables + relationships)
- **Generated Zero schema**: [packages/zero/src/schema.ts](packages/zero/src/schema.ts) (built from Drizzle via `bun --filter @tutorial-tanstack-drizzle/zero generate`)
- **SQL migrations**: [packages/db/migrations/](packages/db/migrations/)
