import { test, expect } from "../../fixtures/accountInformation";
import { checkboxTestStep } from "../../support/common-steps/accountInformationSteps";
import { inputVerificationStep } from "../../support/commonSteps";

test.describe('Input text verification',async () => {

    test('The "First Name" field input verification',async ({accountInformation}) => {
        const firstName = 'First name';
        
        await inputVerificationStep(async () => {
            await accountInformation.enterFirstName(firstName)
        }, 'First Name', firstName);

        expect(await accountInformation.getFirstNameFieldInput()).toEqual(firstName);
    })

    test('The "Last Name" field input verification',async ({accountInformation}) => {
        const lastName = 'Last name';
        
        await inputVerificationStep(async () => {
            await accountInformation.enterLastName(lastName)
        }, 'First name', lastName);

        expect(await accountInformation.getLastNameFieldInput()).toEqual(lastName);
    })

    test('Checking the "Change email" checkbox',async ({accountInformation}) => {
        
        await checkboxTestStep(accountInformation, "Change Email");
        await accountInformation.page.waitForSelector(accountInformation.changeEmailForm.mainSelector);
    })

    test('Checking the "Change password" checkbox',async ({accountInformation}) => {
        
        await checkboxTestStep(accountInformation, "Change Password");
        await accountInformation.page.waitForSelector(accountInformation.changePasswordForm.mainSelector);
    })
})