class PrintedDressesPage {

    searchForPrintedDresses(printedDresses) {
        cy.get('#search_query_top')
            .should('be.visible')
            .clear()
            .type('Printed dresses')
            .should('have.value', 'Printed dresses')
        cy.xpath('//*[@name="submit_search"]')
            .should('be.visible')
            .click()
    }

    verify5Products(printedDresses) {
        cy.get('#center_column > ul > li')
            .should('have.length', '5')
    }

    inputResultsIntoTXTfile(printedDresses) {
        cy.xpath('(//*[@itemprop="name"])[1]').then(($temp)=>{
        const txt = $temp.text()
        cy.writeFile('cypress/SearchResult.txt', txt)
        })

        cy.xpath('(//*[@itemprop="name"])[2]').then(($temp)=>{
        const txt = $temp.text()
        cy.writeFile('cypress/SearchResult.txt', txt, {flag: 'a+'})
        })

        cy.xpath('(//*[@itemprop="name"])[3]').then(($temp)=>{
        const txt = $temp.text()
        cy.writeFile('cypress/SearchResult.txt', txt, {flag: 'a+'})
        })

        cy.xpath('(//*[@itemprop="name"])[4]').then(($temp)=>{
        const txt = $temp.text()
        cy.writeFile('cypress/SearchResult.txt', txt, {flag: 'a+'})
        })

        cy.xpath('(//*[@itemprop="name"])[5]').then(($temp)=>{
        const txt = $temp.text()
        cy.writeFile('cypress/SearchResult.txt', txt, {flag: 'a+'})
        })
    }
	

}

export default PrintedDressesPage