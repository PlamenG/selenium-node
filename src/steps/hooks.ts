import { Before, BeforeAll } from "@cucumber/cucumber";
import { Builder, WebDriver } from "selenium-webdriver";
import { TestWorld } from "../../core/test-world";
import { PageObjects } from "../../core/page-objects";

let driver: WebDriver;

BeforeAll(async function () {
    driver = await new Builder().forBrowser('chrome').build();
});

Before(async function (this: TestWorld) {
    this.driver = driver;
    this.pageObjects = new PageObjects(driver);
});