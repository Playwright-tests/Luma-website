import { Locator } from "@playwright/test";
import { allure } from "allure-playwright";

export async function addParameters(parameters: Map<string, string>) {
    
    parameters.forEach(async (key, value) => {
        await allure.addParameter(value, key);
    })
}

export async function takeScreenshot(fileName: string, locator: Locator) {
    
    await allure.attachment(`${fileName}.png`, await locator.screenshot(), {contentType: 'image/png'});
}