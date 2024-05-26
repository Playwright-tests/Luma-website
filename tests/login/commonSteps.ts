import { test, expect } from "@playwright/test";
import { LoginForm } from "../../page-object/login-form/loginForm";

export async function loginSteps(loginForm: LoginForm, email: string, password: string) {
    
    await test.step(`Enter the "${email}" in the "Email" field`,async () => {
        
        await loginForm.enterEmail(email);
    })

    await test.step(`Enter the "${password}" in the "Password" field`,async () => {
        
        await loginForm.enterPassword(password);
    })

    await test.step('Click the "Sign In" button',async () => {
        
        await loginForm.clickSignInButton();
    })
}