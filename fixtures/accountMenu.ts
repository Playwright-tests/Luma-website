import { test as base } from "@playwright/test";
import { AccountMenu } from "../page-object/account-menu/accountMenu";
import { authentication } from "../support/authentication";

export { expect } from "@playwright/test";

export const test = base.extend<{accountMenu: AccountMenu}>({

    accountMenu:async ({page}, use) => {
        
        const accountMenu = new AccountMenu(page);

        await authentication(page);
        await use(accountMenu);
    }
})