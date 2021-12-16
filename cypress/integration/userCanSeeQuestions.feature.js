describe('User can see a questions', () => {
  before(() => {
    cy.intercept('GET', '**/api**', {
      fixture: 'historyHardQuestions',
    }).as('getQuestions')
    cy.visit('/')
  })

  it('is expected to return status code 200', () => {
    cy.wait('@getQuestions').its('response.statusCode').should('eq', 200)
  })

  it('is expected to get collection of questions', () => {
    cy.get('[data-cy=question-list]').children().should('have.length', 10)
  })
})
