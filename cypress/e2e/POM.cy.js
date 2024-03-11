
export class Vijay{

// const loginPage = new Vijay();
//       cy.visit("https://leapuat.adityabirlasunlifeinsurance.com/uat/#/");
//       loginPage.setUserNAme("loginId",username);
//       loginPage.setUserNAme("password",password);
//       cy.wait(2000)   
//       cy.xpath("//span[text()='LOGIN']").click(); // Rep
    

setUserNAme(args){
    cy.xpath("//input[@id='loginId']").type(args);
}

setPASSWORD(arg){
    cy.xpath("//input[@id='password']").type(arg);
}


}


 