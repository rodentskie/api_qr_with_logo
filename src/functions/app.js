const dotenv = require("dotenv");

dotenv.config();

const crypto = require("crypto");
const algorithm = process.env.ALGORITHM;
const password = process.env.ENCRYPTION_KEY;
const iv = process.env.IV;
const QRCode = require("qrcode");
const { createCanvas, loadImage } = require("canvas");
const path = require("path");
const fs = require("fs");
const nodemailer = require("nodemailer");

// #####################
const encrypts = require("./encrypt");
const decrypts = require("./decrypt");
const delays = require("./delay");
const generateQrs = require("./generate-qr");
const sendEmails = require("./send-email");
const makeFolder = require("./create-folder-images");
// #####################
const encrypt = encrypts({ crypto, algorithm, password, iv });
const decrypt = decrypts({ crypto, algorithm, password, iv });
const delay = delays({});
const generateQr = generateQrs({
  path,
  QRCode,
  createCanvas,
  loadImage,
  fs,
  encrypt,
});
const sendEmail = sendEmails({ nodemailer, dotenv });
const makeFolders = makeFolder({ fs, path });
// #####################
const services = Object.freeze({
  encrypt,
  decrypt,
  delay,
  generateQr,
  sendEmail,
  makeFolders,
});

module.exports = services;
module.exports = {
  decrypt,
  encrypt,
  delay,
  generateQr,
  sendEmail,
  makeFolders,
};
