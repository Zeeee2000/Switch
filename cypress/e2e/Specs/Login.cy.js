import LoginPage from '../POM_Files/LoginPOM.cy';

describe('Login Testcases', () => {
  beforeEach(() => {
    const ln = new LoginPage();
    ln.visit();
    cy.fixture('Login.json').then((loginData) => {
      const { validUser } = loginData;
    });
  });

  // it('Check if we are able to login to the application with valid credentials', () => {
  //   const ln = new LoginPage();
  //   cy.fixture('Login.json').then((loginData) => {
  //     const { validUser } = loginData;
  //     ln.FillEmail(validUser.username);
  //     ln.FillPassword(validUser.password);
  //     ln.ClickSignIn();
  //     let id= "tegspcsa";
  //     ln.GetOTP(id,validUser.username);
  //     ln.AssertLogIn();
  //   });
  // });

  // it('Check Invalid Email validation', () => {
  //   const ln = new LoginPage();
  //   cy.fixture('Login.json').then((loginData) => {
  //     const { invalidUser } = loginData;
  //     ln.FillEmail(invalidUser.username);
  //     ln.FillPassword(invalidUser.password);
  //     ln.ClickSignIn();
  //     ln.AssertEmailValidation();
  //   });
  // });

  // it('Check Invalid Password validation', () => {
  //   const ln = new LoginPage();
  //   cy.fixture('Login.json').then((loginData) => {
  //     const { invalidPassword } = loginData;
  //     ln.FillEmail(invalidPassword.username);
  //     ln.FillPassword(invalidPassword.password);
  //     ln.ClickSignIn();
  //     ln.AssertLoginPassword();
  //   });
  // });

  // it('Check Signup works', () => {
  //   const ln = new LoginPage();
  //   cy.fixture('Login.json').then((loginData) => {
  //     const { Signup } = loginData;
  //     ln.visitSignUp();
  //     ln.FillFirstName(Signup.FirstName);
  //     ln.FillLastName(Signup.LastName);
  //     let Email = ln.generateUniqueEmail();
  //     cy.log(Email);
  //     ln.FillEmailSignUp(Email);
  //     ln.fillSignupPassword(Signup.Password);
  //     ln.fillConfirmPassword(Signup.Password);
  //     ln.TermsAndConditions();
  //     ln.ClickSignUp();
  //     ln.AssertSignUpSucessfull();
  //   });
  // });

  // it('Check Passwords do not match validation', () => {
  //   const ln = new LoginPage();
  //   cy.fixture('Login.json').then((loginData) => {
  //     const { Signup } = loginData;
  //     ln.visitSignUp();
  //     ln.FillFirstName(Signup.FirstName);
  //     ln.FillLastName(Signup.LastName);
  //     let Email = ln.generateUniqueEmail();
  //     cy.log(Email);
  //     ln.FillEmailSignUp(Email);
  //     ln.fillSignupPassword(Signup.Password);
  //     ln.AssertPasswordsDonotMatch();
  //   });
  // });

  // it('To verify the first name, last name and email are mandatory', () => {
  //   const ln = new LoginPage();
  //   cy.fixture('Login.json').then((loginData) => {
  //     const { Signup } = loginData;
  //     ln.visitSignUp();
  //     ln.AssertEmpty_Email_FName_LName();
  //     ln.fillConfirmPassword(Signup.Password);
  //     ln.fillSignupPassword(Signup.Password);
  //   });
  // });

  // it('To verify the email by entering an invalid email', () => {
  //   const ln = new LoginPage();
  //   cy.fixture('Login.json').then((loginData) => {
  //     const { invalidtEmailFormat } = loginData;
  //     ln.visitSignUp();
  //     ln.FillEmailSignUp(invalidtEmailFormat.Email);
  //     ln.AssertInvalidEmailFormat();
  //   });
  // });

  // it('To verify the email is mandatory and in the correct format', () => {
  //   const ln = new LoginPage();
  //   cy.fixture('Login.json').then((loginData) => {
  //     const { invalidtEmailFormat } = loginData;
  //     ln.visitSignUp();
  //     let Email = ln.generateUniqueEmail();
  //     ln.FillEmailSignUp(Email);
  //     ln.AssertValidEmailFormat();
  //   });
  // });

  // it('To verify the user is unable to sign up with an already registered email', () => {
  //   const ln = new LoginPage();
  //   cy.fixture('Login.json').then((loginData) => {
  //     const { SignupExistingUser } = loginData;
  //     ln.visitSignUp();
  //     ln.FillFirstName(SignupExistingUser.FirstName);
  //     ln.FillLastName(SignupExistingUser.LastName);
  //     ln.FillEmailSignUp(SignupExistingUser.Email);
  //     ln.fillSignupPassword(SignupExistingUser.Password);
  //     ln.fillConfirmPassword(SignupExistingUser.Password);
  //     ln.TermsAndConditions();
  //     ln.ClickSignUp();
  //     ln.AssertAccountAlreadyExists();
  //   });
  // });

  // it('To verify signature functionality & new user agreement.', () => {
  //   const ln = new LoginPage();
  //   cy.fixture('Login.json').then((loginData) => {
  //     const { Signup } = loginData;
  //     ln.visitSignUp();
  //     ln.FillFirstName(Signup.FirstName);
  //     ln.FillLastName(Signup.LastName);
  //     let Email = ln.generateUniqueEmail();
  //     cy.log(Email);
  //     ln.FillEmailSignUp(Email);
  //     ln.fillSignupPassword(Signup.Password);
  //     ln.fillConfirmPassword(Signup.Password);
  //     ln.AssertSignUpButtonDisabled();
  //   });
  // });

  // it('Verify that the system prompts the user if the password is invalid (Length less than 8)', () => {
  //   const ln = new LoginPage();
  //   cy.fixture('Login.json').then((loginData) => {
  //     const { SignupInvalidPassword } = loginData;
  //     ln.visitSignUp();
  //     ln.FillFirstName(SignupInvalidPassword.FirstName);
  //     ln.FillLastName(SignupInvalidPassword.LastName);
  //     let Email = ln.generateUniqueEmail();
  //     cy.log(Email);
  //     ln.FillEmailSignUp(Email);
  //     ln.fillSignupPassword(SignupInvalidPassword.Password);
  //     ln.fillConfirmPassword(SignupInvalidPassword.Password);
  //     ln.AssertSignUpButtonDisabled();
  //   });
  // });

  // it('Verify that the system prompts the user if the password is invalid (No Uppercase Letter and Special Character)', () => {
  //   const ln = new LoginPage();
  //   cy.fixture('Login.json').then((loginData) => {
  //     const { SignupInvalidPasswordNoUpper } = loginData;
  //     ln.visitSignUp();
  //     ln.FillFirstName(SignupInvalidPasswordNoUpper.FirstName);
  //     ln.FillLastName(SignupInvalidPasswordNoUpper.LastName);
  //     let Email = ln.generateUniqueEmail();
  //     cy.log(Email);
  //     ln.FillEmailSignUp(Email);
  //     ln.fillSignupPassword(SignupInvalidPasswordNoUpper.Password);
  //     ln.fillConfirmPassword(SignupInvalidPasswordNoUpper.Password);
  //     ln.AssertSignUpButtonDisabled();
  //   });
  // });

  // it('Verify that users are directed to the appropriate dashboard or landing page after signup.', () => {
  //   const ln = new LoginPage();
  //   cy.fixture('Login.json').then((loginData) => {
  //     const { Signup } = loginData;
  //     ln.visitSignUp();
  //     ln.FillFirstName(Signup.FirstName);
  //     ln.FillLastName(Signup.LastName);
  //     let Email = ln.generateUniqueEmail();
  //     cy.log(Email);
  //     ln.FillEmailSignUp(Email);
  //     ln.fillSignupPassword(Signup.Password);
  //     ln.fillConfirmPassword(Signup.Password);
  //     ln.TermsAndConditions();
  //     ln.ClickSignUp();
  //     ln.AssertSignUpLandingPage();
  //   });
  // });

  // it('Verify the system asks to Sign Agreement on the first screen', () => {
  //   const ln = new LoginPage();
  //   cy.fixture('Login.json').then((loginData) => {
  //     const { Signup } = loginData;
  //         let id= "tegspcsa";
  //         ln.visitSignUp();
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
  //         ln.GetOTP(id,Email)
  //         ln.AssertLogIn();
  //         ln.AssertWalletSetupOnFirstScreen();
  //   });
  // });

//     it('Verify that the link directs the user to the login page and on signin it logs in the user. ', function () {

//       cy.then(function () {

//         const ln = new LoginPage();
//         ln.visitSignUp();
//         cy.fixture('Login.json').then((loginData) => {
//           const { Signup } = loginData;
//           let id= "tegspcsa";
//           ln.FillFirstName(Signup.FirstName);
//           ln.FillLastName(Signup.LastName);
//           let Email = ln.generateUniqueEmail();
//           cy.log(Email);
//           ln.FillEmailSignUp(Email);
//           ln.fillSignupPassword(Signup.Password);
//           ln.fillConfirmPassword(Signup.Password);
//           ln.TermsAndConditions();
//           ln.ClickSignUp();
//           ln.AssertSignUpSucessfull();
//           cy.log(id);
//           cy.log(Email);
//           ln.AssertMailRecieved(id,Email);
//           cy.wait(4000);
//           ln.clickconfirm();
//           ln.FillEmail(Email);
//           ln.FillPassword(Signup.Password);
//           ln.ClickSignIn();
//           ln.GetOTP(id,Email)
//           ln.AssertLogIn();
//         });

//       });

//   });

//   it(' Verify that the link directs the user to the login page and the account is confirmed.', function () {

//     cy.then(function () {

//       const ln = new LoginPage();
//       ln.visitSignUp();
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
//       ln.visitSignUp();
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


  // it('Verify that user can reset the password and login with it.', function () {

  //     cy.then(function () {
        
  //       const ln = new LoginPage();
  //       ln.visitSignUp();
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
  //         ln.FillEmail(Email);
  //         ln.FillPassword(Signup.Password);
  //         ln.ClickSignIn();
  //         ln.GetOTP(id,Email);
  //         ln.AssertLogIn();
  //         ln.ClickLogout();

  //         ln.visit();
  //         ln.clickresetPassword();
  //         cy.wait(5000);
  //         ln.FillResetEmail(Email);
  //         ln.clickreset();
  //         cy.wait(5000);
  //         ln.AssertionResetMail(id,Email);
  //         ln.FillNewPassword(Signup.Password2)
  //         ln.visit();
  //         ln.FillEmail(Email);
  //         ln.FillPassword(Signup.Password2);
  //         ln.ClickSignIn();
  //         // ln.GetOTP(id,Email);
  //         ln.AssertLogIn();
          
  //       });

  //     });
  // });

//   it('Verify reset Password Feilds have Password Does not Match validations', function () {

//     cy.then(function () {
      
//       const ln = new LoginPage();
//       ln.visitSignUp();
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
//         ln.FillEmail(Email);
//         ln.FillPassword(Signup.Password);
//         ln.ClickSignIn();
//         ln.GetOTP(id,Email);
//         ln.Logout2()
//         cy.wait(10000);
//         ln.visitSignUp();
//         ln.visit();
//         ln.OpenReset();
//         ln.FillResetEmail(Email);
//         ln.clickreset();
//         ln.FillResetEmail(Email);
//         ln.clickreset();
//         cy.wait(5000);
//         ln.AssertionResetMail(id,Email);
//         ln.fillResetPassword(Signup.Password)
        
//       });

//     });
// });

it('Verify reset Password Feilds have Invalid validations', function () {

  cy.then(function () {
    
    const ln = new LoginPage();
    ln.visitSignUp();
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
      ln.GetOTP(id,Email);
      ln.Logout2()
      cy.wait(10000);
      ln.visitSignUp();
      ln.visit();
      ln.OpenReset();
      ln.FillResetEmail(Email);
      ln.clickreset();
      ln.FillResetEmail(Email);
      ln.clickreset();
      cy.wait(5000);
      ln.AssertionResetMail(id,Email);
      ln.fillResetPassword(Signup.Password3);
      cy.get('.sc-e895a8af-0').should('be.disabled');

      
    });
    
  });
});

});
