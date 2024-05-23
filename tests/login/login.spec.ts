import { test, expect } from "../../fixtures/login";
import { expect as NHD_expect } from "../../expect/selectorIsVisible";
import { Header } from "../../page-object/header/header";
import { getCorrectCredentials, getIncorrectCredentials } from "../../testdata-providers/testDataProviders";
import { inputVerificationStep, loginSteps } from "./commonSteps";
import { PropertyNames } from "../../enums/enums";
import { LoginForm } from "../../page-object/login-form/loginForm";

const correctCredentials = getCorrectCredentials();
const incorrectEmail = getIncorrectCredentials(PropertyNames.INCORRECT_EMAIL)[0];
const incorrectPassword = getIncorrectCredentials(PropertyNames.INCORRECT_PASSWORD)[0];

test.describe('Login',async () => {
    
    let expectedAlertText: string;

    test.beforeEach(async () => {
        
        expectedAlertText = 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.'
    })

    async function incorrectCredentialsActions(loginForm: LoginForm, email: string, password: string) {
        
        await loginSteps(loginForm, email, password);
        await NHD_expect(loginForm.getPage()).selectorIsVisible(loginForm.alertSelector);

        const actualMessage = await loginForm.alertLocator.textContent();

        expect(actualMessage?.trim()).toEqual(expectedAlertText);
    }

    async function blankFieldActions(loginForm: LoginForm, email: string, password: string, expectedSelector: string) {
        
        await loginSteps(loginForm, email, password);
        await NHD_expect(loginForm.getPage()).selectorIsVisible(expectedSelector);
        expect(await loginForm.getPage().locator(expectedSelector).textContent()).toEqual('This is a required field.');
    }

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

    test('Unsuccessful login with incorrect email',async ({loginForm}) => {
        
        await incorrectCredentialsActions(loginForm, incorrectEmail.email, correctCredentials.password);
    })

    test('Unsuccessful login with incorrect password',async ({loginForm}) => {
        
        await incorrectCredentialsActions(loginForm, correctCredentials.email, incorrectPassword.password);
    })

    test('Unsuccessful login with blank the "Email" field',async ({loginForm}) => {
        
        await blankFieldActions(loginForm, '', correctCredentials.password, loginForm.emailErrorSelector);
    })

    test('Unsuccessful login with blank the "Password" field',async ({loginForm}) => {
        
        await blankFieldActions(loginForm, correctCredentials.email, '', loginForm.passwordErrorSelector);
    })
})