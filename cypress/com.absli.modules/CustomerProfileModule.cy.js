// // customerProfileModule.js

// //import Dashboard from './Dashboard'; // Import Dashboard class
// import {DeshmukhVijay} from '../e2e/CustomerProfile.js'; // Import CustomerProfile class
// //import CommonUtils from './utils/CommonUtils'; // Import CommonUtils class
// //import TestUtil from './utils/TestUtil'; // Import TestUtil class
// export class CustomerProfileModule {

//    CustomerProfilemodule_same(ProposerInsuredSame,IsNRI,TypeOfNRI,NRICountry,propNRIGSTwavier,IsPanAvailable,ProposerPanNumber) {
//    // const dashboard = new Dashboard();
//     const customerProfile = new CustomerProfile();
//     // const commonUtils = new CommonUtils();

//     // dashboard.checkLoaderWeb();

//     // dashboard.checkLoaderWeb();
//     // TestUtil.scrollTillEndOfPage();

//     if (ProposerInsuredSame.toUpperCase() === "YES") {
//       customerProfile.ClickOnIsproposerInsuredSameYESButton();
//     }
    
//     customerProfile.cpnextbutton(); // customer profile Next Button(QA)
//     //dashboard.checkLoaderWeb();

//     if (IsNRI.toUpperCase() === "YES") {
//       customerProfile.ClickOnYesBtnWeb();
//       cy.wait(2000); // Assuming wait time is needed here
//       customerProfile.selectTypeOfNRIWeb(TypeOfNRI);
//       cy.wait(2000); // Assuming wait time is needed here
//       customerProfile.SelectNRICountryWeb(NRICountry);
//       cy.wait(2000); // Assuming wait time is needed here
//       customerProfile.IspropNRIgstwavier(propNRIGSTwavier);
//     }

//     if (IsPanAvailable.toUpperCase() === "YES") {
//       customerProfile.enterpanNumberQAWeb(ProposerPanNumber);
//       cy.wait(2000); // Assuming wait time is needed here
//       customerProfile.clickOnProposerIAgreeCheckboxWeb();
//       cy.wait(2000); // Assuming wait time is needed here
//       customerProfile.cpnextbutton(); // customer profile Next Button(QA)
//      // dashboard.checkLoaderWeb();
//       cy.wait(2000); // Assuming wait time is needed here

//     //   try {
//     //     customerProfile.IsElementPresent();
//     //     TestUtil.scrollTillEndOfPage();
//     //     cy.wait(2000); // Assuming wait time is needed here
//     //     if (testData["PanNameEdit"].toUpperCase() === "YES") {
//     //       customerProfile.ClickOnEditButton();
//     //       customerProfile.ClickOnEditAlerPopUp();
//     //       dashboard.checkLoaderWeb();
//     //       cy.wait(2000); // Assuming wait time is needed here
//     //       customerProfile.ClearEditPanNameWeb();
//     //       TestUtil.scrollTillEndOfPage();
//     //       cy.wait(2000); // Assuming wait time is needed here
//     //       customerProfile.cdnextbutton();
//     //       dashboard.checkLoaderWeb();
//     //       TestUtil.scrollTillEndOfPage();
//     //       cy.wait(2000); // Assuming wait time is needed here
//     //     } else if (testData["PanDOBEdit"].toUpperCase() === "YES") {
//     //       customerProfile.ClickOnEditButton();
//     //       cy.wait(2000); // Assuming wait time is needed here
//     //       customerProfile.ClickOnEditAlerPopUp();
//     //       dashboard.checkLoaderWeb();
//     //       cy.wait(2000); // Assuming wait time is needed here
//     //       customerProfile.ClearEditProposerDOBWeb("10101985");
//     //       TestUtil.scrollTillEndOfPage();
//     //       cy.wait(2000); // Assuming wait time is needed here
//     //       customerProfile.cdnextbutton();
//     //       dashboard.checkLoaderWeb();
//     //       TestUtil.scrollTillEndOfPage();
//     //       cy.wait(2000); // Assuming wait time is needed here
//     //       customerProfile.ClickOnConfirmButton();
//     //       dashboard.checkLoaderWeb();
//     //       TestUtil.scrollTillEndOfPage();
//     //       cy.wait(2000); // Assuming wait time is needed here
//     //       customerProfile.ClickOnConfirmButton();
//     //       dashboard.checkLoaderWeb();
//     //       cy.wait(2000); // Assuming wait time is needed here
//     //     } else {
//     //       customerProfile.ClickOnConfirmButton();
//     //       dashboard.checkLoaderWeb();
//     //       customerProfile.ClickOnConfirmButton();
//     //       dashboard.checkLoaderWeb();
//     //     }
//     //   } catch (error) {
//     //     if (testData["IsAadhaarCard"].toUpperCase() === "YES") {
//     //       customerProfile.ClickOnAadharCardButton();
//     //       customerProfile.EnterProposerAadharCardNoWeb(testData["AadharCardNo"]);
//     //       customerProfile.cdnextbutton();
//     //       dashboard.checkLoaderWeb();
//     //     } else if (testData["IsEnterManual"].toUpperCase() === "YES") {
//     //       customerProfile.ClickOnEnterManualButton();
//     //       dashboard.checkLoaderWeb();
//     //       customerProfile.enterProposerDOBWeb(testData["ProposerDOB"]);
//     //       dashboard.checkLoaderWeb();
//     //       customerProfile.cdnextbutton();
//     //       dashboard.checkLoaderWeb();
//     //       TestUtil.scrollTillEndOfPage();
//     //       customerProfile.cdnextbutton();
//     //       dashboard.checkLoaderWeb();
//     //     }
//     //   }
//     // } else {
//     //   customerProfile.ClickOnProposerCheckBox();
//     //   if (testData["IsNRI"].toUpperCase() === "NO") {
//     //     customerProfile.ClickOnAlerPopUp();
//     //   }
//     //   customerProfile.clickOnProposerIAgreeCheckboxWeb();
//     //   customerProfile.cpnextbutton();
//     //   dashboard.checkLoaderWeb();

//     //   if (testData["IsAadhaarCard"].toUpperCase() === "YES") {
//     //     customerProfile.ClickOnAadharCardButton();
//     //     customerProfile.EnterProposerAadharCardNoWeb(testData["AadharCardNo"]);
//     //     dashboard.checkLoaderWeb();
//     //     TestUtil.scrollTillEndOfPage();
//     //     customerProfile.cdnextbutton();
//     //     dashboard.checkLoaderWeb();

//     //     if (testData["PanNameEdit"].toUpperCase() === "YES") {
//     //       customerProfile.ClickOnEditButton();
//     //       customerProfile.ClickOnEditAlerPopUp();
//     //       dashboard.checkLoaderWeb();
//     //       customerProfile.ClearEditPanNameWeb();
//     //       TestUtil.scrollTillEndOfPage();
//     //       cy.wait(2000); // Assuming wait time is needed here
//     //       customerProfile.cdnextbutton();
//     //       dashboard.checkLoaderWeb();
//     //     } else if (testData["PanDOBEdit"].toUpperCase() === "YES") {
//     //       customerProfile.ClickOnEditButton();
//     //       customerProfile.ClickOnEditAlerPopUp();
//     //       dashboard.checkLoaderWeb();
//     //       customerProfile.ClearEditProposerDOBWeb("10101985");
//     //       TestUtil.scrollTillEndOfPage();
//     //       customerProfile.cdnextbutton();
//     //       dashboard.checkLoaderWeb();
//     //     } else {
//     //       customerProfile.ClickOnConfirmButton();
//     //       dashboard.checkLoaderWeb();
//     //     }
//     //   } else if (testData["IsEnterManual"].toUpperCase() === "YES") {
//     //     customerProfile.ClickOnEnterManualButton();
//     //     dashboard.checkLoaderWeb();
//     //     customerProfile.enterProposerDOBWeb(testData["ProposerDOB"]);
//     //     dashboard.checkLoaderWeb();
//     //     customerProfile.EnterFirstNameInsuredweb(testData["ProposerName"]);
//     //     customerProfile.EnterMiddleNameInsuredweb(testData["ProposerMiddleName"]);
//     //     customerProfile.EnterLastNameInsuredweb(testData["ProposerLastName"]);
//     //     customerProfile.clickOnGenderBtnWeb(testData["ProposerGender"]);
//     //     customerProfile.ChangeSalutionTitleInsuredWeb(testData["ProposerSalutation"]);
//     //     customerProfile.cdnextbutton();
//     //     dashboard.checkLoaderWeb();
//     //     TestUtil.scrollTillEndOfPage();
//     //     customerProfile.ClickOnConfirmButton();
//     //     dashboard.checkLoaderWeb();
//       //}
//     }
//   }
// }

// //export default CustomerProfileModule;
