class Actions {
  async openUrl(url) {
    await browser.url(url);
  }

  async getElement(selector) {
    const element = await $(selector);
    return element;
  }

  async clickOnElement(selector) {
    const element = await this.getElement(selector);
    const isDisplayed = await element.isDisplayed();
    if (isDisplayed) {
      await element.click();
    }
  }
}
export default new Actions();
