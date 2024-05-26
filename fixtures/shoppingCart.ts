import { test as base } from "@playwright/test";
import { Product } from "../models/models";
import { ProductPage } from "../page-object/product-page/productPage";
import { ShoppingCart } from "../page-object/shopping-cart/shoppingCart";
import { URLs } from "../enums/enums";
import { shoppingCartAction } from "../support/shoppingCartAction";

export { expect } from "@playwright/test";

export const test = base.extend<{products: Product[]} & {shoppingCart: ShoppingCart}>({

    products: [[], {option: true}],

    shoppingCart: async ({products, page}, use) => {
        
        const productPage = new ProductPage(page);
        const shoppingCart = new ShoppingCart(page);

        await shoppingCartAction(page, products);
        await shoppingCart.goto(URLs.SHOPPING_CART_PAGE);
        await shoppingCart.page.waitForURL(URLs.SHOPPING_CART_PAGE);
        await shoppingCart.table.findProducts();
        await use(shoppingCart);
    }
})