import { test as base } from "@playwright/test";
import { ProductPage } from "../page-object/product-page/productPage"

export { expect } from "@playwright/test";


export const test = base.extend<{URL: string} & {productPage: ProductPage}>({

    URL: ['noURL',{option: true}],

    productPage:async ({page, URL}, use) => {
        
        const productPage = new ProductPage(page);
        await productPage.goto(URL);

        await use(productPage);
    }
})