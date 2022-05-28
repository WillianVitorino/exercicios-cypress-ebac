/// <reference types= "cypress" />

describe('Produtos', () => {
    beforeEach(()=>{
        cy.visit('/produtos/');   
    })
    it('Adicionar produtos no carrinho de compras', () => {
        cy.get('[class="product-block grid"]')
        .eq(2)
        .click()
        cy.get('.button-variable-item-32').click();
        cy.get('.button-variable-item-Green').click();
        cy.get('.input-text')
        .clear()
        .type(4);
        cy.get('.single_add_to_cart_button').click();
        cy.get('.dropdown-toggle > .mini-cart-items')
        .should('contain', 4);
    });
    it('Adicionar protudos fora de estoque', () => {
        cy.get('[class="product-block grid"]')
        .eq(2)
        .click()
        cy.get('.button-variable-item-32').click();
        cy.get('.button-variable-item-Brown').click();
        cy.get('.stock').should('contain', 'Fora de estoque')
    });
});