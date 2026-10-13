Feature: Move task between columns

  Scenario: Move task between columns
    Given a board contains an open task
    When the task is dragged to in progress
    Then the new status is saved
