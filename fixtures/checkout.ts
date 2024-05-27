import { test as base} from "@playwright/test";
import { URLs } from "../enums/enums";
import { Product } from "../models/models";
import { ShippingAddressForm } from "../page-object/checkout/shippingAddressForm";
import { shoppingCartAction } from "../support/shoppingCartAction";
import { ShippingMethods } from "../page-object/checkout/shippingMethods";

export { expect } from "@playwright/test";

export const test = base.extend<{product: Product} & {shippingAddressForm: ShippingAddressForm} & {shippingMethods: ShippingMethods}>({

    product: [{ url: '', name: '', size: '', color: '', quantity: ''}, {option: true}],

    shippingAddressForm:async ({product, page}, use) => {
        
        const shippingAddressForm = new ShippingAddressForm(page);

        await shoppingCartAction(page, product);
        await shippingAddressForm.goto(URLs.CHECKOUT);
        await use(shippingAddressForm);
    },

    shippingMethods:async ({product, page}, use) => {
        
        const shippingMethods = new ShippingMethods(page);

        await shoppingCartAction(page, product);
        await shippingMethods.goto(URLs.CHECKOUT);
        await use(shippingMethods);
    }
})