import {BasePage} from "./basePage"

export class ControlPanelPage extends BasePage {
    getAddAuctionBtnFor(type) {
        const selections = $$(`//span[contains(text(),'Add Auction')]`);
        switch (type) {
            case 'charity':
                return selections[0];
        
            case 'commercial':
                if (selections.length > 1)
                    return selections[1];
                return selections[0];
            default:
                throw ReferenceError('Unknown auction type');
        }
    }
}