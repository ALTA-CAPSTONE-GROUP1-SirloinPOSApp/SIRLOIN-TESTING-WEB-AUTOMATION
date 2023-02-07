Feature: Product Tenant
  @ProductTenant @Positive @Capstone
    Scenario: Verify menu product enable
    Given user on the sirloinPOS website
    When user login with input "mukhlisanshori1997@gmail.com" as email and "Mukhlis11111" as password
    And verify succes login title "Berhasil Login"
    And user click menu product
    Then verify title menu is "Product Tenant"

  @ProductTenant @Positive @Capstone
    Scenario: verify buutton tambah product enable
    Given user on the sirloinPOS website
    When user login with input "mukhlisanshori1997@gmail.com" as email and "Mukhlis11111" as password
    And verify succes login title "Berhasil Login"
    And user click menu product
    Then verify title menu is "Product Tenant"
    And user click button Tambah Product
    And user should be redirect "Tambah Product" page

  @ProductTenant @Positive @Capstone
    Scenario: upload product with valid data input
    Given user on the sirloinPOS website
    When user login with input "mukhlisanshori1997@gmail.com" as email and "Mukhlis11111" as password
    And verify succes login title "Berhasil Login"
    And user click menu product
    Then verify title menu is "Product Tenant"
    And user click button Tambah Product
    And user should be redirect "Tambah Product" page
    Given user choose photos from directory
    And user input nomor barcode "001"
    And user input kategory product "Kecap"
    And user input supplier "Pabrik Kecap"
    And user input minimum stok "5"
    And user input nama product "Kecap ABC"
    And user input harga jual "5000"
    And user input harga beli "3000"
    And user input stok product "30"
    Then user click simpan button

  @ProductTenant @Positive @Capstone
  Scenario: upload product with valid data input
    Given user on the sirloinPOS website
    When user login with input "mukhlisanshori1997@gmail.com" as email and "Mukhlis11111" as password
    And verify succes login title "Berhasil Login"
    And user click menu product
    Then verify title menu is "Product Tenant"
    And user click button Tambah Product
    And user should be redirect "Tambah Product" page
    Given user choose photos from directory with file name "bango.jpg"
    And user input nomor barcode "002"
    And user input kategory product "Kecap"
    And user input supplier "Pabrik Kecap"
    And user input nama product "Kecap Bango"
    And user input harga jual "7000"
    And user input harga beli "5000"
    And user input stok product "50"
    And user input minimum stok "10"
    Then user click simpan button

  @ProductTenant @Positive @Capstone
  Scenario Outline: upload product with valid data input
    Given user on the sirloinPOS website
    When user login with input "mukhlisanshori1997@gmail.com" as email and "Mukhlis11111" as password
    And verify succes login title "Berhasil Login"
    And user click menu product
    Then verify title menu is "Product Tenant"
    And user click button Tambah Product
    And user should be redirect "Tambah Product" page
    Given user choose photos from directory with file name "<foto>"
    And user input nomor barcode "<barcode>"
    And user input kategory product "<kategori>"
    And user input supplier "<suplier>"
    And user input nama product "<nama>"
    And user input harga jual "<jual>"
    And user input harga beli "<beli>"
    And user input stok product "<stok>"
    And user input minimum stok "<minstok>"
    Then user click simpan button
    Examples:
      | foto        | barcode | kategori | suplier       | nama              | jual  | beli  | stok | minstok |
      | bimoli.jpg  | 003     | Minyak   | Pabrik Minyak | Minyak Bimoli     | 40000 | 35000 | 100  | 10      |
      | fortune.jpg | 004     | Minyak   | Pabrik Minyak | Minyak Fortune    | 39000 | 33000 | 100  | 10      |
      | jumbo.jpg   | 005     | Mie      | Pabrik Mie    | Mie Indomie Jumbo | 6000  | 4000  | 200  | 20      |
      | mie.jpg     | 006     | Mie      | Pabrik Mie    | Mie Indomie       | 3500  | 2000  | 200  | 20      |
      | miesoto.jpg | 007     | Mie      | Pabrik Mie    | Mie Indomie Soto  | 3500  | 2000  | 200  | 20       |
