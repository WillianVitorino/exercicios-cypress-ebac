/// <reference types= "cypress" />

var faker = require('faker');
var randomEmail = faker.internet.email();
describe('Pré-Cadastro', () => {
    beforeEach(()=>{
        cy.visit('/');
        cy.get('.icon-user-unfollow').click();
    })
    it('Realizar pré-cadastro com sucesso', () => {
        cy.get('#reg_email').type(randomEmail);
        cy.get('#reg_password').type('teste@teste.com');
        cy.get(':nth-child(4) > .button').click();
        cy.get('[class="page-title"]')
        .should('contain', 'Minha conta');
        
    });
    it('Realizar pré-cadastro com e-mail inválido', () => {
        cy.get('#reg_email').type('teste@teste');
        cy.get('#reg_password').type('teste@teste.com');
        cy.get(':nth-child(4) > .button').click();
        cy.get('.woocommerce-error')
        .should('contain', 'Erro: Informe um endereço de e-mail válido.');
    });
});