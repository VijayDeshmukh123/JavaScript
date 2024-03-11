




describe("API", function () {
    it("Sample test case of login", function () {
        const secretKeyBase64 = "vBh92Gp7qoG5Tsh/hVBR8Zydlnoo4L7HSHO/2LdMUUo=";

        // // Prepare the plain text payload
        // const plainText = `{
        //     "lead_data": {
        //       "bank_crm_lead_id": "viju",
        //       "branch_code": "P",
        //       "proposer_address_1": "",
        //       "proposer_address_2": "",
        //       "proposer_address_3": "",
        //       "proposer_city": "",
        //       "proposer_country": "",
        //       "proposer_first_name": "Ram",
        //       "proposer_gender": "Male",
        //       "proposer_last_name": "Prasad",
        //       "proposer_mobile_no": "9012345678",
        //       "proposer_pin_code": "",
        //       "proposer_state": "",
        //       "sp_employee_code": "C5435",
        //       "sp_irdai_code": "SP0010688948"
        //     },
        //     "additional_data": {
        //       "proposer": {
        //         "email_id": "apoorv.gaurav-v@adityabirlacapital.com",
        //         "proposer_pan": "AGYPM101D"
        //       },
        //       "lead_details": {
        //         "bank_account_type": "",
        //         "bank_customer_id": "",
        //         "bank_account_no": "",
        //         "bank_customer_income": "",
        //         "bank_customer_occupation": "",
        //         "follow_up_date": "",
        //         "is_proposer_same_as_insured": "",
        //         "nominee_name": "",
        //         "product_id": "1000174",
        //         "SP_comments": "",
        //         "status_date": ""
        //       },
        //       "other_details": {
        //         "address_1": "",
        //         "address_2": "",
        //         "address_3": "",
        //         "application_identifier": "",
        //         "bank_account_opening_date": "",
        //         "bank_branch": "",
        //         "bank_ifsc_code": "AXIS12345",
        //         "city": "",
        //         "ckyc_number": "",
        //         "country": "",
        //         "customer_segment": "",
        //         "ebcc_kyc_flag": "",
        //         "engaged_customer": "Account opened in last 3 months",
        //         "insured_middle_name": "",
        //         "is_business_insurance": "",
        //         "is_nri": "",
        //         "need_for_insurance": "Child education or marriage",
        //         "offer_id": "",
        //         "offer_name": "",
        //         "opportunity_to_meet": "Meeting scheduled by SP",
        //         "opportunity_to_meet_date": "2023-07-05T11:43:27.000+0000",
        //         "partner_lead_creation_date": "2023-07-05T11:43:27.000+0000",
        //         "pincode": "",
        //         "premium_paying_capacity": "Monthly average balance",
        //         "premium_paying_reason": "For Extra Benefits",
        //         "proposer_investment_goal": "",
        //         "proposer_lifestage": "",
        //         "proposer_middle_name": "",
        //         "proposer_qualification": "",
        //         "proposer_risk_profile": "",
        //         "recommended_products": "",
        //         "relation_with_proposer": "",
        //         "source_type": "17",
        //         "state": "",
        //         "sub_source_type": "1416"
        //       }
        //     }
        //   }`;

        // Encrypt the plain text payload
        //const encryptedText = encryptWithPrefixIV(plainText, secretKeyBase64);
        //console.log("Encrypted Text: " + encryptedText);
        const encryptedText ="hp8d7CLuq+XiI4y0hk3B91JTLSvZ0w+ZhE2pQLhDFZ2CapWilW+MSX4n+6J5ZjptyLSkjK/mlszHkcpCJScEptdGu2bvhPpH7G5uXZyyVUf2VILGGe/3DlCOLO0moN9uKvX7YGXoNtwooyCFAn9W5lRHRc1qv5NdFKAeLhEYMCm+sHKp/o5cVYaG69UtejWMqbrHome8Gc2fcfMjl7E9v8klJWKVIizvZ8uXMQYUbeDCiMbCPPEOK+yjaLZrX3DN1lkjnWZAcPfYi4tX2L9kjfgPl2S6mmY6DZqSO+WrO6rYC0OPJWjNwIHHoWCuWdEW3x1+ue7VTvVz1v/tLN6cWm3T0l1U8alm9aP4zLvGLz2Pw4dBqwsAFmZ1YgPKeJnyb9Mqt+dP2/bQ69d2CBruLRHk9mrNQ3ZIZ6X+brn+rhLowAXtFCq8rgH6D1Sq1KFb7+7VXhGIQ15jssL6cUIuDUpNE8pyT8TDd1N6BEyQ+LtvXAUU6mHmLfLkKJDoV9N34Fi6GnUWf/TwOeDcA+lVdiYNhOgxsJXlT9mz9TnD07Fhy+gSLEktDEuISOxKKXGhdFDetca3tXAdgOsKWryNgKdRiNl2vIpN2PiVL9JxjWi70k5zAcUzCG2m2eFtBZRRKHg+9AAZh7EZC/UyTp4KrTT2GWUdEvDyLLL5Aa+Vc3NCN2soxl/FgDYWPlZW+dlsKWMQuYTSgHpmIidxUAfus69CSyteOadAbxbB/NRcyj1TP0XRXtMVUm1oxjDVTOCmqLePXCqxNohEI0Fn9tXd0t8fpa9MGNYB2rbaDrzljiXtTtPyO3/cuIvUJ+JgNSc89g0bUhsvl7gpi5tzNZKASwZY7a7PjoAMZToJkvKpF/kLBMH1AImNDljleIqmHY5Av1no9igXwDhqFV+Q2wTiDRNI6607rDemY5oWy46G4WhLTJj8ll7zTMd8flvB+UogqQZkkBfQ8OAD8gHzEIrQpgR8JEKJ6AcwL3ErpjFCJ3scnd5JUqtwghzHO0vmB9xntUXNOkrrN/Pq3IPfqhnbxOLXj8+9OLnLgX1oANFQYtVe8sVCfavsta5NnhSoh5OTaqIGYXlVBLL1GO3XppByloy2ME/Nnq6GcqL8utXCPTk8bUSG3EZz9+4evApIUnkMqSm8F4PZUx6wxjWIBUW20iBSM5NrFgN6W1BNKtnqqgqnFw6iu0ZmFEHz9xx1hc20NyT+9BPdfCL27/PaL+fwCb1ju+VQvygul/mQ5Tk0e+8ONjomf1lpgTV/wJdmzpec0g7rZDhrieYeLoTUjl2KFLtNhJr6J7qEJUICzvooZSBoQuHKtw6op2/TTM8YZ5r8u21JvzJAVLcVhUYDhf7Ex94A4f20pAXLIdd64SR+qoghCj7m2YfAgs1qECH73BWsL2T9ZW5GqMTVMWdM5Sb7yiasLPmjSAlGGLzw5hs2rcX7u0lr2w226CDfs4EuprS81ovGct5Kn+GscZv382q4+sBAi/BYKmS7WNHF1PCuY+Kg43dRVct6CFE1rZnG6+KRjcQsvm8ojKwib37Sx1OLaiaPJUy65L7B57sulvLPXUNlCERpr+Wg80NIClg1MAhTdcswKPtmzERS1R41cvZZmOIWZQ2ydJkg+pthIATIw6RMxEPzG+SegjspICKFe/yirFoDbZkJzDRD2KbCvU+eRe/dJAT8k0DC3nRHZPevMUwkJrbitE1Ij6KyRXq5x8Km2S1ViZIMO2Mgy8zNEry2IPe2qiglZio9qfOz6Rn8gMG5bkKk3Dq5Jqmln85/2uK80/OZxU5Wuz61x1wwhIqEGC7LhLhssygZMykEFa8kkxKWOE7vfto8uS3EEWwinAkhEwGFY4YKaTgPb9cCq+gPUnhQs7Q1KGseFGKxl7vuA+jM4jWrSgIwB0NzRc1uSyhKsF2GDrybPqYhsuGWb80mUXpVbYG62Y5x1VVzpBU0Jum1kJ6SJHP+LtmVZ03jmLREXCn2Zgc3v106mvE9Rw1fK+o3TI1TBTJ3OMN76Q1wjPvpqvjn5uMwqi4w332OE4NL99Um3w4mNfn0oka+qdXAbfi73K6iP6mE6/2nZyNk1w9C+pO61Cvxm8nCIaOCzMxz1Iys7xxgODU03Ulr1Xwebf6Fo+O5iKq4Uor0lUU8N4CQE3ByhZz4Q+waV/YiNLXawrq0ZcGv0O4LTRoh67oHSs34D73uCMmLagMKhXDgqnvIdJxMfs+CPrWIMKVFgpuF/cf1DnHUoILRxpUnU7joNN4ITaQMglaT3Q3neUoF/SdeylogYs1Ixi9l+tdDm3Tq23kxCu2BlRtuAyDPDicOFGDMwWoYulvus0ulIdZ58ave2c4DrVzwRLzKdu8k00K7zvySG9Z2Huo39fYT4z2vKSg1j/hMgUJyXJ8rluemrV5orAgzQHb4i1fV1ZDLgwZ1bzlZgnp9M3Oe1WlYEjmZeQ894hLBKUXNlGM0W+h7NxKepI69dsAZXdHR4WQmQTl6YZw+aVQsrvZ7R22Y52JUkvYbV0aDd3KioD+/8IgHT0XMJ3N+2pTJmcL0jARqdzeYhvgJywUNwE+kHBAEJ2f9I06kx88mr1DMdyS80JIJgMOYVLcsCP/sr3qmZhR0uxGCpK3kNo7L4IBf7N1SeXaWaZeJ/nLCwf/BdJ8a7XozP5ubBM46P6uj3dnLYTl5gvQ10WBkJgEAbo5ozMlAv6PcenrGc5RKroywZU8Eftccw0TGM8lVaNJgRZqNHNKJJrgkJcpzJ5aop5GvnxCd26NulNo/ZINvf1BCb4vT3mK5vkK7Baz64w7Nb6Bm0SSDo1GsNjtaAhFkirFHmPeuVIOI7ymUcGdAOui9ANoDs3Aq7yp26FWvRqJcwb7Jd2ZxhCjUkcw8OAcxkJcEiy2vt2sGf4GvKmXocPsKSHkeqsz9VPIqf8PW7ydnzVUtfACfLhVz/Wb1bZ8C4wea1SPBtK05pBodEpwGUdCg7faFjCdvRpthXqoaxT+sNoikV9LoTP5mhBQbLZNjCHSHuew+Ycf8tHAUOekBLtlRfxsKhmxO46sdYCeCLPHCn3EMMP43B7J/ri2Y9FozV7qZEosV65NM/7ye3Nmyj3T7GK0qdoo7tCGl26TXBi2La6w+kmuh2q4PemaDS4/lrUoJ+Hlwrol3uAdYI/vVjRTa8Vi2Gf7+EcA8J5Zgzy5YM6lETT7axYdX2td3VAK0kokOGfi1NWI/BbXyVzEZ/behwTl+vh3jJLKhHD1rYFI0QTBs7I/rPM4w0GDgg70TS7WlG/DnDECOxftIDupHpeoyIkH/yB9ie5zKZtdlyOBXsJ/gLBRKo78esNlvFNPPjfpYuAByuLQ+xs9U33FKdjPkiYOxvWEc3AQ1SLDj57jKcwCfoAvn4f9nQW5JEwQ5OkVdpbWgsHYSk5waE2uo7/Qs4mYvAsKMzT4xoGKXfMunr+0DcHitOFPxiGUGqtnf/ZabhSTfa+vjVNysxT/42jfSrLjDnKghMIQaLHv1rXtFETKDR0OYbtXnbpj8ZnLR0rewv+aLBnA+vwBOu32fg8TPNovcb3ysQJ1EPBVyViHAAvKyTH5F9qJf+JItla4JtCvEJKd4ZgvEoajZ69kJXL2LvvNzcp3Exq3+x03UMlYxsGlxnBLCcOURB/MAbd9cBGAhaeF78g25pcItwMLizE3r5OeJORDBtZEzrOkg49jga+kMsKmmX/NMjnCJZAZMGKQL5j2sheJHdhRnWMk6aek5aW9eTup+ggLB0P/BTp8WwTSb5mCMnPluOHbaPb6W8QXR25TKlISBfDPT325lClIknXciwEbMQz9bsEbnGpHJ8usC1o77OUs4hhT5WFW1MU/qqA+1NiSNLpqsVF+AL9LwOwEimd0cJhfIH0qoaMZsPbXBDnJBsDRlvZEIAWDdwyq9dIvVKLrWbO0woAyTVGO9edpe8rUR1joTQBJTa7wZSsjIA0SsNfFwvirbxZBErweRvP/DzUj6i7a1LxhOXOHeuLXClqUZV2Yzw3r51815PWCnN/4EW/qLJDJwG68Wn96oGEdtTXR6oyNdnrEprdVh4A17RY86dEIick2sm/m7YOSmUVnR8UM8Hy3FOz4oqhw64ws4Ad1tD6VklKV34KNsrZd5X30MrkGm/RPDjwU6QGWHo3QzgB/+VXUC+cno1kNinfhVzQnh3jAdw9PdeLjQ+mUihxh94q7WY+R/R9gA7Exb5mfWgEgUAs/Wy7ItNKlLlUfrpyjIdYo9pbxlY8rwZ6OwKOlEkOETaZqukERH2FGN6i+jmW4JSshEeKlVbxFK0KSRMu+sCM5IdPmF0SXNxsTvhKoAlDsiY5p1szCySxtfVbebm9SdL4ge9ubU3edJnLrxTnGweS8MWHfL+dJg7lpDepIUTZMxHSiv3FFSFq7+V67QfNNep/CW6sj1hOSfHZtEJ+kJ65wBnofuU1eO2lheJ8hosMmWHag5bnFdTCrASEoc7ybwuIQNEHZ8XBWHPIJgP+hTcRSbsWv9Xo/abTohGyofzOHTypA1xL/mislbP/0xIp1OwepAxZRNF4tg5UXlVmiDErg71yr1Jc6KvM87LDn9ZEbGXCggHYOlO2myszyMXUMhvRIZWDno71rPZE4ERigkuNhAhU4ixUnIFwJLMjMMUsUtQhKX+c5Qiy/tPwymDshpD0TgjPkQWactekywlKlYxuuYaNaRhzqmItUv0/tL8EH2/jhmWM+bMBrHA7XezZSMLM5tnYsfaJU1jEzyHCCUR2Z2WLWtePk9VLGYWXfRxF6cxDgL5nR7RlbhuaqniJNC5k9vYpnNEJpRitd/CxANF7UK38eOK0A6UITXJWAZZv7pAl7c/A3LHHDBQIvKfGwyrrFfFZ9K31TLHMwsXClsihXlvLu2WCubSGLDWsu+76eNqblR/uT3+84OIxiQLTKsmDRtW1CaismBNHQPZwonqPHUs4xhaRM17rGpmZjjayRfJjipPncvU4NZApaJLGBOztqGEJbmVgBt63zH9AxNCqyoEdgQuknm5fFKSg5PQfjWI7w/f5X93jaaIjTEm3ZCzQpz7iuTZAJuoDQI2MOsWRRXP2lc4Fojve4VmBpxums08xs8zpNF9HCGmhIuyeIbh8AhtD3B2duqmlSLKWMHZX2lDHfsUh3dVpOfsyEeRHAzR3HZrObWCSGCjeUcGABvBeT4fYlGFzRbxMG6hJZhbSNzhWKLLBnU7uQzJhO9FTOtDyJHmrJweG4cdIcgtChCFVYwZcZ0c2LHJvGclt84QnGN6QNBIIoLbjYJIV7f8x2dC7+G/5QeKIKGqU6clb+3rJDYJr7UmlaF07wqXEs8Tc7zXqYeUA4k6LBtojRgOJRapPtyPsa48tu5IpGq7jgBLzWQfZUJ/D9HcrRUMdwb2Ukeai5kDD0HVt3LXMxRDczHkRqzmjTIBSQjWxSVEmKILzS0SR3vQNu+DCVKQJO4wQbZ4oKUH9I7gEmYxrostO8QEFHotfzdbh+J9pc7B0jcnPpQOb5khLxpgxPUBAEYqlz9zNjr1r6CEONzqbov5pE2tsfXsmYdwdAptYTKaOmJjH9n8i+2PbZ+raU7r28gr16TCbVeosEexEgisFzFkGcXiYt6iRHKjGqocQwCsiMlESUTEM+FpMSiO1eBoXvoPjyUlycUh6PEuyOVaEIKStDbG/pllQuDVcKOtVx5KasKmKrcMLOuJH7Ux+MW2PNxaoCnRyZKtDhBS+vCK6FTxNu1RbZfUpDjnS/1J+AKjgEynOdyw/ALf0gxI8mIgUI2j3OuIz7T9loX9ns9TUPUrVhVuCEfHIMzF95uJvpSenug+2eumG/sXQte/PtJSxOksLUk0sJ6hRgE5+SJwivh8V9IpZ0mhf6Dylk1ivRDLs2x5XONpsJR3k9OajofF8iOS8WeSp0sh5z5Dbvp2dn98Kxy5lREUeoT9eKMJ1SEPMFSf0XWKkLzQ9EGZaXyECig9r2K+CfwVBH3YPiGogutPzjYwT8DZ1/u44HFG/Kco7FH20bc79xGRUbHq6cPBl9M3a4vwaz0cndemkjr5zWC05ksHwkBUrirF79kFXVhiuE=";
        // Prepare the payload for the request
        // const payload = {
        //     "payload": encryptedText
        // };
        const payload = `{
            "payload": "${encryptedText}"
          }`;
        // Send the request
        cy.request({
            method: 'POST',
            url: 'https://liservicedev.adityabirlacapital.com/bsli/sb/dcb/updateleaddetails',
            headers: {
                'Content-Type': 'application/json',
                'partner_application_id': 'AXIS_BANKING_APP',
                'partner_id': 'AXIS_BANK',
                'X-IBM-Client-Id': '66573fef-7165-4a6c-b8b2-9d4ffd544a47',
                'X-IBM-Client-Secret': 'C2tP2wP5pW8kG8pX6nQ8sC3tT2xF0eQ8qJ8fS8xC1jB2pJ4oH6',
                'Authorization': 'Bearer AAIkNjY1NzNmZWYtNzE2NS00YTZjLWI4YjItOWQ0ZmZkNTQ0YTQ39Gd60I4Om0TYyCGj6wz5tn3N44dVElE7DQfdXfkJg6u_MyutdRlr21nzFRecDc14qNGuqzBWIGIYi0EMnb9151Bnx9hw98R7USKXCmfROSI'
            },
            body: JSON.stringify(payload)
        }).then(response => {
            // Handle the response
            cy.log("Response status: " + response.status);
            cy.log("Response body: " + JSON.stringify(response.body));

            // Assert response status code if needed
            expect(response.status).to.equal(200); // or any other expected status code

            // Assert response body properties if needed
            // expect(response.body).to.have.property('key', 'value'); // Example assertion
        });
    });
});





// const crypto = require('crypto');

// function createRandomIV(ivLength) {
//     return crypto.randomBytes(ivLength);
// }

// function encryptWithPrefixIV(plainText, secretKey, iv) {
//     const cipher = crypto.createCipheriv('aes-128-gcm', secretKey, iv);
//     let encrypted = cipher.update(plainText, 'utf8', 'hex');
//     encrypted += cipher.final('hex');
//     return Buffer.concat([iv, Buffer.from(encrypted, 'hex')]);
// }

// function decryptWithPrefixIV(encryptedData, secretKey) {
//     const iv = encryptedData.slice(0, 12);
//     const encryptedText = encryptedData.slice(12);
//     const decipher = crypto.createDecipheriv('aes-128-gcm', secretKey, iv);
//     let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
//     decrypted += decipher.final('utf8');
//     return decrypted;
// }

// // Example usage:
// const secretKey = 'vBh92Gp7qoG5Tsh/hVBR8Zydlnoo4L7HSHO/2LdMUUo=';
// //const text = 'your-text-to-encrypt';
// const text = {"bank_crm_lead_id":"sdfs","datapush":true,"update_attributes":[{"key":"additional_data.lead_details.bank_account_no","value":"123810231"},{"key":"additional_data.lead_details.bank_account_type","value":"Savings"},{"key":"additional_data.lead_details.bank_customer_id","value":"123691328"},{"key":"additional_data.lead_details.bank_customer_occupation","value":"self_employed"},{"key":"additional_data.lead_details.product_id","value":"1235162"},{"key":"additional_data.other_details.bank_account_opening_date","value":"2023-07-05"},{"key":"additional_data.other_details.bank_ifsc_code","value":"AXIS0001"},{"key":"additional_data.other_details.ebcc_kyc_flag","value":"true"},{"key":"additional_data.other_details.proposer_investment_goal","value":"Child's Marriage"},{"key":"additional_data.other_details.proposer_lifestage","value":"SINGLE"},{"key":"additional_data.other_details.proposer_risk_profile","value":"Conservative"},{"key":"proposer_dob","value":"1992-10-23"},{"key":"proposer_first_name","value":"Shyam"},{"key":"proposer_gender","value":"Male"},{"key":"proposer_last_name","value":"Sharma"},{"key":"proposer_mobile_no","value":"9123456789"},{"key":"sp_employee_code","value":"SP00012"}]}
// const iv = createRandomIV(12);
// const encryptedData = encryptWithPrefixIV(text, secretKey, iv);
// console.log('Encrypted Data:', encryptedData.toString('hex'));

// const decryptedText = decryptWithPrefixIV(encryptedData, secretKey);
// console.log('Decrypted Text:', decryptedText);













// describe("API", function () {
//     it("Sample test case of login", function () {




//         const secretKeyBase64 = "vBh92Gp7qoG5Tsh/hVBR8Zydlnoo4L7HSHO/2LdMUUo=";
//         //const secretKey = new CryptoJS.lib.WordArray.init(Base64.parse(secretKeyBase64));
//         const plainText = `{
//           "lead_data": {
//             "bank_crm_lead_id": "viju",
//             "branch_code": "P",
//             "proposer_address_1": "",
//             "proposer_address_2": "",
//             "proposer_address_3": "",
//             "proposer_city": "",
//             "proposer_country": "",
//             "proposer_first_name": "Ram",
//             "proposer_gender": "Male",
//             "proposer_last_name": "Prasad",
//             "proposer_mobile_no": "9012345678",
//             "proposer_pin_code": "",
//             "proposer_state": "",
//             "sp_employee_code": "C5435",
//             "sp_irdai_code": "SP0010688948"
//           },
//           "additional_data": {
//             "proposer": {
//               "email_id": "apoorv.gaurav-v@adityabirlacapital.com",
//               "proposer_pan": "AGYPM101D"
//             },
//             "lead_details": {
//               "bank_account_type": "",
//               "bank_customer_id": "",
//               "bank_account_no": "",
//               "bank_customer_income": "",
//               "bank_customer_occupation": "",
//               "follow_up_date": "",
//               "is_proposer_same_as_insured": "",
//               "nominee_name": "",
//               "product_id": "1000174",
//               "SP_comments": "",
//               "status_date": ""
//             },
//             "other_details": {
//               "address_1": "",
//               "address_2": "",
//               "address_3": "",
//               "application_identifier": "",
//               "bank_account_opening_date": "",
//               "bank_branch": "",
//               "bank_ifsc_code": "AXIS12345",
//               "city": "",
//               "ckyc_number": "",
//               "country": "",
//               "customer_segment": "",
//               "ebcc_kyc_flag": "",
//               "engaged_customer": "Account opened in last 3 months",
//               "insured_middle_name": "",
//               "is_business_insurance": "",
//               "is_nri": "",
//               "need_for_insurance": "Child education or marriage",
//               "offer_id": "",
//               "offer_name": "",
//               "opportunity_to_meet": "Meeting scheduled by SP",
//               "opportunity_to_meet_date": "2023-07-05T11:43:27.000+0000",
//               "partner_lead_creation_date": "2023-07-05T11:43:27.000+0000",
//               "pincode": "",
//               "premium_paying_capacity": "Monthly average balance",
//               "premium_paying_reason": "For Extra Benefits",
//               "proposer_investment_goal": "",
//               "proposer_lifestage": "",
//               "proposer_middle_name": "",
//               "proposer_qualification": "",
//               "proposer_risk_profile": "",
//               "recommended_products": "",
//               "relation_with_proposer": "",
//               "source_type": "17",
//               "state": "",
//               "sub_source_type": "1416"
//             }
//           }
//         }`;
        
//         const encryptedText = encryptWithPrefixIV(plainText, secretKey);
//         console.log("Encrypted Text: " + encryptedText);
//        // return encryptedText;

//         const payload = `{
//             "payload": "${encryptedText}"
//           }`;

//         cy.request({
//             method: 'POST',
//             url: 'https://liservicedev.adityabirlacapital.com/bsli/sb/dcb/updateleaddetails',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'partner_application_id': 'AXIS_BANKING_APP',
//                 'partner_id': 'AXIS_BANK',
//                 'X-IBM-Client-Id': '66573fef-7165-4a6c-b8b2-9d4ffd544a47',
//                 'X-IBM-Client-Secret': 'C2tP2wP5pW8kG8pX6nQ8sC3tT2xF0eQ8qJ8fS8xC1jB2pJ4oH6',
//                 'Authorization': 'Bearer AAIkNjY1NzNmZWYtNzE2NS00YTZjLWI4YjItOWQ0ZmZkNTQ0YTQ3omiP-WoG6UCO5dFv27v3vxJu2p7wh2I3etjV2IjX1xli3sqbkrtkwbsojtMioFnreeCfplLZl7yAEgRttteNPQ4TWU-f3XvcIOjx9-f5GSI'
//             },
//             body: payload
           
//         }).then(response => {
//             //         // Handle the response
//                     cy.log("Response status: " + response.status);
//                     cy.log("Response body: " + JSON.stringify(response.body));
              
//             //         // Assert response status code
//             //         expect(response.status).to.equal(200); // or any other expected status code
              
//             //         // Assert response body properties
//             //        // expect(response.body).to.have.property('key', 'value'); // Example assertion
//                   });
        
        
        
        
//                 })
//             })
            
//         })
//     })
    


















//   const bearerToken = bearerTokenGeneration();
//   const a = CreatBody();
//   const secretKeyBase64 = "vBh92Gp7qoG5Tsh/hVBR8Zydlnoo4L7HSHO/2LdMUUo=";
//   const secretKey = new CryptoJS.lib.WordArray.init(Base64.parse(secretKeyBase64));
//   const payload = `{
//     "payload": "${a}"
//   }`;
  
//   const response = await fetch("https://example.com/bsli/sb/VymoLeadCreation/getLeadCreation", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "partner_application_id": "AXIS_BANKING_APP",
//       "partner_id": "AXIS_BANK",
//       "X-IBM-Client-Id": "66573fef-7165-4a6c-b8b2-9d4ffd544a47",
//       "X-IBM-Client-Secret": "C2tP2wP5pW8kG8pX6nQ8sC3tT2xF0eQ8qJ8fS8xC1jB2pJ4oH6",
//       "Authorization": "Bearer AAIkNjY1NzNmZWYtNzE2NS00YTZjLWI4YjItOWQ0ZmZkNTQ0YTQ320YroALGECQaJjNPkKpL4UwqhfIaLVCo7Mk2oPZvIryu-NTnTledpLoFq1wvKyW4KKjTb4efUO1AD33z5RvIQlyunLL-0xOcdXFDgtYmah8"
//     },
//     body: payload
//   });
  
//   await new Promise(resolve => setTimeout(resolve, 5000));
  
//   const responseData = await response.json();
//   console.log(responseData);
//   const Payload = responseData.payload;
//   console.log("payload: " + Payload);
//   const CA = Payload.split("payload ");
//   const payloadOUTPUT = CA[0];
//   console.log("Creat a Data: " + payloadOUTPUT);
//   await new Promise(resolve => setTimeout(resolve, 5000));
  
//   const encryptedData = Base64.parse(payloadOUTPUT);
//   const decryptedText = decryptWithPrefixIV(encryptedData, secretKey);
//   console.log("Decrypted Text: " + decryptedText);
// }


