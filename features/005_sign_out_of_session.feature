Feature: Sign out of session

  Scenario: Sign out of session
    Given the user is signed in
    When the sign-out button is clicked
    Then the login page is displayed
