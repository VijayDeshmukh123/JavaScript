const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  
  "log": true,
  "parallel": true,
  "numTestsKeptInMemory": 2, // Number of tests kept in memory
  
  //videoCompression: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    
    },
  },
});



// const { defineConfig } = require('cypress')

// module.exports = defineConfig({
//   video: true,
// })