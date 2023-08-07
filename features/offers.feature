Feature: Manage offers

Background: 
  Given User has opened any Auction Platform page
  When User presses the Log In button
  And User inputs test_user as the email
  And User inputs secret as the password
  And User presses the Sign In button
  Then User is redirected to the Dashboard

@addOffer
Scenario Outline: User creates a new offer
  Given User has opened Offers page
  When User presses the Add Offer button
  And User fills out Add Offer form
  And User presses the Submit button to create offer
  Then User sees successful alert