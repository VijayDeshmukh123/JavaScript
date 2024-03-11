

describe("API", function () {
    it("Sample test case of login", function () {
      cy.request({
        method: 'POST',
        url: 'https://leapuat.adityabirlasunlifeinsurance.com/leap-uat-server/api/stateMachines/startExecutionAws',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbklkIjoicG1KcDUrZ1YvSlA5dGc5VjJZanJRZGFtdk02UVFOSkJyamVNVTdYOVNNcC9VbzR3YUxnSVJxZEZlNERza3p6YndGUTVxSmhEQ2VCMi9VblFLQUFkL2c9PSIsImNoYW5uZWxDb2RlIjoiRjc2U3ZGQVZHNURRY2FSTFRLalNRbG5iTmlQR3ROU3VjTStmNGNVVHNWT1BpdUFYckRkWWxsQ2pndlg3NmhnRGRycmFzRXRRdEF4YklNU0tsZXI0eFE9PSIsImNoYW5uZWxOYW1lIjoiRWRZNTNUT1l4Q0tuNS9lZnRXNnY4TDJSOE5TQml3bTJpTTNuVGtRU3RWQm1YV2tNTzg4Qi9EODJaUE8xanQ0bTZrMEtua2NRN0RJaVZaYmh6RDN5V2c9PSIsImlhdCI6MTcwOTc0NTk5MywiZXhwIjoxNzA5ODMyMzkzLCJpc3MiOiJ1YXQifQ._4w1MEN5tIYaIB5nl8_AAr9stAYEFMm6HLJmFPmEyJI'
        },
        body: {
          "loginId": "ZZ2406",
          "applicationNumber": "LA50051518",
          "screenCode": "instadb",
          "actionCode": "instadbDataView",
          "channelCode": "C000006",
          "document": {
            "filter": {
              "version": "",
              "isNotClarified": false
            }
          }
        }
      }).then(response => {
        // Handle the response
        cy.log("Response status: " + response.status);
        cy.log("Response body: " + JSON.stringify(response.body));
  
        // Assert response status code
        expect(response.status).to.equal(200); // or any other expected status code
  
        // Assert response body properties
       // expect(response.body).to.have.property('key', 'value'); // Example assertion
      })
    //   .catch(error => {
    //     // Handle errors
    //     cy.log("Error: " + error.message);
    //     throw error; // Fail the test if an error occurs
    //   });
    })
  })
  