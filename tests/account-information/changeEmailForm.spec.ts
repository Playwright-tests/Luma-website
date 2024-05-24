import { test, expect } from "../../fixtures/accountInformation";
import { inputVerificationStep } from "./commonSteps";

test.describe('The "Change Email" form',async () => {
    
    test.only('The "Email" field input verification',async ({dynamicForm}) => {
        
        const email = 'myEmail@domain.com';

        await inputVerificationStep(async () => {
            await dynamicForm.changeEmailForm.enterEmail(email);
        }, email, "Email");

        expect(await dynamicForm.changeEmailForm.getEmailFieldInput()).toEqual(email);
    })

    test('The "Current Password" field input verification',async ({dynamicForm}) => {
        
        const password = 'myPassword';

        await inputVerificationStep(async () => {
            await dynamicForm.changeEmailForm.enterPassword(password);
        }, password, "Current Password");

        expect(await dynamicForm.changeEmailForm.getPasswordFieldInput()).toEqual(password);
    })
})