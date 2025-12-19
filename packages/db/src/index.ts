import {drizzle} from 'drizzle-orm/node-postgres';
import {Pool} from 'pg';
import * as schema from './drizzle';

export const getDb = ({connectionString}: {connectionString: string}) => {
  const pool = new Pool({
    connectionString,
  });

  return drizzle(pool, {schema});
};

export {schema};
