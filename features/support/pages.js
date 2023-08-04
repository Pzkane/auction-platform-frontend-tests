import { BasePage } from "../pageobjects/basePage";
import {OffersPage} from "../pageobjects/offersPage";
import {CreateOfferPage} from "../pageobjects/createOfferPage";
import {CreateAccountPage} from "../pageobjects/createAccountPage";
import { CheckOffersPage } from "../pageobjects/checkOffersPage";
import {CheckDashboardPage} from "../pageobjects/checkDashboardPage";
import {CheckControlPanelPage} from "../pageobjects/checkControlPanelPage";

class Pages {
  constructor() {
    this.basePage = new BasePage();
    this.offersPage = new OffersPage();
    this.createOfferPage = new CreateOfferPage();
    this.createAccountPage = new CreateAccountPage();
    this.checkOffersPage = new CheckOffersPage();
    this.checkDashboardPage = new CheckDashboardPage();
    this.checkControlPanelPage = new CheckControlPanelPage();
  }
}

export const pages = new Pages();
