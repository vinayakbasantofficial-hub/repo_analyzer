Feature: Delete customer account

  Scenario: Delete customer account
    Given the customer account is active
    When the account deletion process is confirmed
    And the user navigates to the summary panel
    And the user verifies the details
    Then the account is disabled
    And an audit record is available
