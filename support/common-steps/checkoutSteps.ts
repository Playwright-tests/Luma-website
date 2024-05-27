import { test } from "@playwright/test";
import { ShippingAddressForm } from "../../page-object/checkout/shippingAddressForm";
import { ShippingAddress } from "../../models/models";

export async function radioButtonSteps(func: any, radioButtonName: string) {
    
    await test.step(`Click the "${radioButtonName}" radio button`,async () => {
        
        await func();
    })
}

export async function shippingAddressFormSteps(shippingAddressForm: ShippingAddressForm, shippingAddress: ShippingAddress) {
    
    await test.step(`Enter the "${shippingAddress.email}" in the "Email" field`,async () => {
        
        await shippingAddressForm.enterEmail(shippingAddress.email);
    })

    await test.step(`Enter the "${shippingAddress.firstName}" in the "First Name" field`,async () => {
        
        await shippingAddressForm.enterFirstName(shippingAddress.firstName);
    })

    await test.step(`Enter the "${shippingAddress.lastName}" in the "Last Name" field`,async () => {
        
        await shippingAddressForm.enterLastName(shippingAddress.lastName);
    })

    await test.step(`Enter the "${shippingAddress.company}" in the "Company" field`,async () => {
        
        await shippingAddressForm.enterCompany(shippingAddress.company);
    })

    await test.step(`Enter the "${shippingAddress.address_1}" in the "Street Address" line 1 field`,async () => {
        
        await shippingAddressForm.enterAddress_1(shippingAddress.address_1);
    })

    await test.step(`Enter the "${shippingAddress.address_2}" in the "Street Address" line 2 field`,async () => {
        
        await shippingAddressForm.enterAddress_2(shippingAddress.address_2);
    })

    await test.step(`Enter the "${shippingAddress.address_3}" in the "Street Address" line 3 field`,async () => {
        
        await shippingAddressForm.enterAddress_3(shippingAddress.address_3);
    })

    await test.step(`Enter the "${shippingAddress.city}" in the "City" field`,async () => {
        
        await shippingAddressForm.enterCity(shippingAddress.city);
    })

    await test.step(`Enter the "${shippingAddress.postcode}" in the "ZIP/ Postal Code" field`,async () => {
        
        await shippingAddressForm.enterPostcode(shippingAddress.postcode);
    })

    await test.step(`Enter the "${shippingAddress.phone}" in the "Phone Number" field`,async () => {
        
        await shippingAddressForm.enterPhone(shippingAddress.phone);
    })

    await test.step(`Select the "${shippingAddress.country}" country`,async () => {
        
        await shippingAddressForm.selectCountry(shippingAddress.country);
    })

    await test.step(`Select the "${shippingAddress.state}" state`,async () => {
        
        await shippingAddressForm.selectRegion(shippingAddress.state);
    })

    await test
}