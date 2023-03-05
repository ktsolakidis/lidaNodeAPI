const express = require("express");
const router = express.Router();
const db = require("../database");

//Create a new Student
router.post("/new", async (req, res) => {
  const { first_name, last_name, username, password } = req.body;
  const sql = `INSERT INTO students (first_name, last_name, username, password) VALUES ('${first_name}', '${last_name}', '${username}', '${password}')`;

  await db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("New student created:", result);
    res.send(result);
  });
});

//Get all Students
router.get("/all", async (req, res) => {
  const [students] = await db.query("Select * from students");
  res.json(students);
});

module.exports = router;

// Delete a student by id
router.delete("/del/:id", async (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM students WHERE id=${id}`;

  await db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(`Student with id ${id} deleted`);
    res.send(result);
  });
});
