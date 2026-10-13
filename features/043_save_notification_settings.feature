Feature: Save notification settings

  Scenario: Save notification settings
    Given the notification page is open
    When email alerts are disabled
    Then the choice is saved
