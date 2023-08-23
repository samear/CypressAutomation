/// <reference types="Cypress" />
describe('My Second Test Suite', function() {
    it('My Second test Case', function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').as('productLocator')  //alias of .products

        // Add specific item to cart by item's name
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            cy.log('items: ' + textVeg)
            if(textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})