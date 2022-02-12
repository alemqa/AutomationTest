const url = "http://automationpractice.com/"
const indexUrl = "http://automationpractice.com/index.php"
const signInUrl = "http://automationpractice.com/index.php?controller=authentication&back=my-account"

import signUpPage from "./PageObjects/SignUpPage"
import PopularCategoryPage from "./PageObjects/PopularCategoryPage"
import BestSellersPage from "./PageObjects/BestSellersPage"
import PrintedDressesPage from "./PageObjects/PrintedDressesPage"
import SignIn from "./PageObjects/signIn"

let signUp = new signUpPage();
let popular = new PopularCategoryPage();
let sellers = new BestSellersPage();
let printedDresses = new PrintedDressesPage();
let signIn = new SignIn();


describe("Maximise browser window and navigate to 'automationpractice.com' URL", function() {

     before(function() {
        
    });


    it("Visits the AutomationPractice web page", function() {
        cy.viewport(1920, 1080) 
        signUp.navigate()

    });

    it("AutomationPractice web page should be successfully opened", function() {
        cy.url().should('eq', indexUrl)

    });

});


describe("On the Home page, click Sign in, enter email and click on the create account.", function() {

     before(function() {
        
    });

    it(" User should be able to click on the 'Sign in' button", function() {
        signUp.signInButton()
    });

    it("'Sign in' page should be successfully opened", function() {
        cy.url().should('eq', signInUrl)
    })

    it("User should be able to enter email into 'Email address' field", function() {
        signUp.enterEmail()
    })

    it("User should be able to click on 'Create an account' button", function() {
        signUp.createAccountButton()
    })

    it("User should be able to select the 'Title'", function() {
        signUp.selectTitle()
    })

    it("User should be able to enter the 'First Name'", function() {
        signUp.enterName()
    })

    it("User should be able to enter the 'Last Name'", function() {
        signUp.enterLastName()
    })

    it("User should be able to enter the 'Password'", function() {
        signUp.enterPassword()
    })

    it("User should be able to enter the 'Address'", function() {
        signUp.enterAddress()
    })

    it("User should be able to enter the 'City'", function() {
        signUp.enterCity()
    })

    it("User should be able to select the 'State'", function() {
        signUp.selectState()
    })

    it("User should be able to enter the 'Zip/Postal Code'", function() {
        signUp.enterZIP()
    })

    it("User should be able to enter the 'Mobile Phone'", function() {
        signUp.enterMobilePhone()
    })

    it("User should be able to click on 'Register' button", function() {
        signUp.registerButton()
    })

    it("User should be successfully Logged In (verified by an existing 'Sign Out' button in top right corner", function() {
        signUp.signOutVisible()
    })

});


describe("Verify that the popular category has 7 products", function() {

    it("User should be able to navigate to Home page", function() {
        popular.navigateToHomePage()
    });

    it("'Popular' category should have 7 products", function() {
        popular.verify7Products()
    });

});

describe("Verify that the best sellers category has 7 products", function() {

    it("User should be able to click on Best Sellers button", function() {
        sellers.clickOnBestSellers()
    });

    it("Verify that Best Sellers product list is displayed", function() {
        sellers.verifyBestSellersList()
    })

    it("'Best Sellers' category should have 7 products", function() {
        sellers.verify7Products()
    });

});

describe("Enter 'Printed Dresses' into the search field and save the results titles into a .txt file", function() {

    it("User should be able to search for 'Printed dresses'", function() {
        printedDresses.searchForPrintedDresses()
    });

    it("Verify that 5 products with name are displayed", function() {
        printedDresses.verify5Products()
    })

    it("Input results into .txt file", function() {
        printedDresses.inputResultsIntoTXTfile()
    })

});







// NEGATIVE / SECURITY TEST SCENARIOS



describe("User should not be able to create an account with already used email", function() {

     before(function() {
        
    });


    it("Visits the AutomationPractice web page", function() {
        signUp.navigate()

    });

    it("AutomationPractice web page should be successfully opened", function() {
        cy.url().should('eq', indexUrl)

    });

    it("User should be able to click on the 'Sign in' button", function() {
        signUp.signInButton()
    });

    it("User enters already registered Email", function() {
        signUp.enterUsedEmail()
    })

    it("User should be able to click on 'Create an account' button", function() {
        signUp.createAccountButton()
    })

    it("Error message should be displayed", function() {
        signUp.usedEmailErrorMessage()
    })

    

});


describe("User should not be able to Sign In with invalid Password", function() {

     before(function() {
        
    });

    it("Visits the AutomationPractice web page", function() {
        signUp.navigate()

    });

    it("AutomationPractice web page should be successfully opened", function() {
        cy.url().should('eq', indexUrl)

    });

    it("User should be able to click on the 'Sign in' button", function() {
        signUp.signInButton()
    });

    it("User enters Email Address in Sign In form", function() {
        signIn.enterEmailSignIn()
    })

    it("User enters Wrong Password in Sign In form", function() {
        signIn.enterWrongPassword()
    })

    it("User should be able to click on Sign In button", function() {
        signIn.clickSignInButton()
    })

    it("Error message should be displayed", function() {
        signIn.authenticationError()
    })

    

});


