Feature: Create support ticket

  Scenario: Create support ticket
    Given the support page is open
    When a valid issue is submitted
    Then a new ticket number appears
