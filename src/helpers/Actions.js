module.exports = class Actions {
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
};
