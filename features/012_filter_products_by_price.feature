Feature: Filter products by price

  Scenario: Filter products by price
    Given catalog items have different prices
    When a price range is selected
    Then only matching products remain
