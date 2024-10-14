import { By, WebDriver } from "selenium-webdriver";
import { BasePage } from "./base-page";

export class GoogleFinanceBtcPage extends BasePage {
    private btcPriceLocator = By.css('[data-source="BTC"] > div > div > div:nth-child(1) span div div');

    async navigate() {
        await this.driver.get('https://www.google.com/finance/quote/BTC-USD');
    }

    async getBtcValue() {
        const btcValueElement = await this.findElement(this.btcPriceLocator);
        return await btcValueElement.getText();
    }
}