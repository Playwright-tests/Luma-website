import { Page } from "@playwright/test";
import { Product } from "../models/models";
import { ProductPage } from "../page-object/product-page/productPage";

export async function shoppingCartAction(page: Page, product: Product) {
    
    const productPage = new ProductPage(page);

    await productPage.goto(product.url);
    await productPage.setSize(product.size);
    await productPage.setColor(product.color);
    await productPage.quantityField.setQuantity(product.quantity);
    await productPage.clickAddToCartButton();
    await page.waitForSelector(productPage.messageSuccessSelector, {state: 'visible'});
}

export async function shoppingCartActions(page: Page, products: Product[]) {

    for(const product of products) {

        await shoppingCartAction(page, product);
    }
}