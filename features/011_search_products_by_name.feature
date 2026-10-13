Feature: Search products by name

  Scenario: Search products by name
    Given the catalog is populated
    When a product name is searched
    Then matching results appear
