import { WebDriver } from "selenium-webdriver";
import { BrowserType } from "./browser-types";
import { ChromeManager } from "./chrome-manager";

export class BrowserFactory {
  async createDriver(browserType: BrowserType) {
    const chromeManager = new ChromeManager();
    let driver: WebDriver;
    /** In production Selenium framework multiple browser drivers would be implemented.
        * The browser type would be passed as command line argument.
        * It would have default value if none is provided for more convient dev experience.
     */
    switch (browserType) {
      case BrowserType.Chrome:
        const options = await chromeManager.getDefaultOptions();
        driver = await chromeManager.getDriver(options);
        break;
      default:
        driver = await chromeManager.getDriver(await chromeManager.getDefaultOptions());
    }
    return driver;
  }
}
