it('Deve uma mensagem de Alerta', function(){
    cy.visit('/javascript_alerts')

    cy.contains('button', 'Alerta').click()

    cy.on('window:alert', function(result){
        expect(result).to.equal('Isto é uma mensagem de alerta')
        //console.log(result)
    })//Ouvinte
})

it('Deve confirmar a solicitação', function(){
    cy.visit('/javascript_alerts')

    cy.contains('button', 'Confirma').click()

    cy.on('window:confirm', () => true)
    cy.get('#result').should('have.text', 'Mensagem confirmada')

})

it('Deve cancelar a solicitação', function(){
    cy.visit('/javascript_alerts')

    cy.contains('button', 'Confirma').click()

    cy.on('window:confirm', () => false)//Ouvindoo
    cy.get('#result').should('have.text', 'Mensagem não confirmada')
    
})