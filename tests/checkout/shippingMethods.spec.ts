import { test, expect } from "../../fixtures/checkout";
import { radioButtonSteps } from "../../support/common-steps/checkout";
import { getProducts } from "../../testdata-providers/testDataProviders";

const product = getProducts()[0];
test.use({product: product});

test.describe('Shipping methods radio buttons',async () => {
    

    test.only('Clicking the "Fixed" radio button',async ({shippingMethods}) => {
        
        await radioButtonSteps(async () => {
            await shippingMethods.clickFixedRadioButton();
        }, 'Fixed');

        expect(shippingMethods.fixedRadioButtonLocator).toBeChecked();
        expect(shippingMethods.tableRateRadioButtonLocator).not.toBeChecked();
    })

    test.only('Clicking the "Table Rate" radio button',async ({shippingMethods}) => {
        
        await radioButtonSteps(async () => {
            await shippingMethods.clickTableRateRadioButton();
        }, 'Fixed');

        expect(shippingMethods.fixedRadioButtonLocator).not.toBeChecked();
        expect(shippingMethods.tableRateRadioButtonLocator).toBeChecked();
    })
})