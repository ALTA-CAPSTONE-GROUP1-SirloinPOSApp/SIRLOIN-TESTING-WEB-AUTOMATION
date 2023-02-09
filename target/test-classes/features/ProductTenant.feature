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

  @ProductTenant @Negative @Capstone
  Scenario: Verify button update for Kecap ABC is enabled
    Given user on the sirloinPOS website
    When user login with input "mukhlisanshori1997@gmail.com" as email and "Mukhlis11111" as password
    And verify succes login title "Berhasil Login"
    And user click menu product
    Then user click button edit for Kecap ABC
    And user redirect to edit product and verify title is "Edit Product"
