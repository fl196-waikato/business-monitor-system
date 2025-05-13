
const pool = require('./config/db');

require('dotenv').config(); // load .env file

async function testConnection(){
    try{
        const connection = await pool.getConnection();
        console.log('The MySQL database works well');
        await connection.release();

    }catch(err){
        console.error('The MySQL database connects failed', err.message);
    }
    console.log('Loaded ENV Variables:');
    console.log('DB_HOST:', process.env.DB_HOST);
    console.log('DB_PORT:', process.env.DB_PORT);
    console.log('DB_USER:', process.env.DB_USER);
    console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
    console.log('DB_NAME:', process.env.DB_NAME);
    console.log('JWT_SECRET:', process.env.JWT_SECRET);

};


testConnection();