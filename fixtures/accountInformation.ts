import { test as base } from "@playwright/test";
import { AccountInformation } from "../page-object/account-information/accountInformation";
import { authentication } from "../support/authentication";
import { URLs } from "../enums/enums";

export { expect } from "@playwright/test";

export const test = base.extend<{checkbox: string} & {accountInformation: AccountInformation} & {dynamicForm: AccountInformation}>({

    checkbox: ['Change Email', {option: true}],

    accountInformation:async ({page}, use) => {
        
        const accountInformation = new AccountInformation(page);

        await authentication(page);
        await accountInformation.goto(URLs.ACCOUNT_INFORMATION);
        await use(accountInformation);
    },

    dynamicForm:async ({page, checkbox}, use) => {
        
        const dynamicForm = new AccountInformation(page);

        await authentication(page);
        await dynamicForm.goto(URLs.ACCOUNT_INFORMATION);
        
        checkbox === 'Change Email' ? await dynamicForm.clickChangeEmailCheckbox() :
                                      await dynamicForm.clickChangePasswordCheckbox();
        await use(dynamicForm);
    }
})