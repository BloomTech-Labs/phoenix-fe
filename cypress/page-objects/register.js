export class Register {
    navigate () {
        cy.visit('/')
        cy.get('button').contains('Register').click()
    }

    addUser(userText) {
        cy.get('form')
    }
}