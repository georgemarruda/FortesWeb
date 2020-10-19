const url_logout = '/logout'
const url_login = '/login'
const email = 'input[name=email]'
const password = 'input[name=senha]'
const acessar = '.btn'

export class loginPage {

    navigate() {
        cy.visit(url_login)
    }

    with(user, senha) {
        cy.get(email).clear().type(user)
        cy.get(password).clear().type(senha)
        cy.get(acessar).should('has.text', 'Acessar').click()
    }

    whithoutPassword(user) {
        cy.get(email).clear().type(user)
        cy.get(acessar).should('has.text', 'Acessar').click()
    }

    whithoutUser(senha) {
        cy.get(password).clear().type(senha)
        cy.get(acessar).should('has.text', 'Acessar').click()
    }

    logout() {        
        cy.visit(url_logout)
    }
}
