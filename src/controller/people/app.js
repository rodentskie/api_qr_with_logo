const { addPeoples } = require("../../use-cases/people/app");
// #########
const peopleAdd = require("./add-people");

// #########
const peopleAdds = peopleAdd({ addPeoples });

// #########
const services = Object.freeze({
  peopleAdds,
});

module.exports = services;
module.exports = { peopleAdds };
