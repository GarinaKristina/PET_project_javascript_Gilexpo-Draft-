class MainPage {
  guestBook = '//a[contains(text(),"Задать вопрос")]';

  // get topic() {
  //   return $('//input[@id="pgbtitle"]');
  // }
  // get nameAndAdress() {
  //   return $('//input[@id="pgbusername"]');
  // }
  // get email() {
  //   return $('//input[@id="pgbemail"]');
  // }
  // get content() {
  //   return $('//*[@id="tinymce"]');
  // }

  async switchToFrame(id) {
    await browser.switchToFrame(id);
  }
  async saveScreenshot(filepath) {
    await browser.saveScreenshot(filepath);
  }
}
export default new Actions();
