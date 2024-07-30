class Card {
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
        cy.get('[autocomplete="one-time-code"]', { timeout: 30000 }).type(code);
      });
    }

  ClickSignIn() {
    cy.get('.sc-e895a8af-0').click();
  }

  AssertLogIn() {
    cy.get('[data-core-qa="navLinkHome"]', { timeout: 30000 })
      .contains('Home');
  }

  AssertSignUpLandingPage(){
    cy.get('.sc-124433d1-2',{ timeout: 30000 })
    .contains('Verify your email address.');
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
    cy.get('.sc-b34adb1e-1',{ timeout: 30000 }).contains('Updated Agreements')
  }

  AssertLoginPassword(){
    cy.get('.keiFHK > .sc-ca9903b5-1').contains('Invalid password. Please try again.');
  }

  getRandom5DigitNumber() {
   return Math.floor(Math.random() * 90000) + 10000;}

   clickresetPassword(){
    cy.get('[style="padding: 0px; margin: 0px; text-align: center;"] > .sc-286e984d-0').click();
   }

   ClickLogout(){
    cy.get('.sidebar_footerLinks__PLPJn > .navLink_wrapper__XQHl5 > div > .sc-bc7baccc-0',{ timeout: 30000 }).click();
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
      
      Logout2(){
        cy.wait(10000);
        cy.get('.sidebar_footerLinks__PLPJn > .navLink_wrapper__XQHl5 > div > .sc-bc7baccc-0',{ timeout: 30000 }).click();
      }
      
      clickCard(){
        cy.wait(5000);
        cy.get('[data-core-qa="navLinkCard"]').click();
      }

      clickApplyNow(){
        cy.wait(5000);
        cy.get('.sc-e895a8af-0',{ timeout: 30000 }).eq(0).click();
      }

      AssertFirstName(){
        cy.get('#input-first-name',{ timeout: 30000 }).click();
        cy.get('#input-middle-name').click();
        cy.get(':nth-child(1) > :nth-child(1) > .sc-ca9903b5-2 > .sc-ca9903b5-1').contains('Field is required');
      }

      Assertlastname(){
        cy.get('#input-last-name',{ timeout: 30000 }).click();
        cy.get('#input-middle-name').click();
        cy.get(':nth-child(1) > :nth-child(3) > .sc-ca9903b5-2 > .sc-ca9903b5-1').contains('Field is required');
      }

      AssertMobileNumber(){
        cy.get('.PhoneInputInput',{ timeout: 30000 }).click();
        cy.get('#input-middle-name').click();
        cy.get(':nth-child(2) > :nth-child(3) > .sc-ca9903b5-2 > .sc-ca9903b5-1').contains('Field is required');
      }

      AssertMobileNum(){
        cy.get('.PhoneInputInput',{ timeout: 30000 }).click();
        cy.get('#input-middle-name').click();
        cy.get(':nth-child(2) > :nth-child(3) > .sc-ca9903b5-2 > .sc-ca9903b5-1').contains('Field is required');
      }

      AssertIDNumber(){
        cy.get('#input-id-number',{ timeout: 30000 }).click();
        cy.get('#input-middle-name').click();
        cy.get(':nth-child(6) > :nth-child(1) > .sc-ca9903b5-2 > .sc-ca9903b5-1').contains('Field is required');
      }

      AssertIssuedBy(){
        cy.get('#input-issued-by',{ timeout: 30000 }).click();
        cy.get('#input-middle-name').click();
        cy.get(':nth-child(6) > :nth-child(2) > .sc-ca9903b5-2 > .sc-ca9903b5-1').contains('Field is required');
      }

      AssertDocumentProvider(){
        cy.get('#input-document-provider',{ timeout: 30000 }).click();
        cy.get('#input-middle-name').click();
        cy.get(':nth-child(12) > :nth-child(2) > .sc-ca9903b5-2 > .sc-ca9903b5-1').contains('Field is required');
      }

      FillFirstName(Name){
        cy.get('#input-first-name', { timeout: 30000 }).type(Name);
      }

      FillLastName(Name){
        cy.get('#input-last-name').type(Name);
      }

      FillPhoneNumber(Number){
        cy.get('.PhoneInputInput').type(Number);
      }

      FillIdNumber(Number){
        cy.get('#input-id-number').type(Number);
      }

      FillIssuedBy(Name){
        cy.get('#input-issued-by').type(Name)
      }

      FillDocumentProvider(Doc){
        cy.get('#input-document-provider').type(Doc);
      }

      DocumentProvider(Name){
        cy.get('#input-document-provider').type(Name);
      }

      
      AddDOB(Date){
        cy.get(':nth-child(2) > :nth-child(1) > .sc-124f1c36-3').type(Date);
      }
      
      AssertInvalidDOB(){
        cy.get(':nth-child(2) > :nth-child(1) > .sc-ca9903b5-2 > .sc-ca9903b5-1').contains('Please enter a valid date (MM/DD/YYYY)');
      }

      AssertInvalidFutureDOB(){
        cy.get(':nth-child(2) > :nth-child(1) > .sc-ca9903b5-2 > .sc-ca9903b5-1').contains('Must be older than 18');
      }

      AssertPhoneNumber(){
        cy.get(':nth-child(2) > :nth-child(3) > .sc-ca9903b5-2 > .sc-ca9903b5-1').contains('Please enter a valid phone number.');
      }

      FillIssueDate(Date){
        cy.get(':nth-child(7) > :nth-child(1) > .sc-124f1c36-3').type(Date);
      }

      AssertValidIssuedDate(){
        cy.get(':nth-child(7) > :nth-child(1) > .sc-ca9903b5-2 > .sc-ca9903b5-1').contains('Please enter a valid date (MM/DD/YYYY)');
      }

      AssertValidFutureIssuedDate(){
        cy.get(':nth-child(7) > :nth-child(1) > .sc-ca9903b5-2 > .sc-ca9903b5-1').contains('Issued date cannot be a future date.');
      }
      
      FillExpirationDate(Date){
        cy.get(':nth-child(7) > :nth-child(2) > .sc-124f1c36-3').type(Date);
      }

      AssertValidExpirationdate(){
        cy.get(':nth-child(7) > :nth-child(2) > .sc-ca9903b5-2').contains('Please enter a valid date (MM/DD/YYYY)');
      }

      FillBillDate(Date){
        cy.get(':nth-child(13) > :nth-child(1) > .sc-124f1c36-3').type(Date);
      }

      AssertValidBillDate(){
        cy.get(':nth-child(13) > :nth-child(1) > .sc-ca9903b5-2 > .sc-ca9903b5-1').contains('Please enter a valid date (MM/DD/YYYY)');
      }

      AssertValidFutureBillDate(){
        cy.get(':nth-child(13) > :nth-child(1) > .sc-ca9903b5-2 > .sc-ca9903b5-1').contains('Issued date cannot be a future date.');
      }

      selectIDType(Type){
        cy.get(':nth-child(8) > :nth-child(1) > .sc-124f1c36-3 > #type').select(Type);
        
      }

      selectIdLanguage(Language){
        cy.get(':nth-child(8) > :nth-child(2) > .sc-124f1c36-3 > #lang').select(Language);
      }

      selectDocumentType(DocType){
        cy.get(':nth-child(12) > :nth-child(1) > .sc-124f1c36-3 > #type').select(DocType);
      }

      selectDocumentLanguage(Language){
        cy.get(':nth-child(13) > :nth-child(2) > .sc-124f1c36-3 > #lang').select(Language);
      }

      selectGender(Gender){
        cy.get('#gender').select(Gender);
      }

      AddIdFront(){
        cy.get('.sc-d7b831f1-1 > .sc-33137ff8-2 > .sc-33137ff8-1 > .sc-33137ff8-3').selectFile("cypress\\Files\\file.PNG", {action: "drag-drop"});
      }

      AddAdressFront(){
        cy.get('.sc-c289052f-1 > .sc-33137ff8-2 > .sc-33137ff8-1 > .sc-33137ff8-3').selectFile("cypress\\Files\\file.PNG", {action: "drag-drop"});
      }

      AssertContinueButton(){
        cy.get('.sc-d9886ec1-1')
    .should('be.enabled');
      }

      ClickContinue(){
        cy.get('.sc-d9886ec1-1').click();
      }

      AssertIDFront(){
        cy.get('.sc-d7b831f1-1 > .sc-33137ff8-2 > .sc-33137ff8-5 > .sc-33137ff8-9 > .sc-33137ff8-8').should('exist');

      }

      AssertAdressfront(){
        cy.get('.sc-c289052f-1 > .sc-33137ff8-2 > .sc-33137ff8-5 > .sc-33137ff8-9 > .sc-33137ff8-8').should('exist');
      }
      
      AssertContinueDisabled(){
        cy.get('.sc-d9886ec1-1').should('be.disabled');

      }

      AssertOneFileCanBeUploaded(){
      cy.get('.sc-33137ff8-2 > .sc-ca9903b5-2 > .sc-ca9903b5-1').contains('Can only upload 1 file.')
      }

      DeleteAddressfront(){
        cy.get('.sc-c289052f-1 > .sc-33137ff8-2 > .sc-33137ff8-5 > :nth-child(2) > .sc-33137ff8-6 > img').click();
      }
      


}

    
export default Card;
  