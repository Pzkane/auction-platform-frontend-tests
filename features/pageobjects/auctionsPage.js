import {BasePage} from "./basePage"

export class AuctionsPage extends BasePage {
    constructor() {
        super('Auctions');
    }
    async getParticipationBtn() {
        return this.getContainingButton('Participate');
    }
    async getPayPalBtn() {
        return $(`//div[contains(@class, 'paypal-button')]`);
    }
    async getPlaceBidBtn() {
        return this.getContainingButton('Place Bid');
    }
}