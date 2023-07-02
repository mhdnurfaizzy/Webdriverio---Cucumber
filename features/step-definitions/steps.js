import { Given, When, Then } from '@cucumber/cucumber';
import dashboardPage from '../pageobjects/dashboard.page.js';

const LoginsPage = require('../pageobjects/logins.page.js');
const DashboardPage = require('../pageobjects/dashboard.page.js');


//LOGIN
Given('i am on the login page', async () => {
    await LoginsPage.open();
    await expect(browser).toHaveTitle('kasirAja');

});

When('i input email as {string} and password as {string}', async function (email, password) {
    await LoginsPage.emailTextBox.setValue(email);
    await LoginsPage.passwordTextBox.setValue(password);
});

When('i click on button login', async () => {
    await LoginsPage.loginButton.click();
});

Then('i must navigate to dashboard page', async () => {
    await expect(DashboardPage.dashboardPageElement).toExist();
});

Then('i must remain on login page displaying a message {string}', async function (errorMessageLogin) {
    await expect(LoginsPage.messageElement).toExist();
    await expect(LoginsPage.messageElement).toHaveTextContaining(errorMessageLogin);
});

//Product

Given('i am on the dashboard page', async() => {
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
})

When('i click on product menu', async() => {
    await  dashboardPage.btnProduct.click()
})

When('i click on button tambah', async() => {
    await dashboardPage.btnTambahProduct.click()
})

When('i input name as {string} and hargaBeli as {string} and hargaJual as {string} and stok as {string}', async function(nama, harga_beli, harga_jual, stok) {
    await DashboardPage.inputNameProduct.setValue(nama);
    // await DashboardPage.inputDesciption.setValue(deskripsi);
    await DashboardPage.inputHarga_beli.setValue(harga_beli);
    await DashboardPage.inputHarga_jual.setValue(harga_jual);
    await DashboardPage.inputStok.setValue(stok);
});

When('i click kategori', async() => {
    await dashboardPage.category.click()
})

When('i click kategori umum', async() => {
    await dashboardPage.catUmum.click()
})

When('i click button simpan', async() => {
    await dashboardPage.btnSave.click()
})

Then('i see a successful message', async () => {
    await expect(DashboardPage.messageElement).toExist();
});

Then('i see displaying a error message {string}', async (errorMessage) => {
    await expect(DashboardPage.errorMessageProduct).toExist();
    await expect(DashboardPage.errorMessageProduct).toHaveTextContaining(errorMessage);

});


