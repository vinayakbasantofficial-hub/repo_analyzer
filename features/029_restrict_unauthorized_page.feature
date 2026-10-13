Feature: Restrict unauthorized page

  Scenario: Restrict unauthorized page
    Given a guest has no session
    When the guest opens an admin page
    Then access is denied
