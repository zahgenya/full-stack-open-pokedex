describe('Pokedex', () => {
  it('front page can be opened', () => {
    cy.visit('http://localhost:9050')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})