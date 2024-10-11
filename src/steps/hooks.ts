import { Before, BeforeAll, setDefaultTimeout } from "@cucumber/cucumber";
import { Builder, WebDriver } from "selenium-webdriver";
import { TestWorld } from "../../core/test-world";
import { PageObjects } from "../../core/page-objects";

let driver: WebDriver;

// We need default cucumber timeout per scenario in case a promise is not resolved in a step
setDefaultTimeout(30*1000);
BeforeAll(async function () {
    driver = await new Builder().forBrowser('chrome').build();
});

Before(async function (this: TestWorld) {
    this.driver = driver;
    this.pageObjects = new PageObjects(driver);
});