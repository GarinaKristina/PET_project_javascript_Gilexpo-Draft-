exports.config = {
  specs: ["./test/specs/**/*.js"],

  exclude: [
    // 'path/to/excluded/files'
  ],
  logLevel: "warn",

  bail: 0,

  baseUrl: "http://localhost",

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
    await browser.maximizeWindow();
  },
};
