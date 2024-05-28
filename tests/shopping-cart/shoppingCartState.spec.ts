import { allure } from "allure-playwright";
import { test, expect } from "../../fixtures/shoppingCart";
import { getProducts } from "../../testdata-providers/testDataProviders";

const products = getProducts();
test.use({products: products});

test.describe('Shopping cart state',async () => {
    
    test('Checking the shopping cart state',async ({shoppingCart}) => {
        
        await allure.step('Check the number of products',async () => {
            
            expect(shoppingCart.table.getRowsCount()).toBeGreaterThan(0);
        })

        await allure.step('Check products data',async () => {
            
            for(let i = 0; i < shoppingCart.table.getRowsCount(); i++) {

                const name = await shoppingCart.table.getName(i);
                const color = await shoppingCart.table.getColor(i);
                const size = await shoppingCart.table.getSize(i);
                const quantity = await shoppingCart.table.getQuantityField(i).getFieldInput();
    
                expect.soft(name?.trim()).toEqual(products[i].name);
                expect.soft(color?.trim()).toEqual(products[i].color);
                expect.soft(size?.trim()).toEqual(products[i].size);
                expect.soft(quantity?.trim()).toEqual(products[i].quantity);
            }
        })
    })
})