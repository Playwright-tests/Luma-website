import { test, expect } from "../../fixtures/productPage";
import { expect as NHD_expect } from "../../expect/selectorIsVisible";
import { getProducts } from "../../testdata-providers/testDataProviders";
import { clickAddToCartButtonStep, step } from "./steps";

const product = getProducts()[0];
test.use({URL: product.url});

test.describe('Adding a product to the shopping cart',async () => {
    
    let expectedSizeOrColoFieldsErrorMessage: string;
    let expectedQuanatityErrorMessage: string;

    test.beforeAll(async () => {
        
        expectedSizeOrColoFieldsErrorMessage = 'This is a required field.';
        expectedQuanatityErrorMessage = 'Please enter a valid number in this field.';
    })
    
    test('Adding a product to the cart selected all product attributes',async ({productPage}) => {
    
        await step('size', product.size, async () => { await productPage.setSize(product.size) });
        await step('color', product.color, async () => { await productPage.setColor(product.color) });
        await step('quantity', product.quantity, async () => { await productPage.quantityField.setQuantity(product.quantity) });
        await clickAddToCartButtonStep(productPage);

        await NHD_expect(productPage.page).selectorIsVisible(productPage.messageSuccessSelector);
        expect(await productPage.messageSuccessLocator.textContent()).toContain('You added ' + product.name + ' to your shopping cart');
    })

    test('Attempting to adding a product to the cart when a size is not selected',async ({productPage}) => {
        

        await step('color', product.color, async () => { await productPage.setColor(product.color) });
        await step('quantity', product.quantity, async () => { await productPage.quantityField.setQuantity(product.quantity) });
        await clickAddToCartButtonStep(productPage);

        await NHD_expect(productPage.page).selectorIsVisible(productPage.requiredSizeMessageSelector);
        expect(await productPage.requiredSizeMessageLocator.textContent()).toEqual(expectedSizeOrColoFieldsErrorMessage);
    })


    test('Attempting to adding a product to the cart when a color is not selected',async ({productPage}) => {
        
        await step('size', product.size, async () => { await productPage.setSize(product.size) });
        await step('quantity', product.quantity, async () => { await productPage.quantityField.setQuantity(product.quantity) });
        await clickAddToCartButtonStep(productPage);

        await NHD_expect(productPage.page).selectorIsVisible(productPage.requiredColorMessageSelector);
        expect(await productPage.requiredColorMessageLocator.textContent()).toEqual('This is a required field.');
    })

    test('Attempting to adding a product to the cart when a quantity is not selected',async ({productPage}) => {
        
        await step('size', product.size, async () => { await productPage.setSize(product.size) });
        await step('color', product.color, async () => { await productPage.setColor(product.color) });
        await step('quantity', product.quantity, async () => { await productPage.quantityField.setQuantity('') });
        await clickAddToCartButtonStep(productPage);

        await NHD_expect(productPage.page).selectorIsVisible(productPage.quantityField.getErrorMessageSelector());
        expect(await productPage.quantityField.getErrorMessageLocator().textContent()).toEqual(expectedQuanatityErrorMessage);
    })
})