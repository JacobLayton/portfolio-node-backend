require("dotenv").config();
const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: process.env.API_KEY,
    domain: process.env.DOMAIN_NAME,
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, subject, text, cb) => {
  const mailOptions = {
    from: email,
    to: "hello@jacoblayton.dev",
    subject: `From Portfolio: ${subject}`,
    text: `Email: ${email}\nName: ${name}\nSubject: ${subject}\nMessage: ${text}`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
    transporter.close();
  });
};

module.exports = sendMail;
