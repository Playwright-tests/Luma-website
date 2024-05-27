import { test } from "@playwright/test";
import { SearchEngine } from "../../page-object/search-engine/searchEngine";

export async function searchProductSteps(searchEngine: SearchEngine, phrase: string) {
    
    await test.step(`Enter the "${phrase}" phrase`,async () => {
        
        await searchEngine.enterPhrase(phrase);
    })

    await test.step('Press the ENTER key',async () => {
        
        await searchEngine.page.keyboard.press('Enter');
    })

}