import {BasePage} from "./basePage"

export class ControlPanelPage extends BasePage {
    getAddAuctionBtnFor(type) {
        switch (type) {
            case 'charity':
                return $$(`//span[contains(text(),'Add Auction')]`)[0];
        
            case 'commercial':
                return $$(`//span[contains(text(),'Add Auction')]`)[1];
            default:
                throw ReferenceError('Unknown auction type');
        }
    }
}