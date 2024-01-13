import Login from "../PageObjects/LoginPage.js"

describe("pom",()=>{

    it("login with fixtures",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture("orangehrm").then((data)=>{
            const hello=new Login();
            hello.setUserName(data.username)
            hello.setPassword(data.password)
            hello.clickSubmit()
            hello.verifyLogin()
        })
    })
    
})