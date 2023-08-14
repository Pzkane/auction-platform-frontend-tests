import {BasePage} from "./basePage"

export class AuctionsPage extends BasePage {
    constructor() {
        super('Auctions');
    }
    async getParticipationBtn() {
        return $(`//button//span[contains(text(),'Participate')]`);
    }

    async getPayPalBtn() {
        return $(`//div[contains(@class, 'paypal-button')]`);
    }
}