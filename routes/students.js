const express = require("express");
const router = express.Router();
const db = require("../database");

// Create a new Student
router.post("/new", async (req, res) => {
  try {
    const { first_name, last_name, username, password } = req.body;
    const sql = `INSERT INTO students (first_name, last_name, username, password) VALUES ('${first_name}', '${last_name}', '${username}', '${password}')`;

    const [result] = await db.query(sql);
    res.send(result);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get all Students
router.get("/all", async (req, res) => {
  try {
    const [students] = await db.query("SELECT * FROM students");
    res.json(students);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete a student by id
router.delete("/del/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const sql = `DELETE FROM students WHERE id=${id}`;

    const [result] = await db.query(sql);
    res.send(result);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
