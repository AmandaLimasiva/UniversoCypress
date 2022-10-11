it('Selecionar o Loki por Id', function(){
    cy.visit('/select')

    cy.get('#avengerList')//ID do select
        .select('Loki')
            .should('have.value', '6')
})

it('Selecionar o Loki sem ser pelo Id', function(){
    cy.visit('/select')


    cy.contains('option', 'Selecione um personagem')
        .parent()
        .select('Loki')
        .should('have.value', '6')
    })
