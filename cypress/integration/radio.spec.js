
it('Deve marcar eternos!', function(){
    cy.visit('/radios')
    cy.get('input[value=eternals]')
        .click()
        .should('be.checked')
})