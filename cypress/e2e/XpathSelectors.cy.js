describe('XpathSelectors', () => {
    it('find no of products', () => {
        cy.visit("https://owen.vn/ao/polo.html")
        cy.xpath("//*[@id='amasty-shopby-product-list']/*/ol/li").should('have.length', 12)
    })

})