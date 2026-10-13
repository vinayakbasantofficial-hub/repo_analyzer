Feature: Reset forgotten password

  Scenario: Reset forgotten password
    Given a registered account exists
    When the user requests a password reset
    Then a reset link is sent
