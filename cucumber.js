const fs = require('fs');
const path = require('path');
const resultsDir = path.join(__dirname, 'output/results');

/**
 * check if e2e/results dir exists, if not create
 */
if (!fs.existsSync(resultsDir)) {
  fs.mkdirSync(resultsDir);
}

/**
 * Cucumber.js Config
 * Cucumber profiles for different browser / devices
 */

const common = {
  format: [
    `json:./e2e/results/cucumber-report.json`,
    '@cucumber/pretty-formatter',
    'html:./e2e/results/cucumber-report.html',
  ],
  requireModule: ['ts-node/register'],
  require: [path.join(__dirname, 'src/**/*.ts')],
  paths: [path.join(__dirname, 'src/features/')],
  timeout: 30000,
  worldParameters: {
    headless: false,
    appUrl: process.env.APP_URL || 'http://localhost:4200',
    mockApiUrl: process.env.APP_URL || 'http://apimock:3000',
  },
};

const local = {
  ...common,
};


const debug = {
  ...common,
  mode: 'generate', // cucumber option for generating reference screenshots
  paths: [], // set to empty as path defined in launch.json feature debug
};

module.exports = {
  default: local,
  debug: debug,
};