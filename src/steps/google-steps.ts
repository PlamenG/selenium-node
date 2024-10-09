import { Given } from '@cucumber/cucumber';
import { Builder, By, until, WebDriver } from 'selenium-webdriver';

let driver: WebDriver;

Given('I open Google homepage', async function () {
  driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://www.google.com');
  await driver.wait(until.titleIs('Google'), 1000);
  await driver.quit();
});