import { Page } from "@playwright/test";
import { LoginForm } from "../page-object/login-form/loginForm";
import { URLs } from "../enums/enums";
import { getCorrectCredentials } from "../testdata-providers/testDataProviders";

export async function authentication(page: Page) {
    
    const credentials = getCorrectCredentials();

    const loginForm = new LoginForm(page);
    await loginForm.goto(URLs.LOGIN_PAGE);
    await loginForm.enterEmail(credentials.email);
    await loginForm.enterPassword(credentials.password);
    await loginForm.clickSignInButton();
}