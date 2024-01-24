import { ENV_READER } from "./src/data/env_reader.js";
import nodemailer from "nodemailer";
import fs from "fs";
import archiver from "archiver";

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
  const allureResults = await fs.promises.readFile("allure-results/*.json", "utf-8");
  const allureReport = await fs.promises.readFile("allure-report/index.html", "utf-8");

  // Создание ZIP-архива
  const zip = archiver("zip");
  zip.append(allureResults, { name: "allure-results.json" });
  zip.append(allureReport, { name: "allure-report.html" });
  zip.finalize();

  const info = await transporter.sendMail({
    from: `"Fred Foo 👻" <${ENV_READER.USER_EMAIL}>`,
    to: `${ENV_READER.USER_EMAIL}`,
    subject: "Report ✔", // Subject line
    text: "Allure report", // plain text body
    html: `<p>Attached are the Allure artifacts.</p>`,
    attachments: [{ filename: "allure-artifacts.zip", content: zip, encoding: "base64" }],
  });

  console.log("Message sent: ", info.messageId);
}

main().catch(console.error);
