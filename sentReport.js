import { ENV_READER } from "./src/data/env_reader.js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.mail.ru",
  port: 465,
  secure: true,
  auth: {
    user: ENV_READER.USER_EMAIL,
    pass: ENV_READER.USER_PASSWORD,
  },
});

async function main() {
  const info = await transporter.sendMail({
    from: `"Fred Foo 👻" <${ENV_READER.USER_EMAIL}>`,
    to: `${ENV_READER.USER_EMAIL}`,
    subject: "Report ✔", // Subject line
    text: "Allure report", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);