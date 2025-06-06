// backend/config/db.js
const mysql = require('mysql2/promise');
require('dotenv').config(); // 加载 .env 配置

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = pool;