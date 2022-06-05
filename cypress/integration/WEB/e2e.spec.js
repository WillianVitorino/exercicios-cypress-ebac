/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/produtos/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.adicionarProduto(2, 32, 'Green', 1);
        cy.adicionarProduto(1, 'XS', 'Yellow', 1);
        cy.adicionarProduto(2, 33, 'Blue', 1);
        cy.adicionarProduto(2, 33, 'Brown', 1);
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click();
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click();
        var dados = require('../../fixtures/detalhesFaturamento.json');
        cy.detalhesFaturamento(dados.nome,dados.sobrenome, dados.nomeEmpresa, dados.pais, dados.endereco, dados.cidade, dados.Estado, dados.cep, dados.telefone, dados.email);
        cy.get('[class="woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received"]', {timeout: 10000}).should('contain', 'Obrigado. Seu pedido foi recebido.')
    });
})