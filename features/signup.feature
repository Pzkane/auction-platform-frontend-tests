Feature: Platform sign up test

@signup
Scenario: Sign up with new user
  Given User has opened Auction Platform Sign Up page
  And User fills out Register new account form
  And User presses the Submit button
  Then User is redirected to Offers page