const express = require("express");
const router = express.Router();
const db = require("../database");

module.exports = router;

//New valuation
router.post("/new", async (req, res) => {
  const {
    student_id,
    class_id,
    date,
    theory,
    solved_excercises,
    methodology,
    pronunciation,
    data_translation,
    general_difficulty,
    other_difficulty,
    metadotikotita,
    preparation,
  } = req.body;

  const sql = `INSERT INTO temporary_valuations (student_id, class_id, date, theory, solved_excercises, methodology, pronunciation, data_translation, general_difficulty, other_difficulty, metadotikotita, preparation) VALUES (${student_id}, ${class_id}, current_date(), ${theory}, ${solved_excercises}, ${methodology}, ${pronunciation}, ${data_translation}, ${general_difficulty}, '${other_difficulty}', ${metadotikotita}, ${preparation})`;

  await db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("New valuation created:", result);
    res.send(result);
  });
});

//All Valuations
router.get("/all", async (req, res) => {
  const sql = "SELECT * FROM temporary_valuations";

  await db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("All valuations:", result);
    res.send(result);
  });
});

router.delete("/del/:id", async (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM temporary_valuations WHERE id=${id}`;

  await db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("All valuations:", result);
    res.send(result);
  });
});
