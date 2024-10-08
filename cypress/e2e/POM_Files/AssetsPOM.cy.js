class Assets {
  visit() {
    cy.visit('https://app.stage.switchrewardcard.com/login', { timeout: 120000 })
  .then(() => {
    // If the initial visit fails or times out, force reload the page
    cy.reload();
  });
  }

  visitSignUp() {
    cy.visit('https://app.stage.switchrewardcard.com/signup', { timeout: 120000 });
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

  GetOTP(id,username){
      cy.wait(10000);
      cy.mailosaurGetMessage(id, {
        sentTo: username,
      }, {
        timeout: 30000, // 20 seconds (in milliseconds)
      }).then((email) => {

        cy.log(email.subject);
        let code = email.subject.match(/\d+/)[0];
        cy.log(code);
        cy.get('[autocomplete="one-time-code"]', { timeout: 30000 }).type(code);
      });
    }

  ClickSignIn() {
    cy.get('.sc-6fcbb8a5-0').click();
  }

  AssertLogIn() {
    cy.get('[data-core-qa="navLinkHome"]', { timeout: 30000 })
      .contains('Home');
  }

  AssertSignUpLandingPage(){
    cy.get('.sc-124433d1-2',{ timeout: 30000 })
    .contains('Verify your email address.');
  }

  ClickAssets()
  {
    cy.get('[data-core-qa="navLinkSetup"] > div > .sc-bc7baccc-0').click();
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

  GetOTP(id,username){
      cy.wait(5000);
      cy.mailosaurGetMessage(id, {
        sentTo: username,
      }, {
        timeout: 30000, // 20 seconds (in milliseconds)
      }).then((email) => {

        cy.log(email.subject);
        let code = email.subject.match(/\d+/)[0];
        cy.log(code);
        cy.get('[autocomplete="one-time-code"]').type(code);
      });
    }

  ClickSignIn() {
    cy.get('.sc-6fcbb8a5-0').click();
  }

  AssertLogIn() {
    cy.get('[data-core-qa="navLinkHome"]', { timeout: 30000 })
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
    cy.get(':nth-child(4) > .sc-8e72daae-3').type(password);
  }

  fillConfirmPassword(password) {
    cy.get('.sc-8e72daae-3').eq(4).type(password);
  }

  TermsAndConditions() {
    cy.get('.sc-c27039ca-4').click({ multiple: true }); 
  }

  ClickSignUp(){
    cy.get('.sc-6fcbb8a5-0').click();
  }

  AssertSignUpSucessfull(){
    cy.get('.sc-124433d1-2',{ timeout: 30000 })
    .contains('Verify your email address.');
  }

  AssertSignUpLandingPage(){
    cy.get('.sc-124433d1-2',{ timeout: 30000 })
    .contains('Verify your email address.');
  }

  AssertMailRecieved(id,Email){
    cy.mailosaurGetMessage(id, {
      sentTo: Email
    }, {
      timeout: 30000, // 20 seconds (in milliseconds)
    }).then((email) => {

      cy.log(email.subject);
      cy.log(email.html.links[0].href)
      return cy.visit(email.html.links[0].href);
      
    });
  }

  clickconfirm(){
    cy.get('.sc-6fcbb8a5-0',{ timeout: 30000 }).click();
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
}

    
export default Assets;
  