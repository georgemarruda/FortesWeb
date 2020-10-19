import '../../../cypress.json'
import { loginPage } from '../test/Pages/loginPage'

describe('Tentativas de Login', () => {
    const login_Page = new loginPage()

    beforeEach('', () => {    
        
        login_Page.navigate()
    })

    it('Login com Sucesso', () => {
        login_Page.with('augustomagalhaes@fortestecnologia.com.br', '1234abcd')        
        cy.contains('Selecione o Módulo')
        login_Page.logout()
        cy.contains('Acesse o Sistema')
    })

    it('Login Sem Sucesso', () => {
        login_Page.with('testem@fortestecnologia.com.br', '1234abcd')
        cy.get('.alert').should('be.visible').and('include.text', '"Email" ou senha inválidos.')
    })

    it('Login Sem Sucesso - Ausencia de Senha', () => {
        login_Page.whithoutPassword('teste@fortestecnologia.com.br')
        cy.contains('Preenchimento Obrigatório')
    })

    it('Login Sem Sucesso - Ausencia de Usu e Senha', () => {
        login_Page.whithoutUser('1234')
        cy.get('.alert').should('be.visible').and('include.text', 'Preenchimento Obrigatório')
    })

})