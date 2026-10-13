Feature: Place card order

  Scenario: Place card order
    Given the cart and delivery address are valid
    When the user pays with an approved card
    Then an order confirmation appears
