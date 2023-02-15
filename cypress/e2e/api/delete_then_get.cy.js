/// <reference types = "Cypress" />
import data from '../../fixtures/env_1'
import { getRandom } from "../../support/functions"
const random = getRandom(1, 32)

describe('HTTP Request', () => {
       
        it('should be able to DELETE data', () => {

            cy.request({

                method : 'DELETE',
                url : data.url.urlApi + random,
    
    
            }).then((res)=>{
                
                // Assertion
                expect(res.status).to.eq(204)
                
            })
        
        })

        it('should not be able to GET the data has been DELETED with GET by id', () => {
            
            cy.request({
                
                method : 'GET',
                url : data.url.urlApi + random,
                failOnStatusCode: false
    
            }).then((res)=>{
                
                // Assertion
                expect(res.status).to.eq(404) // Validate the response should be 404 cause there is no data when getting id 
                
            })

        });

    })