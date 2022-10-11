
describe('Drag e Drop', function(){

before(function(){
    cy.visit('/drag_and_drop')
})

    it('Deve arrastar o Cypress para a caixinha do NodeJS', function(){
        const dataTransfer = new DataTransfer()
    
        cy.get('img[alt=Cypress]').trigger('dragstart', {dataTransfer})
    
        cy.get('.nodejs figure[draggable=true]').trigger('drop', {dataTransfer})
    
    })
    
    it('Deve arrastar o Robot para a caixinha do Python', function(){
        const dataTransfer = new DataTransfer()
    
        cy.get('img[alt="Robot Framework"]').trigger('dragstart', {dataTransfer})
    
        cy.get('.python figure[draggable=true]').trigger('drop', {dataTransfer})
    
    })
})

