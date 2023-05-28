
/*
    To enable both junit & mochawesome reports:

    https://www.npmjs.com/package/cypress-multi-reporters

    Configuration Steps:
    -------------------------------------------
    1. Install ==>  npm install cypress-multi-reporters --save-dev

    2. Add the following to cypress.config.js|ts

            const { defineConfig } = require('cypress');

            module.exports = defineConfig({
            reporterEnabled: "mochawesome, mocha-junit-reporter",

              mochawesomeReporterOptions: {
                    charts: true,
                    reportPageTitle: 'custom-title',
                    embeddedScreenshots: true,
                    inlineAssets: true,
                    saveAllAttempts: false,
                },

                mochaJunitReporterReporterOptions: {
                    mochafile: 'cypress/reports/junitreport-[hash].xml',
                    toConsole: true
                },

            e2e: {
                setupNodeEvents(on, config) {
                require('cypress-mochawesome-reporter/plugin')(on);
                },
            },
            });

    3. Add the following to cypress/support/e2e.js|ts
            import 'cypress-mochawesome-reporter/register';

    4. Run from CLI any spec file to generate html reports.
            Output folder ==> cypress/reports

            

*/


/*
    Cucumber Html Reports:


    Configuration Steps:
    -------------------------------------------
    1. Install ==>  <already installed along with cucumber packages>

    2. Add the following to scripts commands in package.json

           "scripts": {
                    "cypress:execution-allure": "cypress run --browser chrome --env allure=true,tags=@sanity --config video=false",
                    "allure:report": "allure generate allure-results --clean -o allure-report",
               }

    3. Run the following commands the specified order in terminal
            ==> 1. npm run cypress:execution-allure
                2. npm allure:report
                3. allure open

*/




