import { allure } from "allure-playwright";
import { AccountInformation } from "../../page-object/account-information/accountInformation";

export async function checkboxTestStep(accountInformation: AccountInformation, checkbox: string) {
    
    await allure.step(`Check the "${checkbox}" checkbox`,async () => {
        
        checkbox === "Change Email" ? await accountInformation.clickChangeEmailCheckbox() : 
                                      await accountInformation.clickChangePasswordCheckbox();
    })
}