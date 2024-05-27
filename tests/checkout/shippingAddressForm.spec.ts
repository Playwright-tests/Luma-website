import { test, expect } from "../../fixtures/checkout";
import { getProducts } from "../../testdata-providers/testDataProviders";
import { inputVerificationStep } from "../../support/commonSteps";

const product = getProducts()[0];
test.use({product: product});

test.describe('The shipping address form input verification',async () => {
    
    test('The "Email Address" field input verification',async ({shippingAddressForm}) => {
        
        const email = 'john@domain.com';

        await inputVerificationStep(async () => {
            await shippingAddressForm.enterEmail(email);
        }, 'Email Address', email);

        expect(await shippingAddressForm.getEmailFieldInput()).toEqual(email);
    })

    test('The "First Name" field input verification',async ({shippingAddressForm}) => {
        
        const firstName = 'First name';

        await inputVerificationStep(async () => {
            await shippingAddressForm.enterFirstName(firstName);
        }, 'First Name', firstName);

        expect(await shippingAddressForm.getFirstNameFieldInput()).toEqual(firstName);
    })

    test('The "Last Name" field input verification',async ({shippingAddressForm}) => {
        
        const lastName = 'Last name';

        await inputVerificationStep(async () => {
            await shippingAddressForm.enterLastName(lastName);
        }, 'Last Name', lastName);

        expect(await shippingAddressForm.getLastNameFieldInput()).toEqual(lastName);
    })

    test('The "Company" field input verification',async ({shippingAddressForm}) => {
        
        const company = 'Company';

        await inputVerificationStep(async () => {
            await shippingAddressForm.enterCompany(company);
        }, 'Company', company);

        expect(await shippingAddressForm.getCompanyFieldInput()).toEqual(company);
    })

    test('The "Street Address" line 1 field input verification',async ({shippingAddressForm}) => {
        
        const address = 'Address';

        await inputVerificationStep(async () => {
            await shippingAddressForm.enterAddress_1(address);
        }, 'Street Address line 1', address);

        expect(await shippingAddressForm.getAddressFieldInput_1()).toEqual(address);
    })

    test('The "Street Address" line 2 field input verification',async ({shippingAddressForm}) => {
        
        const address = 'Address';

        await inputVerificationStep(async () => {
            await shippingAddressForm.enterAddress_2(address);
        }, 'Street Address line 2', address);

        expect(await shippingAddressForm.getAddressFieldInput_2()).toEqual(address);
    })

    test('The "Street Address" line 3 field input verification',async ({shippingAddressForm}) => {
        
        const address = 'Address';

        await inputVerificationStep(async () => {
            await shippingAddressForm.enterAddress_3(address);
        }, 'Street Address line 3', address);

        expect(await shippingAddressForm.getAddressFieldInput_3()).toEqual(address);
    })

    test('The "City" field input verification',async ({shippingAddressForm}) => {
        
        const city = 'City';

        await inputVerificationStep(async () => {
            await shippingAddressForm.enterCity(city);
        }, 'City', city);

        expect(await shippingAddressForm.getCityFieldInput()).toEqual(city);
    })

    test('The "Postcode" field input verification',async ({shippingAddressForm}) => {
        
        const postcode = 'Postcode';

        await inputVerificationStep(async () => {
            await shippingAddressForm.enterPostcode(postcode);
        }, 'Postcode', postcode);

        expect(await shippingAddressForm.getPostcodeFieldInput()).toEqual(postcode);
    })

    test('The "Phone Number" field input verification',async ({shippingAddressForm}) => {
        
        const phone = '111222333';

        await inputVerificationStep(async () => {
            await shippingAddressForm.enterPhone(phone);
        }, 'Phone Number', phone);

        expect(await shippingAddressForm.getPhoneFieldInput()).toEqual(phone);
    })
})