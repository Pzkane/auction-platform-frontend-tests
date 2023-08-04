import { BasePage } from "./basePage";

export class OffersPage extends BasePage {
  getAddOfferBtn() {
    return $("button=Add Offer");
  }
}
