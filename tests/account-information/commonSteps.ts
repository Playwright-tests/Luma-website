import { test } from "@playwright/test";
import { AccountInformation } from "../../page-object/account-information/accountInformation";

export async function inputVerificationStep(func: any, data: string, field: string) {
    
    await test.step(`Enter the "${data}" in the "${field}" field`,async () => {
        
        await func();
    })
}

export async function checkboxTestStep(accountInformation: AccountInformation, checkbox: string) {
    
    await test.step(`Check the "${checkbox}" checkbox`,async () => {
        
        checkbox === "Change Email" ? await accountInformation.clickChangeEmailCheckbox() : 
                                      await accountInformation.clickChangePasswordCheckbox();
    })
}