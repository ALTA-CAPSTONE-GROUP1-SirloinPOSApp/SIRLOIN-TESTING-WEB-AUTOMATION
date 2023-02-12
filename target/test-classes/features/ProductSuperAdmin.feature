@ProductAdmin @Capstone
Feature: Product super admin

  @ProductAdmin @Positif
  Scenario: verify menu product super admin list is enable
    Given user on the sirloinPOS website
    When user click email field
    And user input email "sirloinpos@gmail.com"
    When user click password field
    And user input "Amr12345" as password
    And user click login button
    Then see modal successfully
    When click OK button modal
    Then admin should be redirect to list "Product Super Admin" page

  @ProductAdmin @Positif
  Scenario: add product super admin with valid data
    Given user on the sirloinPOS website
    When user click email field
    And user input email "sirloinpos@gmail.com"
    When user click password field
    And user input "Amr12345" as password
    And user click login button
    Then see modal successfully
    When click OK button modal
    And user click menu product
    Then verify title menu is "Product Tenant"
    And user click button Tambah Product
    And user should be redirect "Tambah Product" page
    Given user choose photos from directory with file name "abc.jpg"
    And user input nomor barcode "123123456789"
    And user input kategory product "Kecap"
    And user input supplier "Pabrik Kecap"
    And user input nama product "Kecap ABC"
    And user input harga jual "12000"
    And user input harga beli "9000"
    And user input stok product "60"
    And user input minimum stok "5"
    Then user click simpan button