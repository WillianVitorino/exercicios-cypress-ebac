// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('adicionarProduto', (posicao, tamanho, cor, quantidade)=>{
    cy.get('[class="product-block grid"]').eq(posicao).click();
    cy.get('.button-variable-item-'+ tamanho).click();
    cy.get('.button-variable-item-'+ cor).click();
    cy.get('.input-text').clear().type(quantidade);
    cy.get('.single_add_to_cart_button').click();
    cy.get('#primary-menu > .menu-item-629 > a').click();
});

Cypress.Commands.add('detalhesFaturamento', (nome, sobrenome, nomeEmpresa, pais, endereco, cidade, estado, cep, telefone, email) =>{
    cy.get('#billing_first_name').type(nome);
    cy.get('#billing_last_name').type(sobrenome);
    cy.get('#billing_company').type(nomeEmpresa);
    cy.get('#select2-billing_country-container').type(pais).click();
    cy.get('#billing_address_1').type(endereco);
    cy.get('#billing_city').type(cidade);
    cy.get('#select2-billing_state-container').type(estado).click();
    cy.get('#billing_postcode').type(cep);
    cy.get('#billing_phone').type(telefone);
    cy.get('#billing_email').type(email);
    cy.get('#terms').check();
    cy.get('#place_order').click();
})

Cypress.Commands.add('token', (email, senha) => { 
    cy.request({
        url: 'http://localhost:3000/login',
        method: 'POST',
        body: {
            email: email,
            password: senha
        }
    })
 })

Cypress.Commands.add('listarUsuarios', () => {
    cy.request({
        url: 'http://localhost:3000/usuarios',
        method: 'GET',    
   })
})

Cypress.Commands.add('CadastrarUsuarios', (nome, email, senha) => {
    cy.request({
        url: 'http://localhost:3000/usuarios',
        method: 'POST',
        failOnStatusCode: false,
        body: {
            nome: nome,
            email: email,
            password: senha,
            administrador: "true"
            }
    })
})

Cypress.Commands.add('listarProdutos', () =>{
    cy.request({
        url: 'http://localhost:3000/produtos',
        method: 'GET',
   })
})

Cypress.Commands.add('editarProdutos', (id, token) => {
    cy.request({
        url: `http://localhost:3000/produtos/${id}`,
        method: 'PUT',
        headers: { authorization: token },
        failOnStatusCode: false,
        body: {
             "nome": "Curso EBAC",
             "preco": 850,
             "descricao": "Engenheiro de qualidade de software",
             "quantidade": 381
        }
   })
})

Cypress.Commands.add('deletarUsuario', (id) => {
    cy.request({
        url: `http://localhost:3000/usuarios/${id}`,
        method: 'DELETE',
        failOnStatusCode: false
    })
})
