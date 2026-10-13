Feature: Export search results

  Scenario: Export search results
    Given a filtered results page is open
    When the export action is selected
    Then a downloadable CSV is generated
