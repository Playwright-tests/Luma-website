import { test } from "@playwright/test";
import { Product } from "../../models/models";
import { ProductPage } from "../../page-object/product-page/productPage";

export async function step(dataName: string, data: string, func: any) {
    
    await test.step(`Set ${dataName}: ${data}`,async () => {
        
        await func();
    })
}

export async function setSizeStep(productPage: ProductPage, product: Product) {
    
    await test.step('Click the "' + product.size,async () => {
        
        await productPage.setSize(product.size);
    })
}

export async function setColorStep(productPage: ProductPage, product: Product) {
    
    await test.step('Click the "' + product.color + '"',async () => {
        
        await productPage.setColor(product.color);
    })
}

export async function setQuantityeStep(productPage: ProductPage, quantity: string) {
    
    await test.step('Set quantity',async () => {
        
        await productPage.getQuantityField().setQuantity(quantity);
    })
}

export async function clickAddToCartButtonStep(productPage: ProductPage) {
    
    await test.step('Click the "Add to cart" button',async () => {
        
        await productPage.clickAddToCartButton();
    })
}