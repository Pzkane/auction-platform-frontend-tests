import {BasePage} from "./basePage"
const path = require('path');

export class CreateAuctionPage extends BasePage {
    constructor() {
        super('AddAuction');
    }

    getSelectObjTypeDropdownForType(auctionType) {
        const selections = $$(`//div[@id='AddAuction_objType']//div[@class='v-select__selections']`);
        if (selections.length > 1) {
            switch (auctionType) {
                case 'charity':
                    return selections[0];

                case 'commercial':
                    return selections[1];

                default:
                    throw ReferenceError('Unknown auction type');
            }
        } else {
            return selections[0];
        }
    }

    async randomSelectObjectType(auctionType) {
        const dropdown = this.getSelectObjTypeDropdownForType(auctionType);
        await dropdown.click();
        const type = $$(`//div[text()='test_obj_type']`);
        if (type.length > 1) {
            switch (auctionType) {
                case 'charity':
                    await type[0].click();
                    break;
                case 'commercial':
                    await type[1].click();
                    break;
                default:
                    throw ReferenceError('Unknown auction type');
            }
        } else {
            await type[0].click();
        }
    }

    async selectPicture() {
        // This took ages to setup
        // To make it work - first upload the image to the browser
        const inputField = await this.getInputField("image");
        const filePath = path.join(__dirname, '../support/resources/flower.jpg');
        const uploadedFilePath = await browser.uploadFile(filePath);

        // Browser is waiting for REAL input tag, so we need to override
        // Vuetify widths and opacity for raw file input button to show up
        await browser.execute(function () {
            const input = document.getElementById('AddAuction_image');
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

    async selectRandomDate() {
        const dateDropdown = this.getInputField("endDate");
        await dateDropdown.click();
        $(`//button[@class='v-btn v-btn--text v-btn--rounded theme--light']`).click();
    }
}