import { Given, When, Then } from "@wdio/cucumber-framework";
import { tests } from "../support/tests";

When("User applies donation amount", async function () {
  await tests.charityAuctionTest.submitDonation();
});

When("User sees successful alert about participation", async function () {
  await tests.charityAuctionTest.assertUserHasParticipated();
});