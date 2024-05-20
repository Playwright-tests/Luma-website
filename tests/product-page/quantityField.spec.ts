import { test, expect } from "../../fixtures/productPage";
import { expect as NHD_expect } from "../../expect/selectorIsVisible";
import { ProductPage } from "../../page-object/product-page/productPage";
import { getProducts } from "../../testdata-providers/testDataProviders";
import { clickAddToCartButtonStep, step } from "./steps";

const product = getProducts()[1];
test.use({URL: product.url});

test.describe('Product page quantity field',async () => {
    
    async function generalActions(productPage: ProductPage, quantity: string) {
        
        await step('quantity', quantity, async () => { await productPage.getQuantityField().setQuantity(quantity) });
        await clickAddToCartButtonStep(productPage);

    }

    async function positiveActions(productPage: ProductPage, quantity: string) {
        
        await generalActions(productPage, quantity);
        await NHD_expect(productPage.getPage()).not.selectorIsVisible(productPage.getQuantityField().getErrorMessageSelector());
    }

    test('Verification of the quantity field text input',async ({productPage}) => {
        
        const expectedQuantity = "7";

        await generalActions(productPage, expectedQuantity);

        expect(await productPage.getQuantityField().getQuantity()).toEqual(expectedQuantity);
    })

    test('Quantity- shorter than minimum (min - 1)',async ({productPage}) => {
        
        const quantity = '0';
        const expectedErrorMessage = 'Please enter a quantity greater than 0.';

        await generalActions(productPage, quantity);

        await NHD_expect(productPage.getPage()).selectorIsVisible(productPage.getQuantityField().getErrorMessageSelector());
        expect(await productPage.getQuantityField().getErrorMessageLocator().textContent()).toEqual(expectedErrorMessage);
    })

    test('Quantity- minimum',async ({productPage}) => {
        
        const quantity = '1';
        await positiveActions(productPage, quantity);
    })

    test('Quantity- exceeding minimum (min + 1)',async ({productPage}) => {
        
        const quantity = '2';
        await positiveActions(productPage, quantity);
    })
})