import Assets from '../POM_Files/AssetsPOM.cy';


describe('Login Testcases', () => {
  beforeEach(() => {
    const ln = new Assets();
    ln.visit();
  });

  it('Assert First Name Validation', () => {
    const ln = new Assets();
    cy.fixture('Navigation.json').then((loginData) => {
      const { validUser } = loginData;
      // ln.FillEmail(validUser.username);
      // ln.FillPassword(validUser.password);
      // ln.ClickSignIn();
      // let id= "tegspcsa";
      // ln.GetOTP(id,validUser.username);
      // ln.AssertLogIn();
      // ln.ClickAssets();
      cy.visit('https://admin.stage.switchrewardcard.com/login');
      cy.get('#username').type('zohaibsulehri07+cap@gmail.com');
      cy.get('#password > .p-inputtext').type('Helloworld81@');
      cy.get('.text-lg').click();
      cy.get('.MfaForm_mfaInput__KIB7f', { timeout: 30000 }).eq(0).type('0', { force: true });
      cy.get('.MfaForm_mfaInput__KIB7f', { timeout: 30000 }).eq(1).type('0', { force: true });
      cy.get('.MfaForm_mfaInput__KIB7f', { timeout: 30000 }).eq(2).type('0', { force: true });
      cy.get('.MfaForm_mfaInput__KIB7f', { timeout: 30000 }).eq(3).type('0', { force: true });
      cy.get('.MfaForm_mfaInput__KIB7f', { timeout: 30000 }).eq(4).type('0', { force: true });
      cy.get('.p-input-icon-left > .p-inputtext').type('Luna408@tegspcsa.mailosaur.net');


    });

  });

  it('Verify that the link directs the user to the login page and on signin it logs in the user. ', function () {

    cy.then(function () {

      const ln = new Assets();
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
        ln.AssertMailRecieved(id,Email);
        cy.wait(4000);
        ln.clickconfirm();
        ln.FillEmail(Email);
        ln.FillPassword(Signup.Password);
        ln.ClickSignIn();
        ln.GetOTP(id,Email)
        ln.AssertLogIn();
        cy.get(':nth-child(1) > .sc-96b978b0-2', { timeout: 30000 }).click();
        cy.window().then((win) => {
          win.close();
        });
        cy.get('.sc-96b978b0-2').click();
        cy.get(':nth-child(1) > .sc-96b978b0-3 > :nth-child(1)').click();
        cy.get(':nth-child(2) > .sc-96b978b0-3 > :nth-child(1)').click();
        cy.get('.canvasSignature').click();
        cy.get('.sc-6fcbb8a5-0').click();
        cy.wait(4000);
        cy.visit('https://admin.stage.switchrewardcard.com/login');
        cy.get('#username').type('zohaibsulehri07+cap@gmail.com');
        cy.get('#password > .p-inputtext').type('Helloworld81@');
        cy.get('.text-lg').click();
        cy.get('.MfaForm_mfaInput__KIB7f', { timeout: 30000 }).eq(0).type('0', { force: true });
        cy.get('.MfaForm_mfaInput__KIB7f', { timeout: 30000 }).eq(1).type('0', { force: true });
        cy.get('.MfaForm_mfaInput__KIB7f', { timeout: 30000 }).eq(2).type('0', { force: true });
        cy.get('.MfaForm_mfaInput__KIB7f', { timeout: 30000 }).eq(3).type('0', { force: true });
        cy.get('.MfaForm_mfaInput__KIB7f', { timeout: 30000 }).eq(4).type('0', { force: true });
        cy.get('.p-input-icon-left > .p-inputtext', { timeout: 30000 }).type(Email);


        ln.visit();
        ln.FillEmail(Email);
        ln.FillPassword(Signup.Password);
        ln.ClickSignIn();
        ln.GetOTP(id,Email)
        ln.AssertLogIn();

        cy.get('.sc-43aaa5ff-3 > span').contains('Rewards Wallet 1.0');
      });



    });

});
  
});
