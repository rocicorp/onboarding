import {zeroDrizzle} from '@rocicorp/zero/server/adapters/drizzle';
import {schema} from '@zero-onboarding/zero';
import {getDb} from '@zero-onboarding/db';

const db = getDb({
  connectionString:
    process.env.ZERO_UPSTREAM_DB ??
    'postgres://postgres:pass@localhost:5432/zero',
});

export const dbProvider = zeroDrizzle(schema, db);

// Register the database provider for type safety
declare module '@rocicorp/zero' {
  interface DefaultTypes {
    dbProvider: typeof dbProvider;
  }
}
