const {Pool} = require('pg');
require('dotenv').config()

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: process.env.DB_PASSWORD,
    port: 5432,
    database: 'auto_shop_web'
});

module.exports = pool;