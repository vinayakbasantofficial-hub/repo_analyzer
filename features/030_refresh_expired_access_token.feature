Feature: Refresh expired access token

  Scenario: Refresh expired access token
    Given a refresh session is valid
    When the access token expires and refresh is requested
    Then a new access token is returned
