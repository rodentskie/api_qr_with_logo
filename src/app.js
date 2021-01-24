const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

// accessible to any
app.use(cors());

// Body Parser middleware to handle raw JSON files
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});

const { makeFolders } = require("./functions/app");
makeFolders(); // create folder for qr images

// routes
app.use("/api/people", require("./routes/people/app"));

// when invalid routes are entered
app.use(async (req, res) => {
  res.status(200).send(`Welcome to CCTMS API.`);
});

module.exports = app;
