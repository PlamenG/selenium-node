import { Given } from '@cucumber/cucumber';
import { Builder, By, until, WebDriver } from 'selenium-webdriver';
import { TestWorld } from '../../core/test-world';

let driver: WebDriver;

Given('I open Google homepage', async function (this: TestWorld) {
  await this.pageObjects.googleFinanceBtcPage.navigate();
  let value = await this.pageObjects.googleFinanceBtcPage.getBtcValue();
  console.log(value);
});