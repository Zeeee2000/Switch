class LoginPage {
  visit() {
    cy.visit('https://app.dev.switchrewardcard.com/login');
  }

   generateUniqueEmail() {
    const names = [
        "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Isaac", "Jack",
        "Karen", "Leo", "Mona", "Nate", "Olivia", "Paul", "Quinn", "Rachel", "Sam", "Tina",
        "Uma", "Victor", "Wendy", "Xander", "Yara", "Zane", "Adrian", "Bianca", "Carlos", "Diana",
        "Ethan", "Fiona", "George", "Heather", "Ian", "Julia", "Kevin", "Luna", "Miles", "Nina",
        "Oscar", "Penny", "Quentin", "Rita", "Simon", "Tara", "Ulysses", "Violet"
    ];

    // Generate numbers from 1 to 500 and convert them to strings
    const numbers = Array.from({ length: 500 }, (_, i) => (i + 1).toString());

    // Define email domains
    const domains = [
        "@example.com", "@test.com", "@mail.com", "@domain.com"
    ];

    // Generate random parts
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];

    // Combine parts to form a unique email address
    const uniqueEmail = `${randomName}${randomNumber}${randomDomain}`;
    return uniqueEmail;
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

  AssertLogIn(){
    cy.get('[data-core-qa="navLinkHome"] > div > .sc-7706b7e9-0',{ timeout: 20000 })  
    .contains('Home');
  }
  
  AssertEmailValidation(){
    cy.get('.keiFHK > .sc-ca9903b5-1').contains('Email address not found. Please try again');
  }

  AssertPasswordValidation(){
    cy.get('.keiFHK > .sc-ca9903b5-1').contains('Invalid password. Please try again.');
  }

  ClickSignUp(){
    cy.visit('https://app.dev.switchrewardcard.com/signup');
  }

  FillFirstName(FirstName){
    cy.get('#fname-input').type(FirstName);
  }

  FillLastName(LastName){
    cy.get('#lname-input').type(LastName);
  }

  FillEmailSignUp(Email){
    cy.get('#email-input').type(Email);
  }

  FillPassword(Password){
    cy.get(':nth-child(2) > .sc-124f1c36-3').type(Password);
  }

  fillConfirmPassword(Password){
    cy.get('[style="margin: 6px 0px 0px;"] > .sc-124f1c36-3').type(Password);
  }

  TermsAndConditions(){
    cy.get(':nth-child(10) > .sc-c27039ca-1 > .sc-c27039ca-2 > .sc-c27039ca-4').click();
    cy.get(':nth-child(11) > .sc-c27039ca-1 > .sc-c27039ca-2 > .sc-c27039ca-4').click();
    cy.get(':nth-child(9) > .sc-c27039ca-1 > .sc-c27039ca-2 > .sc-c27039ca-4').click();
  }

  ClickSignUp(){
    cy.get('.sc-e895a8af-0').click();
  }

  AssertSignUpSucessfull(){
    cy.get('.sc-124433d1-2',{ timeout: 20000 })
    .contains('Verify your email address.');
  }

  AssertPasswordsDonotMatch(){
    cy.get('.keiFHK > .sc-ca9903b5-1').contains('Passwords do not match');
  }
}
    
export default LoginPage;
  