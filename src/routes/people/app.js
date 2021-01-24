const express = require("express");
const router = express.Router();
const makeExpressCallback = require("../../express-callback/app");

const route = require("./routes");

const { validateToken, validateAuth } = require("../../middleware/app");
//#########
const routes = route({
  router,
  makeExpressCallback,
  validateToken,
  validateAuth,
});

const services = Object.freeze({
  routes,
});

module.exports = services;

module.exports = {
  routes,
};

module.exports = router;
