Feature: Reject oversized upload

  Scenario: Reject oversized upload
    Given the file uploader is open
    When a file above the size limit is selected
    Then a size warning appears
