const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "",
    domain: "",
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const mailOptions = {
  from: "testEmail@gmail.com",
  to: "hello@jacoblayton.dev",
  subject: "Test Subject",
  text: "This is the test text",
};

transporter.sendMail(mailOptions, function (err, data) {
  if (err) {
    console.log("Error Occured");
  } else {
    console.log("Message sent!");
  }
});
