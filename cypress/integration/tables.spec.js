it('Deve exibir 7 series no total', function(){
    cy.visit('/tables')

    cy.get('table tbody tr')
        .then(function(series){
            //console.log(series)
            expect(series).to.have.length(7)
        })

})


it('Deve exibir a minha serie favorita', function(){
    cy.visit('/tables')

    cy.contains('table tbody tr', 'O Mandaloriano')
        .then(function(item){
            expect(item).to.contain('Disney+')
            expect(item).to.contain('2019')
        })

})

it('Deve remover a serie round 6', function(){
    cy.visit('/tables')

    cy.contains('table tbody tr', 'Round 6')
        .then(function(item){
            item.find('.delete').trigger('click');
        })
        .should('not.exist')

        cy.get('table tbody tr')
        .then(function(series){
            //console.log(series)
            expect(series).to.have.length(6)
        })
})