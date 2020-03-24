describe("Footer", () => {
    it('finds the content "Your Account"', () => {
        cy.visit('/')
        cy.contains('Your Account')
    })
    it('successfully loads',  () => {
        cy.visit('/')
    })
    it('finds the content "Discover"', () => {
        cy.visit('/')
        cy.contains('Discover')
    })
    it('finds the content "Phoenix"', () => {
        cy.visit('/')
        cy.contains('Phoenix')
    })
    it('finds the content "Follow us"', () => {
        cy.visit('/')
        cy.contains('Follow us')
    })
})