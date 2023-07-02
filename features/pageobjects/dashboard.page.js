/*
Create and export a module with class "SecurePage".
This class behaves as a Child class, which contains the selectors of Secure page UI elements required for the test automation scenarios.
This module can be imported and called from Step Definitions to access the UI elements.
*/

const Page = require('./page.js')

class DashboardPage extends Page {
    get dashboardPageElement () {
        return $('//h3[contains(text(),"kasirAja")]')
    }

    //add product element
    get btnProduct () {
        return $("//a[@href='/products']//div[@class='css-ewi1jp']")
    }

    get btnTambahProduct () {
        return $("//a[normalize-space()='tambah']")
    }

    get inputNameProduct () {
        return $("//input[@id='nama']")
    }

    get inputDesctiption() {
        return $("//input[@id='deskripsi']")
    }

    get inputHarga_beli () {
        return $("//input[@id='harga beli']")
    }

    get inputHarga_jual () {
        return $('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > input:nth-child(2)')
    }

    get inputStok() {
        return $("//input[@id='stok']")
    }

    get category() {
        return $("//input[@id='kategori']")
    }

    get catUmum() {
        return $("//td[normalize-space()='Umum']")
    }

    get btnSave() {
        return $("//button[normalize-space()='simpan']")
    }

    get messageElement () {
        return $('[id="chakra-toast-manager-top-right"')
    }

    get errorMessageProduct() {
        return $("//div[@role='alert']")
    }
}

module.exports = new DashboardPage();