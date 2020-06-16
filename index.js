const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");

const app = express();

// Data Parsing
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.post("/email", (req, res) => {
  console.log("Data: ", req.body);
  res.json({ message: "Message recieved!" });
});

app.listen(5000, () => console.log("Server is running on port 5000."));
