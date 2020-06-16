const express = require("express");
const sendMail = require("./mail");
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
  const { subject, email, text } = req.body;
  console.log("Data: ", req.body);

  sendMail(email, subject, text, function (err, data) {
    if (err) {
      res.status(500).json({ message: "Internal Error" });
    } else {
      res.json({ message: "Email Sent!" });
    }
  });
});

app.listen(5000, () => console.log("Server is running on port 5000."));
