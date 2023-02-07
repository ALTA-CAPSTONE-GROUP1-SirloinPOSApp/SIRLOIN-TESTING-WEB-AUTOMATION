Feature: Product Toko

  @ProductToko @Positive @Capstone
  Scenario: Search barang
  Scenario: Search for a product
    Given the user is on the search page
    When the user enters a product name
    And the user clicks the search button
    Then the results should display the products that match the search criteria
    And the first product should have the correct name