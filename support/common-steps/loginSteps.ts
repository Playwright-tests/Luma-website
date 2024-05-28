import { LoginForm } from "../../page-object/login-form/loginForm";
import { allure } from "allure-playwright";

export async function loginSteps(loginForm: LoginForm, email: string, password: string) {
    
    await allure.step(`Enter the "${email}" in the "Email" field`,async () => {
        
        await loginForm.enterEmail(email);
    })

    await allure.step(`Enter the "${password}" in the "Password" field`,async () => {
        
        await loginForm.enterPassword(password);
    })

    await allure.step('Click the "Sign In" button',async () => {
        
        await loginForm.clickSignInButton();
    })
}