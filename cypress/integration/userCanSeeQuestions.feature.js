describe('User can see a questions', () => {
  before(() => {
    cy.intercept('GET', '**/api**', {
      fixture: 'historyHardQuestions',
    }).as('getQuestions')
    cy.visit('/')
  })

  it('make network call 200', () => {
    cy.wait('@getQuestions').its('response.statusCode').should('eq', 200)
  })

  it('can get collection of questions', () => {
    cy.get('[data-cy=question-list]').children().should('have.length', 10)
  })
})
