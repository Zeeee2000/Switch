const { defineConfig } = require('cypress')

module.exports = defineConfig({

  env: {
    MAILOSAUR_API_KEY: "snZyoaqA7krDihpnJ7zGyiESYyrBlK98",
  },
  e2e: {
    setupNodeEvents(on, config) {},
  }

})