import { allure } from "allure-playwright";
import { test, expect } from "../../fixtures/accountInformation";
import { checkboxTestStep } from "../../support/common-steps/accountInformationSteps";
import { inputVerificationStep } from "../../support/commonSteps";
import { addParameters, takeScreenshot } from "../../support/allure";
import { URLs } from "../../enums/enums";

test.describe('Input text verification',async () => {

    test.beforeEach(async () => {
        
        await allure.owner('Paweł Aksman');
        await allure.tags('Account', 'Forms', 'Checkbox');
        await allure.link('Account information page', URLs.ACCOUNT_INFORMATION);
    })

    test('The "First Name" field input verification',async ({accountInformation}) => {
        
        const firstName = 'Mary';

        await allure.severity('normal');
        await allure.description('Verification of the "First Name" field text input');
        await addParameters(new Map<string, string>([['Input', firstName]]));

        await inputVerificationStep(async () => {
            await accountInformation.enterFirstName(firstName);
            await takeScreenshot('firstNameField', accountInformation.firstNameFieldLocator);
        }, 'First Name', firstName);

        expect(await accountInformation.getFirstNameFieldInput()).toEqual(firstName);
    })

    test('The "Last Name" field input verification',async ({accountInformation}) => {
        
        const lastName = 'Kane';

        await allure.severity('normal');
        await allure.description('Verification of the "Last Name" field text input');
        await addParameters(new Map<string, string>([['Input', lastName]]));
        
        await inputVerificationStep(async () => {
            await accountInformation.enterLastName(lastName);
            await takeScreenshot('lastNameField', accountInformation.lastNameFieldLocator);
        }, 'First name', lastName);

        expect(await accountInformation.getLastNameFieldInput()).toEqual(lastName);
    })

    test('Checking the "Change email" checkbox',async ({accountInformation}) => {
        
        await allure.severity('critical');
        await allure.description('Clicking the "Change email" checkbox');

        await checkboxTestStep(accountInformation, "Change Email");
        await accountInformation.page.waitForSelector(accountInformation.changeEmailForm.mainSelector);
    })

    test('Checking the "Change password" checkbox',async ({accountInformation}) => {
        
        await allure.severity('critical');
        await allure.description('Clicking the "Change password" checkbox');

        await checkboxTestStep(accountInformation, "Change Password");
        await accountInformation.page.waitForSelector(accountInformation.changePasswordForm.mainSelector);
    })
})