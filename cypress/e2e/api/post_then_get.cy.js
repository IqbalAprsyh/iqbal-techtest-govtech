/// <reference types = "Cypress" />
import { getRandom, randomString } from "../../support/functions"
import data from '../../fixtures/env_1' 
const random = getRandom(32, 100) 
const randomTitle = randomString(9)
const randomEmail = randomTitle + '@mail.com'



describe('HTTP Request', () => {

    it('should be able to POST data', () => {

        cy.request({
            
            method: 'POST',
            url: data.url.urlApi,

            body: {

                "id": random,
                "title": randomEmail,
                "dueDate": "2023-02-12T07:21:57.104Z",
                "completed": true
            }
            
        }).then((res)=>{

            // Assertion
            
            if (res.status == 200) {
                expect(res.status).to.eq(201)
                cy.log('Your Response Status is ' + res.status + ' but expected is 201')
                cy.log('Your id is ' + random)
                expect(res.body.id).to.eq(random)
                expect(res.body.title).to.eq(randomEmail)
                expect(res.body.completed).to.eq(true)
            }
            if (res.status == 201) {
                cy.log(res.status)
                cy.log('Your Response Status is ' + res.status + ' its cool!')
                expect(res.body.id).to.eq(random)
                expect(res.body.title).to.eq(randomEmail)
                expect(res.body.completed).to.eq(true)
           
            } else {

                cy.log('Status undefined')
             
            }

        });
    
    })

    it('should be able to GET data that has been POSTED', () => {
        
		cy.request({

            method : 'GET',
            url : data.url.urlApi + random,
            failOnStatusCode: false 
    
    
        }).then((res)=>{
            
            // Assertion
            expect(res.status).to.eq(200)
            expect(res.body.id).to.eq(random)
            expect(res.body.title).to.eq(randomEmail)
        })

    });
            

    })

    

        

