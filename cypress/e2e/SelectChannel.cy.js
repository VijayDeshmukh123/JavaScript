// browserUtils.js
import {Vijay} from "./POM.cy.js";

//import {Login} from "../pageobjects/Loginpage.js";

export class SelectChannel {

    // static launchBrowser(url) {
    //   cy.visit(url);
    // }
 
  

 SelectChannelVijay(channelName,username,password){
    switch (channelName) {
        case 'BOM':
          cy.log('Vijay');
          // Perform actions specific to the 'apple' case
          
      const loginPage = new Vijay();
     // cy.visit("https://leapuat.adityabirlasunlifeinsurance.com/uat/#/");
      loginPage.setUserNAme(username);
      cy.wait(1000); // Assuming wait time is needed here
      loginPage.setPASSWORD("password",password);
      cy.wait(2000)   
      cy.xpath("//span[text()='LOGIN']").click();
      
    

     // const loginPpage = new Login();
     cy.wait(1000); // Assuming wait time is needed here


      break;
      }

    }







}




    // Cypress.Commands.add('SelectChannelVijay', (channelName) => {
    //     SelectChannel.SelectChannelVijay(channelName);
    //   });


    


//     static launchBrowser(url) {
//       cy.visit(url);
//     }
  
//     static closeBrowser() {
//       // No direct way to close browser in Cypress
//       // Cypress automatically handles browser lifecycle
//       cy.window().then(win => {
//         win.close();
//       });
//     }
//   }
  
//   Cypress.Commands.add('launchBrowser', (url) => {
//     BrowserUtils.launchBrowser(url);
//   });
  
//   Cypress.Commands.add('closeBrowser', () => {
//     BrowserUtils.closeBrowser();
//   });
  