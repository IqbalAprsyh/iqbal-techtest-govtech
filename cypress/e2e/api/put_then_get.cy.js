/// <reference types = "Cypress" />
import { getRandom, randomString } from "../../support/functions"
import data from '../../fixtures/env_1'


describe('HTTP Request', () => {

    const random = getRandom(32, 100) 
    const randomTitle = randomString(9)
    const randomEmail = randomTitle + '@mail.com'

    it('should be able to PUT data', () => {

        cy.request({
            
            method: 'PUT',
            url: data.url.urlApi + random,

            body:{
                "id": random,
                "title": randomEmail,
                "dueDate": "2023-02-12T07:21:57.104Z",
                "completed": true
                }

        }).then((res)=>{

            // Assertion
            expect(res.status).to.eq(200)
            expect(res.body.id).to.eq(random)
            expect(res.body.title).to.eq(randomEmail)
            expect(res.body.completed).to.eq(true)

        }) 
        
    });

    it('should be able to GET data that has been PUT', () => {

        cy.request({

            method : 'GET',
            url : data.url.urlApi + random,
            failOnStatusCode: false 

        }).then((res)=>{

            // Assertion
            expect(res.status).to.eq(404)
            expect(res.body.id).to.eq(random)
            expect(res.body.title).to.eq(randomEmail)
        })
    });
    
})