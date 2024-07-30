const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
    e2e: {
      baseUrl: 'https://petstore.swagger.io/v2',
      screenshotOnRunFailure: true,
      video: true
    },
});
