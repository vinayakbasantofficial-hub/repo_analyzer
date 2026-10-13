Feature: Invite team member

  Scenario: Invite team member
    Given an admin opens team settings
    When a valid email invitation is sent
    Then the invitation is pending
