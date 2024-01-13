describe("handling jokes",()=>{
    it('aproach1',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        const iframe=cy.get("#mce_0_ifr").its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        iframe.clear().type("welcome")
    })

    it('aproach2',()=>{//getIframe is a custom made command in command.js
        cy.visit("https://the-internet.herokuapp.com/iframe")
        const iframe=cy.getIframe("#mce_0_ifr").clear().type("welcome {ctrl+a}")
        cy.get("[aria-label='Bold']").click()
    })
})