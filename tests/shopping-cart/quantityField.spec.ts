import { test, expect } from "../../fixtures/shoppingCart";
import { ShoppingCart } from "../../page-object/shopping-cart/shoppingCart";
import { updatingSteps } from "../../support/common-steps/shoppingCartSteps";
import { inputVerificationStep } from "../../support/commonSteps";
import { getProducts } from "../../testdata-providers/testDataProviders";

const products = getProducts();
test.use({products: products});

test.describe('The shopping cart quantity field',async () => {

    let index: number;

    test.beforeEach(async () => {
        
        index = 0;
    })

    async function positiveActions(shoppingCart: ShoppingCart, quantity: string) {
        
        await updatingSteps(shoppingCart, index, quantity);
        expect(shoppingCart.table.getQuantityField(index).errorMessageLocator!).not.toBeVisible({timeout: 1000});
    }

    async function negativeActions(shoppingCart: ShoppingCart, quantity: string, expectedMessage: string) {
        
        await updatingSteps(shoppingCart, index, quantity);
        expect(shoppingCart.table.getQuantityField(index).errorMessageLocator!).toBeVisible({timeout: 1000});

        expect(await shoppingCart.table.getQuantityField(index).errorMessageLocator?.textContent())
            .toEqual(expectedMessage);
    }

    test('Verification of the quantity field text input',async ({shoppingCart}) => {
        
        const expectedQuantity = "7";

        await inputVerificationStep(async () => {
            await shoppingCart.table.getQuantityField(index).setQuantity(expectedQuantity);
        }, 'quantity field', expectedQuantity);

        expect(await shoppingCart.table.getQuantityField(index).getFieldInput()).toEqual(expectedQuantity);
    })

    test('Quantity- shorter than minimum (min - 1)',async ({shoppingCart}) => {
        
        const quantity = '0';
        const expectedErrorMessage = 'Please enter a number greater than 0 in this field.';

        await negativeActions(shoppingCart, quantity, expectedErrorMessage);
    })

    test('Quantity- minimum',async ({shoppingCart}) => {
        
        const quantity = '1';
        await positiveActions(shoppingCart, quantity);
    })

    test('Quantity- exceeding minimum (min + 1)',async ({shoppingCart}) => {
        
        const quantity = '2';
        await positiveActions(shoppingCart, quantity);
    })

    test('Blank the quantity field',async ({shoppingCart}) => {
        
        await negativeActions(shoppingCart, '', 'This is a required field.');
    })
})