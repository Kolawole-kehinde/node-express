import { Pool } from "pg";
import { env } from "../config/env.js";

// console.log("DATABASE_URL:", env.database_url);

export const pool = new Pool({
  connectionString: env.database_url,
});