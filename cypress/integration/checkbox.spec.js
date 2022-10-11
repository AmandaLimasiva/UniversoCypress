


it('Deve marcar meus 5 filmes favoritos da Marvel', function(){

    cy.visit('/checkboxes')

    const filmes = [
        'avengers3',
        'spider3',
        'eternals',
        'thor3',
        'thor'
    ]

    filmes.forEach(function(f){
        cy.get(`input[name=${f}]`)
        .click()
        .should('be.checked')
    })
})

