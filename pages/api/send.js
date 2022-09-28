const sgMail = require("@sendgrid/mail");
const apiKey = `${process.env.SENDGRID_API_KEY}`;

sgMail.setApiKey(apiKey);

async function sendEmail(req, res) {
  console.log(req.body);
  try {
    await sgMail.send({
      to: "freshspringsmed@gmail.com", // Your email where you'll receive emails
      from: "freshspringsmed@gmail.com", // your website email address here
      subject: `New Message from Contact Form - Fresh Springs Medical Services`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>New Message from Contact Form Message</title>
        <meta name="description" content="New Message from Contact Form Message - Fresh Springs Medical Services">
        <meta name="author" content="Fresh Springs Medical Services">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from: </h3>
              <div style="font-size: 16px;">
              <p  style="font-weight: 600">Name</p>
              <p>${req.body.name}</p>
              </div>
              <div style="font-size: 16px;">
              <p style="font-weight: 600">Email Address</p>
              <p>${req.body.email}</p>
              </div>
              <div style="font-size: 16px;">
              <p style="font-weight: 600">Message:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
              </div>
      </body>
      </html>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ message: "Your mail was successfully sent" });
}

export default sendEmail;