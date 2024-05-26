import { test, expect } from "../../fixtures/addressBook";
import { inputVerificationStep } from "../../support/commonSteps";

test.describe('The address book input verification',async () => {
    
    test('The "First Name" field input verification',async ({addressBook}) => {
        
        const firstName: string = 'John';

        await inputVerificationStep(async () => {    
            await addressBook.enterFirstName(firstName);
        }, 'First Name', firstName)

        expect(await addressBook.getFirstNameFieldInput()).toEqual(firstName);
    })

    test('The "Last Name" field input verification',async ({addressBook}) => {
        
        const lastName: string = 'Doe';

        await inputVerificationStep(async () => {    
            await addressBook.enterLastname(lastName);
        }, 'Last Name', lastName)

        expect(await addressBook.getLastNameFieldInput()).toEqual(lastName);
    })

    test('The "Company" field input verification',async ({addressBook}) => {
        
        const company: string = 'Company';

        await inputVerificationStep(async () => {    
            await addressBook.enterCompany(company);
        }, 'Company', company)

        expect(await addressBook.getCompanyFieldInput()).toEqual(company);
    })

    test('The "Phone Number" field input verification',async ({addressBook}) => {
        
        const phone: string = '111222333';

        await inputVerificationStep(async () => {    
            await addressBook.enterPhone(phone);
        }, 'Phone Number', phone)

        expect(await addressBook.getPhoneFieldInput()).toEqual(phone);
    })

    test('The "Street Address" line 1 field input verification',async ({addressBook}) => {
        
        const address: string = 'Address';

        await inputVerificationStep(async () => {    
            await addressBook.enterAddress_1(address);
        }, 'Street Address line 2', address)

        expect(await addressBook.getAddressFieldInput_1()).toEqual(address);
    })

    test('The "Street Address" line 2 field input verification',async ({addressBook}) => {
        
        const address: string = 'Address';

        await inputVerificationStep(async () => {    
            await addressBook.enterAddress_2(address);
        }, 'Street Address line 2', address)

        expect(await addressBook.getAddressFieldInput_2()).toEqual(address);
    })

    test('The "Street Address" line 3 field input verification',async ({addressBook}) => {
        
        const address: string = 'Address';

        await inputVerificationStep(async () => {    
            await addressBook.enterAddress_3(address);
        }, 'Street Address line 3', address)

        expect(await addressBook.getAddressFieldInput_3()).toEqual(address);
    })

    test('The "City" field input verification',async ({addressBook}) => {
        
        const city: string = 'Helsinki';

        await inputVerificationStep(async () => {    
            await addressBook.enterCity(city);
        }, 'City', city)

        expect(await addressBook.getCityFieldInput()).toEqual(city);
    })

    test('The "ZIP/ Postal Code" field input verification',async ({addressBook}) => {
        
        const postcode: string = '11222';

        await inputVerificationStep(async () => {    
            await addressBook.enterPostcode(postcode);
        }, 'ZIP/ Postal Code', postcode)

        expect(await addressBook.getPostcodeFieldInput()).toEqual(postcode);
    })
})