import { test, expect } from "../../fixtures/shoppingCart";
import { updatingSteps } from "../../support/common-steps/shoppingCartSteps";
import { getSubtotal } from "../../support/subtotalComputing";
import { getProducts } from "../../testdata-providers/testDataProviders";

const products = getProducts();
const quantities: string[] = ['2', '4', '3', '5'];
test.use({products: products});

test.describe('Updating the shopping cart',async () => {
    
    for(const quantity of quantities) {

        test(`Changing a product quantity to ${quantity}`,async ({shoppingCart}) => {
        
            const index = 1;
            const newSubtotal = getSubtotal(await shoppingCart.table.getPrice(index) ?? '', quantity);
            
            await updatingSteps(shoppingCart, index, quantity);
            await shoppingCart.page.waitForSelector(shoppingCart.loadingSelector, {state: 'hidden'});
            
            const actualSubtotal = await shoppingCart.table.getSubtotal(index);
    
            expect(actualSubtotal?.trim()).toEqual(newSubtotal);
        })
    }

    test('Removing a product from the shopping cart',async ({shoppingCart}) => {
        
        const index = 0;
        const expectedRowsCount = shoppingCart.table.getRowsCount() - 1;
        
        await test.step('Click the remove button',async () => {
            
            await shoppingCart.table.clickRemoveButton(index);
        })

        await shoppingCart.table.findProducts();

        expect(shoppingCart.table.getRowsCount()).toEqual(expectedRowsCount);
    })
})