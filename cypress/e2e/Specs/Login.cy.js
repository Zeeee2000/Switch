import LoginPage from '../POM_Files/LoginPOM.cy';


describe('Login Testcases', () => {

  beforeEach(() => {
    const ln = new LoginPage();
    ln.visit();
    cy.fixture('Login.json').then((loginData) => {
      const { validUser } = loginData;
    })
})


it('Check if we are able to login to the application with valid credentials', () => {
  const ln = new LoginPage();
  cy.fixture('Login.json').then((loginData) => {
    const { validUser } = loginData;
    ln.FillEmail(validUser.username);
    ln.FillPassword(validUser.password)
    ln.ClickSignIn();
    ln.AssertLogIn();
  });

});

it('Check Invalid Email validation', () => {
  const ln = new LoginPage();
  cy.fixture('Login.json').then((loginData) => {
    const { invalidUser } = loginData;
    ln.FillEmail(invalidUser.username);
    ln.FillPassword(invalidUser.password)
    ln.ClickSignIn();
    ln.AssertEmailValidation();

  });
});

  it('Check Invalid Email validation', () => {
  const ln = new LoginPage();
  cy.fixture('Login.json').then((loginData) => {
    const { invalidUser } = loginData;
    ln.FillEmail(invalidUser.username);
    ln.FillPassword(invalidUser.password)
    ln.ClickSignIn();
    ln.AssertEmailValidation();

  });
  });

  it('Check Signup works', () => {
    const ln = new LoginPage();
    cy.fixture('Login.json').then((loginData) => {
      const { Signup } = loginData;
      cy.wait(3000);
      cy.visit('https://app.dev.switchrewardcard.com/signup');
      // ln.ClickSignUp();
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
    });
      });

    it('Check Passwords do not match validation', () => {
      const ln = new LoginPage();
      cy.fixture('Login.json').then((loginData) => {
        const { Signup } = loginData;
        cy.wait(3000);
        cy.visit('https://app.dev.switchrewardcard.com/signup');
        // ln.ClickSignUp();
        ln.FillFirstName(Signup.FirstName);
        ln.FillLastName(Signup.LastName);
        let Email = ln.generateUniqueEmail();
        cy.log(Email);
        ln.FillEmailSignUp(Email);
        ln.fillSignupPassword(Signup.Password);
        ln.AssertPasswordsDonotMatch();
      });
    });
});
