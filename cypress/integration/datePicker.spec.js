it('Deve escolher a data de nascimento', function(){
    cy.visit('/datepicker')

    const date = {
        month:'fev',
        year: '2000', 
        day:'27'
    }

    cy.get('.datetimepicker-dummy-input').click()

    cy.get('.datepicker-nav-month').click()
    cy.contains('.datepicker-month', date.month).click()

    cy.get('.datepicker-nav-year').click()
    cy.contains('.datepicker-year span', date.year).click()

    cy.contains('button[class=date-item]', date.day).click()
})