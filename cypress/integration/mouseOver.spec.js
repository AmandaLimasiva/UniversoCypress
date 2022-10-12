it('Deve exibir os nomes da tecnologia quando passar o mouse', function(){
    cy.visit('/hovers')

    const techs = [
        {img: 'img[src*=python]', tag: '.tag-python', text: 'Python'},
        {img: 'img[src*=golang]', tag: '.tag-golang', text: 'Golang'},
        {img: 'img[src*=nodejs]', tag: '.tag-nodejs', text: 'Node.js'},
        {img: 'img[src*=netcore]', tag: '.tag-netcore', text: '.NETCore'}
    ]

    techs.forEach(function(tech){
        cy.get(tech.img)
        .realHover('mouse')

        cy.get(tech.tag)   
        .should('be.visible')//Se não funcionar, trava aqui o teste
        .should('have.text', tech.text)
    })


})