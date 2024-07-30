import Card from '../POM_Files/CardPOM.cy';
import Navigation from '../POM_Files/CardPOM.cy';

describe('Login Testcases', () => {
  beforeEach(() => {
    const ln = new Card();
    ln.visit();
  });

  it('Assert First Name Validation', () => {
    const ln = new Card();
    cy.fixture('Navigation.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickCard();
      ln.clickApplyNow();
      ln.AssertFirstName();
    });

  });
  

  it('Assert First Name Validation', () => {
    const ln = new Card();
    cy.fixture('Navigation.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickCard();
      ln.clickApplyNow();
      ln.Assertlastname();
    });

  });

  it('Assert Phone Number Validation', () => {
    const ln = new Card();
    cy.fixture('Navigation.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickCard();
      ln.clickApplyNow();
      ln.AssertMobileNumber();
    });

  });

  it('Assert ID Number Validation', () => {
    const ln = new Card();
    cy.fixture('Navigation.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickCard();
      ln.clickApplyNow();
      ln.AssertIDNumber();
    });

  });

  it('Assert Issued By Validation', () => {
    const ln = new Card();
    cy.fixture('Navigation.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickCard();
      ln.clickApplyNow();
      ln.AssertIssuedBy();
    });

  });

  it('Assert Document Provider Validation', () => {
    const ln = new Card();
    cy.fixture('Navigation.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickCard();
      ln.clickApplyNow();
      ln.AssertIssuedBy();
      ln.AssertDocumentProvider();
    });
  });

  it('Assert Invalid DOB Validation', () => {
    const ln = new Card();
    cy.fixture('Card.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickCard();
      ln.clickApplyNow();
      ln.AssertIssuedBy();
      ln.AddDOB(validUser.InvalidDate);
      ln.AssertInvalidDOB();
      
    });
  });

    it('Assert Invalid Future DOB Validation', () => {
    const ln = new Card();
    cy.fixture('Card.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickCard();
      ln.clickApplyNow();
      ln.AssertIssuedBy();
      ln.AddDOB(validUser.FutureDate);
      ln.AssertInvalidFutureDOB(validUser.FutureDate);
      
    });
  });

  it('Assert Invalid Phone Number Validation', () => {
    const ln = new Card();
    cy.fixture('Card.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickCard();
      ln.clickApplyNow();
      ln.AssertIssuedBy();
      ln.FillPhoneNumber(validUser.InvalidPhone);
      ln.AssertPhoneNumber();
      
    });
  });

  it('Assert Invalid Issued Date Validation', () => {
    const ln = new Card();
    cy.fixture('Card.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickCard();
      ln.clickApplyNow();
      ln.AssertIssuedBy();
      ln.FillIssueDate(validUser.InvalidDate)
      ln.AssertValidIssuedDate();
      
    });
  });

  it('Assert Invalid Expiration Date Validation', () => {
    const ln = new Card();
    cy.fixture('Card.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickCard();
      ln.clickApplyNow();
      ln.AssertIssuedBy();
      ln.FillExpirationDate(validUser.InvalidDate)
      ln.AssertValidExpirationdate();
      
    });
  });

  it('Assert Future Issued Date Validation', () => {
    const ln = new Card();
    cy.fixture('Card.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickCard();
      ln.clickApplyNow();
      ln.AssertIssuedBy();
      ln.FillIssueDate(validUser.InvalidPhone)
      ln.AssertValidFutureIssuedDate();
      
    });
  });

  it('Assert Bill Date Validation', () => {
    const ln = new Card();
    cy.fixture('Card.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickCard();
      ln.clickApplyNow();
      ln.AssertIssuedBy();
      ln.FillBillDate(validUser.InvalidDate)
      ln.AssertValidBillDate();
      
    });
  });

  it('Assert Future Bill Date Validation', () => {
    const ln = new Card();
    cy.fixture('Card.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickCard();
      ln.clickApplyNow();
      ln.AssertIssuedBy();
      ln.FillBillDate(validUser.InvalidPhone)
      ln.AssertValidFutureBillDate();
      
    });
  });

  it('Verify after filling all mandatory feilds user can proceed.', () => {
    const ln = new Card();
    cy.fixture('Card.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickCard();
      ln.clickApplyNow();
      ln.FillFirstName(validUser.Name);
      ln.FillLastName(validUser.Name);
      ln.FillPhoneNumber(validUser.PhoneNumber);
      ln.FillIdNumber(validUser.PhoneNumber);
      ln.FillIssuedBy(validUser.PhoneNumber);
      ln.FillIssueDate(validUser.IssuedDate);
      ln.selectGender(validUser.Gender);
      ln.FillExpirationDate(validUser.IssuedDate);
      ln.AddDOB(validUser.IssuedDate);
      ln.selectIDType(validUser.IdType);
      ln.selectIdLanguage(validUser.Language);
      ln.selectDocumentType(validUser.DocType);
      ln.selectDocumentLanguage(validUser.Language);
      ln.FillDocumentProvider(validUser.Name);
      ln.FillBillDate(validUser.IssuedDate);
      ln.AddIdFront();
      ln.AddAdressFront();
      ln.AssertContinueButton();
      
      
      
    });
  });
  
  it('Verify Id front is uploaded.', () => {
    const ln = new Card();
    cy.fixture('Card.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickCard();
      ln.clickApplyNow();
      ln.FillFirstName(validUser.Name);
      ln.FillLastName(validUser.Name);
      ln.FillPhoneNumber(validUser.PhoneNumber);
      ln.FillIdNumber(validUser.PhoneNumber);
      ln.FillIssuedBy(validUser.PhoneNumber);
      ln.FillIssueDate(validUser.IssuedDate);
      ln.selectGender(validUser.Gender);
      ln.FillExpirationDate(validUser.IssuedDate);
      ln.AddDOB(validUser.IssuedDate);
      ln.selectIDType(validUser.IdType);
      ln.selectIdLanguage(validUser.Language);
      ln.selectDocumentType(validUser.DocType);
      ln.selectDocumentLanguage(validUser.Language);
      ln.FillDocumentProvider(validUser.Name);
      ln.FillBillDate(validUser.IssuedDate);
      ln.AddIdFront();
      ln.AssertIDFront();
  
      
    });
  });


  it('Verify Address front is uploaded.', () => {
    const ln = new Card();
    cy.fixture('Card.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickCard();
      ln.clickApplyNow();
      ln.FillFirstName(validUser.Name);
      ln.FillLastName(validUser.Name);
      ln.FillPhoneNumber(validUser.PhoneNumber);
      ln.FillIdNumber(validUser.PhoneNumber);
      ln.FillIssuedBy(validUser.PhoneNumber);
      ln.FillIssueDate(validUser.IssuedDate);
      ln.selectGender(validUser.Gender);
      ln.FillExpirationDate(validUser.IssuedDate);
      ln.AddDOB(validUser.IssuedDate);
      ln.selectIDType(validUser.IdType);
      ln.selectIdLanguage(validUser.Language);
      ln.selectDocumentType(validUser.DocType);
      ln.selectDocumentLanguage(validUser.Language);
      ln.FillDocumentProvider(validUser.Name);
      ln.FillBillDate(validUser.IssuedDate);
      ln.AddIdFront();
      ln.AddAdressFront();
      ln.AssertAdressfront();
  
      
    });
  });

  it('Verify ID front is Mandatory.', () => {
    const ln = new Card();
    cy.fixture('Card.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickCard();
      ln.clickApplyNow();
      ln.FillFirstName(validUser.Name);
      ln.FillLastName(validUser.Name);
      ln.FillPhoneNumber(validUser.PhoneNumber);
      ln.FillIdNumber(validUser.PhoneNumber);
      ln.FillIssuedBy(validUser.PhoneNumber);
      ln.FillIssueDate(validUser.IssuedDate);
      ln.selectGender(validUser.Gender);
      ln.FillExpirationDate(validUser.IssuedDate);
      ln.AddDOB(validUser.IssuedDate);
      ln.selectIDType(validUser.IdType);
      ln.selectIdLanguage(validUser.Language);
      ln.selectDocumentType(validUser.DocType);
      ln.selectDocumentLanguage(validUser.Language);
      ln.FillDocumentProvider(validUser.Name);
      ln.FillBillDate(validUser.IssuedDate);
      ln.AddAdressFront();
      ln.AssertAdressfront();
      ln.AssertContinueDisabled();
      
    });
  });

  it('Verify Address front is Mandatory.', () => {
    const ln = new Card();
    cy.fixture('Card.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickCard();
      ln.clickApplyNow();
      ln.FillFirstName(validUser.Name);
      ln.FillLastName(validUser.Name);
      ln.FillPhoneNumber(validUser.PhoneNumber);
      ln.FillIdNumber(validUser.PhoneNumber);
      ln.FillIssuedBy(validUser.PhoneNumber);
      ln.FillIssueDate(validUser.IssuedDate);
      ln.selectGender(validUser.Gender);
      ln.FillExpirationDate(validUser.IssuedDate);
      ln.AddDOB(validUser.IssuedDate);
      ln.selectIDType(validUser.IdType);
      ln.selectIdLanguage(validUser.Language);
      ln.selectDocumentType(validUser.DocType);
      ln.selectDocumentLanguage(validUser.Language);
      ln.FillDocumentProvider(validUser.Name);
      ln.FillBillDate(validUser.IssuedDate);
      ln.AddIdFront();
      ln.AssertContinueDisabled();
      
    });
  });

    it('Verify DocumentType is Mandatory.', () => {
    const ln = new Card();
    cy.fixture('Card.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickCard();
      ln.clickApplyNow();
      ln.FillFirstName(validUser.Name);
      ln.FillLastName(validUser.Name);
      ln.FillPhoneNumber(validUser.PhoneNumber);
      ln.FillIdNumber(validUser.PhoneNumber);
      ln.FillIssuedBy(validUser.PhoneNumber);
      ln.FillIssueDate(validUser.IssuedDate);
      ln.selectGender(validUser.Gender);
      ln.FillExpirationDate(validUser.IssuedDate);
      ln.AddDOB(validUser.IssuedDate);
      ln.selectIDType(validUser.IdType);
      ln.selectIdLanguage(validUser.Language);
   // ln.selectDocumentType(validUser.DocType);
      ln.selectDocumentLanguage(validUser.Language);
      ln.FillDocumentProvider(validUser.Name);
      ln.FillBillDate(validUser.IssuedDate);
      ln.AddIdFront();
      ln.AddAdressFront();
      ln.AssertContinueDisabled();
      
    });
  });

  it('Verify ID Type is Mandatory.', () => {
    const ln = new Card();
    cy.fixture('Card.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickCard();
      ln.clickApplyNow();
      ln.FillFirstName(validUser.Name);
      ln.FillLastName(validUser.Name);
      ln.FillPhoneNumber(validUser.PhoneNumber);
      ln.FillIdNumber(validUser.PhoneNumber);
      ln.FillIssuedBy(validUser.PhoneNumber);
      ln.FillIssueDate(validUser.IssuedDate);
      ln.selectGender(validUser.Gender);
      ln.FillExpirationDate(validUser.IssuedDate);
      ln.AddDOB(validUser.IssuedDate);
      // ln.selectIDType(validUser.IdType);
      ln.selectIdLanguage(validUser.Language);
      ln.selectDocumentType(validUser.DocType);
      ln.selectDocumentLanguage(validUser.Language);
      ln.FillDocumentProvider(validUser.Name);
      ln.FillBillDate(validUser.IssuedDate);
      ln.AddIdFront();
      ln.AddAdressFront();
      ln.AssertContinueDisabled();
      
    });
  });

  it('Verify ID Language is Mandatory.', () => {
    const ln = new Card();
    cy.fixture('Card.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickCard();
      ln.clickApplyNow();
      ln.FillFirstName(validUser.Name);
      ln.FillLastName(validUser.Name);
      ln.FillPhoneNumber(validUser.PhoneNumber);
      ln.FillIdNumber(validUser.PhoneNumber);
      ln.FillIssuedBy(validUser.PhoneNumber);
      ln.FillIssueDate(validUser.IssuedDate);
      ln.selectGender(validUser.Gender);
      ln.FillExpirationDate(validUser.IssuedDate);
      ln.AddDOB(validUser.IssuedDate);
      ln.selectIDType(validUser.IdType);
   // ln.selectIdLanguage(validUser.Language);
      ln.selectDocumentType(validUser.DocType);
      ln.selectDocumentLanguage(validUser.Language);
      ln.FillDocumentProvider(validUser.Name);
      ln.FillBillDate(validUser.IssuedDate);
      ln.AddIdFront();
      ln.AddAdressFront();
      ln.AssertContinueDisabled();
      
    });
  });

  it('Verify Document Language is Mandatory.', () => {
    const ln = new Card();
    cy.fixture('Card.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickCard();
      ln.clickApplyNow();
      ln.FillFirstName(validUser.Name);
      ln.FillLastName(validUser.Name);
      ln.FillPhoneNumber(validUser.PhoneNumber);
      ln.FillIdNumber(validUser.PhoneNumber);
      ln.FillIssuedBy(validUser.PhoneNumber);
      ln.FillIssueDate(validUser.IssuedDate);
      ln.selectGender(validUser.Gender);
      ln.FillExpirationDate(validUser.IssuedDate);
      ln.AddDOB(validUser.IssuedDate);
      ln.selectIDType(validUser.IdType);
      ln.selectIdLanguage(validUser.Language);
      ln.selectDocumentType(validUser.DocType);
   // ln.selectDocumentLanguage(validUser.Language);
      ln.FillDocumentProvider(validUser.Name);
      ln.FillBillDate(validUser.IssuedDate);
      ln.AddIdFront();
      ln.AddAdressFront();
      ln.AssertContinueDisabled();
      
    });
  });

  
  it('Verify Only one file can be uploaded validation', () => {
    const ln = new Card();
    cy.fixture('Card.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickCard();
      ln.clickApplyNow();
      ln.FillFirstName(validUser.Name);
      ln.FillLastName(validUser.Name);
      ln.FillPhoneNumber(validUser.PhoneNumber);
      ln.FillIdNumber(validUser.PhoneNumber);
      ln.FillIssuedBy(validUser.PhoneNumber);
      ln.FillIssueDate(validUser.IssuedDate);
      ln.selectGender(validUser.Gender);
      ln.FillExpirationDate(validUser.IssuedDate);
      ln.AddDOB(validUser.IssuedDate);
      ln.selectIDType(validUser.IdType);
      ln.selectIdLanguage(validUser.Language);
      ln.selectDocumentType(validUser.DocType);
   // ln.selectDocumentLanguage(validUser.Language);
      ln.FillDocumentProvider(validUser.Name);
      ln.FillBillDate(validUser.IssuedDate);
      ln.AddIdFront();
      ln.AddAdressFront();
      ln.AssertContinueDisabled();
      ln.AddIdFront();
      ln.AssertOneFileCanBeUploaded();
      
    });
  });

    it('Verify file can be re-uploaded ', () => {
    const ln = new Card();
    cy.fixture('Card.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickCard();
      ln.clickApplyNow();
      ln.FillFirstName(validUser.Name);
      ln.FillLastName(validUser.Name);
      ln.FillPhoneNumber(validUser.PhoneNumber);
      ln.FillIdNumber(validUser.PhoneNumber);
      ln.FillIssuedBy(validUser.PhoneNumber);
      ln.FillIssueDate(validUser.IssuedDate);
      ln.selectGender(validUser.Gender);
      ln.FillExpirationDate(validUser.IssuedDate);
      ln.AddDOB(validUser.IssuedDate);
      ln.selectIDType(validUser.IdType);
      ln.selectIdLanguage(validUser.Language);
      ln.selectDocumentType(validUser.DocType);
      ln.selectDocumentLanguage(validUser.Language);
      ln.FillDocumentProvider(validUser.Name);
      ln.FillBillDate(validUser.IssuedDate);
      ln.AddIdFront();
      ln.AddAdressFront();
      ln.DeleteAddressfront();
      ln.AddIdFront();
      ln.AddAdressFront();
      
    });
  });

    it('Verify after filling all mandatory feilds user can proceed.', () => {
    const ln = new Card();
    cy.fixture('Card.json').then((loginData) => {
      const { validUser } = loginData;
      ln.FillEmail(validUser.username);
      ln.FillPassword(validUser.password);
      ln.ClickSignIn();
      let id= "tegspcsa";
      ln.GetOTP(id,validUser.username);
      ln.AssertLogIn();
      ln.clickCard();
      ln.clickApplyNow();
      ln.FillFirstName(validUser.Name);
      ln.FillLastName(validUser.Name);
      ln.FillPhoneNumber(validUser.PhoneNumber);
      ln.FillIdNumber(validUser.PhoneNumber);
      ln.FillIssuedBy(validUser.PhoneNumber);
      ln.FillIssueDate(validUser.IssuedDate);
      ln.selectGender(validUser.Gender);
      ln.FillExpirationDate(validUser.IssuedDate);
      ln.AddDOB(validUser.IssuedDate);
      ln.selectIDType(validUser.IdType);
      ln.selectIdLanguage(validUser.Language);
      ln.selectDocumentType(validUser.DocType);
      ln.selectDocumentLanguage(validUser.Language);
      ln.FillDocumentProvider(validUser.Name);
      ln.FillBillDate(validUser.IssuedDate);
      ln.AddIdFront();
      ln.AddAdressFront();      
      // // Click the button
      // const urlsToBlock = [
      //   'https://app.launchdarkly.com/sdk/goals/62a7ae6fb6083614ff79e075',
      //   'https://app.launchdarkly.com/sdk/evalx/62a7ae6fb6083614ff79e075/contexts/*',
      //   'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=*',
      //   'https://api.stage.switchrewardcard.com/exchange/MSwipe/Balance*',
      //   'https://api.stage.switchrewardcard.com/exchange/Steps/*',
      //   'https://api.stage.switchrewardcard.com/exchange/fees/member/*',
      //   'https://api.ipify.org/?format=json',
      //   'https://api.stage.switchrewardcard.com/exchange/Profile/allContactInfoByMemberId*',
      //   'https://api.stage.switchrewardcard.com/exchange/Profile/address/*',
      //   'https://api.stage.switchrewardcard.com/exchange/SwitchAccounts/GetSwitchAccountsByMemberId*',
      //   'https://api.stage.switchrewardcard.com/exchange/GetRewardList/nodes*',
      //   'https://api.stage.switchrewardcard.com/exchange/VendorAccount/businesses/*',
      //   'https://api.stage.switchrewardcard.com/exchange/Kyb/ListApplications*',
      //   'https://api.stage.switchrewardcard.com/exchange/VendorWallet/GetAllVendorAccounts*',
      //   'https://api.stage.switchrewardcard.com/exchange/VendorAccount/*',
      //   'https://api.stage.switchrewardcard.com/exchange/Ibanera/Step*',
      //   'https://events.launchdarkly.com/events/bulk/*',
      //   'https://api.stage.switchrewardcard.com/wallet/v1.0/wallets/*'
      
      // ];
  
      // urlsToBlock.forEach((url) => {
      //   cy.intercept('GET', url, { statusCode: 200, body: {} }).as(`block${url}`);
      //   cy.intercept('POST', url, { statusCode: 200, body: {} }).as(`block${url}`);
      // });
  
      // // Click the button that submits the form
      // cy.get('.sc-d9886ec1-1.gMGGro').click();
  
      // // Assert that the correct page is opened
      // cy.url().should('include', '/card-management');
  
      // // Assert that the requests were blocked
      // urlsToBlock.forEach((url) => {
      //   cy.wait(`@block${url}`);
      // });
  
      
    });
  });
});
