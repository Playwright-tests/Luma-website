import { allure } from "allure-playwright";
import { test, expect } from "../../fixtures/accountInformation";
import { inputVerificationStep } from "../../support/commonSteps";
import { addParameters, takeScreenshot } from "../../support/allure";

test.use({checkbox: 'Change Password'});

test.describe('The "Change Password" form',async () => {
    
    test.beforeEach(async () => {
        
        await allure.owner('Paweł Aksman');
        await allure.tags('Account', 'Forms', 'Fields');
    })

    test('The "Current Password" field input verification',async ({dynamicForm}) => {
        
        const currentPassword = 'aa334$$#5_4';

        await allure.severity('normal');
        await allure.feature('Filling the "Current Password" field')
        await addParameters(new Map<string, string>([['Current password', currentPassword]]));

        await inputVerificationStep(async () => {
            await takeScreenshot('currentPasswordField', dynamicForm.changePasswordForm.currentPasswordFieldLocator);
            await dynamicForm.changePasswordForm.enterCurrentPassword(currentPassword);
        }, 'Current password', currentPassword);

        expect(await dynamicForm.changePasswordForm.getCurrentPasswordFieldInput()).toEqual(currentPassword);
    })

    test('The "New Password" field input verification',async ({dynamicForm}) => {
        
        const newPassword = '&445ssFS8#4';

        await allure.severity('normal');
        await allure.feature('Filling the "New Password" field');
        await addParameters(new Map<string, string>([['New password', newPassword]]));

        await inputVerificationStep(async () => {
            await takeScreenshot('newPasswordField', dynamicForm.changePasswordForm.newPasswordFieldLocator);
            await dynamicForm.changePasswordForm.enterNewPassword(newPassword);
        }, 'New Password', newPassword);

        expect(await dynamicForm.changePasswordForm.getNewPasswordFieldInput()).toEqual(newPassword);
    })
})