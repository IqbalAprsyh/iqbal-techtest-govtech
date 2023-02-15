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

import elements from '../support/elements.js'

Cypress.Commands.add('LoginScreenIsVisible', () => {
    cy.get(elements.Screen).should('be.visible')
    cy.get(elements.LogoSauce).should('be.visible')
    cy.get(elements.BotCharacter).should('be.visible')
    cy.get(elements.CredsContainer).should('be.visible')
})

Cypress.Commands.add('ValidCredentials1', (data) => {
    cy.get(elements.InputUsername).type(data.username)
    cy.get(elements.InputPassword).type(data.password)
    cy.get(elements.BtnLogin).click()
    cy.get(elements.LoggedInPage).should('be.visible')
    cy.get(elements.BtnBurger).click()
    cy.get(elements.LogoutSide).click()
    cy.get(elements.InputUsername).clear()
    cy.get(elements.InputPassword).clear()
})

Cypress.Commands.add('ValidCredentials2', (data) => {
    cy.get(elements.InputUsername).type(data.username)
    cy.get(elements.InputPassword).type(data.password)
    cy.get(elements.BtnLogin).click()
    cy.get(elements.LoggedInPage).should('be.visible')
    cy.get(elements.BtnBurger).click()
    cy.get(elements.LogoutSide).click()
    cy.get(elements.InputUsername).clear()
    cy.get(elements.InputPassword).clear()
})

Cypress.Commands.add('ValidCredentials3', (data) => {
    cy.get(elements.InputUsername).type(data.username)
    cy.get(elements.InputPassword).type(data.password)
    cy.get(elements.BtnLogin).click()
    cy.get(elements.LoggedInPage).should('be.visible')
    cy.get(elements.BtnBurger).click()
    cy.get(elements.LogoutSide).click()
    cy.get(elements.InputUsername).clear()
    cy.get(elements.InputPassword).clear()
})

Cypress.Commands.add('AllInputNotFilled', () => {
    cy.get(elements.InputUsername).invoke('val', '')
    cy.get(elements.InputPassword).invoke('val', '')
    cy.get(elements.BtnLogin).click()
    cy.get(elements.ErrorMessage).contains('Epic sadface: Username is required').should('be.visible')
})

Cypress.Commands.add('PasswordNotFilled', (data) => {
    cy.get(elements.InputUsername).type(data.username)
    cy.get(elements.InputPassword).invoke('val', '')
    cy.get(elements.BtnLogin).click()
    cy.get(elements.ErrorMessage).contains('Epic sadface: Password is required').should('be.visible')
})

Cypress.Commands.add('UsernamedNotFilled', (data) => {
    cy.get(elements.InputUsername).invoke('val', '')
    cy.get(elements.InputPassword).type(data.password)
    cy.get(elements.InputUsername).clear()
    cy.get(elements.BtnLogin).click()
    cy.get(elements.ErrorMessage).contains('Epic sadface: Username is required').should('be.visible')
})

Cypress.Commands.add('WrongType', (data) => {
    cy.get(elements.InputUsername).type(data.username)
    cy.get(elements.InputPassword).type(data.password)
    cy.get(elements.BtnLogin).click()
    cy.get(elements.ErrorMessage).contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
})