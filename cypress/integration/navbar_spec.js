describe("Navbar", () => {
    it('finds the content "Phoenix"', () => {
        cy.visit('/')
        cy.contains('Phoenix')
    })
    it('successfully loads',  () => {
        cy.visit('/')
    })
    it('finds the logo image "PhoenixLogo"', () => {
        cy.visit('/')
        cy.get('img').should('be.visible')
    })
})