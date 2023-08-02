Feature: Platform Login test

@login
Scenario Outline: Invalid login with user
  Given User has opened any Auction Platform page
  When User presses the Log In button
  And User inputs <email> as the email
  And User inputs <password> as the password
  And User presses the Sign In button
  Then User sees invalid credentials message

  Examples:
      | email             | password            |
      | jhskfgj@gmail.com | Password123         |
      # | 345njdf@gmail.com | Password123fnd      |
      # | kfgm44@gmail.com  | Passwordvbdqw34123  |