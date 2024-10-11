import { WebDriver } from 'selenium-webdriver';
import { GoogleFinanceBtcPage } from './pages/google-finance-btc-page';

export class PageObjects {
    googleFinanceBtcPage: GoogleFinanceBtcPage;
    
    constructor(driver: WebDriver) {
        this.googleFinanceBtcPage = new GoogleFinanceBtcPage(driver);
    }
}