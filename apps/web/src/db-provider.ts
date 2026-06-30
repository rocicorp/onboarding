import {zeroDrizzle} from '@rocicorp/zero/server/adapters/drizzle';
import {getDb} from '@zero-music/db';
import {schema} from '@zero-music/zero';

const connectionString = process.env.ZERO_UPSTREAM_DB;

if (!connectionString) {
  throw new Error('ZERO_UPSTREAM_DB is not set');
}

const db = getDb({connectionString});

export const dbProvider = zeroDrizzle(schema, db);

// Register the database provider for type safety
declare module '@rocicorp/zero' {
  interface DefaultTypes {
    dbProvider: typeof dbProvider;
  }
}
