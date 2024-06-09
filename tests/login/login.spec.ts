import { test, expect } from "../../fixtures/login";
import { expect as NHD_expect } from "../../expect/selectorIsVisible";
import { Header } from "../../page-object/header/header";
import { getCorrectCredentials, getIncorrectCredentials } from "../../testdata-providers/testDataProviders";
import { PropertyNames, URLs } from "../../enums/enums";
import { LoginForm } from "../../page-object/login-form/loginForm";
import { inputVerificationStep } from "../../support/commonSteps";
import { loginSteps } from "../../support/common-steps/loginSteps";
import { allure } from "allure-playwright";

const correctCredentials = getCorrectCredentials();
const incorrectEmail = getIncorrectCredentials(PropertyNames.INCORRECT_EMAIL)[0];
const incorrectPassword = getIncorrectCredentials(PropertyNames.INCORRECT_PASSWORD)[0];

test.describe('Login',async () => {
    
    let expectedAlertText: string;

    test.beforeEach(async () => {
        
        await allure.owner('Paweł Aksman');
        await allure.tags('Login', 'Forms', 'Fields');
        await allure.link(URLs.LOGIN_PAGE, 'Login page');

        expectedAlertText = 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.'
    })

    async function incorrectCredentialsActions(loginForm: LoginForm, email: string, password: string) {
        
        await loginSteps(loginForm, email, password);
        await NHD_expect(loginForm.page).selectorIsVisible(loginForm.alertSelector);

        const actualMessage = await loginForm.alertLocator.textContent();

        expect(actualMessage?.trim()).toEqual(expectedAlertText);
    }

    async function blankFieldActions(loginForm: LoginForm, email: string, password: string, expectedSelector: string) {
        
        await loginSteps(loginForm, email, password);
        await NHD_expect(loginForm.page).selectorIsVisible(expectedSelector);
        expect(await loginForm.page.locator(expectedSelector).textContent()).toEqual('This is a required field.');
    }

    test('The "Email" field input verification',async ({loginForm}) => {
        
        await allure.severity('critical');
        await allure.description('Verification of the "Email" field text input');

        const email: string = 'email@domain.com';

        await inputVerificationStep(async () => {    
            await loginForm.enterEmail(email);
        }, 'Email', email)

        expect(await loginForm.getEmailFieldInput()).toEqual(email);
    })

    test('The "Password" field input verification',async ({loginForm}) => {
        
        await allure.severity('critical');
        await allure.description('Verification of the "Password" field text input');

        const password: string = 'We_44#%b';

        await inputVerificationStep(async () => {
            await loginForm.enterPassword(password);
        }, 'Password', password);

        expect(await loginForm.getPasswordFieldInput()).toEqual(password);
    })

    test('Successful login with correct credentials',async ({loginForm}) => {
        
        await allure.severity('critical');
        await allure.description('Logging in using correct credentials');

        const header = new Header(loginForm.page);

        await loginSteps(loginForm, correctCredentials.email, correctCredentials.password);
        await NHD_expect(header.page).selectorIsVisible(header.getLoggedInSelector());
    })

    test('Unsuccessful login with incorrect email',async ({loginForm}) => {
        
        await allure.severity('critical');
        await allure.description('Attempting to log in using an incorrect email');

        await incorrectCredentialsActions(loginForm, incorrectEmail.email, correctCredentials.password);
    })

    test('Unsuccessful login with incorrect password',async ({loginForm}) => {
        
        await allure.severity('critical');
        await allure.description('Attempting to log in using an incorrect password');

        await incorrectCredentialsActions(loginForm, correctCredentials.email, incorrectPassword.password);
    })

    test('Unsuccessful login with blank the "Email" field',async ({loginForm}) => {
        
        await allure.severity('normal');
        await allure.description('Attempting to log in without providing input for the "Email" field');

        await blankFieldActions(loginForm, '', correctCredentials.password, loginForm.emailErrorSelector);
    })

    test('Unsuccessful login with blank the "Password" field',async ({loginForm}) => {
        
        await allure.severity('normal');
        await allure.description('Attempting to log in without providing input for the "Password" field');

        await blankFieldActions(loginForm, correctCredentials.email, '', loginForm.passwordErrorSelector);
    })
})