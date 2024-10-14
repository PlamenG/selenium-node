import { AfterAll, Before, BeforeAll, setDefaultTimeout } from "@cucumber/cucumber";
import { WebDriver } from "selenium-webdriver";
import { TestWorld } from "../../core/test-world";
import { PageObjects } from "../../core/page-objects";
import { BrowserFactory } from "../../core/pages/browsers/browser-factory";
import { BrowserType } from "../../core/pages/browsers/browser-types";

let driver: WebDriver;

// Global CucumberJS timeout for a single Step definition
setDefaultTimeout(30*1000);
BeforeAll(async function () {
    const browserFactory = new BrowserFactory();
    /* In production framework the browser type will be:
        * passed as command line argument.
        * it would have default value if none is provided for more convient dev experience.
     */
    driver = await browserFactory.createDriver(BrowserType.Chrome)
});

Before(async function (this: TestWorld) {
    this.driver = driver;
    this.pageObjects = new PageObjects(driver);
});

AfterAll(async function () {
    await driver.quit();
});