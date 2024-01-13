describe('CSSLocators',()=>{
    it('csslocators',()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get("#search_query_top").type("T-Shirts") //id locator
        cy.get("[name='submit_search']").click()//attribute locator
        cy.get(".lighter").contains("T-Shirts")
    })
})