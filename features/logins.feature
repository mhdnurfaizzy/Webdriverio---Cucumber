Feature: Test flow login and add product at "kasirAja"

  Background: 
    Given i am on the login page

  Scenario: User can't login using empty password
    When i input email as "<email>" and password as "<password>"
    And i click on button login
    Then i must remain on login page displaying a message '<errorMessageLogin>'

    Examples: 
      | email                | password    | errorMessageLogin                  |
      | izi@gmail.com |             | "password" is not allowed to be empty |

  Scenario: User can login using valid data
    When i input email as "<email>" and password as "<password>"
    And i click on button login
    Then i must navigate to dashboard page

    Examples: 
      | email | password     | 
      | Izi@gmail.com | izi | 

  Scenario: User can add product with valid input
    Given i am on the dashboard page
    And i click on product menu
    And i click on button tambah
    And i input name as "<nama>" and hargaBeli as "<hargaBeli>" and hargaJual as "<hargaJual>" and stok as "<stok>"
    And i click kategori
    And i click kategori umum
    And i click button simpan
    Then i see a successful message

    Examples:
     | nama | hargaBeli    | hargaJual    | stok |
     | izi  |  1000        | 10000        | 100 |

  Scenario: User can't add product with name field empty 
    Given i am on the dashboard page
    And i click on product menu
    And i click on button tambah
    And i input name as "<nama>" and hargaBeli as "<hargaBeli>" and hargaJual as "<hargaJual>" and stok as "<stok>"
    And i click kategori
    And i click kategori umum
    And i click button simpan
    Then i see displaying a error message '<errorMessage>'

    Examples:
     | nama | hargaBeli    | hargaJual    | stok | errorMessage |
     |   |  1000        | 10000        | 100 | "name" is not allowed to be empty |

  


 