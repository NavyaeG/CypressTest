describe("check UI elements",()=>{
    it("checking radio buttons",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        //visibility of radio buttons
        cy.get('#male').should("be.visible")
        cy.get('#female').should("be.visible")
        
        //selecting radio buttons
        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')

        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be.checked')
    })

    it("checking check boxes",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        //visibility of checkboxes
        // cy.get('#sunday').should("be.visible")
        // cy.get('#monday').should("be.visible")
        // cy.get('#tuesday').should("be.visible")
        // cy.get('#wednesday').should("be.visible")
        // cy.get('#thursday').should("be.visible")
        // cy.get('#friday').should("be.visible")
        // cy.get('#saturday').should("be.visible")
        cy.get("input.form-check-input[type='checkbox']").should('be.visible')

        
        //selecting all checkboxes
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        //unselecting all checkboxes
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        //select first  and last checkbox
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')
        
    })
})