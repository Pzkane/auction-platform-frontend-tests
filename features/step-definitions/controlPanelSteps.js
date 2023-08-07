import { Given, When, Then } from "@wdio/cucumber-framework";
import { tests } from "../support/tests";

When("User fills out Add Charity Auction form", async function () {
  await tests.administrationTest.fillOutCreateCharityAuctionForm();
});

When("User presses the Submit button to create auction", async function () {
  await tests.administrationTest.pressSubmitAuctionButton();
});

Then("User sees successful alert about created auction", async function () {
  await tests.administrationTest.assertAuctionIsCreated();
});