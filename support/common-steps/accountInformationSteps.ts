import { allure } from "allure-playwright";
import { AccountInformation } from "../../page-object/account-information/accountInformation";
import { takeScreenshot } from "../allure";

export async function checkboxTestStep(accountInformation: AccountInformation, checkbox: string) {
    
    await allure.step(`Check the "${checkbox}" checkbox`,async () => {
        
        checkbox === 'Change Email' ? await takeScreenshot('changeEmailField', accountInformation.changeEmailCheckboxLocator) :
                                      await takeScreenshot('changePasswordField', accountInformation.changePasswordCheckboxLocator);

        checkbox === "Change Email" ? await accountInformation.clickChangeEmailCheckbox() : 
                                      await accountInformation.clickChangePasswordCheckbox();
    })
}