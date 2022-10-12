

const niceIFrame = function() {
    return cy
        .get('#weareqaninja')
        .its('0.contentDocument.body').should('not.be.empty')//Validação
        .then(cy.wrap) //Aguardando promessa até q esteja disponível 
}

const badIframe = function(){
    return cy
    .get('iframe[src*=instagram]')
    .its('0.contentDocument.body').should('not.be.empty')//Validação
    .then(cy.wrap) //Aguardando promessa até q esteja disponível 
}

it('Deve validar o total de seguidores', function(){
    cy.visit('/bad_iframe')

    badIframe()
        .contains('.FollowerCountText', '7.186 seguidores')
            .should('be.visible')
    
})