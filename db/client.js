import dotenv from 'dotenv';
dotenv.config()

console.log("DATABASE_URL =", process.env.DATABASE_URL)

import pg from "pg";
const db = new pg.Client(process.env.DATABASE_URL);

// await db.connect();

export default db;

