import { test, expect } from "../../fixtures/productPage";
import { expect as NHD_expect } from "../../expect/selectorIsVisible";
import { ProductPage } from "../../page-object/product-page/productPage";
import { getProducts } from "../../testdata-providers/testDataProviders";
import { clickAddToCartButtonStep, settingAttributeStep } from "../../support/common-steps/productPageSteps";
import { inputVerificationStep } from "../../support/commonSteps";

const product = getProducts()[1];
test.use({URL: product.url});

test.describe('Product page quantity field',async () => {
    
    async function generalActions(productPage: ProductPage, quantity: string) {
        
        await settingAttributeStep('quantity', quantity, async () => { await productPage.quantityField.setQuantity(quantity) });
        await clickAddToCartButtonStep(productPage);
    }

    async function positiveActions(productPage: ProductPage, quantity: string) {
        
        await generalActions(productPage, quantity);
        await NHD_expect(productPage.page).not.selectorIsVisible(productPage.quantityField.getErrorMessageSelector());
    }

    test('Verification of the quantity field text input',async ({productPage}) => {
        
        const expectedQuantity = "7";

        await inputVerificationStep(async () => {
            await productPage.quantityField.setQuantity(expectedQuantity);
        }, 'product page', expectedQuantity);

        expect(await productPage.quantityField.getQuantity()).toEqual(expectedQuantity);
    })

    test('Quantity- shorter than minimum (min - 1)',async ({productPage}) => {
        
        const quantity = '0';
        const expectedErrorMessage = 'Please enter a quantity greater than 0.';

        await generalActions(productPage, quantity);

        await NHD_expect(productPage.page).selectorIsVisible(productPage.quantityField.getErrorMessageSelector());
        expect(await productPage.quantityField.getErrorMessageLocator().textContent()).toEqual(expectedErrorMessage);
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