import { test, expect } from "../../fixtures/shoppingCart";
import { getProducts } from "../../testdata-providers/testDataProviders";

const products = getProducts();

test.use({product: products[0]});

test.describe('Shopping cart state',async () => {
    
    test.only('Checking the shopping cart state',async ({shoppingCart}) => {
        
        await shoppingCart.table.findProducts();
        expect(shoppingCart.table.getRowsCount()).toBeGreaterThan(0);

        for(let i = 0; i < shoppingCart.table.getRowsCount(); i++) {

            console.log(`NAME: ${await shoppingCart.table.getName(i)}`);
            console.log(`COLOR: ${await shoppingCart.table.getColor(i)}`);
            console.log(`SIZE: ${await shoppingCart.table.getSize(i)}`);
            console.log(`PRICE: ${await shoppingCart.table.getPrice(i)}`);
            console.log(`QUANTITY: ${await shoppingCart.table.getQuantityFieldInput(i)}`);
            console.log(`SUBTOTAL: ${await shoppingCart.table.getSubtotal(i)}`);
        }
    })
})