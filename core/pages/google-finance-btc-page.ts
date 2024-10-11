import { By, WebDriver } from "selenium-webdriver";

export class GoogleFinanceBtcPage {
    private driver: WebDriver;

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    async navigate() {
        await this.driver.get('https://www.google.com/finance?q=bitcoin');
    }
    
    async getBtcValue() {
        const btcValueElement = await this.driver.findElement(By.css('span[jsname="vWLAgc"]'));
        return await btcValueElement.getText();
    }
}