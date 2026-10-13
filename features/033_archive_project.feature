Feature: Archive project

  Scenario: Archive project
    Given an active project is selected
    When the archive action is confirmed
    Then the project is archived
