/// <reference types = "Cypress" />
import { getRandom } from "../../support/functions"
import data from '../../fixtures/env_1' 
const random = getRandom(1, 32)


describe('HTTP Request', () => {
       
        it("should be able to GET activities based on existing id", () => {

            cy.request({

                method : 'GET',
                url : data.url.urlApi + random,
    
    
            }).then((res)=>{
                
                // Assertion
                expect(res.status).to.eq(200)
                expect(res.body.id).to.eq(random)
            })
        
        })

        it("should not be able to GET activities with not registered id", () => {

            const random2 = getRandom(32, 100) // Unlisted/Not regsitered id is 32 to xx
    
            cy.request({

                method : 'GET',
                url : data.url.urlApi + random2,
                failOnStatusCode: false 
    
    
            }).then((res)=>{
                
                // Assertion
                cy.log('Your id is '  + random2 + ' and not registered')
                expect(res.status).to.eq(404)
            })
        
        })
        
    })