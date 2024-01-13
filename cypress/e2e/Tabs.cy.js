describe('Handle tabs',()=>{
    //removing the target attribute and load it in same window
    it('Approach1',()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get(".example>a").invoke('removeAttr','target').click()
        cy.url().should('include',"https://the-internet.herokuapp.com/windows/new")
        cy.go('back')//back to parent tab
    })
    
    //extract url and visit it after approach only works if domain is same
    it('Approach2',()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example>a').then((e)=>{//storing element captured from cy.get('.example>a') in a variable e
            let url=e.prop('href');//prop is property
            cy.visit(url)
        })
        cy.url().should('include',"https://the-internet.herokuapp.com/windows/new")
        cy.go('back')//back to parent tab
    })
})