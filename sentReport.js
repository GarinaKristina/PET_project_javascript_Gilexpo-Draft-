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
  const allureResultsArchive = archiver("zip");
  allureResultsArchive.directory("allure-results", false);
  allureResultsArchive.finalize();
  const allureResults = await fs.promises.readFile("allure-results.zip");

  const allureReportArchive = archiver("zip");
  allureReportArchive.directory("allure-report", false);
  allureReportArchive.finalize();
  const allureReport = await fs.promises.readFile("allure-report.zip");

  const info = await transporter.sendMail({
    from: `"Fred Foo 👻" <${ENV_READER.USER_EMAIL}>`,
    to: `${ENV_READER.USER_EMAIL}`,
    subject: "Report ✔",
    text: "Allure report",
    html: `<p>Attached are the Allure artifacts.</p>`,
    attachments: [
      { filename: "allure-results.zip", content: allureResults, encoding: "base64" },
      { filename: "allure-report.zip", content: allureReport, encoding: "base64" },
    ],
  });

  console.log("Message sent: ", info.messageId);
}

main().catch(console.error);
