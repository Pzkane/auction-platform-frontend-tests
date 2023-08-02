import {BasePage} from "./basePage"

export class CheckOffersPage extends BasePage {
    getCheckOffersHeader() {
        return $('div=Offer list')
    }
}