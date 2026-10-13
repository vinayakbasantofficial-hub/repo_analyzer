Feature: Update user role

  Scenario: Update user role
    Given an admin sees a standard user
    When the role is changed to editor
    And the user navigates to the summary panel
    And the user verifies the details
    Then the user gains editor permissions
    And an audit record is available
