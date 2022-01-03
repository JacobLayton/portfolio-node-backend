const express = require("express");
const sendMail = require("./mail");
const cors = require("cors");

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
  const { origin, recipient, name, email, subject, text } = req.body.messageData;

  sendMail(origin, recipient, name, email, subject, text, function (err, data) {
    if (err) {
      res.status(500).json({ message: "Internal Error" });
    } else {
      res.json({ message: "Email Sent!" });
    }
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
