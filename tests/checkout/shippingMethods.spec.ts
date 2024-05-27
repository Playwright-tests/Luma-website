import { test, expect } from "../../fixtures/checkout";
import { radioButtonSteps } from "../../support/common-steps/checkoutSteps";
import { getProducts } from "../../testdata-providers/testDataProviders";

const product = getProducts()[0];
test.use({product: product});

test.describe('Shipping methods radio buttons',async () => {
    

    test('Clicking the "Fixed" radio button',async ({checkoutpage}) => {
        
        await radioButtonSteps(async () => {
            await checkoutpage.shippingMethods.clickFixedRadioButton();
        }, 'Fixed');

        expect(checkoutpage.shippingMethods.fixedRadioButtonLocator).toBeChecked();
        expect(checkoutpage.shippingMethods.tableRateRadioButtonLocator).not.toBeChecked();
    })

    test('Clicking the "Table Rate" radio button',async ({checkoutpage}) => {
        
        await radioButtonSteps(async () => {
            await checkoutpage.shippingMethods.clickTableRateRadioButton();
        }, 'Fixed');

        expect(checkoutpage.shippingMethods.fixedRadioButtonLocator).not.toBeChecked();
        expect(checkoutpage.shippingMethods.tableRateRadioButtonLocator).toBeChecked();
    })
})