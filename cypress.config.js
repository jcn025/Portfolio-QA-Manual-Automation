const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // ¡ESTO ES LO IMPORTANTE!
    supportFile: false, 
  },
})