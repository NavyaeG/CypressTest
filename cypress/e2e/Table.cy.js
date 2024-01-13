describe('handle tables',()=>{
    let userdata
    before(()=>{
        cy.fixture("login").then((data)=>{
            userdata=data
        })
    })
    
    beforeEach('Login',()=>{
        //executed before every it block
        cy.visit("https://demo.opencart.com/admin/index.php?route=common/login")
        cy.get('#input-username').type(userdata.username)
        cy.get('#input-password').type(userdata.password)
        cy.get('.btn').click({force:true})
        cy.get('.btn-close').click()
        cy.get('#menu-customer>a').click()
        cy.get("#menu-customer>ul>li:first-child").click()
    })

    it('check number of rows and columns',()=>{
        cy.get("#form-customer > div.table-responsive > table > tbody > tr").should('have.length','10')
        cy.get("#form-customer > div.table-responsive > table > thead > tr > td").should('have.length','7')
    })

    it('check cell data from specific row and column',()=>{
        cy.get("#form-customer > div.table-responsive > table > tbody > tr:nth-child(5) >td:nth-child(3)").should('contain',"hfgjhgjgjggj@gmail.com")
    })

    it('read all data from first page',()=>{
        cy.ReadPage()
    })

    it.only('pagination',()=>{
        cy.get("#form-customer > div.row > div.col-sm-6.text-end").then((e)=>{
            let mytext=e.text()
            let totalPages=mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("Pages")-1)
            cy.log(totalPages)
        })
        let pages=3
        for(let p=1;p<pages;p++){
            cy.get("ul[class='pagination']>li:nth-child("+p+")").click()
            cy.wait(3000)
            cy.ReadPage()
        }
    })
})