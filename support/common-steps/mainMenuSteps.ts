import { Menu } from "../../page-object/menu/menu";
import { allure } from "allure-playwright";

export async function dropdownListSteps(menu: Menu, triggerElement: string, link: string) {
    
    await allure.step(`Hover over the "${triggerElement} "link`,async () => {
                
        await menu.hover(triggerElement);
    })

    await allure.step(`Click the "${link}" link`,async () => {
        
        await menu.click(link);
    })
}

export async function sublistSteps(menu: Menu, triggerElement_1: string, triggerElement_2: string, link: string) {
    
    await allure.step(`Hover over the "${triggerElement_1}" trigger element`,async () => {
        
        await menu.hover(triggerElement_1);
    })

    await allure.step(`Hover over the "${triggerElement_2}" trigger element`,async () => {

        await menu.hover(triggerElement_2);
    })

    await allure.step(`Click the "${link}" link"`,async () => {
        
        await menu.click(link);
    })
}