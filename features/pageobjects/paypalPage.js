import {BasePage} from "./basePage"

/** @brief This test should be run with cookies erased
 */
export class PaypalPage extends BasePage {
    constructor() {
        super('');
        this.windowReferences = null;
    }

    getEmailInputField() {
        return $(`input[id='email']`);
    }

    getPasswordInputField() {
        return $(`input[id='password']`);
    }

    getNextBtn() {
        return $(`button[id='btnNext']`);
    }

    getLogInBtn() {
        return $(`button[id='btnLogin']`);
    }

    async login(email, password) {
        // Get all window instances
        this.windowReferences = await browser.getWindowHandles();
        console.log(this.windowReferences);
        // Switch to child window
        await browser.switchToWindow(this.windowReferences[1]);

        await (await this.getEmailInputField()).setValue(email);
        await browser.pause(2000);
        await (await this.getNextBtn()).click();
        await browser.pause(2000);
        await (await this.getPasswordInputField()).setValue(password);
        await (await this.getLogInBtn()).click();
    }

    async getConfirmPurchaseBtn() {
        return $(`button=Complete Purchase`);
    }

    async returnToMainWindow() {
        await browser.switchToWindow(this.windowReferences[0]);
        this.windowReferences = null;
    }
}