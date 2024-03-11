//import {Vijay} from "./POM.cy.js";
//import {CustomerProfileModule} from "../com.absli.modules/CustomerProfileModule.cy.js";

import {BrowserUtils} from "./BrowserUtils.cy.js"
import{SelectChannel} from "./SelectChannel.cy.js"
import{cust} from "./CustmerProfileJourney.js"
/// <reference types="Cypress" />
const xlsx = require('xlsx');

Cypress.Commands.add('readExcelAndExtractCredentials', (filePath, sheetName, testCaseName) => {
  cy.readFile(filePath, 'binary').then((excelContent) => {
    const workbook = xlsx.read(excelContent, { type: 'binary' });
    const sheet = workbook.Sheets[sheetName];
    const jsonData = {};

    // Get range of the sheet
    const range = xlsx.utils.decode_range(sheet['!ref']);
    
    // Iterate over rows
    for (let rowIndex = range.s.r; rowIndex <= range.e.r; rowIndex++) {
      // Get current row number
      const currentRow = rowIndex + 1;
      
      // Check if test case name matches in the first column (A)
      const testCaseCellValue = sheet[`A${currentRow}`]?.v;
      if (testCaseCellValue === testCaseName) {
        // Extract username and password
        const username = sheet[`B${currentRow}`]?.v;
        const password = sheet[`C${currentRow}`]?.v;
        const channelName = sheet[`D${currentRow}`]?.v;

        const ProposerInsuredSame = sheet[`E${currentRow}`]?.v;
        const IsNRI = sheet[`F${currentRow}`]?.v;
        const TypeOfNRI = sheet[`G${currentRow}`]?.v;
        const NRICountry = sheet[`H${currentRow}`]?.v;
        const propNRIGSTwavier = sheet[`I${currentRow}`]?.v;
        const IsPanAvailable = sheet[`J${currentRow}`]?.v;
        const ProposerPanNumber = sheet[`P${currentRow}`]?.v;
        
        // Add username and password to JSON object
        jsonData.username = username;
        jsonData.password = password;
        jsonData.channelName = channelName;

        jsonData.ProposerInsuredSame = ProposerInsuredSame;
        jsonData.IsNRI = IsNRI;
        jsonData.TypeOfNRI = TypeOfNRI;
        jsonData.NRICountry = NRICountry;
        jsonData.propNRIGSTwavier = propNRIGSTwavier;
        jsonData.IsPanAvailable = IsPanAvailable;
        jsonData.ProposerPanNumber = ProposerPanNumber;


        // No need to continue searching once the test case is found
        break;
      }
    }
   
    // Return JSON data
    return jsonData;
  });
});

describe('Read Excel, Convert to JSON, and Extract Credentials', () => {
   // const loginPage = new BrowserUtils();
    before(() => {
        cy.launchBrowser('https://leapuat.adityabirlasunlifeinsurance.com/uat/#/');
       
      });

      
    //   after(() => {
    //     cy.closeBrowser();
    //   });


      // afterEach(() => {
      //   cy.closeBrowser();
      // });

  it('should read data from Excel, convert to JSON, and extract credentials', () => {
    const filePath = 'cypress/fixtures/TestData.xlsx';
    const sheetName = 'EndtoEndProposerSame'; // Replace with your sheet name
    const testCaseName = 'CompletesameGMSA'; // Replace with your test case name

    cy.readExcelAndExtractCredentials(filePath, sheetName, testCaseName).then((jsonData) => {
      // Extract username and password from JSON data
      const { username, password ,channelName,ProposerInsuredSame,IsNRI,TypeOfNRI,NRICountry,propNRIGSTwavier,IsPanAvailable,ProposerPanNumber} = jsonData;
      cy.writeFile('cypress/fixtures/DataJson.json', jsonData);
      // Log the extracted credentials
      cy.log(`Username: ${username}, Password: ${password}, Channel Name: ${channelName}`);

      cy.log(`Username: ${username}`);
      cy.log(`Password: ${password}`);

      cy.log(`ProposerInsuredSame: ${ProposerInsuredSame}`);
      cy.log(`IsNRI: ${IsNRI}`);
      cy.log(`TypeOfNRI: ${TypeOfNRI}`);
      cy.log(`NRICountry: ${NRICountry}`);
      cy.log(`propNRIGSTwavier: ${propNRIGSTwavier}`);
      cy.log(`IsPanAvailable: ${IsPanAvailable}`);
      cy.log(`ProposerPanNumber: ${ProposerPanNumber}`);

      const selectChannel = new SelectChannel();
      const custM = new cust();
      //const customerProfileModule = new CustomerProfileModule();
     
      // selectChannel.SelectChannelVijay(channelName,username,password);
      
      // custM.CustomerProfilemodule_same(ProposerInsuredSame,IsNRI,TypeOfNRI,NRICountry,propNRIGSTwavier,IsPanAvailable,ProposerPanNumber);




    //   switch (channelName) {
    //     case 'BOM':
    //       cy.log('Vijay');
    //       // Perform actions specific to the 'apple' case
       
    //   const loginPage = new Vijay();
    //  // cy.visit("https://leapuat.adityabirlasunlifeinsurance.com/uat/#/");
    //   loginPage.setUserNAme("loginId",username);
    //   loginPage.setUserNAme("password",password);
    //   cy.wait(2000)   
    //   cy.xpath("//span[text()='LOGIN']").click(); // Rep
    //   break;
    //   }
    });
  });
});

