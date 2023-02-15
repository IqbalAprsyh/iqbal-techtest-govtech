/// <reference types="Cypress" />

const data = require(`../../fixtures/env_1`)


describe('LoginPage', () => {
    beforeEach(() => {
        cy.visit(data.url.baseUrl);
    });

    it('user should be able to see the login page', () => {

        // Page container should appear
        cy.LoginScreenIsVisible()
        
    });

    it('user should be able to login with valid credentials then logout', () => {

        // Standard User account
        cy.ValidCredentials1(data.standardUser)

        // Problem User account
        cy.ValidCredentials2(data.problemUser)

        // Performance Glitch User account
        cy.ValidCredentials3(data.perfmGlitchUser)
          
    });

    it('user should not be able to login with invalid credentials', () => {

        // All Input it's not filled
        cy.AllInputNotFilled()

        // Password not filled
        cy.PasswordNotFilled(data.passwordNotFilled)

        // Username not filled
        cy.UsernamedNotFilled(data.usernameNotFilled)

        // Wrong Type
        cy.WrongType(data.wrongType)
    });
})



