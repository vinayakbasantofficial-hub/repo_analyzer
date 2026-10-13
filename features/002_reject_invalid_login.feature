Feature: Reject invalid login

  Scenario: Reject invalid login
    Given the sign-in page is open
    When an incorrect password is submitted
    Then an authentication error is shown
