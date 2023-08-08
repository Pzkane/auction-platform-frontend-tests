import { pages } from "../support/pages";

export class NavigationTest {
  constructor() {
    this.public_endpoints = ["/", "/offers", "/auction", "/signup", "/forum"];
  }

  async openAuctionPlatformRandomPublicPage() {
    console.log(this.public_endpoints[Math.floor(Math.random() * this.public_endpoints.length)]);
    await browser.url(this.public_endpoints[Math.floor(Math.random() * this.public_endpoints.length)]);
    await pages.basePage
      .getLogInButton()
      .waitForDisplayed({ timeout: 5000 });
  }

  async openAuctionPlatformSignUpPage() {
    await browser.url("/signup");
  }

  async openAuctionPlatformOffersPage() {
    await browser.url("/offers");
  }

  async openAuctionPlatformControlPanelPage() {
    await browser.url("/admin");
  }

  async openAuctionPlatformProfilePage() {
    await browser.url("/");
    await pages.basePage
      .getCreateAccountButton()
      .waitForDisplayed({ timeout: 5000 });
  }

  async pressLogInButton() {
    await pages.basePage.getLogInButton().click();
    await browser.pause(500); // drawing delay
  }

  async pressSignInButton() {
    await pages.basePage.getSignInButton().click();
    await browser.pause(1000); // possible response delay
  }

  async pressSubmitButton() {
    await pages.basePage.getCurrentSubmitBtn().click();
    await browser.pause(4000)
  }

  async pressAddOfferButton() {
    await pages.offersPage.getAddOfferBtn().click();
    await browser.pause(500)
  }

  async pressOkButton() {
    await pages.basePage.getOKButton().click();
    await browser.pause(1200)
  }
}
