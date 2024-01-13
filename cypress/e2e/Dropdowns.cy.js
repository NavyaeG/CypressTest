/// <reference types="Cypress" />
describe("handle dropdowns",()=>{
    it('dropdown without select',()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type("Italy").type('{enter}')
        cy.get("#select2-billing_country-container").should('have.text',"Italy")

    })

    it('auto suggest dropdown',()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type("Delhi")
        cy.get(".suggestion-title").contains('Delhi University').click()
    })

    it('dynamic dropdown',()=>{
        cy.visit("https://google.com/")
        cy.get(".gLFyf").type("Cypress Automation")
        cy.get("div.wM6W7d>span").each(($el,index,$list)=>{ //iterating through every element in dynamic dropdown, all results stored in $list
            if($el.text()=='cypress automation'){
                cy.wrap($el).click()//wrap $el 
            }
        })
    })
})