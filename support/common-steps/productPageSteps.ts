import { ProductPage } from "../../page-object/product-page/productPage";
import { allure } from "allure-playwright";

export async function settingAttributeStep(dataName: string, data: string, func: any) {
    
    await allure.step(`Set ${dataName}: ${data}`,async () => {
        
        await func();
    })
}

export async function clickAddToCartButtonStep(productPage: ProductPage) {
    
    await allure.step('Click the "Add to cart" button',async () => {
        
        await productPage.clickAddToCartButton();
    })
}