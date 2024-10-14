import { Given, Then, When } from '@cucumber/cucumber';
import { Builder, By, until, WebDriver } from 'selenium-webdriver';
import { TestWorld } from '../../core/test-world';

let driver: WebDriver;

Given('Google finance page for BTC-USD is opened', async function (this: TestWorld) {
  await this.pageObjects.googleFinanceBtcPage.navigate();
});

When('BTC-USD price is observed every {int} seconds for {int} minutes', { timeout: 11*60*1000 }, async function (interval: number, timeout: number) {
  const value = await this.pageObjects.googleFinanceBtcPage.getBtcValue();  
  const values = await this.pageObjects.googleFinanceBtcPage.getBtcValuesForAPeriod(interval, timeout);
    console.log(values);
});

Then('BTC-USD price is evaluated for {int} seconds', function (int) {
  // Then('BTC-USD price is evaluated for {float} seconds', function (float) {
    // Write code here that turns the phrase above into concrete actions
    console.log('pending');
});