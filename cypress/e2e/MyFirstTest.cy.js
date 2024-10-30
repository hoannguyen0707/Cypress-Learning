describe('My First Test', () => {
  it('Positive - check the title is Cypress.io: Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
    cy.title().should ('eq','Cypress.io: Kitchen Sink')
  })

  it('Negative - check the title is Cypress.io: Kitchen Sink ONE', () => {
    cy.visit('https://example.cypress.io')
    cy.title().should ('eq','Cypress.io: Kitchen Sink ONE')
  })
})