Feature: Submit product review

  Scenario: Submit product review
    Given the user purchased a product
    When a rating and review are submitted
    Then the review is visible
