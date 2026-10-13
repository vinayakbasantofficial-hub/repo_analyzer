Feature: Track dispatched order

  Scenario: Track dispatched order
    Given an order has shipped
    When the tracking page is opened
    Then shipment progress is visible

  Scenario: Track dispatched order again
    Given an order has shipped
    When the tracking page is opened
    Then shipment progress is visible
