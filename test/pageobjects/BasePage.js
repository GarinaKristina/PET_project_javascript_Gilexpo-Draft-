module.exports = class BasePage {
  open() {
    return browser.url('http://gilexpo.by/');
  }
};
