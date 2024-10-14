import { By, until, WebDriver, WebElement } from "selenium-webdriver";

export abstract class BasePage {
    protected driver: WebDriver;

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    async navigate(url: string):Promise<void> {
        await this.driver.get(url);
    }

    async findElement(locator: By, timeout = 5000): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(locator), timeout);
        return await this.driver.findElement(locator);
    }

    async findElements(locator: By, timeout = 5000): Promise<WebElement[]> {
        await this.driver.wait(until.elementsLocated(locator), timeout);
        return await this.driver.findElements(locator);
    }

    async delayInterval(interval: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, interval));
    }
}