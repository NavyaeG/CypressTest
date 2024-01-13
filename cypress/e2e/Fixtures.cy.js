describe("MyTestSuit",()=>{
    //access data through hooks - for multiple blocks
    // let userdata;
    // before(()=>{
    //     cy.fixture("orangehrm").then((data)=>{
    //         userdata=data
    //     })
    // })
    it('FixtureDemoTest',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture('orangehrm')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.username)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.password)
        cy.get('.oxd-button').click() 
    })

    it.only('datadriven testing',()=>{
        cy.fixture("orangehrm2").then((data)=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        data.forEach((userdata)=>{
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.username)
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.password)
            cy.get('.oxd-button').click() 
            if(userdata.username=="Admin" && userdata.password=="admin123")
            {
                cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
                cy.get(':nth-child(4) > .oxd-userdropdown-link').click() 
                //cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            }
            else
            {
                cy.get('.oxd-alert-content > .oxd-text').should("have.text",userdata.expected)
            }
        })

        })
    })
})