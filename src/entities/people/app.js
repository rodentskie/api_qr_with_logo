const { encrypt } = require("../../functions/app");
// ########
const makePeople = require("./make-people");
// ########
const makePeoples = makePeople({ encrypt });
// ########
const services = Object.freeze({ makePeoples });

module.exports = services;
module.exports = { makePeoples };
