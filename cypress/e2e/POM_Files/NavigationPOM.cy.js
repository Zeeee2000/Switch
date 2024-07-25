class Navigation {
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
    cy.get('.sc-e895a8af-0').click();
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

  clickWallet(){
  cy.get('[data-core-qa="navLinkWallet"]').click();
  }

  AssertWallet(){
    cy.wait(15000);
    cy.url().should('include', 'https://dashboard.stage.switchrewardcard.com/dashboard/wallet/tokens',{ timeout: 30000 });
  }

  clickRewards(){
    cy.get('[data-core-qa="navLinkRewards"]').click();
  }

  AssertRewards(){
      cy.wait(15000);
      cy.url().should('include', 'https://dashboard.stage.switchrewardcard.com/dashboard/rewards',{ timeout: 30000 });
  }
  clickNodes(){
    cy.get('[data-core-qa="navLinkNodes"]').click();
  }

  AssertNodes(){
    cy.wait(15000);
    cy.url().should('include', 'https://dashboard.stage.switchrewardcard.com/dashboard/nodes',{ timeout: 30000 });
  }

  clickHome(){
    cy.get('[data-core-qa="navLinkHome"]',{ timeout: 30000 }).click();
  }
  AssertHome(){
    cy.wait(10000);
    cy.url().should('include', 'https://dashboard.stage.switchrewardcard.com/home',{ timeout: 30000 });
  }
  
  clickStore(){
    cy.get('[data-core-qa="navLinkStore"]').click();
  }

  AssertStore(){
    cy.wait(15000);
    // cy.getCurrentUrl().then((url) => {
    //   // You can perform additional assertions or actions with the URL if needed
    //   expect(url).to.include('https://web.connectunited.com/login');
    // });
    Cypress.Commands.add('getCurrentUrl', () => {
      return cy.url().then((url) => {
        cy.log('Current URL:', url);
        return url;
      });
    });
  }

  ClickCart(){
    cy.get('[data-core-qa="navLinkCart"]').click()
  }

  ClickVoting(){
    cy.get('[data-core-qa="navLinkVoting"]').click();
  }

  AssertVoting(){
    cy.wait(10000);
    cy.url().should('include', 'https://dashboard.stage.switchrewardcard.com/voting',{ timeout: 30000 });
  }


  clickSupport(){
    cy.get('[data-core-qa="navLinkSupport"]').click();
  }
}
    
export default Navigation;
  