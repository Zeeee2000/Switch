import LoginPage from './LoginPOM.cy';


describe('Login Testcases', () => {

  beforeEach(() => {
    const ln = new LoginPage();
    ln.visit();
    cy.fixture('Login.json').then((loginData) => {
      const { validUser } = loginData;
    })

})
it('should show an error with valid email and invalid password', () => {
  const ln = new LoginPage();
  ln.visit();
  cy.fixture('Login.json').then((loginData) => {
    const { validUser } = loginData;
    ln.FillEmail(validUser.username);
    ln.FillPassword(validUser.password)
    ln.ClickSignIn();
  });
});

});
