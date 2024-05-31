import { test, expect } from "../../fixtures/checkout";
import { getProducts } from "../../testdata-providers/testDataProviders";
import { inputVerificationStep } from "../../support/commonSteps";
import { allure } from "allure-playwright";
import { addParameters, takeScreenshot } from "../../support/allure";

const product = getProducts()[0];
test.use({product: product});

test.describe('The shipping address form input verification',async () => {
    
    test.beforeEach(async () => {
        
        await allure.owner('Paweł Aksman');
        await allure.tags('Forms', 'Fields', 'Checkout');
    })

    test('The "Email Address" field input verification',async ({checkoutPage}) => {
        
        const email = 'john@domain.com';

        await allure.severity('normal');
        await allure.feature('Filling the "Email Address" field');
        await addParameters(new Map<string, string>([['Input', email]]));

        await inputVerificationStep(async () => {
            await checkoutPage.shippingAddressForm.enterEmail(email);
        }, 'Email Address', email);

        expect(await checkoutPage.shippingAddressForm.getEmailFieldInput()).toEqual(email);
    })

    test('The "First Name" field input verification',async ({checkoutPage}) => {
        
        const firstName = 'First name';

        await allure.severity('normal');
        await allure.feature('Filling the "First Name" field');
        await addParameters(new Map<string, string>([['Input', firstName]]));

        await inputVerificationStep(async () => {
            await takeScreenshot('firstNameField', checkoutPage.shippingAddressForm.firstNameFieldLocator);
            await checkoutPage.shippingAddressForm.enterFirstName(firstName);
        }, 'First Name', firstName);

        expect(await checkoutPage.shippingAddressForm.getFirstNameFieldInput()).toEqual(firstName);
    })

    test('The "Last Name" field input verification',async ({checkoutPage}) => {
        
        const lastName = 'Last name';

        await allure.severity('normal');
        await allure.feature('Filling the "Last Name" field');
        await addParameters(new Map<string, string>([['Input', lastName]]));

        await inputVerificationStep(async () => {
            await takeScreenshot('lastNameField', checkoutPage.shippingAddressForm.lastNameFieldLocator);
            await checkoutPage.shippingAddressForm.enterLastName(lastName);
        }, 'Last Name', lastName);

        expect(await checkoutPage.shippingAddressForm.getLastNameFieldInput()).toEqual(lastName);
    })

    test('The "Company" field input verification',async ({checkoutPage}) => {
        
        const company = 'Company';

        await allure.severity('normal');
        await allure.feature('Filling the "Company" field');
        await addParameters(new Map<string, string>([['Input', company]]));

        await inputVerificationStep(async () => {
            await takeScreenshot('companyField', checkoutPage.shippingAddressForm.companyFieldLocator);
            await checkoutPage.shippingAddressForm.enterCompany(company);
        }, 'Company', company);

        expect(await checkoutPage.shippingAddressForm.getCompanyFieldInput()).toEqual(company);
    })

    test('The "Street Address" line 1 field input verification',async ({checkoutPage}) => {
        
        const address = 'Address';

        await allure.severity('normal');
        await allure.feature('Filling the "Street Address" field');
        await addParameters(new Map<string, string>([['Input', address]]))

        await inputVerificationStep(async () => {
            await takeScreenshot('addressField_1', checkoutPage.shippingAddressForm.addressFieldLocator_1);
            await checkoutPage.shippingAddressForm.enterAddress_1(address);
        }, 'Street Address line 1', address);

        expect(await checkoutPage.shippingAddressForm.getAddressFieldInput_1()).toEqual(address);
    })

    test('The "Street Address" line 2 field input verification',async ({checkoutPage}) => {
        
        const address = 'Address';

        await allure.severity('normal');
        await allure.feature('Filling the "Street Address" line 2 field');
        await addParameters(new Map<string, string>([['Input', address]]));

        await inputVerificationStep(async () => {
            await takeScreenshot('addressField_2', checkoutPage.shippingAddressForm.addressFieldLocator_2);
            await checkoutPage.shippingAddressForm.enterAddress_2(address);
        }, 'Street Address line 2', address);

        expect(await checkoutPage.shippingAddressForm.getAddressFieldInput_2()).toEqual(address);
    })

    test('The "Street Address" line 3 field input verification',async ({checkoutPage}) => {
        
        const address = 'Address';

        await allure.severity('normal');
        await allure.feature('Filling the "Street Address" line 3 field');
        await addParameters(new Map<string, string>([['Input', address]]));

        await inputVerificationStep(async () => {
            await takeScreenshot('addressField_3', checkoutPage.shippingAddressForm.addressFieldLocator_3);
            await checkoutPage.shippingAddressForm.enterAddress_3(address);
        }, 'Street Address line 3', address);

        expect(await checkoutPage.shippingAddressForm.getAddressFieldInput_3()).toEqual(address);
    })

    test('The "City" field input verification',async ({checkoutPage}) => {
        
        const city = 'City';

        await allure.severity('normal');
        await allure.feature('Filling the "City" field');
        await addParameters(new Map<string, string>([['Input', city]]));

        await inputVerificationStep(async () => {
            await takeScreenshot('firstNameField', checkoutPage.shippingAddressForm.cityFieldLocator);
            await checkoutPage.shippingAddressForm.enterCity(city);
        }, 'City', city);

        expect(await checkoutPage.shippingAddressForm.getCityFieldInput()).toEqual(city);
    })

    test('The "Postcode" field input verification',async ({checkoutPage}) => {
        
        const postcode = 'Postcode';

        await allure.severity('normal');
        await allure.feature('Filling the "Postcode" field');
        await addParameters(new Map<string, string>([['Input', postcode]]));

        await inputVerificationStep(async () => {
            await takeScreenshot('postcodeField', checkoutPage.shippingAddressForm.postcodeFieldLocator);
            await checkoutPage.shippingAddressForm.enterPostcode(postcode);
        }, 'Postcode', postcode);

        expect(await checkoutPage.shippingAddressForm.getPostcodeFieldInput()).toEqual(postcode);
    })

    test('The "Phone Number" field input verification',async ({checkoutPage}) => {
        
        const phone = '111222333';

        await allure.severity('normal');
        await allure.feature('Filling the "Phone Number" field');
        await addParameters(new Map<string, string>([['Input', phone]]));

        await inputVerificationStep(async () => {
            await takeScreenshot('phoneField', checkoutPage.shippingAddressForm.phoneFieldLocator);
            await checkoutPage.shippingAddressForm.enterPhone(phone);
        }, 'Phone Number', phone);

        expect(await checkoutPage.shippingAddressForm.getPhoneFieldInput()).toEqual(phone);
    })
})