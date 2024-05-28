import { test, expect } from "../../fixtures/checkout";
import { expect as NHD_expect } from "../../expect/selectorIsVisible";
import { CheckoutPage } from "../../page-object/checkout/checkoutPage";
import { shippingAddressFormSteps } from "../../support/common-steps/checkoutSteps";
import { getIncorrectShippingAddressDatas, getProducts, getShippingAddress } from "../../testdata-providers/testDataProviders";

const product = getProducts()[0];
const shippingAddress = getShippingAddress();
const incorrectDatas = getIncorrectShippingAddressDatas();

test.use({product: product, filled: false});

test.describe('Filling the shipping address form',async () => {
    
    async function incorrectDataActions(checkoutPage: CheckoutPage, property: string, selector: string, field: string) {
        
        shippingAddress[property] = incorrectDatas[property];
        await shippingAddressFormSteps(checkoutPage, shippingAddress);
        await NHD_expect(checkoutPage.page).selectorIsVisible(selector);
        expect(await checkoutPage.page.locator(selector).textContent()).toEqual(`Please enter a valid ${field}`);
    }

    async function blankFieldActions(checkoutPage: CheckoutPage, property: string, selector: string) {
    
        const expectedMessage = 'This is a required field.';

        shippingAddress[property] = '';
        
        await shippingAddressFormSteps(checkoutPage, shippingAddress);
        await NHD_expect(checkoutPage.page).selectorIsVisible(selector);
        expect(await checkoutPage.page.locator(selector).textContent()).toEqual(expectedMessage);
    }

    test('Filling the shiping address form with correct data',async ({checkoutPage: checkoutpage}) => {
        
        await shippingAddressFormSteps(checkoutpage, shippingAddress);
    })

    test.only('Incorrect first name',async ({checkoutPage: checkoutpage}) => {
        
        await incorrectDataActions(checkoutpage, 'firstName', checkoutpage.shippingAddressForm.firstNameErrorSelector, 'first name');
    })

    test.only('Incorrect last name',async ({checkoutPage: checkoutpage}) => {
        
        await incorrectDataActions(checkoutpage, 'lastName', checkoutpage.shippingAddressForm.lastNameErrorSelector, 'last name');
    })

    test.only('Incorrect address line 1',async ({checkoutPage: checkoutpage}) => {
        
        await incorrectDataActions(checkoutpage, 'address_1', checkoutpage.shippingAddressForm.addressErrorSelector, 'address');
    })

    test.only('Incorrect city',async ({checkoutPage: checkoutpage}) => {
        
        await incorrectDataActions(checkoutpage, 'city', checkoutpage.shippingAddressForm.cityErrorSelector, 'city');
    })

    test.only('Incorrect postcode',async ({checkoutPage: checkoutpage}) => {
        
        await incorrectDataActions(checkoutpage, 'postcode', checkoutpage.shippingAddressForm.postcodeErrorSelector, 'postcode');
    })

    test.only('Incorrect phone number',async ({checkoutPage: checkoutpage}) => {
        
        await incorrectDataActions(checkoutpage, 'phone', checkoutpage.shippingAddressForm.phoneErrorSelector, 'phone');
    })

    test.only('Blank the "Email" field',async ({checkoutPage: checkoutpage}) => {
        
        await blankFieldActions(checkoutpage, 'email', checkoutpage.shippingAddressForm.emailErrorSelector);
    })

    test.only('Blank the "First Name" field',async ({checkoutPage: checkoutpage}) => {
        
        await blankFieldActions(checkoutpage, 'firstName', checkoutpage.shippingAddressForm.firstNameErrorSelector);
    })

    test.only('Blank the "Last Name" field',async ({checkoutPage: checkoutpage}) => {
        
        await blankFieldActions(checkoutpage, 'lastName', checkoutpage.shippingAddressForm.lastNameErrorSelector);
    })

    test.only('Blank the "Street Address" field',async ({checkoutPage: checkoutpage}) => {
        
        await blankFieldActions(checkoutpage, 'address_1', checkoutpage.shippingAddressForm.addressErrorSelector);
    })

    test.only('Blank the "City" field',async ({checkoutPage: checkoutpage}) => {
        
        await blankFieldActions(checkoutpage, 'city', checkoutpage.shippingAddressForm.cityErrorSelector);
    })

    test.only('Blank the "ZIP/Postal Code" field',async ({checkoutPage: checkoutpage}) => {
        
        await blankFieldActions(checkoutpage, 'postcode', checkoutpage.shippingAddressForm.postcodeErrorSelector);
    })

    test.only('Blank the "Phone Number" field',async ({checkoutPage: checkoutpage}) => {
        
        await blankFieldActions(checkoutpage, 'phone', checkoutpage.shippingAddressForm.phoneErrorSelector);
    })
})