describe("Terms Of Service", function() {
    it('finds the content "Terms Of Service"', function(){
        cy.visit('/')
        cy.get('button').contains('Terms Of Service').click()
        cy.contains('AGREEMENT TO TERMS')
    })
    it('finds the "Checkbox"', function (){
        cy.visit('/')
        cy.get('button').contains('Terms Of Service').click()
        cy.get('Input').type('checkbox').click()
        cy.contains('I Agree!')
    })
})