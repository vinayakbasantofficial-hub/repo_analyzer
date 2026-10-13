Feature: Create API key

  Scenario: Create API key
    Given the developer page is accessible
    When the user creates an API key
    Then the key is displayed once
