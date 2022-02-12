const usedEmail = "test@test.test"
const wrongPassword ="434322342"


class signInPage {

    enterEmailSignIn(signIn) {
        cy.get('#email')
            .should('be.visible')
            .clear()
            .type(usedEmail)
            .should('have.value', usedEmail)
    }

    enterWrongPassword(signIn) {
        cy.get('#passwd')
            .should('be.visible')
            .clear()
            .type(wrongPassword)
            .should('have.value', wrongPassword)
    }

    clickSignInButton(signIn) {
        cy.get('#SubmitLogin')
            .should('be.visible')
            .click()
    }

    authenticationError(signIn) {
        cy.xpath('(//*[@class="alert alert-danger"])[1]')
            .should('be.visible')
    }

}

export default signInPage