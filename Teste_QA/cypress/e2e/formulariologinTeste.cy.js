describe('template spec', () => {
  it('passes', () => {
  cy.visit('https://planoaliados.com.br/portal/login')
  cy.get('#model_Login').type('057.484.723-50')
  cy.get('#model_Password').type('654321')
  cy.get('.v-card__actions > button.v-btn').click() // mensagem após enviado com Sucesso! Válido
  })
})