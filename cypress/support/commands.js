// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />


Cypress.Commands.add('getIframe',(iframe)=>{
    return cy.get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)
})

//custom commands for clicking on link using labe
Cypress.Commands.add('clickLink',(label)=>{
    //cy.get('a').contains(label).click()//case sensitive
    cy.get('a').contains(label).click()
})

//Overwrite contains()
// Cypress.Commands.overwrite('contains',(originalFn,subject,filter,text,options={})=>{
//     if(typeof text =="object"){
//         options=text
//         text=filter
//         filter=undefined
//     }
//     options.matchCase=false//by default it is true but we are setting it to false to make it read different cases
//     return originalFn(subject,filter,text,options)
// })
Cypress.Commands.add("loginapp",(email,password)=>{
    cy.get("#Email").type(email)
    cy.get("#Password").type(password)
    cy.get('form > .buttons > .button-1').click()
})

Cypress.Commands.add("ReadPage",()=>{
    cy.get("#form-customer > div.table-responsive > table > tbody > tr").each(($row,index,$rows)=>{//index holds index of all the rows(0,1,2,3,4..)
        //$rows holds all the rows
        //$row holds current row
        cy.wrap($row).within(()=>{//checking within each row
            cy.get("td").each(($col,index,$cols)=>{
                if(index==0 || index ==6){
                    return 
                }
                cy.log($col.text())
            })
        })
    })
})