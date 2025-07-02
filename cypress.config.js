const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://juliemr.github.io/protractor-demo/',
    setupNodeEvents(on, config) {
      // plugins
    }
  }
})
