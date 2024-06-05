import { test, expect } from "../../fixtures/checkout";
import { expect as NHD_expect } from "../../expect/selectorIsVisible";
import { CheckoutPage } from "../../page-object/checkout/checkoutPage";
import { shippingAddressFormSteps } from "../../support/common-steps/checkoutSteps";
import { getIncorrectShippingAddressDatas, getProducts, getShippingAddress } from "../../testdata-providers/testDataProviders";
import { allure } from "allure-playwright";
import { addShippingAddressParameters } from "../../support/allure";

const product = getProducts()[0];
const shippingAddress = getShippingAddress();
const incorrectDatas = getIncorrectShippingAddressDatas();

test.use({product: product, filled: false});

test.describe('Filling the shipping address form',async () => {
    
    test.beforeEach(async () => {
        
        await allure.owner('Paweł Aksman');
        await allure.tags('Forms', 'Fields', 'Checkout');
    })

    async function performFieldValidationActions(checkoutPage: CheckoutPage, property: string, data: string, selector: string, expectedMessage: string) {
        
        shippingAddress[property] = data;

        await addShippingAddressParameters(shippingAddress);

        await shippingAddressFormSteps(checkoutPage, shippingAddress);
        await NHD_expect(checkoutPage.page).selectorIsVisible(selector);
        expect(await checkoutPage.page.locator(selector).textContent()).toEqual(expectedMessage);
    }

    async function incorrectDataActions(checkoutPage: CheckoutPage, property: string, selector: string, field: string) {
        
        await performFieldValidationActions(checkoutPage, property, incorrectDatas[property], selector, `Please enter a valid ${field}`);
    }

    async function blankFieldPositiveActions(checkoutPage: CheckoutPage, property: string) {
        
        shippingAddress[property] = '';

        await addShippingAddressParameters(shippingAddress);

        await shippingAddressFormSteps(checkoutPage, shippingAddress);
        await NHD_expect(checkoutPage.page).selectorIsVisible(checkoutPage.paymentGroupSelector);
    }

    async function blankFieldNegativeActions(checkoutPage: CheckoutPage, property: string, selector: string) {
    
        await performFieldValidationActions(checkoutPage, property, '', selector, 'This is a required field.')
    }

    test('Filling the shiping address form with correct data',async ({checkoutPage}) => {
        
        await allure.severity('critical');
        await allure.feature('Setting the shipping address data');

        await shippingAddressFormSteps(checkoutPage, shippingAddress);
        await NHD_expect(checkoutPage.page).selectorIsVisible(checkoutPage.paymentGroupSelector);
    })

    test('Blank the "Company" field',async ({checkoutPage}) => {
        
        await allure.severity('critical');
        await allure.feature('Setting the shipping address data');

        await blankFieldPositiveActions(checkoutPage, 'company');
    })

    test('Blank the "Street Address" line 2 field',async ({checkoutPage}) => {
        
        await allure.severity('critical');
        await allure.feature('Setting the shipping address data');

        await blankFieldPositiveActions(checkoutPage, 'address_2');
    })

    test('Blank the "Street Address" line 3 field',async ({checkoutPage}) => {
        
        await allure.severity('critical');
        await allure.feature('Setting the shipping address data');

        await blankFieldPositiveActions(checkoutPage, 'address_3');
    })

    test('Incorrect first name',async ({checkoutPage: checkoutpage}) => {
        
        await allure.severity('critical');
        await allure.feature('Setting the shipping address data');

        await incorrectDataActions(checkoutpage, 'firstName', checkoutpage.shippingAddressForm.firstNameErrorSelector, 'first name');
    })

    test('Incorrect last name',async ({checkoutPage: checkoutpage}) => {
        
        await allure.severity('critical');
        await allure.feature('Setting the shipping address data');

        await incorrectDataActions(checkoutpage, 'lastName', checkoutpage.shippingAddressForm.lastNameErrorSelector, 'last name');
    })

    test('Incorrect address line 1',async ({checkoutPage: checkoutpage}) => {
        
        await allure.severity('critical');
        await allure.feature('Setting the shipping address data');

        await incorrectDataActions(checkoutpage, 'address_1', checkoutpage.shippingAddressForm.addressErrorSelector, 'address');
    })

    test('Incorrect city',async ({checkoutPage: checkoutpage}) => {
        
        await allure.severity('critical');
        await allure.feature('Setting the shipping address data');

        await incorrectDataActions(checkoutpage, 'city', checkoutpage.shippingAddressForm.cityErrorSelector, 'city');
    })

    test('Incorrect postcode',async ({checkoutPage: checkoutpage}) => {
        
        await allure.severity('critical');
        await allure.feature('Setting the shipping address data');

        await incorrectDataActions(checkoutpage, 'postcode', checkoutpage.shippingAddressForm.postcodeErrorSelector, 'postcode');
    })

    test('Incorrect phone number',async ({checkoutPage: checkoutpage}) => {
        
        await allure.severity('critical');
        await allure.feature('Setting the shipping address data');

        await incorrectDataActions(checkoutpage, 'phone', checkoutpage.shippingAddressForm.phoneErrorSelector, 'phone');
    })

    test('Blank the "Email" field',async ({checkoutPage: checkoutpage}) => {
        
        await allure.severity('critical');
        await allure.feature('Setting the shipping address data');

        await blankFieldNegativeActions(checkoutpage, 'email', checkoutpage.shippingAddressForm.emailErrorSelector);
    })

    test('Blank the "First Name" field',async ({checkoutPage: checkoutpage}) => {
        
        await allure.severity('critical');
        await allure.feature('Setting the shipping address data');

        await blankFieldNegativeActions(checkoutpage, 'firstName', checkoutpage.shippingAddressForm.firstNameErrorSelector);
    })

    test('Blank the "Last Name" field',async ({checkoutPage: checkoutpage}) => {
        
        await allure.severity('critical');
        await allure.feature('Setting the shipping address data');

        await blankFieldNegativeActions(checkoutpage, 'lastName', checkoutpage.shippingAddressForm.lastNameErrorSelector);
    })

    test('Blank the "Street Address" field',async ({checkoutPage: checkoutpage}) => {
        
        await allure.severity('critical');
        await allure.feature('Setting the shipping address data');

        await blankFieldNegativeActions(checkoutpage, 'address_1', checkoutpage.shippingAddressForm.addressErrorSelector);
    })

    test('Blank the "City" field',async ({checkoutPage: checkoutpage}) => {
        
        await allure.severity('critical');
        await allure.feature('Setting the shipping address data');

        await blankFieldNegativeActions(checkoutpage, 'city', checkoutpage.shippingAddressForm.cityErrorSelector);
    })

    test('Blank the "ZIP/Postal Code" field',async ({checkoutPage: checkoutpage}) => {
        
        await allure.severity('critical');
        await allure.feature('Setting the shipping address data');

        await blankFieldNegativeActions(checkoutpage, 'postcode', checkoutpage.shippingAddressForm.postcodeErrorSelector);
    })

    test('Blank the "Phone Number" field',async ({checkoutPage: checkoutpage}) => {
        
        await allure.severity('critical');
        await allure.feature('Setting the shipping address data');

        await blankFieldNegativeActions(checkoutpage, 'phone', checkoutpage.shippingAddressForm.phoneErrorSelector);
    })
})