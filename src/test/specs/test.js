import Actions from "../../helpers/Actions";

const screenshotName = "./gilexpo.png";

before(async function () {
  await 
  // await GilexpoPage.topic.setValue(customer.topic);
  // await GilexpoPage.nameAndAdress.setValue(customer.name_adress);
  // await GilexpoPage.email.setValue(customer.email);
  // await GilexpoPage.switchToFrame(0);
  // await GilexpoPage.content.setValue(customer.text);
  // await GilexpoPage.saveScreenshot(screenshotName);
});
describe("Gilexpo test guestbook page", () => {
  it("should have text in content area", async () => {
    await clickOnElement(GilexpoPage.guestbookPageContent);
    // await expect(GilexpoPage.content).toHaveText(customer.text);
  });
});
