Feature: Use pagination

  Scenario: Use pagination
    Given a list has more than one page
    When the next page button is clicked
    Then the next group of records appears
