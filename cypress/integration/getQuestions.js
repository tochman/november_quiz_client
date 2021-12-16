describe('Get questions', () => {
  before(() => {
    cy.intercept('GET', '**/api.php?amount=10&category=23&difficulty=hard&type=multiple', {
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
