import { test, expect } from "../../fixtures/accountInformation";
import { checkboxTestStep, inputVerificationStep } from "./commonSteps";

test.describe('Input text verification',async () => {

    test('The "First Name" field input verification',async ({accountInformation}) => {
        const firstName = 'First name';
        
        await inputVerificationStep(async () => {
            await accountInformation.enterFirstName(firstName)
        }, firstName, 'First name');

        expect(await accountInformation.getFirstNameFieldInput()).toEqual(firstName);
    })

    test('The "Last Name" field input verification',async ({accountInformation}) => {
        const lastName = 'Last name';
        
        await inputVerificationStep(async () => {
            await accountInformation.enterLastName(lastName)
        }, lastName, 'First name');

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