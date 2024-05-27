import { test } from "@playwright/test";
import { ShoppingCart } from "../../page-object/shopping-cart/shoppingCart";

export async function updatingSteps(shoppingCart: ShoppingCart, index: number, newQuantity: string) {
    
    await test.step(`Enter the "${newQuantity}" in the quantity field of the "${shoppingCart.table.getName(index)}" product`,async () => {
        
        await shoppingCart.table.getQuantityField(index).setQuantity(newQuantity);
    })

    await test.step('Click the "Update Shopping Cart" button',async () => {
        
        await shoppingCart.clickUpdateShoppingCartButton();
    })
}