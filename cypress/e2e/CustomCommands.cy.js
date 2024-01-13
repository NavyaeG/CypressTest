describe('Custom commands',()=>{
    it('handling links',()=>{
        cy.visit("https://demo.nopcommerce.com/")
        //direct method
        // cy.get(':nth-child(2) > .product-item > .details > .product-title > a').should('have.text',"Apple MacBook Pro 13-inch")

        cy.clickLink("Apple MacBook Pro 13-inch")
        cy.get('h1').should('have.text',"Apple MacBook Pro 13-inch")
    })

    //automating login
    it.only('login',()=>{
        cy.visit("https://demo.nopcommerce.com")
        cy.clickLink("Log in")
        cy.loginapp("test123@test.com","test123")
        cy.clickLink("My account")
        cy.get('.block > .title > strong').should("have.text","My account")
    })
})