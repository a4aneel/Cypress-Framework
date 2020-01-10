/// <reference types="cypress" />


export function navigate() {
    cy.visit('https://pages-apps-tdm.cf.dev-paas.bskyb.com/shop/start/join-broadband-and-talk/default')

}

export function postcode(enterPostcode) {
    cy.get('input[name ="postcode"]').type(enterPostcode + '{enter}')
    

}

export function selectAddress() {
    cy.get('[data-test-id="toolkit-select-input-dropdown"]').find('option').then($elm => $elm.get(1).setAttribute('selected', "selected")).parent().trigger('change')
    cy.get('.c-btn > span').click()

}

export function customerAddressStatus() {
    // cy.get(':nth-child(2) > .c-form-checkbox__caption').contains('moving').click()
    // cy.get('form > .c-btn').click()
    // cy.get('[data-test-id="toolkit-select-input-dropdown"]').find('option').then($elm => $elm.get(1).setAttribute('selected', "selected")).parent().trigger('change')
    // cy.get('.c-btn > span').click()
}

export function validateSuperfastCard() {
    cy.get('[data-test-id="broadband-selection-SKY_FIBRE_SOGEA_80_BROADBAND"]').contains('Sky Broadband Superfast')
    cy.get('[data-test-id="broadband-selection-product-sub-heading"]').contains('Your speeds (Mb/s)')
    cy.get('[data-test-id="toolkit-markdown"]').contains('Includes Sky Broadband Boost')
}

export function addBBTProductToBasket() {
    cy.get('[data-test-id="toolkit-radio-button-text"]').eq(1).click()
}

export function validateBoostCard() {
    cy.get('[data-test-id="toolkit-markdown"]').contains('Sky Broadband Boost')
    cy.get('[data-test-id="molecule-costing"]').contains(5)
}

export function validateTalkProducts() {
    cy.get('[data-test-id="selection-heading-text"]').contains('Sky Talk Evenings and Weekends Extra')
    cy.get('[data-test-id="selection-heading-text"]').contains('Sky Talk Anytime Extra')
    cy.get('[data-test-id="selection-heading-text"]').contains('Sky Talk International Extra')

}

export function pageNavigationCheckout() {
    cy.get('[data-test-id="toolkit-clickable-text"]').contains('Checkout').click()
}

export function fillCustomerDetails(firstName, lastName, DOB, phoneNumber, emailAddress) {
    cy.get('[data-test-id="form-field-input-title"]').find('option').then($elm => $elm.get(1).setAttribute('selected', "selected")).parent().trigger('change')
    cy.get('[data-test-id="first-name-input"]').type(firstName)
    cy.get('[data-test-id="last-name-input"]').type(lastName)
    cy.get('[data-test-id="date-of-birth-input"]').type(DOB)
    cy.get('[data-test-id="contact-number-input"]').type(phoneNumber)
    cy.get('[data-test-id="email-input"]').type(emailAddress)
    cy.get('input[type="checkbox"][data-test-id="toolkit-checkbox-input"]').click({ force: true })
    cy.get('.c-btn > span').click()


}

export function fillAdditionalDetails() {
    cy.get('[data-test-id="toolkit-select-input-dropdown"]').find('option').then($elm => $elm.get(1).setAttribute('selected', "selected")).parent().trigger('change')
    cy.get(':nth-child(1) > .c-form-checkbox__caption').contains('Yes').click()
    cy.get('[data-test-id="additional-questions-voip-risk-question-radio-buttons"]').contains('No').click()
    cy.get('[data-test-id="toolkit-checkbox-text"]').contains('bill payments').click()
    cy.wait(2000)
    cy.get('[data-test-id="toolkit-clickable-text"]').contains('Continue').click({ force: true })
    cy.wait(2000)

}

export function validateOrderSummaryPage() {
    cy.wait(150)
    cy.get('[data-test-id="line-item-WIFI_GUARANTEE"]').contains('Sky Broadband Boostwith')
    // cy.get('[data-test-id="line-item-SKY_FIBRE_SOGEA_80_BROADBAND"]').should('have.text', 'Sky Broadband Superfast')
    cy.wait(2000)
    cy.get('[data-test-id="toolkit-clickable-text"]').contains('Continue').click({ force: true })
}

export function enterPaymentDetails() {
    cy.get('div.u-margin-bottom > iframe').iframe().find('#cardHolderName').type('Rowan').tab().type('4111111111111111').tab().select('05').tab().select('2025').tab().type('123')
    cy.get('#account-holder').type('Rowan')
    cy.get('#account-sort-code').type('938611')
    cy.get('#account-number').type('02096123')

    cy.get(':nth-child(3) > .c-form-checkbox > .c-form-checkbox__caption').contains('I confirm that I am').click()

    cy.get('[data-test-id="tcs-accept-text"] > span').click()
    cy.get('.c-btn > span').click()


}

export function validateOrderConfirmation() {

}

export function selectEngineerAppointment() {
    //Pick default day and time
    
    cy.get('.c-btn > span').click()

    
}





