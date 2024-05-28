import { ShoppingCart } from "../../page-object/shopping-cart/shoppingCart";
import { allure } from "allure-playwright";

export async function updatingSteps(shoppingCart: ShoppingCart, index: number, newQuantity: string) {
    
    await allure.step(`Enter the "${newQuantity}" in the quantity field of the "${shoppingCart.table.getName(index)}" product`,async () => {
        
        await shoppingCart.table.getQuantityField(index).setQuantity(newQuantity);
    })

    await allure.step('Click the "Update Shopping Cart" button',async () => {
        
        await shoppingCart.clickUpdateShoppingCartButton();
    })
}