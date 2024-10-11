import { By, until, WebDriver } from "selenium-webdriver";

export abstract class BasePage {
    protected driver: WebDriver;

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    async navigate(url: string) {
        await this.driver.get(url);
    }

    async findElement(locator: By) {
        await this.driver.wait(until.elementLocated(locator));
        return await this.driver.findElement(locator);
    }

    async findElements(locator: By) {
        await this.driver.wait(until.elementsLocated(locator));
        return await this.driver.findElements(locator);
    }
}