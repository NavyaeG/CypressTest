describe("assertions",()=>{
    it("implict assertion",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //should
        // cy.url().should('include','orangehrmlive.com')
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain','mango')
        cy.url().should('include','orangehrmlive.com')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('not.contain','mangohrm')

        cy.get('.orangehrm-login-branding > img').should('be.visible')//logo visible or nor
        .should('exist')//logo exist or not

        cy.xpath("//a").should('have.length',5)//checks no of links

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")//provide value into input box
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("have.value","Admin")
    })

    it("explict assertion",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()

        let expName="Paul Collings";
        cy.get('.oxd-userdropdown-name').then( function compareStrings(x){
            let actName=x.text()
            //BDD Style
            expect(actName).to.equal(expName)

            //TDD Style
            assert.equal(actName,expName)
        })
    
    })
})