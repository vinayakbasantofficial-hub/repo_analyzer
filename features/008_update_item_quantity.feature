Feature: Update item quantity

  Scenario: Update item quantity
    Given the basket has one unit of an item
    When the quantity is increased to three
    Then the line total is recalculated

  Scenario: Update item quantity again
    Given the basket has one unit of an item
    When the quantity is increased to three
    Then the line total is recalculated
