it('Deve logar com sucesso!', function(){
    cy.visit('/login')

    cy.get('#nickId').type('papitorocks') //Buscar por PorId
    cy.get('#passId').type('pwd123')

    cy.get('button[type=submit]').click() //Evento de clique

    cy.get('h3[class^="title"]') //Começa com ^
        .should('have.text', 'Olá Papito, bem-vindo ao Orkut')

    const expectedTest = 'Em breve você poderá participar de comunidades, adicionar amigos e deixar um Scraps. hahahahah';

    cy.get('p[class=subheader]')
        .should('have.text', expectedTest)
    
})