// class CustomerProfile {
//     constructor() {
//         this.cpnext = "xpath=//span[text()='Next']";
//         this.propbox = "xpath=(//input[@type='checkbox'])[2]";
//         this.cdnext = "xpath=//span[text()='NEXT']";
//         this.prpttl = "xpath=//div[@id='salutation']";
//         this.relinsured = "xpath=//div[contains(@aria-haspopup,'listbox')]";
//         this.insufirstname = "xpath=(//input[contains(@id,'firstName')])[1]";
//         this.insulastname = "xpath=(//input[contains(@id,'lastName')])[1]";
//         this.insutitle = "xpath=(//div[@id='salutation'])[1]";
//         this.proppop = "xpath=(//button[@name='PROCEED'])[1]";
//         this.insupop = "xpath=(//button[@name='PROCEED'])[1]";
//         this.insudob = "xpath=//input[@name='dob']";
//         this.cpol = "xpath=//div[@class='MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-filled MuiInputBase-input MuiFilledInput-input']";
//         this.cpan = "xpath=//input[@name='panNumber']";
//         this.compbox = "xpath=(//input[@type='checkbox'])[1]";
//         this.cname = "xpath=//input[@id='companyName']";
//         this.cdoi = "xpath=//input[@name='dob']";
//         this.typeOfNRI = "xpath=//div[@class='MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-filled MuiInputBase-input MuiFilledInput-input']";
//         this.nriCountry = "xpath=//input[@id='nriCountry']";
//         this.propmiddlename = "xpath=//input[@name='middleName']";
//         this.advstate = "xpath=//input[@id='advisorState']";
//         this.yesBNT = "xpath=(//input[@name='isHDFCAssistedJourneyQst'])[1]";
//         this.noBNT = "xpath=(//input[@name='isHDFCAssistedJourneyQst'])[2]";
//         this.PropoerInsuredsameYes = "xpath=(//input[@name='isProposerInsuredSameQst'])[1]";
//         this.PropoerInsuredsameNo = "xpath=(//input[@name='isProposerInsuredSameQst'])[2]";
//         this.PropoerRelnWithBankYes = "xpath=(//input[@name='isProposerRelationshipWithBankMoreThan7MonthsQst'])[1]";
//         this.PropoerRelnWithBankNo = "xpath=(//input[@name='isProposerRelationshipWithBankMoreThan7MonthsQst'])[1]";
//         this.RelationEle1 = "xpath=//div[contains(@aria-haspopup,'listbox')]";
//         this.PanNum = "xpath=//input[@name='panNumber']";
//         this.termAndCondition1 = "xpath=(//input[@type='checkbox'])";
//         this.termAndCondition = "xpath=(//input[@type='checkbox'])[2]";
//         this.DOBEle = "xpath=//input[contains(@inputmode,'numeric')]";
//         this.salution = "xpath=(//div[@id='salutation'])[1]";
//         this.firstName = "xpath=//input[@id='firstname']";
//         this.MiddenName = "xpath=//input[@id='middlename']";
//         this.LastName = "xpath=//input[@id='lastname']";
//         this.ChechboxEle = "xpath=(//input[@type='checkbox'])[1]";
//         this.yesbtn = "xpath=//span[text()='YES']";
//         this.NRIDrpdown = "xpath=//div[@aria-haspopup='listbox']";
//         this.ele1 = "xpath=//input[contains(@id,'nriCountry')]";
//         this.panNumberWeb = "xpath=//input[@name='panNumber']";
//         this.MIDDENNAME = "xpath=(//input[contains(@id,'middleName')])[1]";
//         this.EMPCODE = "xpath=(//input[contains(@id,'hdfcBankEmpCode')])[1]";
//         this.NRIGSTwavierYES = "xpath=(//input[contains(@name,'gstWaiver')])[1]";
//         this.NRIGSTwavierNO = "xpath=(//input[contains(@name,'gstWaiver')])[2]";
//         this.spCODE = "xpath=(//input[contains(@id,'DBSSpCode')])[1]";
//         this.Ele = "xpath=//div[contains(text(),'Review and Confirm Details')]";
//         this.EditBtn = "xpath=//button[@name='EDIT']";
//         this.AlertPopUpEle = "xpath=(//button[contains(@name,'OK')])[1]";
//         this.ClearEditEle = "xpath=//input[@id='firstName']";
//         this.ConfirmBtn = "xpath=//span[contains(text(),'CONFIRM')]";
//         this.EnterManullyTab = "xpath=//span[contains(text(),'Enter Manually')]";
//         this.EnterEkycTab = "xpath=//span[contains(text(),'Aadhaar Card')]";
//         this.DOBEle1 = "xpath=//input[contains(@inputmode,'numeric')]";
//         this.aadharcardEle = "xpath=//input[@id='aadharCard']";
//         this.InsuredDOBEle = "xpath=//input[@inputmode='numeric']";
//         this.bankCustID = "xpath=//input[@name='bankCustomerId']";
//         this.continuee = "xpath=//span[text()='Continue']";
//         this.leadisbom = "xpath=//input[@name='caRefA']";
//         this.CARefB = "xpath=//label[contains(text(),'CA Ref B')]//parent::div//child::input";
//         this.SPcodeCA = "xpath=//label[contains(text(),'SP Code of CA ')]//parent::div//child::input";
//         this.CABranch = "xpath=//label[contains(text(),'CA Branch Code ')]//parent::div//child::input";
//         this.USMcode = "xpath=//input[contains(@name,'supervisorCode')]//parent::div//child::input";
//         this.leadIdInputWeb = "xpath=//input[@id='leadId']";
//         this.AssignTo = "xpath=(//input[contains(@aria-autocomplete,'list')])";
//         this.AdviserState = "xpath=(//input[contains(@aria-autocomplete,'list')])[2]";
//         this.StateForAdviser = "xpath=(//input[contains(@aria-autocomplete,'list')])";
//         this.CAREFA = "xpath=//label[contains(text(),'CA Ref A')]//parent::div//child::input";
//         this.USMSSMASM = "xpath=//label[contains(text(),'USM / SSM / ASM / ZSM Code ')]//parent::div//child::input";
//         this.TeleCallerCode = "xpath=//label[contains(text(),'Tele Caller Code')]//parent::div//child::input";
//        // this.VerifierCode =

export class custmerpro {

     selectAdviserStateForAdviser(value) {
        cy.xpath("//input[contains(@aria-autocomplete,'list')]")
            .should('be.visible')
            .select(value)
        //    .click()
        //    .clear()
        //     .type(value)
        //     .select(value)
        //             .type('{arrowdown}')
        //             .click()
        //             .type('{enter}');
            //.then(($element) => {
            //     // for (let i = 0; i < 10; i++) {
            //     //     cy.wrap($element)
            //     //         .type('{backspace} {del}')
            //     //         .clear();
            //     // }
            //     // cy.wrap($element)
            //     //     .click()
            //     //     .type('m')
            //     //     .clear()
            //         .type(value)
            //         .type('{arrowdown}')
            //         .click()
            //         .type('{enter}');
            // });
    }
    
//      selectAdviserStateForAdviser(val) {
//         cy.xpath("//input[contains(@aria-autocomplete,'list')]").type(val)
//            // .should('be.visible')
//             .click()
// //             .then(() => {
               
// // //cy.get('@stateForAdviser')
// //                     .click()
// //                     .type('m', { delay: 100 }) // Delay added to mimic human typing speed
// //                     .clear()
// //                     .type(val, { delay: 100 }) // Delay added to mimic human typing speed
// //                     .type('{arrowdown}')
// //                     .click()
// //                     .type('{enter}');
// //             });
//     }

ClickOnYesBtnWeb() {
    cy.get("input[value='YES']").click();
    cy.log("Click On NRI Yes Button" );
}
selectTypeOfNRIWeb(TypeOfNRI) {
    cy.xpath(" //div[@aria-haspopup='listbox']").click();
   
    cy.xpath("//span[text()='"+TypeOfNRI+"']").click();
    cy.wait(1000); 
    cy.log("Select NRI Option  As=====>"+TypeOfNRI );
}

SelectNRICountryWeb(Val) {
  //  cy.xpath("//input[contains(@id,'nriCountry')]").click().type(Val).type('{arrowdown}');
                    //  .type('{arrowdown}')
                    cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click().type(Val)
                    cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root') .type('{downarrow}').type('{enter}');
                  //  cy.get("cy.get('#nriCountry')").click().type(Val).type('{arrowdown}');
        cy.wait(2000); 
    cy.log("Enter NRI Country Values As=====>"+Val);
}

   
IspropNRIgstwavier() {
    cy.xpath("(//input[contains(@name,'gstWaiver')])[1]").click();
    cy.log("Do you want GST Waiver ? YES " );
}
  

enterpanNumberQAWeb(Val) {
    cy.xpath("//input[@name='panNumber']").clear().type(Val);
    cy.log("Enter Verifier Code Value As =====>" + Val);
}
clickOnProposerIAgreeCheckboxWeb() {
    cy.xpath("(//input[@type='checkbox'])[2]").click();
    cy.log("click next button" );
}




ClickOnConfirmButton() {
    cy.xpath("//span[contains(text(),'CONFIRM')]").click();
    cy.log("click confirm button" );
}




cpnextbutton() {
    cy.get('.MuiButton-label').click();
    cy.log("click next button" );
}

ClickOnIsproposerInsuredSameYESButton() {
    cy.xpath("(//input[@name='isProposerInsuredSameQst'])[1]").click();
    cy.log("isProposerInsuredSameQst=====>" );
}
    enterVerifierCodeWeb(Val) {
        cy.xpath("//label[contains(text(),'Verifier Code')]/parent::div/child::input").clear().type(Val);
        cy.log("Enter Verifier Code Value As =====>" + Val);
    }

    enterTeleCallerCodeWeb(Val) {
        cy.xpath("//label[contains(text(),'Tele Caller Code')]/parent::div/child::input").clear().type(Val);
        cy.log("Enter Tele Caller Code Value As =====>" + Val);
    }

    enterAuthorizeCodeWeb(Val) {
        cy.xpath("//label[contains(text(),'USM / SSM / ASM / ZSM Code ')]/parent::div/child::input").clear().type(Val);
        cy.log("Enter USM / SSM / ASM / ZSM Code Value As =====>" + Val);
    }

    enterCARefAWeb(Val) {
        cy.xpath("//label[contains(text(),'CA Ref A')]/parent::div/child::input").clear().type(Val);
        cy.log("Enter CA Ref A Value As =====>" + Val);
    }

    selectAdviserStateForAdviser(val) {
        cy.xpath("//input[contains(@aria-autocomplete,'list')]").click();
        cy.xpath("//input[contains(@aria-autocomplete,'list')]")
            .should('be.visible')
            .type('{backspace} {space} {del}')
            .type('m')
            .clear()
            .type(val)
            .type('{arrowdown}')
            .click();
    }

    selectAdviserState(val) {
        cy.xpath("(//input[contains(@aria-autocomplete,'list')])[2]")
            .click()
            .type(val)
            .type('{arrowdown}')
            .type('{enter}');
    }

    selectAssignTo(val) {
        cy.xpath("//input[contains(@aria-autocomplete,'list')]")
            .click()
            .type(val)
            .type('{arrowdown}')
            .type('{enter}');
    }

    enterLeadIDWeb(args) {
        cy.xpath("//input[@id='leadId']").clear().type(args);
        cy.log("Enter Lead Value As =====>" + args);
    }

    clickOnCustomerProfileContinueButton() {
        cy.xpath("//span[text()='Continue']").click();
        cy.log("Click On Continue Button");
    }

    enterBankCustomerIDWeb(Val) {
        cy.xpath("//input[@name='bankCustomerId']")
            .clear()
            .type(Val);
        cy.log("Enter Bank Customer ID Value As =====>" + Val);
    }

    clickOnIsProposerWithBank(Val) {
        cy.xpath("//div[contains(text(),'" + Val + "')]").click();
        cy.log("Click on Is Proposer with the bank for more than 7 months? Button As=====>" + Val);
    }

    enterLeadidWeb(Val) {
        cy.xpath("//input[@name='caRefA']")
            .clear()
            .type(Val);
        cy.log("Enter Lead ID for BOM =====>" + Val);
    }

    enterCARefBWeb(Val) {
        cy.xpath("//label[contains(text(),'CA Ref B')]/parent::div/child::input")
            .clear()
            .type(Val);
        cy.log("Enter CA Ref B Value As =====>" + Val);
    }

    selectSPCodeForCA(val) {
        cy.xpath("//label[contains(text(),'SP Code of CA ')]/parent::div/child::input")
            .click()
            .type(val)
            .type('{arrowdown}')
            .type('{enter}');
        cy.log("Select SP Code For CA Values As=====>" + val);
    }

    selectCAbranchCode(val) {
        cy.xpath("//label[contains(text(),'CA Branch Code ')]/parent::div/child::input")
            .click()
            .type(val)
            .type('{arrowdown}')
            .type('{enter}');
        cy.log("Select CA Branch Code Values As=====>" + val);
    }

    selectUSMCode(val) {
        cy.xpath("//input[contains(@name,'supervisorCode')]/parent::div/child::input")
            .click()
            .type(val)
            .type('{arrowdown}')
            .type('{enter}');
        cy.log("Select USM Code Values As=====>" + val);
    }

    
}
Cypress.Commands.add('scrollDown', () => {
    cy.get('body').scrollTo('bottom'); // Scroll to the bottom of the page
  });
  
  // Usage:
   // Scrolls to the bottom of the page
  
//module.exports = CustomerProfile;
