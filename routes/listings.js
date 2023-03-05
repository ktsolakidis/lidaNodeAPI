const express = require("express");
const router = express.Router();
const db = require("../database");

module.exports = router;

//Create new Listing of Student to a Class
router.post("/new", async (req, res) => {
  const { student_id, class_id, date } = req.body;
  const sql = `INSERT INTO listings (student_id, class_id, date) VALUES ('${student_id}', '${class_id}', CURRENT_DATE())`;

  await db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("New listing created:", result);
    res.send(result);
  });
});

//Get all Listings
router.get("/all", async (req, res) => {
  const sql = "SELECT * FROM listings";

  await db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("All listings:", result);
    res.send(result);
  });
});
