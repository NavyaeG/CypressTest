describe("Alerts",()=>{
    it('JS alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert',(t)=>{//validating content in alert window
            expect(t).to.contains('I am a JS Alert')
        })
        cy.get("#result").should("have.text","You successfully clicked an alert")
    })

    //js confirmation alert
    it('JS confirmation alert-Ok',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm',(t)=>{//confirm window 
            expect(t).to.contains('I am a JS Confirm')
        })
        cy.get("#result").should("have.text","You clicked: Ok")
    })

    it('JS confirmation alert-Cancel',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm',(t)=>{//confirm window 
            expect(t).to.contains('I am a JS Confirm')
        }) 
        cy.on("window:confirm", (s) => {//cypress closes alert window using cancel button
            return false;
         });
        cy.get("#result").should("have.text","You clicked: Cancel")
    })

    //js prompt alert
    it('JS prompt-Ok',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win)=>{//getting control audit
            cy.stub(win,'prompt').returns('welcome')//passing text
        })
        cy.get("button[onclick='jsPrompt()']").click()
        cy.get("#result").should("have.text","You entered: welcome")
    })
    
    //authenticated alert
    it('JS authenticated alert',()=>{
        //approach 1
        // cy.visit("https://the-internet.herokuapp.com/basic_auth",{ auth:{username:"admin",password:"admin"}})
        // cy.get(".example").should("have.contain","Congratulations!")

        //aproach2
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get(".example").should("have.contain","Congratulations!")
    })
})