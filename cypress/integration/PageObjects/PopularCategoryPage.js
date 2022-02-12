class PopularCategoryPage {

    navigateToHomePage(popular) {
        cy.xpath('//*[@title="Home"]')
            .should('be.visible')
            .click()
        cy.url().should('eq', "http://automationpractice.com/index.php")
    }

    verify7Products(popular) {
        cy.get('div.tab-content ul#homefeatured >li')
            .should('have.length', '7')
    }
	

}

export default PopularCategoryPage