describe('The Home Page' , function() {
    it('successfully loads', function() {
        cy.visit('/')
    })
    it('finds the content "Terms Of Service"', function(){
        cy.visit('/')
        cy.contains('Terms Of Service')
    })
    it('finds the content "Register"', function(){
        cy.visit('/')
        cy.contains('Register')
    })
    it('finds the content "4"', function(){
        cy.visit('/')
        cy.contains('4')
    })
})
    