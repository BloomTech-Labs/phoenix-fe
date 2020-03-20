describe('My First Test', function() {
    it('finds the content "New Phoenix"', function(){
      cy.visit('/')
      cy.get('button').contains('Register').click()
      cy.contains('Birds of a feather... Join to find Phoenix meets near you')
    })
    it('gets inputs', function(){
      cy.visit('/')
      cy.get('button').contains('Register').click().get('form').within(() => {
        cy.get('input')
        cy.get('button').click()
      })
    })
    it('attempts to register a user', function(){
      cy.visit('/')
      cy.get('button').contains('Register').click().get('form').within(() => {
        cy.get('input')
        cy.get('button').click()
      })
    })
  })