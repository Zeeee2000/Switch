import { MailSlurp } from 'mailslurp-client';
import 'cypress-mailslurp';

const mailslurp = new MailSlurp({ apiKey: "4bcf53dacd6f5c388908907f543e3bee910ec1254cd7caa4f3435ce53d366351" });
describe('open an email', () => {
  it('can open emails', () => {
    cy.then(() => {
      cy.log('Configure mailslurp');
      const apiKey = Cypress.env('4bcf53dacd6f5c388908907f543e3bee910ec1254cd7caa4f3435ce53d366351');
      if (!apiKey) {
        throw new Error('Missing MailSlurp API Key');
      }
      const mailslurp = new MailSlurp({ apiKey });
      cy.wrap(mailslurp).as('mailslurp');
    });
    let Email = ln.generateUniqueEmail();
    let id = ln.getRandom5DigitNumber();
    cy.then(function () {
      cy.log('Create an inbox');
      return this.mailslurp.inboxController.createInboxWithDefaults();
    }, { timeout: 30000 }) // Adjust the timeout as needed
    .then(inbox => {
      cy.wrap(inbox.id).as(id);
      cy.wrap(inbox.emailAddress).as(Email);
    });
    
    cy.then(function () {
      cy.log('Send email');
      return this.mailslurp.sendEmail(this.inboxId, {
        to: [this.emailAddress],
        subject: 'Test email',
        body: 'This is a test'
      });
    });

    cy.then(function () {
      cy.log('Wait for email');
      return this.mailslurp.waitForLatestEmail(this.inboxId, 120_000, true);
    }).then(email => {
      expect(email.subject).to.contain('Test email');
      cy.wrap(email.id).as('emailId');
    });

    cy.then(function () {
      return this.mailslurp.emailController.getEmailPreviewURLs({ emailId: this.emailId });
    }).then(previewUrls => {
      cy.visit(previewUrls.plainHtmlBodyUrl);
      cy.get('body').contains('This is a test');
    });
  });
});
