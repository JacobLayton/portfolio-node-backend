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

const sendMail = (origin, recipient, name, email, subject, text, cb) => {
  let subjectPrefix;
  if (origin === 'TFTE') {
    subjectPrefix = 'TFTE MESSAGE: ';
  } else {
    subjectPrefix = 'PORTFOLIO MESSAGE: ';
  }
  const mailOptions = {
    from: email,
    to: recipient,
    subject: `${subjectPrefix}${subject}`,
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
