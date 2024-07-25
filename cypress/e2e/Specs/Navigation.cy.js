import Navigation from '../POM_Files/NavigationPOM.cy';

describe('Login Testcases', () => {
  beforeEach(() => {
    const ln = new Navigation();
    ln.visit();
  });



  it('Assert Dashboard Home navigation', () => {
    const ln = new Navigation();
    cy.fixture('Navigation.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickHome();
      ln.AssertHome();
    });
  });
  
  it('Assert nodes navigation', () => {
    const ln = new Navigation();
    cy.fixture('Navigation.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.clickNodes();
      ln.AssertNodes();

    });
  });
  
  it('Assert Rewards navigation', () => {
    const ln = new Navigation();
    cy.fixture('Navigation.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.clickRewards();
      ln.AssertRewards();

    });
  });
  
  it('Assert Wallet navigation', () => {
    const ln = new Navigation();
    cy.fixture('Navigation.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.clickWallet();
      ln.AssertWallet();

    });
  });

  it('Assert Dashboard Store navigation', () => {
    const ln = new Navigation();
    cy.fixture('Navigation.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickStore();
      ln.AssertStore();

    });
  });

    it('Assert Dashboard Store navigation', () => {
    const ln = new Navigation();
    cy.fixture('Navigation.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickStore();
      ln.AssertStore() 
    });
  });

  it('Assert Dashboard Cart navigation', () => {
    const ln = new Navigation();
    cy.fixture('Navigation.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.ClickCart()
      ln.AssertStore() 
    });
  });


  it('Assert Dashboard Voting navigation', () => {
    const ln = new Navigation();
    cy.fixture('Navigation.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.ClickVoting();
      ln.AssertVoting();
    });
  });

  it('Assert Dashboard Support navigation', () => {
    const ln = new Navigation();
    cy.fixture('Navigation.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickSupport();
    });
  });


});
