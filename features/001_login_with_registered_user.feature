Feature: Login with registered user

  Scenario: Login with registered user
    Given the sign-in page is open
    When a valid email and password are submitted
    Then the dashboard is displayed
