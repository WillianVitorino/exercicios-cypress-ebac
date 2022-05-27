/// <reference types= "cypress" />

describe('Login', () => {
    beforeEach(()=>{
        cy.visit('/');
        cy.get('.icon-user-unfollow').click();
    })
    it('Realizar login com credenciais válidas', () => {
        cy.get('#username').type('aluno_ebac@teste.com');
        cy.get('#password').type('teste@teste.com');
        cy.get('.woocommerce-form > .button').click();
        cy.get('[class="page-title"]')
        .should('contain', 'Minha conta');
    });
    it('Realizar login com credenciais inválidas', () => {
        cy.get('#username').type('teste@teste.com');
        cy.get('#password').type('teste2022');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-error')
        .should('contain', 'Erro: A senha fornecida para o e-mail teste@teste.com está incorreta. Perdeu a senha?')
    });
});