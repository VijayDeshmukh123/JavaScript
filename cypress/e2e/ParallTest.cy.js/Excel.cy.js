import {Vijay} from "../POM.cy.js";
/// <reference types="Cypress" />

describe('convert data to Json', () => 
{ it('read data from xcel', () =>
 { 
   cy.parseXlsx('cypress\fixtures\TestData.xlsx').then( (jsonData) =>
    { const rowLength = Cypress.$(jsonData[0].data).length
       for (let index = 0; index < rowLength; index++)
        { 
          var jsonData = jsonData[index].data 
          console.log(jsonData[index].data)
          cy.writeFile("cypress/fixtures/xlsxData.json", {username:jsonData[0][0], password:jsonData[0][1]})
        }
    })
 })
}) 
        
describe("Reading Data from newly created json file",function()
{
    it("Sample test case of login", function()
    {
        cy.visit("https://leapuat.adityabirlasunlifeinsurance.com/uat/#/");
        cy.fixture('xlsxData').then((user) =>
        {
            const loginPage = new Vijay();

            loginPage.setUserNAme("loginId");
            loginPage.setUserNAme("password");
            cy.wait(2000)   
            cy.xpath("//span[text()='LOGIN']").click(); // Rep
            // cy.get("input[name='ctl00$CPHContainer$txtUserLogin']").type(user.username)
            // cy.get("input[name='ctl00$CPHContainer$txtPassword']").type(user.password)
        })
       
       
    })
})