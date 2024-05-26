import { test as base } from "@playwright/test";
import { Product } from "../models/models";
import { ShoppingCart } from "../page-object/shopping-cart/shoppingCart";
import { URLs } from "../enums/enums";
import { shoppingCartActions } from "../support/shoppingCartAction";

export { expect } from "@playwright/test";

export const test = base.extend<{products: Product[]} & {shoppingCart: ShoppingCart}>({

    products: [[], {option: true}],

    shoppingCart: async ({products, page}, use) => {
        
        const shoppingCart = new ShoppingCart(page);

        await shoppingCartActions(page, products);
        await shoppingCart.goto(URLs.SHOPPING_CART_PAGE);
        await shoppingCart.page.waitForURL(URLs.SHOPPING_CART_PAGE);
        await shoppingCart.table.findProducts();
        await use(shoppingCart);
    }
})