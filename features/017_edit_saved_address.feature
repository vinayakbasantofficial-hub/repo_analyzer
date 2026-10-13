Feature: Edit saved address

  Scenario: Edit saved address
    Given a shipping address exists
    When its city and postal code are changed
    And the user navigates to the summary panel
    And the user verifies the details
    Then the updated address is stored
    And an audit record is available
