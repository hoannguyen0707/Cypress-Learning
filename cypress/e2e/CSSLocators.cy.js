
describe('CSSLocators', () => {

    it('cssLocators', () => {

        cy.visit("https://owen.vn/")
        cy.get("#search").type("jean{enter}")

        cy.get(".base").contains("jean")
    })

})