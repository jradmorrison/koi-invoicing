const nodemailer = require('nodemailer');

require('dotenv').config();

const html = (EmailPackage) => `
  <div style="background-color: #FFFFFF; color: #000000; padding: 1rem; width: 35rem; height: 50rem;">
    <div style="padding: 1rem;">
      <div style="display: flex; justify-content: start; align-items: center; height: 5rem;">
        <img src="" style="aspect-ratio: 1; width: 4rem; padding-right: 1rem;" alt=""></img>
        <h1 style="color: black; font-weight: bolder; font-size: 1.4rem;">${EmailPackage.invoice}</h1>
      </div>
      <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; padding-top: 2rem;">
        <div style="display: flex; flex-direction: column;">
          <h1 style="padding-bottom: .2rem; padding-top: 2rem; font-weight: bold; font-size: 1.2rem;">From</h1>
          <h3>${EmailPackage.from}</h3>
          <h3>${EmailPackage.fromEmail}</h3>
        </div>
        <div style="display: flex; flex-direction: column;">
          <h1 style="padding-bottom: .2rem; padding-top: 2rem; font-weight: bold; font-size: 1.2rem;">Invoice Date</h1>
          <h3>${EmailPackage.invoiceDate}</h3>
        </div>
      </div>
      <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
        <div style="display: flex; flex-direction: column;">
          <h1 style="padding-bottom: .2rem; padding-top: 2rem; font-weight: bold; font-size: 1.2rem;">To</h1>
          <h3>${EmailPackage.to}</h3>
          <h3>${EmailPackage.toEmail}</h3>
        </div>
        <div style="display: flex; flex-direction: column;">
          <h1 style="padding-bottom: .2rem; padding-top: 2rem; font-weight: bold; font-size: 1.2rem;">Payment Due</h1>
          <h3>${EmailPackage.paymentDueDate}</h3>
        </div>
      </div>
      <div style="padding-top: 5rem; padding-bottom: 9rem;">
        <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; background-color: #808080; padding: .5rem;">
          <h2>Description</h2>
          <h3>${EmailPackage.desc}</h3>
          <h2>Price</h2>
        </div>
      </div>
      <div style="padding-left: 12rem; width: 20rem; padding-bottom: .7rem;">
        <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; padding-bottom: .5rem;">
          <p>Total</p>
          <p>${EmailPackage.totalAmount}</p>
        </div>
        <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
          <p>Taxes</p>
          <p>${EmailPackage.taxes}</p>
        </div>
      </div>
      <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; padding-left: 15rem; padding-top: .7rem; width: 17rem; font-size: 1.2rem; border-top: 1px solid #00000; box-sizing: content-box;">
        <h3 style="padding-right: 5rem;">Total Due</h3>
        <h3>${EmailPackage.totalDue}</h3>
      </div>
    </div>
    <footer style="display: flex; justify-content: start; padding-top: 2rem; color: black; height: 2rem; font-size: 1rem;">
      <img src="" style="aspect-ratio: 1; width: 2rem; padding-right: 1rem;" alt=""></img>
      <p>Koi Invoicing Services LLC</p>
      <button>Pay Invoice</button>
    </footer>
  </div>
`;

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  debug: true, // Add this line for debug output
});
async function mail(emailPackage) {
  console.log(transporter);

  try {
    const info = await transporter.sendMail({
      from: `${emailPackage.from} <${emailPackage.fromEmail}>`,
      to: `${emailPackage.toEmail}`,
      subject: `${emailPackage.invoice} is ready to be viewed`,
      html: html(emailPackage),
    })
    
    console.log("Message sent");
  } catch (err) {
    console.error(err);
  }
}

module.exports = mail;