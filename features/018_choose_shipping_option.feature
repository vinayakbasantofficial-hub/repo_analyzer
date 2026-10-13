Feature: Choose shipping option

  Scenario: Choose shipping option
    Given checkout has a valid address
    When express delivery is selected
    Then the delivery charge changes
