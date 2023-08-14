import { Given, When, Then } from "@wdio/cucumber-framework";
import { tests } from "../support/tests";

Given("User has opened any Auction Platform page", async function () {
  await tests.navigationTest.openAuctionPlatformRandomPublicPage();
});

Given("User has opened Auction Platform Sign Up page", async function () {
  await tests.navigationTest.openAuctionPlatformSignUpPage();
});

Given("User has opened Auction Platform Profile page", async function () {
  await tests.navigationTest.openAuctionPlatformProfilePage();
});

Given("User has opened Offers page", async function () {
  await tests.navigationTest.openAuctionPlatformOffersPage();
});

Given("User has opened Control Panel page", async function () {
  await tests.navigationTest.openAuctionPlatformControlPanelPage();
});

Given("User has opened Auction page", async function () {
  await tests.navigationTest.openAuctionsPage();
});

When("User presses the Log In button", async function () {
  await tests.navigationTest.pressLogInButton();
});

When("User presses the Sign In button", async function () {
  await tests.navigationTest.pressSignInButton();
}); 

When("User presses the Submit button", async function () {
  await tests.navigationTest.pressSubmitButton();
});

When("User presses the Add Offer button", async function () {
  await tests.navigationTest.pressAddOfferButton();
});

When("User dismisses modal pop-up", async function () {
  await tests.navigationTest.pressOkButton();
});

When("User presses the Add Auction button under charity section", async function () {
  await tests.administrationTest.pressAddCharityButton();
});

When("User presses the Add Auction button under commercial section", async function () {
  await tests.administrationTest.pressAddCommercialButton();
});

Then("User is redirected to Offers page", async function () {
  await tests.signupTest.assertCheckOffersPage();
});

Then("User is redirected to the Dashboard", async function () {
  await tests.loginTest.assertCheckDashboardPage();
});

Then("User is redirected to the Control Panel", async function () {
  await tests.loginTest.assertCheckControlPanelPage();
});