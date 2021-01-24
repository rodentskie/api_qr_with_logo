const addPeople = ({
  makePeoples,
  generateQr,
  sendEmail,
  decrypt,
  path,
  fs,
}) => {
  return async function post(info) {
    // NOTE: Adding of people will only be from KoBo

    /*
    // validate access rights
    if (!info.accessRights)
      throw new Error(
        `You're not authorized, please contact your Administrator.`
      );
    const isAllowed = validateAccessRights(
      info.accessRights,
      "admin",
      "add modules"
    );

    if (!isAllowed)
      throw new Error(
        `You're not authorized, please contact your Administrator.`
      );
    */

    const data = await makePeoples(info);

    const people = {
      firstName: await data.getFn(),
      middleName: await data.getMn(),
      lastName: await data.getLn(),
      nameExtension: await data.getNameExt(),
      gender: await data.getGender(),
      address: await data.getAddress(),
      contactNum: await data.getContact(),
      email: await data.getEmail(),
      bday: await data.getBday(),
      createdBy: await data.getCreatedBy(),
      createdBy: await data.getCreatedBy(),
      status: await data.getStatus(),
    };

    const res = 18; // dummy id; this must be from the data inserted from the database;

    // object to turn into QR
    const qr = {
      id: res,
    };
    await generateQr(qr); // generate qr

    // for greetings
    let greetings = null;
    if (people.gender.toLowerCase() == `male`) {
      greetings = `Good day Sir,`;
    } else {
      greetings = `Good day Ma'am,`;
    }

    // send email with the QR
    const mailInfo = {
      from: `CCTMS <${process.env.EMAIL_USER}>`,
      to: decrypt(people.email),
      subject: "QR Image for Tracing",
      html: `${greetings} <br/><br/>
      Please see the attached file for your QR image for the main purpose of tracing.
      <br/><br/>
      Thank you. <br/><br/>
      <b>NOTE: <i>This is an automated email, please dont reply.</i></b>
      <br/><br/>`,
      attachments: [
        {
          filename: `${qr.id}.png`,
          content: fs.createReadStream(path.resolve(`images/${qr.id}.png`)),
        },
      ],
    };
    const send = await sendEmail(mailInfo);
    console.log(send); // check in docker logs


    // ##
    const msg = `User has been added successfully.`; // dummy return 

    return msg;
  };
};

module.exports = addPeople;
