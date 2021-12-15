describe('User can choose a quiz and difficulty', () => {
  before(() => {
    cy.visit('/')
  })

  it('Get Dropdown for Category',() => {
    cy.get("[data-cy=category]").select('history').should('have.value','history').should('contain', "History")
  })
  it('Get dropdown for Difficulty',() => {
    cy.get("[data-cy=difficulty]").select('hard').should('have.value','hard').should('contain', "Hard")
  })
})

// Component testing?