Feature: Assign task

  Scenario: Assign task
    Given an unassigned task exists
    When a teammate is selected as assignee
    Then the teammate is assigned
