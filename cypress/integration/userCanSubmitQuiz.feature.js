/* eslint-disable no-undef */
describe("submitting the Quiz", () => {
  before("", () => {
    cy.visit("/");

    cy.fixture("apiResult").then((obj) => {
      cy.window()
        .its("store")
        .invoke("dispatch", { type: "STORE_QUIZ", payload: obj.quiz });
      // check if the app has updated its UI
    });
    cy.window()
      .its("store")
      .invoke("dispatch", {
        type: "SUBMIT_ANSWER",
        payload: {
          index: 0,
          submittedAnswer: "A",
          correctAnswer: "A",
        },
      });
    cy.window()
      .its("store")
      .invoke("dispatch", {
        type: "SUBMIT_ANSWER",
        payload: {
          index: 0,
          submittedAnswer: "B",
          correctAnswer: "C",
        },
      });
  });

  describe("by clicking the 'Submit Quiz' button", () => {
    before(() => {
      cy.get("[data-cy=submit-quiz]").click();
    });

    it("is expected to store the Quiz results and display", () => {
      cy.window()
        .its("store")
        .invoke("getState")
        .then((state) => {
          expect(state.results).to.eql({
            totalAnswers: 2,
            correctAnswers: 1,
            wrongAnswers: 1,
            percentCorrect: 0.5
          
          });
        });
    });
  });
});
