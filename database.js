const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'tehtava3'
});
module.exports = connection;