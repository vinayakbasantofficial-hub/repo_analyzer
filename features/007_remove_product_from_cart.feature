Feature: Remove product from cart

  Scenario: Remove product from cart
    Given the basket contains an item
    When the user removes the item
    Then the basket no longer contains it
