import { test as base } from "@playwright/test";
import { URLs } from "../enums/enums";
import { Product, ShippingAddress } from "../models/models";
import { shoppingCartAction } from "../support/shoppingCartAction";
import { shippingAddressFormActions } from "../support/shippingAddressFormActions";
import { CheckoutPage } from "../page-object/checkout/checkoutPage";

export { expect } from "@playwright/test";

export const test = base.extend<{filled: boolean} & { product: Product } & {shippingAddress: ShippingAddress} & { checkoutpage: CheckoutPage }>({

    filled: [false, {option: true}],

    product: [
        {
            url: '',
            name: '',
            size: '',
            color: '',
            quantity: ''
        }, { option: true }],

    shippingAddress: [
        {
            email: '',
            firstName: '',
            lastName: '',
            company: '',
            address_1: '',
            address_2: '',
            address_3: '',
            city: '',
            state: '',
            postcode: '',
            country: '',
            phone: ''
        }, { option: true }
    ],


    checkoutpage: async ({ product, filled, shippingAddress, page }, use) => {

        const checkoutPage = new CheckoutPage(page);

        await shoppingCartAction(page, product);
        await checkoutPage.goto(URLs.CHECKOUT);
        
        if(filled) {
            
            await shippingAddressFormActions(checkoutPage.shippingAddressForm, shippingAddress);
        } else {
            await checkoutPage.shippingMethods.clickFixedRadioButton();
        }
        
        await use(checkoutPage);
    }
})