describe('Get questions from API', () => {
  before(() => {
    cy.intercept('GET', '**/api/questions', {
      fixture: './historyHardQuestions.json',
    }).as('Questions.index')
    cy.visit('/')
  })
  it('is expected to make a network call with a status 200', () => {
    cy.wait('@Questions.index').its('response.statusCode').should('eq', 200)
  })

  it('is expected to generate an array of 10 set of questions', () => {
    cy.get('[data-cy=question-array]').children().should('have.length', 10)
  })
})