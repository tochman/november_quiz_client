describe("User can create a quiz", () => {
  before(() => {
    cy.intercept("POST", "**/api/quizzes", {
      fixture: "apiResult.json",
    });
  });
  it("is expectied to produce a quiz with category History and diffuculty hard", () => {
    cy.visit("/");
    cy.get("[data-cy=category]").select("history", { force: true });
    cy.get("[data-cy=difficulty]").select("hard", { force: true });
    cy.get("[data-cy=create-button]").click({ force: true });
  });

  it('is expected to return status code 200', () => {
    cy.wait('@getQuestions').its('response.statusCode').should('eq', 200)
    // add a test to see if POST request was done.
  })
  
  it('is expected to get collection of questions', () => {
    cy.get('[data-cy=quiz-list').children().should('have.length', 10)
    // add a test to see if there are 10 questions returned.
  })

});


// should the user see something? figure out next step.