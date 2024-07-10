class LoginPage {
  visit() {
    cy.visit('https://app.dev.switchrewardcard.com/login');
  }

  visitSignUp() {
    cy.visit('https://app.dev.switchrewardcard.com/signup');
  }

  generateUniqueEmail() {
    const names = [
      "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Isaac", "Jack",
      "Karen", "Leo", "Mona", "Nate", "Olivia", "Paul", "Quinn", "Rachel", "Sam", "Tina",
      "Uma", "Victor", "Wendy", "Xander", "Yara", "Zane", "Adrian", "Bianca", "Carlos", "Diana",
      "Ethan", "Fiona", "George", "Heather", "Ian", "Julia", "Kevin", "Luna", "Miles", "Nina",
      "Oscar", "Penny", "Quentin", "Rita", "Simon", "Tara", "Ulysses", "Violet"
    ];

    const numbers = Array.from({ length: 500 }, (_, i) => (i + 1).toString());

    const domains = ["@example.com", "@test.com", "@mail.com", "@domain.com"];

    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];

    return `${randomName}${randomNumber}${randomDomain}`;
  }

  FillEmail(email) {
    cy.get('#email-input').type(email);
  }

  FillPassword(password) {
    cy.get('#password-input').type(password);
  }

  ClickSignIn() {
    cy.get('.sc-e895a8af-0').click();
  }

  AssertLogIn() {
    cy.get('[data-core-qa="navLinkHome"] > div > .sc-7706b7e9-0', { timeout: 20000 })
      .contains('Home');
  }

  AssertEmailValidation() {
    cy.get('.keiFHK > .sc-ca9903b5-1').contains('Email address not found. Please try again');
  }

  AssertPasswordValidation() {
    cy.get('.keiFHK > .sc-ca9903b5-1').contains('Invalid password. Please try again.');
  }

  ClickSignUp() {
    cy.visit('https://app.dev.switchrewardcard.com/signup');
  }

  FillFirstName(firstName) {
    cy.get('#fname-input').type(firstName);
  }

  FillLastName(lastName) {
    cy.get('#lname-input').type(lastName);
  }

  FillEmailSignUp(email) {
    cy.get('#email-input').type(email);
  }

  fillSignupPassword(password) {
    cy.get('.sc-124f1c36-3').eq(3).type(password);
  }

  fillConfirmPassword(password) {
    cy.get('.sc-124f1c36-3').eq(4).type(password);
  }

  TermsAndConditions() {
    cy.get('.sc-c27039ca-4').click({ multiple: true }); 
  }

  ClickSignUp(){
    cy.get('.sc-e895a8af-0').click();
  }

  AssertSignUpSucessfull(){
    cy.get('.sc-124433d1-2',{ timeout: 20000 })
    .contains('Verify your email address.');
  }

  AssertSignUpLandingPage(){
    cy.get('.sc-124433d1-2',{ timeout: 20000 })
    .contains('Verify your email address.');
  }

  AssertPasswordsDonotMatch(){
    cy.get('.keiFHK > .sc-ca9903b5-1').contains('Passwords do not match');
  }
  AssertEmpty_Email_FName_LName(){
    cy.get('#email-input').click();
    cy.get('#fname-input').click();
    cy.get('#lname-input').click();
    cy.get('#fname-input').click();
    cy.get(':nth-child(1) > .sc-ca9903b5-2 > .sc-ca9903b5-1').contains('Field is required.');
    cy.get(':nth-child(2) > .sc-ca9903b5-2 > .sc-ca9903b5-1').contains('Field is required.');
    cy.get(':nth-child(3) > .sc-ca9903b5-2 > .sc-ca9903b5-1').contains('Field is required.');  
  }

  AssertInvalidEmailFormat(){
    cy.get('#lname-input').click();
    cy.get(':nth-child(3) > .sc-ca9903b5-2 > .sc-ca9903b5-1').contains('Please enter a valid email address.');
  }

  AssertValidEmailFormat(){
    cy.get('#lname-input').click();
    cy.get(':nth-child(3) > .sc-ca9903b5-2 > .sc-ca9903b5-1').should('be.empty');
  }

  AssertAccountAlreadyExists(){
    cy.get('.keiFHK > .sc-ca9903b5-1').contains('Email already exists');
  }

  AssertSignUpButtonDisabled(){
    cy.get('.sc-e895a8af-0').should('be.disabled');
  }

  AssertWalletSetupOnFirstScreen(){
    cy.get(':nth-child(3) > .sc-77b3ed5f-4',{ timeout: 20000 }).contains('Rewards Wallet Setup');
  }

  AssertLoginPassword(){
    cy.get('.keiFHK > .sc-ca9903b5-1').contains('Invalid password. Please try again.');
  }

}
    
export default LoginPage;
  