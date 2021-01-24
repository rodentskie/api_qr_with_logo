const makePeople = ({ encrypt }) => {
  return function make({
    firstName,
    middleName, // optional
    lastName,
    nameExtension, // optional
    gender,
    address,
    contactNum,
    email,
    bday,
    createdBy,
    status = true,
  } = {}) {
    if (!firstName) {
      throw new Error("Please enter first name.");
    }
    if (!lastName) {
      throw new Error("Please enter last name.");
    }
    if (!gender) {
      throw new Error("Please enter gender.");
    }
    if (!address) {
      throw new Error("Please enter address.");
    }
    if (!contactNum) {
      throw new Error("Please enter contact number.");
    }
    if (!email) {
      throw new Error("Please enter email.");
    }
    if (!bday) {
      throw new Error("Please enter birth date.");
    }
    if (!createdBy) {
      throw new Error("Please enter who created the employee.");
    }
    return Object.freeze({
      getFn: () => encrypt(firstName, false),
      getMn: () => encrypt(middleName, false),
      getLn: () => encrypt(lastName, false),
      getNameExt: () => encrypt(nameExtension, false),
      getGender: () => gender,
      getAddress: () => encrypt(address, false),
      getContact: () => encrypt(contactNum, false),
      getEmail: () => encrypt(email, false),
      getBday: () => bday,
      getCreatedBy: () => createdBy,
      getStatus: () => status,
    });
  };
};

module.exports = makePeople;
