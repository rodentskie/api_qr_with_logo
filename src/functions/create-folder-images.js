const makeFolder = ({ fs, path }) => {
  return function create() {
    const dir = path.resolve("images");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      console.log("Folder for QR created!");
    }
  };
};

module.exports = makeFolder;
