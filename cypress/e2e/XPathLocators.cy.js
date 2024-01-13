describe('XPathLocators',()=>{

    it('find no of products',()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.xpath("//*[@id='htmlcontent_home']/ul/li").should('have.length',5)
    })

    it('chained x path',()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.xpath("//*[@id='htmlcontent_home']").xpath("./ul").xpath("./li").should('have.length',5)
    })


})
//*[@id="htmlcontent_home"]/ul