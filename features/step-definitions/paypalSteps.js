import { Given, When, Then } from "@wdio/cucumber-framework";
import { tests } from "../support/tests";

When("User signs into Paypal account and confirms the transaction: {word} {word}", async function (email, password) {
  await tests.paypalTest.confirmTransaction(email, password);
});