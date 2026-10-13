Feature: Apply coupon at checkout

  Scenario: Apply coupon at checkout
    Given the cart contains eligible goods
    When a valid discount code is applied
    Then the total reflects the discount
