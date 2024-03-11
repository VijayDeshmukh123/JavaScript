const xlsx = require('xlsx');

export class ExcelReader {

   readExcelAndExtractCredentials(testCaseName) {
    const filePath = 'cypress/fixtures/TestData.xlsx';
    const sheetName = 'EndtoEndProposerSame'; // Replace with your sheet name

    return cy.readFile(filePath, 'binary').then((excelContent) => {
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
  }
}

//module.exports = ExcelReader;
