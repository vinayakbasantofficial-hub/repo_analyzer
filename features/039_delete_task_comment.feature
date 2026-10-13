Feature: Delete task comment

  Scenario: Delete task comment
    Given a user owns a comment
    When the comment is deleted
    And the user navigates to the summary panel
    And the user verifies the details
    Then the comment disappears
    And an audit record is available
