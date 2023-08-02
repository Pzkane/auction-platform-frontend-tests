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

  async pressSignUpButton() {
    await pages.createAccountPage.getCurrentSubmitBtn().click();
    await browser.pause(4000)
  }
}
