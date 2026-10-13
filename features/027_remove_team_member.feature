Feature: Remove team member

  Scenario: Remove team member
    Given an admin sees an active member
    When the member is removed
    Then access is revoked
