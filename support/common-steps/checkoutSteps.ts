import { ShippingAddress } from "../../models/models";
import { CheckoutPage } from "../../page-object/checkout/checkoutPage";
import { allure } from "allure-playwright";

export async function radioButtonSteps(func: any, radioButtonName: string) {
    
    await allure.step(`Click the "${radioButtonName}" radio button`,async () => {
        
        await func();
    })
}

export async function shippingAddressFormSteps(checkoutPage: CheckoutPage, shippingAddress: ShippingAddress) {
    
    await allure.step(`Enter the "${shippingAddress.email}" in the "Email" field`,async () => {
        
        await checkoutPage.shippingAddressForm.enterEmail(shippingAddress.email);
    })

    await allure.step(`Enter the "${shippingAddress.firstName}" in the "First Name" field`,async () => {
        
        await checkoutPage.shippingAddressForm.enterFirstName(shippingAddress.firstName);
    })

    await allure.step(`Enter the "${shippingAddress.lastName}" in the "Last Name" field`,async () => {
        
        await checkoutPage.shippingAddressForm.enterLastName(shippingAddress.lastName);
    })

    await allure.step(`Enter the "${shippingAddress.company}" in the "Company" field`,async () => {
        
        await checkoutPage.shippingAddressForm.enterCompany(shippingAddress.company);
    })

    await allure.step(`Enter the "${shippingAddress.address_1}" in the "Street Address" line 1 field`,async () => {
        
        await checkoutPage.shippingAddressForm.enterAddress_1(shippingAddress.address_1);
    })

    await allure.step(`Enter the "${shippingAddress.address_2}" in the "Street Address" line 2 field`,async () => {
        
        await checkoutPage.shippingAddressForm.enterAddress_2(shippingAddress.address_2);
    })

    await allure.step(`Enter the "${shippingAddress.address_3}" in the "Street Address" line 3 field`,async () => {
        
        await checkoutPage.shippingAddressForm.enterAddress_3(shippingAddress.address_3);
    })

    await allure.step(`Enter the "${shippingAddress.city}" in the "City" field`,async () => {
        
        await checkoutPage.shippingAddressForm.enterCity(shippingAddress.city);
    })

    await allure.step(`Enter the "${shippingAddress.postcode}" in the "ZIP/ Postal Code" field`,async () => {
        
        await checkoutPage.shippingAddressForm.enterPostcode(shippingAddress.postcode);
    })

    await allure.step(`Enter the "${shippingAddress.phone}" in the "Phone Number" field`,async () => {
        
        await checkoutPage.shippingAddressForm.enterPhone(shippingAddress.phone);
    })

    await allure.step(`Select the "${shippingAddress.country}" country`,async () => {
        
        await checkoutPage.shippingAddressForm.selectCountry(shippingAddress.country);
    })

    await allure.step(`Select the "${shippingAddress.state}" state`,async () => {
        
        await checkoutPage.shippingAddressForm.selectRegion(shippingAddress.state);
    })

    await allure.step('Click the "Next" button',async () => {
        
        await checkoutPage.clickNextButton();
    })
}