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
  //         ln.AssertMailRecieved(id,Email);
  //         cy.wait(4000);
  //         ln.clickconfirm();
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
//         ln.AssertMail(id,Email);
//         ln.clickconfirm();
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
//         ln.AssertMail(id,Email);
//     });

// });
// });


  it('Verify that user can reset the password and login with it.', function () {

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
        ln.AssertMail(id,Email);
        ln.clickconfirm();
          ln.FillEmail(Email);
          ln.FillPassword(Signup.Password);
          ln.ClickSignIn();
          ln.AssertLogIn();
          ln.ClickLogout();
          ln.clickresetPassword();
          cy.wait(5000);
          ln.FillResetEmail(Email);
          ln.clickreset();
          cy.wait(5000);
          ln.AssertionResetMail(id,Email);
          ln.FillNewPassword(Signup.Password2)
  //         cy.get('#forgotPasswordInputEmail').type(Email);
  // cy.get('.forgot-password_form__Gbsbz > .MuiButtonBase-root').click();
  // cy.wait(5000);
          
  //               cy.mailosaurGetMessage(id, {
  //           sentTo: Email,
  //         }, {
  //           timeout: 20000, // 20 seconds (in milliseconds)
  //         }).then((email) => {
  //           cy.log(email.subject);
  //           cy.log(email.html.links[1].href)
  //           cy.visit(email.html.links[1].href, { failOnStatusCode: false });

  //         });
          
  //         cy.get('#password').type(Signup.Password2);
  //         cy.get('#confirmPassword').type(Signup.Password2);
  //         cy.get('.MuiButton-contained').click();
          ln.visit();
          ln.FillEmail(Email);
          ln.FillPassword(Signup.Password2);
          ln.ClickSignIn();
          ln.AssertLogIn();
          
        });

      });
  });

});
