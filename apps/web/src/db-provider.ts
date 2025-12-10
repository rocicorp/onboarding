import {zeroDrizzle} from '@rocicorp/zero/server/adapters/drizzle';
import {schema} from '@zero-onboarding/zero';
import {db} from '@zero-onboarding/db';

export const dbProvider = zeroDrizzle(schema, db);

// Register the database provider for type safety
declare module '@rocicorp/zero' {
  interface Types {
    dbProvider: typeof dbProvider;
  }
}
