import { pool } from "../lib/db.js";
import { DBUserRow, DBUserWithPasswordRow, User } from "../types/users.js";

export async function findUserByEmail(email: string): Promise<User | null> {
  const result = await pool.query<DBUserRow>(
    `
    SELECT 
      id,
      email,
      role,
      created_at
    FROM users
    WHERE email = $1
    `,
    [email],
  );

  return result.rows[0] ?? null;
}

export async function createUser(
  email: string,
  passwordHash: string
): Promise<User> {
  const result = await pool.query<DBUserRow>(
    `
    INSERT INTO users (
      email,
      password_hash
    )
    VALUES ($1, $2)
    RETURNING id, email, role, created_at
    `,
    [email, passwordHash]
  );

  const user = result.rows[0];

  if (!user) {
    throw new Error("Failed to create user.");
  }

  return user;
}


export async function findUserByEamilWithOPassword(email: string): Promise<DBUserWithPasswordRow | null> {
     const result = await pool.query<DBUserWithPasswordRow>(
        `SELECT id, email, role, password_hash, created_at
         FROM users  WHERE email = $1`,
         [email]
     )

   return result.rows[0] ?? null;


}