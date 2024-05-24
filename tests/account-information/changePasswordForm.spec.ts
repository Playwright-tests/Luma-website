import { test, expect } from "../../fixtures/accountInformation";
import { inputVerificationStep } from "./commonSteps";

test.use({checkbox: 'Change Password'});

test.describe('The "Change Password" form',async () => {
    
    test('The "Current Password" field input verification',async ({dynamicForm}) => {
        
        const currentPassword = 'current';

        await inputVerificationStep(async () => {
            
            await dynamicForm.changePasswordForm.enterCurrentPassword(currentPassword);
        }, currentPassword, 'Current Password');

        expect(await dynamicForm.changePasswordForm.getCurrentPasswordFieldInput()).toEqual(currentPassword);
    })

    test.only('The "New Password" field input verification',async ({dynamicForm}) => {
        
        const newPassword = 'newPassword';

        await inputVerificationStep(async () => {
            await dynamicForm.changePasswordForm.enterNewPassword(newPassword);
        }, newPassword, 'New Password');

        expect(await dynamicForm.changePasswordForm.getNewPasswordFieldInput()).toEqual(newPassword);
    })
})