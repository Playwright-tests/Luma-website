import { test as base } from "@playwright/test";
import { Product } from "../models/models";
import { ProductPage } from "../page-object/product-page/productPage";
import { ShoppingCart } from "../page-object/shopping-cart/shoppingCart";
import { URLs } from "../enums/enums";

export { expect } from "@playwright/test";

export const test = base.extend<{product: Product} & {shoppingCart: ShoppingCart}>({

    product: [{url: '', name: '', size: '', color: '', quantity: ''}, {option: true}],

    shoppingCart: async ({product, page}, use) => {
        
        const productPage = new ProductPage(page);
        const shoppingCart = new ShoppingCart(page);

        await productPage.goto(product.url);
        await productPage.setSize(product.size);
        await productPage.setColor(product.color);
        await productPage.quantityField.setQuantity(product.quantity);
        await productPage.clickAddToCartButton();
        await shoppingCart.goto(URLs.SHOPPING_CART_PAGE);
        await shoppingCart.page.waitForURL(URLs.SHOPPING_CART_PAGE);
        await use(shoppingCart);
    }
})