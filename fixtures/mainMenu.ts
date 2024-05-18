import { test as base } from "@playwright/test";
import { MainMenu } from "../page-object/main-menu/mainMenu"; 
import { URLs } from "../enums/enums"

export { expect } from "@playwright/test";


export const test = base.extend<{mainMenu: MainMenu}>({

    mainMenu:async ({page}, use) => {
        
        const mainMenu = new MainMenu(page);
        
        await mainMenu.goto(URLs.HOME_PAGE);
        await use(mainMenu);
    }
})