Feature: Switch interface language

  Scenario: Switch interface language
    Given language settings are available
    When French is selected
    Then navigation labels change language
