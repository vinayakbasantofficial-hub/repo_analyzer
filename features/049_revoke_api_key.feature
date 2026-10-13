Feature: Revoke API key

  Scenario: Revoke API key
    Given an active API key exists
    When the user revokes the key
