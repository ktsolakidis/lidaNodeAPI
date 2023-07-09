const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "database-1.cfuyzohcw40b.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "3869kT00",
  database: "sys",

});

module.exports = pool;
