const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");

const app = express();

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.listen(5000, () => console.log("Server is running on port 5000."));
