Feature: Create task

  Scenario: Create task
    Given a project is open
    When a task title and deadline are submitted
    Then a task is added

  Scenario: Create task again
    Given a project is open
    When a task title and deadline are submitted
    Then a task is added
