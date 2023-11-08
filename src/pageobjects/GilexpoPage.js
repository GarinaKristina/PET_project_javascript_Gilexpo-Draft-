const BasePage = require("./BasePage");

class GilexpoPage extends BasePage {
  get guestBook() {
    return $('//a[contains(text(),"Задать вопрос")]');
  }

  get topic() {
    return $('//input[@id="pgbtitle"]');
  }
  get nameAndAdress() {
    return $('//input[@id="pgbusername"]');
  }
  get email() {
    return $('//input[@id="pgbemail"]');
  }
  get content() {
    return $('//*[@id="tinymce"]');
  }

  async switchToFrame(id) {
    await browser.switchToFrame(id);
  }
  async saveScreenshot(filepath) {
    await browser.saveScreenshot(filepath);
  }
  open() {
    super.open();
  }
}
module.exports = new GilexpoPage();
