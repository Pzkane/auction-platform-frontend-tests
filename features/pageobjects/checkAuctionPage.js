import {BasePage} from "./basePage"

export class CheckAuctionPage extends BasePage {
    getSuccessMessage() {
        return $('div=Auction successfully created!')
    }
}