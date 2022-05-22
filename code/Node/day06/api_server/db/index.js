const mysql = require('mysql');
//注意：要将mysql定义为一个变量db
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
});

module.exports = db;