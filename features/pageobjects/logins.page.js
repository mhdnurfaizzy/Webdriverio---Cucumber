/*
Create and export a module with class "LoginPage".
This class behaves as a Child class, which contains the selectors of Login page UI elements required for the test automation scenarios.
This module can be imported and called from Step Definitions to access the UI elements.

*/

const Page = require('./page.js')

class LoginsPage extends Page {
    get emailTextBox () {
        return $('#email')
    }
    
    get passwordTextBox () {
        return $('#password')
    }
    
    get loginButton () {
        return $('button[type="submit"]')
    }
    
    get messageElement () {
        return $('#root > div > div > div > div.css-1w7v3tn > div > div.chakra-alert.css-qwanz3')
    }

    open() {
        super.open('https://kasirdemo.belajarqa.com')
    }
}

module.exports = new LoginsPage();