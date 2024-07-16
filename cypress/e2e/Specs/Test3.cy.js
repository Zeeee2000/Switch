import LoginPage from '../POM_Files/LoginPOM.cy';

describe('Login Testcases', () => {
  beforeEach(() => {
    const ln = new LoginPage();
    ln.visitSignUp();
    cy.fixture('Login.json').then((loginData) => {
      const { validUser } = loginData;
    });
  });

  // it('Verify that the link directs the user to the login page and on signin it logs in the user. ', function () {

  //     cy.then(function () {
  //       const ln = new LoginPage();
  //       cy.fixture('Login.json').then((loginData) => {
  //         const { Signup } = loginData;
  //         let id= "tegspcsa";
  //         ln.FillFirstName(Signup.FirstName);
  //         ln.FillLastName(Signup.LastName);
  //         let Email = ln.generateUniqueEmail();
  //         cy.log(Email);
  //         ln.FillEmailSignUp(Email);
  //         ln.fillSignupPassword(Signup.Password);
  //         ln.fillConfirmPassword(Signup.Password);
  //         ln.TermsAndConditions();
  //         ln.ClickSignUp();
  //         ln.AssertSignUpSucessfull();
  //         cy.log(id);
  //         cy.log(Email);
  //         ln.AssertMailRecieved
  //         cy.mailosaurGetMessage(id, {
  //           sentTo: Email,
  //         }, {
  //           timeout: 20000, // 20 seconds (in milliseconds)
  //         }).then((email) => {

  //           cy.log(email.subject);
  //           cy.log(email.html.links[0].href)
  //           return cy.visit(email.html.links[0].href);
            
  //         });
  //         cy.get('.sc-e895a8af-0').click();
  //         ln.FillEmail(Email);
  //         ln.FillPassword(Signup.Password);
  //         ln.ClickSignIn();
  //         ln.AssertLogIn();
  //       });

  //     });

  // });

//   it(' Verify that the link directs the user to the login page and the account is confirmed.', function () {

//     cy.then(function () {
//       const ln = new LoginPage();
//       cy.fixture('Login.json').then((loginData) => {
//         const { Signup } = loginData;
//         let id= "tegspcsa";
//         ln.FillFirstName(Signup.FirstName);
//         ln.FillLastName(Signup.LastName);
//         let Email = ln.generateUniqueEmail();
//         cy.log(Email);
//         ln.FillEmailSignUp(Email);
//         ln.fillSignupPassword(Signup.Password);
//         ln.fillConfirmPassword(Signup.Password);
//         ln.TermsAndConditions();
//         ln.ClickSignUp();
//         ln.AssertSignUpSucessfull();
//         cy.log(id);
//         cy.log(Email);
//         ln.AssertMailRecieved
//         cy.mailosaurGetMessage(id, {
//           sentTo: Email,
//         }, {
//           timeout: 20000, // 20 seconds (in milliseconds)
//         }).then((email) => {

//           cy.log(email.subject);
//           cy.log(email.html.links[0].href)
//           return cy.visit(email.html.links[0].href);
          
//         });

//       });

//     });

// });
 
//   it('Verify that the email is received promptly.', function () {
//     cy.then(function () {
//       const ln = new LoginPage();
//       cy.fixture('Login.json').then((loginData) => {
//         const { Signup } = loginData;
//         let id= "tegspcsa";
//         ln.FillFirstName(Signup.FirstName);
//         ln.FillLastName(Signup.LastName);
//         let Email = ln.generateUniqueEmail();
//         cy.log(Email);
//         ln.FillEmailSignUp(Email);
//         ln.fillSignupPassword(Signup.Password);
//         ln.fillConfirmPassword(Signup.Password);
//         ln.TermsAndConditions();
//         ln.ClickSignUp();
//         ln.AssertSignUpSucessfull();
//         cy.log(id);
//         cy.log(Email);
//         ln.AssertMailRecieved
//         cy.mailosaurGetMessage(id, {
//           sentTo: Email,
//         }, {
//           timeout: 20000, // 20 seconds (in milliseconds)
//         }).then((email) => {

//           cy.log(email.subject);
//           cy.log(email.html.links[0].href);
          
//         });
//       });

//     });

// });

  it('Verify that the link directs the user to the login page and on signin it logs in the user. ', function () {

      cy.then(function () {
        const ln = new LoginPage();
        cy.fixture('Login.json').then((loginData) => {
          const { Signup } = loginData;
          let id= "tegspcsa";
          ln.FillFirstName(Signup.FirstName);
          ln.FillLastName(Signup.LastName);
          let Email = ln.generateUniqueEmail();
          cy.log(Email);
          ln.FillEmailSignUp(Email);
          ln.fillSignupPassword(Signup.Password);
          ln.fillConfirmPassword(Signup.Password);
          ln.TermsAndConditions();
          ln.ClickSignUp();
          ln.AssertSignUpSucessfull();
          cy.log(id);
          cy.log(Email);
          cy.mailosaurGetMessage(id, {
            sentTo: Email,
          }, {
            timeout: 20000, // 20 seconds (in milliseconds)
          }).then((email) => {
            cy.log(email.subject);
            cy.log(email.html.links[0].href)
            return cy.visit(email.html.links[0].href); 
          });
          cy.get('.sc-e895a8af-0').click();
          ln.FillEmail(Email);
          ln.FillPassword(Signup.Password);
          ln.ClickSignIn();

          ln.AssertLogIn();
          ln.ClickLogout();
        
          ln.clickresetPassword();
          cy.wait(5000);
         
          cy.get('#forgotPasswordInputEmail').type(Email);
  cy.get('.forgot-password_form__Gbsbz > .MuiButtonBase-root').click();
  cy.wait(5000);
          
                cy.mailosaurGetMessage(id, {
            sentTo: Email,
          }, {
            timeout: 20000, // 20 seconds (in milliseconds)
          }).then((email) => {
            cy.log(email.subject);
            cy.log(email.html.links[1].href)
            cy.visit(email.html.links[1].href, { failOnStatusCode: false });

          });
          
          cy.get('#password').type(Signup.Password2);
          cy.get('#confirmPassword').type(Signup.Password2);
          cy.get('.MuiButton-contained').click();
          ln.visit();
          ln.FillEmail(Email);
          ln.FillPassword(Signup.Password2);
          ln.ClickSignIn();
          ln.AssertLogIn();
          
        });

      });
  });

});
