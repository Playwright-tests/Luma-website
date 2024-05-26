import { test } from "@playwright/test";
import { ProductPage } from "../../page-object/product-page/productPage";

export async function step(dataName: string, data: string, func: any) {
    
    await test.step(`Set ${dataName}: ${data}`,async () => {
        
        await func();
    })
}

export async function clickAddToCartButtonStep(productPage: ProductPage) {
    
    await test.step('Click the "Add to cart" button',async () => {
        
        await productPage.clickAddToCartButton();
    })
}