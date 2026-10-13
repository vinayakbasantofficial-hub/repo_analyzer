Feature: Add product to cart

  Scenario: Add product to cart
    Given a product is in stock
    When the user adds it to the basket
    And the user navigates to the summary panel
    And the user verifies the details
    Then the basket contains the product
    And an audit record is available
