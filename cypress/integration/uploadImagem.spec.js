it('Deve fazer o Upload da foto escolhida', function(){
    cy.visit('/upload')

    
    const imageFile = 'cypress/fixtures/sandman.jpg'

    cy.get('input[name=file]').selectFile(imageFile, {force: true})

    cy.get('input[value=Upload]').click()

    cy.get('img[src="/uploads/sandman.jpg"]', {timeout: 7000})
    .should('be.visible')

})