import { Given, When, Then } from "@wdio/cucumber-framework";
import { tests } from "../support/tests";

When("User fills out Register new account form", async function () {
  await tests.signupTest.fillOutCreateAccountForm();
});
