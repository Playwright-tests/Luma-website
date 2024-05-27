import { test, expect } from "../../fixtures/accountInformation";
import { inputVerificationStep } from "../../support/commonSteps";

test.describe('The "Change Email" form',async () => {
    
    test('The "Email" field input verification',async ({dynamicForm}) => {
        
        const email = 'myEmail@domain.com';

        await inputVerificationStep(async () => {
            await dynamicForm.changeEmailForm.enterEmail(email);
        }, "Email", email);

        expect(await dynamicForm.changeEmailForm.getEmailFieldInput()).toEqual(email);
    })

    test('The "Current Password" field input verification',async ({dynamicForm}) => {
        
        const password = 'myPassword';

        await inputVerificationStep(async () => {
            await dynamicForm.changeEmailForm.enterPassword(password);
        }, "Current Password", password);

        expect(await dynamicForm.changeEmailForm.getPasswordFieldInput()).toEqual(password);
    })
})