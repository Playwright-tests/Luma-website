import { test as base } from "@playwright/test";
import { ShoppingCartThumbnail } from "../page-object/shopping-cart-thumbnail/shoppingCartThumbnail";
import { URLs } from "../enums/enums";
import { Header } from "../page-object/header/header";
import { Product } from "../models/models";
import { ProductPage } from "../page-object/product-page/productPage";

export { expect } from "@playwright/test";

export const test = base.extend<{unexpanded: ShoppingCartThumbnail} & {expanded: ShoppingCartThumbnail} & {URL: string}>({

    URL: ['noURL', {option: true}],

    unexpanded:async ({page}, use) => {
        
        const shoppingCartThumbnail = new ShoppingCartThumbnail(page);
        await shoppingCartThumbnail.goto(URLs.HOME_PAGE);
        await use(shoppingCartThumbnail);
    },

    expanded:async ({page, URL}, use) => {
        
        const shoppingCartThumbnail = new ShoppingCartThumbnail(page);
        const header = new Header(page);
        const productPage = new ProductPage(page);
        await productPage.goto(URL);
        await productPage.setSize('29');
        await productPage.setColor('Blue');
        await productPage.clickAddToCartButton();

        const selector = '.page.messages';
        await productPage.getPage().waitForSelector(selector, {state: 'visible', timeout: 5000});

        await header.goto(URLs.HOME_PAGE);
        await header.clickShoppingCartButton();
        await use(shoppingCartThumbnail);
    }
})