import { Given, When, Then } from "@wdio/cucumber-framework";
import { tests } from "../support/tests";

When("User fills out Add Offer form", async function () {
  await tests.offersTest.fillOutAddOfferForm();
});

When("User presses the Submit button to create offer", async function () {
  await tests.offersTest.pressSubmitButton();
});

Then("User sees successful alert", async function () {
  await tests.offersTest.assertCheckOfferSuccessfulNotification();
});