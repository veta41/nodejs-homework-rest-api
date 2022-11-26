/* eslint-disable no-useless-catch */
const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const config = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "tupich@meta.ua",
    pass: META_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(config);

const sendEmail = async (data) => {
  const emailOptions = { ...data, from: "tupich@meta.ua" };

  try {
    await transporter.sendMail(emailOptions);
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = sendEmail;
