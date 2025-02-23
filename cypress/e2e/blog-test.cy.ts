describe('template spec', () => {
  it('supports navigation and form submissions', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Understanding TypeScript in Vue').should('be.visible')
    cy.contains('a', 'About').click()
    cy.contains('Welcome').should('be.visible')
    cy.contains('Contact').click()
    
    cy.contains('label', 'Name').next('input').type('Test Name')
    cy.contains('label', 'Email').next('input').type('test@test.test')
    cy.contains('label', 'Message').next('textarea').type('example message')
    cy.contains('button', 'Send Message').click()
  })
})