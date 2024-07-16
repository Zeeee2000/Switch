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
// cypress/support/commands.js
// import { MailSlurp } from 'mailslurp-client';

// Cypress.Commands.add('createInbox', () => {
//   const mailslurp = new MailSlurp({
//     apiKey: Cypress.env('4bcf53dacd6f5c388908907f543e3bee910ec1254cd7caa4f3435ce53d366351')
//   });

//   return mailslurp.inboxController.createInbox()
//     .then(inbox => inbox);
// });


import "cypress-mailosaur";