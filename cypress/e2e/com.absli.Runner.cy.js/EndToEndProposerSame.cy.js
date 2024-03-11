import {Vijay} from "../POM.cy";
import {SelectChannel} from "../SelectChannel.cy";
import {ExcelReader} from "../../integration/ExcelReader.cy.js";
import {BrowserUtils} from "../BrowserUtils.cy.js";
import {cust} from "../CustmerProfileJourney.js";
/// <reference types="Cypress" />



//const ExcelReader = require('../../integration/ExcelReader.cy.js'); // Adjust path as needed

describe('Read Excel, Convert to JSON, and Extract Credentials', () => {

    // before(() => {
    //     cy.launchBrowser('https://leapuat.adityabirlasunlifeinsurance.com/uat/#/');
       
    //   });


  it.only('Testcase-1, ==> CompletesameGMSA <<==', () => {
    const testCaseName = 'CompletesameGMSA'; // Replace with your test case name
    const excelReader=new ExcelReader();

    excelReader.readExcelAndExtractCredentials(testCaseName).then((jsonData) => {
      // Extracted data is available in the jsonData object
      const { username, password, channelName, ProposerInsuredSame, IsNRI, TypeOfNRI, NRICountry, propNRIGSTwavier, IsPanAvailable, ProposerPanNumber } = jsonData;
      const selectChannel = new SelectChannel();
      const custM = new cust();
      // Perform actions using extracted data
      cy.log(`Username: ${username}`);
      cy.log(`Password: ${password}`);
      cy.log(`ProposerInsuredSame: ${ProposerInsuredSame}`);
      cy.log(`IsNRI: ${IsNRI}`);
      cy.log(`TypeOfNRI: ${TypeOfNRI}`);
      cy.log(`NRICountry: ${NRICountry}`);
      cy.log(`propNRIGSTwavier: ${propNRIGSTwavier}`);
      cy.log(`IsPanAvailable: ${IsPanAvailable}`);
      cy.log(`ProposerPanNumber: ${ProposerPanNumber}`);
      //cy.log(`Username: ${username}, Password: ${password}, Channel Name: ${channelName}`);
      // Other test logic goes here...
      cy.visit('https://leapuat.adityabirlasunlifeinsurance.com/uat/#/')
      selectChannel.SelectChannelVijay(channelName,username,password);
      
      custM.CustomerProfilemodule_same(ProposerInsuredSame,IsNRI,TypeOfNRI,NRICountry,propNRIGSTwavier,IsPanAvailable,ProposerPanNumber);



    });
  });

  it('Testcase-2, ==> CompletesameGMSB <<==', () => {
   
    const testCaseName = 'CompletesameGMSB'; // Replace with your test case name
    const excelReader=new ExcelReader();

    excelReader.readExcelAndExtractCredentials(testCaseName).then((jsonData) => {
      // Extracted data is available in the jsonData object
      const { username, password, channelName, ProposerInsuredSame, IsNRI, TypeOfNRI, NRICountry, propNRIGSTwavier, IsPanAvailable, ProposerPanNumber } = jsonData;
      const selectChannel = new SelectChannel();
      const custM = new cust();
      // Perform actions using extracted data
      //cy.log(`Username: ${username}, Password: ${password}, Channel Name: ${channelName}`);
      cy.log(`Username: ${username}`);
      cy.log(`Password: ${password}`);
      cy.log(`ProposerInsuredSame: ${ProposerInsuredSame}`);
      cy.log(`IsNRI: ${IsNRI}`);
      cy.log(`TypeOfNRI: ${TypeOfNRI}`);
      cy.log(`NRICountry: ${NRICountry}`);
      cy.log(`propNRIGSTwavier: ${propNRIGSTwavier}`);
      cy.log(`IsPanAvailable: ${IsPanAvailable}`);
      cy.log(`ProposerPanNumber: ${ProposerPanNumber}`);
      // Other test logic goes here...
      cy.visit('https://leapuat.adityabirlasunlifeinsurance.com/uat/#/');
      selectChannel.SelectChannelVijay(channelName,username,password);

      custM.CustomerProfilemodule_same(ProposerInsuredSame,IsNRI,TypeOfNRI,NRICountry,propNRIGSTwavier,IsPanAvailable,ProposerPanNumber);

    });
  });



});






