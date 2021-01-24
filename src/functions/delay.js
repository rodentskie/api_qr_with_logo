const delays = ({}) => {
  return async function decrypt(sec) {
    return new Promise((resolve) => setTimeout(resolve, sec * 1000));
  };
};

module.exports = delays;
