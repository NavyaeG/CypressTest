describe("mouse operations",()=>{

    it("mouse hover",()=>{
        cy.visit("https://demo.opencart.com/")
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should("not.be.visible")
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should("be.visible")
    })

    it.only("right click",()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.get('.context-menu-one').trigger('contextmenu')
        cy.get('.context-menu-icon-copy').should("be.visible")

    })

    it("double click",()=>{
        
    })

    it("drag and drop using plugin",()=>{
        
    })

    it("scrolling page",()=>{
        
    })
})