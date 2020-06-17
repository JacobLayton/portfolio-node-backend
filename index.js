const express = require("express");
const sendMail = require("./mail");
const cors = require("cors");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());

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
  const { email, subject, text } = req.body.user;
  console.log("Data: ", req.body.user);

  sendMail(email, subject, text, function (err, data) {
    if (err) {
      res.status(500).json({ message: "Internal Error" });
    } else {
      res.json({ message: "Email Sent!" });
    }
  });
});

app.listen(5000, () => console.log("Server is running on port 5000."));
