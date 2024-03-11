import {custmerpro} from "./CustomerProfile.js";

export class cust{

CustomerProfilemodule_same(ProposerInsuredSame,IsNRI,TypeOfNRI,NRICountry,propNRIGSTwavier,IsPanAvailable,ProposerPanNumber) {
    // const dashboard = new Dashboard();
 
 const customerProfile = new custmerpro();
     
     cy.xpath("//div[text()='NEW APPLICATION']").click(); // Rep
     cy.xpath("//input[@id='leadId']").click().type("1234567890oiuyt"); // Rep
   


     if (ProposerInsuredSame.toUpperCase() === "YES") {
       customerProfile.ClickOnIsproposerInsuredSameYESButton("YES");
     }
     //cy.pause();
     customerProfile.cpnextbutton(); // customer profile Next Button(QA)
     //dashboard.checkLoaderWeb();
 
     if (IsNRI.toUpperCase() === "YES") {
       customerProfile.ClickOnYesBtnWeb();
       cy.wait(1000); // Assuming wait time is needed here
       customerProfile.selectTypeOfNRIWeb(TypeOfNRI);
       cy.wait(2000); // Assuming wait time is needed here
    
       customerProfile.SelectNRICountryWeb(NRICountry);
       cy.wait(2000); // Assuming wait time is needed here
    
       customerProfile.IspropNRIgstwavier(propNRIGSTwavier);
     }
 
     if (IsPanAvailable.toUpperCase() === "YES") {
      
       customerProfile.enterpanNumberQAWeb(ProposerPanNumber);
       cy.wait(2000); // Assuming wait time is needed here
       customerProfile.clickOnProposerIAgreeCheckboxWeb();
       cy.wait(2000); // Assuming wait time is needed here
       customerProfile.cpnextbutton(); // customer profile Next Button(QA)
      // dashboard.checkLoaderWeb();
       cy.wait(2000); // Assuming wait time is needed here
     
       cy.scrollTo('top');
       cy.wait(2000); 
       cy.scrollTo('bottom');
       customerProfile.ClickOnConfirmButton();


       cy.xpath("//span[contains(text(),'Health & Pure Term Plans')]").click();
       cy.log("click on Health & pure term  button" );

       cy.xpath("//div[contains(text(),'ABSLI Digishield Plan')]").click();
       cy.log("click product button" );
       //cy.wait(2000); 
       cy.scrollTo('bottom');
       cy.wait(3000); 
       // Wait for an element to become visible within a timeout period
       cy.get('.MuiButton-text > .MuiButton-label').should('be.visible', { timeout: 10000 }); // 10 seconds timeout

       cy.get('.MuiButton-text > .MuiButton-label').click();
       cy.log("click next button" );
       //cy.wait(2000); 
       cy.scrollTo('bottom');
       cy.wait(3000); 
       cy.get('.MuiButtonBase-root').click();
       cy.log("click next button" );


       // Assuming MobileEle is a Cypress command and you want to clear its content

//      for (let i = 0; i < 20; i++) {
       cy.xpath("//input[@id='mobileNumber']").type('{selectall}{del}');

    // }
       cy.wait(3000); 
       cy.xpath("//input[@id='mobileNumber']").type("9960066619");

       cy.wait(3000); 
 // for (let i = 0; i < 20; i++) {
       cy.xpath("//input[@id='emailId']").type('{selectall}{del}');

    // }
       cy.xpath("//input[@id='emailId']").type("pavan.raut1@adityabirlacapital.com");
       cy.log("click next button" );

      cy.wait(2000); 

     

      cy.wait(3000); 
cy.scrollTo('bottom');
       cy.xpath("//button[contains(@name,'Submit')]").click();
       cy.log("click next button" );

       cy.xpath("//span[text()='DO IT LATER']").click();//customer photo
       cy.log("click next button" );

       cy.xpath("//input[@id='ifscCode']").type("KKBK0000631");
       cy.log("click next button" );


       cy.xpath("//input[@id='accountNo']").type("5613058615");
       cy.log("click next button" );
       cy.scrollTo('bottom');
       cy.wait(1000);
      // cy.pause();
       cy.xpath("//button[@name='Verify']").click();
       cy.wait(7000);
       cy.xpath("(//button[@name='PROCEED'])[1]").click();
//cy.scrollTo('bottom');
//cy.get('.MuiButton-outlined > .MuiButton-label').click();//back do it bank

      cy.xpath("//button[@value='Direct Bill']").click();
       //cy.wait(2000); 
       cy.scrollTo('bottom');
       cy.wait(2000); 

       cy.xpath("//button[@name='NEXT']").click();//banck summary
       cy.wait(2000); 
       cy.scrollTo('bottom');

       //cy.xpath("//body[1]/div[1]/div[2]/div[5]/div[2]/div[2]/div[1]/div[6]/form[1]/div[11]/button[1]/span[1]").click;
       //cy.get('.MuiButton-outlined > .MuiButton-label').click();
       //cy.wait(2000); 

//per

       cy.get(':nth-child(6) > form > :nth-child(8) > .box-elevation > #parent > .MuiFormControl-root > .MuiInputBase-root > #mui-component-select-23').click();
       cy.xpath("//ul//li//span[text()='Graduate']").click();       
       
       cy.get(':nth-child(6) > form > :nth-child(9) > .box-elevation > #parent > .MuiFormControl-root > .MuiInputBase-root > #mui-component-select-24').click();
       
       cy.xpath("//ul//li//span[text()='Service']").click();       
       
       cy.xpath("//input[@id='26']").type("ghads");
       cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type("test");
       
       
       cy.get('#mui-component-select-29').click(); //dr
      cy.xpath("//ul//li//span[text()='NGO'] ")    .click();   
       cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type("vijay");
       
       //dis
       
       cy.get(':nth-child(6) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type("800000") //anual 
       cy.wait(2000); 
       cy.scrollTo('bottom');
       cy.xpath("//span[normalize-space()='Save & Continue']").click();///personal sane button


      //  cy.scrollTo('bottom');
      //  cy.get(':nth-child(6) > form > .btn-save-do > .MuiButton-outlined').click();//
      //  cy.wait(2000); 
       cy.scrollTo('bottom');
       //button[@name='NEXT']
       cy.get('.MuiButton-contained').click();//personal
       //cy.xpath("//span[normalize-space()='DO IT LATER']").click;//personal
       cy.scrollTo('bottom');
      cy.get('body > div:nth-child(3) > div:nth-child(2) > div:nth-child(6) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(14) > div:nth-child(1) > label:nth-child(1) > span:nth-child(1) > span:nth-child(1) > input:nth-child(1)').click();//personal essting 
      
      cy.xpath("//button[contains(@name,'Next')]").click();//personal info
      // cy.get('.MuiButton-outlined').click();//exsti
       cy.wait(2000); 
       cy.scrollTo('bottom');
       cy.xpath("//span[normalize-space()='CONFIRM']").click();//adress
       cy.wait(10000);
       cy.xpath("//input[@id='firstName']").type("hjdjh");
       cy.xpath("//input[@id='lastName']").type("hjdjh");
       cy.xpath("//input[@id='dd']").type("15");
       cy.xpath("//input[@id='mm']").type("07");
       cy.xpath("//input[@id='yy']").type("1995");
       cy.xpath("//div[@class='MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-filled MuiInputBase-input MuiFilledInput-input']").click();
       cy.xpath("//div//ul/li[@data-value='Father']").click();
       cy.xpath("//input[@id='percentageShare']").type("100");
       cy.scrollTo('bottom');
       cy.wait(1000);
       cy.xpath("//button[@name='NEXT']").click();//nominee
       cy.wait(5000);
       //cy.get('.MuiButton-outlined > .MuiButton-label').click();//

//health
       cy.get('.counter-feet > [style="display: flex; align-items: center;"] > .counter-header-value').click();
      cy.get('#height-inches').click();
       cy.wait(2000);
cy.get('.MuiInputBase-input').type("40");
cy.get('.align-center > .MuiButtonBase-root').click();
cy.wait(2000);
//cy.wait(2000); 
       cy.scrollTo('bottom');
       //cy.pause();
cy.get('.align-center > .MuiButtonBase-root').click();
cy.wait(2000);
cy.xpath("//input[@name='59']").click();
cy.wait(2000);
cy.xpath("//input[@name='59']").type("60");
cy.wait(2000); 
cy.get('#mui-component-select-60').click();
cy.wait(1000); // Assuming wait time is needed here
cy.xpath("//ul//div/span[text()='OK/Good']").click();

cy.wait(2000); 
cy.xpath("//input[@name='62']").click();
cy.wait(2000);
cy.xpath("//input[@name='62']").type("50");
cy.wait(1000); // Assuming wait time is needed here
cy.get('#mui-component-select-63').click();
cy.xpath("//ul//div/span[text()='OK/Good']").click();
//cy.wait(2000);  
 cy.scrollTo('bottom');
cy.wait(2000); 
cy.xpath("//button[@name='SAVE & CONTINUE']").click();
  cy.wait(2000); 
       //cy.scrollTo('bottom');
cy.xpath("//button[@name='Save & Continue']").click();
cy.wait(2000); 
cy.get('#noToAll').click();
cy.wait(2000); 
       cy.scrollTo('bottom');
cy.get('.align-center > .MuiButtonBase-root').click();

 //cy.pause();
 cy.scrollTo('bottom');
 cy.xpath("//span[contains(text(),'No')]").click();
 cy.wait(2000); 

 cy.xpath("//input[contains(@name,'userAgreementStatus')]").click();
 cy.wait(2000); 
 cy.xpath("//button[@name='SEND TO CUSTOMER FOR REVIEW']").click();
 cy.wait(20000); 
 cy.xpath("//input[@id='inputotp']").type("111111");
 cy.wait(20000); 
 cy.xpath("//button[@name='PROCEED']").click();
 cy.wait(2000); 
 cy.wait(2000); 
 cy.wait(2000); 
 cy.xpath("//div[@id='2']//div[@class='MuiAccordionSummary-content']").click();
 cy.wait(2000); 
 cy.wait(2000); 
 cy.get('.MuiBox-root > .MuiButtonBase-root > .MuiButton-label').click();
 cy.wait(8000); 
 cy.xpath("//button[@name='NEXT']").click();
 cy.wait(7000);
 
 cy.xpath("//button[@name='NEXT']").click();
 cy.wait(5000);
 cy.scrollTo('bottom');
 cy.xpath("//button[@name='DO IT LATER']").click();
 cy.wait(2000);
 cy.scrollTo('bottom');
 cy.xpath("//span[normalize-space()='DO IT LATER']").click();
 cy.wait(2000);
 cy.scrollTo('bottom');
// try {
//   const imgpath = 'vijay.pdf';
// cy.xpath("//input[@type='file']").attachFile(imgpath);
// } catch (error) {
//   // Block of code to handle errors
//   // This code executes if an error occurs in the try block
//   // The 'error' variable contains information about the error
// }

// cy.fixture('vijay.pdf').then(fileContent => {
//   cy.get('.right-end > .MuiButtonBase-root').attachFile('vijay.pdf').attachFile({
//      fileContent: fileContent,
//      fileName: 'vijay.pdf',
   
//    });
//  });


            // try {
            // cy.scrollTo('top');
            // cy.wait(2000)
          //     customerProfile.IsElementPresent();
          //    // TestUtil.scrollTillEndOfPage();
          //     cy.wait(2000); // Assuming wait time is needed here
          //     if (PanNameEdit.toUpperCase() === "YES") {
          //       customerProfile.ClickOnEditButton();
          //       customerProfile.ClickOnEditAlerPopUp();
          //       dashboard.checkLoaderWeb();
          //       cy.wait(2000); // Assuming wait time is needed here
          //       customerProfile.ClearEditPanNameWeb();
          //       TestUtil.scrollTillEndOfPage();
          //       cy.wait(2000); // Assuming wait time is needed here
          //       customerProfile.cdnextbutton();
          //       dashboard.checkLoaderWeb();
          //       TestUtil.scrollTillEndOfPage();
          //       cy.wait(2000); // Assuming wait time is needed here
          //     } else if (testData["PanDOBEdit"].toUpperCase() === "YES") {
          //       customerProfile.ClickOnEditButton();
          //       cy.wait(2000); // Assuming wait time is needed here
          //       customerProfile.ClickOnEditAlerPopUp();
          //       dashboard.checkLoaderWeb();
          //       cy.wait(2000); // Assuming wait time is needed here
          //       customerProfile.ClearEditProposerDOBWeb("10101985");
          //       TestUtil.scrollTillEndOfPage();
          //       cy.wait(2000); // Assuming wait time is needed here
          //       customerProfile.cdnextbutton();
          //       dashboard.checkLoaderWeb();
          //       TestUtil.scrollTillEndOfPage();
          //       cy.wait(2000); // Assuming wait time is needed here
          //       customerProfile.ClickOnConfirmButton();
          //       dashboard.checkLoaderWeb();
          //       TestUtil.scrollTillEndOfPage();
          //       cy.wait(2000); // Assuming wait time is needed here
          //       customerProfile.ClickOnConfirmButton();
          //       dashboard.checkLoaderWeb();
          //       cy.wait(2000); // Assuming wait time is needed here
          //     } else {
          //       customerProfile.ClickOnConfirmButton();
          //       dashboard.checkLoaderWeb();
          //       customerProfile.ClickOnConfirmButton();
          //       dashboard.checkLoaderWeb();
          //     }
          //   } catch (error) {
          //     if (testData["IsAadhaarCard"].toUpperCase() === "YES") {
          //       customerProfile.ClickOnAadharCardButton();
          //       customerProfile.EnterProposerAadharCardNoWeb(testData["AadharCardNo"]);
          //       customerProfile.cdnextbutton();
          //       dashboard.checkLoaderWeb();
          //     } else if (testData["IsEnterManual"].toUpperCase() === "YES") {
          //       customerProfile.ClickOnEnterManualButton();
          //       dashboard.checkLoaderWeb();
          //       customerProfile.enterProposerDOBWeb(testData["ProposerDOB"]);
          //       dashboard.checkLoaderWeb();
          //       customerProfile.cdnextbutton();
          //       dashboard.checkLoaderWeb();
          //       TestUtil.scrollTillEndOfPage();
          //       customerProfile.cdnextbutton();
          //       dashboard.checkLoaderWeb();
          //     }
          //   }
          // } else {
          //   customerProfile.ClickOnProposerCheckBox();
          //   if (testData["IsNRI"].toUpperCase() === "NO") {
          //     customerProfile.ClickOnAlerPopUp();
          //   }
          //   customerProfile.clickOnProposerIAgreeCheckboxWeb();
          //   customerProfile.cpnextbutton();
          //   dashboard.checkLoaderWeb();
      
          //   if (testData["IsAadhaarCard"].toUpperCase() === "YES") {
          //     customerProfile.ClickOnAadharCardButton();
          //     customerProfile.EnterProposerAadharCardNoWeb(testData["AadharCardNo"]);
          //     dashboard.checkLoaderWeb();
          //     TestUtil.scrollTillEndOfPage();
          //     customerProfile.cdnextbutton();
          //     dashboard.checkLoaderWeb();
      
          //     if (testData["PanNameEdit"].toUpperCase() === "YES") {
          //       customerProfile.ClickOnEditButton();
          //       customerProfile.ClickOnEditAlerPopUp();
          //       dashboard.checkLoaderWeb();
          //       customerProfile.ClearEditPanNameWeb();
          //       TestUtil.scrollTillEndOfPage();
          //       cy.wait(2000); // Assuming wait time is needed here
          //       customerProfile.cdnextbutton();
          //       dashboard.checkLoaderWeb();
          //     } else if (testData["PanDOBEdit"].toUpperCase() === "YES") {
          //       customerProfile.ClickOnEditButton();
          //       customerProfile.ClickOnEditAlerPopUp();
          //       dashboard.checkLoaderWeb();
          //       customerProfile.ClearEditProposerDOBWeb("10101985");
          //       TestUtil.scrollTillEndOfPage();
          //       customerProfile.cdnextbutton();
          //       dashboard.checkLoaderWeb();
          //     } else {
          //       customerProfile.ClickOnConfirmButton();
          //       dashboard.checkLoaderWeb();
          //     }
          //   } else if (testData["IsEnterManual"].toUpperCase() === "YES") {
          //     customerProfile.ClickOnEnterManualButton();
          //     dashboard.checkLoaderWeb();
          //     customerProfile.enterProposerDOBWeb(testData["ProposerDOB"]);
          //     dashboard.checkLoaderWeb();
          //     customerProfile.EnterFirstNameInsuredweb(testData["ProposerName"]);
          //     customerProfile.EnterMiddleNameInsuredweb(testData["ProposerMiddleName"]);
          //     customerProfile.EnterLastNameInsuredweb(testData["ProposerLastName"]);
          //     customerProfile.clickOnGenderBtnWeb(testData["ProposerGender"]);
          //     customerProfile.ChangeSalutionTitleInsuredWeb(testData["ProposerSalutation"]);
          //     customerProfile.cdnextbutton();
          //     dashboard.checkLoaderWeb();
          //     TestUtil.scrollTillEndOfPage();
          //     customerProfile.ClickOnConfirmButton();
          //     dashboard.checkLoaderWeb();
          //   }
          // }
        }
      }
    }

    