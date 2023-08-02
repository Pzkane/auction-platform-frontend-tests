import { BasePage } from "../pageobjects/basePage";
import {CreateAccountPage} from "../pageobjects/createAccountPage";
import { CheckOffersPage } from "../pageobjects/checkOffersPage";

class Pages {
  constructor() {
    this.basePage = new BasePage();
    this.createAccountPage = new CreateAccountPage();
    this.checkOffersPage = new CheckOffersPage();
  }
}

export const pages = new Pages();
