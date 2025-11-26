import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./drizzle";

const pool = new Pool({
  connectionString: "postgres://postgres:password@localhost:5432/postgres",
});

export const db = drizzle(pool, { schema });
export { schema };
