describe('My First Test', function() {
    it('finds the content "New Phoenix"', function(){
      cy.visit('/')
      cy.get('button').contains('Register').click()
      cy.contains('New Phoenix')
    })
    it('gets inputs', function(){
      cy.visit('/')
      cy.get('button').contains('Register').click().get('form').within(() => {
        cy.get('input')
        cy.get('input[name="email"]')
        cy.get('button').click()
      })
      cy.contains('Please fill out this field.')
    })
  })