class Actions {
  screenshotName = "./gilexpo.png";

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

  async setValue(selector, value) {
    const element = await this.getElement(selector);
    const isDisplayed = await element.isDisplayed();
    if (isDisplayed) {
      await element.setValue(value);
    }
  }

  async saveScreenshot() {
    await browser.saveScreenshot(this.screenshotName);
  }

  async switchToFrame(id) {
    await browser.switchToFrame(id);
  }
  async getValueElement(selector) {
    const element = await this.getElement(selector);
    const value = await element.getValue();
    return value;
  }
}
export default new Actions();
