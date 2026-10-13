Feature: Rename project

  Scenario: Rename project
    Given an existing project is selected
    When the project name is edited
    Then the new name appears
