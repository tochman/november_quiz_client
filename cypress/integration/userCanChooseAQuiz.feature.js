describe('User can choose a quiz and difficulty', () => {
  before(() => {
    cy.visit('/')
  })

  describe('Get dropdown for Category', () => {
    it('', () => {
      cy.get('[data-cy=category]')
      .select('history')
      .should('have.value', 'history')
      .should('contain', 'History')
    });
  })
})
it('Get dropdown for Category', () => {
  cy.get('[data-cy=category]')
    .select('science')
    .should('have.value', 'science')
    .should('contain', 'Science')
describe('Get dropdown for Difficulty', () => {
  cy.get('[data-cy=difficulty]')
    .select('easy')
    .should('have.value', 'easy')
    .should('contain', 'Easy')
})
})
it('Get dropdown for Difficulty', () => {
  cy.get('[data-cy=difficulty]')
    .select('hard')
    .should('have.value', 'hard')
    .should('contain', 'Hard')
})
})
      
      


