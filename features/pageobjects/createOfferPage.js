import { BasePage } from "./basePage";
const path = require('path');

export class CreateOfferPage extends BasePage {
  constructor() {
    super('AddOffer');
  }

  getTagInputField(tagPosition) {
    return $(`//div[@id='AddOffer_tags'][${tagPosition}]/div[@class='col'][1]//input`);
  }

  getSelectTagDropdown(tagPosition) {
    return $(`//div[@id='AddOffer_tags'][${tagPosition}]/div[@class='col'][2]//div[@class='v-select__selections']`);
  }

  getAddTagPlusBtn() {
    return $(`button[id="AddOffer_add_tag"]`)
  }

  async randomSelectTagCategoryForPos(tagPosition) {
    // First select dropdown on page and click it
    const dropdown = this.getSelectTagDropdown(tagPosition);
    await dropdown.click();
    // Then select test element from the list and click it
    const tag = await $$(`//div[text()="test_tag_category" and @class='v-list-item__title']`)[tagPosition-1];
    await tag.click();
  }

  async selectPicture() {
    // This took ages to setup
    // To make it work - first upload the image to the browser
    const inputField = await this.getInputField("files");
    const filePath = path.join(__dirname, '../support/resources/flower.jpg');
    const uploadedFilePath = await browser.uploadFile(filePath);

    // Browser is waiting for REAL input tag, so we need to override
    // Vuetify widths and opacity for raw file input button to show up
    await browser.execute(function () {
      const input = document.getElementById('AddOffer_files');
      input.style.maxWidth = '100px';
      input.style.width = '100px';
      input.style.opacity = '1';
    })

    // Valid testing input field should meet these criterions
    await inputField.waitForExist();
    await inputField.waitForDisplayed();
    await inputField.waitForEnabled();

    // Finally, show to the input that file has been uploaded
    inputField.setValue(uploadedFilePath);
  }

  getSuccessAlert() {
    return $('div=Success');
  }

  getSubmitBtn() {
    return $(`button[id="AddOffer_submit"]`);
  }
}
