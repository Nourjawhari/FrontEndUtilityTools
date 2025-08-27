const { Client } = require('pg');

let db;

async function connect_db() {
  db = new Client({
    host: process.env.HOST,
    user: process.env.USER,
    port: parseInt(process.env.PORT),
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });

  try {
    await db.connect();
    console.log("PostgreSQL connected");
  } catch (err) {
    console.error("PostgreSQL connection failed:", err.message);
    throw err;
  }
}

function get_db() {
  if (!db) throw new Error("DB not connected yet");
  return db;
}

module.exports = { connect_db, get_db };