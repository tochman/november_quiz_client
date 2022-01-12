/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cy.get("[data-cy=exp-date]").within(() => {
//   cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
//     const $body = $iframe.contents().find("body");
//     cy.wrap($body)
//       .find('input[name="exp-date"]')
//       .type("1223", { delay: 2 });
//   });
// });
Cypress.Commands.add("fillInStripeElement", (element, value) => {
  cy.get(`[data-cy=${element}]`).within(() => {
    cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
      const $body = $iframe.contents().find("body");
      cy.wrap($body).find(`input[name="${element}"]`).type(value, { delay: 2 });
    });
  });
});
