Feature: Purchase order


  Scenario: Find purchase order by ID
    And Automation user makes an order
    And Automation find order '9965874'
    