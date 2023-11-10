export const config = {
  specs: ["./test/specs/**/*.js"],

  exclude: [
    // 'path/to/excluded/files'
  ],
  logLevel: "warn",

  bail: 0,

  baseUrl: "http://www.gilexpo.by/",

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  services: ["chromedriver"],

  framework: "mocha",

  reporters: ["spec"],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  async before() {
    await Actions.openUrl(this.baseUrl);
    await browser.maximizeWindow();
  },
};
