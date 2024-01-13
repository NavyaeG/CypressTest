class Login{

    textUserName=":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    textPassword=':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    btnSubmit='.oxd-button'
    lblmsg=':nth-child(8) > .oxd-main-menu-item'

    setUserName(username){
        cy.get(this.textUserName).type(username)
    }

    setPassword(password){
        cy.get(this.textPassword).type(password)
    }

    clickSubmit(){
        cy.get(this.btnSubmit).click()
    }

    verifyLogin(){
        cy.get(this.lblmsg).should('contain','Dashboard')
    }

}

export default Login;