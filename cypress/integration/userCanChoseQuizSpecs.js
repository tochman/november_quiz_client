describe('Displays Quiz options', () => {
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

// cy.get("[data-cy=topic]").click().get("[data-cy=History]").click();
// // click dropdown => search topic "history" => click
// cy.get("[data-cy=difficulty]").click().get("[data-cy=Hard]").click();
// // placeholders names. Drop-down tables.
// });

// it("is expected to see input field", () => {
//   cy.get("[data-cy=number-of-questions]");
// });

// it("is expected to see topic drop down", () => {
//   cy.get("[data-cy=topic]");
// });

// it("is expected to see difficulty drop down", () => {
//   cy.get("[data-cy=difficulty]");
