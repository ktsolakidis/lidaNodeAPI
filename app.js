const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const db = require("./database");
const { builtinModules } = require("module");
const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(compression());
app.use(cors());
app.use(helmet({ crossOriginResourcePolicy: false }));

const PORT = process.env.PORT || 5000;

const studentsRoutes = require("./routes/students");
const classesRoutes = require("./routes/classes");
const listingsRoutes = require("./routes/listings");
const valuationsRoutes = require("./routes/valuations");
const temporaryValuationsRoutes = require("./routes/temporaryValuations");

app.use("/students", studentsRoutes);
app.use("/classes", classesRoutes);
app.use("/listings", listingsRoutes);
app.use("/valuations", valuationsRoutes);
app.use("/temporaryvaluations", temporaryValuationsRoutes);

app.get("/", (req, res) => {
  res.send("Welcome");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port 3000 ${PORT}`);
});
