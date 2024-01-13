/*describe('suite name',()=>{ //arrow operator used to make function syntax smaller to make code more readable
    it('test1',()=>{
        expect(true).to.equal(true)
        //steps
    })
})

describe('suite name', function(){// using function instead of arrow operator is also a valid approach
    it('test2',function(){
        expect(true).to.equal(true)
    })
})

specfile(cy.js)---> describe blocks(test suites)--->it blocks(test)*/

describe('My first Test',()=>{
    it('test1-verify-title-postive',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")//cy is root module
        cy.title().should('eq','OrangeHRM')
    })
    it('test1-verify-title-negative',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")//cy is root module
        cy.title().should('eq','OrangeHRM123')
    })
})