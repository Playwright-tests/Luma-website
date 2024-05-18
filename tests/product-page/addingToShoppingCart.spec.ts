import { test, expect } from "../../fixtures/productPage";
import { expect as NHD_expect } from "../../expect/selectorIsVisible";
import { getProducts } from "../../testdata-providers/productsTesdataProvider";
import { clickAddToCartButtonStep, step } from "./steps";
import { ProductPage } from "../../page-object/product-page/productPage";

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
        await step('quantity', product.quantity, async () => { await productPage.getQuantityField().setQuantity(product.quantity) });
        await clickAddToCartButtonStep(productPage);

        await NHD_expect(productPage.getPage()).selectorIsVisible(productPage.getMessageSuccessSelector());
        expect(await productPage.getMessageSuccessLocator().textContent()).toContain('You added ' + product.name + ' to your shopping cart');
    })

    test('Attempting to adding a product to the cart when a size is not selected',async ({productPage}) => {
        

        await step('color', product.color, async () => { await productPage.setColor(product.color) });
        await step('quantity', product.quantity, async () => { await productPage.getQuantityField().setQuantity(product.quantity) });
        await clickAddToCartButtonStep(productPage);

        await NHD_expect(productPage.getPage()).selectorIsVisible(productPage.getRequiredSizeMessageSelector());
        expect(await productPage.getRequiredSizeMessageLocator().textContent()).toEqual(expectedSizeOrColoFieldsErrorMessage);
    })


    test('Attempting to adding a product to the cart when a color is not selected',async ({productPage}) => {
        
        await step('size', product.size, async () => { await productPage.setSize(product.size) });
        await step('quantity', product.quantity, async () => { await productPage.getQuantityField().setQuantity(product.quantity) });
        await clickAddToCartButtonStep(productPage);

        await NHD_expect(productPage.getPage()).selectorIsVisible(productPage.getRequiredColorMessageSelector());
        expect(await productPage.getRequiredColorMessageLocator().textContent()).toEqual('This is a required field.');
    })

    test.only('Attempting to adding a product to the cart when a quantity is not selected',async ({productPage}) => {
        
        await step('size', product.size, async () => { await productPage.setSize(product.size) });
        await step('color', product.color, async () => { await productPage.setColor(product.color) });
        await step('quantity', product.quantity, async () => { await productPage.getQuantityField().setQuantity('') });
        await clickAddToCartButtonStep(productPage);

        await NHD_expect(productPage.getPage()).selectorIsVisible(productPage.getQuantityField().getErrorMessageSelector());
        expect(await productPage.getQuantityField().getErrorMessageLocator().textContent()).toEqual(expectedQuanatityErrorMessage);
    })
})