Feature: Retain search filters

  Scenario: Retain search filters
    Given a filter is active
    When the page is refreshed
    Then the filter remains selected

  Scenario: Retain search filters again
    Given a filter is active
    When the page is refreshed
    Then the filter remains selected
