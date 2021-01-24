const { peopleAdds } = require("../../controller/people/app");

const route = ({
  router,
  makeExpressCallback,
  validateToken,
  validateAuth,
}) => {
  // #####
  // GET

  // #####
  // POST

  // add new people
  router.post("/", validateAuth, makeExpressCallback(peopleAdds));

  // #####
  // PATCH

  return router;
};

module.exports = route;
