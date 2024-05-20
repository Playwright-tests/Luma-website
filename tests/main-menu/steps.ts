import { test } from "@playwright/test";
import { MainMenu } from "../../page-object/main-menu/mainMenu";

export async function dropdownListSteps(mainMenu: MainMenu, triggerElement: string, link: string) {
    
    await test.step('Hover over the "' + triggerElement + '" link',async () => {
                
        await mainMenu.getPage().getByRole('menuitem', {name: triggerElement}).hover();
    })

    await test.step('Click the "' + link + '" link',async () => {
        
        await mainMenu.getPage().getByRole('menuitem', {name: link}).click();
    })

}

export async function sublistSteps(mainMenu: MainMenu, triggerElement_1: string, triggerElement_2: string, link: string) {
    
    await test.step('Hover over the "' + triggerElement_1 + '" trigger element',async () => {
        
        await mainMenu.getPage().getByRole('menuitem', {name: triggerElement_1}).hover();
    })

    await test.step('Hover over the "' + triggerElement_2 + '" trigger element',async () => {

        await mainMenu.getPage().getByRole('menuitem', {name: triggerElement_2}).hover();
    })

    await test.step('Click the "' + link + '" link"',async () => {
        
        await mainMenu.getPage().getByRole('menuitem', {name: link}).click();
    })
}