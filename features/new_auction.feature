Feature: Create new auction

Background: 
  Given User has opened any Auction Platform page
  When User presses the Log In button
  And User inputs test_admin as the email
  And User inputs secret as the password
  And User presses the Sign In button
  Then User is redirected to the Control Panel

@newAuction
Scenario: Create charity auction
  Given User has opened Control Panel page
  When User presses the Add Auction button under charity section
  And User fills out Add Charity Auction form
  And User presses the Submit button to create auction
  Then User sees successful alert about created auction