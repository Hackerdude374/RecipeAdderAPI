const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});



const createTableQuery = `
  CREATE TABLE IF NOT EXISTS recipe_applications (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(100) NOT NULL,
    ingredients VARCHAR(100) NOT NULL,
    instructions VARCHAR(100) NOT NULL,
    createdAt DATE,
    updatedAt DATE,
    status INTEGER NOT NULL
  );
`;

const createTable = async () => {
  try {
    await pool.query(createTableQuery);
    console.log('Table created successfully');
  } catch (err) {
    console.error('Error executing query', err.stack);
  }
};

createTable();







module.exports = {
    query: (text, params, callback) => {
      console.log("QUERY:", text, params || "");
      return pool.query(text, params, callback);
    },
  };