import { Given, When, Then } from "@wdio/cucumber-framework";
import { tests } from "../support/tests";

When("User fills out Add Charity Auction form", async function () {
  await tests.administrationTest.fillOutCreateCharityAuctionForm();
});

When("User fills out Add Commercial Auction form", async function () {
  await tests.administrationTest.fillOutCreateCommercialAuctionForm();
});

When("User presses the Submit button to create auction", async function () {
  await tests.administrationTest.pressSubmitAuctionButton();
});

When("User sees successful alert about created auction", async function () {
  await tests.administrationTest.assertAuctionIsCreated();
});