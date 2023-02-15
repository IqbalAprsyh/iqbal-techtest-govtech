/// <reference types = "Cypress" />
import data from '../../fixtures/env_1'


describe('HTTP Request', () => {
   
    
    it("should be able to GET all data's", () => {


        cy.request({
            
            method : 'GET',
            url : data.url.urlApi,


        }).then((res)=>{

            // Assertion
            expect(res.status).to.eq(200)
            cy.log('Length all data is ' + res.body.length)
            expect(res.body.length).to.eq(30)
            
        })
        
    })
})