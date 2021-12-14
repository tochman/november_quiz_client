describe("Displays Quiz options");
before(() => {
  cy.intercept("PUTS", "https://foo-bar**", {
    fixture: "historyHardQuestion.json",
  });
  cy.visit("/");
  cy.get("[data-cy=number-of-questions]").type(50);
  cy.get("[data-cy=topic]").click().get("[data-cy=History]").click();
  // click dropdown => search topic "history" => click
  cy.get("[data-cy=difficulty]").click().get("[data-cy=Hard]").click();
  // placeholders names. Drop-down tables.
});

it("is expected to see input field", () => {
  cy.get("[data-cy=number-of-questions]");
});

it("is expected to see topic drop down", () => {
  cy.get("[data-cy=topic]");
});

it("is expected to see difficulty drop down", () => {
  cy.get("[data-cy=difficulty]");
});
