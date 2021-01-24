const generateQrs = ({
  path,
  QRCode,
  createCanvas,
  loadImage,
  fs,
  encrypt,
}) => {
  return async function decrypt(obj) {
    try {
      // this function is for QR generate during add on people use case
      // I just found the code in the internet. :)

      const id = obj.id;
      const str = encrypt(JSON.stringify(obj));
      const centerImageBase64 = await fs.readFileSync(
        path.resolve(`static/R2.png`)
      );

      const qrCode = await create(
        QRCode,
        createCanvas,
        loadImage,
        str,
        centerImageBase64,
        120,
        50
      );

      // replace ?
      const base64Data = qrCode.replace(/^data:image\/png;base64,/, "");

      // write the image file
      await fs.writeFile(
        path.resolve(`images/${id}.png`),
        base64Data,
        "base64",
        function (err) {
          if (err) console.log(err);
        }
      );

      return true;
    } catch (e) {
      console.log("Error on generate QR: ", e);
      return false;
    }
  };
};

module.exports = generateQrs;

const create = async (
  QRCode,
  createCanvas,
  loadImage,
  dataForQRcode,
  center_image,
  width,
  cwidth
) => {
  const canvas = createCanvas(width, width);
  QRCode.toCanvas(canvas, dataForQRcode, {
    errorCorrectionLevel: "H",
    margin: 1,
    color: {
      dark: "#000000",
      light: "#ffffff",
    },
  });

  const ctx = canvas.getContext("2d");
  const img = await loadImage(center_image);
  const center = (width - cwidth) / 2;
  ctx.drawImage(img, center, center, cwidth, cwidth);
  return canvas.toDataURL("image/png");
};
