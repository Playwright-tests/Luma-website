import { test } from "@playwright/test";
import { Menu } from "../../page-object/menu/menu";

export async function dropdownListSteps(menu: Menu, triggerElement: string, link: string) {
    
    await test.step(`Hover over the "${triggerElement} "link`,async () => {
                
        await menu.hover(triggerElement);
    })

    await test.step(`Click the "${link}" link`,async () => {
        
        await menu.click(link);
    })
}

export async function sublistSteps(menu: Menu, triggerElement_1: string, triggerElement_2: string, link: string) {
    
    await test.step(`Hover over the "${triggerElement_1}" trigger element`,async () => {
        
        await menu.hover(triggerElement_1);
    })

    await test.step(`Hover over the "${triggerElement_2}" trigger element`,async () => {

        await menu.hover(triggerElement_2);
    })

    await test.step(`Click the "${link}" link"`,async () => {
        
        await menu.click(link);
    })
}