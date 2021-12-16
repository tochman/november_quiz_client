/* eslint-disable no-undef */
describe("User can choose", () => {
  before(() => {
    cy.intercept("GET", "**/api**", {
      fixture: "historyHardQuestions",
    }).as("getQuestions");
    cy.visit("/");
  });

  describe.only("history for category and hard for difficulty", () => {
    it("is expected to show History as category", () => {
      cy.get("[data-cy=category]")
        .select("history")
        .should("have.value", "history")
        .should("contain", "History");
    });
    it("is expected to show hard for difficulty", () => {
      cy.get("[data-cy=difficulty]")
        .select("hard")
        .should("have.value", "hard")
        .should("contain", "Hard");
    });
    it("is expected to generate question when the button is clicked", () => {
      cy.get("[data-cy=start-button]").click();
      cy.get("[data-cy=question-list]").children().should("have.length", 10);
    });
  });

  describe("Science for category and easy for difficulty", () => {
    it("is expected to show Science as category", () => {
      cy.get("[data-cy=category]")
        .select("science")
        .should("have.value", "science")
        .should("contain", "Science");
    });
    it("is expected to show easy for difficulty", () => {
      cy.get("[data-cy=difficulty]")
        .select("easy")
        .should("have.value", "easy")
        .should("contain", "Easy");
    });

    it("is expected to generate question when the button is clicked", () => {
      cy.get("[data-cy=start-button]").click();
      cy.get("[data-cy=question-list]").children().should("have.length", 10);
    });
  });
});
