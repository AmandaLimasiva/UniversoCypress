it('Testando abrir uma nova Guia', function(){
    cy.visit('/new_tab')
        //cy.contains('a', 'Clique aqui').click()

        cy.get('a[href="https://www.google.com.br"]')
            .should('have.attr', 'target', '_blank')

        cy.contains('a', 'Clique aqui').invoke('removeAttr', 'target')

        cy.contains('a', 'Clique aqui').click()

        cy.get('input[name=q]').type('Cypress')

        //trade-offs - Cada escolha é uma renuncia 
})