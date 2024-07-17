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
      "Oscar", "Penny", "Quentin", "Rita", "Simon", "Tara", "Ulysses", "Violet","Viole243t","Viole24t","Vi4243olet","Vio324234let",
      "Violetqweqwe","Aaron", "Beth", "Cathy", "Dean", "Ella", "Fred", "Gina", "Hank", "Ivy", "Josh", "Kara", "Liam", "Mia", "Noah", "Opal", "Pete", "Quincy", "Rose", "Seth", "Tina", "Umar", "Vera", "Will", "Xena", "Yuri", "Zara","Anderson", "Brown", "Clark", "Davis", "Evans", "Green", "Hill", "Jones", "King", "Lewis", "Moore", "Nelson", "Owen", "Parker", "Quinn", "Roberts", "Smith", "Taylor", "Thomas", "Walker", "Young", "Zimmer"
    ];

    const numbers = Array.from({ length: 500 }, (_, i) => (i + 1).toString());

    const domains = ["@tegspcsa.mailosaur.net"];

    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];

    return `${randomName}${randomNumber}${randomDomain}`;
  }

  FillEmail(email) {
    cy.get('#email-input', { timeout: 30000 }).type(email);
  }

  FillPassword(password) {
    cy.get('#password-input').type(password);
  }

  ClickSignIn() {
    cy.get('.sc-e895a8af-0').click();
  }

  AssertLogIn() {
    cy.get('[data-core-qa="navLinkHome"] > div > .sc-7706b7e9-0', { timeout: 30000 })
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
    cy.get('.sc-124433d1-2',{ timeout: 30000 })
    .contains('Verify your email address.');
  }

  AssertSignUpLandingPage(){
    cy.get('.sc-124433d1-2',{ timeout: 30000 })
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

  ClickReset()
  {
          cy.get('.sc-e895a8af-0').click();
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
    cy.get(':nth-child(3) > .sc-77b3ed5f-4',{ timeout: 30000 }).contains('Rewards Wallet Setup');
  }

  AssertLoginPassword(){
    cy.get('.keiFHK > .sc-ca9903b5-1').contains('Invalid password. Please try again.');
  }

  getRandom5DigitNumber() {
   return Math.floor(Math.random() * 90000) + 10000;}

   clickresetPassword(){
    cy.get('.login_formRow__GdRDx > .login_link__ALi3j').click();
   }

   ClickLogout(){
    cy.get('.sidebar_footerLinks__PLPJn > .navLink_wrapper__XQHl5').click();
   }

   AssertMailRecieved(id,Email){
          cy.mailosaurGetMessage(id, {
            sentTo: Email,
          }, {
            timeout: 30000, // 20 seconds (in milliseconds)
          }).then((email) => {

            cy.log(email.subject);
            cy.log(email.html.links[0].href)
            return cy.visit(email.html.links[0].href);
            
          });
        }

        clickconfirm(){
          cy.get('.sc-e895a8af-0',{ timeout: 30000 }).click();
        }

        AssertMail(id,Email){

        cy.mailosaurGetMessage(id, {
          sentTo: Email,
        }, {
          timeout: 30000, // 20 seconds (in milliseconds)
        }).then((email) => {

          cy.log(email.subject);
          cy.log(email.html.links[0].href)
          return cy.visit(email.html.links[0].href);
          
        });


      }

      clickreset(){
        cy.get('.forgot-password_form__Gbsbz > .MuiButtonBase-root').click();
      };

      FillResetEmail(Email){
        cy.get('#forgotPasswordInputEmail').type(Email);
      };

      AssertionResetMail(id,Email){
                cy.mailosaurGetMessage(id, {
            sentTo: Email,
          }, {
            timeout: 30000, // 20 seconds (in milliseconds)
          }).then((email) => {
            cy.log(email.subject);
            cy.log(email.html.links[1].href)
            cy.visit(email.html.links[1].href, { failOnStatusCode: false });

          });
        }

        FillNewPassword(Password2){
          cy.get('#password').type(Password2);
          cy.get('#confirmPassword').type(Password2);
          cy.get('.MuiButton-contained').click();
        }

}
    
export default LoginPage;
  