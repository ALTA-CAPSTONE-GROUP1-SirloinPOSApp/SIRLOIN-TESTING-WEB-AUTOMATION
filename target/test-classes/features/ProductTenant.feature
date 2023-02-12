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

  @ProductTenant @Negative @Capstone
  Scenario Outline: upload product with invalid data input null values
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
    And Button simpan is disable
    Examples:
      | foto        | barcode | kategori | suplier       | nama              | jual  | beli  | stok | minstok |
      |             | 123     | Minyak   | Pabrik Minyak | Minyak Bimoli     | 40000 | 35000 | 100  | 10      |
      | fortune.jpg |         | Minyak   | Pabrik Minyak | Minyak Fortune    | 39000 | 33000 | 100  | 10      |
      | jumbo.jpg   | 123     |          | Pabrik Mie    | Mie Indomie Jumbo | 6000  | 4000  | 200  | 20      |
      | mie.jpg     | 123     | Mie      |               | Mie Indomie       | 3500  | 2000  | 200  | 20      |
      | miesoto.jpg | 123     | Mie      | Pabrik Mie    |                   | 3500  | 2000  | 200  | 20      |
      | fortune.jpg | 123     | Minyak   | Pabrik Minyak | Minyak Fortune    |       | 33000 | 100  | 10      |
      | jumbo.jpg   | 123     | Mie      | Pabrik Mie    | Mie Indomie Jumbo | 6000  |       | 200  | 20      |
      | mie.jpg     | 123     | Mie      | Pabrik Mie    | Mie Indomie       | 3500  | 2000  |      | 20      |
      | miesoto.jpg | 123     | Mie      | Pabrik Mie    | Mie Indomie       | 3500  | 2000  | 200  |         |

  @ProductTenant @Positive @Capstone
  Scenario: Verify button update for Kecap ABC is enabled
    Given user on the sirloinPOS website
    When user login with input "mukhlisanshori1997@gmail.com" as email and "Mukhlis11111" as password
    And verify succes login title "Berhasil Login"
    And user click menu product
    Then user click button edit for Kecap ABC
    And user redirect to edit product and verify title is "Edit Product"

  @ProductTenant @Positive @Capstone
  Scenario: Verify feature update for Kecap ABC is enabled with valid value
    Given user on the sirloinPOS website
    When user login with input "mukhlisanshori1997@gmail.com" as email and "Mukhlis11111" as password
    And verify succes login title "Berhasil Login"
    And user click menu product
    Then user click button edit for Kecap ABC
    And user redirect to edit product and verify title is "Edit Product"
    Then user update foto kecap "abcedit.jpg"
    And user edit kategori kecap "Kecap Hitam"
    And user edit product name "Kecap ABC Edit"
    And user update stock product "98"
    And user edit minimum stock barang "5"
    And user update harga jual "9000"
    And user update harga beli "4000"
    And user click button simpan on edit page
    And user get message success edit "success update product"

  @ProductTenant @Positive @Capstone
  Scenario: upload product with barcode is already used for another product
    Given user on the sirloinPOS website
    When user login with input "mukhlisanshori1997@gmail.com" as email and "Mukhlis11111" as password
    And verify succes login title "Berhasil Login"
    And user click menu product
    Then verify title menu is "Product Tenant"
    And user click button Tambah Product
    And user should be redirect "Tambah Product" page
    Given user choose photos from directory with file name "tehgelas.jpg"
    And user input nomor barcode "003"
    And user input kategory product "Minuman"
    And user input supplier "Pabrik Teh Gelas"
    And user input nama product "Teh Gelas"
    And user input harga jual "2000"
    And user input harga beli "1000"
    And user input stok product "60"
    And user input minimum stok "5"
    Then user click simpan button
    And user get message failed "duplicated product on barcode"

  @ProductTenant @Negative @Capstone
  Scenario: Verify feature update with barcode is already used
    Given user on the sirloinPOS website
    When user login with input "mukhlisanshori1997@gmail.com" as email and "Mukhlis11111" as password
    And verify succes login title "Berhasil Login"
    And user click menu product
    Then user click button edit for Kecap ABC
    And user redirect to edit product and verify title is "Edit Product"
    Then user update foto kecap "abcedit.jpg"
    And user edit kategori kecap "Kecap Hitam"
    And user edit barcode with number already used in another product "004"
    And user edit product name "Kecap ABC"
    And user update stock product "79"
    And user edit minimum stock barang "5"
    And user update harga jual "15000"
    And user update harga beli "10000"
    And user click button simpan on edit page
    And user get message failed "duplicated product on barcode"

  @ProductTenant @Positive @Capstone
  Scenario: Verify feature search field is enable
    Given user on the sirloinPOS website
    When user login with input "mukhlisanshori1997@gmail.com" as email and "Mukhlis11111" as password
    And verify succes login title "Berhasil Login"
    And user click menu product
    Then user input "Kec" from fitur search product tenant
    And product first name with value Kec displayed


