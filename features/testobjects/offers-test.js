import { pages } from "../support/pages";
import { data } from "../support/data";

export class OffersTest {
  async fillOutAddOfferForm() {
      await pages.createOfferPage.getInputField("title").setValue(await data.offerData.newOffer.title);
      await pages.createOfferPage.getTextArea("description").setValue(await data.offerData.newOffer.description);
      await pages.createOfferPage.getTagInputField(1).setValue(await data.offerData.newOffer.tag_label_primary);
      await pages.createOfferPage.getAddTagPlusBtn().click();
      await pages.createOfferPage.getTagInputField(2).setValue(await data.offerData.newOffer.tag_label_secondary);
      await pages.createOfferPage.randomSelectTagCategoryForPos(1);
      await pages.createOfferPage.randomSelectTagCategoryForPos(2);
      await pages.createOfferPage.getInputField("phone").setValue(await data.offerData.newOffer.phone);
      await pages.createOfferPage.selectPicture();
  }

  async pressSubmitButton() {
    await pages.createOfferPage.getSubmitBtn().click();
    await browser.pause(1500)
  }

  async assertCheckOfferSuccessfulNotification() {
    await pages.createOfferPage.getSuccessAlert().waitForDisplayed({ timeout: 5000 });
  }
}
