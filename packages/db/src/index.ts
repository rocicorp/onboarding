import {drizzle} from 'drizzle-orm/node-postgres';
import {Pool} from 'pg';
import * as schema from './drizzle';

const pool = new Pool({
  connectionString: 'postgres://postgres:pass@localhost:5432/zero',
});

export const db = drizzle(pool, {schema});
export {schema};
