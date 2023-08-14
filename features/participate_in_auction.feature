Feature: Create new auction

Background: 
  Given User has opened any Auction Platform page
  When User presses the Log In button
  And User inputs test_user as the email
  And User inputs secret as the password
  And User presses the Sign In button
  Then User is redirected to the Dashboard

@auctionParticipation
Scenario: Participate in charity auction
  Given User has opened Auction page
  When User applies donation amount
  And User signs into Paypal account and confirms the transaction: <paypal_email> <paypal_secret>
  And User sees successful alert about participation
  And User dismisses modal pop-up
  Then User signs out of the account

  Examples:
      | paypal_email          | paypal_secret    |
      | projektsTest@mail.com | 12345678         |