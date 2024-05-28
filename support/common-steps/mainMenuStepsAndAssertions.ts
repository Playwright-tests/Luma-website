import { expect, Locator } from "@playwright/test";
import { Menu } from "../../page-object/menu/menu";
import { allure } from "allure-playwright";

export async function checkExpandingAndCollapsing_1(menu: Menu, link: string, listLocator: Locator) {
    
    await allure.step(`Hover over the "${link}" element`,async () => {
        
        await menu.hover(link);
    })

    await expect(listLocator).toBeVisible();

    await allure.step('Move the mouse up',async () => {
        
        await menu.page.mouse.move(0, 50);
    })

    await expect(listLocator).not.toBeVisible();
}