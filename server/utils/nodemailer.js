const nodemailer = require('nodemailer');

//package that needs sent to mail()
const inputEmailPackage = {
  from: "Devengers",
  fromEmail: "noreply@devengers.com",
  to: "Brandon Barnes",
  toEmail: "imbrandonbarnes@gmail.com",
  invoice: "Invoice #93192",
  invoiceDate: "2023-12-08",
  paymentDueDate: "2023-12-18",
  totalAmount: "1000.00",
  taxes: "50.00",
  totalDue: "1050.00",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

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
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: "koiinvoicing@gmail.com",
    pass: "zldx hnyh yrgu puzl",
  }
})
async function mail(emailPackage) {

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

mail(inputEmailPackage);