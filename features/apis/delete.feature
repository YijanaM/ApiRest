Feature: Deleting an Order

  Scenario:  Deletes an order
  
    When User tries to delete the order with ID '9965874'
    Then the order with ID '10' should be deleted successfully