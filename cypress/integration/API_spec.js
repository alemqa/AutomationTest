import APIobjects from "./PageObjects/API-Objects"

let API = new APIobjects();


describe("Get API user list", function() {

	API.GETusers()
})


describe("Register Unsuccessful", function() {

	API.POSTregisterUnsuccessful()

})


describe("Delete user", function() {

	API.DELETEuser()

})


describe("Delayed Response", function() {

	API.GETdelayedResponse()

})