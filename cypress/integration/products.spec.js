/// <reference types="cypress" />

describe('Test app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('allows users to search a product and see the description', () => {
    cy.get('[data-cy=search-input]').type('iphone')
    cy.get('[data-cy=search-button]').click()
    cy.get("[data-cy='product']").should('be.visible')
    cy.contains('iPhone')
    cy.get("[data-cy='product']").first().click()
    cy.contains('Descrição do Produto')
  })
})
