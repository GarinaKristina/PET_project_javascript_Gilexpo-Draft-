const GilexpoPage = require("../../pageobjects/GilexpoPage");
const Customer = require("../../pageobjects/Customer");
const customer = Customer.CustomerGilexpo();
const screenshotName = "./gilexpo.png";

before(async function () {
  await GilexpoPage.open();

  // await GilexpoPage.topic.setValue(customer.topic);
  // await GilexpoPage.nameAndAdress.setValue(customer.name_adress);
  // await GilexpoPage.email.setValue(customer.email);
  // await GilexpoPage.switchToFrame(0);
  // await GilexpoPage.content.setValue(customer.text);
  // await GilexpoPage.saveScreenshot(screenshotName);
});
describe("Gilexpo test guestbook page", () => {
  it("should have text in contetnt area", async () => {
    await Actions.clickOnElement(GilexpoPage.guestbookPageContent);
    // await expect(GilexpoPage.content).toHaveText(customer.text);
  });
});
