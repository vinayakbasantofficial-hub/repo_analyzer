Feature: Receive task notification

  Scenario: Receive task notification
    Given a user is assigned a task
    When the assignment is completed
    Then a notification is generated
