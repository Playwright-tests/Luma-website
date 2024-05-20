import { test as base } from "@playwright/test";
import { Menu } from "../page-object/menu/menu"; 
import { URLs } from "../enums/enums"

export { expect } from "@playwright/test";


export const test = base.extend<{menu: Menu}>({

    menu:async ({page}, use) => {
        
        const menu = new Menu(page);
        
        await menu.goto(URLs.HOME_PAGE);
        await use(menu);
    }
})