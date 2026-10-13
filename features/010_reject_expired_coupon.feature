Feature: Reject expired coupon

  Scenario: Reject expired coupon
    Given the cart contains goods
    When an expired coupon is entered
    Then a coupon error is shown
