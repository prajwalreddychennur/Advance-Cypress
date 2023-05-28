Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

Cypress.Commands.add('swipeLeft', () => {
    cy.get('.swiper-slide-active')
        .trigger('mousedown', { position: "right" })
        .trigger('mousemove', { clientX: 100, clientY: 275 })
        .trigger('mouseup', { force: true })
})

require('cypress-downloadfile/lib/downloadFileCommand')
require('@cypress/xpath')

import { sqlQueryCommand } from 'cypress-multiple-db-sql-server';
import "@cypress-audit/lighthouse/commands";
sqlQueryCommand();