import { Builder, WebDriver } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

export class ChromeManager {

    public async getDefaultOptions(): Promise<chrome.Options > {
        const options = new chrome.Options();
        options.addArguments('start-maximized');
        options.addArguments('disable-notifications');
        options.excludeSwitches('enable-automation');
        options.setUserPreferences({ 
            'profile.default_content_setting_values.cookies': 2,
            'profile.default_content_setting_values.geolocation': 2, 
        });

        return options;
    }

    public async getDriver(options: chrome.Options): Promise<WebDriver> {
        const driver = new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();

        return driver;
    }
}