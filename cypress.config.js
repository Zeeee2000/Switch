const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  env: {
    MAILOSAUR_API_KEY: "snZyoaqA7krDihpnJ7zGyiESYyrBlK98",
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  }

})