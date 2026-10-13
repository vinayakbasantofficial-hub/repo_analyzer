Feature: Cancel pending order

  Scenario: Cancel pending order
    Given an order has not shipped
    When the user requests cancellation
    Then the order is canceled
