// this program is to demostrate different ways to get text.
describe('To demonstrate get text()', function() {
    it('Method 1', function() {
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop');
        cy.get('.my-4').invoke('text').then((text1) => {  // store value in text1
            //expect(text1).to.eq('Shop Name');
            cy.log('text1 = ' + text1);
        })
    })

    it('Method 2', function() {
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop');
        cy.get('.my-4').then(function(text2) {
            cy.log('text2 = ' + text2.text());
        })
    })
//
    it('Testing my home page', function() {
        cy.visit('samear.github.io/my_home/');
        cy.get('#product-promotion').find('.section-title').invoke('text').then((text3) => {
            cy.log('Text in promotion section = ' + text3);
        })

        cy.get('#products').find('.section-title').invoke('text').then((text4) => {
            cy.log('Text in product section = ' + text4);
        })

        cy.get('#contact').find('.section-title').invoke('text').then((text5) => {
            cy.log('Text in contact section = ' + text5);
        })
    })
})