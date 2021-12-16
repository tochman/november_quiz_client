describe('Get questions from API', () => {
  before(() => {
    cy.intercept('POST', '**/api/questions', {
      fixture: 'historyHardQuestions.json',
    }).as('Questions.create')
    cy.visit('/')
  })
  it("is expected to make a POST request", () => {
    cy.wait("@Questions.create").its("request.method").should("eq", "POST");
  });

  it('is expected to generate an array of 10 set of questions', () => {
    cy.get('[data-cy=question-array]').children().should('have.length', 10)
  })
})