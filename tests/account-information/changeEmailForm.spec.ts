import { allure } from "allure-playwright";
import { test, expect } from "../../fixtures/accountInformation";
import { inputVerificationStep } from "../../support/commonSteps";
import { addParameters, takeScreenshot } from "../../support/allure";

test.describe('The "Change Email" form',async () => {
    
    test.beforeEach(async () => {
        
        await allure.owner('Paweł Aksman');
        await allure.tags('Account', 'Forms', 'Fields');
    })

    test('The "Email" field input verification',async ({dynamicForm}) => {
        
        const email = 'myEmail@domain.com';

        await allure.severity('normal');
        await allure.feature('Filling the "Email" field');
        await addParameters(new Map<string, string>([['Email', email]]));

        await inputVerificationStep(async () => {
            await takeScreenshot('emailForm', dynamicForm.changeEmailForm.emailFieldLocator);
            await dynamicForm.changeEmailForm.enterEmail(email);
        }, "Email", email);

        expect(await dynamicForm.changeEmailForm.getEmailFieldInput()).toEqual(email);
    })

    test('The "Current Password" field input verification',async ({dynamicForm}) => {
        
        const password = '_dsD78%678&hhJk';

        await allure.severity('normal');
        await allure.feature('Filling the "Current Password" field');
        await addParameters(new Map<string, string>([['Password', password]]));

        await inputVerificationStep(async () => {
            await takeScreenshot('currentPasswordField', dynamicForm.changeEmailForm.passwordFieldLocator);
            await dynamicForm.changeEmailForm.enterPassword(password);
        }, "Current Password", password);

        expect(await dynamicForm.changeEmailForm.getPasswordFieldInput()).toEqual(password);
    })
})