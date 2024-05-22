import { test, expect } from "../../fixtures/login";
import { expect as NHD_expect } from "../../expect/selectorIsVisible";
import { Header } from "../../page-object/header/header";
import { getCorrectCredentials } from "../../testdata-providers/testDataProviders";
import { inputVerificationStep, loginSteps } from "./commonSteps";

const correctCredentials = getCorrectCredentials();

test.describe('Login',async () => {
    
    test('The "Email" field input verification',async ({loginForm}) => {
        
        const email: string = 'email@domain.com';

        await inputVerificationStep(async () => {    
            await loginForm.enterEmail(email);
        }, email)

        expect(await loginForm.getEmailFieldInput()).toEqual(email);
    })

    test('The "Password" field input verification',async ({loginForm}) => {
        
        const password: string = 'We_44#%b';

        await inputVerificationStep(async () => {
            await loginForm.enterPassword(password);
        }, password);

        expect(await loginForm.getPasswordFieldInput()).toEqual(password);
    })

    test('Successful login with correct credentials',async ({loginForm}) => {
        
        const header = new Header(loginForm.getPage());

        await loginSteps(loginForm, correctCredentials.email, correctCredentials.password);
        await NHD_expect(header.getPage()).selectorIsVisible(header.getLoggedInSelector());
    })
})