import Actions from "./src/helpers/Actions.js";
import { rmSync } from "node:fs";
import path from "node:path";
import allure from "allure-commandline";

export const config = {
  runner: "local",

  specs: ["./src/specs/**.test.js"],

  suites: {
    good: [`./src/specs/sentMessageGuestBook.test.js`],
    bad: [`./src/specs/failedSentMessageGuestBook.test.js`],
  },

  maxInstances: 10,

  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--no-sandbox"],
      },
      acceptInsecureCerts: true,
    },
  ],

  logLevel: "warn",

  bail: 0,

  baseUrl: "http://www.gilexpo.by/",

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  services: ["chromedriver"],

  framework: "mocha",

  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "./allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },

  async onPrepare(config, param) {
    rmSync(path.join(process.cwd(), "allure-results"), {
      recursive: true,
      force: true,
    });
  },

  async before() {
    await Actions.openUrl(this.baseUrl);
    await browser.maximizeWindow();
  },

  afterStep: async function (
    step,
    scenario,
    { error, duration, passed },
    context
  ) {
    if (error) {
      await browser.takeScreenshot();
    }
  },

  async onComplete() {
    const reportError = new Error("Could not generate Allure report");
    const generation = allure(["generate", "allure-results", "--clean"]);
    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(() => reject(reportError), 5000);

      generation.on("exit", function (exitCode) {
        clearTimeout(generationTimeout);

        if (exitCode !== 0) {
          return reject(reportError);
        }

        console.log("Allure report successfully generated");
        resolve();
      });
    });
  },
};
