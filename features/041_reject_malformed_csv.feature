Feature: Reject malformed CSV

  Scenario: Reject malformed CSV
    Given the import page is available
    When a CSV without required columns is uploaded
    Then validation feedback appears
