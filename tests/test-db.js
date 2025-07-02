
// test-db.js
const db = require('../backend/config/db');

(async () => {
  try {
    const [rows] = await db.query('SELECT 1');
    console.log('DB ok:', rows);
  } catch (err) {
    console.error('DB error:', err);
  } finally {
    process.exit();
  }
})();