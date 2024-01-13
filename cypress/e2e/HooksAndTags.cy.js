//Hooks
//4 types of hooks provided by cypress
//before-executed only once before
//after-executed only once after
//beforeEach-executed before every it block
//afterEach-executed after every it block

//Tags
//skip,only 
describe('Hooks',()=>{

    before(()=>{
        cy.log("launch app")
    })

    after(()=>{
        cy.log("done all test")
    })

    beforeEach(()=>{
        cy.log("starting new test")
    })

    afterEach(()=>{
        cy.log("done with test")
    })

    it('search',()=>{
        cy.log("seach")
    })

    it.skip('advanced search',()=>{
        cy.log(" advanced seach")
    })

    it('listing products',()=>{
        cy.log("listing")
    })
})