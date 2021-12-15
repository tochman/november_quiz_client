describe('User can choose a quiz and difficulty', () => {
  before(() => {
    cy.visit('/')
  })

  it.only('is expected to be able to choose a category', () => {
    cy.get("[data-cy=quiz-selector]").should('have.text', 'category')
  })
  it('is expected to see a selector of difficulty', () => {
    cy.get('select').select(1).should('have.text', 'Easy')
  })
})

// Component testing?