describe('User can choose a quiz and difficulty', () => {
  before(() => {
    cy.visit('/')
  })

  it.only('is expected to be able to choose a category', () => {
    cy.get('select').select('History').should('have.value', 'history')
  })
  it('is expected to see a selector of difficulty', () => {
    cy.get('select').select(1).should('have.text', 'Easy')
  })
})

// Component testing?