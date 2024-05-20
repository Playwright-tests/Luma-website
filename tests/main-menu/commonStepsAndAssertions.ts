import { test, expect, Locator } from "@playwright/test";
import { Menu } from "../../page-object/menu/menu";

export async function checkExpandingAndCollapsing_1(menu: Menu, link: string, listLocator: Locator) {
    
    await test.step(`Hover over the "${link}" element`,async () => {
        
        await menu.hover(link);
    })

    await expect(listLocator).toBeVisible();

    await test.step('Move the mouse up',async () => {
        
        await menu.getPage().mouse.move(0, 50);
    })

    await expect(listLocator).not.toBeVisible();
}