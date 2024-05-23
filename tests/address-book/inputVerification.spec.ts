import { test, expect } from "../../fixtures/addressBook";
import { AddressBook } from "../../page-object/address-book/addressBook";
import { inputVerificationStep } from "./commonSteps";

test.describe('The address book input verification',async () => {
    
    test.only('The "First Name" field input verification',async ({addressBook}) => {
        
        const firstName: string = 'John';

        await inputVerificationStep(async () => {    
            await addressBook.enterFirstName(firstName);
        }, firstName)

        expect(await addressBook.getFirstNameFieldInput()).toEqual(firstName);
    })

    test.only('The "Last Name" field input verification',async ({addressBook}) => {
        
        const lastName: string = 'Doe';

        await inputVerificationStep(async () => {    
            await addressBook.enterLastname(lastName);
        }, lastName)

        expect(await addressBook.getLastNameFieldInput()).toEqual(lastName);
    })

    test.only('The "Company" field input verification',async ({addressBook}) => {
        
        const company: string = 'Company';

        await inputVerificationStep(async () => {    
            await addressBook.enterCompany(company);
        }, company)

        expect(await addressBook.getCompanyFieldInput()).toEqual(company);
    })

    test.only('The "Phone Number" field input verification',async ({addressBook}) => {
        
        const phone: string = '111222333';

        await inputVerificationStep(async () => {    
            await addressBook.enterPhone(phone);
        }, phone)

        expect(await addressBook.getPhoneFieldInput()).toEqual(phone);
    })

    test.only('The "Street Address" line 1 field input verification',async ({addressBook}) => {
        
        const address: string = 'Address';

        await inputVerificationStep(async () => {    
            await addressBook.enterAddress_1(address);
        }, address)

        expect(await addressBook.getAddressFieldInput_1()).toEqual(address);
    })

    test.only('The "Street Address" line 2 field input verification',async ({addressBook}) => {
        
        const address: string = 'Address';

        await inputVerificationStep(async () => {    
            await addressBook.enterAddress_2(address);
        }, address)

        expect(await addressBook.getAddressFieldInput_2()).toEqual(address);
    })

    test.only('The "Street Address" line 3 field input verification',async ({addressBook}) => {
        
        const address: string = 'Address';

        await inputVerificationStep(async () => {    
            await addressBook.enterAddress_3(address);
        }, address)

        expect(await addressBook.getAddressFieldInput_3()).toEqual(address);
    })

    test.only('The "City" field input verification',async ({addressBook}) => {
        
        const city: string = 'Helsinki';

        await inputVerificationStep(async () => {    
            await addressBook.enterCity(city);
        }, city)

        expect(await addressBook.getCityFieldInput()).toEqual(city);
    })

    test.only('The "ZIP/ Postal Code" field input verification',async ({addressBook}) => {
        
        const postcode: string = '11222';

        await inputVerificationStep(async () => {    
            await addressBook.enterPostcode(postcode);
        }, postcode)

        expect(await addressBook.getPostcodeFieldInput()).toEqual(postcode);
    })
})