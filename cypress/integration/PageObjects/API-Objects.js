class APIobjects {

    GETusers(API) {
        it('Get Users', function() {
        cy.request({

            method : 'GET',
            url : 'https://reqres.in/api/users'
        })

        .should((response) => {
            cy.log(JSON.stringify(response.body))

            expect(response.status).to.eq(200)
        })
    })

}


    POSTregisterUnsuccessful(API) {
        it('Get Users', function() {
        cy.request({

            method : 'POST',
            url : 'https://reqres.in/api/register',
            failOnStatusCode: false,

            body: {
            "email": "sydney@fife"
            }

        }).then((response) => {
        cy.log(JSON.stringify(response.body))
        expect(response.status).to.eq(400)

        })

    })

}

    DELETEuser(API) {
        it('Get Users', function() {
        cy.request({

            method : 'DELETE',
            url : 'https://reqres.in/api/users/2',

        }).then((response) => {
        cy.log(JSON.stringify(response.body))
        expect(response.status).to.eq(204)

        })

    })

}

    GETdelayedResponse(API) {
        it('Get Users', function() {
        cy.request({

            method : 'GET',
            url : 'https://reqres.in/api/users?delay=3',

        }).then((response) => {
        cy.log(JSON.stringify(response.body))
        expect(response.status).to.eq(200)

        })

    })

}


}

export default APIobjects