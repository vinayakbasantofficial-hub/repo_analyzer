Feature: Save delivery address

  Scenario: Save delivery address
    Given the user is signed in
    When a new shipping address is entered
    Then the address appears in the address book
