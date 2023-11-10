export const config = {
  runner: "local",

  specs: ["./test/specs/**/*.js"],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],

  maxInstances: 10,

  capabilities: [
    {
      browserName: "chrome",
    },
  ],

  logLevel: "info",

  bail: 0,

  baseUrl: "http://localhost",

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  services: ["gmail"],

  framework: "mocha",

  reporters: ["spec"],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
