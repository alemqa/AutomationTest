const firstName = "Alem"
const lastName = "Balic"
const password = "Test1234!"
const address = "Majkl Dzordana 23"
const postCode = "22000"
const mobilePhone = "123456789"

const usedEmail = "test@test.test"


class signUpPage {


	navigate() {
        cy.visit('http://automationpractice.com/')
    }

    signInButton(signUp) {
        cy.xpath('//*[@class="login"]')
            .should('be.visible')
            .click()
    }

    enterEmail(signUp) {
        cy.get('#email_create').should('be.visible')
            .clear()
            .type("alem"+Cypress.config('UniqueNumber')+"@test.com")  
            .should('have.value', "alem"+Cypress.config('UniqueNumber')+"@test.com" ) 
    }

    createAccountButton(signUp) {
        cy.get('#SubmitCreate')
            .should('be.visible')
            .click()
        cy.wait(3000)
    }

    selectTitle(signUp) {
        cy.get('#uniform-id_gender1')
            .should('be.visible')
            .click()
    }

    enterName(signUp) {
        cy.get('#customer_firstname')
            .should('be.visible')
            .clear()
            .type(firstName)
            .should('have.value', firstName)
    }
 
    enterLastName(signUp) {
        cy.get('#customer_lastname')
            .should('be.visible')
            .clear()
            .type(lastName)
            .should('have.value', lastName)
    }

    enterPassword(signUp) {
        cy.get('#passwd')
            .should('be.visible')
            .clear()
            .type(password)
            .should('have.value', password)
    }

    enterAddress(signUp) {
        cy.get('#address1')
            .should('be.visible')
            .clear()
            .type(address)
            .should('have.value', address)
    }

    enterCity(signUp) {
        cy.get('#city')
            .should('be.visible')
            .clear()
            .type('Cikago')
            .should('have.value', 'Cikago')
    }

    selectState(signUp) {
        cy.get('#id_state')
            .select('5')
            .should('have.value', '5')
    }

    enterZIP(signUp) {
        cy.get('#postcode')
            .should('be.visible')
            .clear()
            .type(postCode)
            .should('have.value', postCode)
    }

    enterMobilePhone(signUp) {
        cy.get('#phone_mobile')
            .should('be.visible')
            .clear()
            .type(mobilePhone)
            .should('have.value', mobilePhone)
    }

    registerButton(signUp) {
        cy.get('#submitAccount')
            .should('be.visible')
            .click()
    }

    signOutVisible(signUp) {
        cy.xpath('//*[@class="logout"]')
            .should('be.visible')
    }





    enterUsedEmail(signUp) {
        cy.get('#email_create').should('be.visible')
            .clear()
            .type(usedEmail)  
            .should('have.value', usedEmail) 
    }

    usedEmailErrorMessage(signUp) {
        cy.get('#create_account_error')
            .should('be.visible')
            .should('have.text', 'An account using this email address has already been registered. Please enter a valid password or request a new one. ')
    }


}

export default signUpPage