class BestSellersPage {

    clickOnBestSellers(bestSellers) {
        cy.xpath('//*[@class="blockbestsellers"]')
            .should('be.visible')
            .click()
    }

    verifyBestSellersList(bestSellers) {
        cy.get('#blockbestsellers')
            .should('be.visible')
    }

    verify7Products(bestSellers) {
        cy.get('div.tab-content ul#blockbestsellers >li')
            .should('have.length', '7')
    }
	

}

export default BestSellersPage