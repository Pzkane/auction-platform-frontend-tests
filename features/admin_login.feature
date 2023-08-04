Feature: Platform Login test for admin

@login
Scenario Outline: Valid login with registered admin
  Given User has opened any Auction Platform page
  When User presses the Log In button
  And User inputs <admin_login> as the email
  And User inputs <admin_password> as the password
  And User presses the Sign In button
  Then User is redirected to the Control Panel

  Examples:
      | admin_login        | admin_password       |
      | test_admin         | secret              |