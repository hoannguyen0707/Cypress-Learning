describe("Check UI Elements", () => {

    it("Checking Radio button", () => {

        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#male").should('be.visible')
        cy.get("#female").should('be.visible')

        //selecting radio buttons
        cy.get("#male").check().should('be.checked')
        cy.get("#female").should('not.be.checked')

    })

    it("Checking Checkboxes", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('#sunday').should('be.visible')
        cy.get('#monday').should('be.visible')
        cy.get('#tuesday').should('be.visible')
        cy.get('#wednesday').should('be.visible')
        cy.get('#thursday').should('be.visible')
        cy.get('#friday').should('be.visible')
        cy.get('#saturday').should('be.visible')

        cy.get("#sunday").check().should('be.checked')
        cy.get('#monday').uncheck().should('not.be.checked')

        cy.get(".form-check-input[type='checkbox']").check().should('be.checked')
        cy.get(".form-check-input[type='checkbox']").uncheck().should('not.be.checked')

    })

})