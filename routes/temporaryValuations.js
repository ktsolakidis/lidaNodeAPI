const express = require("express");
const router = express.Router();
const db = require("../database");

module.exports = router;

// New valuation
router.post("/new", async (req, res) => {
  try {
    const {
      student_id,
      class_id,
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

    const [result] = await db.query(sql);
    res.send(result);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// All Valuations
router.get("/all", async (req, res) => {
  try {
    const sql = "SELECT * FROM temporary_valuations";
    const [result] = await db.query(sql);
    res.send(result);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete a valuation by id
router.delete("/del/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const sql = `DELETE FROM temporary_valuations WHERE id=${id}`;

    const [result] = await db.query(sql);
    res.send(result);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
