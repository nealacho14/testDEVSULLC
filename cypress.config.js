const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  projectId: "5w4b59",
    e2e: {
      baseUrl: 'https://petstore.swagger.io/v2',
      screenshotOnRunFailure: true,
      video: true
    },
});
