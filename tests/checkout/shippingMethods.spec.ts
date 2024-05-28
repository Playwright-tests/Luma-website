import { test, expect } from "../../fixtures/checkout";
import { radioButtonSteps } from "../../support/common-steps/checkoutSteps";
import { getProducts } from "../../testdata-providers/testDataProviders";

const product = getProducts()[0];
test.use({product: product});

test.describe('Shipping methods radio buttons',async () => {
    

    test('Clicking the "Fixed" radio button',async ({checkoutPage}) => {
        
        await radioButtonSteps(async () => {
            await checkoutPage.shippingMethods.clickFixedRadioButton();
        }, 'Fixed');

        expect(checkoutPage.shippingMethods.fixedRadioButtonLocator).toBeChecked();
        expect(checkoutPage.shippingMethods.tableRateRadioButtonLocator).not.toBeChecked();
    })

    test('Clicking the "Table Rate" radio button',async ({checkoutPage}) => {
        
        await radioButtonSteps(async () => {
            await checkoutPage.shippingMethods.clickTableRateRadioButton();
        }, 'Fixed');

        expect(checkoutPage.shippingMethods.fixedRadioButtonLocator).not.toBeChecked();
        expect(checkoutPage.shippingMethods.tableRateRadioButtonLocator).toBeChecked();
    })
})