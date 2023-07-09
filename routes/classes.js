const express = require("express");
const router = express.Router();
const db = require("../database");

module.exports = router;

// Create New Class
router.post("/new", async (req, res) => {
  try {
    const { name, category, grade } = req.body;
    const sql = `INSERT INTO classes (name, category, grade) VALUES ('${name}', '${category}', '${grade}')`;

    const [result] = await db.query(sql);
    res.send(result);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get all classes
router.get("/all", async (req, res) => {
  try {
    const sql = "SELECT * FROM classes";
    const [result] = await db.query(sql);
    res.send(result);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete a class by id
router.delete("/del/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const sql = `DELETE FROM classes WHERE id=${id}`;

    const [result] = await db.query(sql);
    res.send(result);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
