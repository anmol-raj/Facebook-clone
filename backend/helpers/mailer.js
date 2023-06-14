const nodemailer = require("nodemailer");

const { google, GoogleApis } = require("googleapis");
const oauth_link = "https://developers.google.com/oauthplayground";
const { OAuth2 } = google.auth;
const { EMAIL, MAILING_ID, MAILING_REFRESH, MAILING_SECRET } = process.env;

const auth = new OAuth2(
  MAILING_ID,
  MAILING_SECRET,
  MAILING_REFRESH,
  oauth_link
);

exports.sendVerificationEmail = (email, name, url) => {
  auth.setCredentials({
    refresh_token: MAILING_REFRESH,
  });
  const accessToken = auth.getAccessToken();
  const stmp = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: EMAIL,
      clientId: MAILING_ID,
      clientSecret: MAILING_SECRET,
      refreshToken: MAILING_REFRESH,
      accessToken,
    },
  });
  const mailOptions = {
    from: EMAIL,
    to: email,
    subject: "Facebook email verification",
    html: `<div style=max-width:700px;margin-bottom:1rem;display:flex;align-items:center;gap:10px;font-family:Roboto,sans-serif;font-weight:600;color:#3b5993>
    <img src="https://w7.pngwing.com/pngs/282/704/png-transparent-facebook-messenger-logo-icon-facebook-facebook-logo-blue-text-trademark.png" style=width:30px alt="">
    <span>Action require: Activate your facebook account</span>
    </div>
    <div style="padding:1rem 0 0;border-top:1px solid #e5e5e5;color:#141823;font-size:16px;font-family:Roboto,sans-serif">
    <span>Hello ${name} </span>
    </div>
    <div style="padding:0 0 20px">
    <span style="margin:1.5rem 0;color:#141823;">you recently created an account on facebook. To complete your registration, please confirm your account.
    </span>
    </div>
    <a href=${url} style="width:200px;padding:10px 15px;background:#4c649b;color:#fff;font-weight:600;text-decoration:none;font-family:Roboto,sans-serif">Confirm your account</a>
    <br>
    <div style=padding-top:20px>
    <span style="margin:1.5rem 0;color:#898f9c"> Facebook allows you to connect with all your friends, once registered on Facebook, you can share photos, organize events, and much more.
    </span>
    </div>`,
  };

  stmp.sendMail(mailOptions, (err, res) => {
    if (err) return err;
    return res;
  });
};
