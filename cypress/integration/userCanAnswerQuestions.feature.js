/* eslint-disable no-undef */
describe("providing answers", () => {
  before("", () => {
    cy.visit("/");
    cy.fixture("apiResult").then((obj) => {
      cy.window()
        .its("store")
        .invoke("dispatch", { type: "STORE_QUIZ", payload: obj.quiz });
      // check if the app has updated its UI
    });
  });

  describe("by clicking the right answer", () => {
    it("is expected to store the answer in state and show 'Submit Quiz' Button", () => {
      cy.contains("July 1st, 1763").click();
      cy.window()
        .its("store")
        .invoke("getState")
        .then((state) => {
          expect(state.submissions).to.eql([
            {
              index: 0,
              submittedAnswer: "July 1st, 1763",
              correctAnswer: "July 1st, 1867",
            },
          ]);
        });
      cy.get('[data-cy=submit-quiz]').should('be.visible')
    });
  });
});
