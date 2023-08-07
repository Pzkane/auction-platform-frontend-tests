import { BasePage } from "../pageobjects/basePage";
import {OffersPage} from "../pageobjects/offersPage";
import {CreateOfferPage} from "../pageobjects/createOfferPage";
import {CreateAccountPage} from "../pageobjects/createAccountPage";
import { CheckOffersPage } from "../pageobjects/checkOffersPage";
import {CheckDashboardPage} from "../pageobjects/checkDashboardPage";
import {CheckControlPanelPage} from "../pageobjects/checkControlPanelPage";
import {ControlPanelPage} from "../pageobjects/controlPanelPage";
import {CreateAuctionPage} from "../pageobjects/createAuctionPage";
import {CheckAuctionPage} from "../pageobjects/checkAuctionPage";

class Pages {
  constructor() {
    this.basePage = new BasePage();
    this.offersPage = new OffersPage();
    this.controlPanelPage = new ControlPanelPage();
    this.createAuctionPage = new CreateAuctionPage();
    this.createOfferPage = new CreateOfferPage();
    this.createAccountPage = new CreateAccountPage();
    this.checkOffersPage = new CheckOffersPage();
    this.checkDashboardPage = new CheckDashboardPage();
    this.checkControlPanelPage = new CheckControlPanelPage();
    this.checkAuctionPage = new CheckAuctionPage();
  }
}

export const pages = new Pages();
