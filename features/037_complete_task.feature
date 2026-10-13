Feature: Complete task

  Scenario: Complete task
    Given an active task exists
    When the task is marked done
    Then completion status is visible
