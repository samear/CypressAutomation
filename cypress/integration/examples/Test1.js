/// <reference types="Cypress" />
describe('My First Test Suite', function() {
    it('My First test Case', function() {
        cy.log('test starts')
        var item = 'Cashews'
        // test step
        cy.visit('https://rahulshettyacademy.com/seleniumPractise')
        cy.get('.redLogo').should('have.text','KART')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').as('productLocator')  //alias of .products
        cy.get('.product:visible').should('have.length', 4)
        //cy.get('.product-name').should('have.text', 'Cauliflower - 1 KgCart')
        // Parent child chaining
        cy.get('@productLocator').find('.product').should('have.length', 4)
        //adding 3rd product to cart by index - not a good method
        //console.log is not cypress command. so we need to implement promise manually
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function() {
            console.log('item added to cart')
        })

        // Add specific item to cart by item's name
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            cy.log('items: ' + textVeg)
            if(textVeg.includes(item)) {
                cy.wrap($el).find('button').click()
                cy.log(item + ' is added to cart.')
            }
        })
        cy.get('.brand').should('have.text', 'GREENKART')
        //handling promise manually
        cy.get('.brand').then(function(logo) {
            cy.log('logo: ' + logo.text())
        })
    })
})