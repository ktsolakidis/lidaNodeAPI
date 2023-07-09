const express = require("express");
const router = express.Router();
const db = require("../database");

module.exports = router;

// Create new Listing of Student to a Class
router.post("/new", async (req, res) => {
  try {
    const { student_id, class_id, date } = req.body;
    const sql = `INSERT INTO listings (student_id, class_id, date) VALUES ('${student_id}', '${class_id}', CURRENT_DATE())`;

    const [result] = await db.query(sql);
    res.send(result);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get all Listings
router.get("/all", async (req, res) => {
  try {
    const sql = "SELECT * FROM listings";
    const [result] = await db.query(sql);
    res.send(result);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
