"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const selenium_webdriver_1 = require("selenium-webdriver");
let driver;
(0, cucumber_1.Given)('I open Google homepage', function () {
    return __awaiter(this, void 0, void 0, function* () {
        driver = yield new selenium_webdriver_1.Builder().forBrowser('chrome').build();
        yield driver.get('https://www.google.com');
        yield driver.wait(selenium_webdriver_1.until.titleIs('Google'), 1000);
        yield driver.quit();
    });
});
