// Create a connection to the MySQL database
const db = require("mysql2-promise")();

db.configure({
  host: "database-1.cfuyzohcw40b.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "3869kT00",
  database: "sys",
});

// Connect to the database

module.exports = db;
