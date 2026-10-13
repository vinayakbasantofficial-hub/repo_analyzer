Feature: Request refund

  Scenario: Request refund
    Given a delivered order is refundable
    When a refund request is submitted
