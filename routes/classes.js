const express = require("express");
const router = express.Router();
const db = require("../database");

module.exports = router;

//Create New Class
router.post("/new", async (req, res) => {
  const { name, category, grade } = req.body;
  const sql = `INSERT INTO classes (name, category, grade) VALUES ('${name}', '${category}', '${grade}')`;

  await db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("New class created:", result);
    res.send(result);
  });
});

// Get all classes
router.get("/all", async (req, res) => {
  const sql = "SELECT * FROM classes";

  await db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("All classes:", result);
    res.send(result);
  });
});

router.delete("/del/:id", async (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM classes WHERE id=${id}`;

  await db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(`Class with id ${id} deleted`);
    res.send(result);
  });
});
