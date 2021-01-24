const sendEmails = ({ nodemailer, dotenv }) => {
  return async function encrypt(info) {
    try {
      dotenv.config();

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      const result = await new Promise((resolve) => {
        transporter.sendMail(info, (err, data) => {
          let msg;
          if (err) {
            msg = {
              status: 400,
              data: `Not sent\n\n${err}`,
            };

            resolve(msg);
          }
          msg = {
            status: 200,
            data: `Sent successfully\n\n ${data}`,
          };

          resolve(msg);
        });
      });
      return result;
    } catch (e) {
      console.log("Error: ", e);
    }
  };
};

module.exports = sendEmails;
