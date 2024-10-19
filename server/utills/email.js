require('dotenv').config();
// const { default: Email } = require('next-auth/providers/email');
const nodemailer = require('nodemailer');

// Configure the SMTP transporter

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "missnaziya24@gmail.com", // Use environment variable
    pass: "mtjb ubjs ckyn jbal", // Use environment variable
  },
});

// Send email function
const sendEmail = async (from,to, subject, text) => {
  try {
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text,
    });

    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email:', error.message); // More detailed error message
  }
};
module.exports = { sendEmail };
// Example usage
// sendEmail(Email, 'Test Email', 'Hello from Node.js!');