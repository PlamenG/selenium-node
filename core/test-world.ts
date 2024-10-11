import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { WebDriver } from 'selenium-webdriver';
import { PageObjects } from './page-objects';

export class TestWorld extends World {
  public driver: WebDriver;
  public pageObjects: PageObjects;

  constructor(
    options: IWorldOptions,
    driver: WebDriver,
  ) {
    super(options);
    this.driver = driver;
    this.pageObjects = new PageObjects(driver);
  }
}

setWorldConstructor(TestWorld);