var nodemailer = require('nodemailer');

// https://support.google.com/mail/answer/185833?hl=iw

class Mail {

  sendMail = (to, subject, text) => {
    const transporter = nodemailer.createTransport({
      service: 'outlook',
      auth: {
        user: '36325266906@mby.co.il',
        pass: 'Student@264'
      }
    });

    const mailOptions = {
      from: transporter,
      to: to,
      subject: subject,
      text: text,
    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }

}

const mail = new Mail()
module.exports = mail

// https://support.google.com/mail/answer/185833?hl=iw