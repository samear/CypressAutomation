//checking text
describe('Assertion - Main page', function() {
    it('Test Case 0 - Assertion', function() {
        cy.visit('https://stock.adobe.com/');
        //cy.get('#app').find('h2.sc-giadOv').should('have.text', 'Curated royalty-free stock collections')
        //cy.get('#app').find('h2').invoke('attr', 'data-t').then((value) => {
        cy.get('#app').find('h2.sc-giadOv').eq(0).should('have.text', 'Curated royalty-free stock collections');
           // cy.log('<<< ' + value + " >>>")
    })
})

// https://youtu.be/jyVonM8uOpQ
// getting text from meta tag
/* <a name="511209456" class="js-search-result-thumbnail non-js-link" data-content-id="511209456">
        <meta itemprop="name" content="Phnom Penh Skyline">
        <meta itemprop="width" content="539">
        <meta itemprop="height" content="360">
    </a> */
// this script get property values from meta tag and attribute's values.

describe('Retrieving attribute values', function() {
    it('Test Case 1 - Retrieving all Meta attribute property value, content', function() {
        cy.visit('https://stock.adobe.com/');
        cy.get('.sc-BngTV').type('bordeaux');
        cy.get('.sc-cqpYsc').click();
        cy.get('#mosaic-container').find('.thumb-frame').each(($el, index, $list) => {
            cy.log(index + ': ' + $el.find('meta[itemprop=name]').attr('content'));
            //cy.get('meta[itemprop=name]').should('have.attr', 'content').then(cy.log);
        });
        //cy.get('meta[itemprop=name]').should('have.attr', 'content').then(cy.log);
        //cy.get('meta[itemprop=name]').should('have.attr', 'content').each(($el, index, $list) => {
          //  cy.log('inside each', $el);
        //});
    
    });

    it('Test Case 2 - Retrieving Meta attribute property value of content of the first encoutered.', function() {
        cy.visit('https://stock.adobe.com/');
        cy.get('.sc-BngTV').type('bordeaux');
        cy.get('.sc-cqpYsc').click();
        cy.get('#mosaic-container').find('.thumb-frame');
        cy.get('meta[itemprop=name]').should('have.attr', 'content').then((value) => {
            cy.log('<<<<< ' + value + ' >>>>>');
        });
        
    })

    // getting attribute's value of data-content-id
    it('Test case 3 - Retrieving attribute value, data-content-id', () => {
        cy.visit('https://stock.adobe.com/');
        cy.get('.sc-BngTV').type('bordeaux');
        cy.get('.sc-cqpYsc').click();
        
        // Getting the first data-content-id attribute's value
        cy.get('#mosaic-container').find('.thumb-frame').find('a').invoke('attr','data-content-id').then((value) => {
           cy.log('Getting the first data-content-id = ' + value);
        });
        
        // Getting all data-content-id's attribute values
        cy.get('#mosaic-container').find('.thumb-frame').each(($el, index) => {
            cy.log('Listing of data-content-id = ' + index + ': ' + $el.find('a').attr('data-content-id'));
        });
    });
});