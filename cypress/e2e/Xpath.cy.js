import {Vijay} from "./POM.cy.js";





const XLSX = require('xlsx');

function getEndtoEndMajorDiffTestFromExcel(testExcelSheet, testName, SheetName) {
    const columnHeaders = ["username", "password"];
    const myData = [];

    // Use cy.readFile to read the Excel file
    cy.readFile(testExcelSheet, 'binary').then((fileContent) => {
        const workbook = XLSX.read(fileContent, { type: 'binary' });
        const sheet = workbook.Sheets[SheetName];
        const lastRow = sheet['!ref'].split(':')[1].split(/(\d+)/)[1];

        // Loop through the rows starting from the third row
        for (let rowNum = 3; rowNum <= lastRow; rowNum++) {
            const currentTestMethod = sheet[`A${rowNum}`].v;
            
            // Check if the current test method matches the testName
            if (currentTestMethod === testName) {
                const testDataMap = {};
                
                // Loop through column headers to get data for each header
                columnHeaders.forEach(header => {
                    const cellValue = sheet[`${header[0]}${rowNum}`].v;
                    testDataMap[header] = cellValue.trim();
                });
                
                // Push the data map to myData array
                myData.push(testDataMap);
            }
        }

        // Log the data after processing
        cy.log("mydata rows value **********", myData);
    });

    // Return a promise that resolves to myData
    return cy.wrap(myData);
}



// const XLSX = require('xlsx');

// function getEndtoEndMajorDiffTestFromExcel(testExcelSheet, testName, SheetName) {
//    const myData = [];
//     //const myColumnData = [];
//     cy.readFile(testExcelSheet, 'binary').then((fileContent) => {
//         const workbook = XLSX.read(fileContent, { type: 'binary' });
//         const sheet = workbook.Sheets[SheetName];
        
//         cy.log("dashboard Sheet row count ---------" + sheet['!ref']);
//         cy.log(" ******* current test running method  *********" + testName);
//         cy.log("**** column count  ********" + "PLACEHOLDER FOR COLUMN COUNT");

//         const columnHeaders = ["username", "password", /* other column headers */];

//         for (let rowNum = 3; rowNum <= sheet['!ref'].split(':')[1].split(/(\d+)/)[1]; rowNum++) {
//             const currentTestMethod = sheet[`A${rowNum}`].v;
//             if (currentTestMethod === testName) {
//                 const testDataMap = {};
//                 columnHeaders.forEach(header => {
//                     const cellValue = sheet[`${header[0]}${rowNum}`].v;
//                     testDataMap[header] = cellValue.trim();
//                 });
//                 myData.push(testDataMap);
//             }
//         }

//         cy.log("mydata rows value **********", myData);
//     });
//     return myData;
// }











describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://leapuat.adityabirlasunlifeinsurance.com/uat/#/')
// const testData = getEndtoEndMajorDiffTestFromExcel('C:\Users\comunus194.comunus-194\Desktop', 'CompletesameGMSA', 'EndtoEndProposerSame');
// cy.log(testData);
// Usage
getEndtoEndMajorDiffTestFromExcel('C:\Users\comunus194.comunus-194\Desktop', 'CompletesameGMSA', 'EndtoEndProposerSame').then((data) => {
    // Use the data here or in subsequent Cypress commands
    cy.log(data);
});

    })
  })




// describe('suite1', () => {
//     const loginPage = new Vijay();
//     it('test1', () => {
//        // const filePath="C:\Users\comunus194.comunus-194\Desktop";
//        cy.visit('https://leapuat.adityabirlasunlifeinsurance.com/uat/#/')
//        // Usage
// // const testData = getEndtoEndMajorDiffTestFromExcel('C:\Users\comunus194.comunus-194\Desktop', 'CompletesameGMSA', 'EndtoEndProposerSame');
// // cy.log(testData);
        
   

     
// // // in test
// //   cy.task('excelToJsonConvertor', filePath).then(function(result){
// //     console.log(result.Sheet1[0].B)
// //     cy.log(result)
//    // loginPage.setUserNAme("LogIn");
//   })

// //        cy.task('excelToJsonConvertor',filePath).then(function(result){
// //    console.log(result.Sheet1[0].B)
// //     cy.log(result)
// //     loginPage.setUserNAme("LogIn");
       
      
// //     cy.xpath("//span[text()='LOGIN']").click(); // Rep
// })

     


    
  