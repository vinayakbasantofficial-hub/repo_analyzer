Feature: Comment on task

  Scenario: Comment on task
    Given a task is open
    When a comment is submitted
    Then the comment appears in the activity log
