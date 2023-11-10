import Actions from "./src/helpers/Actions.js";
import { rmSync } from "node:fs";
import path from "node:path";

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
        outputDir: "allure-results",
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
};
