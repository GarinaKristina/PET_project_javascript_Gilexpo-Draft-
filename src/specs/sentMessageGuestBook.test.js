import { Customer } from "../data/Customer.js";
import Actions from "../helpers/Actions.js";
import Page from "../pageobjects/index.js";

describe("Sent letter to support from guestbook", async () => {
  it("Should type data and save screenshot ", async () => {
    await Actions.clickOnElement(Page.HomePage.guestBook);
    await Actions.setValue(Page.HomePage.topic, Customer.topic);
    // await Actions.switchToFrame(0);
    // await Actions.setValue(Page.HomePage.content, Customer.text);
    // await Actions.saveScreenshot();
  });
});
