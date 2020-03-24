describe("Terms Of Service", () => {
    it('finds the content "Terms Of Service"', () => {
        cy.visit('/')
        cy.get('button').contains('Terms Of Service').click()
        cy.contains('Terms Of Service')
    })
    it('successfully loads',  () => {
        cy.visit('/')
    })
    // it('finds the content "I Agree!"', () => {
    //     cy.visit('/')
    //     cy.get('button').should('have.css', 'I Agree!').click()
    //     cy.contains('I Agree!')
    // })
})