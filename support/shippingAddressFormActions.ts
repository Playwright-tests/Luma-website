import { Page } from "@playwright/test";
import { ShippingAddress } from "../models/models";
import { ShippingAddressForm } from "../page-object/checkout/shippingAddressForm";

export async function shippingAddressFormActions(shippingAddressForm: ShippingAddressForm, shippingAddress: ShippingAddress) {

    await shippingAddressForm.enterEmail(shippingAddress.email);
    await shippingAddressForm.enterFirstName(shippingAddress.firstName);
    await shippingAddressForm.enterLastName(shippingAddress.lastName);
    await shippingAddressForm.enterCompany(shippingAddress.company);
    await shippingAddressForm.enterAddress_1(shippingAddress.address_1);
    await shippingAddressForm.enterAddress_2(shippingAddress.address_2);
    await shippingAddressForm.enterAddress_3(shippingAddress.address_3);
    await shippingAddressForm.enterCity(shippingAddress.city);
    await shippingAddressForm.enterPostcode(shippingAddress.postcode);
    await shippingAddressForm.enterPhone(shippingAddress.phone);
    await shippingAddressForm.selectCountry(shippingAddress.country);
    await shippingAddressForm.selectRegion(shippingAddress.state);
}