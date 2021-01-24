const { makePeoples } = require("../../entities/people/app"); // entity
const {
  encrypt,
  decrypt,
  generateQr,
  sendEmail,
} = require("../../functions/app"); // functions
const path = require("path");
const fs = require("fs");
// #########
const addPeople = require("./add-people");
// #########
const addPeoples = addPeople({
  makePeoples,
  generateQr,
  sendEmail,
  decrypt,
  path,
  fs,
});

// #########
const services = Object.freeze({
  addPeoples,
});

module.exports = services;
module.exports = { addPeoples };
