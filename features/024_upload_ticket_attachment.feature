Feature: Upload ticket attachment

  Scenario: Upload ticket attachment
    Given a support ticket is open
    When a permitted image is attached
    Then the attachment is saved
