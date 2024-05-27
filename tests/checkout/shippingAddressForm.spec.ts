import { test, expect } from "../../fixtures/checkout";
import { getProducts } from "../../testdata-providers/testDataProviders";
import { inputVerificationStep } from "../../support/commonSteps";

const product = getProducts()[0];
test.use({product: product});

test.describe('The shipping address form input verification',async () => {
    
    test('The "Email Address" field input verification',async ({checkoutpage}) => {
        
        const email = 'john@domain.com';

        await inputVerificationStep(async () => {
            await checkoutpage.shippingAddressForm.enterEmail(email);
        }, 'Email Address', email);

        expect(await checkoutpage.shippingAddressForm.getEmailFieldInput()).toEqual(email);
    })

    test('The "First Name" field input verification',async ({checkoutpage}) => {
        
        const firstName = 'First name';

        await inputVerificationStep(async () => {
            await checkoutpage.shippingAddressForm.enterFirstName(firstName);
        }, 'First Name', firstName);

        expect(await checkoutpage.shippingAddressForm.getFirstNameFieldInput()).toEqual(firstName);
    })

    test('The "Last Name" field input verification',async ({checkoutpage}) => {
        
        const lastName = 'Last name';

        await inputVerificationStep(async () => {
            await checkoutpage.shippingAddressForm.enterLastName(lastName);
        }, 'Last Name', lastName);

        expect(await checkoutpage.shippingAddressForm.getLastNameFieldInput()).toEqual(lastName);
    })

    test('The "Company" field input verification',async ({checkoutpage}) => {
        
        const company = 'Company';

        await inputVerificationStep(async () => {
            await checkoutpage.shippingAddressForm.enterCompany(company);
        }, 'Company', company);

        expect(await checkoutpage.shippingAddressForm.getCompanyFieldInput()).toEqual(company);
    })

    test('The "Street Address" line 1 field input verification',async ({checkoutpage}) => {
        
        const address = 'Address';

        await inputVerificationStep(async () => {
            await checkoutpage.shippingAddressForm.enterAddress_1(address);
        }, 'Street Address line 1', address);

        expect(await checkoutpage.shippingAddressForm.getAddressFieldInput_1()).toEqual(address);
    })

    test('The "Street Address" line 2 field input verification',async ({checkoutpage}) => {
        
        const address = 'Address';

        await inputVerificationStep(async () => {
            await checkoutpage.shippingAddressForm.enterAddress_2(address);
        }, 'Street Address line 2', address);

        expect(await checkoutpage.shippingAddressForm.getAddressFieldInput_2()).toEqual(address);
    })

    test('The "Street Address" line 3 field input verification',async ({checkoutpage}) => {
        
        const address = 'Address';

        await inputVerificationStep(async () => {
            await checkoutpage.shippingAddressForm.enterAddress_3(address);
        }, 'Street Address line 3', address);

        expect(await checkoutpage.shippingAddressForm.getAddressFieldInput_3()).toEqual(address);
    })

    test('The "City" field input verification',async ({checkoutpage}) => {
        
        const city = 'City';

        await inputVerificationStep(async () => {
            await checkoutpage.shippingAddressForm.enterCity(city);
        }, 'City', city);

        expect(await checkoutpage.shippingAddressForm.getCityFieldInput()).toEqual(city);
    })

    test('The "Postcode" field input verification',async ({checkoutpage}) => {
        
        const postcode = 'Postcode';

        await inputVerificationStep(async () => {
            await checkoutpage.shippingAddressForm.enterPostcode(postcode);
        }, 'Postcode', postcode);

        expect(await checkoutpage.shippingAddressForm.getPostcodeFieldInput()).toEqual(postcode);
    })

    test('The "Phone Number" field input verification',async ({checkoutpage}) => {
        
        const phone = '111222333';

        await inputVerificationStep(async () => {
            await checkoutpage.shippingAddressForm.enterPhone(phone);
        }, 'Phone Number', phone);

        expect(await checkoutpage.shippingAddressForm.getPhoneFieldInput()).toEqual(phone);
    })
})