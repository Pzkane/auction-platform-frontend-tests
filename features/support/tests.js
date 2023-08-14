import { NavigationTest } from "../testobjects/navigation-test";
import { LoginTest } from "../testobjects/login-test";
import {SignupTest} from "../testobjects/signupTest";
import {OffersTest} from "../testobjects/offers-test";
import {AdministrationTest} from "../testobjects/administration-test";
import {CharityAuctionTest} from "../testobjects/charityAuction-test";
import {PaypalTest} from "../testobjects/paypal-test";

class Tests {
  constructor() {
    this.navigationTest = new NavigationTest();
    this.loginTest = new LoginTest();
    this.signupTest = new SignupTest();
    this.offersTest = new OffersTest();
    this.administrationTest = new AdministrationTest();
    this.charityAuctionTest = new CharityAuctionTest();
    this.paypalTest = new PaypalTest();
  }
}

export const tests = new Tests();
