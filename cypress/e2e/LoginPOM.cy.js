class LoginPage {
  visit() {
    cy.visit('https://app.dev.switchrewardcard.com/login');
  }

  FillEmail(email){
    cy.get('#email-input').type(email);
  }

  FillPassword(password){
    cy.get('#password-input').type(password);
  }

  ClickSignIn(){
    cy.get('.sc-e895a8af-0').click();
  }

}
    
export default LoginPage;
  