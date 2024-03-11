
import {Vijay} from "../POM.cy";

describe('Proposer_Same', () => {
    it('passes', () => {
      cy.visit('https://leapuat.adityabirlasunlifeinsurance.com/uat/#/')
        
      const loginPage = new Vijay();
     // cy.visit("https://leapuat.adityabirlasunlifeinsurance.com/uat/#/");
      loginPage.setUserNAme("loginId","IN201201");
      cy.wait(1000); // Assuming wait time is needed here
      loginPage.setPASSWORD("password","str");
      cy.wait(2000)   
      cy.xpath("//span[text()='LOGIN']").click();
    })
  })