const nodemailer = require('nodemailer');

require('dotenv').config();

const html = (EmailPackage) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Email Template</title>
</head>
<body>
<table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 600px; background-color: #FFFFFF; color: #000000; padding: 1rem;">
    <tr>
        <td>
            <table cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                    <td>
                        <img src="" width="50" alt="" style="padding-right: 1rem;">
                        <h1 style="color: black; font-weight: bolder; font-size: 1.4rem;">${EmailPackage.invoice}</h1>
                    </td>
                </tr>
            </table>
            <table cellspacing="0" cellpadding="0" border="0" width="100%" style="padding-top: 2rem;">
                <tr>
                    <td>
                        <table cellspacing="0" cellpadding="0" border="0" width="45%" style="display: inline-block;">
                            <tr>
                                <td>
                                    <h1 style="font-weight: bold; font-size: 1.2rem; padding-bottom: .2rem;">From</h1>
                                    <h3>${EmailPackage.from}</h3>
                                    <h3>${EmailPackage.fromEmail}</h3>
                                </td>
                            </tr>
                        </table>
                        <table cellspacing="0" cellpadding="0" border="0" width="45%" style="display: inline-block;">
                            <tr>
                                <td>
                                    <h2 style="font-weight: bold; font-size: 1.2rem; padding-bottom: .2rem;">Invoice Date</h2>
                                    <h3>${EmailPackage.paymentDueDate}</h3>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <table cellspacing="0" cellpadding="0" border="0" width="100%" style="padding-top: 2rem; padding-bottom: 9rem;">
                <tr>
                    <td>
                        <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #808080; padding: .5rem;">
                            <tr>
                                <td>
                                    <h2>Description</h2>
                                </td>
                                <td>
                                    <h2>Price</h2>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <table cellspacing="0" cellpadding="0" border="0" width="100%" style="padding-left: 12rem; width: 20rem; padding-bottom: .7rem;">
                <tr>
                    <td>
                        <table cellspacing="0" cellpadding="0" border="0" width="100%" style="display: inline-block; padding-bottom: .5rem;">
                            <tr>
                                <td>
                                    <p>${EmailPackage.desc}</p>
                                </td>
                            </tr>
                            
                        </table>
                        <table cellspacing="0" cellpadding="0" border="0" width="100%" style="display: inline-block;">
                            <tr>
                              <td>
                               <p>Total</p>
                              </td>
                              <td>
                               <p>${EmailPackage.totalAmount}</p>
                              </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Taxes</p>
                                </td>
                                <td>
                                    <p>${EmailPackage.taxes}</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <table cellspacing="0" cellpadding="0" border="0" width="100%" style="padding-left: 15rem; padding-top: .7rem; width: 17rem; font-size: 1.2rem; border-top: 1px solid #00000; box-sizing: content-box;">
                <tr>
                    <td>
                        <h3 style="padding-right: 5rem;">Total Due</h3>
                    </td>
                    <td>
                        <h3>${EmailPackage.totalDue}</h3>
                    </td>
                </tr>
            </table>
            <table cellspacing="0" cellpadding="0" border="0" width="100%" style="display: flex; justify-content: start; padding-top: 2rem; color: black; height: 2rem; font-size: 1rem;">
                <tr>
                    <td>
                        <img src="" width="20" alt="" style="padding-right: 1rem;">
                        <p>Koi Invoicing Services LLC</p>
                        <a href="${EmailPackage.url}">View Invoice Here to Pay</a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
</body>
</html>

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