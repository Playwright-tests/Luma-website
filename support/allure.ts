import { Locator } from "@playwright/test";
import { allure } from "allure-playwright";
import { ShippingAddress } from "../models/models";

export async function addParameters(parameters: Map<string, string>) {
    
    parameters.forEach(async (key, value) => {
        await allure.addParameter(value, key);
    })
}

export async function addLoginParameters(email: string, password: string): Promise<void> {
    
    await addParameters(new Map<string, string>([
        ['Email', email],
        ['Password', password]
    ]))
}

export async function addShippingAddressParameters(shippingAddress: ShippingAddress) {
    
    await addParameters(new Map<string, string>([
        ['Email', shippingAddress.email],
        ['First name', shippingAddress.firstName],
        ['Last name', shippingAddress.lastName],
        ['Company', shippingAddress.company],
        ['Address line 1', shippingAddress.address_1],
        ['Address line 2', shippingAddress.address_2],
        ['Address line 3', shippingAddress.address_3],
        ['City', shippingAddress.city],
        ['State', shippingAddress.state],
        ['Postcode', shippingAddress.postcode],
        ['Country', shippingAddress.country],
        ['Phone', shippingAddress.phone]
    ]))
}

export async function takeScreenshot(fileName: string, locator: Locator) {
    
    await allure.attachment(`${fileName}.png`, await locator.screenshot(), {contentType: 'image/png'});
}